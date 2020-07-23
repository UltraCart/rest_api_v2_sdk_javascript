# UltraCartRestApiV2.Order

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affiliates** | [**[OrderAffiliate]**](OrderAffiliate.md) | Affiliates if any were associated with the order.  The first one in the array sent the order and each subsequent affiliate is the recruiter that earns a downline commission. | [optional] 
**auto_order** | [**OrderAutoOrder**](OrderAutoOrder.md) |  | [optional] 
**billing** | [**OrderBilling**](OrderBilling.md) |  | [optional] 
**buysafe** | [**OrderBuysafe**](OrderBuysafe.md) |  | [optional] 
**channel_partner** | [**OrderChannelPartner**](OrderChannelPartner.md) |  | [optional] 
**checkout** | [**OrderCheckout**](OrderCheckout.md) |  | [optional] 
**coupons** | [**[OrderCoupon]**](OrderCoupon.md) | Coupons | [optional] 
**creation_dts** | **String** | Date/time that the order was created | [optional] 
**currency_code** | **String** | Currency code that the customer used if different than the merchant's base currency code | [optional] 
**current_stage** | **String** | Current stage that the order is in. | [optional] 
**customer_profile** | [**Customer**](Customer.md) |  | [optional] 
**digital_order** | [**OrderDigitalOrder**](OrderDigitalOrder.md) |  | [optional] 
**edi** | [**OrderEdi**](OrderEdi.md) |  | [optional] 
**exchange_rate** | **Number** | Exchange rate at the time the order was placed if currency code is different than the base currency | [optional] 
**fraud_score** | [**OrderFraudScore**](OrderFraudScore.md) |  | [optional] 
**gift** | [**OrderGift**](OrderGift.md) |  | [optional] 
**gift_certificate** | [**OrderGiftCertificate**](OrderGiftCertificate.md) |  | [optional] 
**internal** | [**OrderInternal**](OrderInternal.md) |  | [optional] 
**items** | [**[OrderItem]**](OrderItem.md) | Items | [optional] 
**language_iso_code** | **String** | Three letter ISO-639 language code used by the customer during the checkout if different than the default language | [optional] 
**linked_shipment** | [**OrderLinkedShipment**](OrderLinkedShipment.md) |  | [optional] 
**marketing** | [**OrderMarketing**](OrderMarketing.md) |  | [optional] 
**merchant_id** | **String** | UltraCart merchant ID owning this order | [optional] 
**order_id** | **String** | Order ID | [optional] 
**payment** | [**OrderPayment**](OrderPayment.md) |  | [optional] 
**properties** | [**[OrderProperty]**](OrderProperty.md) | Properties, available only through update, not through insert due to the nature of how properties are handled internally | [optional] 
**quote** | [**OrderQuote**](OrderQuote.md) |  | [optional] 
**refund_dts** | **String** | If the order was refunded, the date/time that the last refund occurred | [optional] 
**reject_dts** | **String** | If the order was rejected, the date/time that the rejection occurred | [optional] 
**salesforce** | [**OrderSalesforce**](OrderSalesforce.md) |  | [optional] 
**shipping** | [**OrderShipping**](OrderShipping.md) |  | [optional] 
**summary** | [**OrderSummary**](OrderSummary.md) |  | [optional] 
**Tags** | [**[OrderTag]**](OrderTag.md) | tags, available only through update, not through insert due to the nature of how tags are handled internally | [optional] 
**taxes** | [**OrderTaxes**](OrderTaxes.md) |  | [optional] 


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




