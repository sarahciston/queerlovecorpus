import './style.css'
import { ProsePlay} from "proseplay"

const data = [] //import data TK

let doc1 = `this is the (hello|world|you)[-]
here is another (line|question->turnLight|answer->turnDark|welcome|again)[-]`;
let doc2 = 'here is a separate (box|text|series|dataset)[-]';
let docs = [doc1, doc2]

docs.forEach((count, i) => {
    const el = document.createElement('div')
    el.classList.add("databox")
    document.body.appendChild(el)
    
    const pp = new ProsePlay(el)

    pp.parse(docs[i])

    pp.setFunction("turnLight", turnLight);
    pp.setFunction("turnDark", turnDark);

    let timer = setInterval(swap, 5000)

    function swap(){
        pp.choices.forEach((list, choice)=>{
            let len = list.length
            let current = pp.currentIndexes[choice]
            let next = current+1
            console.log(len, current)

            if (next> len-1){
                pp.currentIndexes[choice] = -1
                next = 0
            }
            pp.slideWindow(choice,next)
        })
    }
})

function turnLight() {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
}

function turnDark() {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
}
