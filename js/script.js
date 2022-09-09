let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}
document.getElementById('ordern').onclick = function(e) {
    document.getElementById("ordern").innerHTML = "order placed";
    document.getElementById("ordern").style.background='#bf0a30';
}


var arr=[];
document.getElementById('abc1').onclick = function(e) {
    document.getElementById("abc1").innerHTML = "Added to Cart";
    arr.push("1");
    document.getElementById("abc1").style.background='#bf0a30';
    var arrstr = JSON.stringify(arr);
    localStorage.setItem("astr", arrstr);
    
    
}

document.getElementById('abc2').onclick = function(e) {
    document.getElementById("abc2").innerHTML = "Added to Cart";
    arr.push("2");
    document.getElementById("abc2").style.background='#bf0a30';
    var arrstr = JSON.stringify(arr);
    localStorage.setItem("astr", arrstr);
}
document.getElementById('abc3').onclick = function(e) {
    document.getElementById("abc3").innerHTML = "Added to Cart";
    arr.push("3");
    document.getElementById("abc3").style.background='#bf0a30';
    var arrstr = JSON.stringify(arr);
    localStorage.setItem("astr", arrstr);
}
document.getElementById('abc4').onclick = function(e) {
    document.getElementById("abc4").innerHTML = "Added to Cart";
    arr.push("4");
    document.getElementById("abc4").style.background='#bf0a30';
    var arrstr = JSON.stringify(arr);
    localStorage.setItem("astr", arrstr);
}
document.getElementById('abc5').onclick = function(e) {
    document.getElementById("abc5").innerHTML = "Added to Cart";
    arr.push("5");
    document.getElementById("abc5").style.background='#bf0a30';
    var arrstr = JSON.stringify(arr);
    localStorage.setItem("astr", arrstr);
}
document.getElementById('abc6').onclick = function(e) {
    document.getElementById("abc6").innerHTML = "Added to Cart";
    arr.push("6");
    document.getElementById("abc6").style.background='#bf0a30';
    var arrstr = JSON.stringify(arr);
    localStorage.setItem("astr", arrstr);
}
document.getElementById('abc7').onclick = function(e) {
    document.getElementById("abc7").innerHTML = "Added to Cart";
    arr.push("7");
    document.getElementById("abc7").style.background='#bf0a30';
    var arrstr = JSON.stringify(arr);
    localStorage.setItem("astr", arrstr);
}
document.getElementById('abc8').onclick = function(e) {
    document.getElementById("abc8").innerHTML = "Added to Cart";
    arr.push("8");
    document.getElementById("abc8").style.background='#bf0a30';
    var arrstr = JSON.stringify(arr);
    localStorage.setItem("astr", arrstr);
}
document.getElementById('abc9').onclick = function(e) {
    document.getElementById("abc9").innerHTML = "Added to Cart";
    arr.push("9");
    document.getElementById("abc9").style.background='#bf0a30';
    var arrstr = JSON.stringify(arr);
    localStorage.setItem("astr", arrstr);
}
document.getElementById('abc10').onclick = function(e) {
    document.getElementById("abc10").innerHTML = "Added to Cart";
    arr.push("10");
    document.getElementById("abc10").style.background='#bf0a30';
    var arrstr = JSON.stringify(arr);
    localStorage.setItem("astr", arrstr);
}
document.getElementById('abc11').onclick = function(e) {
    document.getElementById("abc11").innerHTML = "Added to Cart";
    arr.push("11");
    document.getElementById("abc11").style.background='#bf0a30';
    var arrstr = JSON.stringify(arr);
    localStorage.setItem("astr", arrstr);
}
document.getElementById('abc12').onclick = function(e) {
    document.getElementById("abc12").innerHTML = "Added to Cart";
    arr.push("12");
    document.getElementById("abc12").style.background='#bf0a30';
    var arrstr = JSON.stringify(arr);
    localStorage.setItem("astr", arrstr);
}
document.getElementById('abc13').onclick = function(e) {
    document.getElementById("abc13").innerHTML = "Added to Cart";
    arr.push("13");
    document.getElementById("abc13").style.background='#bf0a30';
    var arrstr = JSON.stringify(arr);
    localStorage.setItem("astr", arrstr);
}
document.getElementById('abc14').onclick = function(e) {
    document.getElementById("abc14").innerHTML = "Added to Cart";
    arr.push("14");
    document.getElementById("abc14").style.background='#bf0a30';
    var arrstr = JSON.stringify(arr);
    localStorage.setItem("astr", arrstr);
}
document.getElementById('abc15').onclick = function(e) {
    document.getElementById("abc15").innerHTML = "Added to Cart";
    arr.push("15");
    document.getElementById("abc15").style.background='#bf0a30';
    var arrstr = JSON.stringify(arr);
    localStorage.setItem("astr", arrstr);
}
document.getElementById('abc16').onclick = function(e) {
    document.getElementById("abc16").innerHTML = "Added to Cart";
    arr.push("16");
    document.getElementById("abc16").style.background='#bf0a30';
    var arrstr = JSON.stringify(arr);
    localStorage.setItem("astr", arrstr);
}
document.getElementById('abc17').onclick = function(e) {
    document.getElementById("abc17").innerHTML = "Added to Cart";
    arr.push("17");
    document.getElementById("abc17").style.background='#bf0a30';
    var arrstr = JSON.stringify(arr);
    localStorage.setItem("astr", arrstr);
}
document.getElementById('abc18').onclick = function(e) {
    document.getElementById("abc18").innerHTML = "Added to Cart";
    arr.push("18");
    document.getElementById("abc18").style.background='#bf0a30';
    var arrstr = JSON.stringify(arr);
    localStorage.setItem("astr", arrstr);
}
document.getElementById('abc19').onclick = function(e) {
    document.getElementById("abc19").innerHTML = "Added to Cart";
    arr.push("19");
    document.getElementById("abc19").style.background='#bf0a30';
    var arrstr = JSON.stringify(arr);
    localStorage.setItem("astr", arrstr);
}
document.getElementById('abc20').onclick = function(e) {
    document.getElementById("abc20").innerHTML = "Added to Cart";
    arr.push("20");
    document.getElementById("abc20").style.background='#bf0a30';
    var arrstr = JSON.stringify(arr);
    localStorage.setItem("astr", arrstr);
}



let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}

document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 150,
  centeredSlides: true,
  autoplay: {
    delay: 4900,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop:true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 130,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  
  loop:true,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut;