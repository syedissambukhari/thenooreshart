import { useParams } from 'react-router-dom';
import services from '../assets/data/services.json';
import styles from '../assets/styles/ProjectDetail.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
          {/* <img className={styles.Image} src={project.img} alt={project.title} /> */}
          <p className={styles.Description}>{project.description}</p>

          {/* Subcategories Section */}
          {project.subcategories && project.subcategories.length > 0 && (
            <div className={styles.Subcategories}>
              {/* <h2 className={styles.SubcategoryTitle}>Subcategories</h2> */}
              <div className={styles.SubcategoryGrid}>
                {project.subcategories.map(sub => (
                  <div key={sub.id} className={styles.SubcategoryCard}>
                    <img className={styles.SubcategoryImage} src={sub.img || project.img} alt={sub.title} />
                    <h3 className={styles.SubcategoryName}>{sub.title}</h3>
                    <p className={styles.SubcategoryDescription}>{sub.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetail;
