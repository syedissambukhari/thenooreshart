import { useParams } from 'react-router-dom';
import posts from '../assets/data/posts.json';
import styles from '../assets/styles/BlogDetail.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogDetail = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <>
        <Navbar />
        <div className={styles.BlogDetail}>
          <h2>Post not found</h2>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className={styles.BlogDetail}>
        <h1>{post.title}</h1>
        <p className={styles.content}>{post.content}</p>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;
