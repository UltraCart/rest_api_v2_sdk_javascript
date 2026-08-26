# UltraCartRestApiV2.SfvbLibraryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**facets** | [**[SfvbLibraryFacet]**](SfvbLibraryFacet.md) | Available narrowing dimensions.  Send a chosen option back as facet_{name}&#x3D;{option}. | [optional] 
**firstResultNumber** | **Number** | 1-indexed position of the first result on this page. | [optional] 
**lastResultNumber** | **Number** | 1-indexed position of the last result on this page. | [optional] 
**results** | [**[SfvbLibraryEntry]**](SfvbLibraryEntry.md) | Matching library entries, without their CJSON.  Fetch a single entry to get the fragment itself. | [optional] 
**totalPages** | **Number** | Total pages available. | [optional] 
**totalResults** | **Number** | Total matches across all pages. | [optional] 


