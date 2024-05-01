import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const userData = [
  { name: "rana" },
  { name: "pratap" },
  { name: "rao" },
  { name: "singh" },
  { name: "Tej" }

];


function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userData)
  }, [])

  const handleChange = (e) => {
    const { name, checked } = e.target;

    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user

      );
      setUsers(tempUser);
    }
  }


  return (
    <div>
      <form action="">
        <h3>Select Users</h3>
        <div>
          <input type="checkbox"
            name="allSelect"
            checked={!users.some((user) => user?.isChecked !== true)}
            onChange={handleChange}
          />
          <label>All select</label>
        </div>
        {
          users.map((user, index) => (
            <div key={index}>
              <input type="checkbox"
                name={user.name}
                checked={user?.isChecked || false}
                onChange={handleChange}
              />
              <label htmlFor="">{user.name}</label>
            </div>
          )

          )
        }

      </form>
    </div>
  )

}

export default App;