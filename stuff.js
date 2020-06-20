var count=function count(arr){
    return "The no of elements in the array are :"+arr.length;
}
//module.exports=count;//This line makes the count module accesible to all the other files
var adder=function adder(a,b){
    return "The sum of elements is :"+(a+b);
}
var pi=3.14;
module.exports={
    count:count,
    adder:adder,
    pi:pi
}
