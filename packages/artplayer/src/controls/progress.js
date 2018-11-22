import { append, clamp, secondToTime, setStyle, getStyle } from '../utils';

export function getPosFromEvent(art, event) {
    const {
        refs: { $progress },
        player,
    } = art;
    const { left } = $progress.getBoundingClientRect();
    const width = clamp(event.x - left, 0, $progress.clientWidth);
    const second = (width / $progress.clientWidth) * player.duration;
    const time = secondToTime(second);
    const percentage = clamp(width / $progress.clientWidth, 0, 1);
    return { second, time, width, percentage };
}

export default function progress(controlOption) {
    return art => {
        const {
            option: { highlight, theme },
            events: { proxy },
            player,
        } = art;
        return {
            ...controlOption,
            html: `
                <div class="art-control-progress-inner">
                    <div class="art-progress-loaded"></div>
                    <div class="art-progress-played" style="background: ${theme}"></div>
                    <div class="art-progress-highlight"></div>
                    <div class="art-progress-indicator" style="background: ${theme}"></div>
                    <div class="art-progress-tip art-tip"></div>
                </div>
            `,
            mounted: $control => {
                let isDroging = false;
                const $loaded = $control.querySelector('.art-progress-loaded');
                const $played = $control.querySelector('.art-progress-played');
                const $highlight = $control.querySelector('.art-progress-highlight');
                const $indicator = $control.querySelector('.art-progress-indicator');
                const $tip = $control.querySelector('.art-progress-tip');

                function showHighlight(event) {
                    const { text, time } = event.target.dataset;
                    $tip.innerHTML = text;
                    const left =
                        (Number(time) / art.player.duration) * $control.clientWidth +
                        event.target.clientWidth / 2 -
                        $tip.clientWidth / 2;
                    setStyle($tip, 'left', `${left}px`);
                }

                function showTime(event) {
                    const { width, time } = getPosFromEvent(art, event);
                    const tipWidth = $tip.clientWidth;
                    $tip.innerHTML = time;
                    if (width <= tipWidth / 2) {
                        setStyle($tip, 'left', 0);
                    } else if (width > $control.clientWidth - tipWidth / 2) {
                        setStyle($tip, 'left', `${$control.clientWidth - tipWidth}px`);
                    } else {
                        setStyle($tip, 'left', `${width - tipWidth / 2}px`);
                    }
                }

                function setBar(type, percentage) {
                    if (type === 'loaded') {
                        setStyle($loaded, 'width', `${percentage * 100}%`);
                    }

                    if (type === 'played') {
                        setStyle($played, 'width', `${percentage * 100}%`);
                        setStyle(
                            $indicator,
                            'left',
                            `calc(${percentage * 100}% - ${getStyle($indicator, 'width') / 2}px)`,
                        );
                    }
                }

                highlight.forEach(item => {
                    const left = (clamp(item.time, 0, player.duration) / player.duration) * 100;
                    append(
                        $highlight,
                        `<span data-text="${item.text}" data-time="${item.time}" style="left: ${left}%"></span>`,
                    );
                });

                setBar('loaded', player.loaded);

                art.on('video:progress', () => {
                    setBar('loaded', player.loaded);
                });

                art.on('video:timeupdate', () => {
                    setBar('played', player.played);
                });

                art.on('video:ended', () => {
                    setBar('played', 1);
                });

                proxy($control, 'mousemove', event => {
                    setStyle($tip, 'display', 'block');
                    if (event.composedPath().indexOf($highlight) > -1) {
                        showHighlight(event);
                    } else {
                        showTime(event);
                    }
                });

                proxy($control, 'mouseout', () => {
                    setStyle($tip, 'display', 'none');
                });

                proxy($control, 'click', event => {
                    if (event.target !== $indicator) {
                        const { second, percentage } = getPosFromEvent(art, event);
                        setBar('played', percentage);
                        player.seek(second);
                    }
                });

                proxy($indicator, 'mousedown', () => {
                    isDroging = true;
                });

                proxy(document, 'mousemove', event => {
                    if (isDroging) {
                        const { second, percentage } = getPosFromEvent(art, event);
                        $indicator.classList.add('art-show-indicator');
                        setBar('played', percentage);
                        player.seek(second);
                    }
                });

                proxy(document, 'mouseup', () => {
                    if (isDroging) {
                        isDroging = false;
                        $indicator.classList.remove('art-show-indicator');
                    }
                });
            },
        };
    };
}
