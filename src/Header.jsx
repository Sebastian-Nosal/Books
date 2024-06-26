import { Link } from "react-router-dom"

export default function Header()
{
    return (<>
    <nav className="navbar navbar-expand-sm bg-light navbar-light sticky-top" >
        <div className="container-fluid">
            <div className="d-md-none">
                <button className="navbar-toggler" 
                    type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" 
                    aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse justify-content-between" id="navbarToggleExternalContent">
                <h5 className="p-0 m-0 d-none d-md-inline">
                    <img className="navbar-brand" src="/logov2.png" alt="Logo" />
                    <span className="navbar-text">O książkach</span>
                </h5>
                    
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className='nav-link' to='/'>Książki</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='/authors'>Autorzy</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' to='/genres'>Gatunki</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <header className="mw-100">
        <div id="demo" className="carousel slide" data-bs-ride='carousel'>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div class="carousel-caption caption d-flex justify-content-center align-center">
                        <div className="caption_holder">
                            <q className="display-5 d-flex justify-content-center align-center">Książka, myśl, słowo, uczucie, czyn ... Wszystko razem stanowi dopiero człowieka.</q>
                            <h3 className="display-6">Carlos Ruiz Zafón</h3>
                        </div>
                    </div>          
                    <img src="/carousel/carousel1.jpg" alt="Image1" className="d-block w-100"/> 
                    
                </div>
                <div className="carousel-item">
                    <div class="carousel-caption caption d-flex justify-content-center align-center">
                        <div className="caption_holder">
                            <q className="display-5 d-flex justify-content-center align-center">Książka, myśl, słowo, uczucie, czyn ... Wszystko razem stanowi dopiero człowieka.</q>
                            <h3 className="display-6">Carlos Ruiz Zafón</h3>
                        </div>
                    </div>          
                    <img src="/carousel/carousel3.jpg" alt="Image3" className="d-block w-100"/>
                </div>
                <div className="carousel-item">
                    <div class="carousel-caption caption d-flex justify-content-center align-center">
                        <div className="caption_holder">
                            <q className="display-5 d-flex justify-content-center align-center">Książka, myśl, słowo, uczucie, czyn ... Wszystko razem stanowi dopiero człowieka.</q>
                            <h3 className="display-6">Carlos Ruiz Zafón</h3>
                        </div>
                    </div>          
                    <img src="/carousel/carousel4.jpg" alt="Image4" className="d-block w-100"/>
                </div>
                <div className="carousel-item">
                    <div class="carousel-caption caption d-flex justify-content-center align-center">
                        <div className="caption_holder">
                            <q className="display-5 d-flex justify-content-center align-center">Książka, myśl, słowo, uczucie, czyn ... Wszystko razem stanowi dopiero człowieka.</q>
                            <h3 className="display-6">Carlos Ruiz Zafón</h3>
                        </div>
                    </div>          
                    <img src="/carousel/carousel5.jpg" alt="Image5" className="d-block w-100"/>
                </div>
            </div>

        </div>
    </header>
    </>)
}