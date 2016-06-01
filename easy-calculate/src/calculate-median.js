function calculate_median(arr) {
  var num;
    var arr1 = arr.sort(compare);
    if(arr1.length%2 == 1){
    	num = arr1[parseInt(arr1.length/2)];
    }else{
    	num = (arr1[parseInt(arr1.length/2-1)]+arr1[parseInt(arr1.length/2)])/2;
    }
    return num;
}
function compare(value1, value2) {

   if (value1 < value2) {
       return -1;
   } else if (value1 > value2) {
       return 1;
   } else {
       return 0;
   }
} 
module.exports = calculate_median;
