# UltraCartRestApiV2.CartFinalizeOrderRequestOptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_approve_purchase_order** | **Boolean** | Automatically approve the purchase order | [optional] 
**channel_partner_code** | **String** | Channel partner code to associate this order with | [optional] 
**channel_partner_oid** | **Number** | Channel partner oid to associate this order with | [optional] 
**channel_partner_order_id** | **String** | Channel partner order id for reference | [optional] 
**consider_recurring** | **Boolean** | Consider this order a recurring order for the purposes of payment gateway recurring flag | [optional] 
**credit_card_authorization_amount** | **Number** | If the order was authorized outside of UltraCart, this is the amount of the authorization | [optional] 
**credit_card_authorization_date** | **String** | If the order was authorized outside of UltraCart, this is the date/time of the authorization | [optional] 
**credit_card_authorization_reference_number** | **String** | If the order was authorized outside of UltraCart, this is the authorization reference number | [optional] 
**no_realtime_payment_processing** | **Boolean** | Prevents normal real-time processing of the payment and sends the order to Accounts Receivable | [optional] 
**setup_next_cart** | **Boolean** | True if the system should create another cart automatically if the current cart was logged into a profile | [optional] 
**skip_payment_processing** | **Boolean** | Skip payment processing and move the order on to shipping (or completed if no shipping required) | [optional] 
**store_completed** | **Boolean** | True the order in the completed stage | [optional] 
**store_if_payment_declines** | **Boolean** | Store the order in accounts receivable if the payment declines | [optional] 


