import style from "./style.module.css";

const Header = ({ avatar, alt }) => {
  return (
    <header className={style.header}>
      <figure>
        <img className={style.avatar} src={avatar} alt={`@${alt}`} />
      </figure>
    </header>
  );
};

export default Header;
