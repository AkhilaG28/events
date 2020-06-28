var show_title = document.querySelector('.show_title')

setInterval(function() {
	show_title.style.opacity = (show_title.style.opacity == 0 ? 1 : 0);
	}, 500);


var pay = document.getElementById('pay')
var container = document.querySelector('.container-fluid')
var bodyElem = document.querySelector('body')
var every_event = []
var amt = document.querySelector('.amt')
amt = amt.textContent
amt = Number(amt)
console.log(amt.textContent)

var form = document.forms['bill_form']
//console.log(form)
var obj = {}
obj['Amount'] = amt
var names = ['Name','Email','Mobile','People']
function display_bill() {	
	//var obj = {}
	for (var i = 0; i < names.length; i++) {
		obj[names[i]] = form.elements[i].value
	}
	console.log(obj)
	every_event.push(obj)
	console.log(every_event)
	localStorage.setItem("event_billing", JSON.stringify(obj))
	location.href = "bill.html"
}

pay.addEventListener('click',display_bill)


var countdown = localStorage.getItem("countdown")
countdown = JSON.parse(countdown)
var title = document.querySelector('title').textContent
//console.log(title,countdown[title])

var date = countdown[title]

var countDate = new Date(date).getTime()

function count_down() {
	var now = new Date().getTime();
	gap = countDate - now;

	var second=1000;
	var minute=second*60;
	var hour=minute*60;
	var day=hour*24;

	var d=Math.floor(gap/(day));
	var h=Math.floor((gap%(day))/(hour));
	var m=Math.floor((gap%(hour))/(minute));
	var s=Math.floor((gap%(minute))/(second));

	document.getElementById('day').innerText=d;
	document.getElementById('hour').innerText=h;
	document.getElementById('minute').innerText=m;
	document.getElementById('second').innerText=s;
}
setInterval(function(){
	count_down();
},1000)
