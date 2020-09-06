import Meta from "../Meta";
import style from "./style.module.css";

const Container = ({ children, title }) => {
  return (
    <main className={style.container}>
      <Meta
        img="avatar.jpeg"
        title="tecknchips"
        title_social="Frontend Developer"
        description="¡Hello World!"
        user="alfacoy"
      />
      <h1 className={style.title}>{`@${title}`}</h1>
      {children}
    </main>
  );
};

export default Container;
