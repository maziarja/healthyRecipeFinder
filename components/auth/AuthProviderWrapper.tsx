import { getSession } from "@/app/_actions/auth/getSession";
import { AuthProvider } from "./AuthContext";

type AuthProviderWrapperProps = {
  children: React.ReactNode;
};

export async function AuthProviderWrapper({
  children,
}: AuthProviderWrapperProps) {
  const session = await getSession();

  return (
    <AuthProvider initialSession={session}>{children}</AuthProvider>
  );
}
