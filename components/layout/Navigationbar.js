import Link from "next/link";
import classes from "./Navigationbar.module.css";
import * as Icons from "react-icons/fa";

function Navigationbar() {
  return (
    <nav className={classes.pageNav}>
      <ul>
        <li>
          <Link href="/top/1">
            <a>
              <div className={classes.NavLogo}>
                <Icons.FaGlobe />
                <span className={classes.text}>Top</span>
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link
            href={{ pathname: "/newsDetail/1", query: { keyword: "business" } }}
          >
            <a>
              <div className={classes.NavLogo}>
                <Icons.FaBriefcase />
                <span className={classes.text}>Business</span>
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/newsDetail/1",
              query: { keyword: "technology" },
            }}
          >
            <a>
              <div className={classes.NavLogo}>
                <Icons.FaLaptop />
                <span className={classes.text}>Technology</span>
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/newsDetail/1",
              query: { keyword: "entertainment" },
            }}
          >
            <a>
              <div className={classes.NavLogo}>
                <Icons.FaCircleNotch />
                <span className={classes.text}>Entertainment</span>
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link
            href={{ pathname: "/newsDetail/1", query: { keyword: "health" } }}
          >
            <a>
              <div className={classes.NavLogo}>
                <Icons.FaFileMedical />
                <span className={classes.text}>Health</span>
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link
            href={{ pathname: "/newsDetail/1", query: { keyword: "science" } }}
          >
            <a>
            <div className={classes.NavLogo}>
              <Icons.FaFlask />
              <span className={classes.text}>Science</span>
              </div>
              </a>
          </Link>
        </li>
        <li>
          <Link
            href={{ pathname: "/newsDetail/1", query: { keyword: "sports" } }}
          >
            <a>
            <div className={classes.NavLogo}>
              <Icons.FaRunning />
              <span className={classes.text}>Sports</span>
              </div>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigationbar;
