import { Alert, Button, Paper, TextField } from "@mui/material";
import login from "@services/users/login";
import { useRouter } from "next/router";
import React, { useState } from "react";

const LoginForm = () => {
  const [values, setValues] = useState({});
  const [error, setError] = useState(null);

  const router = useRouter()

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    if (error) setError(null);
  };

  const handleSubmit = async () => {
    try {
      const data = await login(values);
      localStorage.setItem('user', JSON.stringify(data))
      router.replace('/')
    } catch (e) {
      setError(`Error. Compruebe nombre de usuario y contraseña`);
    }
  };

  return (
    <Paper elevation={3}>
      <TextField
        name="email"
        label="E-mail"
        variant="filled"
        type="email"
        value={values["email"] || ""}
        onChange={handleChange}
      />
      <TextField
        name="password"
        label="Password"
        type="password"
        variant="filled"
        value={values["password"] || ""}
        onChange={handleChange}
      />
      <Button variant="outlined" onClick={handleSubmit}>
        Login
      </Button>
      {error && (
        <Alert variant="outlined" color="error">
          {error}
        </Alert>
      )}
    </Paper>
  );
};

export default LoginForm;
