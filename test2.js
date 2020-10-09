document.write("読み込み用ファイル2つ目(forn文とif文の確認)<br>");
let d = new Array(5);
for(let l =0;l<5;l++){
    d[l]=l*l*l;
    if(d[l]>9){
        document.write(l+"番目"+"d="+d[l]+"<br>");
    }else{
        document.write(l+"番目"+"<br>");
    }
    
}

