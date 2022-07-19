import React, { useState, useEffect } from 'react';
import './style.css';
import { Card } from '../../components/Card'

export function Home() {
  const [studentName, setStudentName] = useState();
  const [studentEmail, setStudentEmail] = useState();
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({ name: '', avatar: '', login: '' });

  function hadleAddStudent() {
    const newStudent = {
      name: studentName,
      email: studentEmail,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }


    setStudents(prevState => [...prevState, newStudent]);
    setTimeout(() => {
      relo
    },3000)

  }

  useEffect(() => {
    fetch('https://api.github.com/users/thmoreiracosta')
      .then(response => response.json())
      .then(data => { 
        setUser({
          name: data.name,
          avatar: data.avatar_url,
          login: data.login,
        })

      })

  }, [])

  return (
    <div className="container">
      <header>
        <h1>Confirme sua presença</h1>
        <div>
          <strong><a href="https://github.com/thmoreiracosta" target="_blank">{ user.name }</a></strong>
          <h5>@{ user.login }</h5>
          <img src={user.avatar} alt="Foto perfil Thiago Costa" />          
        </div>
      </header>


      <input
        type="text"
        placeholder="Seu nome..."
        onChange={e => setStudentName(e.target.value)}

      />
      <input
        type="text"
        placeholder="Seu email..."
        onChange={e => setStudentEmail(e.target.value)}

      />
      <button
        type="submit" onClick={hadleAddStudent}>
        Enviar
      </button>

      {
        students.map(student =>
          <Card
            key={student.time}
            name={student.name}
            email={student.email}
            time={student.time}
          />)
      }


    </div>
  )
}



