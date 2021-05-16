import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./components/ListItems/ListItems"
import ListItems from "./components/ListItems/ListItems"
import List from "./components/ToDoList/List"
import ContextProvider from "./components/Context/ContextProvider"

const App = () => {
  return (
    <ContextProvider>
      <div className="App">
        {/* <ListItems /> */}
        <List />
      </div>
    </ContextProvider>
  )
}

export default App
