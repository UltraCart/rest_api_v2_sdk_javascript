# UltraCartRestApiV2.OrderPaymentECheck

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bank_aba_code** | **String** | Bank routing code | [optional] 
**bank_account_name** | **String** | Bank account name | [optional] 
**bank_account_number** | **String** | Bank account number (masked to last 4) | [optional] 
**bank_account_type** | **String** | Bank account type | [optional] 
**bank_name** | **String** | Bank name | [optional] 
**bank_owner_type** | **String** | Bank owner type | [optional] 
**customer_tax_id** | **String** | Customer tax id (masked to last 4) | [optional] 
**drivers_license_dob** | **String** | Driver license date of birth | [optional] 
**drivers_license_number** | **String** | Driver license number (masked to last 4) | [optional] 
**drivers_license_state** | **String** | Driver license state | [optional] 



## Enum: BankAccountTypeEnum


* `Checking` (value: `"Checking"`)

* `Savings` (value: `"Savings"`)





## Enum: BankOwnerTypeEnum


* `Personal` (value: `"Personal"`)

* `Business` (value: `"Business"`)




