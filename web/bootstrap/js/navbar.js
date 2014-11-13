/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    $('#homeButton').click(function (e) {
        loadMainDiv($(this), 'abc/uploadAbcFile', e);
    });
    $('#link1').click(function (e) {
        loadMainDiv($(this), 'abc/uploadAbcFile', e);
    });
    $('#link2').click(function (e) {
        loadMainDiv($(this), 'abc/uploadAbcFile', e);
    });

    var divItem = $('#mainBodyTag');
    function loadMainDiv(current, target, event) {
        event.preventDefault();
       //current.removeClass( "myClass noClass" ).addClass( "yourClass" );
        $('.sheetMusicNavButton').css('background', '');
        // The initial settings to get all non archived error logs        
        $.ajax({
            type: "POST",
            url: target,
            data: {},
            success: function (data) {
                divItem.empty();
                divItem.append(data);
                current.css('background', 'linear-gradient(to bottom, #f12739 0%, #f34d5c 50%, #ee0015 52%, #ee0015 100%)');
            }
        });
    }
});
