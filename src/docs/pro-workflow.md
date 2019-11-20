---
path: "/pro-workflow"
title: "Pro: workflow"
---

Frame.io sitt dokument på arbeidsflyt er interessant lesning: https://workflow.frame.io/guide.

Dette er en amatørs første forsøk på å forstå en pro workflow under produksjon. Ikke men som noe normativt, men et forsøk på å se formidlingen av råopptak til de som måtte ønske å se de for forskningsformål, gjenbruk i nye produksjoner o.l.

```plantuml 
@startuml

title Pro: workflow

rectangle Desktop {
    (FCP/Premiere) as application
}

rectangle "PRO-arbeidsflyt" as prowf {
    rectangle Goliat {
        (Bibliotek/Prosjekt) as project
    }

    rectangle Billy {

    }
}

rectangle "[[/pro Kaltura]]" {
    (Last opp)
    (Redigere metadata) as metadata
    (Del med bestiller)
    (Publiser til kanal) as channel
}

:Pro:
:Bestiller:

(Minnekort m.m.) as source

Pro -- source
source --> application

Bestiller <-- (Del med bestiller)

Pro --> project : "Last opp AV"

Pro --> application
application <-> project : "SAN/DLC"

Goliat --> Billy : Avlevering av prosjekt/bibliotek

Pro --> (Last opp) : Master
(Last opp) --> metadata
metadata ..> (Del med bestiller)
(Del med bestiller) ..> channel
metadata --> channel : "[Ressursen har nødvendig \lmetadata for DLR?]"

channel --> (Kunnskapskanalen CMS/SSG) : "[Publisert til Kunnskapskanelen]"
channel --> (uib.no) : "[Publisert til uib.no-kanal]"
channel --> (Youtube) : "[Distribuert]"
channel --> (Vimeo) : "[Distribuert]"

note right of source
    Følge fast filnavn-struktur? Lettere å knytte til MAM?
    - date-projektID-emne-opptak-kamera#-lyd-klipp#
    - 20190812-villskap-olsen-intervju-01-lv-001
end note

note top of Bestiller 
    Alternative måter å dele AV-filer
    kan være frame.io, Teams og MS Video
end note
@enduml
```


```plantuml 
@startuml
cloud "AWS \l(Billy)" as aws
database "MAM \l(NORDUnet)" as mam

database "Goliat" as goliat
database "Billy" as billy


mam --> aws
goliat --> billy

@enduml
```