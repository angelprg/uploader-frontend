const HOST = process.env.NEXT_PUBLIC_BACKEND || "";

const signup = async (body) => {
  try {
    const result = await fetch(`${HOST}/users/signup`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    const data = await result.json();
    console.log("data", data);
    return data;
  } catch (error) {
    console.log("ERROR!!!!", error);
  }
};

export default signup;
