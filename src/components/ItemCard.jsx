import { Card, Button, Col, Row } from 'react-bootstrap';
const ItemCard = ({colores, borrarColor}) => {
  return (
    <>
    <Row>
        {        
             colores.map((color,posicion)=>{return <Col sm={6} md={4} lg={3}>
                <Card className="d-flex align-items-center border-0">
                <Card.Body>
              <Card.Title> {color} </Card.Title>
                <div className="caja" key={color} style={{ 'background': color }}></div>
            </Card.Body>
            <Button className="my-2 btn-sm" variant="danger" onClick={()=> borrarColor(posicion)}>
              Borrar
            </Button>
          </Card>  
            </Col>})
        }
    </Row>
    </>
  )
}

export default ItemCard
