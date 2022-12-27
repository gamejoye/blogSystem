export const transform = nodes => {
    let data = "";
    let preNodeName = null;
    nodes.forEach(node => {
        const nodeName = node.nodeName;
        if(nodeName === 'IMG') console.log(node)
        if(nodeName === '#text') {
            if(preNodeName !== null) data = data.concat('\n');
            data = data.concat(node.data);
        } else {
            const display = window.getComputedStyle(node).display;
            if(display !== 'inline') data = data.concat('\n');
            if(nodeName === 'IMG') data = data.concat(`![](${node.src})`);
            data = data.concat(transform(node.childNodes));
        }
        preNodeName = node.nodeName;
    })
    return data;
}

export const handleRemovePrompt = (dom) => {
    document.getElementById("root").style.filter = 'brightness(1)';
    dom.style.display = 'none';
}

export const handleShowPrompt = (dom) => {
    document.getElementById("root").style.filter = 'brightness(0.5)';
    dom.style.display = 'block';
}