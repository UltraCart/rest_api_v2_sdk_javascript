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


* `accountsReceivable` (value: `"Accounts Receivable"`)

* `pendingClearance` (value: `"Pending Clearance"`)

* `fraudReview` (value: `"Fraud Review"`)

* `rejected` (value: `"Rejected"`)

* `shippingDepartment` (value: `"Shipping Department"`)

* `completedOrder` (value: `"Completed Order"`)

* `quoteRequest` (value: `"Quote Request"`)

* `quoteSent` (value: `"Quote Sent"`)

* `leastCostRouting` (value: `"Least Cost Routing"`)

* `unknown` (value: `"Unknown"`)




<a name="PaymentMethodEnum"></a>
## Enum: PaymentMethodEnum


* `affirm` (value: `"Affirm"`)

* `amazon` (value: `"Amazon"`)

* `amazonSC` (value: `"Amazon SC"`)

* `cash` (value: `"Cash"`)

* `check` (value: `"Check"`)

* `COD` (value: `"COD"`)

* `creditCard` (value: `"Credit Card"`)

* `eCheck` (value: `"eCheck"`)

* `loanHero` (value: `"LoanHero"`)

* `moneyOrder` (value: `"Money Order"`)

* `payPal` (value: `"PayPal"`)

* `purchaseOrder` (value: `"Purchase Order"`)

* `quoteRequest` (value: `"Quote Request"`)

* `unknown` (value: `"Unknown"`)

* `wireTransfer` (value: `"Wire Transfer"`)




