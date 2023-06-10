// Add a title attribute to every element that has the important class, stating This is an important item. 
//Tip: adding a title attribute to an element is different from changing the title of a document.
let important = document.querySelectorAll('.important');

for (let i = 0; i < important.length; i++) {
  const element = important[i];
  element.setAttribute('title', 'This is an important item');
}

// //Select all the img tags and loop through them. If they have no important class, turn their display property to none.
// // Select all img tags
// const images = document.getElementsByTagName('img');

// // Loop through each img tag
// for (let i = 0; i < images.length; i++) {
//   const image = images[i];

//   // Check if the img tag does not have the 'important' class
//   if (!image.classList.contains('important')) {
//     // Set the display property to 'none'
//     image.style.display = 'none';
//   }
// }

//Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well
// Select all paragraphs using querySelectorAll
let paragraphs = document.querySelectorAll('p');

// Loop through each paragraph
for (let i = 0; i < paragraphs.length; i++) {
  let paragraph = paragraphs[i];

  // Display the content of the paragraph in the console
  console.log(paragraph.textContent);

  // Check if the paragraph has a class
  if (paragraph.classList.length > 0) {
    // Display the classname in the console
    console.log("class:"+paragraph.className);
  }
}
// Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.

let pgfs = document.querySelectorAll('p');

for (let i = 0; i < pgfs.length; i++) {
    let pgf = pgfs[i];
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];

        if (!pgf.className) {
            let randomColor = color;
            pgf.style.color = randomColor;
        }
    }
}


