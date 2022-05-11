function petshop (input){
    let dogs = Number(input.shift());
    let animals = Number(input.shift());
    let sum = (dogs * 2.50 + animals * 4)
    console.log(sum.toFixed(2) + " " + "lv.");
    }
petShop([5,4])