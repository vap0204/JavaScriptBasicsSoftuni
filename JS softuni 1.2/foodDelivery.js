function foodDeivery(input) {

    let chickenMenu=Number(input[0]);
    let fishMenu=Number(input[1]);
    let vegMenu=Number(input[2]);

    let chickenMenuPrice=chickenMenu*10.35;
    let fishMenuPrice=fishMenu*12.40;
    let vegMenuPrice=vegMenu*8.15;
    let fullPrice=chickenMenuPrice+fishMenuPrice+vegMenuPrice;
    let dessertPrice=fullPrice*0.20;
    let finalPrice=fullPrice+dessertPrice+2.50;

    console.log(finalPrice);
}

foodDeivery([2,4,3]);