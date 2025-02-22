const TaskItem = ({ task }) => {
  return (
    <div className="task-item">
      <h4>{task?.title}</h4>
      <p>{task?.description}</p>
      <div>
        <strong>Priority:</strong>
        <br />
        {task?.priority}
      </div>

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

      <div>
        <strong>Assignee:</strong>
        <br />
        {task?.assignee}
      </div>
    </div>
  );
};

export default TaskItem;
