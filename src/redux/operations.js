import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6570b71409586eff6641d7fb.mockapi.io";

// axios.defaults.baseURL = "https://65f9eea93909a9a65b19aacf.mockapi.io";
// https://6570b71409586eff6641d7fb.mockapi.io/api/:endpoint;