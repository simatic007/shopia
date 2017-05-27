/**
 * Created by simatic on 12.04.17.
 */
$(function(){
    $('.carousel').carousel({
        interval: false
    });
    $(function(){       
        $('#form').validator();        
    });
});

$('#elastislyde_carousel').elastislide();

var scrollUp = document.getElementById('scrollup'); // найти элемент

scrollUp.onmouseover = function() { // добавить прозрачность
    scrollUp.style.opacity=0.3;
    scrollUp.style.filter  = 'alpha(opacity=30)';
};

scrollUp.onmouseout = function() { //убрать прозрачность
    scrollUp.style.opacity = 0.5;
    scrollUp.style.filter  = 'alpha(opacity=50)';
};

scrollUp.onclick = function() { //обработка клика
    window.scrollTo(0,0);
};