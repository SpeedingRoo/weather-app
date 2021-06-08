import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';

const PostPageHome = ()=>{
    return (
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
    );
}

export default PostPageHome;