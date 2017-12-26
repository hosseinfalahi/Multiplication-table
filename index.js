function getMultiplicationTable (num){
    var x = num;
    var y = num;
    var line = '';
    var sq = x * y;
    var separator = sq.toString().length;
    for (var i = 1;i <= x;i++){
        for (var j = 1;j <= y;j++){
            line = line + (i * j);
            sq2 = i * j;
            var adad = sq2.toString().length;
            for (var k = adad;k <= separator;k++)
                line = line + ' ';
        }
        line = line + '\n';
    }
    return line;
}
/*
sample usage:
console.log(getMultiplicationTable(10));
*/