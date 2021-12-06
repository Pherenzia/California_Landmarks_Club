import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../util/auth";
import { Button, Card } from "react-bootstrap";
import "./Login.css";
import { ReactPictureGrid } from 'react-picture-grid';
// This signup form is intentionally minimalist to reduce effort required to
// customize it to your app's needs. See the excellent best practices guide for
// sign informs on web.dev https://web.dev/sign-in-form-best-practices/

// TODO: customize styles or import styles with favorite css approach
const data = [
  {
    image:
      'https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    title: 'Nature 01',
    description: 'This picture is taken from unsplash.com',
    pattern: 'wide',
  },
  {
    image:
      'https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    title: 'Nature 02',
    description: 'This picture is taken from unsplash.com',
  },
  {
    image:
      'https://images.unsplash.com/photo-1501862700950-18382cd41497?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=894&q=80',
    title: 'Nature 03',
    description: 'This picture is taken from unsplash.com',
  },
  {
    image:
      'https://images.unsplash.com/photo-1532040675891-5991e7e3d0cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    title: 'Nature 04',
    description: 'This picture is taken from unsplash.com',
  },
];


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
  },

};

const initialFormState = {
  email: "",
  password: "",
};

export default function Login() {
  const { isLoggedIn, login, loading, error } = useAuth();
  const [formState, setFormState] = useState(initialFormState);

  useEffect(() => {
    if (error) {
      // TODO: replace window alert with custom alert
      alert(error);
    }
  }, [error]);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    login(formState);
  };

  if (isLoggedIn) {
    // redirect to home if user is logged in
    return <Redirect to="/" />;
  }
  return (
      <Card style={{ height:'60rem', width: '80rem', marginTop: '1rem' }} className="pic center mx-auto">
      <h1>Adventure Awaits</h1>
    <>
      <div className="card formBackground"
      >
      <div className="justify-content-center">
        <h1 style={styles.formCenter}>Login</h1>
        <hr />
        <br/>
        <form onSubmit={handleSubmit}>
          <div style={styles.formCenter}>
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
          <br/>
          <div style={styles.formCenter}>
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
          <br/>
          <div style={styles.formCenter}>
            <Button varient="primary" disabled={loading} type="submit">
              {loading ? "Loading..." : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </div>
    </>
    </Card>
  );
}
