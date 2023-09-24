//your code here
$(document).ready(function() {
    $(".image").draggable({
        helper: "clone",
        revert: "invalid"
    });

    $(".image").droppable({
        accept: ".image",
        drop: function(event, ui) {
            var draggable = ui.draggable;
            var droppable = $(this);

            // Swap background images
            var temp = draggable.css("background-image");
            draggable.css("background-image", droppable.css("background-image"));
            droppable.css("background-image", temp);
        }
    });
});
