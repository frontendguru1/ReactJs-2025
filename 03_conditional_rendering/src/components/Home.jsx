import AdminDetails from "./AdminDetails";

const Home = () => {
  const isAdmin = true;
  const isSuperAdmin = false;

  // const renderAdminUserDetails = () => {
  //   return (
  //     <div>
  //       <h1>Admin user</h1>
  //       <p>admin user details...</p>
  //       <div>img</div>
  //     </div>
  //   );
  // };

  const renderSuperAdmin = () => {
    return (
      <div>
        <h3>Super Admin</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
          expedita
        </p>
      </div>
    );
  };

  const renderSuperAdmin2 = () => (
    <div>
      <h3>Super Admin 222</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
        expedita
      </p>
    </div>
  );

  const getUserAge = (user) => user.age;

  return (
    <div>
      {isAdmin && <AdminDetails />}
      <hr />

      {/* {renderSuperAdmin()} */}

      {isSuperAdmin ? renderSuperAdmin() : <AdminDetails />}

      <hr />
      {renderSuperAdmin2()}
      <hr />

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
        expedita quo ab nemo qui. Exercitationem, consequatur cumque reiciendis
        id error tenetur maxime eaque sit reprehenderit? Similique debitis
        tempora quas illo?
      </p>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
        expedita quo ab nemo qui. Exercitationem, consequatur cumque reiciendis
        id error tenetur maxime eaque sit reprehenderit? Similique debitis
        tempora quas illo?
      </p>
    </div>
  );
};

export default Home;
