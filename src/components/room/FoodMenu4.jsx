import React from "react"
import { Card, Col, Container, Row } from "react-bootstrap"

const foodMenu = [
    { id: 1, name: "Pizza", price: 15, photo: "pizza.jpg" },
    { id: 2, name: "Burger", price: 8, photo: "burger.jpg" },
    { id: 3, name: "Pasta", price: 10, photo: "pasta.jpg" },
    { id: 4, name: "Salad", price: 7, photo: "salad.jpg" },
]

const FoodMenu4 = () => {
    return (
        <section className="bg-light mb-5 mt-5 shadow">
            <Container>
                <Row>
                    {foodMenu.map((food) => (
                        <Col key={food.id} className="mb-4" xs={12} md={6} lg={3}>
                            <Card>
                            
                                <Card.Img
                                    variant="top"
                                    src={food.photo}
                                    alt={food.name}
                                    className="w-100"
                                    style={{ height: "200px" }}
                                />
                                
                                <Card.Body>
                                    <Card.Title className="hotel-color">{food.name}</Card.Title>
                                    <Card.Title className="room-price">${food.price}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default FoodMenu4

const styles = {
    link: {
        color: 'rgb(169, 77, 123)',
        textAlign: 'center'
    },
    cardImg: {
        height: '200px'
    }
}
