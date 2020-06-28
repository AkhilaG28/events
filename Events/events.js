var date = document.querySelectorAll('.date')

var obj = {}

var shows = ['Music Show 1','Music Show 2','Music Show 3','Music Show 4','Music Show 5','Music Show 6','Comedy Show 1','Comedy Show 2','Comedy Show 3','Dance Show 1','Dance Show 2','Dance Show 3','Dance Show 4','Dance Show 5','Dance Show 6']

for (var i = 0; i < shows.length; i++) {
	obj[shows[i]] = date[i].textContent
}

//console.log(obj)

var countdown = JSON.stringify(obj)

localStorage.setItem("countdown",countdown)