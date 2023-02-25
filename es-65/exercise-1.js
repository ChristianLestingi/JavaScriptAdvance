function sum(...num) {
    return num.reduce((pre,curr)=> pre + curr)
}


console.log(sum(1,2,3,4,5));