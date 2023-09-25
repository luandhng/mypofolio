import {
  SignIn,
  SignInButton,
  SignOutButton,
  SignedOut,
  useUser,
} from "@clerk/nextjs";
import Head from "next/head";
import { useState } from "react";

import { RouterOutputs, api } from "~/utils/api";

const CreatePostWizard = () => {
  const { user } = useUser();

  const [input, setInput] = useState("");

  const { mutate } = api.posts.create.useMutation();

  console.log(user);

  if (!user) return null;

  return (
    <div className="space-x-7">
      <button className="border border-black p-4">Cuong</button>
      <button className="border border-black p-4">Dung</button>
      <button className="border border-black p-4">Xuan</button>
      <button className="border border-black p-4">Luan</button>
      <button className="border border-black p-4">Migue</button>
      <button className="border border-black p-4">Binh</button>
    </div>
  );
};

type PostWithUser = RouterOutputs["posts"]["getAll"][number];
const PostView = (props: PostWithUser) => {
  const { post, author } = props;
  return (
    <div key={post.id}>
      <p>{post.createAt.toString()}</p>
      <p>{post.content}</p>
    </div>
  );
};

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
      <main className="space-y-20">
        <div className="">
          {!user.isSignedIn && <SignIn />}
          {user.isSignedIn && <SignOutButton />}
          {user.isSignedIn && <CreatePostWizard />}
        </div>

        <div>
          <div>
            {data?.map((fullPost) => (
              <PostView key={fullPost.post.id} {...fullPost} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
