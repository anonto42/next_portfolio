"use client";
import React, { useState } from "react";

export default function AuthCard() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const validateInputs = (): boolean => {
    const newErrors: string[] = [];

    if (!email.trim()) {
      newErrors.push("Email is required.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.push("Invalid email format.");
    }

    if (!password.trim()) {
      newErrors.push("Password is required.");
    } else if (password.length < 6) {
      newErrors.push("Password must be at least 6 characters.");
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleLogin = async () => {
    setLoading(true);

    if (!validateInputs()) {
      setLoading(false);
      return;
    }

    try {
      // Fake async login simulation
      await new Promise((res) => setTimeout(res, 1000));
      console.log("Logged in with:", { email, password });

      // reset form
      setEmail("");
      setPassword("");
      setErrors([]);
    } catch (err) {
      console.error(err);
      setErrors(["Something went wrong. Please try again."]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:w-[400px] md:h-[550px] md:rounded-2xl md:shadow-[0_0px_10px_rgba(0,0,0,0.2)] w-full h-full bg-[#d7d7ff] text-[#001a2b] flex flex-col items-center justify-center gap-4 p-6">
      <h1 className="text-2xl md:text-4xl font-bold mb-2 text-shadow-lg">
        Sign In
      </h1>

      {/* Email Input */}
      <div className="w-[80%] flex flex-col">
        <label htmlFor="email" className="text-sm font-medium mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          placeholder="Enter your email"
          className="h-10 rounded-md shadow-[0_0px_10px_rgba(0,0,0,0.2)] px-2 focus:outline-none focus:ring-2 focus:ring-[#1172B2] bg-white"
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
      </div>

      {/* Password Input */}
      <div className="w-[80%] flex flex-col">
        <label htmlFor="password" className="text-sm font-medium mb-1">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          placeholder="Enter your password"
          className="h-10 rounded-md shadow-[0_0px_10px_rgba(0,0,0,0.2)] px-2 focus:outline-none focus:ring-2 focus:ring-[#1172B2] bg-white"
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />
      </div>

      {/* Error Messages */}
      {errors.length > 0 && (
        <div className="w-[80%] text-left">
          {errors.map((err, index) => (
            <small key={index} className="text-red-500 text-xs block">
              {err}
            </small>
          ))}
        </div>
      )}

      {/* Submit Button */}
      <button
        className={`w-[80%] h-10 rounded-md shadow-[0_0px_10px_rgba(0,0,0,0.2)] px-2 focus:outline-none focus:ring-2 focus:ring-[#1172B2] bg-[#1172B2] text-white mt-3 hover:bg-[#0f78bd] active:scale-105 duration-300 cursor-pointer disabled:opacity-50`}
        onClick={handleLogin}
        disabled={loading}
      >
        {loading ? "Loading..." : "Sign In"}
      </button>
    </div>
  );
}
