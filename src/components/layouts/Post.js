import { Link } from 'react-router-dom';
import styles from '../../assets/styles/layouts/Post.module.css';

const Post = ({ id, title, content }) => {
  return (
    <div className={styles.Post}>
      <h3>{title}</h3>
      <p>{content}</p>
      <Link to={`/blog/${id}`}>Read More</Link>
    </div>
  );
};

export default Post;
