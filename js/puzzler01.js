function puzzler01() {
    var arr = [1,2,3];
    var out = [];
    for(var i = 0; i<arr.length;i++) {
        var item = arr[i];
        out.push(function(){ console.log(item); });
    }
    
    out.forEach(function(func){ func(); });
}

puzzler01();