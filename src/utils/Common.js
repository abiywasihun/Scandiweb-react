const getTotalPrice = (basket, currency) => {
    var temp = 0
    basket.map((item) => {
        const prices = getProductPrice(item.prices, currency)
        temp += prices.price
    })
    return temp

}
const getDuplicate = (basket) => {
    const result = Object.values(basket.reduce((r, e) => {
        let k = `${e.id}`;
        if (!r[k]) r[k] = {...e, count: 1 }
        else r[k].count += 1;
        return r;
    }, {}))
    return (result)
}
const calculateTax = (price) => {
    console.log(price * 0.21)
    return (parseFloat(price) * (0.21))
}
const getProductPrice = (price, currency) => {
    var temp = []
    price.map((item) => {
        if (item.currency.label === currency.label) {
            temp = {
                price: item.amount,
                currency: item.currency.symbol
            }
        }
    })
    return temp
}
export { getTotalPrice, getDuplicate, calculateTax, getProductPrice }