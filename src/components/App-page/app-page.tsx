import { AppProps } from 'next/app';
import Layout from '../Layout/layout';
interface CustomPageProps { // <--- your custom page props
}

export default function App({ Component, pageProps }: AppProps<CustomPageProps>) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}