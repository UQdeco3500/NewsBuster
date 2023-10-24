

var hover_img_l = document.getElementsByClassName('hover_img-l')
var hover_img_r = document.getElementsByClassName('hover_img-r')
var hover_img_m = document.getElementsByClassName('hover_img-m')
var hover_img_rr = document.getElementsByClassName('hover_img-rr')


for (let i = 0; i < hover_img_l.length; i++) {
    hover_img_l[i].addEventListener('click', function() {
        window.location.href = 'map.html';
    })

    hover_img_r[i].addEventListener('click', function() {
        window.location.href = 'detect.html';
    })

    hover_img_m[i].addEventListener('click', function() {
        window.location.href = 'home.html';
    })

    hover_img_rr[i].addEventListener('click', function() {
        window.location.href = 'profile.html';
    })
  }
  
