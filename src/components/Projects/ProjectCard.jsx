import React from 'react';
import styles from "./ProjectCard.module.css";

const ProjectCard = ({
    project: {title, imageSrc, description, skills }
}) => {
  return (
    // <div styles={styles.hcant}>
    <div className={styles.container}>
        <img className={styles.image} src={imageSrc} alt={`image of${imageSrc}`} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
       
        {/* {skills && ( */}
            <ul className={styles.skills}>
             {skills.map((skill, skillId) => {
                    return <li key={skillId} className={styles.skill}>{skill}</li>;
                })}
            </ul>
        {/* )} */}

      
    </div>
    // </div>
  )
}

export default ProjectCard
