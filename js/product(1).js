

const filterableCards=document.querySelectorAll(".filterable-cards .card");

 filterCards=e =>{
    document.querySelector(".active").classList.remove("active")
    e.target.classList.add("active") 
}

    filterableCards.forEach(card => {
        card.classList.add("hide");
console.log( e.target.dataset.name)
console.log(card.dataset.name)
        if(card.dataset.name == e.target.dataset.name || e.target.dataset.name =="ali")
        card.classList.remove("hide")

    })




buttons.forEach(button =>button.addEventListener("click", filterCards))



