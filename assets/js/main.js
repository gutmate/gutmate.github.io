// var txtTarget = $('.main_cover');
// var txt = txtTarget.html() || '';
// var leng = txt.length || 0;
// var timer = '';
// var cnt = 0;

// $(window).load(function () {
//     if (txtTarget) {
//         txtTarget.css('opacity', 1);
//         typing();
//     }
// });

// function typing() {
//     txtTarget.html(txt.substring(0, cnt) + '<span class="type_bar">_</span>');
//     cnt++;
//     timer = setTimeout('typing()', 100);
//     if (leng < cnt) {
//         clearTimeout(timer);
//         cnt = 0;
//     }
// }

// TYPED.JS
$(document).ready(function(){
    $("#typed").typed({
        strings: [
            "HTML5.", "CSS3.", "Sass.", "Bootstrap.", "JavaScript.", "jQuery.",
            "Node.js.", "Express.", "Socket.io.", "MongoDB."
        ],
        typeSpeed: 120,
        startDelay: 0,
        backSpeed: 80,
        backDelay: 800,
        loop: true
    });
});