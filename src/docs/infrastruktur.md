---
path: "/infrastruktur"
title: "Arkitekturskisse"
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
    cloud "DLR \l(AWS)" as aws
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

## Integrasjoner med Teams, Canvas og Zoom

```plantuml 
@startuml

node Teams {
  (Legg til Kaltura \ltil ett Team) as kT 
  (Legg til Kaltura \ltil personlig konto) as kP
}

node LMS {
  (Legg til Kaltura \ltil LMS) as kLMS
  (Legg til Kaltura \ltil emne) as kLMSE
  (LTI) as lmsLti
}

node Kaltura as MAM {
  (Legg til emne-kanal \lfra LMS) as mamC
  (Legg til LMS-brukere \lmed tilgangsrettigheter) as mamA
  (LTI) as mamLti
  (Teams-\lintegrasjon) as tI
}

tI -down-> kT
tI -down-> kP

lmsLti -up-> mamC
lmsLti -up-> mamA

mamLti -down-> kLMS
mamLti -down-> kLMSE

@enduml
```

### Kaltura -> Canvas

[Kaltura video app for Canvas deployment guide](https://knowledge.kaltura.com/help/kaltura-video-app-for-canvas-deployment-guide)

[Kaltura video app for Canvas user guide](https://dyzz9obi78pm5.cloudfront.net/app/image/id/5d787d6aec161c984dde5b46/n/kaltura--video-app-for-canvas-user-guide.pdf)

### Kaltura -> Teams

<div style="max-width:608px"><div style="position:relative;padding-bottom:66.118421052632%"><iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/2249861/sp/224986100/embedIframeJs/uiconf_id/38665202/partner_id/2249861?iframeembed=true&playerId=kaltura_player&entry_id=0_oxpqe36g&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en_BE&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_ay6l5uhf" width="608" height="402" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Kaltura Player" style="position:absolute;top:0;left:0;width:100%;height:100%"></iframe></div></div>

### Kaltura -> Zoom

<div style="max-width:608px"><div style="position:relative;padding-bottom:66.118421052632%"><iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/2249861/sp/224986100/embedIframeJs/uiconf_id/38665202/partner_id/2249861?iframeembed=true&playerId=kaltura_player&entry_id=0_va4illvz&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en_BE&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_21dtdj75" width="608" height="402" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Kaltura Player" style="position:absolute;top:0;left:0;width:100%;height:100%"></iframe></div></div>

## "Scheduled" opptak

#### Kaltura
[Kaltura Lecture Capture - Scheduling Initial Setup](https://knowledge.kaltura.com/help/lecture-capture---scheduling-initial-setup)
[Kaltura Scheduling Administrator's Guide](https://knowledge.kaltura.com/help/kaltura-scheduling-administrators-guide)
[Kaltura Recording Scheduling Management](https://knowledge.kaltura.com/help/kaltura-recording-scheduling-management)
[Scheduling Management - Adding Events](https://knowledge.kaltura.com/help/scheduling-management---adding-events)

#### Panopto

[How to Prepare and Schedule a Webcast for Remote Recorders](https://support.panopto.com/s/article/Prepare-and-Schedule-a-Webcast-for-Remote-Recorders)

## Tilgangskontroll

### Kaltura

<div style="max-width:400px"><div style="position:relative;padding-bottom:71.25%"><iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/2249861/sp/224986100/embedIframeJs/uiconf_id/38665202/partner_id/2249861?iframeembed=true&playerId=kaltura_player&entry_id=0_bcdkyv5k&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en_BE&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_xyhag8r8" width="400" height="285" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Kaltura Player" style="position:absolute;top:0;left:0;width:100%;height:100%"></iframe></div></div>

