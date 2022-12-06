export const transform = nodes => {
    let data = "";
    let preNodeName = null;
    for(let node of nodes) {
        if(node.nodeName === '#text') {
            if(preNodeName !== null) data = data.concat('\n');
            data = data.concat(node.data);
        } else if(node.nodeName === 'DIV' || node.nodeName === 'P') {
            data = data.concat('\n').concat(transform(node.childNodes));
        } else if(node.nodeName === 'IMG') {
            const url = node.src;
            data = data.concat('\n').concat(`![](${url})`);
        } 
        preNodeName = node.nodeName;
    }
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