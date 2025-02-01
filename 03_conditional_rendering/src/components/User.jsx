import { useState } from "react";

const User = () => {
  const [isUserOnline, setIsUserOnline] = useState();

  return (
    <div>
      <h1>
        Alex:
        <span
          className={isUserOnline ? "userStatus online" : "userStatus offline"}
        >
          {isUserOnline ? "online" : "offline"}
        </span>
      </h1>

      <button onClick={() => setIsUserOnline(!isUserOnline)}>
        Change Status
      </button>
    </div>
  );
};

export default User;
