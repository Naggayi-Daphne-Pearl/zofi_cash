import "@/styles/globals.css";
import { AuthProvider } from "@/contexts/v1/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
