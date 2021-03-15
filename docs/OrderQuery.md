# UltraCartRestApiV2.OrderQuery

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cc_email** | **String** | CC Email | [optional] 
**channel_partner_code** | **String** | The code of the channel partner | [optional] 
**channel_partner_order_id** | **String** | The order ID assigned by the channel partner for this order | [optional] 
**city** | **String** | City | [optional] 
**company** | **String** | Company | [optional] 
**country_code** | **String** | ISO-3166 two letter country code | [optional] 
**creation_date_begin** | **String** | Date/time that the order was created | [optional] 
**creation_date_end** | **String** | Date/time that the order was created | [optional] 
**current_stage** | **String** | Current stage that the order is in. | [optional] 
**custom_field_1** | **String** | Custom field 1 | [optional] 
**custom_field_2** | **String** | Custom field 2 | [optional] 
**custom_field_3** | **String** | Custom field 3 | [optional] 
**custom_field_4** | **String** | Custom field 4 | [optional] 
**custom_field_5** | **String** | Custom field 5 | [optional] 
**custom_field_6** | **String** | Custom field 6 | [optional] 
**custom_field_7** | **String** | Custom field 7 | [optional] 
**customer_profile_oid** | **Number** | The customer profile to find associated orders for | [optional] 
**email** | **String** | Email | [optional] 
**first_name** | **String** | First name | [optional] 
**item_id** | **String** | Item ID | [optional] 
**last_name** | **String** | Last name | [optional] 
**order_id** | **String** | Order ID | [optional] 
**payment_date_begin** | **String** | Date/time that the order was successfully processed | [optional] 
**payment_date_end** | **String** | Date/time that the order was successfully processed | [optional] 
**payment_method** | **String** | Payment method | [optional] 
**phone** | **String** | Phone | [optional] 
**postal_code** | **String** | Postal code | [optional] 
**purchase_order_number** | **String** | Purchase order number | [optional] 
**refund_date_begin** | **String** | Date/time that the order was refunded | [optional] 
**refund_date_end** | **String** | Date/time that the order was refunded | [optional] 
**rma** | **String** | RMA number | [optional] 
**screen_branding_theme_code** | **String** | Screen branding theme code associated with the order (legacy checkout) | [optional] 
**shipment_date_begin** | **String** | Date/time that the order was shipping | [optional] 
**shipment_date_end** | **String** | Date/time that the order was shipped | [optional] 
**state_region** | **String** | State for United States otherwise region or province for other countries | [optional] 
**storefront_host_name** | **String** | StoreFront host name associated with the order | [optional] 
**total** | **Number** | Total | [optional] 


<a name="CurrentStageEnum"></a>
## Enum: CurrentStageEnum


* `Accounts_Receivable` (value: `"Accounts Receivable"`)

* `Pending_Clearance` (value: `"Pending Clearance"`)

* `Fraud_Review` (value: `"Fraud Review"`)

* `Rejected` (value: `"Rejected"`)

* `Shipping_Department` (value: `"Shipping Department"`)

* `Completed_Order` (value: `"Completed Order"`)

* `Quote_Request` (value: `"Quote Request"`)

* `Quote_Sent` (value: `"Quote Sent"`)

* `Least_Cost_Routing` (value: `"Least Cost Routing"`)

* `Unknown` (value: `"Unknown"`)




<a name="PaymentMethodEnum"></a>
## Enum: PaymentMethodEnum


* `Affirm` (value: `"Affirm"`)

* `Amazon` (value: `"Amazon"`)

* `Amazon_SC` (value: `"Amazon SC"`)

* `Cash` (value: `"Cash"`)

* `Check` (value: `"Check"`)

* `COD` (value: `"COD"`)

* `Credit_Card` (value: `"Credit Card"`)

* `eCheck` (value: `"eCheck"`)

* `LoanHero` (value: `"LoanHero"`)

* `Money_Order` (value: `"Money Order"`)

* `PayPal` (value: `"PayPal"`)

* `Purchase_Order` (value: `"Purchase Order"`)

* `Quote_Request` (value: `"Quote Request"`)

* `Unknown` (value: `"Unknown"`)

* `Wire_Transfer` (value: `"Wire Transfer"`)




