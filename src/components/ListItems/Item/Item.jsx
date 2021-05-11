import React from "react"
import { Button, Card } from "react-bootstrap"
import PropTypes from "prop-types"

const Item = ({ item, visible }) => {
	return (
		visible && (
			<Card style={{ width: "18rem", margin: "30px" }}>
				<Card.Img variant="top" src={item.url} style={{ height: "10rem" }} />
				<Card.Body>
					<Card.Title>{item.name}</Card.Title>
					<Card.Text>{item.description}</Card.Text>
				</Card.Body>
				<Button variant="primary" href={item.moreInfo}>
					More Info
				</Button>
			</Card>
		)
	)
}

Item.propTypes = {
	item: PropTypes.object.isRequired
}

export default Item
