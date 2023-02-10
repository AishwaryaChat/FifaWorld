import Header from "../Header/header"

const Layout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return(
        <div>
            <Header/>
            {children}
        </div>
    )
}

export default Layout