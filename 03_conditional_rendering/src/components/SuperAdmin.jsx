const SuperAdmin = () => {
  const isSuperAdmin = true;
  const isUserOnline = true;

  if (!isSuperAdmin) {
    return <h3>Super admin user not found!</h3>;
  }

  /*return (
    <>
      {isSuperAdmin ? (
        <div>
          <h1>Super Admin</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At placeat
            facere repellat blanditiis, repellendus iure ratione ex, suscipit
            reiciendis, tenetur corporis. Laudantium ducimus rem perferendis ea
            modi recusandae earum assumenda!
          </p>
        </div>
      ) : (
        <h3>Super admin user not found!</h3>
      )}
    </>
  );*/

  /* 
{ variableName && JSX}
{variableName ? trueBlock: falseBlock}

if(true) {
  return JSX
}

return (
JSX
) 
  */

  return (
    <div>
      <h1>Super Admin:- {isUserOnline ? "online" : "offline"}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At placeat
        facere repellat blanditiis, repellendus iure ratione ex, suscipit
        reiciendis, tenetur corporis. Laudantium ducimus rem perferendis ea modi
        recusandae earum assumenda!
      </p>
    </div>
  );
};

export default SuperAdmin;
