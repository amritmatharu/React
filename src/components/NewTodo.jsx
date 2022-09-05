import React, { useRef } from "react";

const NewTodo: React.FC<{ addNewTodo: (toDoText: string) => void }> = (
  props
) => {
  const textInputRef = useRef();

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredtext = textInputRef.current.value;
    if (enteredtext.trim().length === 0) {
      return;
    }
    props.addNewTodo(enteredtext);
  };
  return (
    <form className="form" onSubmit={formSubmitHandler}>
      <div className="formField">
        <label htmlFor="todo-text" />
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;
