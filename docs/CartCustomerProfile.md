# UltraCartRestApiV2.CartCustomerProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_3rd_party_billing** | **Boolean** | True if profile is allowed to bill to their 3rd party shipping account | [optional] 
**allow_cod** | **Boolean** | True if this profile is allowed to use a COD | [optional] 
**allow_purchase_order** | **Boolean** | True if this profile is allowed to use a purchase order | [optional] 
**billing_addresses** | [**[CartCustomerProfileAddress]**](CartCustomerProfileAddress.md) | Billing addresses on file for this profile | [optional] 
**credit_cards** | [**[CartCustomerProfileCreditCard]**](CartCustomerProfileCreditCard.md) | Credit cards on file for this profile (masked) | [optional] 
**customer_profile_oid** | **Number** | Unique identifier | [optional] 
**dhl_account_number** | **String** | DHL account number on file | [optional] 
**dhl_duty_account_number** | **String** | DHL duty account number on file | [optional] 
**email** | **String** | Email | [optional] 
**fedex_account_number** | **String** | FedEx account number on file | [optional] 
**free_shipping** | **Boolean** | True if this profile always qualifies for free shipping | [optional] 
**free_shipping_minimum** | **Number** | The minimum amount that this profile has to purchase to qualify for free shipping | [optional] 
**maximum_item_count** | **Number** | Maximum item count this profile can purchase | [optional] 
**minimum_item_count** | **Number** | Minimum item count this profile must purchase | [optional] 
**minimum_subtotal** | **Number** | Minimum subtotal this profile must purchase | [optional] 
**no_coupons** | **Boolean** | True if this profile is prevented from using coupons | [optional] 
**no_free_shipping** | **Boolean** | True if this profile is never given free shipping | [optional] 
**no_realtime_charge** | **Boolean** | True if this customers orders are not charged in real-time | [optional] 
**pricing_tiers** | **[String]** | Pricing tier names this profile qualifies for | [optional] 
**shipping_addresses** | [**[CartCustomerProfileAddress]**](CartCustomerProfileAddress.md) | Shipping addresses on file for this profile | [optional] 
**signup_dts** | **String** | Signup date | [optional] 
**tax_exempt** | **Boolean** | True if this profile is exempt from sales tax | [optional] 
**ups_account_number** | **String** | UPS account number on file | [optional] 


