function swap(a,c,e,b,d,f){
    let aa=a[c][e];
    a[c][e] =b[d][f];
    b[d][f]= aa;
}
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
cube[0] = new Array(4) //上面(1.左上,2.右上,3.右下,4.左下)
cube[1] = new Array(2) //側面1 上(左から1,2)
cube[2] = new Array(2) //側面2 右(上から1,2)
cube[3] = new Array(2) //側面3 下(右から1,2)
cube[4] = new Array(2) //側面4 左(下から1,2)
cube[5] = new Array(4) //下面  上面を基準に(1.左上,2.右上,3.右下,4.左下)

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

//PrintRule(cube);
document.write("左下(4)を固定して,次に色をかき混ぜます。左右どちらに回しても結果の面は同じになります。上下に回す場合も同様です。<br>");
function upspin(a){
    swap(a,2,0,a,2,1);
    swap(a,1,1,a,3,0);
    swap(a,0,1,a,5,2);
    swap(a,0,2,a,5,1);
}
/*上面を1から0方面に回す*/
function leftspin(a){
    swap(a,0,0,a,5,1);
    swap(a,0,1,a,5,0);
    swap(a,1,0,a,1,1);
    swap(a,2,0,a,4,1);
}
document.write("<br>表示を展開図にする。");
function diaRule(a){
    document.write(a[1][0]);
    document.write(a[1][1]+"<br>");
    
    document.write(a[4][1]);
    document.write(a[0][0]);
    document.write(a[0][1]);
    document.write(a[2][0]+"<br>");
    
    document.write(a[4][0]);
    document.write(a[0][3]);
    document.write(a[0][2]);
    document.write(a[2][1]+"<br>");
    
    document.write(a[3][1]);
    document.write(a[3][0]+"<br>");
    
    document.write(a[5][3]);
    document.write(a[5][2]+"<br>");
    
    document.write(a[5][0]);
    document.write(a[5][1]+"<br>");
}
document.write("<br>");
diaRule(cube);

document.write("<br>色の組み合わせを調べます。既出の組み合わせか検討しながら探索させます。");
/*
upspin(cube);
leftspin(cube);
diaRule(cube);
*/
document.write("<br>試行回数異なる面が四つ求められたら停止します。");

let kk=0;
let res_cube= new Array(4);

for(kk=0;kk<15;kk++) {
    res_cube[1][kk]=8;
}

