import { AppBar, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userLS = localStorage.getItem("user");
    if (userLS) setUser(JSON.parse(userLS));
  }, []);

  return (
    <AppBar position="static">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Link href={"/"}>Home</Link>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {!user?.token ? (
            <>
              <Link href={"/login"}>Iniciar Sesión</Link>
              <Link href={"/signup"}>Crear Cuenta</Link>
            </>
          ) : (
            <>
              <Link href={"/uploader"}>Upload</Link>
              <Link href={"/logout"}>Logout</Link>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
