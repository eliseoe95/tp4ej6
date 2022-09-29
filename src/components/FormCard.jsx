import { useEffect, useState } from 'react'
import { Form, Button, Container, Row } from 'react-bootstrap'
import './form.css'
import ItemCard from './ItemCard'

const FormCard = () => {
    const coloresLocalStorage = JSON.parse(localStorage.getItem('listaColores')) || [];

  const [color, setColor] = useState('')
  const [colores, setColores] = useState(coloresLocalStorage)
  useEffect(() => {
    localStorage.setItem('listaColores', JSON.stringify(colores))
  }, [colores])

  const handleSubmit = (e) => {
    e.preventDefault()
    setColores([...colores, color])
    setColor('')
  }
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
            <div className="caja mx-2" style={{ background: 'red' }}></div>
            <Form.Control
              type="text"
              placeholder="Ingrese un color"
              onChange={(e) => setColor(e.target.value)}
              value={color}
            />
            <Button className="mx-2" variant="primary" type="submit">
              Guardar
            </Button>
          </Form.Group>
          <Row>
            <ItemCard></ItemCard>
          </Row>
        </Form>
      </Container>
    </>
  )
}

export default FormCard
