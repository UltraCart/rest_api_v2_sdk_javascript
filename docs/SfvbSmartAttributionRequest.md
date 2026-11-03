# UltraCartRestApiV2.SfvbSmartAttributionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assist_percent** | **Number** | 0 to 1, at most 4 decimals. | [optional] 
**attribution_model** | **String** | position_based, linear, time_decay or custom. | [optional] 
**closer_percent** | **Number** | 0 to 1, at most 4 decimals. | [optional] 
**lookback_days** | **Number** | 7 to 365. | [optional] 
**mode** | **String** | disabled, report_only or active.  Making it active, or any change while it is active, needs an approval. | [optional] 
**originator_percent** | **Number** | 0 to 1, at most 4 decimals.  The three global percentages must total exactly 1, so send all three to change the split. | [optional] 
**platforms** | [**[SfvbSmartAttributionPlatform]**](SfvbSmartAttributionPlatform.md) | When sent, replaces the whole platform list.  Up to 100, each name and id once.  Left out, the list is unchanged. | [optional] 


