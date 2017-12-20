function getMultiplicationTable (num){
    var x = num;
    var y = num;
    var line = '';
    for (var i = 1;i <= x;i++){
        for (var j = 1;j <= y;j++){
            line = line + (i * j);
            if (i * j < 10)
                line = line + '  '
            else 
                line = line + ' '
        }
        line = line + '\n';
    }
    return line;
}
/*
sample usage:
console.log(getMultiplicationTable(10));
*/