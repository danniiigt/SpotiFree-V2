import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { Modal } from "./Modal";
import { useRouter } from "next/router";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "../hooks/useAuthModal";
import { useEffect } from "react";

export const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
  const { session } = useSessionContext();
  const router = useRouter();
  const { isOpen, onClose } = useAuthModal();

  useEffect(() => {
    if (session) {
      onClose();
    }
  }, [session, router, isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Modal
      title="¡Bienvenido!"
      descripcion="Inicia sesión para disfrutar de la mejor música"
      isOpen={isOpen}
      onChange={onClose}
    >
      <Auth
        supabaseClient={supabaseClient}
        providers={["google", "github"]}
        localization={{
          variables: {
            sign_up: {
              email_label: "Correo electrónico",
              password_label: "Contraseña",
              email_input_placeholder: "Tu correo electrónico",
              password_input_placeholder: "Tu contraseña",
              button_label: "Registrarse",
              loading_button_label: "Registrandote...",
              social_provider_text: "Registrate con {{provider}}",
              link_text: "¿No tienes cuenta? Registrate",
              confirmation_text:
                "Comprueba tu correo electrónico para confirmar tu cuenta",
            },
            sign_in: {
              email_label: "Correo electrónico",
              password_label: "Contraseña",
              email_input_placeholder: "Tu correo electrónico",
              password_input_placeholder: "Contraseña segura",
              button_label: "Iniciar Sesión",
              loading_button_label: "Iniciando sesión...",
              social_provider_text: "Iniciar sesión con {{provider}}",
              link_text: "¿Ya tienes cuenta? Inicia sesión",
            },
            magic_link: {
              email_input_label: "Correo electrónico",
              email_input_placeholder: "Tu correo electrónico",
              button_label: "Enviar enlace mágico",
              loading_button_label: "Enviando enlace...",
              link_text: "Envia un enlace mágico a tu correo electrónico",
              confirmation_text:
                "Comprueba tu correo electrónico para iniciar sesión",
            },
            forgotten_password: {
              email_label: "Correo electrónico",
              password_label: "Contraseña",
              email_input_placeholder: "Tu correo electrónico",
              button_label: "Enviar instrucciones para recuperar contraseña",
              loading_button_label: "Enviando instrucciones...",
              link_text: "¿Olvidaste la contraseña?",
              confirmation_text: "Comprueba tu correo electrónico",
            },
            update_password: {
              password_label: "Nueva contraseña",
              password_input_placeholder: "Tu nueva contraseña",
              button_label: "Actualizar contraseña",
              loading_button_label: "Actualizando contraseña...",
              confirmation_text: "Tu contraseña ha sido actualizada",
            },
            verify_otp: {
              email_input_label: "Correo electrónico",
              email_input_placeholder: "Tu correo electrónico",
              phone_input_label: "Número de teléfono",
              phone_input_placeholder: "Tu número de teléfono",
              token_input_label: "Token",
              token_input_placeholder: "Tu token",
              button_label: "Verificar Token",
              loading_button_label: "Iniciando sesión...",
            },
          },
        }}
        theme="dark"
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#059669",
                brandAccent: "#10B981",
                neutral: {
                  100: "#F9FAFB",
                  200: "#F3F4F6",
                  300: "#E5E7EB",
                  400: "#D1D5DB",
                  500: "#9CA3AF",
                  600: "#6B7280",
                  700: "#4B5563",
                },
              },
            },
          },
        }}
      />
    </Modal>
  );
};
