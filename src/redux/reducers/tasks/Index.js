let initialState = {
  tasks: [],
};

const tasks = (state = initialState, action) => {
  console.log(`Action Type ${action.type} Action ${action.id}`);
  switch (action.type) {
    case "GET_TASKS":
      let tasks = [...state.tasks];
      tasks = action.tasks;
      return { ...state, tasks, params: action.routeParams };

    case "TOGGLE_CHECK_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.id ? { ...task, completed: !task.completed } : task
        ),
      };

    default:
      return { ...state };
  }
};

export default tasks;
