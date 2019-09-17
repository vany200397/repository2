$(document).ready()
{


    $('#input1').on('input', function()
    {
        $('#label2').text('Привет, '+$(this).val());
    })



}