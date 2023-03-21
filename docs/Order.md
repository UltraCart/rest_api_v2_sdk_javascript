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
**point_of_sale** | [**OrderPointOfSale**](OrderPointOfSale.md) |  | [optional] 
**properties** | [**[OrderProperty]**](OrderProperty.md) | Properties, available only through update, not through insert due to the nature of how properties are handled internally | [optional] 
**quote** | [**OrderQuote**](OrderQuote.md) |  | [optional] 
**refund_dts** | **String** | If the order was refunded, the date/time that the last refund occurred | [optional] 
**refund_reason** | **String** | Refund reason code.  This can only be written during a refund operation otherwise this field is read only. | [optional] 
**reject_dts** | **String** | If the order was rejected, the date/time that the rejection occurred | [optional] 
**reject_reason** | **String** | Reject reason code.  This can only be written during a reject operation otherwise this field is read only. | [optional] 
**salesforce** | [**OrderSalesforce**](OrderSalesforce.md) |  | [optional] 
**shipping** | [**OrderShipping**](OrderShipping.md) |  | [optional] 
**summary** | [**OrderSummary**](OrderSummary.md) |  | [optional] 
**Tags** | [**[OrderTag]**](OrderTag.md) | tags, available only through update, not through insert due to the nature of how tags are handled internally | [optional] 
**taxes** | [**OrderTaxes**](OrderTaxes.md) |  | [optional] 
**utms** | [**[OrderUtm]**](OrderUtm.md) | UTM clicks.  The zero index is the most recent (last) UTM click | [optional] 


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

* `Pre_ordered` (value: `"Pre-ordered"`)

* `Advanced_Order_Routing` (value: `"Advanced Order Routing"`)

* `Hold` (value: `"Hold"`)




