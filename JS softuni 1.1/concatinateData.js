function concatinateData(input){
    let firstName=input[0];
    let lastName=input[1];
    let age=Number(input[2]);
    let town=input[3];
    console.log("You are "+firstName+" "+lastName +", a "+age+"-years old years peron from "+town+".")
}
concatinateData(["Maria","Ivanova",20,"Sofia"])