import Header from "../Header/header";
import styles from "./layout.module.css";
import FilterContextProvider from "src/contexts/filterContext";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <FilterContextProvider>{children}</FilterContextProvider>
    </div>
  );
};

export default Layout;
