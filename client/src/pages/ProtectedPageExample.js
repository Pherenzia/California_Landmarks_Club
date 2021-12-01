import { useEffect, useState } from "react";
import { findMe } from "../util/api";
import { useAuth } from "../util/auth";

const renderDate = (date) =>
  `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

export default function ProtectedPageExample() {
  // user from the userAuth hook only contains data included in the token
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [me, setMe] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    // Can't pass an async function to useEffect so use an IIFE
    (async () => {
      try {
        const data = await findMe();
        setMe(data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return (
    <div>
      <h1>Welcome {user.username}!</h1>
      <p>
        Last Login:{" "}
        {loading ? "Loading..." : me && renderDate(new Date(me.lastLogin))}
      </p>
      <hr />
      <p>Your id is {user._id}</p>
      <p>Your email is {user.email}</p>
      {error && <p>An error occurred loading the your info. Error: {error}</p>}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo cumque
        explicabo ipsum, facilis repellendus omnis amet in accusantium quisquam
        nam qui consectetur sunt distinctio nemo molestiae ratione. Iure,
        aliquam debitis.
      </p>
    </div>
  );
}
