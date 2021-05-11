import React, { useState } from "react"
import { Button, Container, Row } from "react-bootstrap"
import Item from "./Item/Item"

const ListItems = (props) => {
	const [checked, setChecked] = useState({
		checked: true,
		message: "Hide Cards"
	})
	const handleClick = () => {
		setChecked({
			checked: !checked.checked,
			message: !checked.checked ? "Hide Cards" : "Show Cards"
		})
	}
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
		},
		{
			name: "Robert Lewandowski",
			age: 32,
			team: "Bayern de Múnich",
			description:
				"Es un futbolista polaco que juega como delantero centro en el Bayern de Múnich de la Bundesliga de Alemania desde la temporada 2014-15. Es también internacional absoluto con la selección de Polonia desde 2008, de la cual es su capitán y máximo goleador histórico",
			url: "https://www.fcbarcelonanoticias.com/uploads/s1/12/18/79/2/lewandowski-bayern.jpeg",
			moreInfo: "https://es.wikipedia.org/wiki/Robert_Lewandowski",
			visible: false
		},
		{
			name: "Kylian Mbappé",
			age: 22,
			team: "PSG",
			description:
				"Es un futbolista francés de ascendencia argelina y camerunesa. Juega como delantero y su equipo actual es el París Saint-Germain Football Club de la Ligue 1 de Francia. Es internacional absoluto con la selección de Francia desde 2017",
			url: "https://images.mediotiempo.com/mvZRrtR2T2ifFCcBF1U2rIvhvR0=/958x596/uploads/media/2019/02/23/kylian-mbappe-convierte-jugador-joven.jpg",
			moreInfo: "https://es.wikipedia.org/wiki/Kylian_Mbapp%C3%A9",
			visible: true
		},
		{
			name: "Marcus Rashford",
			age: 23,
			team: "Manchester United F. C",
			description:
				"Es un futbolista británico de ascendencia sancristobaleña, ​​ que juega como delantero en el Manchester United F. C. de la Premier League de Inglaterra y en la selección nacional de Inglaterra",
			url: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/06/11/15918594024782.jpg",
			moreInfo: "https://es.wikipedia.org/wiki/Marcus_Rashford",
			visible: false
		},
		{
			name: "Erling Haaland",
			age: 20,
			team: "Borussia Dortmund",
			description:
				"Es un futbolista profesional noruego que juega como delantero en el Borussia Dortmund de la Bundesliga y en la selección de Noruega. Es hijo del también exfutbolista Alf-Inge Håland",
			url: "https://images.mediotiempo.com/3RS0bNu6xviUoIS2nRBOWIqGC9E=/958x596/uploads/media/2020/02/19/es-noruego-tiene-apenas-anos.jpg",
			moreInfo: "https://es.wikipedia.org/wiki/Erling_Haaland",
			visible: true
		},
		{
			name: "Edinson Cavani",
			age: 34,
			team: "Manchester United F. C",
			description:
				"Es un futbolista uruguayo con nacionalidad italiana. Juega como delantero y su equipo actual es el Manchester United de la Premier League de Inglaterra. Es titular absoluto en la Selección de Uruguay desde 2008",
			url: "https://assets-es.imgfoot.com/media/cache/642x382/edinson-cavani-608b222045ba0.jpg",
			moreInfo: "https://es.wikipedia.org/wiki/Edinson_Cavani",
			visible: false
		}
	]
	return (
		<>
			<Button
				style={{ marginTop: "30px" }}
				variant="primary"
				size="lg"
				onClick={handleClick}
			>
				{checked.message}
			</Button>
			{checked.checked && (
				<Container>
					<Row className="justify-content-md-center">
						{items.map((item, key) => (
							<Item key={key} item={item} visible={item.visible} />
						))}
					</Row>
				</Container>
			)}
		</>
	)
}

export default ListItems
