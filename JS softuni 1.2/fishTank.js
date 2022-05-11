function fishTank(input) {

    let length=Number(input[0]);
    let width=Number(input[1]);
    let height=Number(input[2]);
    let percent=Number(input[3]);

    let v=length*width*height;
    let vInl=v/1000;
  
    let finalResult=vInl*(1-(percent/100));
    console.log(finalResult);
}