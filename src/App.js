import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./components/ListItems/ListItems"
import ListItems from "./components/ListItems/ListItems"
import List from "./components/ToDoList/List"
import ContextProvider from "./components/Context/ContextProvider"
import { Provider } from "react-redux"
import store from "./components/Redux/store"

const App = () => {
  return (
    <Provider store={store}>
      <ContextProvider>
        <div className="App">
          {/* <ListItems /> */}
          <List />
        </div>
      </ContextProvider>
    </Provider>
  )
}

export default App
