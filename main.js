import './style.css'
import { ProsePlay} from "proseplay"
import { gpt, queer } from './results.js'


//this is heavyhanded but it works
var docs
const app = document.getElementById("app")
const queryClass = app.classList[0]
console.log(app, queryClass)

// let docs = OpenWebTexts // OneTexts
if (queryClass == "queer"){
    docs = queer
} else {
    docs = gpt
}

function fetchIt(){
    pass
}

Array.prototype.random = function (){
    return this[Math.floor((Math.random()*this.length))]
}

function makePP(){
    const el = document.createElement('div')
    el.classList.add("databox")
    document.body.appendChild(el)
    
    const pp = new ProsePlay(el)
    return pp
}

function swapAll(pp){
    // slides every entry at once
    pp.choices.forEach((list, choice)=>{
        let len = list.length
        let current = pp.currentIndexes[choice]
        let next = current+1
        // console.log(current)

        if (current < len-1){
            pp.slideWindow(choice,next)
        } else {
            // pp.currentIndexes[choice] = 0
            next = 0
            pp.slideWindow(choice,next)
        }
    })
}

// function swapR(pp){
//     pp.random
// }

function swapRandom(pp){
    // select random entry
    let randomPP = pp.random()
    // console.log(randomPP.el)
    // let element = document.body.querySelectorAll(".proseplay-current")
    
    let randomPick = randomPP.generate()
    // randomPick.target.classList.add("proseplay-hover");

    // randomPP.choices.forEach((list, choice)=>{
    //     let current = randomPP.currentIndexes[choice]
    //     let next = current+1
    //     let len = list.length

    //     // check if reached end of list
    //     if (next > len-1){
    //         console.log("end")
    //         next = 0
    //     }
    //     // NEXT IN LIST
    //     randomPP.slideWindow(choice,next)

    //     // RANDOM FROM WHOLE LIST
    //     // // // let randomWord = list.random()
    //     // let rWindex = Math.floor((Math.random()*list.length))
    //     // // hoverStyle()
    //     // randomPP.slideWindow(choice,rWindex)
    //     // randomPP.slideWindow(choice, randomPP.random)
    //     // unhoverStyle(randomPP.el.firstChild)
    // })
}

function turnLight() {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
}

function turnDark() {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
}

function hoverStyle() {
    let element = document.body.querySelectorAll(".proseplay-current")
    // console.log(element)
    // element.classList.add("proseplay-has-hover")
    // document.body.classList.add("proseplay-hover")
}

function unhoverStyle(pp) {
    pp.classList.remove("proseplay-has-hover")
    // document.body.classList.remove("proseplay-hover")
}


function setParam(){
    const urlPath = window.location.pathname
    const urlSearch = window.location.search
    console.log(urlPath, urlSearch)
    var docs = urlSearch
    return docs
}


function main(){
    let ppList = []
    // window.addEventListener('content-document-global-created', setParam)
    // async window.addEventListener('DOMContentLoaded', setParam)
    // document.addEventListener('loadstart', setParam)
    // window.addEventListener('onloadstart', setParam)
    // const urlPath = window.location.pathname
    // const urlSearch = window.location.search
    // console.log(urlPath, urlSearch)
    // // var docs = urlPath


    // setParam().then((docs)=>{
    
        docs.forEach((count, i) => {
            let pp = makePP()

            pp.parse(docs[i])
            // pp.parse(count)

            pp.setFunction("turnLight", turnLight);
            pp.setFunction("turnDark", turnDark);
            // pp.setFunction("hover", hoverStyle)

            // let timer = setInterval(function() {swapAll(pp)}, 5000)
            ppList.push(pp)
            // let timer = setInterval(pp.random, 2000)
            return ppList
        })
        // console.log(ppList)
        let timer = setInterval(function() {swapRandom(ppList)}, 2000)
    
    // }).catch((err)=>(console.log(err)))

}

main()


// document.addEventListener('DOMContentLoaded', function(){
//     const docs = window.location.pathname
//     console.log(docs)
//     return docs
// }).then((docs)=>{
//     main()
// })