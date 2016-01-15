var myx = 3;
console.log(myx, myx === global.myx);

function outerFunction2() {
    //var myOuterVar1 = 0;
    function outerFunction1() {
        //var myOuterVar1 = 1;

        // 위에 있는 두 개의 var를 주석처리하면
        // 아래와 같이 프로토타입 체인에서 값을 찾는다.
        Object.prototype.myOuterVar1 = 3;

        function innerFunction1() {
            console.log('myOuterVar1', myOuterVar1);
        }
        console.log('innerFunction1.myOuterVar1', innerFunction1.myOuterVar1);
        innerFunction1.__proto__ = {
            myOuterVar1: 5
        };
        console.log('innerFunction1.myOuterVar1', innerFunction1.myOuterVar1);
        innerFunction1();
    }
    outerFunction1();
}
outerFunction2();