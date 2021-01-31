export default (type) => {
    switch (type) {
        case 'size':
            return {
                title: 'Size',
                fewOption: true,
                required: false,
                defaultValue: []
            }
        case 'color':
            return {
                title: 'Color',
                fewOption: true,
                required: false,
                defaultValue: []
            }
        case 'style':
            return {
                title: 'Categories',
                fewOption: true,
                required: false,
                defaultValue: []
            }
        case 'price':
            return {
                title: 'Price',
                fewOption: false,
                required: true,
                defaultValue: [0, 500]
            }
        default:
            console.log('Error')
    }
}