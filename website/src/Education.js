import "./Education.css";

const Education = () => {
    const items = [
        {
            title: "University of Wisconsin",
            company: "Computer Science and Data Science Student",
            graduation: "9/2022-5/2026",
            points: [
                "Phi Gamma Delta – Mu Chapter",
                "Data Science Club (Member)",
                "Software Development Club (Member)",
            ],
            image:"https://brand.wisc.edu/content/uploads/2016/11/uw-logo-color-centered-300x180.png",
              
        },

    ]
    return <div className='experience'> 
        <h1 className="header"> Education</h1>
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
                        <p className="graduation no-margin text-muted">{item.graduation} </p>
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

export default Education;
