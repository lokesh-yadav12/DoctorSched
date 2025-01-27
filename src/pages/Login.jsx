import React, { useState } from "react";

export const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log({ state, name, email, password });
    // Add logic to handle login or signup
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="min-h-[80vh] flex items-center justify-center"
    >
      <div className="flex flex-col gap-4 m-auto items-start p-8 min-w-[340px] sm:min-w-[400px] border rounded-xl text-zinc-600 text-sm shadow-lg">
        {/* Form Heading */}
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p className="text-gray-500">
          Please {state === "Sign Up" ? "Sign Up" : "Login"} to book an
          appointment.
        </p>

        {/* Name Input (for Sign Up only) */}
        {state === "Sign Up" && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Enter your full name"
              required
            />
          </div>
        )}

        {/* Email Input */}
        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password Input */}
        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white w-full py-2 rounded-md text-base hover:bg-blue-600 transition-all"
        >
          {state === "Sign Up" ? "Sign Up" : "Login"}
        </button>

        {/* Toggle Between Login and Sign Up */}
        <p className="text-center text-sm text-gray-500 mt-4">
          {state === "Sign Up" ? (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setState("Login")}
                className="text-blue-500 cursor-pointer hover:underline"
              >
                Login here
              </span>
            </>
          ) : (
            <>
              Create a new account?{" "}
              <span
                onClick={() => setState("Sign Up")}
                className="text-blue-500 cursor-pointer hover:underline"
              >
                Click here
              </span>
            </>
          )}
        </p>
      </div>
    </form>
  );
};
