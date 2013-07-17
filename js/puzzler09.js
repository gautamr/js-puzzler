function fun1() {
    return
	{
	    ok: false
	};
}

function fun2() {
    return {
	    ok: false
	};
}

console.log(fun1());
console.log(fun2());