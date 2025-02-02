import { useState, useEffect } from "react";
import { userData } from "../data/appData";
import Card from "./UserCard";

const User = () => {
  const [userDetails, setUserDetails] = useState(userData);
  const [gitHubProfile, setGitHubProfile] = useState();

  const addNewUserHandler = () => {
    const newUser = {
      name: "New user",
      age: 25,
      address: "123 new address",
    };

    setUserDetails((prevState) => {
      return [...prevState, newUser];
    });
  };

  /*useEffect(() => {
    console.log("component loaded");
  }, [userDetails]);*/

  useEffect(() => {
    fetch("https://api.github.com/users/frontendguru1")
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        // console.log("API res", res);
        setGitHubProfile(res);
      });
  }, []);

  return (
    <>
      {/* {userDetails.map(function (user) {
        return (
          <>
            <div>User name is:{user.name}</div>
            <div>User age is:{user.age}</div>
            <hr />
          </>
        );
      })} */}

      {/* {userDetails.map((user) => {
        return (
          <>
            <div>User name is:{user.name}</div>
            <div>User age is:{user.age}</div>
            <hr />
          </>
        );
      })} */}
      <div className="card-wrapper">
        {userDetails.map((user, index) => (
          <Card key={index} data={user} />
        ))}
      </div>

      <div className="padt-30">
        <button onClick={addNewUserHandler}>Add New User</button>
      </div>

      <hr />

      {gitHubProfile ? (
        <>
          <div>
            Company name: {gitHubProfile.company}
            <img src={gitHubProfile.avatar_url} alt="" />
          </div>
        </>
      ) : (
        <h1>Loading....</h1>
      )}
    </>
  );
};

export default User;
