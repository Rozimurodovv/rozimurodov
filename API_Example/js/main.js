const form = document.querySelector(".form")
const input = document.querySelector("input")
const box = document.querySelector(".box")
const body = document.querySelector(".container")
const nightmode = document.querySelector(".nightmode")
const heading_3 = document.querySelector(".heading_3")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    var api = `https://api.github.com/users/${input.value}`
    getData(api)
})
const getData = async (api) => {
    const req = await fetch(api)
    const data = await req.json()
    newdata(data);
}

const newdata = (data)=>{
    box.innerHTML =""
    box.innerHTML += ` <div class="box_about">
    <div class="box_top">
        <div class="image">
            <img src="${data.avatar_url}" alt="">
        </div>
        <div class="about">
            <h1>${data.login} </h1>
            <p>@${data.email}</p>
            <h4>${data.bio}</h4>
        </div>
        <div class="date">
            <h3>${data.created_at}</h3>
        </div>
    </div>
    <div class="box_bottom">
        <div class="active">
            <div class="repost">
                <p>Repos</p>
                <p class = "textt">${data.public_repos}</p>
            </div>
            <div class="followers">
                <p>Followers</p>
                <p class = "textt">${data.followers}</p>
            </div>
            <div class="following">
                <p>Following</p>
                <p class = "textt">${data.following}</p>
            </div>
        </div>
    </div>
    <div class="box_adress">
        <div class="email">
            <div class="span">
                <i class="bi bi-geo-alt-fill"></i>
                <p>${data.location}</p>
            </div>
            <div class="span">
                <i class="bi bi-link-45deg"></i>
                <p>${data.html_url}</p>
            </div>
        </div>
        <div class="email">
            <div class="span">
            <i class="bi bi-twitter"></i>
                <p>${data.twitter_username}</p>
            </div>
            <div class="span">
            <i class="bi bi-buildings"></i>
                <p>${data.company}</p>
            </div>
        </div>
    </div>
</div>`
}

var mode = localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"

nightmode.addEventListener("click",()=>{

   if(mode == "night"){

    localStorage.setItem("mode","light")
    mode = localStorage.getItem("mode")
    changed()

   }else{

    localStorage.setItem("mode","night")
    mode = localStorage.getItem("mode")
    changed()

   }

})

const changed = ()=>{

    if(mode == "night"){
        body.classList.add("change")
    }else{
        body.classList.remove("change")
    }

}


