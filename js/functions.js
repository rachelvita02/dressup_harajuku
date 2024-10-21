const themeSwitcher = document.getElementById('themeSwitcher');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function getCurrentTheme() {
    return localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
    themeSwitcher.innerHTML = theme === 'light' ? '🌞' : '🌙';
}

// Set initial theme
setTheme(getCurrentTheme());

// Handle theme switch
themeSwitcher.addEventListener('click', () => {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
});

// Listen for OS theme changes
prefersDarkScheme.addListener((e) => {
    const newTheme = e.matches ? 'dark' : 'light';
    setTheme(newTheme);
});

/* sidebar menu 
________________________________*/

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

/* image gallery
________________________________*/
let slideIndex = 1;
        showSlides(slideIndex);
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }
        function currentSlide(n) {
          showSlides(slideIndex = n);
        }
        function showSlides(n) {
          let i;
          let slides = document.getElementsByClassName("mySlides");
          let dots = document.getElementsByClassName("dot");
          if (n > slides.length) {slideIndex = 1}    
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
          }
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
        }