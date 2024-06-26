export default function ColumnImages(props)
{
    return(<section className="mt-5 ">
    <div className="mx-0 position-relative">
        <div className="w-100 start-0 text-center position-absolute column-image-header" >
            <h1> Podgatunki Fantasy</h1>
        </div>
        <div className="m-0 p-0 container-fluid column-images row">
            <div className="col-sm col-md-6 col-lg-3 h-100 position-relative image-column">
                <img src="/img/urban.webp" alt="" />
                <h2>Urban fantasy</h2>
            </div>
            <div className="col-sm col-md-6 col-lg-3 h-100 position-relative image-column">
                <img src="/img/High.webp" alt="" />
                <h2>Hard Fantasy</h2>
            </div>
            <div className="col-sm col-md-6 col-lg-3 h-100 position-relative image-column">
                <img src="img/Heroic.jpg" alt="" />
                <h2>Heroic Fantasy</h2>
            </div>
            <div className="col-sm col-md-6 col-lg-3 h-100 position-relative image-column">
                <img src="/img/Dark.webp" alt="" />
                <h2>Dark Fantasy</h2>
            </div>
        </div>
        </div>
    </section>)
}