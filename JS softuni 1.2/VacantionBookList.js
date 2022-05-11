function bookList(input) {

   let bookPages=Number(input[0]);
   let pages=Number(input[1]);
   let days=Number(input[2]);
   let sum=bookPages/pages;
   let neededHours=sum/days;
   console.log(neededHours);

}
bookList(["212","20","2"])