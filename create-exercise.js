//Modify the script.js to create a new <section> with a random background-color for each learner in your group. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>
// let article = document.querySelector('article');

// let learners = ['Jean-Louis', 'Michaella', 'Dave', 'Princia'];

// for (let i = 0; i < learners.length; i++) {

//     let section = document.createElement('section');
        
//     section.innerHTML = "<p>"+learners[i]+"</p>";
//     article.appendChild(section);

//     for(let i = 0; i < 256; i++){
//         const r = Math.floor(Math.random() * 256);            
//         const g = Math.floor(Math.random() * 256);
//         const b = Math.floor(Math.random() * 256);
//         let color = "rgb("+r+ "," +g+ "," +b+ ")";
//         let randomColor = color;
//         section.style.backgroundColor = randomColor;
//     }
// }

//If the background is dark the text should be white, if the background is light the text should be black
// let article = document.querySelector('article');

// let learners = ['Jean-Louis', 'Michaella', 'Dave', 'Princia'];

// for (let i = 0; i < learners.length; i++) {
//   let section = document.createElement('section');
//   section.innerHTML = "<p>" + learners[i] + "</p>";
//   article.appendChild(section);

//   // Random background color
//   let randomColor = "rgb(";
//   for (let j = 0; j < 3; j++) {
//     randomColor += Math.floor(Math.random() * 256);
//     if (j < 2) {
//       randomColor += ",";
//     }
//   }
//   randomColor += ")";
//   section.style.backgroundColor = randomColor;

//   // Set text color based on background
//   section.style.color = randomColor === "rgb(0,0,0)" ? 'white' : 'black';
// }

/* This only calculates the brightness of the background to set the text to white in case it is black and vice versa */
// let article = document.querySelector('article');

// let learners = ['Jean-Louis', 'Michaella', 'Dave', 'Princia'];

// for (let i = 0; i < learners.length; i++) {
//   let section = document.createElement('section');
//   section.innerHTML = "<p>" + learners[i] + "</p>";
//   article.appendChild(section);

//   // Random background color
//   let randomColor = "rgb(";
//   for (let j = 0; j < 3; j++) {
//     randomColor += Math.floor(Math.random() * 256);
//     if (j < 2) {
//       randomColor += ",";
//     }
//   }
//   randomColor += ")";
//   section.style.backgroundColor = randomColor;

//   // Calculate brightness
//   let rgb = randomColor.match(/\d+/g);
//   let brightness = (0.299 * rgb[0]) + (0.587 * rgb[1]) + (0.114 * rgb[2]);

//   // Set text color based on brightness
//   section.style.color = brightness > 128 ? 'black' : 'white';
// }

/* Find a way so that everytime you load the page the order of the elements changes! */
let article = document.querySelector('article');

let learners = ['Jean-Louis', 'Michaella', 'Dave', 'Princia'];

// Fisher-Yates shuffle algorithm
for (let i = learners.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [learners[i], learners[j]] = [learners[j], learners[i]];
}

for (let i = 0; i < learners.length; i++) {
  let section = document.createElement('section');
  section.innerHTML = "<p>" + learners[i] + "</p>";
  article.appendChild(section);

  // Random background color
  let randomColor = "rgb(";
  for (let j = 0; j < 3; j++) {
    randomColor += Math.floor(Math.random() * 256);
    if (j < 2) {
      randomColor += ",";
    }
  }
  randomColor += ")";
  section.style.backgroundColor = randomColor;

  // Set text color based on background
  section.style.color = randomColor === "rgb(0,0,0)" ? 'white' : 'black';
}

//Find a way so that everytime you load the page the order of the elements changes! 