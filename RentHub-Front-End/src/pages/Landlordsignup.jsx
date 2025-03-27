import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, useNavigate } from "react-router-dom";

function LandlordSignup() {
  const navigate = useNavigate();

  // General variable
  const [isRight, setIsRight] = useState(false); //button
  const [showPassword, setShowPassword] = useState(false); //for show password icon
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Landlord variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [govtId, setGovtId] = useState("");
  const [address, setAddress] = useState("");

  // Tenant variables
  const [tenantname, setTenantName] = useState("");
  const [tenantemail, setTenantEmail] = useState("");
  const [tenantphone, setTenantPhone] = useState("");
  const [tenantpassword, setTenantPassword] = useState("");
  const [tenantconfirmPassword, setTenantConfirmPassword] = useState("");

  const handleNextLandlord = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    navigate("/signup/landlord/dashboard", {
      state: { name, email, phone, govtId, address },
    });
  };

  const handleNextTenant = (e) => {
    e.preventDefault();
    if (tenantpassword !== tenantconfirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    navigate("/signup/tenant/dashboard", {
      state: {
        tenantname,
        tenantemail,
        tenantphone,
        tenantpassword,
        tenantconfirmPassword,
      },
    });
  };

 

  return (
    <div className="w-474 h-300 bg-orange-200 overflow-y-auto ">
      
      <div style={{ fontFamily: "'Corinthia', cursive" }}>
  <nav className="bg-orange-200 text-5xl text-black text-hardbold p-4">
    RentHub
  </nav>
</div>


    

      {/* Content */}
      <div className="flex pt-6 bg-orange-200 pl-30 h-full w-full top-0">
        {/* (Left Side) */}
        <div className="w-1/2 flex items-center justify-start top-0 h-full bg-white w-205 ">
          <div className="w-full h-293 mr-0 ml-0 p-8 bg-white ">
            {/* Toggle Track */}
            <div
              className="ml-50 relative w-80 h-22 bg-black rounded-full flex items-center px-1 cursor-pointer overflow-hidden"
              onClick={() => setIsRight(!isRight)}
            >
              {/* Text that Moves */}
              <span
                className={`absolute right-20 text-white text-4xl font-semibold transition-all duration-500 ${
                  isRight
                    ? "translate-x-36 opacity-0"
                    : "translate-x-0 opacity-100"
                }`}
              >
                Tenant
              </span>

              <span
                className={`absolute right-55 text-white text-4xl font-semibold transition-all duration-500 ${
                  isRight
                    ? "translate-x-26 opacity-100"
                    : "translate-x-0 opacity-0"
                }`}
              >
                Landlord
              </span>

              {/* Moving Ball */}
              <div
                className={`absolute w-20 h-20 bg-gradient-to-r from-orange-50 to-orange-400 rounded-full shadow-md transition-transform duration-500 ${
    isRight ? "translate-x-58" : "translate-x-0"
                }`}
              ></div>
            </div>
                {isRight ? ( <div>
            <h2 className="text-4xl ml-10 text-black font-semibold text-left mb-6 mt-10 ">
              Rent your first property and start earning with RentHub ✨
            </h2>
             </div> ) : (<div>  <h2 className="text-4xl ml-10 text-black font-semibold text-left mb-6 mt-10 ">
              <h2 className="text-4x text-black font-semibold text-left mb-6 mt-10  ">
              Wherever life takes you, RentHub helps you find a home ✨
            </h2>
            </h2> </div>)}

            <div className="w-3/4 w-full bg-white p-10 ">
              {isRight ? (
                // Landlord form

                <form
                  onSubmit={handleNextLandlord}
                  className="space-y-4 text-black"
                >
                  <div className="space-y-4">
                    <div className="flex">
                      <h4 className="text-xl">Name</h4>
                      <h4 className="text-xl ml-79">Email</h4>
                    </div>

                    <div className="flex">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="ml-5 w-full px-4 py-3 border border-gray-300 rounded-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="flex">
                      <h4 className="text-xl">Phone Number</h4>
                      <h4 className="text-xl ml-59">Password</h4>
                    </div>

                    <div className="flex relative ">
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="ml-5 w-full px-4 py-3 border border-gray-300 rounded-lg"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <img
                        src={showPassword ? "/eye-closed.png" : "/eye-open.png"}
                        alt="Toggle Password"
                        className="absolute right-3 top-3 w-6 h-6 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    </div>

                    <div className="flex">
                      <h4 className="text-xl">Confirm Password</h4>
                      <h4 className="text-xl ml-54">Government ID</h4>
                    </div>

                    <div className="flex relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                      <img
                        src={
                          showConfirmPassword
                            ? "/eye-closed.png"
                            : "/eye-open.png"
                        }
                        alt="Toggle Confirm Password"
                        className="absolute left-70 top-3 w-6 h-6 cursor-pointer"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      />
                      <input
                        type="text"
                        placeholder="Government ID (Aadhar, PAN, etc.)"
                        className="ml-5 w-full px-4 py-3 border border-gray-300 rounded-lg"
                        value={govtId}
                        onChange={(e) => setGovtId(e.target.value)}
                        required
                      />
                    </div>

                    <div className="flex">
                      <h4 className="text-xl">Address</h4>
                    </div>

                    <div className="flex">
                      <textarea
                        placeholder="Address"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg min-h-[100px]"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 w-full text-white p-3 rounded-lg hover:bg-blue-700"
                  >
                    Next
                  </button>
                </form>
              ) : (
                // Tenant form
                <form
                  onSubmit={handleNextTenant}
                  className="space-y-4 text-black"
                >
                  <div className="space-y-4">
                    <h4 className="text-xl"> Name </h4>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      value={tenantname}
                      onChange={(e) => setTenantName(e.target.value)}
                      required
                    />

                    <h4 className="text-xl"> Email </h4>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      value={tenantemail}
                      onChange={(e) => setTenantEmail(e.target.value)}
                      required
                    />

                    <h4 className="text-xl"> Phone Number </h4>
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      value={tenantphone}
                      onChange={(e) => setTenantPhone(e.target.value)}
                      required
                    />

                    <h4 className="text-xl"> Password </h4>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className=" w-full px-4 py-3 border border-gray-300 rounded-lg"
                        value={tenantpassword}
                        onChange={(e) => setTenantPassword(e.target.value)}
                        required
                      />
                      <img
                        src={showPassword ? "/eye-closed.png" : "/eye-open.png"}
                        alt="Toggle Password"
                        className="absolute right-3 top-3 w-6 h-6 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    </div>

                    <h4 className="text-xl"> Confirm Password </h4>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                        value={tenantconfirmPassword}
                        onChange={(e) =>
                          setTenantConfirmPassword(e.target.value)
                        }
                        required
                      />
                      <img
                        src={
                          showConfirmPassword
                            ? "/eye-closed.png"
                            : "/eye-open.png"
                        }
                        alt="Toggle Confirm Password"
                        className="absolute right-3 top-3 w-6 h-6 cursor-pointer"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      />
                    </div>
                    <button
                    type="submit"
                    className="hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 w-full text-white p-3 rounded-lg hover:bg-blue-700"
                  >
                    Sign up
                  </button>

                  </div>
                </form>
              )}
            </div>

            <div className="flex items-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="mx-4 text-gray-600">OR</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <button className="mt-5 w-full flex items-center justify-center gap-2 border !border-gray-300 p-3 rounded-lg !bg-white text-black hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105">
              <img src="/google.png" alt="Google Icon" className="w-6 h-6" />
              Sign Up with Google
            </button>
            <p className="text-center mt-6 text-lg text-black">
              Already have an account?{" "}
              <a href="/Login" className="text-blue-600 hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>

        {/* Right Side */}

        <div className="w-1/2 p-10 bg-white relative">
  <img
    src="/home2.jpg"
    alt="home interior pic"
    className="absolute top-0 botton-0 left-0 w-250 h-280 object-cover rounded-lg"
  />
</div>

        </div>
      </div>
    
  );
}

export default LandlordSignup;
