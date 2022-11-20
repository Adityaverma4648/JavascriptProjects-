import '../Component.css';
import Card from './Card'

const Home = () =>{
    const projects = [
        {
            name : "Ecommerce",
            desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit Earum temporibus repellendus natus magni",
            image : "lorem23"
        },
        {
            name : "ToDoList",
            desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit Earum temporibus repellendus natus magni",
            image : "lorem23"
        },
        {
            name : "ResponsiveBlogSite",
            desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit Earum temporibus repellendus natus magni",
            image : "lorem23"
        },
        {
            name : "MusicPlayer",
            desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit Earum temporibus repellendus natus magni",
            image : "lorem23"
        },
        {
            name : "ArtDisplay",
            desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit Earum temporibus repellendus natus magni",
            image : "lorem23"
        },
        {
            name : "Calculator",
            desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit Earum temporibus repellendus natus magni",
            image : "lorem23"
        },
        {
            name : "Ecommerce",
            desc : "Lorem ipsum dolor, sit amet consectetur adipisicing elit Earum temporibus repellendus natus magni",
            image : "lorem23"
        },
    ];

    return (
        <div className="Home compCont bg-black d-flex flex-column">
             <div className="text-white container-fluid d-flex align-items-center justify-content-center">
                  <h3 className='py-4'>
                    Projects
                  </h3>
             </div>
            <div className="container-fluid text-white compCont d-flex align-items-center justify-content-center flex-wrap py-4">
                  
                  {projects.map((project , index)=>{

                      const urlBuilder = (project) =>{
                        var baseURl = "http://localhost:3000/";
                        var src = project.name
                        var destination = baseURl + src
                          return destination;
                      }
                   
                    return <a href={urlBuilder(project)} className='text-decoration-none'>
                    <Card key={index} name={project.name} desc = {project.desc} image={project.image} />
                    </a>
                  })}
                   
            </div>
        </div>
    );

} 

export default Home;