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

function swap(a,b){
    let c;
    c = a;
    a = b;
    b = c;
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

PrintRule(cube);
document.write("次に色をかき混ぜます。<br>");
function upspin(a){
    let i;
    let b;
    b=new array(5);
    b[0]=new array(2);//上
    b[1]=new array(1);//側面 上
    b[2]=new array(2);//側面 右
    b[3]=new array(1);//側面 下
    b[4]=new array(2);//下

    b[0][0] = a[0][1];
    b[0][1] = a[0][2];
    
    b[1][0] = a[0][1];
    
    b[2][0] = a[0][0];
    b[2][1] = a[0][1];
    
    b[3][0] = a[0][0];
    
    b[4][0] = a[0][1];
    b[4][1] = a[0][2];
    
    swap(b[2][0],b[2][1]);
    swap(b[1][0],b[3][0]);
    swap(b[2][0],b[2][1]);
}
