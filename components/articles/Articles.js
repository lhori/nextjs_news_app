import Image from "next/image";
import classes from "../../styles/Main.module.css";

function Articles(props) {
  return (
    <div>
      <div className={classes.main}>
        <div className={classes.grid}>
          {props.articleData.map((article, index) => (
            <div
              key={index}
              className={classes.post}
              onClick={() => (window.location.href = article.url)}
            >
              {!!article.urlToImage && <img src={article.urlToImage} />}
              <h1>{article.title}</h1>
              <p>{article.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Articles;
