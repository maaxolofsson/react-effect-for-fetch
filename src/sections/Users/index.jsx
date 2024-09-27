import { booleanAPI } from "../../APIUrl";
import { useState, useEffect } from "react";

function UsersSection() {
  const [userData, setUserData] = useState([]);

  useEffect(
    () =>
      async function () {
        const res = await fetch(booleanAPI + "maaxolofsson/contact");
        const data = await res.json();
        setUserData(data);
      },
    []
  );

  return (
    <>
      <section>
        <h2>Users Section</h2>
        <div className="scroll-container">
          <ul className="users-list">
            {userData.map((user, userIx) => (
              <li key={userIx} style={{ background: user.favouriteColour }}>
                <img
                  src={user.profileImage}
                  alt={user.firstName + " " + user.lastName}
                />
                <h3>{user.firstName + " " + user.lastName}</h3>
                <p>Email: {user.email}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default UsersSection;
