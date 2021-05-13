import React from "react"
import { Button, Card, Col } from "react-bootstrap"
import PropTypes from "prop-types"

const Item = ({ item, visible }) => {
  return (
    visible && (
      <Col md={4}>
        <Card style={{ width: "280px", height: "550px", margin: "20px" }}>
          <Card.Img variant="top" src={item.url} style={{ height: "200px" }} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
          </Card.Body>
          <Button variant="primary" href={item.moreInfo}>
            More Info
          </Button>
        </Card>
      </Col>
    )
  )
}

Item.propTypes = {
  item: PropTypes.object.isRequired
}

export default Item
