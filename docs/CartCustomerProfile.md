# UltraCartRestApiV2.CartCustomerProfile

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow3rdPartyBilling** | **Boolean** | True if profile is allowed to bill to their 3rd party shipping account | [optional] 
**allowCod** | **Boolean** | True if this profile is allowed to use a COD | [optional] 
**allowPurchaseOrder** | **Boolean** | True if this profile is allowed to use a purchase order | [optional] 
**billingAddresses** | [**[CartCustomerProfileAddress]**](CartCustomerProfileAddress.md) | Billing addresses on file for this profile | [optional] 
**creditCards** | [**[CartCustomerProfileCreditCard]**](CartCustomerProfileCreditCard.md) | Credit cards on file for this profile (masked) | [optional] 
**customerProfileOid** | **Integer** | Unique identifier | [optional] 
**dhlAccountNumber** | **String** | DHL account number on file | [optional] 
**email** | **String** | Email | [optional] 
**fedexAccountNumber** | **String** | FedEx account number on file | [optional] 
**freeShipping** | **Boolean** | True if this profile always qualifies for free shipping | [optional] 
**freeShippingMinimum** | **Number** | The minimum aount that this profile has to purchase to qualify for free shipping | [optional] 
**maximumItemCount** | **Integer** | Maximum item count this profile can purchase | [optional] 
**minimumItemCount** | **Integer** | Minimum item count this profile must purchase | [optional] 
**minimumSubtotal** | **Number** | Minimum subtotal this profile must purchase | [optional] 
**noCoupons** | **Boolean** | True if this profile is prevented from using coupons | [optional] 
**noFreeShipping** | **Boolean** | True if this profile is never given free shipping | [optional] 
**noRealtimeCharge** | **Boolean** | True if this customers orders are not charged in real-time | [optional] 
**pricingTiers** | **[String]** | Pricing tier names this profile qualifies for | [optional] 
**shippingAddresses** | [**[CartCustomerProfileAddress]**](CartCustomerProfileAddress.md) | Shipping addresses on file for this profile | [optional] 
**taxExempt** | **Boolean** | True if this profile is exempt from sales tax | [optional] 
**upsAccountNumber** | **String** | UPS account number on file | [optional] 


