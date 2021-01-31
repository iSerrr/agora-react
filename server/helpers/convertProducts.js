//! ---< Edit structure in product >---
export default (arr) => {
    return arr.map(product => (
        {
            ...product,
            colors: product.options.colors,
            sizes: product.options.sizes,
        }
    ))
}