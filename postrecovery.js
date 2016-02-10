/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    setTimeout(function () {
        /*Beginn Postsicherung*/
        if ($('.sceditor-container').find('textarea').length !== 0) {
            if (localStorage.getItem("post") !== '' && localStorage.getItem("post") !== null) {
                var bConfirm = confirm("Möchten Sie den letzten Post wieder laden?");
            }

            $('.mainoption, .liteoption').bind('click', function () {
                $.fctResetPost("post");
            });

            if (bConfirm === true) {
                $('.sceditor-container').children('textarea').val(localStorage.getItem('post').replace(/<br[^>]*>/g, "\n"));
                $.fctResetPost("post");
            } else {
                $.fctResetPost("post");
            }

            $('.sceditor-container').children('textarea').bind('keyup', function () {
                localStorage.setItem("post", $(this).val().replace(/\n/g, '<br/>'));
            });
        }
        /*Ende Postsicherung*/

        $.fctResetPost = function (name) {
            localStorage.setItem(name, '');
        };
    }, 1500);
});

