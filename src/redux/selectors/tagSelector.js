export const selectTags = state => {
    const tags = [];
    state.blogsState.blogs.forEach(blog => blog.tags.forEach(tag => {
        if(!tags.includes(tag)) tags.push(tag);
    }))
    return tags;
}