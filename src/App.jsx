import React, { useState } from 'react'
import './App.css'
import Testimonio from './Testimonio'

function App() {

  const people = [{
    id:0,
    name:'Erik Lindström',
    country:'Suecia',
    profession: 'Desarrollador Frontend',
    imageURL:'/swedish_man.jpg',
    imageSize:250,
    testimony:'Desde que comencé a usar React, crear interfaces ha sido mucho más rápido y organizado. La reutilización de componentes me ahorra mucho tiempo, y puedo centrarme en mejorar la experiencia del usuario.',
    description:'Male Swedish programmer outside of his house',
  },

  {
    id:1,
    name:'Isabela Ferreira',
    country:'Brasil',
    profession: 'Ingeniera Informática',
    imageURL:'/brazilian_woman.jpg',
    imageSize:250,
    testimony:'Aunque me especializo en el desarrollo de sistemas completos, React me ha facilitado la creación de interfaces intuitivas. Su enfoque basado en componentes me permite integrar mejor las funciones del backend con el frontend.',
    description:'Female Brazilian programmer smiling inside of her house',
  },

  {
    id:2,
    name:'Hiroshi Tanaka',
    country:'Japón',
    profession: 'Desarrollador Full Stack',
    imageURL:'/japanese_man.jpg',
    imageSize:250,
    testimony:'React me ofrece la flexibilidad de trabajar en todas las capas de la aplicación. La integración con bibliotecas adicionales es perfecta para proyectos complejos que requieren un control total del frontend y backend.',
    description:'Male Japanese programmer smiling with a backpack on his right shoulder',
  },

  {
    id:3,
    name:'Priya Sharma',
    country:'la India',
    profession: 'Desarrolladora Backend',
    imageURL:'/indian_woman.jpg',
    imageSize:250,
    testimony:'Aunque mi especialidad es el backend, trabajar con React me ha permitido entender mejor cómo estructurar datos y endpoints de manera eficiente para mejorar el rendimiento de las aplicaciones web.',
    description:'Female Indian programmer smiling during an interview',
  }]

  return (
    <>
      {people.map((person) => (
        <Testimonio
          key={person.id}
          name={person.name}
          country={person.country}
          profession={person.profession}
          imageURL={person.imageURL}
          imageSize={person.imageSize}
          testimony={person.testimony}
          description={person.description}
        />
      ))}
    </>
  )
}

export default App
