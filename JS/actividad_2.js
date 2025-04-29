const persona = { 
    nombre: "Lucía", 
    edad: 28, 
    profesion: "Diseñadora" 
  };
  
  let { nombre, edad, profesion } = persona;
  console.log(`${nombre} tiene ${edad} años y trabaja como ${profesion}.`);
  
  persona.ciudad = "Rosario";
  
  console.log(persona);