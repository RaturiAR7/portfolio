import { projectInfo } from "./ProjectInfo";
const Project = () => {
    // const handleLink=(link)=>{

    // }
    return (
        <div className="ProjectPage" id="ProjectPage">
            <h1>Projects</h1>
            <p> Throughout my career as a developer, I have had the opportunity to work on a variety of exciting and challenging projects. From developing robust web applications to creating innovative mobile apps, I have tackled a wide range of projects that have allowed me to hone my skills and expertise.</p>
            <div className="project">
                {projectInfo.map((project)=>{
                    return(
                            <div key={project.id} className="ProjectCard">
                                <img src={project.image} alt="" />
                                <h2>{project.name}</h2>
                                <p>{project.description}</p>
                                <a  href={project.projectlink}>
                                    <button id="buttonproject">Go to project</button>
                                </a>
                            </div>
                        )
                })}
            </div>
        </div>
    );
}
 
export default Project;