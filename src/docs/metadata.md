---
path: "/metadata"
title: "Metadata"
---

<iframe src="//slides.com/tarjelavik/metadata-llor-kk/embed" width="800" height="620" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Krav

* Kompatibel med [Datacite skjemaet](https://schema.datacite.org/) ([video-xml](https://schema.datacite.org/meta/kernel-4.3/example/datacite-example-video-v4.xml), [komplett-xml](https://schema.datacite.org/meta/kernel-4.3/example/datacite-example-full-v4.xml))
  * Noe DLR og UNIT ordner?
* Være mulig å implementere i MAM
  * Kaltura kan tilpasses, men har noe begrenset funksjonalitet
* Kompatibel med Kunnskapskanalens metadata-skjema
* Bør kunne benytte eksterne autoritetslister
  * Kategori-, person-, stedsregister...


## Sammenligning

Tabellen nedenfor er hentet fra [dette regnearket](https://universityofbergen.sharepoint.com/:x:/r/sites/TEAM_LagringogLOR_Project/_layouts/15/Doc.aspx?sourcedoc=%7BBA101562-CDFE-4D83-B580-BEA60204F5A9%7D&file=Sammenligning%20av%20registreringsfelt.xlsx&action=default&mobileredirect=true). I tabellen er det to metadatastandarder, KK og Netflix, og kolonner hentet fra regneark som brukes til å registrere data i dag. 

Netflixs skjema er laget for å håndtere metadata på flere språk for distribusjon i flere land, samt håndtering av serier og så enkelt som mulig kunne lage brukergrensesnitt. Det er ikke mange serier registrert i UiBs regneark, men det er nok til å inkludere dette i metadataskjemaet.

Registreringen av personer bør også håndteres på en bedre måte. Det bør enten være kolonner for de rollene man ønsker å registrere (skaper, regi, film, lyd, skuespiller) eller så bør det være én kolonne der person og rolle kombineres (f.eks.: "Tarje Lavik, regissør||Frode Ims, foto").

<style type="text/css">
	table.tableizer-table {
		font-size: 12px;
		border: 1px solid #CCC; 
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
	} 
	.tableizer-table td {
		padding: 4px;
		margin: 3px;
		border: 1px solid #CCC;
	}
	.tableizer-table th {
    font-weight: bold;
    padding: 4px;
    margin: 3px;
    border: 1px solid #CCC;
	}
</style>
<table class="tableizer-table"> <thead><tr class="tableizer-firstrow"><th>KK</th><th>HD-Tivoli</th><th>Mastertape</th><th>Youtube</th><th>Vimeo</th><th>Netflix</th><th>Standardisert</th><th>Kommentar</th></tr></thead><tbody> <tr><td>&nbsp;</td><td>Ref. #</td><td>Tape nr.</td><td>Ref. #</td><td>Ref. #</td><td>PartnerCatalogID</td><td>dct.identifier</td><td>&nbsp;</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>WorkType</td><td>&nbsp;</td><td>movie, series, season, episode</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>EidrID</td><td>&nbsp;</td><td>&nbsp;</td></tr> <tr><td>Tittel</td><td>Programtittel</td><td>Programtittel</td><td>Tittel </td><td>Tittel </td><td>Title</td><td>dct.title</td><td>Localized title for the indicated country (do not leave blank)</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>OriginalTitle</td><td>&nbsp;</td><td>Original title of the movie in its original language</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>LanguageOfOriginalTitle</td><td>&nbsp;</td><td>&nbsp;</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>LanguageOfMetadata</td><td>&nbsp;</td><td>&nbsp;</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>SeriesTitle</td><td>&nbsp;</td><td>&nbsp;</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>SeasonNumber</td><td>&nbsp;</td><td>&nbsp;</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>EpisodeNumber</td><td>&nbsp;</td><td>&nbsp;</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>CountryOfMetadata</td><td>&nbsp;</td><td>&nbsp;</td></tr> <tr><td>Publisert dato</td><td>&nbsp;</td><td>&nbsp;</td><td>Opplastningsdato</td><td>Opplastningsdato</td><td>&nbsp;</td><td>dct:available</td><td>&nbsp;</td></tr> <tr><td>Dato</td><td>Prod. dato</td><td>Dato</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>dct:created</td><td>&nbsp;</td></tr> <tr><td>&nbsp;</td><td>Arkivert</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>Dato for når prosjektet ble lagret i Tivoli, viktig for gjenfinning</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td>Merknader</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>ebucore:comment</td><td>Intern?</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td>merknad</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>ebucore:comment</td><td>Intern?</td></tr> <tr><td>Innhold</td><td>Innhold</td><td>Innhold</td><td>&nbsp;</td><td>&nbsp;</td><td>Synopsis</td><td>ebucore:abstract / dct:description</td><td>&nbsp;</td></tr> <tr><td>Personer</td><td>Personer</td><td>Personer</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>???</td><td>Personer som er med i video</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>Creator</td><td>&nbsp;</td><td>&nbsp;</td></tr> <tr><td>&nbsp;</td><td>Produsent/Regi</td><td>Produsent</td><td>&nbsp;</td><td>&nbsp;</td><td>Director</td><td>dct:creator</td><td>&nbsp;</td></tr> <tr><td>&nbsp;</td><td>Lyd</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>ex:soundBy</td><td>&nbsp;</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>Actors</td><td>&nbsp;</td><td>&nbsp;</td></tr> <tr><td>&nbsp;</td><td>Foto</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>FirstReleaseYear</td><td>ex:videoBy</td><td>&nbsp;</td></tr> <tr><td>Bestiller</td><td>Oppdragsgiver</td><td>Oppdragsgiver</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>ex:commissionedBy</td><td>&nbsp;</td></tr> <tr><td>Fakultet</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>ex:faculty</td><td>&nbsp;</td></tr> <tr><td>Organisasjon</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>ex:organisation</td><td>&nbsp;</td></tr> <tr><td>Stab</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>Hva menes med denne? De som har jobbet med objektet? I hvilke roller?</td></tr> <tr><td>Sted</td><td>Opptaksted</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>CountryOfOrigin</td><td>dc:spatial</td><td>&nbsp;</td></tr> <tr><td>Fagområde</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>Tags</td><td>&nbsp;</td><td>dc:subject</td><td>&nbsp;</td></tr> <tr><td>&nbsp;</td><td>Emne</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>???</td><td>Inneholder ofte bare tittelen</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>Album</td><td>&nbsp;</td><td>dct:isPartOf</td><td>&nbsp;</td></tr> <tr><td>Størrelse/Lengde</td><td>Lengde</td><td>Tid</td><td>Lengde</td><td>Lengde</td><td>&nbsp;</td><td>ebucore:duration</td><td>Her er tid og filstørrelse blandet hos KK</td></tr> <tr><td>Format</td><td>Format</td><td>Format</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>dc:format</td><td>Tekststreng, men er nok mulig å finne en autoritativ liste over format</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td>Digitalisert</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>ex:isDigitised</td><td>Bør være boolsk, men inneholder, "X Frode", "Ikke spillbar", "-" og "C"</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td>Generasjon</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>ebucore:hasGeneration</td><td>&nbsp;</td></tr> <tr><td>Fil/Tape</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>ebucore:filename</td><td>Filnavn?</td></tr> <tr><td>Publisert (hyperlink)</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>edm:isShownAt</td><td>&nbsp;</td></tr> <tr><td>&nbsp;</td><td>Rettigheter</td><td>Rettigheter</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>dc:rights</td><td>&nbsp;</td></tr> <tr><td>Tilgang</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>ex:accessRights</td><td>&nbsp;</td></tr> <tr><td>Vedlegg</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>Samtykke og rettigheter som eksempler i dokumentasjon</td></tr> <tr><td>&nbsp;</td><td>Arikvert (Billy)</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>Tom</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td>Råstoff?</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>Tom</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>Genre</td><td>&nbsp;</td><td>&nbsp;</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>OriginalLanguage</td><td>&nbsp;</td><td>&nbsp;</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>ReleaseCountryDate</td><td>&nbsp;</td><td>&nbsp;</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>ReleaseCountry</td><td>&nbsp;</td><td>&nbsp;</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>ReleaseCountryType</td><td>&nbsp;</td><td>&nbsp;</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>Distributor </td><td>&nbsp;</td><td>&nbsp;</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>RatingSystem</td><td>&nbsp;</td><td>&nbsp;</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>RatingValue</td><td>&nbsp;</td><td></td></tr> </tbody></table>

## Datacite

```xml
<resource 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns="http://datacite.org/schema/kernel-4" 
  xsi:schemaLocation="http://datacite.org/schema/kernel-4 
  http://schema.datacite.org/meta/kernel-4.3/metadata.xsd">
  <identifier identifierType="DOI">10.5072/1153992</identifier>
  <creators>
    <creator>
      <creatorName nameType="Personal">Lynn, Briscoe</creatorName>
      <givenName>Briscoe</givenName>
      <familyName>Lynn</familyName>
    </creator>
  </creators>
  <titles>
    <title xml:lang="en">Walking Your Space, Evaluating Your Home</title>
    <title xml:lang="en" titleType="Subtitle">Making Energy Efficiency Work for You</title>
  </titles>
  <publisher xml:lang="en">Photovoltaic Institute</publisher>
  <publicationYear>2013</publicationYear>
  <subjects>
    <subject xml:lang="en">Solar Energy</subject>
  </subjects>
  <language>en</language>
  <resourceType resourceTypeGeneral="Audiovisual">narrated video</resourceType>
  <formats>
    <format>MP4</format>
  </formats>
  <descriptions>
    <description xml:lang="en" descriptionType="Abstract">
      This hour-long video features John Halter as the narrator. Mr. Halter is best known as a 
      journalist rather than a TV star, and here he plays that role as he does an "expose" type 
      of walkthrough a new home. The home has been advertised as a house with the very latest in 
      state-of-the art energy efficiency, especially solar. Mr. Halter puts the home through an 
      investigation and determines that it can, indeed, live up to its claims.
    </description>
  </descriptions>
</resource>
```

## Netflix

- [Eksempel metadata-regneark](https://drive.google.com/file/d/0B9DJydDVOVKKUU5EeURzMnFoUDQ/edit)


```json
[
  {
    "Column": "EidrID",
    "Definition": "Entertainment ID Registry (EIDR) ID (if registered)",
    "Formats or Values": "See http://www.eidr.org. In accordance with [ISO26324] and [EIDR-TO] - Example: md:cid:EIDR"
  },
  {
    "Column": "PartnerCatalogID",
    "Definition": "Unique ID internal to the content partner",
    "Formats or Values": "Example: md:cid:org:Content Partner:12345ABCDEF"
  },
  {
    "Column": "LanguageOfMetadata",
    "Definition": "Language of the metadata provided on that line",
    "Formats or Values": "Select from dropdown list"
  },
  {
    "Column": "CountryOfMetadata",
    "Definition": "Country for which you're entering metadata",
    "Formats or Values": "Select from dropdown list"
  },
  {
    "Column": "WorkType",
    "Definition": "Movie: A full-length movie regardless of distribution (e.g., theatrical, TV, 
    direct to disc, etc.) and content (e.g., includes documentaries).
    Series: a show that might span one or more seasons or might be a miniseries.
    Season: a season of a Series. It will contain one more episodes. 
    Episode: an episodes of a season or miniseries. A pilot is also an episode.",
    "Formats or Values": "Select from dropdown list"
  },
  {
    "Column": "Title",
    "Definition": "Localized title for the indicated country (do not leave blank)",
    "Formats or Values": ""
  },
  {
    "Column": "OriginalTitle",
    "Definition": "Original title of the movie in its original language",
    "Formats or Values": ""
  },
  {
    "Column": "LanguageOfOriginalTitle",
    "Definition": "Language of the original title itself (e.g., if the original title is La vita è bella, indicate Italian)",
    "Formats or Values": "Select from dropdown list"
  },
  {
    "Column": "SeriesTitle",
    "Definition": "If entering TV content, indicate the series or show title",
    "Formats or Values": ""
  },
  {
    "Column": "SeasonNumber",
    "Definition": "Season (or volume, series, etc.) sequence within the series as it should appear in the country (if applicable)",
    "Formats or Values": "Numeric value"
  },
  {
    "Column": "EpisodeNumber",
    "Definition": "Episode sequence within the season  as it should appear in the country (if applicale)",
    "Formats or Values": "Numeric value"
  },
  {
    "Column": "Synopsis",
    "Definition": "Synopsis or summary of the content; only one language per title required, preferably English",
    "Formats or Values": ""
  },
  {
    "Column": "FirstReleaseYear",
    "Definition": "Year in which content had its first release anywhere (not production year)",
    "Formats or Values": "YYYY"
  },
  {
    "Column": "ReleaseCountryDate",
    "Definition": "Year or Date of theatrical release, original broadcast date, DVD street date or 
    VOD/streaming date IN TERRITORY (Release Date must be accompanied by a Release Country and 
    a Release Type; see next two fields). Required if supplying a KCC rating to Netflix.",
    "Formats or Values": "YYYY or YYYY-MM-DD"
  },
  {
    "Column": "ReleaseCountry",
    "Definition": "Country that release date and release type applies to 
    (Release Country must be accompanied by a Release Date and a Release Type)",
    "Formats or Values": "Select from dropdown list"
  },
  {
    "Column": "ReleaseCountryType",
    "Definition": "Theatrical, Broadcast, DVD Street, Streaming (Release Type must be 
    accompanied by a Release Country and a Release Date)",
    "Formats or Values": "Select from dropdown list"
  },
  {
    "Column": "Distributor ",
    "Definition": "Required data point if providing Korea KCC ratings to Netflix. Distributor is 
    the Korea broadcaster channel  where the title aired. ",
    "Formats or Values": "Select from dropdown list"
  },
  {
    "Column": "CountryOfOrigin",
    "Definition": "Country in which the content was produced",
    "Formats or Values": "Select from dropdown list"
  },
  {
    "Column": "OriginalLanguage",
    "Definition": "Original spoken language of content; if multiple, choose majority language",
    "Formats or Values": "Select from dropdown list"
  },
  {
    "Column": "RatingSystem",
    "Definition": "Certification board from which you will be providing a rating",
    "Formats or Values": "Select from dropdown list"
  },
  {
    "Column": "RatingValue",
    "Definition": "The content provider shall provide all film/television ratings information 
    that exists for each title with respect to the territory.",
    "Formats or Values": "Ratings choices are provided to the right; if it's Not Rated, 
    leave RatingSystem and RatingValue blank.\"
    Genre,Primary genre of content,Select from dropdown list
    Director,\"Director of content (if multiple, separate by semicolons)"
  },		
  {
    "Column": "Genre",
    "Definition": "Primary genre of content",
    "Formats or Values": "Select from dropdown list"
  },
  {
    "Column": "Creator",
    "Definition": "Creator of content (if TV show) (if multiple, separate by semicolons)",
    "Formats or Values": "FirstName LastName"
  },
  {
    "Column": "Actors",
    "Definition": "Actors (if multiple, separate by semicolons)",
    "Formats or Values": "FirstName LastName"
  }
]
```