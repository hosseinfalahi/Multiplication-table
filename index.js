/*console.log("hello world");
var x = 14;
if (x % 2 == 0)
    console.log("even");
else 
    console.log('odd');*/
var x = 10;
var y = 10;
var line = '';
for (var i = 1;i <= x;i++){
    for (var j = 1;j <= y;j++){
        line = line + (i * j);
        if (i * j < 10)
            line = line + '  '
        else 
            line = line + ' '
    }
    console.log(line);
    line = '';
}
    