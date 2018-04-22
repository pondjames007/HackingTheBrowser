setInterval(()=>{
  chrome.runtime.sendMessage({message:"shrink", width: $(window).width()})
}, 1000)

$(window).scroll(function (){
  $('body :visible').filter(function (){
    return ($(this).height() < $(window).height()) && ($(this).height() > 0) && ($(this).width() > 0);
  }).each(function (){
    var thisTop = $(this).offset().top;
    var winScrollTop = $(window).scrollTop();

    var delta = thisTop - winScrollTop;

    if (delta < 0){
      $(this).hide();
    }
  });
});