import Articles from "../../components/articles/Articles";

function topContent(props) {
  return (
    <>
        <Articles articleData={props.article} />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps() {

  const topApiRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=15&apiKey=fd08c42cc4f94ab7871585d3dca92a9a`
  );

  const topJson = await topApiRes.json();
  const topArticles = topJson.articles;

  return {
    props: {
      article: topArticles,
      revalidate: 1800,
    },
  };
}

export default topContent;
