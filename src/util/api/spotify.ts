import axios from "axios";
import { env } from "~/env.mjs";

export const fetchSpotify = async (code: string) => {
  console.log(code);

  console.log("http://localhost:3000/callback");
  console.log(env.NEXT_PUBLIC_SPOTIFY_REDIRECT);

  const result = await axios({
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic OTViOGI2OTAyMmU5NDQyNjgyMTJlNWQwZTM3M2JkODk6YjI1NGM4YjQwZWIxNDYxNDkwZTAyM2JmYjU5YzUxMGU=`,
    },
    data: {
      grant_type: "authorization_code",
      code: code,
      redirect_uri: env.NEXT_PUBLIC_SPOTIFY_REDIRECT,
    },
  });

  return result.data as {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
  };
};
