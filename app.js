document.getElementById("searchBtn").addEventListener("click", function() {
var query = document.getElementById("searchInput").value.trim();
    
fetch("superheroes.php?query=" + encodeURIComponent(query))
    .then(function(response) {
    return response.text();
})
    .then(function(datalist) {
        document.getElementById("result").innerHTML = datalist;
    })
    .catch(function(erro){
    console.error(erro);
});

});