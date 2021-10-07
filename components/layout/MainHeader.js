import * as Icons from "react-icons/fa";
import classes from "./MainHeader.module.css";
import Link from "next/link";

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.siteLogo}>
        <Link href="/">
          <a>
            <div>
              <Icons.FaNewspaper className={classes.logo} />
              <span className={classes.logoFont}>15 News Website</span>
            </div>
          </a>
        </Link>
      </div>
    </header>
  );
}

export default MainHeader;
