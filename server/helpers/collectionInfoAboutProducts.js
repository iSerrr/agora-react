import convertProducts from './convertProducts'

//! ---< Processing and collection of information about products >---
export default (arr, ...options) => {

    let res = {}
    options.forEach(item => res = {...res, [item]: {}})

    for (let key in res) {
        convertProducts(arr).forEach(item => {
            if (!item[key]) return
            if (Object.keys(res[key]).length === 0) {
                if (typeof item[key] === 'string') return res[key] = {...res[key], [item[key]]: 1}
                return item[key].forEach(subItem => (res[key] = {...res[key], [subItem]: 1}))
            }

            for (let keyJ in res[key]) {
                if (typeof item[key] === 'string') {
                    if (item[key] === keyJ) return res[key][keyJ] += 1
                    res[key] = {...res[key], [item[key]]: 1}
                } else {
                    item[key].forEach(subItem => {
                        if (subItem === keyJ) {
                            res[key][keyJ] += 1
                            return
                        }
                        res[key] = {...res[key], [subItem]: res[key][subItem] > 0 ? res[key][subItem] : 1}
                    })
                }
            }
        })
    }
    return res
}