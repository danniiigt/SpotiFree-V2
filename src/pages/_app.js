import "@fontsource-variable/figtree";
import "@/styles/globals.css";
import SupabaseProvider from "../../providers/SupabaseProvider";
import UserProvider from "../../providers/UserProvider";
import ModalProvider from "../../providers/ModalProvider";
import ToasterProvider from "../../providers/ToasterProvider";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SupabaseProvider>
        <UserProvider>
          <ModalProvider />
          <Component {...pageProps} />
        </UserProvider>
      </SupabaseProvider>
      <ToasterProvider />
    </>
  );
}
