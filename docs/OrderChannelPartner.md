# UltraCartRestApiV2.OrderChannelPartner

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_approve_purchase_order** | **Boolean** | If true, any purchase order submitted is automatically approved | [optional] 
**channel_partner_code** | **String** | The code of the channel partner | [optional] 
**channel_partner_data** | **String** | Additional data provided by the channel partner, read-only | [optional] 
**channel_partner_oid** | **Number** | Channel partner object identifier, read-only and available on existing channel orders only. | [optional] 
**channel_partner_order_id** | **String** | The order ID assigned by the channel partner for this order. | [optional] 
**ignore_invalid_shipping_method** | **Boolean** | Set to true to ignore invalid shipping method being specified.  Only applicable on inserting orders. | [optional] 
**no_realtime_payment_processing** | **Boolean** | Indicates this order should be placed in Account Receivable for later payment processing | [optional] 
**skip_payment_processing** | **Boolean** | Indicates this order was already paid for via a channel purchase and no payment collection should be attempted | [optional] 
**store_completed** | **Boolean** | Instructs UltraCart to skip shipping department and mark this order as fully complete.  This flag defaults to true.  Set this flag to false to shipped product for this order. | [optional] 
**store_if_payment_declines** | **Boolean** | If true, any failed payment will place the order in Accounts Receivable rather than rejecting it. | [optional] 
**treat_warnings_as_errors** | **Boolean** | Any warnings are raised as errors and halt the import of the order | [optional] 


