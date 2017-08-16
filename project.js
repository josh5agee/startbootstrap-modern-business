var url = "http://api.edamam.com/search?key=";
var key = "a670bf11c7898288386dbde2f1dad80f"
var appid= "3ce69ad1"
var q = "bread peanut butter jelly" 
var counter = 0;
function Button(){

var ingredient1 = $("#ingredient1").val();
var ingredient2 = $("#ingredient2").val();
var ingredient3 = $("#ingredient3").val();
var ingredient4 = $("#ingredient4").val();
var ingredientString = ingredient1+ " " + ingredient2 + " " + ingredient3 + " " + ingredient4;
console.log(ingredient1);

$.ajax({
 
    url: url + key + "&q="+ingredientString + "&appid=" +appid,
    dataType: 'JSON',
    type: 'GET',
    success: function(data)
    {
       
       //console.log(data);
       //console.log(data.hits);
       // console.log(data.hits[0]);
       var recipe = (data.hits[counter].recipe);
      var name = (data.hits[counter].recipe.label);
       //console.log(data.hits[1].recipe.label);
       //console.log(data.hits[0].recipe.label);
       var calories = (data.hits[counter].recipe.calories);
       var allergies = (data.hits[counter].recipe.cautions);
       var dietLabels = (data.hits[counter].recipe.dietLabels);
       var healthLabels = (data.hits[counter].recipe.healthLabels);
       var image = (data.hits[counter].recipe.image);
       var ingredient = (data.hits[counter].recipe.ingredientLines);
       var recipe1 = (data.hits[counter].recipe.url);
       console.log(recipe);
       
        $(".santa").append("<h1>Name: " +name+ "</h1>");
        $(".santa").append("<h1>calories:" +calories+ "</h1>");
        $(".santa").append("<h1>recipe: " +recipe1+ "</h1>");
        $(".santa").append("<h1>allergies " +allergies+"</h1>")
        $(".santa").append("<h1>Diet: " +dietLabels+ "</h1>");    
        $(".josh").attr("src", image);  
        $(".santa").append("<h1>ingredients: " +ingredient+ "</h1>");  
        $(".santa").append("<h1> recipe: " +recipe1+ "</h1>");  
        $(".santa").append("<h1> Click Submit above for more recipes!</h1>");  
      //ingredient1
   }
        //    img(data.hits[counter].recipe.image);
     
})
counter++;
}