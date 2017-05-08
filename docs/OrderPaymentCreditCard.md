# UltraCartRestApiV2.OrderPaymentCreditCard

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardAuthTicket** | **String** | Card authorization ticket | [optional] 
**cardAuthorizationAmount** | **Number** | Card authorization amount | [optional] 
**cardAuthorizationDts** | **String** | Card authorization date/time | [optional] 
**cardAuthorizationReferenceNumber** | **String** | Card authorization reference number | [optional] 
**cardExpirationMonth** | **Integer** | Card expiration month (1-12) | [optional] 
**cardExpirationYear** | **Integer** | Card expiration year (Four digit year) | [optional] 
**cardNumber** | **String** | Card number (masked to last 4) | [optional] 
**cardNumberToken** | **String** | Card number token from hosted fields used to update the cart number | [optional] 
**cardNumberTruncated** | **Boolean** | True if the card has been truncated | [optional] 
**cardType** | **String** | Card type | [optional] 


<a name="CardTypeEnum"></a>
## Enum: CardTypeEnum


* `AMEX` (value: `"AMEX"`)

* `Diners Club` (value: `"Diners Club"`)

* `Discover` (value: `"Discover"`)

* `JCB` (value: `"JCB"`)

* `MasterCard` (value: `"MasterCard"`)

* `VISA` (value: `"VISA"`)




