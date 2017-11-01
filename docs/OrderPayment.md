# UltraCartRestApiV2.OrderPayment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check** | [**OrderPaymentCheck**](OrderPaymentCheck.md) |  | [optional] 
**creditCard** | [**OrderPaymentCreditCard**](OrderPaymentCreditCard.md) |  | [optional] 
**echeck** | [**OrderPaymentECheck**](OrderPaymentECheck.md) |  | [optional] 
**holdForFraudReview** | **Boolean** | True if order has been held for fraud review | [optional] 
**paymentDts** | **String** | Date/time that the payment was successfully processed | [optional] 
**paymentMethod** | **String** | Payment method | [optional] 
**paymentMethodAccountingCode** | **String** | Payment method QuickBooks code | [optional] 
**paymentMethodDepositToAccount** | **String** | Payment method QuickBooks deposit account | [optional] 
**paymentStatus** | **String** | Payment status | [optional] 
**purchaseOrder** | [**OrderPaymentPurchaseOrder**](OrderPaymentPurchaseOrder.md) |  | [optional] 
**rotatingTransactionGatewayCode** | **String** | Rotating transaction gateway code used to process this order | [optional] 
**surcharge** | [**Currency**](Currency.md) |  | [optional] 
**surchargeAccountingCode** | **String** | Surcharge accounting code | [optional] 
**surchargeTransactionFee** | **Number** | Surcharge transaction fee | [optional] 
**surchargeTransactionPercentage** | **Number** | Surcharge transaction percentage | [optional] 
**testOrder** | **Boolean** | True if this is a test order | [optional] 
**transactions** | [**[OrderPaymentTransaction]**](OrderPaymentTransaction.md) | Transactions associated with processing this payment | [optional] 


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

* `eBay` (value: `"eBay"`)

* `eCheck` (value: `"eCheck"`)

* `Money Order` (value: `"Money Order"`)

* `PayPal` (value: `"PayPal"`)

* `Purchase Order` (value: `"Purchase Order"`)

* `Quote Request` (value: `"Quote Request"`)

* `Unknown` (value: `"Unknown"`)

* `Wire Transfer` (value: `"Wire Transfer"`)




<a name="PaymentStatusEnum"></a>
## Enum: PaymentStatusEnum


* `Unprocessed` (value: `"Unprocessed"`)

* `Authorized` (value: `"Authorized"`)

* `Capture Failed` (value: `"Capture Failed"`)

* `Processed` (value: `"Processed"`)

* `Declined` (value: `"Declined"`)

* `Voided` (value: `"Voided"`)

* `Refunded` (value: `"Refunded"`)

* `Skipped` (value: `"Skipped"`)




