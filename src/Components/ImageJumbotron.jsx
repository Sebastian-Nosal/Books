export default function ImageJumbotron(props)
{
    return(<section className="m-0  banner1 position-relative baner1">
                <div className="baner1-holder position-absolute w-100 h-100">
                    <div className="baner1-holder-inner position-fixed h-100 w-100">
                        <img className="w-100 h-100 baner-img" src={props.src} alt="Jumbotron" />
                    </div>
                    
                </div>
                <div className="banner-heading text-light">
                        <h2 className="display-3 mb-5">{props.title}</h2>
                        
                    {Array.isArray(props.description)? props.description.map(el=>(<p>{el}</p>)): (<p>{props.description}</p>)}
                    </div>
            </section>)
}