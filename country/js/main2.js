const name = new URLSearchParams(location.search).get("name")


const country = `https://restcountries.com/v3.1/name/${name}`
const newcountries = document.querySelector(".newcountries")
const dark_mode = document.querySelector(".dark_mode")
const container = document.querySelector(".container")

const getData = async (api) => {

    const res = await fetch(api)
    const data = await res.json()

    Newdata(data)
}
getData(country)



const Newdata = (cards) => {
    cards.forEach(element => {
        newcountries.innerHTML += `<div class="newcountry">
        <div class="country_image">
            <img src="${element.flags.png}" alt="">
        </div>
        <div class="about_country">
            <h1>Name: ${element.name.common}</h1>
            <h2>Population:<span> ${element.population}</span> </h2>
            <h2>Region: ${element.region} </h2>
            <h2>Capital: ${element.capital}</h2>
        </div>
       </div>`
    });
}
dark_mode.addEventListener("click", () => {
    container.classList.toggle("active")
})