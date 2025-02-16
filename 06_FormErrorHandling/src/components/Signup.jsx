import { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  // const formData = {
  //   firstName: 'John',
  //   lastName: 'Doe',
  //   dob: 32,
  // }

  // const errors = {
  //   firstName: 'First name is required',
  //   lastName: 'Last name is required
  // }

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const validateForm = () => {
    const err = {};
    if (!formData?.firstName?.trim()) {
      err.firstName = "First name is required!";
    } else if (!formData?.lastName?.trim()) {
      err.lastName = "Last name is required!";
    } else if (!formData?.email?.trim()) {
      err.email = "Email is required!";
    } else if (!validateEmail(formData?.email)) {
      err.email = "Email should be valid!";
    }

    setErrors(err);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    validateForm();

    console.log(formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <form className="form-wrapper" onSubmit={submitHandler}>
        <div className="field-container">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={handleInputChange}
          />

          {errors.firstName && <div className="error"> {errors.firstName}</div>}
        </div>

        <div className="field-container">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={handleInputChange}
          />
          {errors.lastName && <div className="error"> {errors.lastName}</div>}
        </div>

        <div className="field-container">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleInputChange}
          />
          {errors.email && <div className="error"> {errors.email}</div>}
        </div>

        <div className="field-container">
          <label htmlFor="dob">DOB</label>
          <input type="date" name="dob" id="dob" onChange={handleInputChange} />
        </div>

        <div className="field-container">
          <label htmlFor="phoneNumber">Phone number</label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            onChange={handleInputChange}
          />
        </div>

        <div className="field-container">
          <label htmlFor="phoneNumber">Password</label>
          <input
            type="password"
            name="Password"
            id="Password"
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Signup;
