---
path: "/metadata"
title: "Metadata"
---

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