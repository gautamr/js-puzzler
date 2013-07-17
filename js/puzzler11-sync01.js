function maybe() {
    console.log("…execute async, maybe?");
}

function proveIt() {
    setTimeout(maybe, 0);
    console.log("Hey, you just invoked me, and this is crazy…");
    console.log("But I'll queue you up");
    return "and you'll…";
}

proveIt();