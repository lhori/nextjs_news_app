import Navigationbar from "./Navigationbar";
import MainFooter from "./MainFooter";
import classes from "./Layout.module.css";
import MainHeader from "./MainHeader";

function Layout({ children }) {
  return (
    <div className={classes.mainBody}>
      <MainHeader/>
      <Navigationbar/>
      <main className={classes.main}>{children}</main>
      <MainFooter/>
    </div>
  );
}

export default Layout;
