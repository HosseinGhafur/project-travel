// =========


//   btn header


// =========
const $ = document

let btnMobile = $.querySelector(".nav-btn")
let navMobile = $.querySelector(".nav-menu")

let flag = false
btnMobile.addEventListener("click", () => {

    if (flag) {
        btnMobile.classList.remove("nav-btn--open")
        navMobile.classList.remove("nav-menu--open")
        flag = false
    } else {
        btnMobile.classList.add("nav-btn--open")
        navMobile.classList.add("nav-menu--open")
        flag = true
    }
})


// ===========

//   MODAL/ CART

// ===========
let modal = $.querySelector(".parent_modal")
let main = $.querySelector(".main")
let closeModal = $.querySelector(".modal__close")
let container = $.querySelector(".container")
let parentItem = $.querySelector(".services")
let blurbackground = $.querySelector(".blur")
let modalTitle = $.querySelector(".modal_title")
let modalCaption = $.querySelector(".modal__caption")

let arrayCart = [
    {
        id: 1,
        title: "recreation Activities",
        caption: "Find the best spot hunting,fishing & recreationall",
        img: "../img/icon-svg/svgs/fish.svg",
        body: `tempora? Illum cum odit voluptatibus iure neque qui deserunt aut beatae temporibus error.
        Vitae odio nostrum qui cumque porro dicta quos aut maxime! Recusandae tempora eligendi consectetur, saepe deserunt, aliquam quibusdam veniam impedit facilis placeat fuga sit, mollitia corrupti voluptatum? Temporibus, ducimus dolorem.
        Perspiciatis, molestias pariatur sit veritatis aut assumenda rerum quas excepturi hic facere, provident praesentium esse debitis ipsa dolore quisquam quae. Rem dolore provident doloremque reprehenderit eaque culpa tenetur facilis voluptate`
    },

    {
        id: 2,
        title: "Camping & Day Use",
        caption: "Return to your favorite spot or discover a new one that right for you",
        img: "../img/icon-svg/svgs/fire.svg",
        body: `Vitae odio nostrum qui cumque porro dicta quos aut maxime! Recusandae tempora eligendi consectetur, saepe deserunt, aliquam quibusdam veniam impedit facilis placeat fuga sit, mollitia corrupti voluptatum? Temporibus, ducimus dolorem.
        Perspiciatis, molestias pariatur sit veritatis aut assumenda rerum quas excepturi hic facere, provident praesentium esse debitis ipsa dolore quisquam quae. Rem dolore provident doloremque reprehenderit`
    },

    {
        id: 3,
        title: "Tour & Tickets",
        caption: "Reservs tour and tickets to participe in evens",
        img: "../img/icon-svg/svgs/tickets.svg",
        body: `Vitae odio nostrum qui cumque porro dicta quos aut maxime! Recusandae tempora eligendi consectetur, saepe deserunt, aliquam quibusdam veniam impedit facilis placeat fuga sit, mollitia corrupti voluptatum? Temporibus, ducimus dolorem.
        Perspiciatis, molestias pariatur sit veritatis aut assumenda rerum quas excepturi hic facere, provident praesentium esse debitis ipsa dolore quisquam quae. Rem dolore provident doloremque reprehenderit`
    },

    {
        id: 4,
        title: "Permits",
        caption: "Obtain permits dor access to high-demand locaitions",
        img: "../img/icon-svg/svgs/paper.svg",
        body: `Vitae odio nostrum qui cumque porro dicta quos aut maxime! Recusandae tempora eligendi consectetur, saepe deserunt, aliquam quibusdam veniam impedit facilis placeat fuga sit, mollitia corrupti voluptatum? Temporibus, ducimus dolorem.
        Perspiciatis, molestias pariatur sit veritatis aut assumenda rerum quas excepturi hic facere, provident praesentium esse debitis ipsa dolore quisquam quae. Rem dolore provident doloremque reprehenderit`
    }
]

arrayCart.forEach((ItemsCart, i) => {
    parentItem.insertAdjacentHTML("beforeend", `<div class="services__item" data-index="${i}">
    <img src=${ItemsCart.img} alt="no img" class="services__item_img">
    <h2 class="services__item_title">${ItemsCart.title}</h2>
    <p class="services__item_caption">${ItemsCart.caption}</p>
    </div>`)


})


parentItem.addEventListener("click", (event) => {

    const index = event.target.dataset.index


    if (index) {
        const item = arrayCart[index]
        modalTitle.innerHTML = item.title
        modalCaption.innerHTML = item.body
        modal.style.display = "block"
        blurbackground.style.position = "fixed"
        blurbackground.style.display = "block"

    }

})

closeModal.addEventListener("click", () => {
    modal.style.display = "none"
    blurbackground.style.position = "relative"
    blurbackground.style.display = "none"

})

// ==========


//  PLACE CART


// ==========

arrayPlaceCart = [
    {
        id: 1,
        img: "../img/img/image1.jpg",
        caption: "Book unique camping experiences on over 300,000 campsites.",
        title: "The Stuga",
        like: "../img/icon-svg/svg-icons/heart.svg",
        price: "36$/night",
        button: "Read more"
    },
    {
        id: 2,
        img: "../img/img/image2.jpg",
        caption: "Book unique camping experiences on over 300,000 campsites.",
        title: "The Stuga",
        like: "../img/icon-svg/svg-icons/heart.svg",
        price: "36$/night",
        button: "Read more"
    },
    {
        id: 3,
        img: "../img/img/image3.jpg",
        caption: "Book unique camping experiences on over 300,000 campsites.",
        title: "The Stuga",
        like: "../img/icon-svg/svg-icons/heart.svg",
        price: "36$/night",
        button: "Read more"
    },
    {
        id: 4,
        img: "../img/img/image4.jpg",
        caption: "Book unique camping experiences on over 300,000 campsites.",
        title: "The Stuga",
        like: "../img/icon-svg/svg-icons/heart.svg",
        price: "36$/night",
        button: "Read more"
    },
    {
        id: 5,
        img: "../img/img/image5.jpg",
        caption: "Book unique camping experiences on over 300,000 campsites.",
        title: "The Stuga",
        like: "../img/icon-svg/svg-icons/heart.svg",
        price: "36$/night",
        button: "Read more"
    },
    {
        id: 6,
        img: "../img/img/image6.jpg",
        caption: "Book unique camping experiences on over 300,000 campsites.",
        title: "The Stuga",
        like: "../img/icon-svg/svg-icons/heart.svg",
        price: "36$/night",
        button: "Read more"
    },
    {
        id: 7,
        img: "../img/img/image7.jpg",
        caption: "Book unique camping experiences on over 300,000 campsites.",
        title: "The Stuga",
        like: "../img/icon-svg/svg-icons/heart.svg",
        price: "36$/night",
        button: "Read more"
    },
    {
        id: 8,
        img: "../img/img/image8.jpg",
        caption: "Book unique camping experiences on over 300,000 campsites.",
        title: "The Stuga",
        like: "../img/icon-svg/svg-icons/heart.svg",
        price: "36$/night",
        button: "Read more"
    }

]

let PlaceBanner = $.querySelector(".distenations__places")


arrayPlaceCart.forEach((items) => {

    PlaceBanner.insertAdjacentHTML("beforeend", ` <div class="place">
    <div class="place__banner">
        <img src=${items.img} alt="place" class="place_img">
       
        <div class="place__like">
            <img src=${items.like} alt="heart" class="place__like--logo">
        </div>
        <div class="place__price">
            <p class="place__price--text">${items.price}</p>
        </div>
        </div>
        <h2 class="place__title">${items.title}</h2>
        <p class="palce__caption">${items.caption}</p>
        <a href="#" class="btn place__btn">${items.button}</a>
</div>`)

})


// ============

//  BTN SCROLL


// ============
let BtnScroll = $.querySelector(".scroll")

BtnScroll.addEventListener("click", () => {

    window.scrollTo(0, 0)

})


// 


//  LOGIN FORM



// 

let closeSign = $.querySelector('.close-modal-signIn')
let btnlogin = $.querySelector(".nav__link--border")
let blursign = $.querySelector(".blur--sign")
let modalSign = $.querySelector(".modal-link")
let InputUser = $.querySelector(".modal-link__input--user")
let captionError = $.querySelector(".modal-link__error")
let InputPass = $.querySelector(".modal-link__input--pass")
let captionPass = $.querySelector(".modal-link__error--pass")
let btnSubmit = $.querySelector(".modal-link__submit")
let InputEmail = $.querySelector(".modal-link__input--email")
let signMobile = $.querySelector(".nav-menu_link--border")

btnlogin.addEventListener("click", (event) => {
    event.preventDefault()
    modalSign.style.display = "block"
    blursign.style.position = "fixed"
    blursign.style.display = "block"
})

closeSign.addEventListener("click", () => {
    modalSign.style.display = "none"
    blursign.style.position = "relaitve"
    blursign.style.display = "none"
})

signMobile.addEventListener("click", () => {
    modalSign.style.display = "block"
    blursign.style.position = "fixed"
    blursign.style.display = "block"
})

InputUser.addEventListener("keydown", () => {
    if (InputUser.value.length < 12) {
        captionError.innerHTML = "enter correct content"
        captionError.style.display = "block"

    } else {
        captionError.style.display = "none"
    }
})
InputPass.addEventListener("keydown", () => {
    if (InputPass.value.length < 8) {
        captionPass.innerHTML = "Values should not be less than 8"
        captionPass.style.display = "block"

    } else {
        captionPass.style.display = "none"
    }
})

let arrayLocal = []

btnSubmit.addEventListener("click", (event) => {
    event.preventDefault()
    modalSign.style.display = "none"
    blursign.style.position = "relaitve"
    blursign.style.display = "none"

    let newuser = {
        id: arrayLocal.length + 1,
        user: InputUser.value,
        password: InputPass.value,
        email: InputEmail.value
    }
    arrayLocal.push(newuser)
    storage(arrayLocal)
    InputUser.value = ""
    InputPass.value = ""
    InputEmail.value = ""
})

function storage(datauser) {
    localStorage.setItem("users", JSON.stringify(datauser))
}





























