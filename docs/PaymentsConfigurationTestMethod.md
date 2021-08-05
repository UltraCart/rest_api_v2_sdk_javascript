# UltraCartRestApiV2.PaymentsConfigurationTestMethod

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bank_account_number** | **String** | Bank account number | [optional] 
**bank_routing_number** | **String** | Bank routing number | [optional] 
**credit_card_number** | **String** | Credit card number | [optional] 
**credit_card_number_existing** | **String** | The existing credit card number | [optional] 
**description** | **String** | Description | [optional] 
**payment_action** | **String** | Payment action | [optional] 
**payment_method** | **String** | Payment method | [optional] 
**payment_method_test_oid** | **Number** | Payment method test oid | [optional] 
**skip_affiliate_transaction** | **Boolean** | Skip affiliate transaction | [optional] 
**skip_conversion_pixels** | **Boolean** | If true, skips recording any conversion pixels to avoid sending test orders to your analysis sites | [optional] 
**skip_fraud_filter** | **Boolean** | Skip fraud filter | [optional] 


<a name="PaymentActionEnum"></a>
## Enum: PaymentActionEnum


* `skip_payment` (value: `"skip payment"`)

* `skip_pmt_rej` (value: `"skip pmt rej"`)

* `skip_pmt_co` (value: `"skip pmt co"`)

* `hold_in_ar` (value: `"hold in ar"`)




