const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
}
const observer = new IntersectionObserver((entries, element) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const src = target.getAttribute('data-src');
            target.removeAttribute('data-src');
            element.unobserve(target);
            const img = new Image();
            img.src = src;
            img.onload = () => {
                target.classList.remove('img-loading')
                target.classList.add('img-loaded');
                target.setAttribute('src', src);
            }
        }
    })
}, options);
const lazyMarkdownImg = () => {
    const imgs = document.querySelectorAll('img[data-src]');
    imgs.forEach(img => {
        observer.observe(img);
    })
    return imgs;
}
export default lazyMarkdownImg;