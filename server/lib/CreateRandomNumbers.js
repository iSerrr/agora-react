const randomNumberArray = (max = 0, quantity) => {
    if (typeof max !== "number" || typeof quantity !== "number") {
        console.log('function randomNumberArray finished with error')
        return
    }
    let res = [];
    while (res.length < quantity) {
        let num = Math.floor(Math.random() * Math.floor(max));

        if (!res.includes(num)) res = [...res, num];
    }
    return res;
};

export default randomNumberArray