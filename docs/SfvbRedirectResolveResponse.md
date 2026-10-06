# UltraCartRestApiV2.SfvbRedirectResolveResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**final_path** | **String** | Where the shopper ends up.  The storefront sends them straight there in one redirect. | [optional] 
**final_status** | **String** | The status the shopper gets, 301, 302, rewrite, or none when no rule matches. | [optional] 
**lands_on** | **String** | live_page, hidden_page, item, not_found or other (a file or system path). | [optional] 
**path** | **String** | The path asked about. | [optional] 
**steps** | [**[SfvbRedirectResolveStep]**](SfvbRedirectResolveStep.md) | Each redirect followed, in order.  Empty when no rule matches. | [optional] 
**too_long** | **Boolean** | True when the chain is longer than the storefront follows. | [optional] 


