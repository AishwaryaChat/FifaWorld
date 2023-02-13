import Header from "../Header/header";
import styles from "./layout.module.css";
import FilterContextProvider from "src/contexts/filterContext";
import Footer from "../Footer/footer";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className={styles.layout}>
        <Header />
        <FilterContextProvider>{children}</FilterContextProvider>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
