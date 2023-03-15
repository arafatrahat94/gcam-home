var slider = document.getElementById("slider");
        var sliderWidth = slider.offsetWidth;
        var slideList = document.getElementById("slideWrap");
        var count = 1;
        var items = slideList.querySelectorAll("li").length;
        var prev = document.getElementById("prev");
        var next = document.getElementById("next");
        
        window.addEventListener('resize', function() {
          sliderWidth = slider.offsetWidth;
        });
        var nextSlide = function() {
        if(count < items) {
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
        else if(count = items) {
            slideList.style.left = "0px";
            count = 1;
        }
        };
        next.addEventListener("click", function() {
        nextSlide();
        });

        prev.addEventListener("click", function() {
        prevSlide();
        });
        setInterval(function() {
        nextSlide()
        }, 5000);
        window.onload = function() {
        responsiveSlider();  
        }