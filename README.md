# Koda_Case_SKLE
Dette repo indeholder Sune Øllgaard Klem's løsning på casen præsenteret af Koda. 

## Dokumentoversigt:
./Process/acceptance_criterias.txt - En dekonstruktion af de påkrævede acceptkriterier (som præsenteret i casebeskrivelsen).
./Application/application.client - React klienten 
./Application/Application.Server - Backenden

## Kørselsguide:
1) Kør docker-compose via visual studio 
2) I visual studio åben en ny terminal og kør derefter: npm run dev (fra /application.client/)

Følgende vil blive bootet op:
1) Swagger (https://localhost:59813/swagger/index.html).
2) Postgres databasen.
3) Postgres admin (http://localhost:8001/login?next=%2F, login info kan findes i docker-compose filen + info til at tilkoble serveren).
4) Backend serveren (https://localhost:59813/user).
5) Frontenden (https://localhost:32770/).

