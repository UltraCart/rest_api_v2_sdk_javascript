# UltraCartRestApiV2.SfvbSmartAttribution

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assist_percent** | **Number** | The global assist credit, 0 to 1. | [optional] 
**attribution_model** | **String** | position_based, linear, time_decay or custom. | [optional] 
**available_platforms** | [**[SfvbSmartAttributionPlatform]**](SfvbSmartAttributionPlatform.md) | Platforms detected from the storefront&#39;s tracking integrations that are not configured yet, with suggested settings. | [optional] 
**closer_percent** | **Number** | The global closer credit, 0 to 1. | [optional] 
**configured** | **Boolean** | True when the storefront has a saved configuration.  When false, the other fields are the defaults an enable would save. | [optional] 
**hash_sha256** | **String** | The hash of the configuration.  Send it as If-Match when changing or deleting it. | [optional] 
**lookback_days** | **Number** | How many days of a shopper&#39;s visits count toward an order, 7 to 365. | [optional] 
**mode** | **String** | disabled, report_only (decisions are recorded but every platform reports as before) or active (Smart Attribution decides whether each platform&#39;s conversion fires and what value it reports). | [optional] 
**originator_percent** | **Number** | The global originator credit, 0 to 1.  The three global percentages total exactly 1. | [optional] 
**platforms** | [**[SfvbSmartAttributionPlatform]**](SfvbSmartAttributionPlatform.md) | The configured platforms. | [optional] 
**storefront_oid** | **Number** | The storefront this configuration belongs to. | [optional] 


