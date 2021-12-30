import React from "react";
import Image from "next/image";
import { useGoogleLogin } from "react-google-login";
// refresh token
import { refreshTokenSetup } from "../../utils/refreshToken";
import { login } from "../../api";
import { LOGIN_MUTATION } from "../../api/graphql/querys/login";
import { clientGraphql } from "../../config/client-graphql";

function LoginHooks({ clientId }) {
  const onSuccess = async (res: any) => {
    const { googleId, tokenId, profileObj } = res;
    console.log("Login Success: currentUser:", profileObj, res);

    alert(
      `Logged in successfully welcome ${profileObj.name} 😍. \n See console for full profile object.`
    );
    clientGraphql
      .mutate({
        mutation: LOGIN_MUTATION,
        variables: {
          reqEmail: profileObj.email,
          reqGoogleId: googleId,
          reqTokenId: tokenId,
        },
      })
      .then((res) => console.log(res));
    // refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    // uxMode: "popup",
    isSignedIn: false,
    accessType: "offline",
    // redirectUri: "http://localhost:3001/auth/google/redirect",
  });

  return (
    <button onClick={signIn} className="button">
      <Image src="/google.svg" alt="google login" width={72} height={16} />
      <span className="buttonText">Sign in with Google</span>
    </button>
  );
}

export async function getStaticProps() {
  const clientId = process.env.OAUTH_GOOGLE_ID;

  return {
    props: {
      clientId: clientId,
    },
  };
  // ...
}
export default LoginHooks;
