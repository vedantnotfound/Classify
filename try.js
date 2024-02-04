// Checking Msg

console.log("Welcome To Classify");

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar'); // Replace 'navbar' with the actual ID of your navbar element
    if (window.scrollY > 20) { // Change 20 to the desired scroll threshold
        navbar.style.backgroundColor = 'black'; // Change navbar background color to black
    } else {
        navbar.style.backgroundColor = ''; // Revert back to default background color when not scrolled 20px
    }
});

//* Mobile Menu

let menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click",function(){
    // console.log("You Cliked On MenuBtn");
    let mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.style.transform = "translateX(0px)";
})

let closeMenu = document.getElementById("closeMenu");
closeMenu.addEventListener("click",function(){
    let mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.style.transform = "translateX(1100px)";
})