import Layout from '../components/layout';
import layoutStyle from '../styles/layout.module.css';

const About = ()=>{
    return (
        <Layout className={layoutStyle.container} home={true}>
            "About this page, I have nothing to say"
            <br/>
            <a href='./'>back to HOME</a>
        </Layout>
    )
}

export default About;