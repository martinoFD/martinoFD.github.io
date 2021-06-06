window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("header").style.fontSize = "15px";
    document.getElementById("header").style.backgroundColor="rgba(0,0,0,1)";
  } else {
    document.getElementById("header").style.fontSize = "30px";
    document.getElementById("header").style.background="rgba(0,0,0,0)"; //" transparent !important";
   
  }
}