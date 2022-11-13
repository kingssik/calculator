$(function () {
    var $header = $(".calc-header");
    var $body = $(".calc-body");

    var $buttons = $("button");
    var arr = [];   // 입력한 값을 저장하기 위해 빈 배열 추가

    $buttons.click(function () {    // 버튼 누르면 아래 내용 실행
        var newVal = $(this).val(); // $(this) = 누른 버튼
        if (newVal === '=') {
            return false;   // = 버튼을 누른 경우
        }

        if (arr.length === 0 && (newVal === "*" || newVal === "/")) {
            return false;   // 배열에 저장된 요소가 없고 누른 버튼이 * 또는 /인 경우
        }

        arr.push(newVal);   // 배열(arr)에 누른 값을 넣어줌
        var lastNumber = arr[arr.length - 1]; // 배열[배열의 요소 갯수 - 1], 마지막에 입력한 값을 변수에 담아준다

        var $inval = $("#inval");   // input의 id값 변수에 저장
        $inval.val(lastNumber); // input에 마지막에 입력한 값을 담은 변수를 넣어줌

    });

    var $resultBtn = $("#result-btn");  // '='의 id값을 변수에 저장
    $resultBtn.click(function () {
        var str = "";   //빈 문자열 생성

        for (var i = 0; i < arr.length; i += 1) {
            str = str + arr[i];
        }
        //문자열에 배열에 담긴 값들을 차례대로 넣어줘서 하나의 문자열로 생성 

        var result = eval(str);  //값이 담긴 문자열을 eval함수로 계산해서 변수에 저장

        var $inval = $("#inval");
        $inval.val(result); //계산된 값이 담인 변수를 인풋에 넣어줌
        arr = [];   //배열을 빈 배열로 초기화
    });

});