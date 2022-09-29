import { Form, Button, Container, Row } from 'react-bootstrap'
import './form.css'
import ItemCard from './ItemCard'

const FormCard = () => {
  return (
    <>
      <Container>
        <h1 className="display-4">Colores</h1>
        <hr />
        <Form>
          <Form.Group
            className="d-flex mb-3 align-items-stretch p-2"
            controlId="formColor"
          >
            <div className="caja mx-2" style={{background: 'red'}}></div>
            <Form.Control type="text" placeholder="Ingrese un color" />
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
