import { ENV } from "@/constants/env";
import axios from "axios";

export const api = axios.create({
  baseURL: ENV.TIMBU_BASE_URL,
});
