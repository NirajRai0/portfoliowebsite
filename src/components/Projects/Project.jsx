import React from 'react';
// import styles from '../../../assets/Experince/project.png'
import styles from "./Project.module.css";
import Projects from "../data/projects.json";
import ProjectCard from './projectCard';

const Project = () => {
  return (
    <section id='projects' className={styles.container}>
        <h2 className={styles.title}>Project</h2>
        <div className={styles.projects}>
            {Projects.map((project, id) => {
                return <ProjectCard key={id} project={project}/>
            })}
        </div>
    </section>
  )
} 

export default Project
