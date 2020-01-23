# UltraCartRestApiV2.OrderReplacement

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_merchant_notes_new_order** | **String** | Additional merchant notes to append to the new order | [optional] 
**additional_merchant_notes_original_order** | **String** | Additional merchant notes to append to the original order | [optional] 
**custom_field1** | **String** | Custom field 1 | [optional] 
**custom_field2** | **String** | Custom field 2 | [optional] 
**custom_field3** | **String** | Custom field 3 | [optional] 
**custom_field4** | **String** | Custom field 4 | [optional] 
**custom_field5** | **String** | Custom field 5 | [optional] 
**custom_field6** | **String** | Custom field 6 | [optional] 
**custom_field7** | **String** | Custom field 7 | [optional] 
**free** | **Boolean** | Set to true if this replacement shipment should be free for the customer. | [optional] 
**immediate_charge** | **Boolean** | Set to true if you want to immediately charge the payment on this order, otherwise it will go to Accounts Receivable. | [optional] 
**items** | [**[OrderReplacementItem]**](OrderReplacementItem.md) | Items to include in the replacement order | [optional] 
**original_order_id** | **String** | Original order id | [optional] 
**shipping_method** | **String** | Shipping method to use.  If not specified or invalid then least cost shipping will take place. | [optional] 
**skip_payment** | **Boolean** | Set to true if you want to skip the payment as if it was successful. | [optional] 


