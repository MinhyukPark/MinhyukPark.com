$(document).ready(function() {
    $('a[href*=#]').each(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            &amp;amp;&amp;amp; location.hostname == this.hostname
            &amp;amp;&amp;amp; this.hash.replace(/#/,'') ) {
            var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
            var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
            if ($target) {
                var targetOffset = $target.offset().top;
                $(this).click(function() {
                    $("#nav li a").removeClass("active");
                    $(this).addClass('active');
                    $('html, body').animate({scrollTop: targetOffset}, 3000);
                    return false;
                });
            }
        }
    });
});