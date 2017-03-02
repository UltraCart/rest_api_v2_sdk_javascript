# UltraCartRestApiV2.CartPaymentCreditCard

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardExpirationMonth** | **Integer** | Card expiration month (1-12) | [optional] 
**cardExpirationYear** | **Integer** | Card expiration year (four digit year) | [optional] 
**cardNumber** | **String** | Card number (masked to the last 4) | [optional] 
**cardNumberToken** | **String** | Hosted field token for the card number | [optional] 
**cardType** | **String** | Card type | [optional] 
**cardVerificationNumber** | **String** | Card verification number (masked) | [optional] 
**cardVerificationNumberToken** | **String** | Hosted field token for the card verification number | [optional] 
**customerProfileCreditCardId** | **Integer** | ID of the stored credit card to use | [optional] 
**storeCreditCard** | **Boolean** | True if the customer wants to store the card on their profile for future re-use | [optional] 


