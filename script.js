

const btn = document.querySelector("button"); // Get the button from the page
if (btn) {
  btn.onclick = function() {
    btn.classList.toggle("dipped");
  };
}

$(function(){
    var fadeDelay = 1000;
    var fadeDuration = 1000;
    $(document).click(function(e){
        var num = Math.floor((Math.random()*10)+1);
        var div = $('<div class="image-wrapper">')
            .css({
                "left": e.pageX + 'px',
                "top": e.pageY + 'px'
            })
            .append($('<img src="https://cdn.glitch.global/da602b1d-7b7f-4a7f-a289-a492dc542616/smiley' + num + '.gif?v=1676374702817" alt="myimage" />'))
            .appendTo(document.body);
        
    });
});




