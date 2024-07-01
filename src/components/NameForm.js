import React, { useState } from "react";

const NameForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [fullName , setFullName] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(`${firstName} ${lastName}`)
  };

  return (
    <>
      <div className="container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h1>Full Name Display</h1>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              required
              onChange={(e) => setlastName(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        {fullName && <p>Full Name: {fullName}</p>}
      </div>
    </>
  );
};

export default NameForm;
