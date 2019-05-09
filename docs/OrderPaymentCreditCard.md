# UltraCartRestApiV2.OrderPaymentCreditCard

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_auth_ticket** | **String** | Card authorization ticket | [optional] 
**card_authorization_amount** | **Number** | Card authorization amount | [optional] 
**card_authorization_dts** | **String** | Card authorization date/time | [optional] 
**card_authorization_reference_number** | **String** | Card authorization reference number | [optional] 
**card_expiration_month** | **Number** | Card expiration month (1-12) | [optional] 
**card_expiration_year** | **Number** | Card expiration year (Four digit year) | [optional] 
**card_number** | **String** | Card number (masked to last 4) | [optional] 
**card_number_token** | **String** | Card number token from hosted fields used to update the cart number | [optional] 
**card_number_truncated** | **Boolean** | True if the card has been truncated | [optional] 
**card_type** | **String** | Card type | [optional] 
**card_verification_number_token** | **String** | Card verification number token from hosted fields, only for import/insert of new orders, completely ignored for updates, and always null/empty for queries | [optional] 


<a name="CardTypeEnum"></a>
## Enum: CardTypeEnum


* `AMEX` (value: `"AMEX"`)

* `Diners Club` (value: `"Diners Club"`)

* `Discover` (value: `"Discover"`)

* `JCB` (value: `"JCB"`)

* `MasterCard` (value: `"MasterCard"`)

* `VISA` (value: `"VISA"`)




