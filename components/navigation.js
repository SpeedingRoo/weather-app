import styles from '../styles/component.module.css'

const Navigation = ()=>{
    return (
      <nav className={styles.navigation}>
        <ul>
          <li>About Me</li>
          <li>What I Do</li>
          <li>Sample Works</li>
          <li>Contact Me</li>
        </ul>
      </nav>
    )
}

export default Navigation;