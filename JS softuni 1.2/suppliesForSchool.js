function schoolSupplies(input) {

    let pens=Number(input[0]);
    let markers=Number(input[1]);
    let litres=Number(input[2]);
    let discount=Number(input[3]);
     
    let pricePens=pens*5.80;
    let priceMarkers=markers*7.20;
    let priceLitres=litres*1.20;
    let sum=pricePens+priceMarkers+priceLitres;
    let moneyAfterDis=sum-(sum*(discount/100))
    console.log(moneyAfterDis);
}
schoolSupplies(["2","3","4","25"])