$('#readerNav').on('click',function (){
    $('#reader').css('display','block');
    $('#generator').css('display','none');
    $('#readerNav').css({
        color:'blue'
    });
    $('#genarate').css({
        color:'black'
    });
});

$('#genarate').on('click',function (){
    $('#reader').css('display','none');
    $('#generator').css('display','block');
    $('#readerNav').css({
        color:'black'
    });

    $('#genarate').css({
        color:'blue'
    });
});