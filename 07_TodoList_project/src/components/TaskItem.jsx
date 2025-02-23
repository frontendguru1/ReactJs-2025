const TaskItem = ({ task }) => {
  return (
    <div className="task-item">
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
    </div>
  );
};

export default TaskItem;
