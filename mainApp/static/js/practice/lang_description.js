$(document).ready(function () {
    // Startup function: call UpdateGraphviz
    jQuery(function() {
        btn_1.click();
    });

    max = 5;

    var btn_1 = jQuery('#btn_task_1');
    var btn_2 = jQuery('#btn_task_2');
    var btn_3 = jQuery('#btn_task_3');
    var btn_4 = jQuery('#btn_task_4');
    var btn_5 = jQuery('#btn_task_5');

    var description = $('#description');
    var statement = $('#statement');

    // var btn_accept = $('#btn_accept');
    // var current_answer = false;

    function Update(data, statement_input) {
        description.text(data);
        $("#answer").val(statement_input);
    }
    
    btn_1.click(function(){
        $( ".page-item" ).removeClass( "active" );
        $(this).addClass( "active" );
        current = 1;
        Update(
            `Включает только три цепочки: a, b и cbbab, т.е. язык = { "a", "b", "cbba" }`, 
            'a+b+cbbab');
    });

    btn_2.click(function(){
        $( ".page-item" ).removeClass( "active" );
        $(this).addClass( "active" );
        current = 2;
        Update(
            `Все цепочки из а и b (включая ε), в которых b входят только парами.`, 
            '(a + bb)');
    });

    btn_3.click(function(){
        $( ".page-item" ).removeClass( "active" );
        $(this).addClass( "active" );
        current = 3;
        Update(
            `Язык включает все цепочки из 0 и 1 (в том числе ε), которые оканчиваются цепочкой 10010.`, 
            '(0+1)*10010');
    });
    
    btn_4.click(function(){
        $( ".page-item" ).removeClass( "active" );
        $(this).addClass( "active" );
        current = 4;
        Update(
            `Все цепочки из а и b (включая ε), которые содержат точно два вхождения b.`, 
            'a*ba*ba*');
    });
    
    btn_5.click(function(){
        $( ".page-item" ).removeClass( "active" );
        $(this).addClass( "active" );
        current = 5;
        Update(
            `Все цепочки из а и b (включая ε), которые содержат по крайней мере одну пару рядом стоящих а или b.`, 
            '(a+b)*(aa+bb) (a+b)*');
    });

});