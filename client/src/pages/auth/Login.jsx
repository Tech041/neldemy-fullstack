import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import apiRequest from "../../utils/apiRequest";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useContext, } from "react";
import { AppContext } from "../../context/AppContext";

const loginSchema = z.object({
  email: z
    .string()
    .email("Valid email is required")
    .min(1, { message: "Name is required" }),
  password: z.string().min(1, { message: "Password  is required" }),
});

const Login = () => {
  const { setIsAuth,  navigate } = useContext(AppContext);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  const handleLogin = async (formData) => {
    reset();
    console.log("Login", formData);
    try {
      const res = await apiRequest.post(
        "/auth/login",

        formData
      );
      setIsAuth(localStorage.setItem("user", res.data));
      toast.success(res.data.message);
      navigate("/");
      reset();
    } catch (error) {
      console.log("Error login in", error);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
          <div>
            <label
              className="block text-gray-700 font-semibold mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
            />
          </div>
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <div>
            <label
              className="block text-gray-700 font-semibold mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password")}
              name="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
            />
          </div>
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          <div className="">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-400 transition duration-300"
            >
              Login
            </button>
            <div className="">
              <p className="flex items-center justify-center gap-3">
                <span className=""> Don&apos;t have account</span>

                <Link to={"/register"} className="text-blue-600 cursor-pointer">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
