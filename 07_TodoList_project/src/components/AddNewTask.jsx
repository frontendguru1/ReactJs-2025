import { useState } from "react";

const formModel = {
  title: "",
  description: "",
  priority: "",
  startDate: "",
  endDate: "",
  assignee: "",
  id: Date.now(),
};
const AddNewTask = ({ addTaskData }) => {
  const [formData, setFormData] = useState(formModel);
  const [errors, setErrors] = useState({});

  // const errors = {
  //   title: "Please enter a title",
  //   description: 'Please enter a description'
  // }

  const errorHandler = () => {
    if (!formData?.title) {
      setErrors({
        title: "Please enter a title",
      });
      return;
    } else if (!formData?.description) {
      setErrors({
        description: "Please enter a description",
      });
      return;
    } else if (!formData?.priority) {
      setErrors({
        priority: "Please set a priority",
      });
      return;
    } else if (!formData?.startDate) {
      setErrors({
        startDate: "Please select a start date",
      });
      return;
    } else if (!formData?.endDate) {
      setErrors({
        endDate: "Please select a end date",
      });
      return;
    } else if (!formData?.assignee) {
      setErrors({
        assignee: "Please select a assignee",
      });
      return;
    } else {
      setErrors({});
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    errorHandler();
    console.log("errors", errors);

    if (
      formData?.title &&
      formData?.description &&
      formData?.priority &&
      formData?.startDate &&
      formData?.endDate &&
      formData?.assignee
    ) {
      addTaskData({ ...formData, id: Date.now() });
      setFormData(formModel);
    }
  };

  const fieldChangeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="addNewTask-container">
      <h2>Add a new task</h2>
      <form onSubmit={submitHandler}>
        <div className="field-container">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={fieldChangeHandler}
          />
          <div className="error">{errors?.title && errors?.title}</div>
        </div>

        <div className="field-container">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            onChange={fieldChangeHandler}
            value={formData.description}
          ></textarea>
          <div className="error">
            {errors?.description && errors?.description}
          </div>
        </div>

        <div className="field-container">
          <label htmlFor="priority">Priority</label>
          <select
            name="priority"
            id="priority"
            onChange={fieldChangeHandler}
            value={formData.priority}
          >
            <option value="">Please Select</option>
            <option value={"high"}>High</option>
            <option value={"medium"}>Medium</option>
            <option value={"low"}>Low</option>
          </select>
          <div className="error">{errors?.priority && errors?.priority}</div>
        </div>

        <div className="field-container">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            value={formData.startDate}
            onChange={fieldChangeHandler}
          />
          <div className="error">{errors?.startDate && errors?.startDate}</div>
        </div>

        <div className="field-container">
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            value={formData.endDate}
            onChange={fieldChangeHandler}
          />
          <div className="error">{errors?.endDate && errors?.endDate}</div>
        </div>

        <div className="field-container">
          <label htmlFor="assignee">Assignee</label>
          <select
            name="assignee"
            id="assignee"
            onChange={fieldChangeHandler}
            value={formData.assignee}
          >
            <option value="">Please Select</option>
            <option value={"alex"}>Alex</option>
            <option value={"john"}>John</option>
            <option value={"michael"}>Michael</option>
          </select>
          <div className="error">{errors?.assignee && errors?.assignee}</div>
        </div>

        <div className="add-btn">
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddNewTask;
