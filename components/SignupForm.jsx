import { Alert, Button, Paper, TextField } from "@mui/material";
import signup from "@services/users/signup";
import { useRouter } from "next/router";
import React, { useState } from "react";

const SignupForm = () => {
  const [values, setValues] = useState({});
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    if (error) setError(null);
  };

  const handleSubmit = async () => {
    if (values.password !== values.confirmationPassword) {
      setError("Error. Las contraseñas no coinciden");
      return;
    }
    try {
      const res = await signup(values);
      if (res.success) {
        //Add to context
        localStorage.setItem("user", res.user);
        router.push("/");
      }
    } catch (e) {
      setError(`Error. Compruebe los datos ingresados`);
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{ display: "flex", flexDirection: "column", width: "50%" }}
    >
      <TextField
        name="email"
        label="E-mail"
        variant="filled"
        type="email"
        value={values["email"] || ""}
        onChange={handleChange}
        required
      />
      <TextField
        name="firstName"
        label="Nombre"
        variant="filled"
        type="text"
        value={values["firstName"] || ""}
        onChange={handleChange}
        required
      />
      <TextField
        name="lastName"
        label="Apellido"
        variant="filled"
        type="text"
        value={values["lastName"] || ""}
        onChange={handleChange}
        required
      />
      <TextField
        name="password"
        label="Contraseña"
        type="password"
        variant="filled"
        value={values["password"] || ""}
        onChange={handleChange}
        required
      />
      <TextField
        name="confirmationPassword"
        label="Confirmar Contraseña"
        type="password"
        variant="filled"
        value={values["confirmationPassword"] || ""}
        onChange={handleChange}
        required
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

export default SignupForm;
