import { useLayoutEffect } from "react";
interface IOptions {
    heightPx: number,
    isDownHidden?: boolean
}
const useScrollTransition = (
    transitionComponentCssQuery: string,
    scrollComponentCssQuery: string,
    options: IOptions
) => {
    useLayoutEffect(() => {
        let scrollTop = 0;
        let ticking = false;
        const transitionComponent = document.querySelector(transitionComponentCssQuery) as HTMLElement;
        const scrollComponent = document.querySelector(scrollComponentCssQuery) as HTMLElement;
        const isDownHidden = options.isDownHidden === null ? true : options.isDownHidden;

        function handleOnScroll() {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    ticking = false;
                    if (scrollComponent.scrollTop > scrollTop) {
                        // 下滑操作
                        if (isDownHidden) {
                            handleHidden(transitionComponent, options);
                        } else {
                            handleShow(transitionComponent, options);
                        }
                    } else {
                        // 上拉操作
                        if (!isDownHidden) {
                            handleHidden(transitionComponent, options);
                        } else {
                            handleShow(transitionComponent, options);
                        }
                    }
                    scrollTop = scrollComponent.scrollTop;
                });

                ticking = true;
            }
        }
        function handleTransitionEnd() {
            if (transitionComponent.style.visibility === 'visible') {
                transitionComponent.style.overflow = '';
            }
        }

        scrollComponent.addEventListener('scroll', handleOnScroll);
        transitionComponent.addEventListener('transitionend', handleTransitionEnd);
        return () => {
            scrollComponent.removeEventListener('scroll', handleOnScroll);
            transitionComponent.removeEventListener('transitionend', handleTransitionEnd);
        }
    }, []);
}
function handleHidden(transitionComponent: HTMLElement, options: IOptions) {
    transitionComponent.style.visibility = 'hidden';
    transitionComponent.style.overflow = 'hidden';
    transitionComponent.style.height = '0px';
}
function handleShow(transitionComponent: HTMLElement, options: IOptions) {
    transitionComponent.style.visibility = 'visible';
    transitionComponent.style.height = options.heightPx + 'px';
}
export default useScrollTransition;