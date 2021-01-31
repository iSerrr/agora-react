export default (name, arr) => {
    const selectedCategories = arr.categories
    return selectedCategories
        .map(item => item.name === name ? item.styles : null)
        .filter(item => item)[0]
        .map(item => [item, arr.style[item] ? arr.style[item] : 0])
}