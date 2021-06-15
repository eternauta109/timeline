export default function storeReducer(state = {}, action) {
  switch (action.type) {
    case "add_todo":
      return {
        ...state,
        todos: [
          {
            todo: action.payload.text,
            id: state.todos.length,
            complete: action.payload.complete
          },
          ...state.todos
        ],
        activeFilter: "TODO"
      };
    case "remove_todo":
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, action.id),
          ...state.todos.slice(action.id + 1)
        ]
      };
    case "toggle_todo":
      return {
        ...state,

        todos: state.todos.map((todo) => {
          if (todo.id !== action.id) {
            return todo;
          }
          return {
            ...todo,
            complete: !todo.complete
          };
        })
      };
    case "SET_FILTER":
      return {
        ...state,
        //aggiungo la proprietà activefilterse non c'è allo stato
        activeFilter: action.active
      };

    default:
      return { ...state };
  }
}
