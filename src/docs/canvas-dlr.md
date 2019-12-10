---
path: "/canvas-dlr"
title: "Mitt UiB <-> DLR"
---

En gjenganger i alle diskusjoner med fagmiljø og prosjekter er ønsket om å dele læringsressurser og læringsobjekt fra Canvas til DLR. Det virker som det er viktigere for de, enn bruk av ressursene i DLR i emner.

## Avklaringer
* Hvem skal bygge en integrasjon mellom OSS Canvas og DLR, dersom man beslutter at læringsobjekter skal kunne deles med andre i sektoren?
* Ønske om en slags fagfellevurdering av de beste ressursene, best-practise oversikt. Se [overlay tidsskrift](https://en.wikipedia.org/wiki/Overlay_journal) for inspirasjon.

## Diagram 

```plantuml 
@startuml
scale 2/3

title Mitt UiB <-> DLR

rectangle Canvas {
    (Emne) as emne
    (Sider) as sider
    (Quiz) as quiz
    (Oppgave) as oppgave
    (Læringsmål) as mal
    (Aktivere DLR i emne) as activate

    component DLR {
        (Last opp) as dlrupload
        (Workflow?) as wf
        (Tilgangskontroll) as access
        (Lisensiering) as license
        (Publiser) as publish
    }
}


:UiB integrasjon: as middleware << Applikasjon >> 
middleware ..> wf
emne ..> middleware : "API-basert? Ikke LTI?"

:UNIT integrasjon: as unit << Applikasjon >> 
DLR <.. unit : LTI-integrasjon?
unit ..> wf

:Vitenskapelig: as Lecturer << Bruker >>
Lecturer --> dlrupload
dlrupload --> wf
wf --> access
access --> license
license --> publish
publish --> emne : Embed DLR innhold

Lecturer --> activate
activate --> emne

sider --> emne
quiz --> emne
oppgave --> emne
mal --> emne

@enduml
```