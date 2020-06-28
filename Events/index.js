var register = document.getElementById('register')
var register_form = document.forms['register_form']
var names = ['Name','Email','Mobile','Password']
var obj = {}

for (var i = 0; i < register_form.elements.length; i++) {
	obj[names[i]] = register_form.elements[i].value
}
console.log(obj)

