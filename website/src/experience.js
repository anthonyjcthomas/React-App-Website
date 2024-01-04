import "./experience.css";

const Experience = () => {
    const items = [
        {
            title: "Project Analyst",
            company: "Stoughton Trailers",
            date: "5/2023 - Present",
            points: [
                "Worked directly with CTO and CMO, led projects overseen by executives, reported to CEO periodically.",
                "Performed advanced analytical functions, including data modeling and prescriptive analytics.",
                "Reengineered standard operational procedures that improved functional areas and data management.",
                "Handled important data related to Chassis and Trailers at locations accross the country.",
            ],
            image:"https://www.stoughtontrailers.com/Portals/0/documents/Stoughton%20Trailers%20Blue%20Logo%20JPEG.jpg?ver=2018-10-09-093336-927",
              
        },

        {
            title: "Kollege Klub",
            company: "Barback",
            date: "3/2023 - Present",
            points: [
                "Work directly with customers by mixing and serving drink orders, displaying knowledge about drinks, strong communication skills to provide comforting transactions, and situational awareness to ensure the safety of staff and customers.",
            
            ],
            image:"https://www.panowalks.com/embed/JRx0YlqXzUopJia7MkEcQ6N2jx36/resources/images/kollege_klub_logo.png",
              
        }
    ]
    return <div className='experience'> 
        <h1 className="header"> Work Experience</h1>
        <div className="work-items"> 
            {items.map((item) => (
            <div className="item" key={ Math.random()}>
                <img src={ item.image} alt="logo" className="logo" />
                <div className="item-content"> 
                <div className="item-header">
                    <h2 className="no-margin">{item.title}</h2>
                    <h4 className="no-margin">{item.company} </h4> 
                    <p className="no-margin text-muted">{item.date}</p>
                    </div>
                        <p className="description">{item.description} </p>
                        <ul className = "points"> 
                    {item.points.map((point) => ( 
                    <li key={Math.random()}>{point}</li>
                    ))}
                </ul>
                </div>
                
            </div> 
        ))}
        </div>
    </div>;
};

export default Experience;
