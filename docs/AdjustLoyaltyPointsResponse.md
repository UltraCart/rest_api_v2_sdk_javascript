# UltraCartRestApiV2.AdjustLoyaltyPointsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_points** | **Number** | The current (vested) points balance after the adjustment was made | [optional] 
**error** | [**Error**](Error.md) |  | [optional] 
**loyalty_points** | **Number** | The loyalty points adjustment that was written to the ledger | [optional] 
**metadata** | [**ResponseMetadata**](ResponseMetadata.md) |  | [optional] 
**pending_points** | **Number** | The pending (unvested) points balance after the adjustment was made | [optional] 
**success** | **Boolean** | Indicates if API call was successful | [optional] 
**warning** | [**Warning**](Warning.md) |  | [optional] 


