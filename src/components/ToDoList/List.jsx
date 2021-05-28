import React, { useContext, useEffect } from 'react'
import { Badge, Button, Container, Spinner } from 'react-bootstrap'
import ThemeContext from '../../Context/ThemeContext'
import { useDispatch, useSelector } from 'react-redux'
import ToDo from './ToDo'
import {
  addItemToDoList,
  deleteItemsToDoList,
  getPokemons
} from '../../Redux/actionsCreators'

const List = () => {
  const { title, toDoList, itemsFinish, isLoading } = useSelector(state => ({
    title: state.title,
    toDoList: state.toDoList,
    itemsFinish: state.itemsFinish,
    isLoading: state.isLoading
  }))
  const dispatch = useDispatch()
  const { themeState, changeTheme } = useContext(ThemeContext)

  useEffect(() => {
    dispatch(getPokemons())
  }, [dispatch])

  return isLoading ? (
    <Spinner
      animation='border'
      role='status'
      style={{ position: 'fixed', marginTop: '200px' }}
    >
      <span className='sr-only'>Loading...</span>
    </Spinner>
  ) : (
    <Container
      style={{
        marginTop: '70px',
        border: '1px solid black',
        background: themeState.background
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Button
          variant='primary'
          onClick={changeTheme}
          style={{ height: '40px' }}
        >
          Change Theme
        </Button>
        <h2>
          <Badge
            pill
            variant='primary'
            style={{ marginRight: '200px', marginLeft: '200px' }}
          >
            {title}
          </Badge>
        </h2>
        <h4>
          <Badge pill variant='info'>
            {itemsFinish.length}
          </Badge>
        </h4>
      </div>
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

export default List
