# UltraCartRestApiV2.AutoOrderRebillResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_order** | [**AutoOrder**](AutoOrder.md) |  | [optional] 
**error** | [**Error**](Error.md) |  | [optional] 
**failure_reason** | **String** | Why the rebill attempt did not succeed | [optional] 
**metadata** | [**ResponseMetadata**](ResponseMetadata.md) |  | [optional] 
**rebill_attempted** | **Boolean** | True if a rebill was attempted during this call | [optional] 
**rebill_order_id** | **String** | The order id created by a successful rebill | [optional] 
**rebill_success** | **Boolean** | True if the rebill attempt produced an order | [optional] 
**success** | **Boolean** | Indicates if API call was successful | [optional] 
**warning** | [**Warning**](Warning.md) |  | [optional] 


