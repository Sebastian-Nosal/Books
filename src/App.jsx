import BookCard from "./Components/BookCard"
import ImageJumbotron from './Components/ImageJumbotron'

export default function App()
{
    return (<>
             <div className="bg-white p-0">
                <div className=" mt-4 p-5 bg-secondary text-white ">
                    <h1 className="px-5"> Pieśń Lodu i Ognia </h1>
                    <p className="px-5">Zdrada... to tylko słowo. Kiedy dwaj książęta walczą ze sobą o krzesło, na którym tylko jeden z nich może usiąść, zarówno wielcy lordowie, jak i prości ludzie muszą wybierać. Po bitwie zaś zwycięzców okrzykuje się wiernymi i lojalnymi ludźmi. Natomiast ci, którzy przegrali, będą od tej pory znani jako buntownicy i zdrajcy. </p>
                </div>
            
            
            <section className="container-fluid bg-white">
                <div className="m-5 mt-1 mb-1 p-5 row bg-white">
                    <BookCard src='/img/piesn1.jpg' 
                            heading="Gra o Tron" 
                            description="W Zachodnich Krainach o ośmiu tysiącach lat zapisanej historii widmo wojen i katastrofy nieustannie wisi nad ludźmi. Zbliża się zima, lodowate wichry wieją z północy, gdzie schroniły się wyparte przez ludzi pradawne rasy i starzy bogowie."/>
                    <BookCard src='/img/piesn2.jpg' 
                            heading="Starcie królów" 
                            description="Żelazny Tron jednoczył Zachodnie Królestwa aż do śmierci króla Roberta. Bracia wszczęli wojnę, a Sansa została narzeczoną mordercy ojca, który teraz okrzyknął sie królem. Zresztą w każdym z królestw dawni wasale Żelaznego Tronu ogłaszają się królami."/>
                    <BookCard src='/img/piesn3.jpg' 
                            heading="Nawałnica Mieczy: Stal i śnieg" 
                            description="Siedem Królestw rozdarła krwawa wojna, a zima zbliża się niczym rozwścieczona bestia. Ludzie z Nocnej Straży przygotowują się na spotkanie z wielkim chłodem i żywymi trupami, które mu towarzyszą.A za morzem ostatnia z Targaryenów wychowuje smoki"/>
                    <BookCard src='/img/piesn4.jpg' 
                            heading="Nawałnica Mieczy: Krew i złoto " 
                            description="Siedem Królestw rozdarła krwawa wojna, a zima zbliża się niczym rozwścieczona bestia. Ludzie z Nocnej Straży przygotowują się na spotkanie z wielkim chłodem i żywymi trupami, które mu towarzyszą. A za morzem ostatnia z Targaryenów wychowuje smoki"/>
                    
                </div>
            </section>
            </div>
            <ImageJumbotron title="Świat Czarodziejów" 
              description="Wykreowany przez J. K. Rowling świat magii w którym dzieje się akcja książek o Harrym Potterze" 
              src="/img/hp.jpg" />

    <section class="p-5">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md">
            <img src="img/witcher.jpeg" class="img-fluid" alt="Witcher" />
          </div>
          <div class="col-md p-5">
            <h2>Saga Wiedźmińska</h2>
            <p class="lead">
            Miasto płonie, wąskie uliczki zieją ogniem i żarem. Narasta wrzask, odgłosy zajadłej walki, murem wstrząsają głuche uderzenia taranu.
            </p>
            <p>
            Tako rzecze Ithlinne, elfia wieszczka i uzdrowicielka:
            Drżyjcie, albowiem nadchodzi Niszczyciel Narodów. Stratują waszą ziemię i sznurem ją podzielą. Miasta wasze zostaną zburzone i pozbawione mieszkańców. Nietoperz i kruk w domach waszych zamieszkają, drzewo straci liść, zgnije owoc i zgorzknieje ziarno. Zaprawdę powiadam wam, oto nadchodzi czas miecza i topora, wiek wilczej zamieci.
            </p>

          </div>
        </div>
      </div>
    </section>

    <section class="p-5 bg-dark text-light">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-md p-5">
            <h2>Legenda Askiru</h2>
            <p class="lead">
                Mądrość nie przychodzi sama z siebie, tylko dlatego że człowiek się starzeje. Mądrości trzeba szukać. 
            </p>
            <p>
                Wszystko ma swój początek w zasypanej śniegiem gospodzie w górach dalekiej Północy. Stary wojownik Havald, zmęczony życiem i wieczną walką, tajemnicza czarodziejka Leandra, niebezpieczny przywódca bandy łupieżców i mroczna elfka o szczególnych upodobaniach. Każde szuka czegoś innego. Każde podąża w inną stronę. Kim są naprawdę? Dokąd zmierzają?
            </p>
          </div>
          <div class="col-md">
            <img src="img/askir.jpg" class="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>

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
            </>)
}