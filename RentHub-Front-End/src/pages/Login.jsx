import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="w-screen h-screen">
      <nav className="w-full bg-black text-white py-4 px-6 text-2xl font-bold shadow-lx shadow-gray-400 ">
        RentHub
      </nav>

      <div className="flex h-full">
      {/* Left Side - Image */}
      <div className="w-1/2 flex items-center justify-center bg-white pl-10 ">
        <img src="\login_deco.jpg" alt="Login Illustration" className="rounded-lg w-3/4 h-auto w-600 h-600 object-cover" />
      </div>

      {/* Right Side - Form */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8 shadow-xl shadow-gray-400 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-950">Sign in</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400 border-gray-500 placeholder-gray-400 text-black"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400 border-gray-500 placeholder-gray-400 text-black"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Login
            </button>
          </form>
          <p className="text-center mt-4 text-sm text-gray-600">
            Don't have an account? <a href="/Signup" className="text-blue-600 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
