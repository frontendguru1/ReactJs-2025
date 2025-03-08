import { CircleX } from "lucide-react";
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
const AddNewTask = ({ addTaskData, handleClose }) => {
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
      <div
        className="absolute right-5 top-5 cursor-pointer"
        onClick={handleClose}
      >
        <CircleX size={20} className="text-amber-600" />
      </div>
      <h2 className="text-2xl font-bold text-center py-3">Add a new task</h2>
      <form onSubmit={submitHandler}>
        <div className="field-container">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={fieldChangeHandler}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <div className="error">{errors?.title && errors?.title}</div>
        </div>

        <div className="field-container pt-3">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            onChange={fieldChangeHandler}
            value={formData.description}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-32"
          ></textarea>
          <div className="error">
            {errors?.description && errors?.description}
          </div>
        </div>

        <div className="field-container pt-3">
          <label htmlFor="priority">Priority</label>
          <select
            name="priority"
            id="priority"
            onChange={fieldChangeHandler}
            value={formData.priority}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Please Select</option>
            <option value={"high"}>High</option>
            <option value={"medium"}>Medium</option>
            <option value={"low"}>Low</option>
          </select>
          <div className="error">{errors?.priority && errors?.priority}</div>
        </div>

        <div className="field-container pt-3">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            value={formData.startDate}
            onChange={fieldChangeHandler}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <div className="error">{errors?.startDate && errors?.startDate}</div>
        </div>

        <div className="field-container pt-3">
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            value={formData.endDate}
            onChange={fieldChangeHandler}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <div className="error">{errors?.endDate && errors?.endDate}</div>
        </div>

        <div className="field-container pt-3">
          <label htmlFor="assignee">Assignee</label>
          <select
            name="assignee"
            id="assignee"
            onChange={fieldChangeHandler}
            value={formData.assignee}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Please Select</option>
            <option value={"alex"}>Alex</option>
            <option value={"john"}>John</option>
            <option value={"michael"}>Michael</option>
          </select>
          <div className="error">{errors?.assignee && errors?.assignee}</div>
        </div>

        <div className="add-btn pt-5">
          <button
            type="submit"
            className="px-4 py-2 bg-sky-800 text-white font-semibold rounded-sm hover:bg-sky-700 cursor-pointer"
          >
            Add a new task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewTask;
