import {
  SignIn,
  SignInButton,
  SignOutButton,
  SignedOut,
  useUser,
} from "@clerk/nextjs";
import Head from "next/head";

import { api } from "~/utils/api";

export default function Home() {
  const user = useUser();

  const { data } = api.posts.getAll.useQuery();

  return (
    <>
      <Head>
        <title>DSG TimeCard</title>
        <meta name="description" content="DSG TimeCard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          {!user.isSignedIn && <SignIn />}
          {!!user.isSignedIn && <SignOutButton />}
        </div>

        <div>
          {data?.map((post) => <div key={post.id}>{post.content}</div>)}
        </div>
      </main>
    </>
  );
}
