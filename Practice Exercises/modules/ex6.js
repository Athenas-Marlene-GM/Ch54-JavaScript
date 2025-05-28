const bubbleSort = ( arr ) => {

    for(let i = 1; i < arr.length; i++ ){
        for( let j = 0; j < arr.length - i; j++ ){
            if( arr[j] > arr[j + 1] ){
                arr.splice(j,2, arr[j + 1], arr[j]);
            }
        }  
    }
    return arr;
    
}
export{bubbleSort};