import style from "./style.module.css";

const Card = ({ link, name }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${style.card} ${style.card__content}`}
    >
      {name}
    </a>
  );
};

export default Card;
