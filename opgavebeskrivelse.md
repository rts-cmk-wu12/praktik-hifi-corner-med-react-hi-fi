Opgavebeskrivelse
I skal fremstille en webapplikation til en HI-FI webbutik, som præsenterer butikkens produkter inddelt efter kategori eller producent. Brugeren af sitet skal nemt og overskueligt kunne finde rundt i de forskellige produkter og kunne fremsøge produkter vha. søgeord. Der er udelukkende tale om præsentation af produkterne, man skal ikke kunne handle produkter på siden.

Opgaven varer ca. 2-2.5 uger og omhandler både planlægningen og produktionen af client-side produktet. Opgaven skal planlægges, der skal udarbejdes designanalyse (identifikation af komponenter/moduler). Der skal udarbejdes user-stories til de enkelte komponenter. I skal samarbejde om projektet digitalt (eksempelvis ved hjælp af GitHub Projects), men det er også et krav, at I undervejs i processen vedligeholder et fysisk kanban-board, som kan bruges fx. ved de daglige scrum-møder.

Der er afsat to dage til den indledende planlægning, hvorefter selve udførelsen af produktet afvikles i to sprints af cirka en uges varighed. I skal afholde et sprint-planning møde med jeres lærer forud for hvert sprint, ligesom der skal være et sprint-review af hvert sprint med jeres lærer.

Det arbejde der forventes udført når projektet er slut, er en funktionel offentlig tilgængelig (github pages eller lignende) client-side som henter data og billeder fra en (eller flere) JSON-datakilde(r). Applikationen skal være sat op, så den matcher det udleverede design.

Et HI-FI produkt består af et navn, en beskrivelse, en pris, et billede, samt hører til i en kategori og er knyttet til en producent. I skal selv udtænke hvordan datastrukturen stilles op i JSON. (billederne findes i den medfølgende .zip fil, men ved alle de andre produktdata finder I selv på noget, benyt evt https://lipsum.com/feed/html )

Tekniske krav
Client-Side skal løses vha. HTML, CSS og Javascript(React.js), som ved hjælp af fetch-api'et henter data fra en eller flere JSON filer. Jeres CSS skal være modulær, og overholde BEM konventionen, samt principperne i SMACSS. Produktet kan designes efter mobile first princippet, men ikke nødvendigvis implementeret til begge medier (prioriter browser varianten som den primære der produceres).

Planlægning
Layoutanalyse - identificer komponenter/moduler(BEM blokke) i layoutet. Husk at analysere indefra og ud.
User stories - skriv user stories til alle komponenter.
Udarbejd 'definition of done' på de enkelte user-stories. Hvilke kriterier skal komponentet/modulet opfylde for at være færdigt? Hvad skal den som laver review kontrollere om er i orden?
SPRINT PLANNING (husk at invitere jeres lærer) Prioriter jeres user-stories og estimer dem, i vælger at arbejde med i det første sprint (planning poker)
Forslag til arbejdsprocess
Opsæt HTML sider med navigation og dummy-data (statisk site)
Design datastrukturer i JSON. (en test-fil med tre eller fire produkter som kan bruges i udviklingsfasen)
Programmér funktioner til dataudtræk
Byg alle nødvendige fetch, og udskriv data fra fetch.
Opret datafiler (JSON)
Dokumentér kode og funktionalitet i markdown-filer
Sider og indhold
Forside
Brand-liste
Shop-kategorier
Kategori-liste
Enkelt produktvisning
Forsiden
Forsidetekst og billeder af produkter
Visning af ét eller flere udvalgte produkter (kan være de senest oprettede, et tilfældigt produkt eller andet du finder relevant)
Produktsider
Der er flere forskellige funktioner under produkter:

Visning af alle produkter inden for en bestemt kategori, uden produkt beskrivelse
Visning af alle produkter der hører til en bestemt producent, uden produkt beskrivelse
Visning af ét produkt ved klik på et produkt fra listerne
Visning af produkter efter søgning
Alle produkter hentes via et "API"(JSON) og udskrives med fetch, alle produkter vises med deres billede.

Alle sider
Menu
Fritekst-søgefunktion til produkter og producenter (visning på produktsiden)
Footer med kontaktinfo
Github
Projektet opsættes i et GitHub repo - husk at invitere din lærer som collaborator.
Projektet accepteres som en GitHub assignment.
Der skal committes ved væsentlige ændringer eller færdiggørelse af en funktionalitet - og altid inden fyraften.
Alle commit tekster på GitHub skal kort beskrive ændringerne. Der må ikke skrives ligegyldige beskrivelser!.