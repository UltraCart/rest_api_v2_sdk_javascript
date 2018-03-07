# UltraCartRestApiV2.OrderQuery

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ccEmail** | **String** | CC Email | [optional] 
**channelPartnerCode** | **String** | The code of the channel partner | [optional] 
**channelPartnerOrderId** | **String** | The order ID assigned by the channel partner for this order | [optional] 
**city** | **String** | City | [optional] 
**company** | **String** | Company | [optional] 
**countryCode** | **String** | ISO-3166 two letter country code | [optional] 
**creationDateBegin** | **String** | Date/time that the order was created | [optional] 
**creationDateEnd** | **String** | Date/time that the order was created | [optional] 
**currentStage** | **String** | Current stage that the order is in. | [optional] 
**customerProfileOid** | **Integer** | The customer profile to find associated orders for | [optional] 
**email** | **String** | Email | [optional] 
**firstName** | **String** | First name | [optional] 
**itemId** | **String** | Item ID | [optional] 
**lastName** | **String** | Last name | [optional] 
**orderId** | **String** | Order ID | [optional] 
**paymentDateBegin** | **String** | Date/time that the order was successfully processed | [optional] 
**paymentDateEnd** | **String** | Date/time that the order was successfully processed | [optional] 
**paymentMethod** | **String** | Payment method | [optional] 
**phone** | **String** | Phone | [optional] 
**postalCode** | **String** | Postal code | [optional] 
**purchaseOrderNumber** | **String** | Purchase order number | [optional] 
**rma** | **String** | RMA number | [optional] 
**screenBrandingThemeCode** | **String** | Screen branding theme code associated with the order (legacy checkout) | [optional] 
**shipmentDateBegin** | **String** | Date/time that the order was shipping | [optional] 
**shipmentDateEnd** | **String** | Date/time that the order was shipped | [optional] 
**stateRegion** | **String** | State for United States otherwise region or province for other countries | [optional] 
**storefrontHostName** | **String** | StoreFront host name associated with the order | [optional] 
**total** | **Number** | Total | [optional] 


<a name="CurrentStageEnum"></a>
## Enum: CurrentStageEnum


* `Accounts Receivable` (value: `"Accounts Receivable"`)

* `Pending Clearance` (value: `"Pending Clearance"`)

* `Fraud Review` (value: `"Fraud Review"`)

* `Rejected` (value: `"Rejected"`)

* `Shipping Department` (value: `"Shipping Department"`)

* `Completed Order` (value: `"Completed Order"`)

* `Quote Request` (value: `"Quote Request"`)

* `Quote Sent` (value: `"Quote Sent"`)

* `Least Cost Routing` (value: `"Least Cost Routing"`)

* `Unknown` (value: `"Unknown"`)




<a name="PaymentMethodEnum"></a>
## Enum: PaymentMethodEnum


* `Affirm` (value: `"Affirm"`)

* `Amazon` (value: `"Amazon"`)

* `Amazon SC` (value: `"Amazon SC"`)

* `Cash` (value: `"Cash"`)

* `Check` (value: `"Check"`)

* `COD` (value: `"COD"`)

* `Coinbase` (value: `"Coinbase"`)

* `Credit Card` (value: `"Credit Card"`)

* `eCheck` (value: `"eCheck"`)

* `LoanHero` (value: `"LoanHero"`)

* `Money Order` (value: `"Money Order"`)

* `PayPal` (value: `"PayPal"`)

* `Purchase Order` (value: `"Purchase Order"`)

* `Quote Request` (value: `"Quote Request"`)

* `Unknown` (value: `"Unknown"`)

* `Wire Transfer` (value: `"Wire Transfer"`)




