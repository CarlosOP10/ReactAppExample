import React from "react"
import Item from "./Item"

const ListItems = (props) => {
	const items = [
		{
			name: "Cristiano Ronaldo",
			age: 36,
			team: "Juventus",
			url:
				"https://i0.wp.com/naciondeportes.com/wp-content/uploads/2021/02/cristiano-ronaldo-36-anos.jpg?w=1000&ssl=1",
			visible: true
		},
		{
			name: "Messi",
			age: 36,
			team: "Barcelona",
			url:
				"https://as01.epimg.net/futbol/imagenes/2020/09/04/primera/1599244616_143980_1599246026_noticia_normal.jpg",
			visible: true
		},
		{
			name: "Neymar",
			age: 36,
			team: "PSG",
			url:
				"https://phantom-marca.unidadeditorial.es/3048cfe70baea6d9555c87166cee9cb6/resize/1320/f/webp/assets/multimedia/imagenes/2021/05/06/16203189025527.jpg",
			visible: true
		}
	]
	return (
		<div
			style={{
				justifyContent: "center",
				display: "flex",
				boxSizing: "border-box"
			}}
		>
			{items.map((item, key) => (
				<Item key={key} item={item} visible={item.visible} />
			))}
		</div>
	)
}

export default ListItems
