import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [pacientes, setPacientes] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/pacientes')
      .then((respuesta) => respuesta.json())
      .then((datos) => setPacientes(datos))
      .catch((error) => console.error('Error:', error))
  }, [])

  return (
    <main className="contenedor">
      <h1>Gestión de Pacientes</h1>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>DNI</th>
            <th>Teléfono</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {pacientes.map((paciente) => (
            <tr key={paciente.id}>
              <td>{paciente.nombre} {paciente.apellido}</td>
              <td>{paciente.dni}</td>
              <td>{paciente.telefono}</td>
              <td>{paciente.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default App