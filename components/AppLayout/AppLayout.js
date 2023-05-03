import { useUser } from "@auth0/nextjs-auth0/client";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export const AppLayout = ({ children }) => {
  const { user } = useUser();
  return (
    <div className="grid grid-cols-[300px_1fr] h-screen max-h-screen">
      <div className="flex flex-col text-white overflow-hidden">
        <div className="bg-indigo-500 px-2">
          <div>Logo</div>
          <Link
            href={"/posts/new"}
            className="bg-green-500 w-full px-4 py-2 rounded-md text-center uppercase cursor-pointer font-bold text-white hover:bg-green-600 transition-colors block"
          >
            {" "}
            New post
          </Link>
          <Link href={"/token-topup"} className="block mt-2 text-center ">
            <FontAwesomeIcon icon={faCoins} className="text-yellow-500" />
            <span className="pl-1">0 tokens available</span>
          </Link>
        </div>
        <div className=" flex-1 overflow-auto bg-gradient-to-b from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
          list of posts
        </div>
        <div className="bg-emerald-500 flex items-center gap-2 border-t border-t-black/50 h-20 px-2">
          {user ? (
            <>
              <div className="min-w-[50]">
                <Image
                  src={user.picture}
                  alt="avatar"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </div>

              <div className="flex-1">
                <div className="font-bold">{user.name}</div>
                <Link className="text-sm " href="/api/auth/logout">
                  Logout
                </Link>
              </div>
            </>
          ) : (
            <Link href="/api/auth/login">Login</Link>
          )}
        </div>
      </div>
      <div className="bg-green-200">{children}</div>
    </div>
  );
};
