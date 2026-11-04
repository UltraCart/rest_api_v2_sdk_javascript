# UltraCartRestApiV2.SfvbRedirectResolveBatchResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**not_found** | **Number** | How many paths end on a 404 (lands_on not_found), the ones to redirect or create. | [optional] 
**redirected** | **Number** | How many paths at least one rule redirects. | [optional] 
**results** | [**[SfvbRedirectResolveResponse]**](SfvbRedirectResolveResponse.md) | One result per path, in the order sent, the same as the single resolve&#39;s answer. | [optional] 
**total** | **Number** | How many paths were resolved. | [optional] 


