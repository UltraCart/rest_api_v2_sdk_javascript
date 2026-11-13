# UltraCartRestApiV2.SfvbSearchFacetsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changed_facets** | **[String]** | After a change, the facets it changed. | [optional] 
**cost_price_points** | **[Number]** | The Cost facet price breaks, smallest first. | [optional] 
**dry_run** | **Boolean** | True when nothing was saved. | [optional] 
**facets** | [**[SfvbSearchFacet]**](SfvbSearchFacet.md) | Every facet the storefront can offer, in the fixed order shoppers see them. | [optional] 
**hash_sha256** | **String** | Hash of the facets and price points.  Send it as If-Match on a change. | [optional] 
**price_points_changed** | **Boolean** | After a change, true when the price points changed. | [optional] 
**rebuild** | **String** | After a change, the search index rebuild it started.  none, quick (minutes, small catalogs), slow (the regular rebuild cycle) or failed (the change is saved but the rebuild could not be started; save again or contact support). | [optional] 


