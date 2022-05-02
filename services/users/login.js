import jwt from "jwt-decode";
const HOST = process.env.NEXT_PUBLIC_BACKEND || "";

const login = async (body) => {
  try {
    const result = await fetch(`${HOST}/auth/login`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    if (result.ok) {
      const data = await result.json();
      if (data.success === true) {
        const user = jwt(data.data.token).data;
        return { data: user, token: data.data.token };
      }
    }
    throw new Error("Error while trying to login");
  } catch (error) {
    console.log("ERROR!!!!", error);
  }
};

export default login;
