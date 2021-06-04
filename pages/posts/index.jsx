import Link from 'next/link';
import Head from 'next/head';

const PostPageHome = ()=>{
    return (
        <div>
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
        </div>
    );
}

export default PostPageHome;