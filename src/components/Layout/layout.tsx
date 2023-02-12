import Header from "../Header/header"
import styles from "./layout.module.css"
const Layout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return(
        <div className={styles.layout}>
            <Header/>
            {children}
        </div>
    )
}

export default Layout