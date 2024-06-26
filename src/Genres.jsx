import ImageJumbotron from "./Components/ImageJumbotron";
import ColumnImages from "./Components/ColumnImages";

export default function Genres() {
  return (
    <>
      <div className="bg-white p0">
        <div className=" mt-4 p-5 bg-secondary text-white ">
          <h1 className="px-5"> Literatura piękna</h1>
          <p className="px-5">
            Czytanie jest podróżą po cudzych umysłach, podróżą nieraz ciekawszą
            i bardziej pouczającą od zwiedzania obcych krajów.
          </p>
        </div>
      </div>
      <section class="p-5 text-justify authors">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md">
              <img src="img/lalka.jpg" class="img-fluid" alt="Witcher" />
            </div>
            <div class="col-md p-5 text-justify">
              <p>
                Literatura piękna, znana również jako literatura artystyczna lub
                beletrystyka, to rodzaj literatury, który koncentruje się na
                estetyce, emocjach i artystycznych wartościach tekstu. Celem
                literatury pięknej jest nie tylko opowiedzenie historii, ale
                także wywołanie głębszych refleksji i przeżyć u czytelnika
                poprzez wykorzystanie wysublimowanego języka, metafor, symboliki
                i innych środków stylistycznych.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ImageJumbotron title="Kryminał" 
          description={
            [
            "Kryminał to gatunek literacki, który skupia się na rozwiązywaniu agadek kryminalnych, zazwyczaj dotyczących morderstw, kradzieży lub innych poważnych przestępstw.",
            "Istnieje wiele podgatunków kryminału, w tym powieść detektywistyczna, thriller, noir, a także kryminał sądowy"
            ]} 
            src="/img/sherlock.jpg"/>
      <section class="p-5 text-justify authors">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-md">
              <img src="img/romans.jpg" class="img-fluid" alt="Witcher" />
            </div>
            <div class="col-md p-5 text-justify">
              <p>
                Romans to gatunek literacki, który skupia się na tematyce
                miłosnej i relacjach romantycznych między bohaterami. Jest
                jednym z najpopularniejszych i najbardziej rozpoznawalnych
                gatunków, oferując szeroki wachlarz emocji i często kończąc się
                szczęśliwym zakończeniem. Oto główne cechy romansu oraz jego
                podgatunki i znani autorzy:
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="m-0  banner1 position-relative baner1">
        <div className="baner1-holder position-absolute w-100 h-100">
          <div className="baner1-holder-inner position-fixed h-100 w-100">
            <img
              className="w-100 h-100 baner-img"
              src="/img/fantasy.jpg"
              alt="Wizarding"
            />
          </div>
        </div>
        <div className="banner-heading text-light">
          <h1 className="display-1">Fantastyka</h1>
          <p>
          Fantastyka to gatunek literacki, który obejmuje dzieła opowiadające o wydarzeniach, światach i postaciach wykraczających poza granice rzeczywistości, wykorzystując elementy magii, nadprzyrodzoności, technologii przyszłości i nieznanych nauce zjawisk. 
          </p>
          <p>
          Fantastyka dzieli się na kilka podgatunków, z których każdy ma swoje charakterystyczne cechy i tematy.
          </p>
        </div>
      </section>

    <ColumnImages />

    <section id="questions" class="p-5">
      <div class="container">
        <h2 class="text-center mb-4">Polecane Książki z gatunku</h2>
        <div class="accordion accordion-flush" id="questions">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-one"
              >
                Fantastyka
              </button>
            </h2>
            <div
              id="question-one"
              class="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div class="accordion-body">
              Żaden gatunek literacki nie ma tak wiernych czytelników, jak fantastyka. Dobre książki fantasy pozwalają rozwijać skrzydła naszej wyobraźni. Jakie książki warto przeczytać? Obowiązkowymi pozycjami na liście są najlepsze książki Tolkiena: Władca Pierścieni i Hobbit to nasłynniejsze sagi. Trzeba jednak pamiętać, że twórczość Tolkiena nie oganicza się tylko do tych powieści. Podróż do Śródziemia to wyprawa na długie lata, podobnie jak przygoda z Pieśnią lodu i ognia.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-two"
              >
                Kryminał
              </button>
            </h2>
            <div
              id="question-two"
              class="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div class="accordion-body">
                Ciekawe lektury szkolne czasami się zdarzają. Na pewno większość z nas dzięki liście lektur sięgnęła kiedyś po arcydzieło Fiodora Dostojewskiego Zbrodnia i Kara. Najlepsze książki kryminalne powstały dzięki legendarnej Agacie Christie. Jej kryminały to książki, które trzeba przeczytać, by poznać klasykę gatunku. Morderstwo w Orient Expressie, a szczególnie postać nietuzinkowego detektywa Poirot zagościła już na stałe w naszej  kulturze. Inspiracją dla twórców filmowych jest legendarny Sherlock Holmes. 
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-three"
              >
                Klasyka
              </button>
            </h2>
            <div
              id="question-three"
              class="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div class="accordion-body">
                Niektóre książki nigdy nie tracą swojej wartości. Zawarte w nich uniwersalne prawdy i najczulsze ludzkie uczucia sprawiają, że niezależnie od wieku czy szerokości geograficznej, pod którą mieszkamy, wzruszamy się, zatrzymujemy i chcemy przeczytać je raz jeszcze. „Quo vadis” wydawano początkowo w prasie w formie odcinków, aż w 1896 roku książka doczekała się trzytomowej premiery. Pisarz w swojej powieści historycznej ukazał początki narodzin chrześcijaństwa oraz zmierzch imperium rzymskiego za czasów rządu cesarza Nerona.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-four"
              >
               Science Fiction
              </button>
            </h2>
            <div
              id="question-four"
              class="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div class="accordion-body">
                Są książki, które się nie starzeją. Do takich paradoksalnie należy wiele cykli SF, w tym wciąż modne: „Kroniki Diuny”, „Fundacja” czy „Autostopem przez Galaktykę”. Science fiction to bardzo pokaźny gatunek, więc nic dziwnego, że co jakiś czas na rynku pojawiają się kolejne gorące nazwiska, które przykuwają uwagę czytelników. 
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </section>
    </>
  );
}
