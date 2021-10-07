import Articles from "../../components/articles/Articles";

function newsDetail(props) {

  return (
    <>
      <Articles articleData={props.article} />
    </>
  );
}

export async function getServerSideProps(context) {
  const category = context.query.keyword;
  const newsApiRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=15&apiKey=fd08c42cc4f94ab7871585d3dca92a9a`
  );

  const newsJson = await newsApiRes.json();
  // console.log(newsJson);
 
  if (!newsJson){
    return{
      notFound: true,
    }
  }
   const newsArticles = newsJson.articles;
  return {
    props: {
      article: newsArticles,
    },
  };
}

export default newsDetail;
