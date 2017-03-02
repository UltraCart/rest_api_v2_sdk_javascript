# UltraCartRestApiV2.OrderPaymentECheck

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bankAbaCode** | **String** | Bank routing code | [optional] 
**bankAccountName** | **String** | Bank account name | [optional] 
**bankAccountNumber** | **String** | Bank account number (masked to last 4) | [optional] 
**bankAccountType** | **String** | Bank account type | [optional] 
**bankName** | **String** | Bank name | [optional] 
**bankOwnerType** | **String** | Bank owner type | [optional] 
**customerTaxId** | **String** | Customer tax id (masked to last 4) | [optional] 
**driversLicenseDob** | **String** | Driver license date of birth | [optional] 
**driversLicenseNumber** | **String** | Driver license number (masked to last 4) | [optional] 
**driversLicenseState** | **String** | Driver license state | [optional] 


<a name="BankAccountTypeEnum"></a>
## Enum: BankAccountTypeEnum


* `Checking` (value: `"Checking"`)

* `Savings` (value: `"Savings"`)




<a name="BankOwnerTypeEnum"></a>
## Enum: BankOwnerTypeEnum


* `Personal` (value: `"Personal"`)

* `Business` (value: `"Business"`)




