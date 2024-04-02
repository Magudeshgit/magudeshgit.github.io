//Pre load vars
let hammenu = document.querySelector('.ham')
let mobmenu = document.querySelector('.mob-menu')

let line1 = document.querySelector('.s1')
let line2 = document.querySelector('.s2')
let line3 = document.querySelector('.s3')

let ctc = document.querySelector('.ct-change')

particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
//----------------------------------
let img_btn = document.querySelectorAll('.p-card')
let hbtn = document.querySelectorAll('.hbtn')

//Ham Menu

hammenu.addEventListener('click', navbar)

function navbar() {
	mobmenu.classList.toggle('active')
	line1.classList.toggle('active')
	line2.classList.toggle('active')
	line3.classList.toggle('active')
};

//Gallery

img_btn.forEach(function (self) {
	self.addEventListener('mouseenter',()=>{
		p=event.target
		o=p.childNodes[3]
		otwrap=o.childNodes[1]
		//console.log(a[0])
		z=otwrap.childNodes
		z[1].classList.toggle('active')
		p.childNodes[3].classList.toggle('active')

	})	
})
img_btn.forEach(function (self) {
	self.addEventListener('mouseleave',()=>{
		p=event.target
		o=p.childNodes[3]
		otwrap=o.childNodes[1]
		//console.log(a[0])
		z=otwrap.childNodes
		z[1].classList.toggle('active')
		p.childNodes[3].classList.toggle('active')

	})	
})

//Highlights
hbtn.forEach(function (self) {
	self.addEventListener('mouseenter',()=>{
	tar=event.target
	overlay=tar.childNodes[3]
	overlay.classList.toggle('active')
	})
})

hbtn.forEach(function (self) {
	self.addEventListener('mouseleave',()=>{
	tar=event.target
	overlay=tar.childNodes[3]
	overlay.classList.toggle('active')
	})
})

//CT-Section text change

typed = new Typed('.ct-change',{
	strings: ['Front-End Developer?','Back-End Developer?','UI/UX Designer?'],
	typeSpeed: 80,
	backSpeed: 80,
	loop: true
 });

function mail() {
	navigator.clipboard.writeText('magudesh2006@gmail.com')
	new Noty({
    text: 'Mail ID copied to clipboard!',
    theme: 'metroui',	
    type: 'success',
    timeout: 2000,
    progressBar: true
}).show();
	document.querySelector('.noty_theme__metroui').style.backgroundColor = "#3A95BC";
}