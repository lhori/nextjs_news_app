import classes from '../styles/Main.module.css'

function Home() {
  return (
    <div className={classes.main}>
    <h1>Welcome to Top 15 news App</h1>
      <p>This app will just show 15 news items per category.</p>
      <p>The pagination is under development so please be patience about it!</p>
    </div>
  );
}

export default Home;