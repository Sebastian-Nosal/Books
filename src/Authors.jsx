import BookCard from "./Components/BookCard"

export default function Authors()
{
    return (<>
    <h2 className="text-center mt-5">Klasycznik Autorzy</h2>
    <section class="p-5">
      <div class="container">
        <div class="row text-center g-4">
          <div class="col-md">
            <div class="card bg-dark text-light">
              <div class="card-body text-center">
                <div class="h1 mb-3">
                  <i class="bi bi-laptop"></i>
                </div>
                <h3 class="card-title mb-3">H. Sienkiewicz</h3>
                <p class="card-text">
                  Polski pisarz i noblista. Najsłynniejsze dzieła to Trylogia: "Ogniem i Mieczem", "Potop", "Pan Wołodyjowski" oraz "Quo Vadis" i "Krzyżacy"
                </p>
                <a href="https://pl.wikipedia.org/wiki/Henryk_Sienkiewicz" class="btn btn-primary">Więcej</a>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card bg-secondary text-light">
              <div class="card-body text-center">
                <div class="h1 mb-3">
                  <i class="bi bi-person-square"></i>
                </div>
                <h3 class="card-title mb-3">Artur Conan Doyle</h3>
                <p class="card-text">
                  Szkocki pisarz i lekarz, autor cyklu książek o wybitnym detektywie Sherlocku Holmesie. Czołowy przedstawiciel nurtu powieści detektywistycznych.
                </p>
                <a href="https://pl.wikipedia.org/wiki/Arthur_Conan_Doyle" class="btn btn-dark">Więcej</a>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card bg-dark text-light">
              <div class="card-body text-center">
                <div class="h1 mb-3">
                  <i class="bi bi-people"></i>
                </div>
                <h3 class="card-title mb-3">John R. R. Tolkien</h3>
                <p class="card-text">
                 Brytyjski pisarz, Autor powieści takich jak: Władca Pierścieni, Hobbit czy Silmarillion. Popularyzator literatury fantasy. 
                </p>
                <a href="https://pl.wikipedia.org/wiki/J.R.R._Tolkien" class="btn btn-primary">Więcej</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <h2 className="text-center mt-5">Współcześni Autorzy</h2>
    
    <div className="authors">
    <section class="p-5 text-justify">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md">
            <img src="img/rowling.jpg" class="img-fluid" alt="Witcher" />
          </div>
          <div class="col-md p-5 text-justify">
            <h2>J. K. Rowling</h2>
            <p class="lead">
                Jest autorką serii o przygodach Harrego Pottera.
            </p>
            <p>
            J.K. Rowling, właściwie Joanne Rowling, jest brytyjską pisarką, znaną przede wszystkim jako autorka serii książek o Harrym Potterze. Urodziła się 31 lipca 1965 roku w Yate, Anglia. Cykl o młodym czarodzieju, składający się z siedmiu tomów, stał się globalnym fenomenem, przetłumaczonym na wiele języków i sprzedanym w setkach milionów egzemplarzy. Na podstawie książek powstały również filmy, które odniosły ogromny sukces komercyjny. Poza serią o Harrym Potterze, Rowling napisała również książki dla dorosłych, takie jak "Trafny wybór" oraz kryminały pod pseudonimem Robert Galbraith. Rowling jest również znana ze swojej działalności charytatywnej i angażowania się w różne społeczne inicjatywy.            </p>

          </div>
        </div>
      </div>
    </section>

    <section class="p-5 bg-dark text-light text-justify">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md p-5">
            <h2>George R. R. Marting</h2>
            <p class="lead">
                Autor bestsellerowej serii Pieśń Lodu i Ognia. Zekranizowanej przez HBO jako Gra o Tron
            </p>
            <p>
            George R. R. Martin, właściwie George Raymond Richard Martin, jest amerykańskim pisarzem fantasy, scenarzystą i producentem telewizyjnym. Urodził się 20 września 1948 roku w Bayonne, New Jersey. Najbardziej znany jest jako autor serii powieści "Pieśń Lodu i Ognia" (A Song of Ice and Fire), która stała się podstawą popularnego serialu telewizyjnego "Gra o tron" (Game of Thrones). Seria ta składa się z kilku tomów, a jej pierwszy tom, "Gra o tron", został opublikowany w 1996 roku. Martin jest ceniony za skomplikowane fabuły, rozwinięte postacie i nieprzewidywalność swojej twórczości. Oprócz pisania książek, Martin pracował także jako scenarzysta w Hollywood i brał udział w produkcji różnych projektów telewizyjnych. Jego twórczość zdobyła wiele nagród i wyróżnień, a on sam jest uważany za jednego z najważniejszych autorów współczesnej literatury fantasy.
            </p>
          </div>
          <div class="col-md">
            <img src="img/martin.jpg" class="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section class="p-5">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md">
            <img src="img/sapkowski.jpg" class="img-fluid" alt="Witcher" />
          </div>
          <div class="col-md p-5">
            <h2>Andrzej Sapkowski</h2>
            <p class="lead">
                Andrzej Sapkowski to polski pisarz fantasy, znany przede wszystkim jako autor cyklu powieści o wiedźminie Geralcie z Rivii
            </p>
            <p>
            Andrzej Sapkowski to polski pisarz fantasy, znany przede wszystkim jako autor cyklu powieści o wiedźminie Geralcie z Rivii. Urodził się 21 czerwca 1948 roku w Łodzi. Sapkowski zdobył popularność dzięki opowiadaniom o wiedźminie, które początkowo były publikowane w magazynie "Fantastyka", a później zostały zebrane w tomy "Ostatnie życzenie" i "Miecz przeznaczenia".
            Jego najbardziej znane dzieło to pięciotomowa saga o wiedźminie, w skład której wchodzą m.in. "Krew elfów", "Czas pogardy", "Chrzest ognia", "Wieża Jaskółki" i "Pani Jeziora". Cykl ten zyskał międzynarodową sławę i został przetłumaczony na wiele języków. Na podstawie książek Sapkowskiego powstały komiksy, gry komputerowe oraz seriale telewizyjne.
            </p>
          </div>
        </div>
      </div>
    </section>



    </div>
    </>)
}