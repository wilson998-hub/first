function Myfunction (v){
    let h= new Array();
    let z= v.split(" "); 
  console.log (z);
  console.log(z.length);
  for (i = 0; i < z.length; i++) { 
    if (Number.isInteger(Number(z[i]))) {
        h.push(z[i]);
    } 
    else if (z[i] === "D") {
        h.push(h[h.length - 1]);
    } 
    else if (z[i] === "+") {
       let sum2 = Number(h[h.length - 1]) + Number(h[h.length - 2]);
       h.splice(-2,2);
       h.push(sum2);
    } 
    else if (z[i] === "-") {
        let minus2 = Number(h[h.length - 1]) - Number(h[h.length - 2]);
        h.splice(-2,2);
        h.push(minus2);
    } 
  }
    return h[h.length - 1]
};
let result = Myfunction(1234)
console.log(result)