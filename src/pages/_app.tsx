import React from "react"
import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import { Session } from "next-auth";

interface MyAppProps extends AppProps {
    pageProps: {
        session: Session;
    }
}
export default function MyApp({
    Component,
    pageProps: { session, ...pageProps },
}: MyAppProps) {
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    );
}
