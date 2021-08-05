# UltraCartRestApiV2.PaymentsConfigurationCheck

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accept_check_orders** | **Boolean** | Master flag indicating this merchant accepts paper checks | [optional] 
**accounting_code** | **String** | Optional Quickbooks accounting code | [optional] 
**checks_payable_to** | **String** | This is who the customer makes the check out to | [optional] 
**deposit_to_account** | **String** | Optional Quickbooks deposit to account | [optional] 
**mail_to_address1** | **String** | MailTo address line 1 | [optional] 
**mail_to_address2** | **String** | MailTo address line 2 | [optional] 
**mail_to_city** | **String** | MailTo city | [optional] 
**mail_to_country** | **String** | MailTo country | [optional] 
**mail_to_name** | **String** | MailTo name | [optional] 
**mail_to_postal_code** | **String** | MailTo postal code | [optional] 
**mail_to_store** | **String** | MailTo store | [optional] 
**restrictions** | [**PaymentsConfigurationRestrictions**](PaymentsConfigurationRestrictions.md) |  | [optional] 
**test_methods** | [**[PaymentsConfigurationTestMethod]**](PaymentsConfigurationTestMethod.md) | Test methods for this payment method | [optional] 


