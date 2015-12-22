/**
 * 일반적인 웹 환경에서의 JavaScript는 파일을 직접 다룰 수 없으므로
 * Java에서의 File 관련 Exception을 단순히 모사해서 작성
 */
var readLine = function(filePath){
    console.log(filePath + " is open and being read");
    return [1, 2, 3, 4];
};

var releaseFile = function(filePath){
    console.log(filePath + " is closed and released");
};

var template = {
    processFile: function(filePath, initVal, callback){
        var lines = readLine(filePath);
        var result = initVal;
        var i, len = lines.length;
        for (i = 0 ; i < len ; i++){
            result = callback(lines[i], result);
        }
        console.log(result);
        releaseFile(filePath);
    }
};



(function(){
    var filePath = "TemplateCallback/java/data.txt";

    // 파일을 읽고 자원을 정리하는 로직을 반복할 필요 없이
    // 파일을 읽은 후 처리해야 하는 biz 로직만 콜백 함수로 전달
    template.processFile(filePath, 0, function(currVal, prevVal){
        return currVal + prevVal;
    });
    template.processFile(filePath, 1, function(currVal, prevVal){
        return currVal * prevVal;
    });
    template.processFile(filePath, "", function(currVal, prevVal){
        return currVal + prevVal;
    });
})();

// JavaScript는 함수를 전달할 수 있으므로
// 굳이 Callback객체를 만들 필요는 없으나
// Callback을 사용하는 입장에서 형 검사를 할 수 있게 하기위해
// 인터페이스 역할을 하는 Callback 객체 생성
//var Callback = function(){};
//Callback.prototype.processFileContents = function(){
//    throw new Error("This method should be overridden");
//};

// JavaScript는 함수를 전달할 수 있으므로
// 굳이 Callback객체를 만들 필요는 없이
// Callback 함수만 넘기면 된다


