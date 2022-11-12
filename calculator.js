$(function () {
    var $header = $(".calc-header");
    var $body = $(".calc-body");

    var $buttons = $("button");
    $buttons.click(function () {    // 버튼 누르면 아래 내용 실행

        var newVal = $(this).val(); // 누른 버튼의 value값 저장
        var $inval = $("#inval");   // input의 id값 변수에 저장
        var oldVal = $inval.val();  // 인풋에 입력된 값 저장
        var result = oldVal + newVal;   // 이전 값과 현재 누른 값 저장
        $inval.val(result); // input의 value에 결과값 삽입
    });
});