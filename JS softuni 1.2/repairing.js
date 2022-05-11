function repairing(input) {
    let naylon=Number(input[0]);
    let paint=Number(input[1]);
    let thinner=Number(input[2]);
    let hours=Number(input[3]);

    let totalNaylon=(naylon+2)*1.50;
    let totalPaint=(paint+1.1)*14.50;
    let totalThinner=thinner*5;
    let bagPrice=0.40;

    let totalFotMaterials= totalNaylon+totalPaint+ totalThinner+bagPrice;
    let totalForWorkers=(totalFotMaterials*0.30)*hours;
    let totalMoney=totalForWorkers+totalFotMaterials;

    console.log(totalMoney);
}


repairing([10,11,4,8])