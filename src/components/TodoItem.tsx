import Todo from "../models/Todo";

const TodoItem: React.FC<{ todo: Todo; deleteTodoItem: () => void }> = ({
  todo,
  deleteTodoItem,
}) => {
  return (
    <li onClick={deleteTodoItem} className="item" key={todo.id}>
      {todo.text}
    </li>
  );
};
export default TodoItem;
