// // function showWindow(x){
// //   document.getElementsByClassName("intro")[0].style.display = 'none';
// //   document.getElementById("gallery").style.display = 'block'
// // }

// var count = 0;

// function showWindow1() {
//     count++;
//     if (count % 2) {
//         document.getElementById("intro").style.display = "none";
//         document.getElementById("gallery").style.display = "block";
//         document.getElementById("gallery").style.cssText = `
//         animation: fade-in 1s ease-in;
//         z-index: 1;
//         @keyframes fade-in {
//           0% {
//               opacity: 0;
//           }
//           100% {
//               opacity: 1;
//           }
//       }
//       opacity: 1;`;
//     } else {
//         document.getElementById("intro").style.display = "block";
//         document.getElementById("intro").style.cssText = `
//         animation: fade-in 1s ease-in;
//         font-family: 'Lato', sans-serif;position: fixed; top: calc(50% - 50px); right:50%; transform: translate(50%,-50%) skewX(-5deg);
//         @keyframes fade-in {
//           0% {
//               opacity: 0;
//           }
//           100% {
//               opacity: 1;
//           }
//       }
//       opacity: 1;`;
//         document.getElementById("gallery").style.display = "none";
//     }
// }

function copyTag() {
    document.getElementById("discordTip").style.display = "block";
    let text = "envy#2172";
    navigator.clipboard.writeText(text);
    document.getElementById("discordTip").style.visibility = "visible";
    setTimeout(() => { document.getElementById("discordTip").style.display = "none"; }, 1000)
}