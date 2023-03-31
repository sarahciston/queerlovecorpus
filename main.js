import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

import { ProsePlay} from "proseplay"



let doc1 = `this is the (hello|world)[1]
here is another (line|question->turnLight|answer->turnDark)[1]`;

let doc2 = 'here is another (text|series)[-]';

let docs = [doc1, doc2]

// ProsePlay.parse(doc1);

docs.forEach((count, i) => {
    const el = document.createElement('div')
    document.body.appendChild(el)
    
    const pp = new ProsePlay(el)

    pp.parse(docs[i])

    pp.setFunction("turnLight", turnLight);
    pp.setFunction("turnDark", turnDark);

    
})

// const containers = document.querySelectorAll('.text')
// containers.forEach((container, i) => {
//     const pp = new ProsePlay(container)
//     pp.parse(docs[i])
// })

// const pp = new ProsePlay(containers)
// pp.classList.add('.proseplay-plaintext')
// pp.parse(doc1)

function turnLight() {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
}

function turnDark(pp) {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
}

