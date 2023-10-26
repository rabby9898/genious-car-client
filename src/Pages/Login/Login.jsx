import loginImg from "../../../assets/images/login/login.svg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-16">
          <div className="text-center lg:text-left w-1/2">
            <img src={loginImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-[500px] border border-gray-300">
            <div className="text-3xl font-bold my-10">
              <h1 className="text-center">Sign Up</h1>
            </div>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input border border-gray-300 hover:outline hover:outline-[#FF3811]"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input hover:outline hover:outline-[#FF3811] my-6 border border-gray-300"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input hover:outline hover:outline-[#FF3811] my-6 border border-gray-300"
                  name="password"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#FF3811] border border-[#FF3811] text-white hover:text-[#FF3811] hover:bg-white hover:border-[#FF3811]">
                  Sign In
                </button>
              </div>
            </form>
            <div className="flex justify-center gap-5 text-3xl mt-5 mb-8">
              <FcGoogle />
              <FaFacebook />
              <FaLinkedin />
            </div>
            <div className="flex justify-center gap-1 text-base mb-8">
              <p>Already have an account?</p>
              <Link to="/login" className="text-[#FF3811]">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
