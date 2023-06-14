const patients = [
{
name: "Helio",
age: 32,
weigth: 78,
height: 179,
},
{
name: "Cabritolhos",
age: 32,
weigth: 79,
height: 180,
},
{
name: "Lucas",
age: 31,
weigth: 85,
height: 167,
},

]
 
let patientsNames = []
for (let patient of patients) {
patientsNames.push(patient.name)
}

alert(patientsNames)