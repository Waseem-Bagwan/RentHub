import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to RentHub</h1>
      <Link to="/login">Go to Login</Link>
      <br></br>
      <Link to="/signup">Go to Sign up</Link>
    </div>
  );
}

export default Home;
