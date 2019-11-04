---
path: "/kk-workflow"
title: "KK: workflow"
---

```plantuml 
@startuml

title Pro-workflow

rectangle "[[/pro-workflow PRO-arbeidsflyt]]" as prowf {

}

rectangle "[[/pro Kaltura]]" {
    (Last opp)
    (Redigere metadata) as metadata
    (Publiser til kanal) as channel
}

rectangle Kunnskapskanalen as kk {
    (Hent data) as source
    (Redaksjonell arbeidsflyt)
    (/api)
}

:Pro:
:Bruker:

Pro --> prowf

Pro --> (Last opp) : Master
(Last opp) --> metadata
metadata --> channel

channel --> source : "[Publisert til Kunnskapskanelen]"
channel --> (uib.no) : "[Publisert til uib.no-kanal]"
channel --> (Youtube) : "[Distribuert til]"
channel --> (Vimeo) : "[Distribuert til]"

(UiO metadata \log stream) --> source
(NTNU metadata \log stream) --> source
(HVL metadata \log stream) --> source
(UiT metadata \log stream) --> source

source --> (Redaksjonell arbeidsflyt)
(Redaksjonell arbeidsflyt) --> (/api)

(/api) --> (web)
(/api) --> (KK AppleTV)
(/api) --> (KK Native app)

Bruker --> (web)
Bruker --> (KK AppleTV)
Bruker --> (KK Native app)

note right of (Redaksjonell arbeidsflyt)
    Godkjenn eller avvis
    - legg til kategorier
end note

@enduml
```