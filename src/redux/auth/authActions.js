<<<<<<< HEAD
import { login, registerUser } from "@/api/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "authlogin",
  async (data, { rejectWithValue }) => {
    try {
      const response = await login(data);
      localStorage.setItem("authToken", response.data.token);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const register = createAsyncThunk(
  "authregister",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await registerUser(formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || "Registration failed");
    }
  }
);
=======
import { login, registerUser } from "@/api/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "authlogin",
  async (data, { rejectWithValue }) => {
    try {
      const response = await login(data);
      localStorage.setItem("authToken", response.data.token);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const register = createAsyncThunk(
  "authregister",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await registerUser(formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || "Registration failed");
    }
  }
);
>>>>>>> dff7259d9c648c2ed6ef28607dacf6d55f73aca2
