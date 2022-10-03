import { useEffect, useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import './form.css'
import ItemCard from './ItemCard'

const FormCard = () => {
  const coloresLocalStorage =
     JSON.parse(localStorage.getItem('listaColores')) || []

  const [color, setColor] = useState('')
  const [colores, setColores] = useState(coloresLocalStorage)
   const [divcolor, setDivColor] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setColores([...colores, color])
    setColor('')
  }
  const borrarColor = (index) =>{
    console.log(colores);
    let arregloModificado = colores.splice(index,1);
    setColores(arregloModificado);
    console.log(colores);
  }
   const cambiarColor = (colorIngresado) =>{
     setDivColor(colorIngresado);
     setColor(colorIngresado);
   }
   useEffect(() => {
    console.log(colores);
    localStorage.setItem('listaColores', JSON.stringify(colores))
  }, [colores])

  return (
    <>
      <Container>
        <h1 className="display-4">Colores</h1>
        <hr />
        <Form onSubmit={handleSubmit}>
          <Form.Group
            className="d-flex mb-3 align-items-stretch p-2"
            controlId="formColor"
          >
            <div className="caja mx-2" style={{ 'background': divcolor }}></div>
            <Form.Control
              type="text"
              placeholder="Ingrese un color"
              onChange={(e) => cambiarColor(e.target.value)}
              value={color}
            />
            <Button className="mx-2" variant="primary" type="submit">
              Guardar
            </Button>
          </Form.Group>
            <ItemCard colores={colores} borrarColor={borrarColor}></ItemCard>
        </Form>
      </Container>
    </>
  )
}

export default FormCard
