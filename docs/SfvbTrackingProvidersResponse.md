# UltraCartRestApiV2.SfvbTrackingProvidersResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**catalog_version** | **Number** | Bumped whenever a provider or field is added, removed or renamed. | [optional] 
**providers** | [**[SfvbTrackingProvider]**](SfvbTrackingProvider.md) | Every provider, Google first, in the order the admin shows them. | [optional] 
**storefront_oid** | **Number** | The storefront.  Also the target_id of a secret request for a provider secret. | [optional] 


