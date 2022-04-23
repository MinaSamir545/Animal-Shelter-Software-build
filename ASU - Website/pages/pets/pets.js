let json = [{
        "name": "Katrine",
        "img": "../../assets/images/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Jennifer",
        "img": "../../assets/images/pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "../../assets/images/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "name": "Sophia",
        "img": "../../assets/images/pets-sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Timmy",
        "img": "../../assets/images/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "../../assets/images/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    },
    {
        "name": "Scarlett",
        "img": "../../assets/images/pets-scarlet.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Freddie",
        "img": "../../assets/images/pets-freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },

]


let mainPage = document.querySelector('section.logo')
mainPage.addEventListener('click', () => { window.location.href = '../main/index.html' })

let clicked = false
let petsPage = document.querySelector('a.link2-active')

petsPage.addEventListener('click', () => {
    clicked = false
    burger.classList.remove('burger-v')
    menu.classList.remove('visible')
    menu.classList.toggle('invisible')
    superWrapper.style.display = 'none'
    superWrapper.style.overflowY = 'auto'
    document.body.style.overflowY = 'auto'
    burgerIcon.setAttribute('src', '../../assets/icons/burger.svg');
})

let superWrapper = document.querySelector('.super')
let superWrapper2 = document.querySelector('.super2')
let burgerIcon = document.querySelector('.burger img')

let sliderMenu = () => {
    if (clicked) {
        menu.classList.remove('invisible')
        menu.classList.toggle('visible')

        superWrapper.style.display = 'flex'
        superWrapper.style.height = '161.125rem'
        superWrapper.style.background = "rgba(41, 41, 41, 0.6)"
        superWrapper.style.overflowY = 'hidden'
        document.body.style.overflowY = 'hidden'
        burgerIcon.setAttribute('src', '../../assets/icons/burgerMain.svg');
    }
    if (!clicked) {
        menu.classList.remove('visible')
        menu.classList.toggle('invisible')
        superWrapper.style.display = 'none'
        superWrapper.style.overflowY = 'auto'
        document.body.style.overflowY = 'auto'
        burgerIcon.setAttribute('src', '../../assets/icons/burger.svg');
    }
}


let burger = document.querySelector('div.burger')
burger.addEventListener('click', () => {
    clicked = !clicked
    burger.classList.toggle('burger-v')

    sliderMenu()
})


let targets = document.querySelectorAll('.card1,.card2,.card3,.card4,.card5,.card6,.card7,.card8')
let closePopUp = document.querySelector('.close-btn img')
let popUp = document.querySelector('.popup')
let popUpContent = document.querySelector('.popup-content')
let popImg = document.querySelector('.pop-img img')
let popName = document.querySelector('.pop-text h3')
let popBreed = document.querySelector('.pop-text h4')
let popDescription = document.querySelector('.pop-text h5')
let age = document.querySelector('.age')
let inoculations = document.querySelector('.inoculations')
let diseases = document.querySelector('.diseases')
let parasites = document.querySelector('.parasites')
let btnPage = document.querySelector('.button-active')
let btnEnd = document.querySelector('#end')
let btnStart = document.querySelector('#start')
let photos = document.querySelectorAll('.photo')
let cardsText = document.querySelectorAll('.card1-text,.card2-text,.card3-text,.card4-text,.card5-text,.card6-text,.card7-text,.card8-text')
let btnLeft = document.querySelector('#left')
let btnRight = document.querySelector('#right')


let pets48 = []
let fullPetsList = () => {

    for (let i = 0; i < 6; i++) {
        const newPets = [...json]
        for (let j = json.length; j > 0; j--) {
            let randomInd = Math.floor(Math.random() * j)
            const randoElem = newPets.splice(randomInd, 1)[0]
            newPets.push(randoElem)
        }
        pets48 = [...pets48, ...newPets]
    }

    return pets48
}


let sort6recursively = (list) => {
    const length = list.length;

    for (let i = 0; i < (length / 6); i++) {
        const stepList = list.slice(i * 6, (i * 6) + 6);

        for (let j = 0; j < 6; j++) {
            const duplicated = stepList.find((item, ind) => {
                return item.name === stepList[j].name && (ind !== j);
            });

            if (duplicated !== undefined) {
                const ind = (i * 6) + j;
                const which8OfList = Math.trunc(ind / 8)

                list.splice(which8OfList * 8, 0, list.splice(ind, 1)[0])
                sort6recursively(list)
            }
        }
    }
    return list

}


const sort863 = (list) => {


    list = sort6recursively(list)

    let length = list.length;
    for (let i = 0; i < (length / 6); i++) {
        const stepList = list.slice(i * 6, (i * 6) + 6)
        for (let j = 0; j < 6; j++) {
            const duplicated = stepList.find((item, ind) => {
                return item.name === stepList[j].name && (ind !== j);
            });
            if (duplicated !== undefined) {
                const ind = (i * 6) + j;
                const which8OfList = Math.trunc(ind / 8)

                const elem = list.splice(ind, 1)[0]
                list.splice(which8OfList * 8, 0, elem)
                i -= 2;
                break;
            }
        }
    }
    return list
}

fullPetsList = sort863(fullPetsList)
fullPetsList()


const changeCardsRight = () => {
    if (document.querySelector('body').offsetWidth >= 1280) {
        if (+btnPage.innerHTML < 6) {
            switch (btnPage.innerHTML) {
                case '1':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j].img)
                        cardsText[j].innerHTML = pets48[j].name
                    }
                    btnLeft.disabled = false
                    btnStart.disabled = false
                    btnLeft.classList.remove('button-inactive-left')
                    btnLeft.classList.add('button-right')
                    btnStart.classList.remove('button-inactive-left')
                    btnStart.classList.add('button-right')
                    break;
                case '2':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 8].img)
                        cardsText[j].innerHTML = pets48[j + 8].name
                    }
                    break;
                case '3':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 16].img)
                        cardsText[j].innerHTML = pets48[j + 16].name
                    }
                    break;
                case '4':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 24].img)
                        cardsText[j].innerHTML = pets48[j + 24].name
                    }
                    break;
                case '5':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 32].img)
                        cardsText[j].innerHTML = pets48[j + 32].name
                    }
                    btnRight.disabled = true
                    btnEnd.disabled = true
                    btnRight.classList.remove('button-right')
                    btnRight.classList.add('button-inactive-left')
                    btnEnd.classList.remove('button-right')
                    btnEnd.classList.add('button-inactive-left')
                    break;
            }
        }
    }
    if (document.querySelector('body').offsetWidth > 768 && document.querySelector('body').offsetWidth < 1280) {

        if (+btnPage.innerHTML < 8) {
            switch (btnPage.innerHTML) {
                case '1':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j].img)
                        cardsText[j].innerHTML = pets48[j].name
                    }
                    btnLeft.disabled = false
                    btnStart.disabled = false
                    btnLeft.classList.remove('button-inactive-left')
                    btnLeft.classList.add('button-right')
                    btnStart.classList.remove('button-inactive-left')
                    btnStart.classList.add('button-right')
                    break;
                case '2':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 8].img)
                        cardsText[j].innerHTML = pets48[j + 8].name
                    }
                    break;
                case '3':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 16].img)
                        cardsText[j].innerHTML = pets48[j + 16].name
                    }
                    break;
                case '4':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 24].img)
                        cardsText[j].innerHTML = pets48[j + 24].name
                    }
                    break;
                case '5':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 32].img)
                        cardsText[j].innerHTML = pets48[j + 32].name
                    }
                    break;
                case '6':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 40].img)
                        cardsText[j].innerHTML = pets48[j + 40].name
                    }
                    break;
                case '7':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 8].img)
                        cardsText[j].innerHTML = pets48[j + 8].name
                    }
                    btnRight.disabled = true
                    btnEnd.disabled = true
                    btnRight.classList.remove('button-right')
                    btnRight.classList.add('button-inactive-left')
                    btnEnd.classList.remove('button-right')
                    btnEnd.classList.add('button-inactive-left')
                    break;
            }
        }
    }

    if (document.querySelector('body').offsetWidth <= 768) {
        if (+btnPage.innerHTML < 16) {
            switch (btnPage.innerHTML) {
                case '1':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j].img)
                        cardsText[j].innerHTML = pets48[j].name
                    }
                    btnLeft.disabled = false
                    btnStart.disabled = false
                    btnLeft.classList.remove('button-inactive-left')
                    btnLeft.classList.add('button-right')
                    btnStart.classList.remove('button-inactive-left')
                    btnStart.classList.add('button-right')
                    break;
                case '2':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 8].img)
                        cardsText[j].innerHTML = pets48[j + 8].name
                    }
                    break;
                case '3':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 16].img)
                        cardsText[j].innerHTML = pets48[j + 16].name
                    }
                    break;
                case '4':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 24].img)
                        cardsText[j].innerHTML = pets48[j + 24].name
                    }
                    break;
                case '5':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 32].img)
                        cardsText[j].innerHTML = pets48[j + 32].name
                    }
                    break;
                case '6':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 40].img)
                        cardsText[j].innerHTML = pets48[j + 40].name
                    }
                    break;
                case '7':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 8].img)
                        cardsText[j].innerHTML = pets48[j + 8].name
                    }
                    break;
                case '8':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 32].img)
                        cardsText[j].innerHTML = pets48[j + 32].name
                    }
                    break;
                case '9':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 24].img)
                        cardsText[j].innerHTML = pets48[j + 24].name
                    }
                    break;
                case '10':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 16].img)
                        cardsText[j].innerHTML = pets48[j + 16].name
                    }
                    break;
                case '11':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 40].img)
                        cardsText[j].innerHTML = pets48[j + 40].name
                    }
                    break;
                case '12':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 8].img)
                        cardsText[j].innerHTML = pets48[j + 8].name
                    }
                    break;
                case '13':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 24].img)
                        cardsText[j].innerHTML = pets48[j + 24].name
                    }
                    break;
                case '14':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 32].img)
                        cardsText[j].innerHTML = pets48[j + 32].name
                    }
                    break;
                case '15':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j].img)
                        cardsText[j].innerHTML = pets48[j].name
                    }
                    btnRight.disabled = true
                    btnEnd.disabled = true
                    btnRight.classList.remove('button-right')
                    btnRight.classList.add('button-inactive-left')
                    btnEnd.classList.remove('button-right')
                    btnEnd.classList.add('button-inactive-left')
                    break;

            }
        }
    }

    btnPage.innerHTML = `${+btnPage.innerHTML + 1}`
    btnPage.innerHTML != '1' ? btnLeft.disabled = false : btnLeft.disabled = true
    btnPage.innerHTML != '1' ? btnStart.disabled = false : btnStart.disabled = true
}

const changeCardsLeft = () => {
    if (document.querySelector('body').offsetWidth >= 1280) {
        if (+btnPage.innerHTML > 1) {
            switch (btnPage.innerHTML) {
                case '2':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', json[j].img)
                        cardsText[j].innerHTML = json[j].name
                    }
                    btnLeft.disabled = true
                    btnStart.disabled = true
                    btnLeft.classList.remove('button-right')
                    btnLeft.classList.add('button-inactive-left')
                    btnStart.classList.remove('button-right')
                    btnStart.classList.add('button-inactive-left')
                    break;
                case '3':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j].img)
                        cardsText[j].innerHTML = pets48[j].name
                    }
                    break;
                case '4':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 8].img)
                        cardsText[j].innerHTML = pets48[j + 8].name
                    }
                    break;
                case '5':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 16].img)
                        cardsText[j].innerHTML = pets48[j + 16].name
                    }
                    break;
                case '6':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 24].img)
                        cardsText[j].innerHTML = pets48[j + 24].name
                    }
                    btnRight.disabled = false
                    btnEnd.disabled = false
                    btnRight.classList.remove('button-inactive-left')
                    btnRight.classList.add('button-right')
                    btnEnd.classList.remove('button-inactive-left')
                    btnEnd.classList.add('button-right')
                    break;
            }
        }
    }

    if (document.querySelector('body').offsetWidth > 768 && document.querySelector('body').offsetWidth < 1280) {
        if (+btnPage.innerHTML > 1) {
            switch (btnPage.innerHTML) {
                case '2':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', json[j].img)
                        cardsText[j].innerHTML = json[j].name
                    }
                    btnLeft.disabled = true
                    btnStart.disabled = true
                    btnLeft.classList.remove('button-right')
                    btnLeft.classList.add('button-inactive-left')
                    btnStart.classList.remove('button-right')
                    btnStart.classList.add('button-inactive-left')
                    break;
                case '3':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j].img)
                        cardsText[j].innerHTML = pets48[j].name
                    }
                    break;
                case '4':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 8].img)
                        cardsText[j].innerHTML = pets48[j + 8].name
                    }
                    break;
                case '5':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 16].img)
                        cardsText[j].innerHTML = pets48[j + 16].name
                    }
                    break;
                case '6':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 24].img)
                        cardsText[j].innerHTML = pets48[j + 24].name
                    }
                    break;
                case '7':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 32].img)
                        cardsText[j].innerHTML = pets48[j + 32].name
                    }
                    break;
                case '8':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 40].img)
                        cardsText[j].innerHTML = pets48[j + 40].name
                        btnRight.disabled = false
                        btnEnd.disabled = false
                        btnRight.classList.remove('button-inactive-left')
                        btnRight.classList.add('button-right')
                        btnEnd.classList.remove('button-inactive-left')
                        btnEnd.classList.add('button-right')
                    }
                    break;

            }
        }
    }

    if (document.querySelector('body').offsetWidth <= 768) {
        if (+btnPage.innerHTML > 1) {
            switch (btnPage.innerHTML) {
                case '2':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', json[j].img)
                        cardsText[j].innerHTML = json[j].name
                    }
                    btnLeft.disabled = true
                    btnStart.disabled = true
                    btnLeft.classList.remove('button-right')
                    btnLeft.classList.add('button-inactive-left')
                    btnStart.classList.remove('button-right')
                    btnStart.classList.add('button-inactive-left')
                    break;
                case '3':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j].img)
                        cardsText[j].innerHTML = pets48[j].name
                    }
                    break;
                case '4':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 8].img)
                        cardsText[j].innerHTML = pets48[j + 8].name
                    }
                    break;
                case '5':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 16].img)
                        cardsText[j].innerHTML = pets48[j + 16].name
                    }
                    break;
                case '6':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 24].img)
                        cardsText[j].innerHTML = pets48[j + 24].name
                    }
                    break;
                case '7':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 32].img)
                        cardsText[j].innerHTML = pets48[j + 32].name
                    }
                    break;
                case '8':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 40].img)
                        cardsText[j].innerHTML = pets48[j + 40].name
                    }
                    break;
                case '9':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 8].img)
                        cardsText[j].innerHTML = pets48[j + 8].name
                    }
                    break;
                case '10':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 32].img)
                        cardsText[j].innerHTML = pets48[j + 32].name
                    }
                    break;
                case '11':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 24].img)
                        cardsText[j].innerHTML = pets48[j + 24].name
                    }
                    break;
                case '12':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 16].img)
                        cardsText[j].innerHTML = pets48[j + 16].name
                    }
                    break;
                case '13':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 40].img)
                        cardsText[j].innerHTML = pets48[j + 40].name
                    }
                    break;
                case '14':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 8].img)
                        cardsText[j].innerHTML = pets48[j + 8].name
                    }
                    break;
                case '15':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 24].img)
                        cardsText[j].innerHTML = pets48[j + 24].name
                    }
                    break;
                case '16':
                    for (let j = 0; j < 8; j++) {
                        photos[j].setAttribute('src', pets48[j + 32].img)
                        cardsText[j].innerHTML = pets48[j + 32].name
                    }
                    btnRight.disabled = false
                    btnEnd.disabled = false
                    btnRight.classList.remove('button-inactive-left')
                    btnRight.classList.add('button-right')
                    btnEnd.classList.remove('button-inactive-left')
                    btnEnd.classList.add('button-right')
                    break;

            }
        }
    }
    btnPage.innerHTML = `${+btnPage.innerHTML - 1}`

}

const toEnd = () => {

    if (document.querySelector('body').offsetWidth > 1280) {
        btnPage.innerHTML = '6'
        for (let j = 0; j < 8; j++) {
            photos[j].setAttribute('src', pets48[j + 32].img)
            cardsText[j].innerHTML = pets48[j + 32].name
        }
    }

    if (document.querySelector('body').offsetWidth > 768 && document.querySelector('body').offsetWidth < 1280) {
        btnPage.innerHTML = '8'
        for (let j = 0; j < 8; j++) {
            photos[j].setAttribute('src', pets48[j + 8].img)
            cardsText[j].innerHTML = pets48[j + 8].name
        }
    }

    if (document.querySelector('body').offsetWidth < 768) {
        btnPage.innerHTML = '16'
        for (let j = 0; j < 8; j++) {
            photos[j].setAttribute('src', pets48[j + 32].img)
            cardsText[j].innerHTML = pets48[j + 32].name
        }
    }

    btnLeft.disabled = false
    btnStart.disabled = false
    btnLeft.classList.remove('button-inactive-left')
    btnLeft.classList.add('button-right')
    btnStart.classList.remove('button-inactive-left')
    btnStart.classList.add('button-right')

    btnRight.disabled = true
    btnEnd.disabled = true
    btnRight.classList.remove('button-right')
    btnRight.classList.add('button-inactive-left')
    btnEnd.classList.remove('button-right')
    btnEnd.classList.add('button-inactive-left')
}

const toStart = () => {
    btnPage.innerHTML = '1'
    btnRight.disabled = false
    btnEnd.disabled = false
    btnRight.classList.remove('button-inactive-left')
    btnRight.classList.add('button-right')
    btnEnd.classList.remove('button-inactive-left')
    btnEnd.classList.add('button-right')
    for (let j = 0; j < 8; j++) {
        photos[j].setAttribute('src', json[j].img)
        cardsText[j].innerHTML = json[j].name
    }
    btnLeft.disabled = true
    btnStart.disabled = true
    btnLeft.classList.remove('button-right')
    btnLeft.classList.add('button-inactive-left')
    btnStart.classList.remove('button-right')
    btnStart.classList.add('button-inactive-left')
}



targets.forEach(i => i.addEventListener('click', () => {
    popUp.style.display = 'flex'
    superWrapper2.style.display = 'flex'
    superWrapper2.style.height = '161.125rem'
    superWrapper2.style.background = "rgba(41, 41, 41, 0.6)"
    superWrapper2.style.overflowY = 'hidden'
    document.body.style.overflowY = 'hidden'
    switch (btnPage.innerHTML) {
        case '1':
            for (let j = 0; j <= 8; j++) {
                switch (i) {
                    case targets[j]:
                        popImg.setAttribute('src', json[j].img)
                        popName.innerHTML = json[j].name
                        popBreed.innerHTML = `${json[j].type } - ${json[j].breed}`
                        popDescription.innerHTML = json[j].description
                        age.innerHTML = json[j].age
                        inoculations.innerHTML = json[j].inoculations
                        diseases.innerHTML = json[j].diseases
                        parasites.innerHTML = json[j].parasites
                        break;
                }
            }
            break;
        case '2':
            for (let j = 0; j <= 8; j++) {
                switch (i) {
                    case targets[j]:
                        popImg.setAttribute('src', pets48[j].img)
                        popName.innerHTML = pets48[j].name
                        popBreed.innerHTML = `${pets48[j].type } - ${pets48[j].breed}`
                        popDescription.innerHTML = pets48[j].description
                        age.innerHTML = pets48[j].age
                        inoculations.innerHTML = pets48[j].inoculations
                        diseases.innerHTML = pets48[j].diseases
                        parasites.innerHTML = pets48[j].parasites
                        break;
                }
            }
            break;
        case '3':
            for (let j = 0; j <= 8; j++) {
                switch (i) {
                    case targets[j]:
                        popImg.setAttribute('src', pets48[j + 8].img)
                        popName.innerHTML = pets48[j + 8].name
                        popBreed.innerHTML = `${pets48[j+8].type } - ${pets48[j+8].breed}`
                        popDescription.innerHTML = pets48[j + 8].description
                        age.innerHTML = pets48[j + 8].age
                        inoculations.innerHTML = pets48[j + 8].inoculations
                        diseases.innerHTML = pets48[j + 8].diseases
                        parasites.innerHTML = pets48[j + 8].parasites
                        break;
                }
            }
            break;
        case '4':
            for (let j = 0; j <= 8; j++) {
                switch (i) {
                    case targets[j]:
                        popImg.setAttribute('src', pets48[j + 16].img)
                        popName.innerHTML = pets48[j + 16].name
                        popBreed.innerHTML = `${pets48[j+16].type } - ${pets48[j+16].breed}`
                        popDescription.innerHTML = pets48[j + 16].description
                        age.innerHTML = pets48[j + 16].age
                        inoculations.innerHTML = pets48[j + 16].inoculations
                        diseases.innerHTML = pets48[j + 16].diseases
                        parasites.innerHTML = pets48[j + 16].parasites
                        break;
                }
            }
            break;
        case '5':
            for (let j = 0; j <= 8; j++) {
                switch (i) {
                    case targets[j]:
                        popImg.setAttribute('src', pets48[j + 24].img)
                        popName.innerHTML = pets48[j + 24].name
                        popBreed.innerHTML = `${pets48[j+24].type } - ${pets48[j+24].breed}`
                        popDescription.innerHTML = pets48[j + 24].description
                        age.innerHTML = pets48[j + 24].age
                        inoculations.innerHTML = pets48[j + 24].inoculations
                        diseases.innerHTML = pets48[j + 24].diseases
                        parasites.innerHTML = pets48[j + 24].parasites
                        break;
                }
            }
            break;
        case '6':
            for (let j = 0; j <= 8; j++) {
                switch (i) {
                    case targets[j]:
                        popImg.setAttribute('src', pets48[j + 32].img)
                        popName.innerHTML = pets48[j + 32].name
                        popBreed.innerHTML = `${pets48[j+32].type } - ${pets48[j+32].breed}`
                        popDescription.innerHTML = pets48[j + 32].description
                        age.innerHTML = pets48[j + 32].age
                        inoculations.innerHTML = pets48[j + 32].inoculations
                        diseases.innerHTML = pets48[j + 32].diseases
                        parasites.innerHTML = pets48[j + 32].parasites
                        break;
                }
            }
            break;
        case '7':
            for (let j = 0; j <= 8; j++) {
                switch (i) {
                    case targets[j]:
                        popImg.setAttribute('src', pets48[j + 40].img)
                        popName.innerHTML = pets48[j + 40].name
                        popBreed.innerHTML = `${pets48[j+40].type } - ${pets48[j+40].breed}`
                        popDescription.innerHTML = pets48[j + 40].description
                        age.innerHTML = pets48[j + 40].age
                        inoculations.innerHTML = pets48[j + 40].inoculations
                        diseases.innerHTML = pets48[j + 40].diseases
                        parasites.innerHTML = pets48[j + 40].parasites
                        break;
                }
            }
            break;
        case '8':
            for (let j = 0; j <= 8; j++) {
                switch (i) {
                    case targets[j]:
                        popImg.setAttribute('src', pets48[j + 8].img)
                        popName.innerHTML = pets48[j + 8].name
                        popBreed.innerHTML = `${pets48[j+8].type } - ${pets48[j+8].breed}`
                        popDescription.innerHTML = pets48[j + 8].description
                        age.innerHTML = pets48[j + 8].age
                        inoculations.innerHTML = pets48[j + 8].inoculations
                        diseases.innerHTML = pets48[j + 8].diseases
                        parasites.innerHTML = pets48[j + 8].parasites
                        break;
                }
            }
            break;
        case '9':
            for (let j = 0; j <= 8; j++) {
                switch (i) {
                    case targets[j]:
                        popImg.setAttribute('src', pets48[j + 32].img)
                        popName.innerHTML = pets48[j + 32].name
                        popBreed.innerHTML = `${pets48[j+32].type } - ${pets48[j+32].breed}`
                        popDescription.innerHTML = pets48[j + 32].description
                        age.innerHTML = pets48[j + 32].age
                        inoculations.innerHTML = pets48[j + 32].inoculations
                        diseases.innerHTML = pets48[j + 32].diseases
                        parasites.innerHTML = pets48[j + 32].parasites
                        break;
                }
            }
            break;
        case '10':
            for (let j = 0; j <= 8; j++) {
                switch (i) {
                    case targets[j]:
                        popImg.setAttribute('src', pets48[j + 24].img)
                        popName.innerHTML = pets48[j + 24].name
                        popBreed.innerHTML = `${pets48[j+24].type } - ${pets48[j+24].breed}`
                        popDescription.innerHTML = pets48[j + 24].description
                        age.innerHTML = pets48[j + 24].age
                        inoculations.innerHTML = pets48[j + 24].inoculations
                        diseases.innerHTML = pets48[j + 24].diseases
                        parasites.innerHTML = pets48[j + 24].parasites
                        break;
                }
            }
            break;
        case '11':
            for (let j = 0; j <= 8; j++) {
                switch (i) {
                    case targets[j]:
                        popImg.setAttribute('src', pets48[j + 16].img)
                        popName.innerHTML = pets48[j + 16].name
                        popBreed.innerHTML = `${pets48[j+16].type } - ${pets48[j+16].breed}`
                        popDescription.innerHTML = pets48[j + 16].description
                        age.innerHTML = pets48[j + 16].age
                        inoculations.innerHTML = pets48[j + 16].inoculations
                        diseases.innerHTML = pets48[j + 16].diseases
                        parasites.innerHTML = pets48[j + 16].parasites
                        break;
                }
            }
            break;
        case '12':
            for (let j = 0; j <= 8; j++) {
                switch (i) {
                    case targets[j]:
                        popImg.setAttribute('src', pets48[j + 40].img)
                        popName.innerHTML = pets48[j + 40].name
                        popBreed.innerHTML = `${pets48[j+40].type } - ${pets48[j+40].breed}`
                        popDescription.innerHTML = pets48[j + 40].description
                        age.innerHTML = pets48[j + 40].age
                        inoculations.innerHTML = pets48[j + 40].inoculations
                        diseases.innerHTML = pets48[j + 40].diseases
                        parasites.innerHTML = pets48[j + 40].parasites
                        break;
                }
            }
            break;
        case '13':
            for (let j = 0; j <= 8; j++) {
                switch (i) {
                    case targets[j]:
                        popImg.setAttribute('src', pets48[j + 8].img)
                        popName.innerHTML = pets48[j + 8].name
                        popBreed.innerHTML = `${pets48[j+8].type } - ${pets48[j+8].breed}`
                        popDescription.innerHTML = pets48[j + 8].description
                        age.innerHTML = pets48[j + 8].age
                        inoculations.innerHTML = pets48[j + 8].inoculations
                        diseases.innerHTML = pets48[j + 8].diseases
                        parasites.innerHTML = pets48[j + 8].parasites
                        break;
                }
            }
            break;
        case '14':
            for (let j = 0; j <= 8; j++) {
                switch (i) {
                    case targets[j]:
                        popImg.setAttribute('src', pets48[j + 24].img)
                        popName.innerHTML = pets48[j + 24].name
                        popBreed.innerHTML = `${pets48[j+24].type } - ${pets48[j+24].breed}`
                        popDescription.innerHTML = pets48[j + 24].description
                        age.innerHTML = pets48[j + 24].age
                        inoculations.innerHTML = pets48[j + 24].inoculations
                        diseases.innerHTML = pets48[j + 24].diseases
                        parasites.innerHTML = pets48[j + 24].parasites
                        break;
                }
            }
            break;
        case '15':
            for (let j = 0; j <= 8; j++) {
                switch (i) {
                    case targets[j]:
                        popImg.setAttribute('src', pets48[j + 32].img)
                        popName.innerHTML = pets48[j + 32].name
                        popBreed.innerHTML = `${pets48[j+32].type } - ${pets48[j+32].breed}`
                        popDescription.innerHTML = pets48[j + 32].description
                        age.innerHTML = pets48[j + 32].age
                        inoculations.innerHTML = pets48[j + 32].inoculations
                        diseases.innerHTML = pets48[j + 32].diseases
                        parasites.innerHTML = pets48[j + 32].parasites
                        break;
                }
            }
            break;
        case '16':
            for (let j = 0; j <= 8; j++) {
                switch (i) {
                    case targets[j]:
                        popImg.setAttribute('src', pets48[j].img)
                        popName.innerHTML = pets48[j].name
                        popBreed.innerHTML = `${pets48[j].type } - ${pets48[j].breed}`
                        popDescription.innerHTML = pets48[j].description
                        age.innerHTML = pets48[j].age
                        inoculations.innerHTML = pets48[j].inoculations
                        diseases.innerHTML = pets48[j].diseases
                        parasites.innerHTML = pets48[j].parasites
                        break;
                }
            }
            break;
    }

}))



window.onclick = (e) => {
    if (e.target === superWrapper || e.target === burger) {
        superWrapper.style.display = 'none'
        menu.classList.remove('visible')
        menu.classList.toggle('invisible')
        clicked = false
        burger.classList.remove('burger-v')
        burgerIcon.setAttribute('src', '../../assets/icons/burger.svg')
        superWrapper.style.overflowY = 'auto'
        document.body.style.overflowY = 'auto'
    }
    if (e.target === superWrapper2 || e.target === popUp || e.target === closePopUp) {
        popUp.style.display = 'none'
        superWrapper2.style.display = 'none'
        superWrapper2.style.overflowY = 'auto'
        document.body.style.overflowY = 'auto'
    }
}

window.onmouseover = (e) => {
    if (e.target === superWrapper2 || e.target === popUp || e.target === closePopUp) {
        closePopUp.style.transform = "scale(1.3)"
    }
}
window.onmouseout = (e) => {
    if (e.target === superWrapper2 || e.target === popUp) {
        closePopUp.style.transform = "scale(1)"
    }
}

btnRight.addEventListener('click', changeCardsRight);
btnLeft.addEventListener('click', changeCardsLeft);
btnEnd.addEventListener('click', toEnd);
btnStart.addEventListener('click', toStart);