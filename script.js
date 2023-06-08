//Display the document title in the console
console.log(document.title);

//Change the document title to Modifying the DOM
let title = "Modifying the DOM";
document.title = title;
console.log(title);

//Change the background color of the body to hot pink (#FF69B4). 
//If that worked, try with a random color as an extra challenge. 
//(tip: You can use the rgb() notation and 3 random-generated numbers between 0 and 255)
// let bgcolor =  "#FF69B4";
// document.body.style.backgroundColor = bgcolor;

let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);

let randomColor = "rgb("+red+ "," +green+ "," +blue + ")";
document.body.style.backgroundColor = randomColor;
console.log(randomColor);

//Using the children method and a for ... of  loop, display every children elements of the second child element of your document (display all children elements of the <body>)
let bodyChildren = document.body.children;
for (const child of bodyChildren) {
  console.log(child);
}