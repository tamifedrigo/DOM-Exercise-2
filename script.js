let menuToggle = document.querySelector('.menu-toggle');
let menuContent = document.querySelector('.menu-content');
menuToggle.addEventListener('click',()=>{
   if(menuContent.style.display===""){
      menuContent.style.display="block";
   } else {
      menuContent.style.display="";
   }
})

// function switchVisible() {
//     if (document.querySelector('.letters') {
//         if (document.querySelector('.letters').style.display == 'none') {
//             document.querySelector('.letters').style.display == 'block';
//             document.querySelector('.numbers').style.display == 'none';
//         }
//         else {
//             document.querySelector('.letters').style.display == 'none';
//             document.querySelector('.numbers').style.display == 'block';
//         }
//     }
// }



    
