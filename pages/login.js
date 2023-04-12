import LoginPage from "@/components/LoginPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  return (
    <div>
      <ToastContainer />
      <LoginPage />
    </div>
  );
}

export default Login;
