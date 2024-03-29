import { getServerAuthSession } from "~/server/auth";
import SignInButton from "../components/SignInButton";
import { redirect } from "next/navigation";

const HomePage = async () => {
  const session = await getServerAuthSession();
  if (session) {
    redirect("/home");
  } else {
    return (
      <div className="flex h-full w-full items-center">
        <div className="mx-auto flex w-auto max-w-6xl grow justify-between">
          <div>
            <h1 className="max-w-lg text-4xl">
              Welcome to{" "}
              <span className="font-bold text-yellow-500">MoodJournal</span>,
              where your words meet wisdom.
            </h1>
          </div>
          <div className="flex flex-col space-y-3">
            <SignInButton />
            <button className="rounded-xl bg-gray-800 px-8 py-3">Github</button>
            <button className="rounded-xl bg-blue-800 px-8 py-3">Email</button>
          </div>
        </div>
      </div>
    );
  }
};

export default HomePage;
