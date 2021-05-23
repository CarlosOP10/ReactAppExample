import React, { useContext } from 'react'
import { Badge, Button, Container } from 'react-bootstrap'
import ThemeContext from '../Context/ThemeContext'
import { useDispatch, useSelector } from 'react-redux'
import ToDo from './ToDo'
import { addItemToDoList, deleteItemsToDoList } from '../Redux/actionsCreators'

const List = () => {
  const { title, toDoList, itemsFinish } = useSelector(state => ({
    title: state.title,
    toDoList: state.toDoList,
    itemsFinish: state.itemsFinish
  }))
  const dispatch = useDispatch()
  const { themeState, changeTheme } = useContext(ThemeContext)
  return (
    <Container
      style={{
        marginTop: '70px',
        border: '1px solid black',
        background: themeState.background
      }}
    >
      <Button variant='primary' onClick={changeTheme}>
        Change Theme
      </Button>
      <h1>
        <Badge variant='primary'>{title}</Badge>
      </h1>
      {toDoList.map(todo => (
        <ToDo key={todo.id} todo={todo} theme={themeState} />
      ))}
      <Button
        variant='danger'
        onClick={() => dispatch(deleteItemsToDoList())}
        disabled={itemsFinish.length > 0 ? false : true}
      >
        Delete items
      </Button>
      <Button variant='primary' onClick={() => dispatch(addItemToDoList())}>
        Add item
      </Button>
    </Container>
  )
}

// const MapStateToProps = (state) => ({
//   title: state.title,
//   toDoList: state.toDoList
// })

export default List
// export default connect(MapStateToProps)(List)
