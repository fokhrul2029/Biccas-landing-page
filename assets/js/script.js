// AOS Animation Script
AOS.init();

// Navigation Js-----------
// When the user scrolls down 120px from the top of the document,add a box-shadow css on the navbar
window.onscroll = () => {
  if (
    document.body.scrollTop > 120 ||
    document.documentElement.scrollTop > 120
  ) {
    document.querySelector("#navbar").style.boxShadow =
      "0 0 27px 0px #0000001a ";
  } else {
    document.querySelector("#navbar").style.boxShadow = "0 0 0 transparent ";
  }
};
