window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 200){
        document.getElementById('box2').style="display:block;";
    }else{
        document.getElementById('box2').style="display:none;";
    }
}
