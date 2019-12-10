---
path: "/mam-dlr"
title: "MAM <-> DLR"
---

## Dele video lukket i emne eller LMS uten bruk av DLR

Integrasjon av MAM i LMS kan benyttes til å dele video lukket i MAM og i emner. Kaltura kan settes opp slik at LMS lager egne samlinger basert på emnene som holdes. Forelesere og studenter kan dele video lukket i det emnet. Dette kan være nyttig for å gi studenter video-tilbakemeldinger.

Disse videoene vil kunne regnes som flyktige og bli slettet automatisk, med mindre de har blitt publisert til DLR og/eller en kanal.

-> Spørsmål: Video som har blitt tilgjengeliggjort i emnegalleriet og publisert, vil de kunne bli slettet selv om de skal tas vare på?

```plantuml 
@startuml

title Vitenskapelig: MAM-DLR

|MAM|
start
    fork
        :Last opp;
    fork again
        :Express capture;
    end fork
    :Rediger video;
    :Legg til metadata 
    - tittel
    - beskrivelse
    - tags;
    :Tilgjengelig i "My media"  ;
    if (Dele?) then (Embed i tekst)
        |LMS Emne| 
        :Embed i 
        - Discussions
        - Announcements
        - Course Pages;
        stop
    else (Til alle på emnet)
        |LMS Emne|
        :Tilgjengelig i Media galleri;
        stop

@enduml
```

## Publisere video i DLR

## Alternativ der DLR overvåker en MAM-kanal

```plantuml 
@startuml

title Vitenskapelig: MAM-DLR

|MAM|
start
    :Tilgjengelig i "My media"  ;
    if (Dele med UiB/eksternt?) then (No)
        |MAM|
        stop
    else (Yes)
        |MAM|
        :Publiser til DLR-kanal;
|DLR ingester|
:Import media;
|DLR|
    :Rediger metadata;
    :Velg lisens;
    :Publiser med DOI;
|LMS Emne 1|
    :Tilgjengelig i DLR portal og LTI;
    :Embed i 
    - Discussions
    - Announcements
    - Course Pages;
    stop
@enduml
```

### Alternativ der MAM deler til hele LMS

```plantuml 
@startuml

title Vitenskapelig: MAM-DLR

|MAM|
start
    fork
        :Last opp;
    fork again
        :Express capture;
    end fork
    :Rediger video;
    :Legg til metadata 
    - tittel
    - beskrivelse
    - tags;
    :Tilgjengelig i "My media"  ;
    if (Publisere til hele LMS?) then (Yes)
        |LMS|
        :Tilgjengelig i delt bibliotek;
        detach
    else (No)
        |MAM|
        if (Publisere til emne?) then (Yes)
            |LMS Emne|
            :Tilgjengelig i Media galleri;
            detach
        else (No)
            |MAM|
            if (Embed?) then (Yes)
                |LMS Emne|
                :Embed i 
                - Discussions
                - Announcements
                - Course Pages;
                detach
            else (no)
                |MAM|
                stop
@enduml
```

## Brukstilfelle - Vitenskapelig: MAM-DLR

```plantuml 
@startuml
scale 2/3

title Vitenskapelig: MAM-DLR

rectangle Desktop {
    (Kaltura capture)
    (Legg til metadata) as metadataDesktop
    (Last opp) as uploadDesktop
}

rectangle "Mitt UiB" as mittuib {
    rectangle Kaltura {
        (Last opp) as kupload
        (Express capture) 
        (Legg til metadata) as metadata
        (Publiser til kanal) as channel
    }

    rectangle DLR {
        (Last opp) as dlrupload
        (Tilgangskontroll) as access
        (Lisensiering) as license
        (Publiser) as publish
        (Workflow?) as wf
    }
    rectangle Emne {
        (Aktivere DLR i emne) as activate
        (Sider) as sider
        (Embed DLR innhold) as ltidlr
    }
}

:Vitenskapelig: as Lecturer
:Student: as Student

Lecturer --> kupload
Lecturer ..> dlrupload
dlrupload --> wf
Lecturer --> (Kaltura capture)
Lecturer --> (Express capture) 
(Kaltura capture) --> metadataDesktop
metadataDesktop --> uploadDesktop
uploadDesktop --> Kaltura
kupload --> metadata
(Express capture) --> metadata
metadata --> channel : "[Ressurs har obligatorisk \lmetadata for DLR?]"

channel --> (DLR ingester) : "[Publisert til overvåket kanal eller kategori?]"
channel --> (Kunnskapskanalen CMS/SSG) : "[Publisert til Kunnskapskanelen]"
(DLR ingester) --> wf
(DLR ingester) ..> publish : "Kan ingester la metadata fra MAM\lstyre lisensiering og publisering?"
publish --> ltidlr
publish --> (BioCEED...)

Lecturer --> activate

note top of ltidlr
    MÅ bruke DLR til å
    embedde video i Mitt UiB.
    Det er jo poenget med DLR :-)
end note

wf --> access
access --> license
license --> publish

ltidlr --> sider

Student --> sider

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


```plantuml 
@startuml
scale 2/3

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