import { useEffect } from "react";

interface IInterSection {
    dom: HTMLElement | undefined;
    onIntersect: IntersectionObserverCallback;
    threshold?: number;
    rootMargin?: string
}

const useIntersectionObserver = ({
    dom,
    onIntersect,
    threshold = 0.05,
    rootMargin = '0px'
}: IInterSection) => {
    useEffect(() => {
        const observer = new IntersectionObserver(onIntersect, {
            rootMargin,
            threshold
        });
        if(dom) observer.observe(dom);
        return () => {
            if(dom) observer.unobserve(dom);
        }
    })
}
export default useIntersectionObserver;