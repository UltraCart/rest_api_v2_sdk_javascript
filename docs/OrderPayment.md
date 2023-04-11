# UltraCartRestApiV2.OrderPayment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check** | [**OrderPaymentCheck**](OrderPaymentCheck.md) |  | [optional] 
**credit_card** | [**OrderPaymentCreditCard**](OrderPaymentCreditCard.md) |  | [optional] 
**echeck** | [**OrderPaymentECheck**](OrderPaymentECheck.md) |  | [optional] 
**hold_for_fraud_review** | **Boolean** | True if order has been held for fraud review | [optional] 
**insurance** | [**OrderPaymentInsurance**](OrderPaymentInsurance.md) |  | [optional] 
**payment_dts** | **String** | Date/time that the payment was successfully processed, for new orders, this field is only considered if channel_partner.skip_payment_processing is true | [optional] 
**payment_method** | **String** | Payment method | [optional] 
**payment_method_accounting_code** | **String** | Payment method QuickBooks code | [optional] 
**payment_method_deposit_to_account** | **String** | Payment method QuickBooks deposit account | [optional] 
**payment_status** | **String** | Payment status | [optional] 
**purchase_order** | [**OrderPaymentPurchaseOrder**](OrderPaymentPurchaseOrder.md) |  | [optional] 
**rotating_transaction_gateway_code** | **String** | Rotating transaction gateway code used to process this order | [optional] 
**surcharge** | [**Currency**](Currency.md) |  | [optional] 
**surcharge_accounting_code** | **String** | Surcharge accounting code | [optional] 
**surcharge_transaction_fee** | **Number** | Surcharge transaction fee | [optional] 
**surcharge_transaction_percentage** | **Number** | Surcharge transaction percentage | [optional] 
**test_order** | **Boolean** | True if this is a test order | [optional] 
**transactions** | [**[OrderPaymentTransaction]**](OrderPaymentTransaction.md) | Transactions associated with processing this payment | [optional] 


<a name="PaymentMethodEnum"></a>
## Enum: PaymentMethodEnum


* `Affirm` (value: `"Affirm"`)

* `Amazon` (value: `"Amazon"`)

* `Amazon_SC` (value: `"Amazon SC"`)

* `Cash` (value: `"Cash"`)

* `Check` (value: `"Check"`)

* `COD` (value: `"COD"`)

* `Credit_Card` (value: `"Credit Card"`)

* `eBay` (value: `"eBay"`)

* `eCheck` (value: `"eCheck"`)

* `Google_Shopping` (value: `"Google Shopping"`)

* `Insurance` (value: `"Insurance"`)

* `LoanHero` (value: `"LoanHero"`)

* `Money_Order` (value: `"Money Order"`)

* `PayPal` (value: `"PayPal"`)

* `Purchase_Order` (value: `"Purchase Order"`)

* `Quote_Request` (value: `"Quote Request"`)

* `Unknown` (value: `"Unknown"`)

* `Wire_Transfer` (value: `"Wire Transfer"`)

* `Walmart` (value: `"Walmart"`)

* `Shop_com` (value: `"Shop.com"`)

* `Sezzle` (value: `"Sezzle"`)




<a name="PaymentStatusEnum"></a>
## Enum: PaymentStatusEnum


* `Unprocessed` (value: `"Unprocessed"`)

* `Authorized` (value: `"Authorized"`)

* `Capture_Failed` (value: `"Capture Failed"`)

* `Processed` (value: `"Processed"`)

* `Declined` (value: `"Declined"`)

* `Voided` (value: `"Voided"`)

* `Refunded` (value: `"Refunded"`)

* `Skipped` (value: `"Skipped"`)




