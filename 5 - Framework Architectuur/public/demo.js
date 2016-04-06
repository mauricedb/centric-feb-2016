/**
 * Created by maurice on 3/31/2016.
 */

$(function(){

    $("#toOne").click(function(){
        //window.location = 'one.html';
        //$('#content').load('one.html');
        window.location = "#one";
    });

    $("#toTwo").click(function(){
        //window.location = 'two.html';
        //$('#content').load('two.html');
        window.location = "#two";
    });

    $(window).on('hashchange', function(){

        $('#content').load(window.location.hash.substr(1) + '.html');

    })

    if (window.location.hash) {
        $('#content').load(window.location.hash.substr(1) + '.html');
    }
});