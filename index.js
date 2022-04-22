const usDollar = 10
const thaiBaht = 33.96

function converted(usDollar, thaiBaht){
    return usDollar * thaiBaht
}

let result = converted(usDollar, thaiBaht)

console.log(usDollar + ' in USD is ' + result + ' Thai Bhat')
