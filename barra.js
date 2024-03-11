function search() {
    var query = document.getElementById("search-input").value;
    // Aquí puedes realizar una búsqueda basada en la 'query' ingresada por el usuario
    // Por ahora, solo mostraremos la consulta en la consola
    console.log("Buscando por: " + query);
    
    // Muestra los resultados en una sección en el HTML
    var searchResultsContainer = document.getElementById("search-results");
    searchResultsContainer.innerHTML = "<p>Resultados de búsqueda para: " + query + "</p>";
}
/* <script async src="https://cse.google.com/cse.js?cx=f52925efc5d4f46a1">
</script> */

// <script async src="https://cse.google.com/cse.js?cx=f52925efc5d4f46a1">
// </script>
// <div class="gcse-search"></div>