import Todo from "../models/Todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{
  items: Todo[];
  deleteTodoItem: (id: string) => void;
}> = (props) => {
  return (
    <ul className="todos">
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          todo={item}
          deleteTodoItem={props.deleteTodoItem.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default Todos;
