'use strict';

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

let jsonCopy = [...json]
let petsPage = document.querySelectorAll('button.btn1, button.button_primary2')
petsPage.forEach(i => i.addEventListener('click', () => { window.location.href = '../pets/index.html' }))

let clicked = false
let mainPage = document.querySelector('a.active-link')
mainPage.addEventListener('click', () => {
    clicked = false
    burger.classList.remove('burger-v')
    menu.classList.remove('visible')
    menu.classList.toggle('invisible')
    superWrapper.style.display = 'none'
    superWrapper.style.overflowY = 'auto'
    document.body.style.overflowY = 'auto'

})

let superWrapper = document.querySelector('.super')
let superWrapper2 = document.querySelector('.super2')


let sliderMenu = () => {
    if (clicked) {
        menu.classList.remove('invisible')
        menu.classList.toggle('visible')

        superWrapper.style.display = 'flex'
        superWrapper.style.height = '161.125rem'
        superWrapper.style.background = "rgba(41, 41, 41, 0.6)"
        superWrapper.style.overflowY = 'hidden'
        document.body.style.overflowY = 'hidden'

    }
    if (!clicked) {
        menu.classList.remove('visible')
        menu.classList.toggle('invisible')

        superWrapper.style.display = 'none'
        superWrapper.style.overflowY = 'auto'
        document.body.style.overflowY = 'auto'
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


window.onclick = (e) => {
    if (e.target === superWrapper || e.target === burger) {
        superWrapper.style.display = 'none'
        menu.classList.remove('visible')
        menu.classList.toggle('invisible')
        clicked = false
        burger.classList.remove('burger-v')
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


let photos = document.querySelectorAll('.photo')
let cardsText = document.querySelectorAll('.card1-text,.card2-text,.card3-text,.card4-text,.card5-text,.card6-text,.card7-text,.card8-text')


const changePets = () => {
    const newPets = json
    for (let j = 0; j < json.length; j++) {
        let randomInd = j
        const randomElem = newPets.splice(randomInd, 1)[0]
        newPets.push(randomElem)
    }
    json = newPets
    return json
}


let arr1 = json.splice(0, 4)
let arr2 = json.splice(0, 4)

const changePets1 = () => {
    const newPets = arr1
    for (let j = arr1.length; j = 0; j--) {
        let randomInd = Math.floor(Math.random() * j)
        const randomElem = newPets.splice(randomInd, 1)[0]
        newPets.push(randomElem)
    }
    arr1 = newPets
    return arr1
}

const changePets2 = () => {
    const newPets = arr2
    for (let j = 0; j < arr2.length; j++) {
        let randomInd = Math.floor(Math.random() * j)
        const randomElem = newPets.splice(randomInd, 1)[0]
        newPets.push(randomElem)
    }
    arr2 = newPets
    return arr2
}

let fistList = true

const changeCards = () => {
    fistList = !fistList
    changePets1()
    changePets2()
    let j = Math.floor(Math.random(3) * 4)

    if (fistList) {
        switch (j) {
            case 0:
                photos[0].setAttribute('src', arr1[j + 1].img)
                cardsText[0].innerHTML = arr1[j + 1].name
                photos[1].setAttribute('src', arr1[j + 2].img)
                cardsText[1].innerHTML = arr1[j + 2].name
                photos[2].setAttribute('src', arr1[j + 3].img)
                cardsText[2].innerHTML = arr1[j + 3].name
                break;
            case 1:
                photos[0].setAttribute('src', arr1[j + 1].img)
                cardsText[0].innerHTML = arr1[j + 1].name
                photos[1].setAttribute('src', arr1[j].img)
                cardsText[1].innerHTML = arr1[j].name
                photos[2].setAttribute('src', arr1[j + 2].img)
                cardsText[2].innerHTML = arr1[j + 2].name
                break;
            case 2:
                photos[0].setAttribute('src', arr1[j + 1].img)
                cardsText[0].innerHTML = arr1[j + 1].name
                photos[1].setAttribute('src', arr1[j - 1].img)
                cardsText[1].innerHTML = arr1[j - 1].name
                photos[2].setAttribute('src', arr1[j].img)
                cardsText[2].innerHTML = arr1[j].name
                break;
            case 3:
                photos[0].setAttribute('src', arr1[j - 1].img)
                cardsText[0].innerHTML = arr1[j - 1].name
                photos[1].setAttribute('src', arr1[j].img)
                cardsText[1].innerHTML = arr1[j].name
                photos[2].setAttribute('src', arr1[j - 3].img)
                cardsText[2].innerHTML = arr1[j - 3].name
                break;
        }

    }
    if (!fistList) {
        switch (j) {
            case 0:
                photos[0].setAttribute('src', arr2[j + 1].img)
                cardsText[0].innerHTML = arr2[j + 1].name
                photos[1].setAttribute('src', arr2[j + 2].img)
                cardsText[1].innerHTML = arr2[j + 2].name
                photos[2].setAttribute('src', arr2[j + 3].img)
                cardsText[2].innerHTML = arr2[j + 3].name
                break;
            case 1:
                photos[0].setAttribute('src', arr2[j + 1].img)
                cardsText[0].innerHTML = arr2[j + 1].name
                photos[1].setAttribute('src', arr2[j].img)
                cardsText[1].innerHTML = arr2[j].name
                photos[2].setAttribute('src', arr2[j + 2].img)
                cardsText[2].innerHTML = arr2[j + 2].name
                break;
            case 2:
                photos[0].setAttribute('src', arr2[j + 1].img)
                cardsText[0].innerHTML = arr2[j + 1].name
                photos[1].setAttribute('src', arr2[j - 1].img)
                cardsText[1].innerHTML = arr2[j - 1].name
                photos[2].setAttribute('src', arr2[j].img)
                cardsText[2].innerHTML = arr2[j].name
                break;
            case 3:
                photos[0].setAttribute('src', arr2[j - 1].img)
                cardsText[0].innerHTML = arr2[j - 1].name
                photos[1].setAttribute('src', arr2[j].img)
                cardsText[1].innerHTML = arr2[j].name
                photos[2].setAttribute('src', arr2[j - 3].img)
                cardsText[2].innerHTML = arr2[j - 3].name
                break;
        }
    }

    targets.forEach(i => i.addEventListener('click', () => {
        popUp.style.display = 'flex'

        switch (i) {
            case targets[0]:
                if (fistList) {
                    switch (j) {
                        case 0:
                            popImg.setAttribute('src', arr1[j + 1].img)
                            popName.innerHTML = arr1[j + 1].name
                            popBreed.innerHTML = `${arr1[j+1].type } - ${arr1[j+1].breed}`
                            popDescription.innerHTML = arr1[j + 1].description
                            age.innerHTML = arr1[j + 1].age
                            inoculations.innerHTML = arr1[j + 1].inoculations
                            diseases.innerHTML = arr1[j + 1].diseases
                            parasites.innerHTML = arr1[j + 1].parasites
                            break;
                        case 1:
                            popImg.setAttribute('src', arr1[j + 1].img)
                            popName.innerHTML = arr1[j + 1].name
                            popBreed.innerHTML = `${arr1[j+1].type } - ${arr1[j+1].breed}`
                            popDescription.innerHTML = arr1[j + 1].description
                            age.innerHTML = arr1[j + 1].age
                            inoculations.innerHTML = arr1[j + 1].inoculations
                            diseases.innerHTML = arr1[j + 1].diseases
                            parasites.innerHTML = arr1[j + 1].parasites
                            break;
                        case 2:
                            popImg.setAttribute('src', arr1[j + 1].img)
                            popName.innerHTML = arr1[j + 1].name
                            popBreed.innerHTML = `${arr1[j+1].type } - ${arr1[j+1].breed}`
                            popDescription.innerHTML = arr1[j + 1].description
                            age.innerHTML = arr1[j + 1].age
                            inoculations.innerHTML = arr1[j + 1].inoculations
                            diseases.innerHTML = arr1[j + 1].diseases
                            parasites.innerHTML = arr1[j + 1].parasites
                            break;
                        case 3:
                            popImg.setAttribute('src', arr1[j - 1].img)
                            popName.innerHTML = arr1[j - 1].name
                            popBreed.innerHTML = `${arr1[j-1].type } - ${arr1[j-1].breed}`
                            popDescription.innerHTML = arr1[j - 1].description
                            age.innerHTML = arr1[j - 1].age
                            inoculations.innerHTML = arr1[j - 1].inoculations
                            diseases.innerHTML = arr1[j - 1].diseases
                            parasites.innerHTML = arr1[j - 1].parasites
                            break;
                    }

                }
                if (!fistList) {
                    switch (j) {
                        case 0:
                            popImg.setAttribute('src', arr2[j + 1].img)
                            popName.innerHTML = arr2[j + 1].name
                            popBreed.innerHTML = `${arr2[j+1].type } - ${arr2[j+1].breed}`
                            popDescription.innerHTML = arr2[j + 1].description
                            age.innerHTML = arr2[j + 1].age
                            inoculations.innerHTML = arr2[j + 1].inoculations
                            diseases.innerHTML = arr2[j + 1].diseases
                            parasites.innerHTML = arr2[j + 1].parasites
                            break;
                        case 1:
                            popImg.setAttribute('src', arr2[j + 1].img)
                            popName.innerHTML = arr2[j + 1].name
                            popBreed.innerHTML = `${arr2[j+1].type } - ${arr2[j+1].breed}`
                            popDescription.innerHTML = arr2[j + 1].description
                            age.innerHTML = arr2[j + 1].age
                            inoculations.innerHTML = arr2[j + 1].inoculations
                            diseases.innerHTML = arr2[j + 1].diseases
                            parasites.innerHTML = arr2[j + 1].parasites
                            break;
                        case 2:
                            popImg.setAttribute('src', arr2[j + 1].img)
                            popName.innerHTML = arr2[j + 1].name
                            popBreed.innerHTML = `${arr2[j+1].type } - ${arr2[j+1].breed}`
                            popDescription.innerHTML = arr2[j + 1].description
                            age.innerHTML = arr2[j + 1].age
                            inoculations.innerHTML = arr2[j + 1].inoculations
                            diseases.innerHTML = arr2[j + 1].diseases
                            parasites.innerHTML = arr2[j + 1].parasites
                            break;
                        case 3:
                            popImg.setAttribute('src', arr2[j - 1].img)
                            popName.innerHTML = arr2[j - 1].name
                            popBreed.innerHTML = `${arr2[j-1].type } - ${arr2[j-1].breed}`
                            popDescription.innerHTML = arr2[j - 1].description
                            age.innerHTML = arr2[j - 1].age
                            inoculations.innerHTML = arr2[j - 1].inoculations
                            diseases.innerHTML = arr2[j - 1].diseases
                            parasites.innerHTML = arr2[j - 1].parasites
                            break;
                    }
                }
                break;
            case targets[1]:
                if (fistList) {
                    switch (j) {
                        case 0:
                            popImg.setAttribute('src', arr1[j + 2].img)
                            popName.innerHTML = arr1[j + 2].name
                            popBreed.innerHTML = `${arr1[j+2].type } - ${arr1[j+2].breed}`
                            popDescription.innerHTML = arr1[j + 2].description
                            age.innerHTML = arr1[j + 2].age
                            inoculations.innerHTML = arr1[j + 2].inoculations
                            diseases.innerHTML = arr1[j + 2].diseases
                            parasites.innerHTML = arr1[j + 2].parasites
                            break;
                        case 1:
                            popImg.setAttribute('src', arr1[j].img)
                            popName.innerHTML = arr1[j].name
                            popBreed.innerHTML = `${arr1[j].type } - ${arr1[j].breed}`
                            popDescription.innerHTML = arr1[j].description
                            age.innerHTML = arr1[j].age
                            inoculations.innerHTML = arr1[j].inoculations
                            diseases.innerHTML = arr1[j].diseases
                            parasites.innerHTML = arr1[j].parasites
                            break;
                        case 2:
                            popImg.setAttribute('src', arr1[j - 1].img)
                            popName.innerHTML = arr1[j - 1].name
                            popBreed.innerHTML = `${arr1[j-1].type } - ${arr1[j-1].breed}`
                            popDescription.innerHTML = arr1[j - 1].description
                            age.innerHTML = arr1[j - 1].age
                            inoculations.innerHTML = arr1[j - 1].inoculations
                            diseases.innerHTML = arr1[j - 1].diseases
                            parasites.innerHTML = arr1[j - 1].parasites
                            break;
                        case 3:
                            popImg.setAttribute('src', arr1[j].img)
                            popName.innerHTML = arr1[j].name
                            popBreed.innerHTML = `${arr1[j].type } - ${arr1[j].breed}`
                            popDescription.innerHTML = arr1[j].description
                            age.innerHTML = arr1[j].age
                            inoculations.innerHTML = arr1[j].inoculations
                            diseases.innerHTML = arr1[j].diseases
                            parasites.innerHTML = arr1[j].parasites
                            break;
                    }

                }
                if (!fistList) {
                    switch (j) {
                        case 0:
                            popImg.setAttribute('src', arr2[j + 2].img)
                            popName.innerHTML = arr2[j + 2].name
                            popBreed.innerHTML = `${arr2[j+2].type } - ${arr2[j+2].breed}`
                            popDescription.innerHTML = arr2[j + 2].description
                            age.innerHTML = arr2[j + 2].age
                            inoculations.innerHTML = arr2[j + 2].inoculations
                            diseases.innerHTML = arr2[j + 2].diseases
                            parasites.innerHTML = arr2[j + 2].parasites
                            break;
                        case 1:
                            popImg.setAttribute('src', arr2[j].img)
                            popName.innerHTML = arr2[j].name
                            popBreed.innerHTML = `${arr2[j].type } - ${arr2[j].breed}`
                            popDescription.innerHTML = arr2[j].description
                            age.innerHTML = arr2[j].age
                            inoculations.innerHTML = arr2[j].inoculations
                            diseases.innerHTML = arr2[j].diseases
                            parasites.innerHTML = arr2[j].parasites
                            break;
                        case 2:
                            popImg.setAttribute('src', arr2[j - 1].img)
                            popName.innerHTML = arr2[j - 1].name
                            popBreed.innerHTML = `${arr2[j-1].type } - ${arr2[j-1].breed}`
                            popDescription.innerHTML = arr2[j - 1].description
                            age.innerHTML = arr2[j - 1].age
                            inoculations.innerHTML = arr2[j - 1].inoculations
                            diseases.innerHTML = arr2[j - 1].diseases
                            parasites.innerHTML = arr2[j - 1].parasites
                            break;
                        case 3:
                            popImg.setAttribute('src', arr2[j].img)
                            popName.innerHTML = arr2[j].name
                            popBreed.innerHTML = `${arr2[j].type } - ${arr2[j].breed}`
                            popDescription.innerHTML = arr2[j].description
                            age.innerHTML = arr2[j].age
                            inoculations.innerHTML = arr2[j].inoculations
                            diseases.innerHTML = arr2[j].diseases
                            parasites.innerHTML = arr2[j].parasites
                            break;
                    }
                }

                break;
            case targets[2]:
                if (fistList) {
                    switch (j) {
                        case 0:
                            popImg.setAttribute('src', arr1[j + 3].img)
                            popName.innerHTML = arr1[j + 3].name
                            popBreed.innerHTML = `${arr1[j + 3].type } - ${arr1[j + 3].breed}`
                            popDescription.innerHTML = arr1[j + 3].description
                            age.innerHTML = arr1[j + 3].age
                            inoculations.innerHTML = arr1[j + 3].inoculations
                            diseases.innerHTML = arr1[j + 3].diseases
                            parasites.innerHTML = arr1[j + 3].parasites
                            break;
                        case 1:
                            popImg.setAttribute('src', arr1[j + 2].img)
                            popName.innerHTML = arr1[j + 2].name
                            popBreed.innerHTML = `${arr1[j+2].type } - ${arr1[j+2].breed}`
                            popDescription.innerHTML = arr1[j + 2].description
                            age.innerHTML = arr1[j + 2].age
                            inoculations.innerHTML = arr1[j + 2].inoculations
                            diseases.innerHTML = arr1[j + 2].diseases
                            parasites.innerHTML = arr1[j + 2].parasites
                            break;
                        case 2:
                            popImg.setAttribute('src', arr1[j].img)
                            popName.innerHTML = arr1[j].name
                            popBreed.innerHTML = `${arr1[j].type } - ${arr1[j].breed}`
                            popDescription.innerHTML = arr1[j].description
                            age.innerHTML = arr1[j].age
                            inoculations.innerHTML = arr1[j].inoculations
                            diseases.innerHTML = arr1[j].diseases
                            parasites.innerHTML = arr1[j].parasites
                            break;
                        case 3:
                            popImg.setAttribute('src', arr1[j - 3].img)
                            popName.innerHTML = arr1[j - 3].name
                            popBreed.innerHTML = `${arr1[j-3].type } - ${arr1[j-3].breed}`
                            popDescription.innerHTML = arr1[j - 3].description
                            age.innerHTML = arr1[j - 3].age
                            inoculations.innerHTML = arr1[j - 3].inoculations
                            diseases.innerHTML = arr1[j - 3].diseases
                            parasites.innerHTML = arr1[j - 3].parasites
                            break;
                    }

                }
                if (!fistList) {
                    switch (j) {
                        case 0:
                            popImg.setAttribute('src', arr2[j + 3].img)
                            popName.innerHTML = arr2[j + 3].name
                            popBreed.innerHTML = `${arr2[j+3].type } - ${arr2[j+3].breed}`
                            popDescription.innerHTML = arr2[j + 3].description
                            age.innerHTML = arr2[j + 3].age
                            inoculations.innerHTML = arr2[j + 3].inoculations
                            diseases.innerHTML = arr2[j + 3].diseases
                            parasites.innerHTML = arr2[j + 3].parasites
                            break;
                        case 1:
                            popImg.setAttribute('src', arr2[j + 2].img)
                            popName.innerHTML = arr2[j + 2].name
                            popBreed.innerHTML = `${arr2[j+2].type } - ${arr2[j+2].breed}`
                            popDescription.innerHTML = arr2[j + 2].description
                            age.innerHTML = arr2[j + 2].age
                            inoculations.innerHTML = arr2[j + 2].inoculations
                            diseases.innerHTML = arr2[j + 2].diseases
                            parasites.innerHTML = arr2[j + 2].parasites
                            break;
                        case 2:
                            popImg.setAttribute('src', arr2[j].img)
                            popName.innerHTML = arr2[j].name
                            popBreed.innerHTML = `${arr2[j].type } - ${arr2[j].breed}`
                            popDescription.innerHTML = arr2[j].description
                            age.innerHTML = arr2[j].age
                            inoculations.innerHTML = arr2[j].inoculations
                            diseases.innerHTML = arr2[j].diseases
                            parasites.innerHTML = arr2[j].parasites
                            break;
                        case 3:
                            popImg.setAttribute('src', arr2[j - 3].img)
                            popName.innerHTML = arr2[j - 3].name
                            popBreed.innerHTML = `${arr2[j-3].type } - ${arr2[j-3].breed}`
                            popDescription.innerHTML = arr2[j - 3].description
                            age.innerHTML = arr2[j - 3].age
                            inoculations.innerHTML = arr2[j - 3].inoculations
                            diseases.innerHTML = arr2[j - 3].diseases
                            parasites.innerHTML = arr2[j - 3].parasites
                            break;
                    }
                }
                break;
        }
    }))
}




targets.forEach(i => i.addEventListener('click', () => {
    popUp.style.display = 'flex'
    superWrapper2.style.display = 'flex'
    superWrapper2.style.height = '161.125rem'
    superWrapper2.style.background = "rgba(41, 41, 41, 0.6)"
    superWrapper2.style.overflowY = 'hidden'
    document.body.style.overflowY = 'hidden'

    for (let j = 0; j < 3; j++) {
        switch (i) {
            case targets[j]:
                popImg.setAttribute('src', jsonCopy[j].img)
                popName.innerHTML = jsonCopy[j].name
                popBreed.innerHTML = `${jsonCopy[j].type } - ${jsonCopy[j].breed}`
                popDescription.innerHTML = jsonCopy[j].description
                age.innerHTML = jsonCopy[j].age
                inoculations.innerHTML = jsonCopy[j].inoculations
                diseases.innerHTML = jsonCopy[j].diseases
                parasites.innerHTML = jsonCopy[j].parasites
                break;
        }
    }
}))


let btnLeft = document.querySelector('.btn-arrow-left')
let btnRight = document.querySelector('.btn-arrow-right')
btnRight.addEventListener('click', changeCards)
btnLeft.addEventListener('click', changeCards)