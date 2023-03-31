import './style.css'
import { ProsePlay} from "proseplay"

const data = [] //import data TK

let doc1 = `this is the (hello|world|you|like|to|talk)
here is another (line|question->turnLight|answer->turnDark|welcome|again)`;
// let doc2 = 'here is another (text|series)[-]';
// let docs = [doc1, doc2]
let docs = [doc1]

docs.forEach((count, i) => {
    const el = document.createElement('div')
    el.classList.add("databox")
    document.body.appendChild(el)
    
    const pp = new ProsePlay(el)

    pp.parse(docs[i])

    pp.setFunction("turnLight", turnLight);
    pp.setFunction("turnDark", turnDark);

    // let w = pp.windowIndex
    // timer(w)

    setInterval(multi, 2000)

    function single(){
        let len = pp.choices[0].length
        let current = pp.currentIndexes[0]
        let next = current+1
        console.log(len, current)

        if (next > len-1){
            pp.currentIndexes[0] = -1
            next = 0
            pp.slideWindow(0,next)
        } 
        pp.slideWindow(0,next)
    }

    function multi(){
        pp.choices.forEach((list, choice)=>{
            let len = list.length
            let current = pp.currentIndexes[choice]
            let next = current+1
            console.log(len, current)

            if (next> len-1){
                pp.currentIndexes[choice] = -1
                next = 0
                // pp.slideWindow(choice,next)
            }
            pp.slideWindow(choice,next)
        })
    }
        // pp.currentIndexes.forEach((window, index)=>{
        //     console.log(window, index)
        //     pp.slideWindow(window,index++)
        // })
        // pp.currentIndexes.forEach((w) => {
        //     console.log("choice: ", w)
        //     pp.slideWindow(w, w++)
        // })
        
        // pp.slideWindow(pp.currentIndex, pp.currentIndex++)


    // pp.setFunction("changeAll", )

    // function test(){
    //     let len = pp.choices.length
    //     console.log(len)

    //     for (let w = 0; w < len-1; w++){
    //         pp.slideWindow(w, w++)
    //     }

        // pp.choices.forEach((w) => {
            
        // })

        // for (let w, w < len-1, w++){
        //     pp.slideWindow(w,w++)
        // }
        // let i = pp.choices.currentIndex
        // console.log(i)
        // pp.slideWindow(i, i++)
        // pp.slideWindow(0,1)
        // console.log('moved')
    // }

})

function turnLight() {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
}

function turnDark(pp) {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
}

function timer(w){
    setInterval(slider(w), 1000)
}

function slider(i){
    // pp.slideWindow(i, i++)
    pass
}

