let sumAndProductOfArray = (myArray2) => {
    let arraySum = myArray2.reduce((sum, num) => sum + num);
    let arrayProduct = myArray2.reduce((product = 1,num) => product * num);
    console.log(arrayProduct, arraySum);
}
export{sumAndProductOfArray};