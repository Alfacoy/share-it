import Meta from "../Meta";
import style from "./style.module.css";

const Container = ({ children, title }) => {
  return (
    <main className={style.container}>
      <Meta
        img="avatar.jpg"
        title="share-it"
        title_social="share-it"
        description="A simple test"
        user="alfacoy"
      />
      <h1 className={style.title}>{`@${title}`}</h1>
      {children}
    </main>
  );
};

export default Container;
