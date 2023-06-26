const gendreSelection = document.getElementById("gendre");
const movieSelection = document.getElementById("movie");

const gendres = document.getElementById("#gendre option");
const movies = document.querySelectorAll("#movie option");

const placeholder = document.querySelector("#placeholder");


gendreSelection.onchange = () =>{
    for(let opt of movies){
        if(gendreSelection.value === opt.className){
            opt.setAttribute('style', 'display: inline');
            placeholder.textContent = "";
            movieSelection.value = "";
        }else{
            opt.setAttribute('style', 'display: none')
        }
    }
}

movieSelection.onchange = () =>{
    placeholder.textContent = movieSelection.value;
}