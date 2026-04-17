# UltraCartRestApiV2.OrderPaymentHealthBenefitCard

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**health_benefit_card_expiration_month** | **Number** | Health benefit card expiration month (1-12) | [optional] 
**health_benefit_card_expiration_year** | **Number** | Health benefit card expiration year (Four digit year) | [optional] 
**health_benefit_card_number** | **String** | Health benefit card number (masked to last 4) | [optional] 
**health_benefit_card_number_token** | **String** | Health benefit card number token from hosted fields used to update the health benefit card number | [optional] 
**health_benefit_card_number_truncated** | **Boolean** | True if the health benefit card has been truncated | [optional] 
**health_benefit_card_verification_number_token** | **String** | Health benefit card verification number token from hosted fields, only for import/insert of new orders, completely ignored for updates, and always null/empty for queries | [optional] 


