import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Logout = () => {
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      localStorage.removeItem("user");
      router.replace("/");
    }
  }, [router]);
  return <div>Cerrando Sesión...</div>;
};

export default Logout;
