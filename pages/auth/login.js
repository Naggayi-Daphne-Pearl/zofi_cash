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
  // fetch data from API and return as props
  const res = await fetch(
    "https://staging-auth-api.zoficash.com/api/v1/account-login"
  );
  const data = await res.json();

  return {
    props: {
      apiEndPoint: process.env.LOGIN_URL,
      maxLoginAttempts: parseInt(process.env.MAX_LOGIN_ATTEMPTS),
      loginLockoutTime: parseInt(process.env.LOGIN_LOCKOUT_TIME),
    },
  };
}
