import Link from "next/link";
import LoginPage from "../../components/v2/LoginPage";
import cookieParser from "cookie-parser";
function Login({ isLoggedIn }) {
  if (isLoggedIn) {
    return <Link href="/dashboard" />;
  }
  return (
    <div>
      <LoginPage />
    </div>
  );
}

export default Login;

export async function getServerSideProps(context) {
  const isLoggedIn = checkIfUserIsLoggedIn(context.req);

  return {
    props: {
      isLoggedIn,
    },
  };
}

function checkIfUserIsLoggedIn(req) {
  // Use cookie-parser middleware to parse cookies
  cookieParser()(req, null, () => {});

  // Check if user is logged in using cookies
  if (req.cookies.isLoggedIn === "true") {
    return true;
  } else {
    return false;
  }
}
