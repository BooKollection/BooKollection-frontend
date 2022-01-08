import React from "react";
import Image from "next/image";
import GoogleLogin, { useGoogleLogin } from "react-google-login";
import { LOGIN_MUTATION } from "../../../api/graphql/querys/login";
import { clientGraphql } from "../../../config/client-graphql";
import { ButtonStyled } from "./styles";
import LoginIcon from "@mui/icons-material/Login";
import IconButton from "@mui/material/IconButton";

export const GoogleButton = ({ clientId }: { clientId?: string }) => {
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

  const onFailure = (res: any) => {
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
    <IconButton
      size="large"
      edge="end"
      aria-label="account of current user"
      aria-haspopup="true"
      onClick={signIn}
      color="inherit"
    >
      <LoginIcon onClick={signIn} />
    </IconButton>
  );
};

export async function getStaticProps() {
  const clientId = process.env.OAUTH_GOOGLE_ID;

  return {
    props: {
      clientId: clientId,
    },
  };
  // ...
}
