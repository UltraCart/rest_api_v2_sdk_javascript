# UltraCartRestApiV2.OrderRefundableResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**Error**](Error.md) |  | [optional] 
**item_level_refund_reason_required** | **Boolean** | True if the item level refund reason is required | [optional] 
**item_level_refund_reasons** | [**[OrderReason]**](OrderReason.md) | Reason codes available at the item level. | [optional] 
**item_level_return_reasons** | [**[OrderReason]**](OrderReason.md) | Return codes available at the item level. | [optional] 
**metadata** | [**ResponseMetadata**](ResponseMetadata.md) |  | [optional] 
**order_level_refund_reason_required** | **Boolean** | True if the order level refund reason is required | [optional] 
**order_level_refund_reasons** | [**[OrderReason]**](OrderReason.md) | Reason codes available at the order level. | [optional] 
**order_level_reject_reasons** | [**[OrderReason]**](OrderReason.md) | Reject codes available at the order level. | [optional] 
**refundable** | **Boolean** | Whether the order is refundable or not.  Null should be interpreted as false. | [optional] 
**success** | **Boolean** | Indicates if API call was successful | [optional] 
**warning** | [**Warning**](Warning.md) |  | [optional] 


