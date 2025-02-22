import TaskItem from "./TaskItem";

const TaskList = ({ taskList }) => {
  return (
    <div className="taskList-wrapper">
      <h2>Task List</h2>
      {taskList?.length > 0 &&
        taskList?.map((task) => {
          return <TaskItem key={task.id} task={task} />;
        })}
    </div>
  );
};

export default TaskList;
