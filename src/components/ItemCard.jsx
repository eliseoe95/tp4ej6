import { Card, Button, Col } from "react-bootstrap"
const ItemCard = () => {
  return (
    <>
    <Col sm={6} md={4} lg={3}>
      <Card className="d-flex align-items-center border-0">
        <Card.Body>
          <Card.Title >Color</Card.Title>
          <div className="caja" style={{background: 'red'}}></div>
        </Card.Body>
          <Button className="my-2 btn-sm" variant="danger">Borrar</Button>
      </Card>
    </Col>
    </>
  )
}

export default ItemCard
