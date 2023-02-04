function speedInfo(input){
    let number=Number(input[0]);
    if(number<=10){
        console.log("slow");
    }
    if(number>10 && number<=50){
        console.log("average");
    }
    if(number>50 && number<=150){
        console.log("fast");
    }
    if(number>150 && number<=1000){
        console.log("ultra fast");
    }
    if(number>1000){
        console.log("extremely fast");
    }
}