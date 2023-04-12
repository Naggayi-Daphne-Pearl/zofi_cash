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

export async function getServerSideProps(context) {
  // fetch data from API and return as props
  const res = await fetch("https://staging-auth-api.zoficash.com/api/v1/account-login");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Login;
