//import '../styles/Header.css'----> style folder main header.css tha phir--- wahi se header css import kiya tha
import styles from '../header/Header.module.css'
const Header = () => {
  return (
    <div>
      <h1 className={styles.h1}>Header</h1>
    </div>
  )
}

export default Header
