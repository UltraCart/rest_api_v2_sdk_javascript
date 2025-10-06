# UltraCartRestApiV2.OrderPayment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check** | [**OrderPaymentCheck**](OrderPaymentCheck.md) |  | [optional] 
**credit_card** | [**OrderPaymentCreditCard**](OrderPaymentCreditCard.md) |  | [optional] 
**echeck** | [**OrderPaymentECheck**](OrderPaymentECheck.md) |  | [optional] 
**health_benefit_card** | [**OrderPaymentHealthBenefitCard**](OrderPaymentHealthBenefitCard.md) |  | [optional] 
**hold_for_fraud_review** | **Boolean** | True if order has been held for fraud review | [optional] 
**insurance** | [**OrderPaymentInsurance**](OrderPaymentInsurance.md) |  | [optional] 
**payment_dts** | **String** | Date/time that the payment was successfully processed, for new orders, this field is only considered if channel_partner.skip_payment_processing is true | [optional] 
**payment_method** | **String** | Payment method | [optional] 
**payment_method_accounting_code** | **String** | Payment method QuickBooks code | [optional] 
**payment_method_deposit_to_account** | **String** | Payment method QuickBooks deposit account | [optional] 
**payment_status** | **String** | Payment status | [optional] 
**paypal** | [**OrderPaymentPayPal**](OrderPaymentPayPal.md) |  | [optional] 
**purchase_order** | [**OrderPaymentPurchaseOrder**](OrderPaymentPurchaseOrder.md) |  | [optional] 
**rotating_transaction_gateway_code** | **String** | Rotating transaction gateway code used to process this order | [optional] 
**surcharge** | [**Currency**](Currency.md) |  | [optional] 
**surcharge_accounting_code** | **String** | Surcharge accounting code | [optional] 
**surcharge_transaction_fee** | **Number** | Surcharge transaction fee | [optional] 
**surcharge_transaction_percentage** | **Number** | Surcharge transaction percentage | [optional] 
**test_order** | **Boolean** | True if this is a test order | [optional] 
**transactions** | [**[OrderPaymentTransaction]**](OrderPaymentTransaction.md) | Transactions associated with processing this payment | [optional] 



## Enum: PaymentMethodEnum


* `Affirm` (value: `"Affirm"`)

* `Amazon` (value: `"Amazon"`)

* `Amazon Pay` (value: `"Amazon Pay"`)

* `Amazon SC` (value: `"Amazon SC"`)

* `Cash` (value: `"Cash"`)

* `Check` (value: `"Check"`)

* `COD` (value: `"COD"`)

* `Credit Card` (value: `"Credit Card"`)

* `Crypto` (value: `"Crypto"`)

* `eBay` (value: `"eBay"`)

* `eCheck` (value: `"eCheck"`)

* `Google Shopping` (value: `"Google Shopping"`)

* `Goldbelly` (value: `"Goldbelly"`)

* `GoHighLevel` (value: `"GoHighLevel"`)

* `Insurance` (value: `"Insurance"`)

* `Link` (value: `"Link"`)

* `LoanHero` (value: `"LoanHero"`)

* `Money Order` (value: `"Money Order"`)

* `PayPal` (value: `"PayPal"`)

* `Purchase Order` (value: `"Purchase Order"`)

* `Quote Request` (value: `"Quote Request"`)

* `Unknown` (value: `"Unknown"`)

* `Wire Transfer` (value: `"Wire Transfer"`)

* `Walmart` (value: `"Walmart"`)

* `Shop.com` (value: `"Shop.com"`)

* `Sezzle` (value: `"Sezzle"`)

* `Venmo` (value: `"Venmo"`)

* `Apple Pay` (value: `"Apple Pay"`)

* `Google Pay` (value: `"Google Pay"`)

* `Health Benefit Card` (value: `"Health Benefit Card"`)

* `PayPal Fastlane` (value: `"PayPal Fastlane"`)





## Enum: PaymentStatusEnum


* `Unprocessed` (value: `"Unprocessed"`)

* `Authorized` (value: `"Authorized"`)

* `Capture Failed` (value: `"Capture Failed"`)

* `Processed` (value: `"Processed"`)

* `Declined` (value: `"Declined"`)

* `Voided` (value: `"Voided"`)

* `Refunded` (value: `"Refunded"`)

* `Skipped` (value: `"Skipped"`)




