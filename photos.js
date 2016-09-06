
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);

$overlay.append($caption);

$("body").append($overlay);

$("#photos a").click(function(event){
    event.preventDefault();
    var imageLocation = $(this).attr("href");

    $image.attr("src", imageLocation);

    var $captionText = $(this).children("img").attr("alt");
    $caption.text($captionText);

    $overlay.show();
});

$overlay.click(function(){
    $overlay.hide();
});



//  SEARCH BOX

/*var img = document.getElementsByTagName('img');

cache = [
    {element: img, text: 'Hay Bales'},
    {element: img, text: 'Lake'},
    {element: img, text: 'Canyon'},
    {element: img, text: 'Iceberg'},
    {element: img, text: 'Desert'},
    {element: img, text: 'Fall'},
    {element: img, text: 'Plantation'},
    {element: img, text: 'Dunes'},
    {element: img, text: 'Countryside Lane'},
    {element: img, text: 'Sunset'},
    {element: img, text: 'Cave'},
    {element: img, text: 'Bluebells'}
];

    function get(){
        var $imgs = $('#photos img');
        var $search = $('#filter-search');
        var cache = [];

    $imgs.each(function(){
        cache.push({
            element: this,
            text: this.alt.trim().toLowerCase()
        });
    });

    
    function filter() {
        var query = this.value.trim().toLowerCase();

        cache.forEach(function(img){
            var index = 0;
            if(query) {
                index = img.text.indexOf(query);
            }

            img.element.style.display = index === -1 ? 'none' : '';
        });
    }

    if('oninput' in $search[0]) {
        $search.on('input', 'filter');
    } else {
        $search.on('keyup', filter);
    }


}());*/
