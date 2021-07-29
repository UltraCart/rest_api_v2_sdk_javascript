# UltraCartRestApiV2.TransactionGatewaysRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_credit_card_transaction_type** | **String** | The default transaction type for this merchant account | [optional] 
**gateways** | [**[TransactionGateway]**](TransactionGateway.md) |  | [optional] 
**theme_credit_card_transaction_types** | [**[PaymentsThemeTransactionType]**](PaymentsThemeTransactionType.md) | A list of the storefronts and themes for this merchant account and what type of transaction should be attempted | [optional] 


<a name="DefaultCreditCardTransactionTypeEnum"></a>
## Enum: DefaultCreditCardTransactionTypeEnum


* `and_capture` (value: `"auth and capture"`)

* `then_capture` (value: `"auth then capture"`)

* `only` (value: `"auth only"`)




