let cp =[ new Array(2),new Array(2)];//パズル定義
let res =[[ new Array(2),new Array(2)],
          [ new Array(2),new Array(2)],
          [ new Array(2),new Array(2)],
          [ new Array(2),new Array(2)],
          [ new Array(2),new Array(2)]];//履歴定義
let i;
let j;
let k;
let pack;
document.write("初期配置を出力します。");

for(i=0;i<5;i++){
    for(j=0;j<2;j++){
        for(k=0;k<2;k++){
            res[i][j][k]=0;
        }
    }
}

for( i=0;i<2;i++){
    for( j=0;j<2;j++){
        cp[i][j]=j+1;
    }
}

for(i=0;i<5;i++){
    for(j=0;j<2;j++){
        for(k=0;k<2;k++){
            //document.write("<br>res["+i+"]["+j+"]["+k+"]="+res[i][j][k]);
        }
    }
}

for( i=0;i<2;i++){
    for( j=0;j<2;j++){
        //document.write("<br>cp["+i+"]["+j+"]="+cp[i][j]);
    }
}
document.write("<br>次に色の組み替えを行う。");
document.write("<br>試行回数と,一面を固定して,色の配置を記録する。");

for(i=0;i<5;i++){
    
    if(cp[0][1]==cp[1][1]){
        document.write("<br>"+(i)+"回目一致");
    }
    
    pack=cp[0][0];
    cp[0][0]=cp[0][1]
    cp[0][1]=pack;

    for(j=0;j<2;j++){
        for(k=0;k<2;k++){
            res[i][j][k]=cp[j][k];
        }
    }
}

document.write("<br>次に色の比較を行う。");
document.write("<br>既出の配置を除外する。");

for(i=0;i<5;i++){
    for(j=0;j<5;j++){
        for(k=0;k<2;k++){
            if((i<j)&&(res[i][0][0]==res[j][1][0])){
                res[j]="既出"
            }
        }
    }
}
for(i=0;i<5;i++){
    if(res[i]=="既出"){
        
    } else{
        for(j=0;j<2;j++){
            for(k=0;k<2;k++){
                document.write("<br>res["+i+"]["+j+"]["+k+"]="+res[i][j][k]);
                
            }
            
        }
        
    }
    document.write("<br>");
    
}
