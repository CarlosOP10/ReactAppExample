import React from "react"
import { Badge, Container } from "react-bootstrap"
import ToDo from "./ToDo"

const List = () => {
	const toDoList = [
		{
			id: 1,
			message: "React Class"
		},
		{
			id: 2,
			message: "Ruby on Rails Class"
		},
		{
			id: 3,
			message: "Task React"
		},
		{
			id: 4,
			message: "Task Ruby on Rails"
		},
		{
			id: 5,
			message: "Standup Meeting"
		},
    {
      id:6,
      message:"Meeting with Raul"
    },
    {
      id:7,
      message:"Implement to do list"
    },
    {
      id:8,
      message:"Install ruby on rails"
    }
	]
	return (
		<Container style={{ marginTop: "70px", border: "1px solid black" }}>
			<h1>
				<Badge variant="primary">TO DO LIST</Badge>
			</h1>
			{toDoList.map((todo) => (
				<ToDo key={todo.id} todo={todo} />
			))}
		</Container>
	)
}

export default List
