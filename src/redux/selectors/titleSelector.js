export const selectTitles = state => {
    return state.blogsState.blogs.map(blog => blog.title);
}
export const selectTitlesByTag = (state, tag) => {
    const titles = [];
    state.blogsState.blogs.forEach(blog => {
        if (blog.tags.includes(tag)) titles.push(blog.title);
    })
    return titles;
}