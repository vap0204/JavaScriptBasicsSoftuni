function greeingYards(input) {
    let metres=Number(input[0])
    let price=metres*7.61;
    let discount=price*0.18;
    let priceWithDis=price-discount;
    console.log(`The final price is ${priceWithDis} lv.`)
    console.log(`The discount is ${discount} lv.`)
}
greeingYards([150])