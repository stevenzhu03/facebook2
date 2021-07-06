import { getSession } from "next-auth/client";
import Head from "next/head";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

export default function Home({ session }) {
    // TO_REPLACE
    // if (!session) return <Login />;

    return (
        <div>
            <Head>
                <title>Facebook</title>
                <meta name="description" content="Facebook clone" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header */}
            <Header />

            <main className="flex">
                <Sidebar />
                <Feed />
                {/* Widgets */}
            </main>
        </div>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);

    return {
        props: { session },
    };
}
