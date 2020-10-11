function InitRule(a){
    let i;
    let j;
    let k;
    for(i=0;i<6;i++){
        if(i==0||i==5){
            for(j=0;j<4;j++){
                a[i][j]=i;
            }
        } else {
            for(j=0;j<2;j++){
                a[i][j]=i;
            }
        }
    }
}

let cube=new Array(6)
cube[0] = new Array(4) //上面
cube[1] = new Array(2) //側面1
cube[2] = new Array(2) //側面2
cube[3] = new Array(2) //側面3
cube[4] = new Array(2) //側面4
cube[5] = new Array(4) //下面

InitRule(cube);
document.write("<br>");
document.write("初期配置を示します。<br>");
function PrintRule(a){
    for(let i=0;i<a.length;i++){
        for(let j=0;j<a[i].length;j++){
            document.write(a[i][j]);
        }
        document.write("<br>");
    }
}

PrintRule(cube);
document.write("次に色をかき混ぜます。<br>");
