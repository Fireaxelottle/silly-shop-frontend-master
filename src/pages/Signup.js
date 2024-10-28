import React, { useState } from "react";

import Signup1 from "../components/Signup1";
import Signup2 from "../components/Signup2";
import { asyncThunkCreator } from "@reduxjs/toolkit";

const Signup = () => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [gender, setGender] = useState("select gender");
  const [password, setPassword] = useState(null);
  const [CP, setCP] = useState(null);
  const [Photo, setPhoto] = useState(null);

  const AddUser = async (post) => {
    const table = {
      name: name,
      email: email,
      password: password,
      gender: gender,
      dob: new Date().getTimezoneOffset(),
      photo: Photo,
    };
    if (password !== CP ) {
      alert ("password not match");
    } else {
      try {
        const res = await fetch("http://localhost:4000/api/v1/user/register", {
          method: "POST",
          body: JSON.stringify(table),
          headers: { "Content-Type": "application/json" },
        });
        console.log(res)
        alert("User Added Succesfully");
      } catch (err) {
        console.log(err)
      }
    }  
  };

  switch (page) {
    case 1:
      return (
        <Signup1
          setGender={setGender}
          setEmail={setEmail}
          setName={setName}
          setPage={setPage}
          name={name}
          email={email}
          gender={gender}
        />
      );
      break;
    case 2:
      return (
        <Signup2
          setCP={setCP}
          setPassword={setPassword}
          password={password}
          CP={CP}
          setPage={setPage}
          Photo={Photo}
          setPhoto={setPhoto}
          AddUser={AddUser}
        />
      );

    default:
  }
};
export default Signup;
