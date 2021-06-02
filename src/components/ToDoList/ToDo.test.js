import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import ToDo from './ToDo'
import store from '../../Redux/store'

test('renders correctly', () => {
  const item = {
    id: 1,
    name: 'Pikachu'
  }
  const theme = {
    background: '',
    foreground: ''
  }

  const { getByText } = render(
    <Provider store={store}>
      <ToDo todo={item} theme={theme} />
    </Provider>
  )
  expect(getByText('Pikachu')).toBeInTheDocument()
})
