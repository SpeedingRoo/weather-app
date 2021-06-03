import Link from 'next/link';
import Head from 'next/head';


export const getStaticProps = async ()=>{
    const CITY = 'Melbourne';
    let apiKey = 'f620a018d0f4d826614d158f97a3f828';
    let url = `api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${apiKey}`;
    
    const response = await fetch(url).
                              then((res)=> res.json())
                                .then((data)=>console.log(data))
                                  .catch((err)=>console.error(err));

    if(response===undefined){
        console.log(response+'is undefined');
        return { props: { res: 'undefined'}}
    }else{
        console.log(CITY);
        return { props: { response } }
    }
};

export default function FirstPost(){
    return (
    <section>
        <Head>
            <title>Weather Page</title>
        </Head>
        <h1>Check Melbourne Weather</h1>
        <article>
            {}
        </article>
        <Link href='./'>
            <a >
                <button>back to Posts</button>
            </a>
        </Link>
        <Link href='../'>
            <button>
                <a >back to HOME</a>
            </button>
        </Link>
    </section>
    )
}



