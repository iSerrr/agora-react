import {sortBy, reverse} from 'lodash'

export default (array, condition) => {

    switch (condition) {
        case 'Price $-$$':
            return sortBy(array, 'price')
        case 'Price $$-$':
            return reverse(sortBy(array, 'price'))
        case 'Brand A-Z':
            return sortBy(array, 'brand')
        case 'Brand Z-A':
            return reverse(sortBy(array, 'brand'))
        default:
            console.log('default')
    }
}