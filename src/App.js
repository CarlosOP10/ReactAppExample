import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./components/ListItems/ListItems"
import ListItems from "./components/ListItems/ListItems"
import List from "./components/ToDoList/List"
function App() {
	return (
		<div className="App">
			{/* <ListItems /> */}
			<List/>
		</div>
	)
}

export default App
