
let container = document.getElementById("container");

console.log(container);

let className = document.getElementsByClassName("language");
 console.log(className);

 let IdSelector = document.getElementById("para");
 let Idselector = document.getElementById("btn");


 console.log(IdSelector);
 console.log(Idselector);

 let querySelector = document.querySelector(".language");
 console.log(querySelector);

 let querySelector2 = document.querySelector("p");
 console.log(querySelector2);

 
 let querySelectorAll = document.querySelectorAll(".language");
 console.log(querySelectorAll);

 // Select all elements with class "language"
const languages = document.querySelectorAll('.language');

// Loop through using for...of
for (const lang of languages) {
    console.log(lang.textContent);
    lang.style.color = 'dark blue';

}

const hobbies = [`Origami`, `Spider-Man`, `Chocolate`, `Ice-cream`];
const div1 = document.getElementById("container");
const originalHTML = container.innerHTML; // save it as a string, once, at the top

function Original(btn){
    console.log("Original clicked");
    btn.style.backgroundColor = "pink";
    div1.innerHTML = originalHTML; // restore the saved string
}

function update(btn){
    console.log("Update clicked");
     btn.style.backgroundColor = "skyblue";
     const newHTML =` 
     <h1>JAVA </h1>
        <p id="para">This is aint a  paragraph.</p>
        <ul>
            <li class="subject">Math</li>
            <li class="subject">Science</li>
            <li class="subject">Art</li>

        </ul>`

        document.getElementById("container").innerHTML = newHTML;
}

function Subject(btn){
    console.log("New-stuff clicked");
     btn.style.backgroundColor = "pink";
     const hobbyElements = document.querySelectorAll("#container .language");

    hobbyElements.forEach((element, index) => {
        element.innerText = hobbies[index];
    });
      
}

