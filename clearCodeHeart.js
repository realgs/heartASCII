if (process.argv.length <= 5) {
    console.log("Usage: " + __filename + " too few input parameters.");
    process.exit(-1);
}
var width = process.argv[2];
var topH = process.argv[3];
var midH = process.argv[4];
var bottH = process.argv[5];

var heartInit = Array(6, 15);
heartInit[0] = [2, 1, 3, 1, 2, 0];
heartInit[1] = [1, 3, 1, 3, 1, 0];
heartInit[2] = [0, 9, 0, 0, 0, 0];
heartInit[3] = [0, 9, 0, 0, 0, 0];
heartInit[4] = [0, 9, 0, 0, 0, 0];
heartInit[5] = [0, 2, 1, 3, 1, 2];
heartInit[6] = [0, 2, 2, 1, 2, 2];
heartInit[7] = [0, 2, 5, 2, 0, 0];
heartInit[8] = [0, 3, 3, 3, 0, 0];
heartInit[9] = [0, 4, 1, 4, 0, 0];
heartInit[10] = [0, 9, 0, 0, 0, 0];
heartInit[11] = [1, 7, 1, 0, 0, 0];
heartInit[12] = [2, 5, 2, 0, 0, 0];
heartInit[13] = [3, 3, 3, 0, 0, 0];
heartInit[14] = [4, 1, 4, 0, 0, 0];

var heart = Array(6, 15);
heart = heartInit.map( function(row){
    return row.map( function( cell ){
        return cell * width;
    } );
});

var topPart = "";
var middlePart = "";
var bottomPart = "";

topPart = rptStr(rptStr('.', heart[0][0]) + rptStr("#",heart[0][1]) + rptStr(".",heart[0][2]) + rptStr("#",heart[0][3]) + rptStr(".",heart[0][4]) + rptStr("#",heart[0][5]) + "\n" , topH)
+ rptStr(rptStr('.', heart[1][0]) + rptStr("#",heart[1][1]) + rptStr(".",heart[1][2]) + rptStr("#",heart[1][3]) + rptStr(".",heart[1][4]) + rptStr("#",heart[1][5]) + "\n" , topH) 
+ rptStr(rptStr('.', heart[2][0]) + rptStr("#",heart[2][1]) + rptStr(".",heart[2][2]) + rptStr("#",heart[2][3]) + rptStr(".",heart[2][4]) + rptStr("#",heart[2][5]) + "\n" , topH) 
+ rptStr(rptStr('.', heart[3][0]) + rptStr("#",heart[3][1]) + rptStr(".",heart[3][2]) + rptStr("#",heart[3][3]) + rptStr(".",heart[3][4]) + rptStr("#",heart[3][5]) + "\n" , topH) 
+ rptStr(rptStr('.', heart[4][0]) + rptStr("#",heart[4][1]) + rptStr(".",heart[4][2]) + rptStr("#",heart[4][3]) + rptStr(".",heart[4][4]) + rptStr("#",heart[4][5]) + "\n" , topH) 
+ rptStr(rptStr('.', heart[5][0]) + rptStr("#",heart[5][1]) + rptStr(".",heart[5][2]) + rptStr("#",heart[5][3]) + rptStr(".",heart[5][4]) + rptStr("#",heart[5][5]) + "\n" , topH) 
+ rptStr(rptStr('.', heart[6][0]) + rptStr("#",heart[6][1]) + rptStr(".",heart[6][2]) + rptStr("#",heart[6][3]) + rptStr(".",heart[6][4]) + rptStr("#",heart[6][5]) + "\n" , topH);

middlePart += rptStr(rptStr('.', heart[7][0]) + rptStr("#",heart[7][1]) + rptStr(".",heart[7][2]) + rptStr("#",heart[7][3]) + rptStr(".",heart[7][4]) + rptStr("#",heart[7][5]) + "\n" , midH);

bottomPart += rptStr(rptStr('.', heart[8][0]) + rptStr("#",heart[8][1]) + rptStr(".",heart[8][2]) + rptStr("#",heart[8][3]) + rptStr(".",heart[8][4]) + rptStr("#",heart[8][5]) + "\n" , bottH) 
+ rptStr(rptStr('.', heart[9][0]) + rptStr("#",heart[9][1]) + rptStr(".",heart[9][2]) + rptStr("#",heart[9][3]) + rptStr(".",heart[9][4]) + rptStr("#",heart[9][5]) + "\n" , bottH) 
+ rptStr(rptStr('.', heart[10][0]) + rptStr("#",heart[10][1]) + rptStr(".",heart[10][2]) + rptStr("#",heart[10][3]) + rptStr(".",heart[10][4]) + rptStr("#",heart[10][5]) + "\n" , bottH) 
+ rptStr(rptStr('.', heart[11][0]) + rptStr("#",heart[11][1]) + rptStr(".",heart[11][2]) + rptStr("#",heart[11][3]) + rptStr(".",heart[11][4]) + rptStr("#",heart[11][5]) + "\n" , bottH) 
+ rptStr(rptStr('.', heart[12][0]) + rptStr("#",heart[12][1]) + rptStr(".",heart[12][2]) + rptStr("#",heart[12][3]) + rptStr(".",heart[12][4]) + rptStr("#",heart[12][5]) + "\n" , bottH) 
+ rptStr(rptStr('.', heart[13][0]) + rptStr("#",heart[13][1]) + rptStr(".",heart[13][2]) + rptStr("#",heart[13][3]) + rptStr(".",heart[13][4]) + rptStr("#",heart[13][5]) + "\n" , bottH) 
+ rptStr(rptStr('.', heart[14][0]) + rptStr("#",heart[14][1]) + rptStr(".",heart[14][2]) + rptStr("#",heart[14][3]) + rptStr(".",heart[14][4]) + rptStr("#",heart[14][5]) + "\n" , bottH);

var heartImage = topPart + middlePart + bottomPart;
process.stdout.write(heartImage);

function rptStr(string, times) {
  return times > 0 ? string.repeat(times) : "";
}