import React from "react"
import "./Item.css"
import PropTypes from "prop-types"

const Item = ({ item, visible }) => {
	return (
		visible && (
			<div className="row">
				<div className="column">
					<div className="card">
						<img src={item.url} alt={item.name} width="250px" height="250px" />
						<h3>{item.name}</h3>
						<p>{item.age}</p>
						<p>{item.team}</p>
					</div>
				</div>
			</div>
		)
	)
}

Item.propTypes = {
	item: PropTypes.object.isRequired
}

export default Item
