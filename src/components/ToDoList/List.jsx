import React, { useContext } from "react"
import { Badge, Button, Container } from "react-bootstrap"
import ThemeContext from "../Context/ThemeContext"
import { useSelector } from "react-redux"
import ToDo from "./ToDo"

const List = () => {
  const { title, toDoList, itemsFinish } = useSelector((state) => ({
    title: state.title,
    toDoList: state.toDoList,
    itemsFinish: state.itemsFinish
  }))
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
        {console.log(itemsFinish)}
        <Badge variant="primary">{title}</Badge>
      </h1>
      {toDoList.map((todo) => (
        <ToDo key={todo.id} todo={todo} theme={themeState} />
      ))}
    </Container>
  )
}

// const MapStateToProps = (state) => ({
//   title: state.title,
//   toDoList: state.toDoList
// })

export default List
// export default connect(MapStateToProps)(List)
