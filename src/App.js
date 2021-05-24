import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./components/ListItems/ListItems"
import List from "./components/ToDoList/List"
import ContextProvider from "./Context/ContextProvider"
import { Provider } from "react-redux"
import store from "./Redux/store"

const App = () => {
  return (
    <Provider store={store}>
      <ContextProvider>
        <div className="App">
          <List />
        </div>
      </ContextProvider>
    </Provider>
  )
}

export default App
