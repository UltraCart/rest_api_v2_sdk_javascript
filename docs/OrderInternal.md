# UltraCartRestApiV2.OrderInternal

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exported_to_accounting** | **Boolean** | True if the order has been exported to QuickBooks. If QuickBooks is not configured, then this will already be true | [optional] 
**merchant_notes** | **String** | Merchant notes.  Full notes in non-transactional mode.  Just used to write a new merchant note when transaction merchant notes enabled. | [optional] 
**placed_by_user** | **String** | If placed via the BEOE, this is the user that placed the order | [optional] 
**refund_by_user** | **String** | User that issued the refund | [optional] 
**sales_rep_code** | **String** | Sales rep code associated with the order | [optional] 
**transactional_merchant_notes** | [**[OrderTransactionalMerchantNote]**](OrderTransactionalMerchantNote.md) | Transactional merchant notes | [optional] 


