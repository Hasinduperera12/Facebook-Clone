/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import SignInWithFacebook from "../../components/SignInWithFacebook";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [signInWithGoogle, userCred, loading, error] =
    useSignInWithGoogle(auth);

  useEffect(() => {
    if (user) {
      router.push("/");
    } else return;
  }, [user]);

  return (
    <div>
      <Head>
        <title>Facebook Clone Login</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://clipart.info/images/ccovers/1509135366facebook-symbol-png-logo.png"
        />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-blue-100 py-12 px-4 sm:px-6 lg:px-8">
        <img
          style={{
            border: "20px",
            marginRight: "80px",
            width: "700px",
            height: "500px",
          }}
          className="object-cover rounded-md"
          src="https://d30itml3t0pwpf.cloudfront.net/api/v3/medias/12547998/image/opt/1164x823%3E/1507153479-a49b84b3"
        />
        <hr />

        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-32 w-auto"
              src="https://clipart.info/images/ccovers/1509135366facebook-symbol-png-logo.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-4xl font-bold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <div className="mt-8 space-y-6">
            <div>
              <SignInWithFacebook />

              <div className="flex justify-center text-xl font-semibold mt-2 mb-2 dark:text-black text-black">
                <h1>OR</h1>
              </div>

              <div>
                <button
                  onClick={() => signInWithGoogle()}
                  className="group relative w-full flex justify-center py-2 px-4 border border-gray-500 text-xl font-medium rounded-md text-black bg-gray-200 hover:hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-50"
                >
                  <LockPersonIcon className="mr-auto mt-auto mb-auto" />
                  <img
                    className="w-6 h-6 mt-auto mb-auto mr-5"
                    src="https://www.northeastkia.com/static/dealer-18644/reviews-logos/google-minimal-logo.png"
                    alt=""
                  />
                  <p className="mr-auto">Sign with Google</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
