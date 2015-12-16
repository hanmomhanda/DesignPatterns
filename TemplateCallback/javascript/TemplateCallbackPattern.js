/**
 * 일반적인 웹 환경에서의 JavaScript는 파일을 직접 다룰 수 없으므로
 * Java에서의 File 관련 Exception을 단순히 모사해서 작성
 */
var Template = {
    processFile: function(callback){
        readLine(file);
        callback();
        releaseFile();
    }
};

// JavaScript는 함수를 전달할 수 있으므로
// 굳이 Callback객체를 만들 필요는 없으나
// Callback을 사용하는 입장에서 형 검사를 할 수 있게 하기위해
// 인터페이스 역할을 하는 Callback 객체 생성
var Callback = function(){};
Callback.prototype.processFileContents = function(){
    throw new Error("This method should be overridden");
};

