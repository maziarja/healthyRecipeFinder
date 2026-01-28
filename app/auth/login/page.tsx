import { getSession } from "@/app/_actions/auth/getSession";
import LoginForm from "@/components/auth/LoginForm";
import Navbar from "@/components/shared/Navbar";
import { redirect } from "next/navigation";

async function Page() {
  const { isAuthenticated } = await getSession();
  if (isAuthenticated) redirect("/");

  return (
    <>
      <Navbar />
      <LoginForm />
    </>
  );
}

export default Page;
