//----------------------------------------------Etape 2-------------------------------------//

let Hercule = { 
    name : "Hercule",
    job : "Demi-dieu",
    age : 35,
    departement : 75,
    arm : 60.5,
    inRelationship : "Oui"
}

base.fillProfil(Hercule)

//----------------------------------------------Etape 3---------------------------------------//

const herculeFriendsArray = ["Jupiter","Junon","Alcmène","Déjanire"]

base.printFriends(herculeFriendsArray)

base.setBestFriend("Jupiter")

//--------------------------------------------Etape 4----------------------------------------//

const h1 = document.createElement("h1")
h1.classList.add("banner_title")
h1.innerText="Vous consultez le profil de Hercule"

const headerBanner = document.getElementById("header-banner")
headerBanner.append(h1)

//--------------------------------------------Etape 5----------------------------------------//

for(let i = 0 ; i < 11 ; i++){ 
    base.displayWork(i)
    }

//--------------------------------------------Etape 6----------------------------------------//

const availability = document.getElementById("availability")

if(base.getHour()<8 && base.getHour()>20 ){ 
    availability.innerText = "Non disponible"
    availability.classList.add("off")
    }

    else{ 
        availability.innerText = "Disponible"
    }

//--------------------------------------------Etape 7----------------------------------------//

function Fonction(Prénom,NuméroDeDepartement){ 
    return Prénom+"-du-"+NuméroDeDepartement
}

const h3 = document.getElementById("profil-name")
h3.innerText=Fonction("Hercule",75)

//------------------------------------------Etape 8-----------------------------------------//

const menu = document.getElementById("menu-toggler")

menu.addEventListener("click", () => { 
        headerBanner.classList.toggle("banner--open")
        }
    )

//------------------------------------------Etape 9-----------------------------------------//

const contact = document.getElementById("contact")

contact.addEventListener("click", (e)=> { 
        e.preventDefault()
        alert("Hercule ne souhaite pas etre dérangé.")
        }
    )

//------------------------------------------Etape 10-----------------------------------------//

const voteHercule = base.vote.hercule
const voteCesar = base.vote.cesar
const valeurTotale = voteHercule+voteCesar

const resultatHercule = document.getElementById("herculeVote")
const resultatCesar = document.getElementById("cesarVote")

function calculPourcentage(valeurRelative){ 
        return Math.floor(valeurRelative/valeurTotale*100)
        }

resultatHercule.innerText=calculPourcentage(voteHercule)+"%"
resultatCesar.innerText=calculPourcentage(voteCesar)+"%"

/*
Je n'arrive pas à attribuer de style CSS à "voteBar"...

const voteBar = document.querySelectorAll(".people__bar")

*/

//------------------------------------------Etape 11-----------------------------------------//

//------------------------------------------Etape 12------------------------------------------//

const activity = base.activities

for(let i =0; i<5; i++){ 

    if(activity[i].author=="Hercule" && activity[i].finished==true){ 

        const activities = document.getElementById("activities")
        activities.classList.remove("hidden")


        const ul = document.querySelector(".tasks")
        const li = document.createElement("li")
        ul.append(li)

        li.innerText=activity[i].title

    }

    else{ }
}




