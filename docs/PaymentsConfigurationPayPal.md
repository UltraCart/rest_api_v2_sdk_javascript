# UltraCartRestApiV2.PaymentsConfigurationPayPal

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accept_paypal** | **Boolean** | Master flag that determine if PayPal is an active payment for this account | [optional] 
**accounting_code** | **String** | Optional accounting code that is set to Quickbooks when an order uses this payment method. | [optional] 
**api_password** | **String** | PayPal API password | [optional] 
**api_username** | **String** | PayPal API username | [optional] 
**certificate_on_file** | **Boolean** | (Legacy) true if there is a PayPal certificate already on file. Used to manage the internal UI | [optional] 
**deposit_to_account** | **String** | The account to deposit funds | [optional] 
**email** | **String** | The main PayPal email address | [optional] 
**environment** | **String** | PayPal configuration, live or sandbox | [optional] 
**header_image_url** | **String** | The URL for the PayPal header | [optional] 
**hide_bill_me_later** | **Boolean** | True if the Bill Me Later button should be hidden during checkout | [optional] 
**hide_express_checkout_on_view_cart** | **Boolean** | True if the PayPal express checkout button should be hidden on the view cart page.  This will force the customer to enter address information before being able to checkout with PayPal | [optional] 
**hide_for_unshipped_orders** | **Boolean** | True if PayPal should be hidden for orders with no shippable product, such as digital orders | [optional] 
**hold_in_ar** | **Boolean** | If true, PayPal orders are held in Accounts Receivable for review | [optional] 
**landing_page** | **String** | PayPal landing page | [optional] 
**mode** | **String** | The PayPal mode | [optional] 
**private_key_password** | **String** | PayPal API private key password | [optional] 
**processing_fee** | **String** | Optional additional fee to charge if PayPal is used.  It is rare for this to be used. | [optional] 
**processing_percentage** | **String** | The processing percentage charged by PayPal | [optional] 
**push_paypal** | **Boolean** | True if the internal UI should recommend opening a PayPal account | [optional] 
**restrictions** | [**PaymentsConfigurationRestrictions**](PaymentsConfigurationRestrictions.md) |  | [optional] 
**send_recurring** | **Boolean** | True if UltraCart should send recurring orders to PayPal.  There are restrictions to what PayPal will accept for recurring orders.  Be careful. | [optional] 
**short_paypal_marketing_text** | **Boolean** | Short marketing text | [optional] 
**show_card_logos_not_directly_supported** | **Boolean** | internal ui flag | [optional] 
**show_signature** | **Boolean** | Internal flag used to manage UI | [optional] 
**signature** | **String** | PayPal signature | [optional] 
**solution_type** | **String** | PayPal solution type | [optional] 
**summary_email** | **String** | The email where PayPal summaries should be sent | [optional] 
**summary_mode** | **String** | Description of what mode PayPal is operating | [optional] 
**zero_dollar_penny** | **Boolean** | Send free items to PayPal as one cent items and subtract this penny from shipping.  PayPal does not allow the sale of free items. | [optional] 


<a name="EnvironmentEnum"></a>
## Enum: EnvironmentEnum


* `Live` (value: `"Live"`)

* `Sandbox` (value: `"Sandbox"`)




<a name="LandingPageEnum"></a>
## Enum: LandingPageEnum


* `Billing` (value: `"Billing"`)

* `Login` (value: `"Login"`)




<a name="ModeEnum"></a>
## Enum: ModeEnum


* `WPPECO` (value: `"WPPECO"`)

* `WPPECDP` (value: `"WPPECDP"`)




<a name="SolutionTypeEnum"></a>
## Enum: SolutionTypeEnum


* `Sole` (value: `"Sole"`)

* `Mark` (value: `"Mark"`)




