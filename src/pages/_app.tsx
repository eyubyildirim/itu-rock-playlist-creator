import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Component {...pageProps} />;
    </div>
  );
};

export default MyApp;
