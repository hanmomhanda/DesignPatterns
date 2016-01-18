var myx = 3;
console.log(myx, myx === global.myx);

function outerFunction2() {
    //var myOuterVar1 = 0;
    function outerFunction1() {
        //var myOuterVar1 = 1;

        // 위에 있는 두 개의 var를 주석처리하면
        // 아래와 같이 프로토타입 체인에서 값을 찾는다.
        Object.prototype.myOuterVar1 = 3;
        //Number.prototype.myOuterVar1 = 3;

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






//window.a = 3;
//Window.prototype.a = 2;
Object.prototype.a = 1;
var test = function a() {
    console.log(a);
};
test(); // function a가 출력된다.

// 브라우저에서 실행 시
// function a()를 function b()로 바꿔서 실행하면 3이 출력
// window.a = 3 을 지우고 실행하면 2가 출력
// Window.prototype.a = 2를 지우고 실행하면 1이 출력

console.log("=======================");
console.log(global.__proto__ === Object.prototype);
console.log(global.__proto__.__proto__ === Object.prototype);
