import classes from "./MainFooter.module.css";
import Link from "next/dist/client/link";
function MainFooter() {
  return (
    <footer className={classes.footerContainer}>
      <Link href="/">
        <a>
          <h3>Back to top</h3>
        </a>
      </Link>
      <p>
        Passionate about new projects, technologies, and meeting new people.
      </p>
      <h5>&copy; Haruka Horiuchi 2021</h5>
    </footer>
  );
}

export default MainFooter;
