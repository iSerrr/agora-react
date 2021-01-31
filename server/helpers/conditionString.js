//! ---< String helper for filter >---
export default (arg, con) => {
    if (arg.length === 0) return true
    if (typeof con === 'string') return con.includes(arg)
    return con.map(item => arg.includes(item))
        .includes(true)
}