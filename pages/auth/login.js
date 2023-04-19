import LoginPage from "../../components/v2/LoginPage";
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

export async function getServerSideProps(context) {
  return {
    props: {
      apiEndPoint: process.env.LOGIN_URL,
      maxLoginAttempts: parseInt(process.env.MAX_LOGIN_ATTEMPTS),
      loginLockoutTime: parseInt(process.env.LOGIN_LOCKOUT_TIME),
    },
  };
}
