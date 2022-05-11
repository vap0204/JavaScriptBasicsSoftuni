function basketball(input) {
    let taxPerYear=Number(input[0]);
    let snickersPrice=taxPerYear*0.60;
    let kitPrice=snickersPrice*0.80;
    let ballPrice=kitPrice/4;
    let acessoars=ballPrice/5;
    let sum=taxPerYear+snickersPrice+kitPrice+ballPrice+acessoars;

    console.log(sum)
}
basketball([365]);