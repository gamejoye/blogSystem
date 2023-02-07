export const transformBlog = (nodes: NodeListOf<ChildNode> | undefined) => {
    if(!nodes) return "";
    let data = "";
    let preNodeName: string | null = null;
    nodes.forEach(node => {
        const nodeName = node.nodeName;
        if(nodeName === '#text') {
            if(preNodeName !== null) data = data.concat('\n');
            data = data.concat((node as Text).data);
        } else {
            const display = window.getComputedStyle(node as HTMLElement).display;
            if(display !== 'inline') {
                data = data.concat('\n');
            }
            if(node.nodeName === 'IMG') {
                data = data.concat(`![${(node as HTMLImageElement).naturalWidth}-${(node as HTMLImageElement).naturalHeight}](${(node as HTMLImageElement).src})`);
            }
            data = data.concat(transformBlog(node.childNodes));
        }
        preNodeName = node.nodeName;
    })
    return data;
}