import React from "react";
import { Container,Row,Col,Card} from 'react-bootstrap';

const Details = (props) => {
    const {id,titulo,genero,img} = props.props;
  return (
    <div>
        <Container>
            <Row>
                <Col className="p-5">
                <Card style={{ width: '18rem' }} id={{id}}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{titulo.toUpperCase()}</Card.Title>
                        <Card.Text>
                        {genero}
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default Details;