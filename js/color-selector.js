var global_color="style/tomato.css";
(jQuery), $(document).ready(function() {
    $(document).on("click", "#demo-settings", function() {
        "0px" === $("#demo").css("left") ? $("#demo").animate({
            left: "-190px"
        }, 300) : $("#demo").animate({
            left: "0"
        }, 500)
    }), $(document).on("click", ".demo-color", function() {
        var  o = $(this).index(".demo-color");
        switch (o) {
            case 0:
				$('link[href="'+global_color+'"]').attr('href','style/tomato.css');
				global_color="style/tomato.css";
                break;
            case 1:
                $('link[href="'+global_color+'"]').attr('href','style/light-blue.css');
				global_color="style/light-blue.css";
                break;
            case 2:
                $('link[href="'+global_color+'"]').attr('href','style/light-green.css');
				global_color="style/light-green.css";
                break;
            case 3:
                $('link[href="'+global_color+'"]').attr('href','style/light-purple.css');
				global_color="style/light-purple.css";
				break;
			case 4:
                $('link[href="'+global_color+'"]').attr('href','style/light-yellow.css');
				global_color="style/light-yellow.css";
				break;
			case 5:
                $('link[href="'+global_color+'"]').attr('href','style/dark-blue.css');
				global_color="style/dark-blue.css";
				break;
        }
    }), $(document).on("click", "#demo-hide", function() {
        $("#demo").animate({
            left: "-230px"
        }, 150)
    }), $(document).on("mousemove", function(e) {
        e.pageX <= 20 && "-230px" === $("#demo").css("left") && $("#demo").animate({
            left: "-190px"
        }, 300)
    }), $("body").append("<script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-22779122-3', 'auto');ga('send', 'pageview');</script>")
});