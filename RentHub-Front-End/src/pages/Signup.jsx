import { useState } from "react";

function Signup() {
  const [userType, setUserType] = useState(""); // Track Tenant or Landlord
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("User Type:", userType);
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex w-screen h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg p-8 shadow-lg rounded-lg bg-white border border-gray-200">
        {/* Step 1: Choose User Type */}
        {!userType && (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-950 mb-6">Sign Up as</h2>
            <div className="flex justify-center gap-4">
              <button
                className="w-1/2 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => setUserType("Tenant")}
              >
                Tenant
              </button>
              <button
                className="w-1/2 bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => setUserType("Landlord")}
              >
                Landlord
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Show Sign Up Form */}
        {userType && (
          <>
            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-950">
              Sign Up as {userType}
            </h2>
            <form onSubmit={handleSignup} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400 border-gray-500 placeholder-gray-400 text-black"
                required
              />
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
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400 border-gray-500 placeholder-gray-400 text-black"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
              >
                Sign Up
              </button>
            </form>
            <p className="text-center mt-4 text-sm text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 hover:underline">
                Log in
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Signup;
