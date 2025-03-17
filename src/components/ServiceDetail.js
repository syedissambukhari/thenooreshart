import { useParams } from 'react-router-dom';
import services from '../assets/data/services.json';
import styles from '../assets/styles/ProjectDetail.module.css';
import Navbar from './Navbar';
import Footer from './Footer';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = services.find(service => service.id.toString() === id);

  if (!project) {
    return <h2 className={styles.NotFound}>Project not found!</h2>;
  }

  return (
    <>
      <Navbar />
      <div className={styles.ProjectDetail}>
        <div className={styles.Container}>
          <h1 className={styles.Title}>{project.title}</h1>
          <img className={styles.Image} src={project.img} alt={project.title} />
          <p className={styles.Description}>{project.description}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetail;
