window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("header").style.fontSize = "15px";
    document.getElementById("header").style.backgroundColor="rgba(0,0,0,1)";
    document.getElementById("header").style.boxShadow="5px 5px 18px   ";
  } else {
    document.getElementById("header").style.fontSize = "20px";
    document.getElementById("header").style.background="rgba(0,0,0,0)"; //" transparent !important";
    document.getElementById("header").style.boxShadow="none"
   
  }
}