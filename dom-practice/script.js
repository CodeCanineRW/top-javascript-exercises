

const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.classList.add("red");
paragraph.textContent = "Hey I'm Red!";
paragraph.style.color = "red";

container.appendChild(paragraph);

const heading = document.createElement("h3");
heading.classList.add("blue");
heading.style.color = "blue";
heading.textContent = "Hey I'm Blue!";

container.appendChild(heading);

const newDiv = document.createElement("div");
newDiv.classList.add("Black");
newDiv.style.cssText = "border:solid black; background: pink;"
container.appendChild(newDiv);

const newHeading = document.createElement("h1");
newHeading.textContent = "I'm in a div!";

const newPara = document.createElement("p");
newPara.textContent = "ME TOO!";

newDiv.appendChild(newHeading);
newDiv.appendChild(newPara);

// const btn = document.querySelector("#btn");
// btn.onclick = () =>alert('Hello World');

// const bttn = document.querySelector("#bttn");
// bttn.addEventListener("click", () => {
//     alert("Hello World - Method 3");
// });

// const ebtn = document.querySelector("#ebtn");
// ebtn.addEventListener("click", function (e) {
//     e.target.style.background = "blue";
//     e.target.style.color = "white";
//     e.target.textContent = "I have been clicked"
// })

// const buttons = document.querySelectorAll("button");
// buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//         alert(button.id);
//     })
// })

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {

    switch(e.target.id){
        case 'btn':
            console.log('Button Method 2 Pressed');
            break;
        case 'bttn':
            console.log('Button Method 3 Pressed');
            break;
        case 'ebtn':
            console.log('Test Button Pressed');
            break;
    }
} )});