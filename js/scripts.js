document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("navbar").classList.add("navbar-scroll");
      // document.getElementById("navbar-scroll").style.display = "none";
      navbar_height = document.querySelector(".navbar").offsetHeight;
    } else {
      document.getElementById("navbar").classList.remove("navbar-scroll");
      // document.getElementById("navbar-scroll").style.display = "block";
    }
  });
});
// DOMContentLoaded  end
