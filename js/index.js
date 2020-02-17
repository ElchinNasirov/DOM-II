// Your code goes here

// 1) Mosue enter over the nav bar ==================================
const aTags = document.querySelector("nav");
aTags.addEventListener("mouseenter", function( event ) {   
    // highlight the mouseenter target
    event.target.style.color = "purple";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);

aTags.addEventListener("mouseover", function( event ) {   
    // highlight the mouseover target
    event.target.style.color = "red";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);

// 2) Mouseover the header img ======================================
  const imgTag = document.querySelector("img");

  imgTag.addEventListener("mouseenter", () => {
      imgTag.style.transform = "scale(1.2)";
      imgTag.style.transition = "all 0.3s";
  });


// 3) Mouseleave the header img =====================================
  imgTag.addEventListener("mouseleave", () => {
      imgTag.style.transform = "scale(1)";
  });


// 4) dblclick on footer ============================================
  const hTwoTags = document.querySelector(".footer");
  hTwoTags.addEventListener('dblclick', function (e) {
    console.log("Footer double clicked!")
  });


// 5) Zoom In and Out the "Fun Bus" logo ============================
  const logoHeading = document.querySelector('.logo-heading');
  let scale = 1;

  logoHeading.addEventListener('wheel', (event) => {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    logoHeading.style.transform = `scale(${scale})`;
  });
    

// 6) Copy any text on the page and check console ===================
window.addEventListener('copy', (event) => {
    console.log('copy action initiated')
});


// 7) Type something and check console ==============================================
const input = document.querySelector('input');
const log = document.getElementById('values');

input.addEventListener('input', (e) => {
    console.log(e.target.value);
});


// 8) Page turns "Crimson" when you hold the "C" key ================
  window.addEventListener("keydown", event => {
    if (event.key == "c") {
      document.body.style.background = "crimson";
    }
  });


// 9) Page turns normal color when you release the "C" key ==========
  window.addEventListener("keyup", event => {
    if (event.key == "c") {
      document.body.style.background = "";
    }
  });


// 10) Page turns "Yellow" ==========================================
  const colorChangeBtn = document.querySelectorAll(".btn");
  
  colorChangeBtn[0].textContent = "Change the Color";
  colorChangeBtn[0].addEventListener("click", function(event){
    document.body.style.background = "yellow";
});

colorChangeBtn[1].textContent = "Change the Color";
  colorChangeBtn[1].addEventListener("click", function(event){
    document.body.style.background = "grey";
});

colorChangeBtn[2].textContent = "Change the Color";
  colorChangeBtn[2].addEventListener("click", function(event){
    document.body.style.background = "green";
});


// preventDefault() Nav tags will not update the page ===============
const navTag = document.querySelectorAll("a");

navTag[0].addEventListener("click", () => {
    console.log("preventDefault() is avtive now, try later!");
    event.preventDefault();
})

navTag[1].addEventListener("click", () => {
    console.log("preventDefault() is avtive now, try later!");
    event.preventDefault();
})

navTag[2].addEventListener("click", () => {
    console.log("preventDefault() is avtive now, try later!");
    event.preventDefault();
})

navTag[3].addEventListener("click", () => {
    console.log("preventDefault() is avtive now, try later!");
    event.preventDefault();
})


// stopPropagation() ================================================
const mainContent = document.querySelector('.home');
mainContent.addEventListener('click', function(eventObject){
 console.log(`Main Content clicked!`); 
  eventObject.stopPropagation();
});