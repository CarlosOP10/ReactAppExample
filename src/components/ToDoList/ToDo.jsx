import React, { useState } from "react"
import { InputGroup, FormControl } from "react-bootstrap"
import PropTypes from "prop-types"

const ToDo = ({ todo }) => {
  const [todoState, setTodoState] = useState({ ...todo, checked: false })

  const handleOnChangeMessage = (prop) => (event) => {
    const {
      target: { value }
    } = event

    setTodoState({ ...todoState, [prop]: value })
  }
  const handleChangeCheckbox = (event) => {
    const {
      target: { checked }
    } = event
    setTodoState({ ...todoState, checked: checked })
  }
  return (
    <InputGroup style={{ margin: "10px" }}>
      {console.log(todoState)}
      <InputGroup.Prepend>
        <InputGroup.Checkbox
          checked={todoState.checked}
          aria-label="Checkbox for following text input"
          onChange={handleChangeCheckbox}
        />
      </InputGroup.Prepend>
      <FormControl
        aria-label="Text input with radio button"
        value={todoState.message}
        onChange={handleOnChangeMessage("message")}
      />
    </InputGroup>
  )
}

ToDo.propTypes = {
  todo: PropTypes.object.isRequired
}

export default ToDo
