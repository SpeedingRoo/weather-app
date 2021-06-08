import Link from 'next/link';
import Head from 'next/head';
import style from '../../styles/component.module.css';
import useState from 'react';

export const getStaticProps = async ()=>{
    const CITY = 'Truganina';
    let apiKey = 'f620a018d0f4d826614d158f97a3f828';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return { props: { resultData: data} }
};

export default function FirstPost(props){
    let apiKey = 'f620a018d0f4d826614d158f97a3f828';
    // const targetURL = `https://api.openweathermap.org/data/2.5/weather?q=Beijing&appid=${apiKey}`;
    const iconCode = props.resultData.weather[0].icon;
    const ICON_URL = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    const temp = props.resultData.main.feels_like;
    const C_TEMP = Math.floor((temp-273.15)*10)/10;
    const CITY = props.resultData.name;

    return (
    <section>
        <Head>
            <title>Weather App</title>
        </Head>
        <h1>Check {CITY} Weather</h1>
        <article>
            <ul className={style.lists}>
                <li className={style.li}>这会外面天气有点 {props.resultData.weather[0].main} <img src={ICON_URL} alt='weather icon'/></li>
                <li>现在的温度是 {C_TEMP}度</li>
            </ul>
        </article>
        <Link href='/projects'>
            <button>
                <a>back to Posts</a>
            </button>
        </Link>
        <Link href='/'>
            <button>
                <a >back to HOME</a>
            </button>
        </Link>
        
    </section>
    )
}



