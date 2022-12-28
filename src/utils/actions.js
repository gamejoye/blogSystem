export const handleRemovePrompt = (dom) => {
    document.getElementById("root").style.filter = 'brightness(1)';
    dom.style.display = 'none';
}

export const handleShowPrompt = (dom) => {
    document.getElementById("root").style.filter = 'brightness(0.5)';
    dom.style.display = 'block';
}