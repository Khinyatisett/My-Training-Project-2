// HeightLine JS
$(document).ready(function () {
    if (window.matchMedia('(min-width: 641px)').matches) {
        $(".part").heightLine({
            fontSizeCheck: true
        });
    } else {
        $(".part").heightLine("destroy");
    } 
});