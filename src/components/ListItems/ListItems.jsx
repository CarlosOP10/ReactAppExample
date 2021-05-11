import React from "react"
import Item from "./Item/Item"

const ListItems = (props) => {
	const items = [
		{
			name: "Cristiano Ronaldo",
			age: 36,
			team: "Juventus",
			description:
				"Es un futbolista portugués que juega como delantero en la Juventus F. C. de la Serie A de Italia y en la selección de Portugal, de la cual es su capitán.",
			url: "https://i0.wp.com/naciondeportes.com/wp-content/uploads/2021/02/cristiano-ronaldo-36-anos.jpg?w=1000&ssl=1",
			moreInfo: "https://es.wikipedia.org/wiki/Cristiano_Ronaldo",
			visible: true
		},
		{
			name: "Messi",
			age: 36,
			team: "Barcelona",
			description:
				"Es un futbolista argentino que juega como delantero o centrocampista.​ Ha desarrollado toda su carrera en el F. C. Barcelona de la Primera División de España y en la selección de Argentina, equipos de los que es capitán.",
			url: "https://as01.epimg.net/futbol/imagenes/2020/09/04/primera/1599244616_143980_1599246026_noticia_normal.jpg",
			moreInfo: "https://es.wikipedia.org/wiki/Lionel_Messi",
			visible: true
		},
		{
			name: "Neymar",
			age: 36,
			team: "PSG",
			description:
				"Es un futbolista brasileño. Juega como delantero y su equipo actual es el París Saint-Germain Football Club de la Ligue 1 de Francia.​ Es internacional absoluto con la selección de Brasil desde 2010. Dotado de una gran técnica, es considerado como uno de los mejores jugadores del mundo​",
			url: "https://phantom-marca.unidadeditorial.es/3048cfe70baea6d9555c87166cee9cb6/resize/1320/f/webp/assets/multimedia/imagenes/2021/05/06/16203189025527.jpg",
			moreInfo: "https://es.wikipedia.org/wiki/Neymar",
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
