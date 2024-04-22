import { login } from "@/actions/login";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user !== null) {
    redirect("/write");
  }

  return (
    <main className="h-full flex items-center justify-center">
      <form className="flex flex-col gap-1">
        <input
          className="border"
          id="email"
          name="email"
          type="email"
          required
        />
        <input
          className="border"
          id="password"
          name="password"
          type="password"
          required
        />
        <button className="border" formAction={login}>
          Log in
        </button>
      </form>
    </main>
  );
}
