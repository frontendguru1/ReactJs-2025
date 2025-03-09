import { CircleCheckBig, FilePenLine, Trash2 } from "lucide-react";

const TaskItem = ({
  task,
  taskEditHandler,
  taskDeleteHandler,
  taskCompleteHandler,
}) => {
  const updatedItemClass = task?.isCompleted
    ? "task-item completed-task"
    : "task-item";
  return (
    <div className={updatedItemClass}>
      {/* Title */}
      <div className="title-wrapper">
        <h4>{task?.title}</h4>
        <p>{task?.description}</p>
      </div>

      {/* dates */}
      <div className="dates-wrapper">
        <div>
          <strong>Start Date:</strong>
          <br />
          {task?.startDate}
        </div>

        <div>
          <strong>End Date:</strong>
          <br />
          {task?.endDate}
        </div>
      </div>

      {/* Priority */}

      <div className="task-priority">
        <strong>Priority:</strong>
        <br />
        {task?.priority}
      </div>

      {/* Assignee */}

      <div className="task-assignee">
        <strong>Assignee:</strong>
        <br />
        {task?.assignee}
      </div>

      <div className="task-controls">
        <button onClick={taskEditHandler}>
          <FilePenLine />
        </button>
        <button onClick={taskDeleteHandler}>
          <Trash2 />
        </button>
        <button onClick={taskCompleteHandler}>
          <CircleCheckBig />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
