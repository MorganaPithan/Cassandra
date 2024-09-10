Docker
cqlsh>create keyspace tech_women with replication = {'class': 'SimpleStrategy', 'replication_factor':1};
cqlsh>use tech_women;
cqlsh:tech_women> create table professionals_woman (id uuid primary key, name TEXT, birth int, country TEXT, area TEXT, contribuition TEXT);
cqlsh:tech_women> select * from professionals_woman;

 id                                   | area                                             | birth | contribuition                                                                           | country        | name
--------------------------------------+--------------------------------------------------+-------+-----------------------------------------------------------------------------------------+----------------+--------------------
 617c38b7-e676-485e-937c-26c52f80ed15 |                          Matemática, Programação |  1815 |                                                  Primeira programadora de computadores. |    Reino Unido |       Ada Lovelace
 59041e32-f9cd-461f-946e-9f61150812c7 |                  Inventora, Comunicações sem fio |  1914 |                  Co-inventora de uma técnica que serviu de base para Wi-Fi e Bluetooth. |        Áustria |        Hedy Lamarr
 0c2d13b1-b1ce-4370-9b7b-c8f63ff75e69 |                            Redes de Computadores |  1951 | Criadora do Spanning Tree Protocol (STP), fundamental para o funcionamento da Internet. | Estados Unidos |      Radia Perlman
 28c78827-3e12-47bc-96a9-92522cb76fbd | Ciência da Computação, Linguagens de Programação |  1906 |                                   Criadora do primeiro compilador e da linguagem COBOL. | Estados Unidos |       Grace Hopper
 8df458bd-65b9-4308-875a-f6d51440454b |                Matemática, Ciência da Computação |  1918 |                                       Cálculos cruciais para missões espaciais da NASA. | Estados Unidos | Katherine Johnsonn

POSTMAN URL: http://localhost:3000/womans
