$(function(){

    $(".gallery li > a").fancybox({
        prevEffect : 'none', nextEffect: 'none',
        helpers : { title: { type: 'outside' },  overlay    : { opacity : 0.8,  css : { 'background-color' : '#000' }  }, thumbs:{width: 80,height: 80 }}
    });  
    
    $('.gallery .list-wrapper').jCarouselLite({
        btnNext: '.gallery .next',
        btnPrev: '.gallery .prev',
        circular: false,
        visible: 5,
        scroll : 2
});
    
                             
});