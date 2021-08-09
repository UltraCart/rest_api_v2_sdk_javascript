# UltraCartRestApiV2.PaymentsConfigurationCreditCard

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accept_credit_card** | **Boolean** | Master flag indicating whether this merchant accepts credit card payments | [optional] 
**billed_by** | **String** | Description that appears on customer statements | [optional] 
**charge_during_checkout** | **Boolean** | If false, order will be accepted and placed into Accounts Receivable without charging card first | [optional] 
**collect_cvv2** | **Boolean** | UltraCart will require customer to enter cvv if this is true | [optional] 
**configured_gateway_details** | **String** | Human readable description of the credit card gateway currently configured | [optional] 
**failed_attempts** | **Number** | The number of failed attempts before the order is placed into Accounts Receivable for manual intervention | [optional] 
**hide_connect_single_gateway** | **Boolean** | This internal flag aids the UI in determining which buttons to show. | [optional] 
**restrictions** | [**[PaymentsConfigurationRestrictions]**](PaymentsConfigurationRestrictions.md) | Restrictions for this payment method | [optional] 
**send_customer_billing_update_on_decline** | **Boolean** | UltraCart will send customers emails to update their credit card if the card is declined | [optional] 
**supported_cards** | [**[PaymentsConfigurationCreditCardType]**](PaymentsConfigurationCreditCardType.md) | A list of credit cards the merchant wishes to accept. | [optional] 
**test_methods** | [**[PaymentsConfigurationTestMethod]**](PaymentsConfigurationTestMethod.md) | An array of test methods for placing test orders.  The cards defined here may be real or fake, but any order placed with them will be marked as Test orders | [optional] 


