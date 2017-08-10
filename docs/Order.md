# UltraCartRestApiV2.Order

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affiliates** | [**[OrderAffiliate]**](OrderAffiliate.md) | Affiliates if any were associated with the order.  The first one in the array sent the order and each subsequent affiliate is the recruiter that earns a downline commission. | [optional] 
**autoOrder** | [**OrderAutoOrder**](OrderAutoOrder.md) |  | [optional] 
**billing** | [**OrderBilling**](OrderBilling.md) |  | [optional] 
**buysafe** | [**OrderBuysafe**](OrderBuysafe.md) |  | [optional] 
**channelPartner** | [**OrderChannelPartner**](OrderChannelPartner.md) |  | [optional] 
**checkout** | [**OrderCheckout**](OrderCheckout.md) |  | [optional] 
**coupons** | [**[OrderCoupon]**](OrderCoupon.md) | Coupons | [optional] 
**creationDts** | **String** | Date/time that the order was created | [optional] 
**currencyCode** | **String** | Currency code that the customer used if different than the merchant&#39;s base currency code | [optional] 
**currentStage** | **String** | Current stage that the order is in. | [optional] 
**customerProfile** | [**Customer**](Customer.md) |  | [optional] 
**digitalOrder** | [**OrderDigitalOrder**](OrderDigitalOrder.md) |  | [optional] 
**edi** | [**OrderEdi**](OrderEdi.md) |  | [optional] 
**exchangeRate** | **Number** | Exchange rate at the time the order was placed if currency code is different than the base currency | [optional] 
**fraudScore** | [**OrderFraudScore**](OrderFraudScore.md) |  | [optional] 
**gift** | [**OrderGift**](OrderGift.md) |  | [optional] 
**giftCertificate** | [**OrderGiftCertificate**](OrderGiftCertificate.md) |  | [optional] 
**internal** | [**OrderInternal**](OrderInternal.md) |  | [optional] 
**items** | [**[OrderItem]**](OrderItem.md) | Items | [optional] 
**languageIsoCode** | **String** | Three letter ISO-639 language code used by the customer during the checkout if different than the default language | [optional] 
**linkedShipment** | [**OrderLinkedShipment**](OrderLinkedShipment.md) |  | [optional] 
**marketing** | [**OrderMarketing**](OrderMarketing.md) |  | [optional] 
**merchantId** | **String** | UltraCart merchant ID owning this order | [optional] 
**orderId** | **String** | Order ID | [optional] 
**payment** | [**OrderPayment**](OrderPayment.md) |  | [optional] 
**quote** | [**OrderQuote**](OrderQuote.md) |  | [optional] 
**refundDts** | **String** | If the order was refunded, the date/time that the last refund occurred | [optional] 
**rejectDts** | **String** | If the order was rejected, the date/time that the rejection occurred | [optional] 
**salesforce** | [**OrderSalesforce**](OrderSalesforce.md) |  | [optional] 
**shipping** | [**OrderShipping**](OrderShipping.md) |  | [optional] 
**summary** | [**OrderSummary**](OrderSummary.md) |  | [optional] 
**taxes** | [**OrderTaxes**](OrderTaxes.md) |  | [optional] 


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




