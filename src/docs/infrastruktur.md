---
path: "/infrastruktur"
title: "Infrastruktur"
---

En overordnet skisse over hvor mediafiler blir lagret.

* MAM levert av NORDU.net har ingen kostnader knyttet til båndbredde.
* NORDUnet kan fasilitere diskusjon på slettepolitikk.
  * Kaltura og Panopto har innstillinger for slettepolitikk. 


## Lagring av mediafiler

```plantuml 
@startuml

storage Lagring {
  storage UNIT {
    cloud "AWS" as aws
  }
  storage NORDUnet {
    database "MAM" as mam
  }
  storage "UiB ITA" {
    database "Goliat" as goliat
    database "Billy" as billy
  }
}

:Vitenskapelig: --> mam
:Pro: --> mam
:Pro: <-> goliat

mam --> aws
goliat --> billy

@enduml
```

## Integrasjoner

```plantuml 
@startuml

node Teams {
  interface "Legg til applikasjon"
  
}

node LMS {
  
}

node MAM {
  
}

@enduml
```
