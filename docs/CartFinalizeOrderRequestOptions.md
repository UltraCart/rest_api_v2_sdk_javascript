# UltraCartRestApiV2.CartFinalizeOrderRequestOptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoApprovePurchaseOrder** | **Boolean** | Automatically approve the purchase order | [optional] 
**channelPartnerCode** | **String** | Channel partner code to associate this order with | [optional] 
**channelPartnerOid** | **Integer** | Channel partner oid to associate this order with | [optional] 
**channelPartnerOrderId** | **String** | Channel partner order id for reference | [optional] 
**considerRecurring** | **Boolean** | Consider this order a recurring order for the purposes of payment gateway recurring flag | [optional] 
**creditCardAuthorizationAmount** | **Number** | If the order was authorized outside of UltraCart, this is the amount of the authorization | [optional] 
**creditCardAuthorizationDate** | **String** | If the order was authorized outside of UltraCart, this is the date/time of the authorization | [optional] 
**creditCardAuthorizationReferenceNumber** | **String** | If the order was authorized outside of UltraCart, this is the authorization reference number | [optional] 
**noRealtimePaymentProcessing** | **Boolean** | Prevents normal real-time processing of the payment and sends the order to Accounts Receivable | [optional] 
**setupNextCart** | **Boolean** | True if the system should create another cart automatically if the current cart was logged into a profile | [optional] 
**skipPaymentProcessing** | **Boolean** | Skip payment processing and move the order on to shipping (or completed if no shipping required) | [optional] 
**storeCompleted** | **Boolean** | True the order in the completed stage | [optional] 
**storeIfPaymentDeclines** | **Boolean** | Store the order in accounts receivable if the payment declines | [optional] 


