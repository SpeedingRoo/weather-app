import componentStyles from '../styles/component.module.css';
import utilStyles from '../styles/utils.module.css';

const Navigation = ()=>{
    return (
      <nav className={componentStyles.navigation}>
        <ul className={utilStyles.navList}>
          <li>About Me </li>
          <li>What I Do </li>
          <li>Sample Works </li>
          <li>Contact Me</li>
        </ul>
      </nav>
    )
}

export default Navigation;