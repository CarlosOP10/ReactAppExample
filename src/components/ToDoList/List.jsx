import React, { useContext } from "react"
import { Badge, Button, Container } from "react-bootstrap"
import ThemeContext from "../Context/ThemeContext"
import { connect } from "react-redux"
import ToDo from "./ToDo"

const List = ({ title }) => {
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
      id: 6,
      message: "Meeting with Raul"
    },
    {
      id: 7,
      message: "Implement to do list"
    },
    {
      id: 8,
      message: "Install ruby on rails"
    }
  ]
  const { themeState, changeTheme } = useContext(ThemeContext)
  return (
    <Container
      style={{
        marginTop: "70px",
        border: "1px solid black",
        background: themeState.background
      }}
    >
      <Button variant="primary" onClick={changeTheme}>
        Change Theme
      </Button>
      <h1>
        <Badge variant="primary">{title}</Badge>
      </h1>
      {toDoList.map((todo) => (
        <ToDo key={todo.id} todo={todo} theme={themeState} />
      ))}
    </Container>
  )
}

const MapStateToProps = (state) => ({
  title: state.title
})

export default connect(MapStateToProps)(List)
