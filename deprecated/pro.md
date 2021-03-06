---
path: "/pro"
title: "Pro: MAM-DLR-LMS"
---

```plantuml 
@startuml

title Kaltura -> DLR: Pro

rectangle "[[/pro-workflow PRO: MAM-DLR]]" as prowf {
    
}

rectangle Kaltura {
    (Last opp)
    (Redigere metadata) as metadata
    (Del med bestiller)
    (Publiser til kanal) as channel
}

rectangle "Mitt UiB" as mittuib {
    rectangle DLR {
        (Min arbeidsflyt?) as wf
        (Tilgangskontroll) as access
        (Lisensiering) as license
        (Ferdigstilt) as embed
    }
}

:Pro:
:Bestiller:

Bestiller --> (Del med bestiller)
Bestiller ..> wf

Pro <-> prowf

Pro --> (Last opp) : "[Ferdig master]"
(Last opp) --> metadata
metadata ..> (Del med bestiller)
(Del med bestiller) ..> channel
metadata --> channel : "[Resource has required\lmetadata for DLR?]"

channel --> (DLR ingester) : "[Published to watched channel or category]"
channel --> (Kunnskapskanalen CMS/SSG) : "[Published to Kunnskapskanelen channel]"
embed --> (Kunnskapskanalen CMS/SSG) : "[Published to Kunnskapskanelen tag]"
(DLR ingester) --> wf
(DLR ingester) ..> embed : "Kan ingester la metadata fra MAM\lstyre lisensiering og publisering?"

wf --> access
access --> license
license --> embed

note top of DLR 
    Dersom vi ender opp med Kaltura
    vil det bli brukt av mange aktører
    på UiB, Pro, forelesere, fakultet,
    KA, m.m.
    Dersom arbeidsflyten splittes mellom
    MAM og DLR kan UX bli dårlig.
    Er det en løsning å settet opp 
    "custom metadata" i MAM for lisenser 
    og annet DLR trenger?
end note

note left of channel
    Ved et byttet av MAM trenger vi å
    holde kategori-registeret. Noe for 
    BIBSYSDEV/authority-registry?
end note
@enduml
```