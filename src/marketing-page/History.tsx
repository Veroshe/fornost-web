import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function History() {
  return (
    <>
      <div className="back"></div>
      <Container>
        <Stack
          direction="column"
          component={Card}
          spacing={1}
          useFlexGap
          sx={{
            p: 3,
            height: "100%",
            borderColor: "hsla(220, 25%, 25%, 0.3)",
            backgroundColor: "background.default",
            alignItems: "left",
            gap: 2,
            marginTop: { xs: 4, sm: 6 }
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "grey.900",
              textAlign: "left",
              whiteSpace: "pre-line"
            }}
          >
            Poniższy artykuł jest częścią publikacji „Nasiona. Drzewa. Ogrody”
            wydanej z okazji Konferencji Larpowej 2016.
            <a
              href="https://www.facebook.com/events/895237192729983"
              target="_blank"
            >
              dedykowanym wydarzeniu.
            </a>
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "grey.900",
              textAlign: "left",
              whiteSpace: "pre-line"
            }}
          >
            Początek
          </Typography>
          <Stack>
            <Typography
              variant="body1"
              sx={{
                color: "grey.900",
                textAlign: "left",
                whiteSpace: "pre-line"
              }}
            >
              Sześć ślubów, troje dzieci, niezliczone przyjaźnie – dziesięć lat
              temu grupa siedzącą w środku nocy przy ognisku w trakcie zlotu
              Tolk-Folk nie miała pojęcia, jak wiele wydarzeń właśnie prowokuje.
              <br />
              <br />
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "grey.900",
                textAlign: "left",
                whiteSpace: "pre-line"
              }}
            >
              Szukając początków Fornostu, trzeba cofnąć się dalej niż do
              pierwszej edycji tego konwentu – do roku 2000 i strony
              www.wladca.pl. Peter Jackson właśnie kończył zdjęcia do Drużyny
              Pierścienia, a świat miał na nowo odkryć prozę Tolkiena. Wtedy też
              grupa fanów postanowiła założyć serwis informacyjny, który będzie
              prawdziwym polskim kompedium wiedzy na temat Śródziemia.
              Młodzieńczy zapał i chęci nauki programowania sprawiły, że rok
              później serwis był dostępny, wypełniony treścią, a także pełen
              obserwatorów, którzy chcieli dołożyć swoją cegiełkę do jego
              budowy. Wszyscy zaangażowani nadali sobie wtedy tytuł Rangers of
              the North i po dziś dzień „Strażnicy Północy” widnieją jako
              stowarzyszenie w polskim rejestrze sądowym. Kilka lat później
              internet ewoluował, a wladca.pl wraz z nim. Dzięki popularnemu
              Przemo, twórcy forum phpbb, również i RotN doczekał się swojego
              forum, zwanego wtedy Wiadomościami u Barlimana. Dla wielu osób
              może się to wydawać nie do pomyślenia, ale prawie 15 lat temu
              prowadzenie dyskusji na temat twórczości Tolkiena na forum miało
              swój urok. Wikipedia (szczególnie polska) ledwo pełzała,
              wyszukiwanie informacji w Google’ach nie dawało setek tysięcy
              wyników, a nawet prosta idea rozmowy ze znajomymi na żywo wymagała
              zakładania pokojów do czatowania. Kontakt wyglądał również inaczej
              – internet był czymś nowym i wielu z nas w ten sposób odkryło, że
              są inne osoby z podobnymi zainteresowaniami, otwarte na dyskusję,
              której często brakowało wśród „realnych” znajomych. Dzięki temu
              łatwiej było zawiązać przyjaźni, co też miało miejsce w przypadku
              forum. Wszystko zmieniło się w 2004 roku, kiedy najodważniejsza
              grupa miała wybrać się na zlot Tolk-Folk do Bielawy. Wybrać i
              zrobić coś, czego na Tolk-Folku jeszcze nigdy nie było –
              zorganizować pierwszy larp w klimacie Władcy Pierścieni.
              <br />
              <br />
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "grey.900",
                textAlign: "left",
                whiteSpace: "pre-line"
              }}
            >
              I udało się! Bez żadnej wiedzy na temat larpów, bez żadnego
              doświadczenia RotN przyjechał na Tolk Folk i przeprowadził larp
              [1], który pomimo niedopracowań był niezapomnianym przeżyciem dla
              wszystkich uczestników. Udało się również w kolejnym roku, a także
              w następnych. Warto się zatrzymać i powspominać, jak wyglądały
              larpy terenowe w tamtych latach. Większość strojów była tak
              naprawdę peleryną zrobioną z kawałka materiału. Co bardziej
              ambitni posiadali proste tuniki lub gotowe ubrania ze szmateksów.
              Nikt nie przejmował się wystającymi adidasami lub zwykłymi
              podkoszulkami pod ubraniem. Punktami życia na pierwszych larpach
              były korki po winie noszone na szyi, potem zastąpione paskami
              samoprzylepnej folii. Walka dystansowa polegała na rzutach
              szyszkami (nawet jeśli dzierżyło się prawdziwy łuk). Bezpieczna
              broń? Mogliśmy tylko pomarzyć o takim rozwiązaniu. Wtedy
              nieśmiertelną mechaniką walki była gra w papier-kamień-nożyce. Dla
              otoczenia wszystko musiało wyglądać komicznie – ale dla graczy te
              larpy miały w sobie coś magicznego. Najważniejsze było to, że
              przez te kilka godzin uczestnicy mogli naprawdę żyć w Śródziemiu.
              Robić to, na co czekali cały rok.
              <br />
              <br />
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "grey.900",
                textAlign: "left",
                whiteSpace: "pre-line"
              }}
            >
              W końcu nastąpił rok 2007 – znów Tolk-Folk, jedyny czas w roku,
              kiedy cała grupa spotykała się ze sobą. Przypadkowa rozmowa w
              środku nocy po kolejnym larpie, lepszym niż poprzednie. Nagle pada
              hasło: “A może zrobimy własny konwent?”, rzucone przez Turina.
              Pomysł ten został bardzo szybko skrytykowany, jak wiele innych
              słów Turina, jednak on sam się nie poddał – zebrał grupę, która
              zdecydowała, że w następnym roku, niezależnie od stopnia
              przygotowania, zrobi konwent. Konwent, który zmieni dziesiątki
              osób. Konwent, który będzie nazywał się… Osgiliath. Mało kto
              pamięta, że gdyby nie stanowczy sprzeciw wobec nazwy, którą mało
              kto był w stanie wypowiedzieć, a jeszcze mniej osób zapisać, nigdy
              nie byłoby Fornostu.
              <br />
              <br />
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "grey.900",
                textAlign: "left",
                whiteSpace: "pre-line"
              }}
            >
              Mimo wielu przeciwności, ziarno zostało zasiane – data, termin
              oraz nazwa konwentu zostały ogłoszone i nie dało się już tego
              cofnąć. Pierwszy Fornost odbył się w Podegrodziu – zjawiło się na
              nim kilkadziesiąt osób, przeprowadzone zostały trzy larpy, dużo
              konkursów i turniejów, ustanowiono wiele tradycji, a wszystko
              zwieńczono dwudniową Grą Główną [2], która rozpoczęła pisaną przez
              nas historię.
            </Typography>
          </Stack>
        </Stack>

        <Stack
          direction="column"
          component={Card}
          spacing={1}
          useFlexGap
          sx={{
            p: 3,
            height: "100%",
            borderColor: "hsla(220, 25%, 25%, 0.3)",
            backgroundColor: "background.default",
            alignItems: "left",
            gap: 2,
            marginTop: { xs: 4, sm: 6 }
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "grey.900",
              textAlign: "left",
              whiteSpace: "pre-line"
            }}
          >
            Rozwój
          </Typography>
          <Stack>
            <Typography
              variant="body1"
              sx={{
                color: "grey.900",
                textAlign: "left",
                whiteSpace: "pre-line"
              }}
            >
              Historia Fornostu to nauka na własnych błędach. Jej obszerne
              opisywanie z pewnością znudziłoby wszystkich czytelników. Jednak
              dziesięć lat robienia larpów terenowych przez mniej więcej tę samą
              grupę dużo nas nauczyło i o tym warto napisać. W następnej części
              chcę rozłożyć rozwój Gier Głównych Fornostu na czynniki pierwsze i
              opisać ewolucję każdego z nich osobno. Z pewnością jest to sposób,
              który pozwoli każdemu skupić się na tej części, która interesuje
              go najbardziej.
            </Typography>
          </Stack>
        </Stack>

        <Stack
          direction="column"
          component={Card}
          spacing={1}
          useFlexGap
          sx={{
            p: 3,
            height: "100%",
            borderColor: "hsla(220, 25%, 25%, 0.3)",
            backgroundColor: "background.default",
            alignItems: "left",
            gap: 2,
            marginTop: { xs: 4, sm: 6 }
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "grey.900",
              textAlign: "left",
              whiteSpace: "pre-line"
            }}
          >
            Świat
          </Typography>
          <Stack>
            <Typography
              variant="body1"
              sx={{
                color: "grey.900",
                textAlign: "left",
                whiteSpace: "pre-line"
              }}
            >
              Pierwsze Gry Główne odbywały się w pierwszej połowie Trzeciej Ery
              Śródziemia – świecie Tolkiena, który jest epicki, rozbudowany i…
              Zupełnie nie nadaje się na larpy. Bardzo szybko się o tym
              przekonaliśmy, kiedy kolejne ciekawe wątki fabularne były
              blokowane przez “nietolkienistyczność”. Niestety, świat Pierszej
              Ery opisywany przez Silmarillion miał dużo wad. Fornost wpasował
              się w najmniej opisaną przez Tolkiena historię królestwa Arnoru,
              która pozostawiała twórcom pewną swobodę. Jednak historia wciąż
              była ograniczająca – każde wprowadzenie znanej graczom postaci
              budziło ryzyko rozegrania czegoś, co zmieniłoby losy Śródziemia.
              Wiadomo było od początku, że Fornost musi upaść, więc wszystkie
              rozgrywki były sterowane tak, aby do tego doszło. Przez wiele lat
              rozbrzmiewały głosy, że powinniśmy zrezygnować ze Śródziemia, ale
              na szczęście do tego nie doszło. I choć mogą pojawiać się głosy,
              że Tolkien to tylko dumni, sztywni elfowie i że w tym świecie nie
              da się przeprowadzić ciekawej, złożonej gry, my znaleźliśmy pewien
              sposób. Gra Główna została przeniesiona do Czwartej Ery, czasu po
              wydarzeniach Władcy Pierścieni. Są to realia po Wojnie o
              Pierścień, prawie bez elfów, bez wielkiej magii, pełne zwykłych
              ludzi starających się odbudować to, co kiedyś zostało zniszczone.
              Uczestnicy Fornostu zaczęli pisać własną historię w bardzo słabo
              nakreślonym przez Tolkiena okresie, tworząc własne artefakty,
              własnych bohaterów oraz własne legendy.
              <br />
              <br />
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "grey.900",
                textAlign: "left",
                whiteSpace: "pre-line"
              }}
            >
              Mogłoby się wydawać, że nowej osobie będzie ciężko zrozumieć
              świat, który tworzymy. Jednak Gry Główne Fornostu są jak kolejne
              części filmów: przewijają się w nich znane motywy, lecz każdy z
              nich jest osobną historią, do której nie tylko można dołączyć w
              dowolnym momencie. Można zacząć ją pisać samemu.
            </Typography>
          </Stack>
        </Stack>

        <Stack
          direction="column"
          component={Card}
          spacing={1}
          useFlexGap
          sx={{
            p: 3,
            height: "100%",
            borderColor: "hsla(220, 25%, 25%, 0.3)",
            backgroundColor: "background.default",
            alignItems: "left",
            gap: 2,
            marginTop: { xs: 4, sm: 6 }
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "grey.900",
              textAlign: "left",
              whiteSpace: "pre-line"
            }}
          >
            Mechanika
          </Typography>
          <Stack>
            <Typography
              variant="body1"
              sx={{
                color: "grey.900",
                textAlign: "left",
                whiteSpace: "pre-line"
              }}
            >
              Zaczęło się od mechaniki papier-kamień-nożyce oraz pasków taśmy
              klejącej oznaczającej punkty życia. Ludzie mieli szarą taśmę,
              elfowie zieloną, a krasnoludy czerwoną. O sztucznej brodzie czy
              elfich uszach można było pomarzyć, nie mówiąc już o bezpiecznej
              broni. Fornost od zawsze stawiał na stare, dobre, RPGowe systemy
              rozwijania postaci. Dlatego też od pierwszej edycji uczestnicy
              dostawali PRP (punkty rozwoju postaci), które następnie mogli
              wymieniać na umiejętności przedstawione w postaci drzewek. Jeśli
              ktoś chciał być świetnym wojownikiem, nie stać go było na to, żeby
              zostać mistrzem alchemii. Świetny polityk nie mógł znać się na
              urokach. Zrównoważony system pozwolił graczom spędzać długie
              godziny na budowaniu własnej postaci. Takiej, jaka im się
              wymarzyła. I choć zdarzały się błędy, jak postaci wysokich elfów,
              którzy nie umieli czytać ani pisać lub handlarzy, którzy mieli
              więcej złota niż reszta postaci na larpie razem wzięta, system ten
              przypadł graczom do gustu. Drużyny, niczym w typowych grach RPG,
              mogą zdecydować, że chcą mieć na przykład “tanka”, polityka i
              uzdrowiciela. Co roku dodawane są nowe umiejętności do wykupienia
              i likwidowane są te mniej używane. Mechanika jest też upraszczana,
              tak aby nowi gracze mogli się łatwo odnaleźć bez studiowania
              całego podręcznika.
              <br />
              <br />
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "grey.900",
                textAlign: "left",
                whiteSpace: "pre-line"
              }}
            >
              Gdzie jesteśmy dzisiaj? Wszyscy gracze posiadają dobrze
              wyglądającą bezpieczną broń, własną lub wypożyczoną z fornostowego
              magazynu. Oprócz walki bronią białą popularne jest łucznictwo.
              Dodatkowo gracze mogą skupić się na alchemii i kowalstwie
              runicznym, które często może przechylić szalę zwycięstwa, na
              przykład zmuszając kluczową postać do wyjawienia największego
              sekretu lub wzmacniając broń, dzięki której zostanie zgładzony
              upiór. Osoby skupiające się na magii mogą wykorzystać kręgi lub
              słowa mocy. Łatwiej dostępne kręgi pozwalają na osiągnięcie
              obszarowego efektu, takiego jak paraliż postaci czy strefa
              prawdomówności, poprzez odtworzenie określonego (nieraz
              skomplikowanego) wzoru na ziemi. Słowa mocy opanowane przez
              bardziej utalentowanych magów również wpasowują się w klimat
              Śródziemia, wpływając na ludzi i naturę. Nie są to „kule ognia”
              ani „pioruny z rąk”, natomiast drobne rozkazy, zaciemnienia umysłu
              itp. Na koniec politycy i ekonomiści mogą wymieniać się
              zobowiązującymi kartami przysiąg – jeżeli gracz nie dotrzyma
              danego słowa, może być pewien, że po grze jego postać spotka jakiś
              brzydki, losowy wypadek. Wszystko to daje możliwość toczenia
              rozgrywki na wielu poziomach, w której każdy znajdzie coś dla
              siebie.
              <br />
              <br />
            </Typography>
          </Stack>
        </Stack>

        <Stack
          direction="column"
          component={Card}
          spacing={1}
          useFlexGap
          sx={{
            p: 3,
            height: "100%",
            borderColor: "hsla(220, 25%, 25%, 0.3)",
            backgroundColor: "background.default",
            alignItems: "left",
            gap: 2,
            marginTop: { xs: 4, sm: 6 }
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "grey.900",
              textAlign: "left",
              whiteSpace: "pre-line"
            }}
          >
            Ekonomia
          </Typography>
          <Stack>
            <Typography
              variant="body1"
              sx={{
                color: "grey.900",
                textAlign: "left",
                whiteSpace: "pre-line"
              }}
            >
              To źródło problemów wielu dużych larpów, którego najlepszym
              rozwiązaniem często wydaje się całkowita rezygnacja z pieniędzy.
              Fornost również przeszedł przez wiele rozwiązań, niejednokrotnie
              bardzo złych, starając się wypracować system działający dla
              wszystkich graczy. I choć dochodziło do sytuacji, gdzie handlarz
              dysponujący tylko walutą o “wyższym nominale” musiał kupić
              karczmę, aby móc się w niej napić piwa, udało się zbudować spójny,
              działający system. Stało się tak głównie dzięki wprowadzeniu kilku
              zasad.
              <br />
              <br />
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "grey.900",
                textAlign: "left",
                whiteSpace: "pre-line"
              }}
            >
              Przede wszystkim na Fornoście obowiązują dwie waluty, czyli tzw.
              monety i kryształki. Jest to popularne rozwiązanie, jednak u nas
              monety nie są wymienialne na kryształki. Właściciel ziemski może
              na początku gry dysponować na przykład trzema kryształkami, które
              odpowiadają jego terenom, budynkom, czy zwierzętom. Właściciel
              karczmy może w trakcie gry zgromadzić setki monet z napiwków.
              Jednak nie ma żadnego kursu wymiany dla tych dwóch walut. Jeżeli
              właściciel ziemski przyjdzie do karczmy, nie zapłaci przecież za
              piwo hektarem ziemi czy stadem krów. Tak samo karczmarz za dzienny
              utarg nie wykupi wioski. Pod koniec każdej gry liczba monet jest
              ignorowana i nie wpływa na historię postaci. Natomiast sprawdzany
              jest bilans kryształów, które można nabyć poprzez kontrakty
              handlowe lub zyskiwanie artefaktów. Ten bilans (oraz fakt
              przeżycia Gry Głównej) może wpłynąć na kontynuowaną przez gracza
              postać w następnym roku według poniższego, skróconego
              przelicznika:
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "grey.900",
                textAlign: "left",
                whiteSpace: "pre-line"
              }}
            >
              +1 kryształek – twoja postać będzie żyła dostatnio przez pół roku
              lub wyprawi wielką ucztę <br />
              +10 kryształków – stać cię na awans społeczny <br />
              +20 kryształków – wynajmij małą armię, kup miasteczko, zmień prawo
              w danym państwie, zostań doradcą jednego z królów. <br />
              +50 kryształków – załóż miasto lub małe państwo za Stalowymi
              Wzgórzami, zbuduj flotę okrętów, spróbuj dokonać przewrotu
              politycznego. <br />
              +100 kryształków – możesz ubiegać się o zostanie namiestnikiem
              Fornostu, rozpocznij prace badawcze nad rekonstrukcją Jedynego
              Pierścienia, zapoczątkuj Gondorski Program Kosmiczny poszukujący
              drogi do Valinoru lub kup loft w centrum Minas Tirith z widokiem
              na Białe Drzewo.
              <br />
              <br />
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "grey.900",
                textAlign: "left",
                whiteSpace: "pre-line"
              }}
            >
              Jest to najnowszy pomysł Fornostu, wprowadzony w trakcie Gry
              Głównej dopiero w 2015 roku [4], jednak już przynosi on efekty.
              Emisariusz wspomnianego w opisie świata smoka zgromadził ogromny
              majątek poprzez wydobycie meteorytu. Deklaracją gracza było
              stworzenie armii umacniającej władzę swojego przełożonego. W
              efekcie jego decyzji w trakcie najbliższej Gry Głównej główna oś
              fabularna oparta będzie o atak armii smoka na Shire. Z pewnością
              każdy czytelnik brał udział w jakimś larpie, w którym gracz w
              ostatnich minutach decydował się na samobójczą misję, „żeby coś
              się stało”. Nieracjonalne z poziomu zwykłych ludzi zachowania są
              problemami wielu larpów i powyższy system ekonomiczne doskonale
              sobie z nimi radzi. Emisariusz mógł spróbować w ostatniej chwili
              zaatakować elfich przedstawicieli, by osłabić ich wpływy w Minas
              Tirith. Gracz jednak wiedział, że długofalowy efekt będzie wówczas
              mniej opłacalny, wolał więc zadeklarować ucieczkę z terenu gry ze
              zgromadzonym majątkiem.
              <br />
              <br />
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "grey.900",
                textAlign: "left",
                whiteSpace: "pre-line"
              }}
            >
              W roku 2016 odbędzie się dziewiąta edycja Fornostu. Od samego
              początku symbolem i tradycją było wkopywanie na polu namiotowym
              Białego Drzewa, które jako symbol Fornostu, stoi przez wszystkie
              dni trwania konwentu i kończy spalone podczas pożegnalnej imprezy.
              Jest to konwent, który przeszedł długą drogę: odbył się w sześciu
              różnych lokacjach, wielokrotnie zmieniał skład organizatorski, a
              nawet bywał bywał bliski odwołania z różnych przyczyn. Dzięki
              stałemu miejscu Fornostu, którym od 2015 roku został Łutowiec,
              przed konwentem stoi wiele możliwości rozwoju. Historia konwentu
              to kilkadziesiąt larpów. Lepszych i gorszych, jednak wszystkie one
              były ciągłą nauką i wymianą doświadczeń. Jedno można powiedzieć z
              pewnością: jedynym sposobem, aby zobaczyć, co wyrosło z naszego
              konwentu, jest sprawdzenie tego na własne oczy poprzez dołączenie
              do tej historii.
              <br />
              <br />
              <br />
              <br />
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "grey.900",
                textAlign: "left",
                whiteSpace: "pre-line"
              }}
            >
              Jakub “Gandi” Wasielak <br />
              Korekta: Krzysztof “Draug” Mysiak <br />
              Jeżeli podobał Ci się powyższy artykuł, całą publikację „Nasiona.
              Drzewa. Ogrody” wciąż można zakupić w sklepie internetowym
              Rekwizytornia.com.pl. Ludografia: <br />
              [1] „Poszukiwania zielarki”; Paweł „Turin” Żygadło, Piotr
              „Mithrandir” Żygadło; 2004 <br />
              [2] „Zmierzch Dunedainów”; Paweł „Turin” Żygadło, Piotr
              „Mithrandir” Żygadło, Grażyna „Lalaith” Kozłowska, Piotr „Milo”
              Mazur; 2008 <br />
              [3] „Bitwa o Shire”; Wojciech „Panda” Łanda, Jakub „Gandi”
              Wasielak, Bartłomiej „Artysta” Brózda; planowana premiera 2016{" "}
              <br />
              [4] „Blask Dawnych Dni”; Wojciech „Panda” Łanda, Jakub „Gandi”
              Wasielak, Bartłomiej „Artysta” Brózda, Mateusz „Zedd” Żygadło;
              2015 <br />
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
