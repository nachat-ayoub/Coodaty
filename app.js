/*

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  <header id="header">
    <h2>Title</h2>
    <button id="btn">click</button>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi.</p>
  </header>
</body>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  ${htmlval}
</body>
</html>









var btn2 = document.getElementById("#btn2");
var header = document.getElementById("#header");

btn2.addEventListener('click', function(){
   header.classList.toggle("bg") ;
})


*/
var btn2 = document.getElementById("btn2")

const playBTN = document.querySelector("#playBtn");
const htmlBTN = document.querySelector("#htmlBtn");
const cssBTN = document.querySelector("#cssBtn");
const jsBTN = document.querySelector("#jsBtn");

const result = document.querySelector("#result");
// AREA CODE
const previewAREA = document.querySelector(".preview-area");
const htmlCODE = document.querySelector(".html-container");
const cssCODE = document.querySelector(".css-container");
const jsCODE = document.querySelector(".js-container");


// CSS onClick function

cssBTN.addEventListener('click', function() {
  htmlCODE.classList.add('hide');
  jsCODE.classList.add('hide');
  previewAREA.classList.add('hide');
  cssCODE.classList.remove('hide');
})

// JS onClick function

jsBTN.addEventListener('click', function() {
  htmlCODE.classList.add('hide');
  cssCODE.classList.add('hide');
  previewAREA.classList.add('hide');
  jsCODE.classList.remove('hide');
})

// HTML onClick function

htmlBTN.addEventListener('click', function() {
  jsCODE.classList.add('hide');
  cssCODE.classList.add('hide');
  previewAREA.classList.add('hide');
  htmlCODE.classList.remove('hide');
})

// PLAY onClick function

playBTN.addEventListener('click', function() {
  jsCODE.classList.add('hide');
  cssCODE.classList.add('hide');
  htmlCODE.classList.add('hide');
  previewAREA.classList.remove('hide');

  const htmlval = document.querySelector("#htmlCode").value;

  const style = document.querySelector("#cssCode").value;
  const js = document.querySelector("#jsCode").value;


  const htmlBody =
  `
  <!DOCTYPE html >
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
  body{color:white;}
  ${style}
  </style>
  <title>Document</title>
  </head>
  <body>
  ${htmlval}
  <script>
  ${js}
  </script>
  </body>
  </html>
  `
  const frame = result.contentWindow.document;

  frame.open();
  frame.write(htmlBody);
  frame.close();
})
