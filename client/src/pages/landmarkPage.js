import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../util/auth";




export default function Home() {
    const { isLoggedIn, user } = useAuth();
    return (
      <div>
        {/* TODO: display logged in user's username */}
        <h1 style={{ textAlign: "center" }}> placeholder for Landmark.title </h1>
        <h2 style={{ textAlign: "center" }}>placeholder for registration date</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo cumque
          explicabo ipsum, facilis repellendus omnis amet in accusantium quisquam
          nam qui consectetur sunt distinctio nemo molestiae ratione. Iure,
          aliquam debitis.
        </p>
      </div>
    );
  }