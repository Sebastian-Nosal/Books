export default function BookCard(props)
{
    return(<div className="col-12 col-md-6 col-lg-3">
        <div className="card mb-4">
            <img src={props.src} className="card-img-top" alt="" />
            <div class="card-body">
                <h4 class="card-title">{props.heading}</h4>
                <p class="card-text">{props.description}</p>
            </div>
        </div>
    </div>)
}