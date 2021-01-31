export default (array, page, quantity = 9) => {
    const end = page * quantity
    const start = end - (quantity)
    console.log(start + ' ' + end)
    return array.slice(start, end)
}