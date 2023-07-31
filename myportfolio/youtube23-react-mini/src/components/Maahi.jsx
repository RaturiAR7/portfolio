import experiences from "./experi";


const Maahi = () => {
  let left = "0";
  return (
   
    <div id="experience">
        <h4 >WHAT I HAVE DONE SO FAR</h4>
            <h2 id="edu">Education and Work Experience</h2>
            <div className="edu">
      {experiences.map((element) => {
        if (left === "0") {
          left = "1";
        } else {
          left = "0";
        }
        if (left === "0") {
          return (
            <div key={element.id} className="left ">
              <div className="maahi_container">
                <h1>{element.title}</h1>
                <h3>{element.company_name}</h3>
                <h3>{element.date}</h3>
              </div>
              <div>
                <img className="logos" src={element.icon} alt="" />
              </div>
            </div>
            
          );
        } else {
          return (
            <div key={element.id} className="right">
              <div>
                <img className="logos" src={element.icon} alt="" />
              </div>
              
              <div className="maahi_container right_container" >
                <h1>{element.title}</h1>
                <h3>{element.company_name}</h3>
                <h3>{element.date}</h3>
              </div>
            </div>
          );
        }
      })}
      </div>
    </div>
  );
};

export default Maahi;