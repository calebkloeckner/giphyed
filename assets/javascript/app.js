// load the page
$(document).ready(function(){
   

// Variables
let gifs = ["batman", "dancing", "girls", "cars", "football", "the office", "laughing", "sharks", "bloopers", "how i met your mother", "high five" ];

// functions -----------------------------------
// buttons for movies

function gifButtons () {
    $("#gifButtons").empty();
    for (var i = 0; i < gifs.length; i++) {
        $("#gifButtons").append(`
            <button class="butt" data-button="${gifs[i]}">${gifs[i]}</button>   
            `);
            
            $("#gifButtons").attr("giphy", gifs[i]);
        console.log(gifs[i]);
        
     }
    }

gifButtons();

// on click function


$(document).on("click", ".butt", ".rating", function(){
    let offset = Math.floor(Math.random() * 75);
    $("#gifShown").empty();
let gifName = $(this).attr("data-button");
let queryURL = "https://api.giphy.com/v1/gifs/search?q="+gifName+"&api_key=CBfsLYnfVUUkLX9pPpnoe2oc00Is5g2b&rating=r&sort=relevant&offset="+offset+"&limit=20";
    
console.log(gifName);
    $.ajax({
        url: queryURL,
        method: "GET"
}).done(function(response){
        let results = response.data;
for (var i = 0; i < results.length; i++) {
       let image =  $("<img>").attr("src", results[i].images.fixed_height_small_still.url);
  
$("#gifShown").append(image);       
}

    console.log(results[0].images);
    });

$(".btn-default").on("click", function(event){
    event.preventDefault();
    var newButton = $("#newGifButtons").val();
    gifs.push(newButton);
    gifButtons();
    $("#inputNew").children("input").val("");

});

}); 



});










