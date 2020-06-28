var obj = localStorage.getItem("event_billing")
obj = JSON.parse(obj)
console.log(obj)
var result = document.querySelector('.result')

var amt = Number(obj.People) * (obj.Amount)
console.log(amt)

var div_name = document.createElement('div')
div_name.textContent = 'Name: ' + obj.Name

var div_mobile = document.createElement('div')
div_mobile.textContent = 'Mobile: ' + obj.Mobile

var div_amount = document.createElement('div')
div_amount.textContent = 'Amount: Rs ' + amt + ' /-'

var div_time = document.createElement('div')
div_time.textContent = 'Time: ' + new Date()

var div_thank = document.createElement('div')
div_thank.setAttribute('class', 'thank')
setInterval(function() {
	div_thank.style.opacity = (div_thank.style.opacity == 0 ? 1 : 0);
	}, 500);
div_thank.textContent = 'THANK YOU'

result.append(div_name,div_mobile,div_amount,div_time,div_thank)


