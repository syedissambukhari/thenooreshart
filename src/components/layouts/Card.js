import { Link } from 'react-router-dom';
import styles from '../../assets/styles/layouts/Card.module.css';

const Card = ({ id, title, imgSrc }) => {
  return (
    <div className={styles.Card}>
      <img src={imgSrc} alt={`${title} Illustration`} />
      <div>
        <h3>{title}</h3>
        <Link to={`/project/${id}`}>
          See More ›
        </Link>
      </div>
    </div>
  );
};

export default Card;
