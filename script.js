// Display the document title in the console
console.log(document.title);


// Change the document title to "Modifying the DOM"
document.title = "Modifying the DOM";

// Change the background color of the body to hot pink (#FF69B4)
document.body.style.backgroundColor = "#FF69B4";

// If that worked, try with a random color as an extra challenge. (tip: You can use the rgb() notation and 3 random-generated numbers between 0 and 255).
document.body.style.backgroundColor = "rgb(31, 81, 255)";

//Using the children method and a for ... of  loop, display every children elements of the second child element of your document (display all children elements of the <body>)
const childrenbody = document.body.children[1].children;
for (const child of childrenbody) {
  console.log(child);
}