import Link from 'next/link';
import Head from 'next/head';
import Navigation from '../../components/navigation';
import Layout from '../../components/layout';
import Footer from '../../components/footer';

const PostPageHome = ()=>{
    return (
        <>
            <Navigation/>
            <Layout>
                <Head>
                    <title>All Posts</title>
                </Head>
                <Link href="/">
                    <a>
                        <div>GO BACK to Home Page</div>
                    </a>
                </Link> 
                <div>
                  Here's the home of all my posts, you can go to anyone.
                </div>
            </Layout>
            <Footer/>
        </>
    );
}

export default PostPageHome;