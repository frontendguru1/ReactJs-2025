import TaskItem from "./TaskItem";

const TaskList = ({ taskList, editTask, removeTask, completeTask }) => {
  return (
    <div className="taskList-wrapper">
      <h2>Task List</h2>
      {taskList?.length > 0 &&
        taskList?.map((task) => {
          return (
            <TaskItem
              key={task.id}
              task={task}
              taskEditHandler={() => editTask(task.id)}
              taskDeleteHandler={() => removeTask(task.id)}
              taskCompleteHandler={() => completeTask(task.id)}
            />
          );
        })}
    </div>
  );
};

export default TaskList;
