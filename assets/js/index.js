$('#readerNav').on('click',function (){
    $('#reader').css('display','block');
    $('#generator').css('display','none');
});

$('#genarate').on('click',function (){
    $('#reader').css('display','none');
    $('#generator').css('display','block');
});