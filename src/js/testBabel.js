function testBabel() {
    let x = "test0";
    const i = false;
    if (!i) {
        let x = "test1";
        console.log(x);
    }
    console.log(x);
}
testBabel();