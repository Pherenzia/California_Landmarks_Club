import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../util/auth";
import { Card, Button } from "react-bootstrap";

// This signup form is intentionally minimalist to reduce effort required to
// customize it to your app's needs. See the excellent best practices guide for
// sign informs on web.dev https://web.dev/sign-in-form-best-practices/

// TODO: customize styles or import styles with favorite css approach
const styles = {
  formControl: {
    display: "flex",
    padding: "0.25em",
  },
  label: {
    flex: "0 1 6em",
    paddingRight: "0.25em",
  },
  formCenter: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  }
};

const initialFormState = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
};

export default function SignUp() {
  const { isLoggedIn, signup, loading, error } = useAuth();
  const [formState, setFormState] = useState(initialFormState);

  useEffect(() => {
    if (error) {
      // TODO: replace window alert with custom alert.
      alert("Please Sign Up");
    }
  }, [error]);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    signup(formState);
  };

  if (isLoggedIn) {
    // redirect to home if user is logged in
    return <Redirect to="/Profile.js" />;
  }
  return (
    <>
      <Card style={{ width: '25rem', marginTop: '5rem' }} className="mx-auto">
        <Card.Body>
          <div className="justify-content-around">
            <h1 style={styles.formCenter}>Sign Up</h1>
            <hr />
            <div style={styles.formControl}>
              <label htmlFor="firstname" style={styles.label}>
                First Name
              </label>
              <input
                autoFocus
                disabled={loading}
                id="firstname"
                type="text"
                placeholder="Enter first name"
                name="firstname"
                value={formState.firstname.value}
                onChange={handleInputChange}
              />
            </div>
            <div style={styles.formControl}>
              <label htmlFor="lastname" style={styles.label}>
                Last Name
              </label>
              <input
                autoFocus
                disabled={loading}
                id="lastname"
                type="text"
                placeholder="Enter last name"
                name="lastname"
                value={formState.lastname.value}
                onChange={handleInputChange}
              />
            </div>
            <div style={styles.formControl}>
              <label htmlFor="username" style={styles.label}>
                Username
              </label>
              <input
                autoFocus
                disabled={loading}
                id="username"
                type="text"
                placeholder="Enter username"
                name="username"
                value={formState.username.value}
                onChange={handleInputChange}
              />
            </div>
            <form onSubmit={handleSubmit}>
              <div style={styles.formControl}>
                <label htmlFor="email" style={styles.label}>
                  Email
                </label>
                <input
                  disabled={loading}
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formState.email.value}
                  onChange={handleInputChange}
                />
              </div>
              <div style={styles.formControl}>
                <label htmlFor="new-password" style={styles.label}>
                  Password
                </label>
                <input
                  disabled={loading}
                  id="new-password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={formState.password.value}
                  onChange={handleInputChange}
                />
              </div>

              <div style={styles.formCenter}>
                <Button variant="primary" disabled={loading} type="submit">
                {loading ? "Loading..." : "Submit"}
              </Button>
              </div>

            </form>
          </div>
        </Card.Body>
      </Card>


    </>
  );
}
