export const transformBlog = nodes => {
    let data = "";
    let preNodeName = null;
    nodes.forEach(node => {
        const nodeName = node.nodeName;
        if(nodeName === '#text') {
            if(preNodeName !== null) data = data.concat('\n');
            data = data.concat(node.data);
        } else {
            const display = window.getComputedStyle(node).display;
            if(display !== 'inline') data = data.concat('\n');
            if(nodeName === 'IMG') data = data.concat(`![${node.naturalWidth}-${node.naturalHeight}](${node.src})`);
            data = data.concat(transformBlog(node.childNodes));
        }
        preNodeName = node.nodeName;
    })
    return data;
}