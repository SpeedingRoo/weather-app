import Link from 'next/link';
import Head from 'next/head';


export const getStaticProps = async ()=>{
    const CITY = 'Melbourne';
    let apiKey = 'f620a018d0f4d826614d158f97a3f828';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${apiKey}`;
    
    const response = await fetch(url);
    const data = await response.json();
    if(response===undefined){
        console.log(data);
        return { props: { resultData: data}}
    }else{
        console.log(data);
        return { props: { resultData: data } }
    }
};

export default function FirstPost(props){
    return (
    <section>
        <Head>
            <title>Weather Page</title>
        </Head>
        <h1>Check Melbourne Weather</h1>
        <article>
            data should be displayed here: {props.resultData.weather[0].main}
        </article>
        <Link href='../posts'>
            <a>
                <button>back to Posts</button>
            </a>
        </Link>
        <Link href='/'>
            <button>
                <a >back to HOME</a>
            </button>
        </Link>
    </section>
    )
}



