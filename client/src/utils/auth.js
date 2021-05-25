
import { AuthConfig } from "react-use-auth";
import { NetlifyIdentity } from "react-use-auth/netlify-identity";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
    const router = useRouter();
    return (
        <>
            <AuthConfig
                authProvider={NetlifyIdentity}
                navigate={(url) => router.push(url)}
            />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp