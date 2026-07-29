# UltraCartRestApiV2.AutoOrderPaymentUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attempt_rebill** | **Boolean** | Attempt to rebill the auto order immediately after the payment information is updated.  Defaults to false. | [optional] 
**card_expiration_month** | **Number** | Card expiration month (1-12) | [optional] 
**card_expiration_year** | **Number** | Card expiration year (four digit) | [optional] 
**card_number_token** | **String** | Hosted field token for the credit card number.  Tokens are valid for two hours. | [optional] 
**card_type** | **String** | Credit card type.  Optional.  When the hosted field token carries the card type, the token wins. | [optional] 
**card_verification_number_token** | **String** | Hosted field token for the card verification number (CVV).  Required when the order has a vaulted card that must be re-vaulted. | [optional] 



## Enum: CardTypeEnum


* `AMEX` (value: `"AMEX"`)

* `Diners Club` (value: `"Diners Club"`)

* `Discover` (value: `"Discover"`)

* `JCB` (value: `"JCB"`)

* `MasterCard` (value: `"MasterCard"`)

* `VISA` (value: `"VISA"`)




