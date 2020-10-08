document.write("<br>");
let a=5;
document.write("a="+a+"<br>");
for (let i = 0 ; i < 5 ; i++){
    document.write(i);
  }
document.write("<br>");
document.write("配列の定義を検証する<br>");
let b=[1,2,3];
document.write("b[2]="+b[2]);
document.write("<br>");
document.write("多次元配列の検証として2次元配列を定義する。<br>");

let c=[[1,2],[3,4]];

for (let j = 0 ; j < 2 ; j++){
    for (let k = 0 ; k < 2 ; k++){
        c[j][k]=j*j+k*2;
    }
}

for ( j = 0 ; j < 2 ; j++){
    for (k = 0 ; k < 2 ; k++){
        document.write("c["+j+"]["+k+"]="+c[j][k]+"<br>");
    }
}
document.write("<br>")
