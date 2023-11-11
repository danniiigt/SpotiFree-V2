import "@fontsource-variable/figtree";
import "@/styles/globals.css";
import SupabaseProvider from "../../providers/SupabaseProvider";
import UserProvider from "../../providers/UserProvider";
import ModalProvider from "../../providers/ModalProvider";
import ToasterProvider from "../../providers/ToasterProvider";
import { SWRConfig } from "swr/_internal";
import { MainLayout } from "../../layouts/MainLayout";
import "animate.css";
import { KeyListener } from "../../components/KeyListener";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <KeyListener />

            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </UserProvider>
        </SupabaseProvider>
        <ToasterProvider />
      </SWRConfig>
    </>
  );
}
