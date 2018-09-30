$( document ).ready(function() {

    index = 1;
    zindex = 300;
    totalCards = 8;
    marginTop = 0;
    marginLeft = 0;
    marginBase = 20;
    width = 400;
    height = 360;

    while(index <= 3) {
        html = $('<div id="card-' + index + '" class="card" style="background-image: url(' + "imgs/img-" + index + ".jpg" + ');"></div>');

        $(".cards").append(html);

        if(index == 1) {
            zindex = 300;
            
            addClickEvent(html);
        } else if(index == 2) {
            zindex = 200;

            marginTop -= marginBase;
            marginLeft += marginBase / 2;
        } else {
            zindex = 100;
            marginTop -= marginBase;
            marginLeft += marginBase / 2;
        }

        html.css("z-index", zindex);
        html.css("top", marginTop);
        html.css("left", marginLeft);
        html.css("width", width + marginTop);
        html.css("height", height + marginTop);

        index++;
    }    

    index--;

});

function addCard(index, marginTop, marginLeft, width, height) {

    marginTop = 0;
    marginLeft = 0;
    zindex = 300;

    event = false;

    $(".cards .card").each(function() {
        $(this).css("z-index", zindex);
        $(this).css("top", marginTop);
        $(this).css("left", marginLeft);
        $(this).css("width", width + marginTop);
        $(this).css("height", height + marginTop);

        zindex -= 100;
        marginTop -= marginBase;
        marginLeft += marginBase / 2;

        if(!event) {
            addClickEvent($(this));
            event = true;
        }
    });

    html = $('<div id="card-' + index + '" class="card" style="display: none; background-image: url(' + "imgs/img-" + index + ".jpg" + ');"></div>');

    $(".cards").append(html);
    
    html.css("z-index", 100);
    html.css("top", marginTop);
    html.css("left", marginLeft);
    html.css("width", width + marginTop);
    html.css("height", height + marginTop);

    html.fadeIn(600);
}

function addClickEvent(element) {
    element.click(function() {
        $(this).remove();

        if(index >= totalCards) {
            index = 1;
        } else {
            index++;
        }

        addCard(index, marginTop, marginLeft, width, height);
        
    });
}

