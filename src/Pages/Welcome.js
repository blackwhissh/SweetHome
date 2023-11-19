export default function SignInSide() {
  const accessToken = localStorage.getItem("token"); // Retrieve access token from localStorage

  fetch("http://localhost:8081/api/client", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`, // Send access token in the Authorization header
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Data from protected endpoint:", data);
    })
    .catch((error) => console.error("Error:", error));
  return (
    <div className="">
      <h1>hello</h1>
    </div>
  );
}
