const patients = [
    {
      name: "Helio",
      age: 33,
      weight: 78,
      height: 178
    },
    {
      name: "Osvino",
      age: 59,
      weight: 84,
      height: 178
    },
    {
      name: "Kele",
      age: 27,
      weight: 67,
      height: 159
    },
  ]
  
  function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
  }
  
  function printPatientIMC(patient) {
    return `
      Paciente ${patient.name} possui o IMC de
      ${IMC(patient.weight, patient.height)}
    `
  }
  
  for (let patient of patients) {
    let IMCmessage = printPatientIMC(patient)
    alert(IMCmessage)
  }