//SLIDER
var speed = 400;

$(document).ready(function(){
  var imgCount = $('.img').length
  $("#slider").on("change", function() {
    for (var i = 1; i <= imgCount; i++) {
      speed = 201 - this.value;
      $('#range').text(`AIR FLOW / ${speed/10}C°`)
      speed = speed * (i / 1.25)
      $('#img-' + i).css({
        'animation-duration': speed + 's',
        'animation-name': 'float'
      });
    }
  });
});
                  
var parallax = $('#scene').parallax();

for (var i = 1; i < 6; i++) {
  twinkleLoop(i);
};

function twinkleLoop(i) {
  var duration = ((Math.random() * 5) + 3)

  duration = duration - ((495 - speed)/100)
  twinkle(i, duration)

  setTimeout(function() {
    twinkleLoop(i)
  }, duration * 1000);
}

function twinkle(id, duration) {
  var top = (Math.floor(Math.random() * 85) + 0) + '%';
  var left = (Math.floor(Math.random() * 85) + 0) + '%';

  $('#speck' + id).remove();
  $('#specks').append("<div class='speck' id='speck" + id + "'></div>")
  $('#speck' + id).css({
    'top': top,
    'left': left,
    'animation-duration': duration + 's',
    'animation-timing-function': 'cubic-bezier(0.250, 0.250, 0.750, 0.750)',
    'animation-name': 'twinkle',
  })
}
