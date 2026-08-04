# UltraCartRestApiV2.Affiliate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accepted_downline_recruiting_terms** | **Boolean** | True if affiliate has agreed to the terms associated with recruiting downline affiliates | [optional] 
**address_1** | **String** | Address 1 | [optional] 
**address_2** | **String** | Address 2 | [optional] 
**affiliate_commission_group_oid** | **Number** | Commission group that this affiliate is assigned to | [optional] 
**affiliate_oid** | **Number** | Unique object identifier for this Affiliate | [optional] 
**allow_downline_recruiting** | **Boolean** | True if affiliate is allowed to recruit downline affiliates | [optional] 
**allow_google_adwords_tracking** | **Boolean** | True if the affiliate is allowed to have their Google Adwords tracking pixel on the receipt | [optional] 
**allow_yahoo_search_marketing_tracking** | **Boolean** | True if the affiliate is allowed to have their Yahoo Search Marketing tracking pixel on the receipt | [optional] 
**analytics_internal_tracking** | **Boolean** | True if this is used for internal tracking and should not influence UltraCart Analytics | [optional] 
**attributes** | [**[AffiliateAttribute]**](AffiliateAttribute.md) | Custom attributes about the affiliate that can be used in the catalog/StoreFront | [optional] 
**auto_apply_coupon_code** | **String** | Coupon code to automatically apply when this affiliate sends traffic | [optional] 
**auto_apply_coupon_oid** | **Number** | Coupon object id to automatically apply when this affiliate sends traffic | [optional] 
**auto_approve_commissions** | **Boolean** | True if this affiliates commissions are automatically approved | [optional] 
**check_payable_to** | **String** | If the affiliate wants to be paid by check instead of PayPal, then this is the name to make the check out to | [optional] 
**city** | **String** | City | [optional] 
**company_name** | **String** | Company Name | [optional] 
**cookie_ttl** | **Number** | Number of days the affiliate tracking cookie lasts before expiring | [optional] 
**country_code** | **String** | ISO-3166 two letter country code | [optional] 
**dob** | **String** | Date of birth | [optional] 
**email** | **String** | Email | [optional] 
**email_notification_schedule** | **String** | Email notification of transactions | [optional] 
**fax** | **String** | Fax | [optional] 
**first_name** | **String** | First Name | [optional] 
**google_conversion_id** | **String** | Google Adwords conversion id to use for the tracking pixel | [optional] 
**html_permitted** | **Boolean** | True if the affiliate is allowed to specify custom HTML to render on the receipt | [optional] 
**last_name** | **String** | Last Name | [optional] 
**last_terms_acceptance** | **String** | Last date/time the affiliate program terms were agreed to | [optional] 
**marketing_strategy** | [**AffiliateMarketingStrategy**](AffiliateMarketingStrategy.md) |  | [optional] 
**member_type** | **Number** | Member type object identifier the affiliate is assigned to within the program | [optional] 
**merchant_id** | **String** | Merchant ID | [optional] 
**minimum_payout** | **Number** | Minimum balance that must accrue before the affiliate is paid | [optional] 
**password** | **String** | Password (can only be used to update) | [optional] 
**pay_commissions_on_auto_orders** | **Boolean** | True if commissions are paid on auto order (rebill) transactions | [optional] 
**pay_commissions_on_repeat_orders_by_email** | **Boolean** | True if commissions are paid on repeat orders matched by customer email | [optional] 
**pay_via_paypal** | **Boolean** | True if the affiliate is paid via PayPal | [optional] 
**payment_adjustment** | **Number** | Fixed adjustment applied to the affiliate&#39;s commission payments | [optional] 
**paypal_email** | **String** | Alternate email address to use for their PayPal payment if different than their primary email | [optional] 
**phone** | **String** | Phone | [optional] 
**postal_code** | **String** | Postal Code | [optional] 
**prevent_cookie_stomping** | **Boolean** | True if cookie stomping of this affiliate is prevented | [optional] 
**prevent_sending_all_emails** | **Boolean** | If true, affiliate will not receive any email notifications. | [optional] 
**refund_server_to_server_postback_url** | **String** | Server to server postback URL notified of affiliate refunds | [optional] 
**remove_cookie_after_purchase** | **Boolean** | If true, affiliate cookies are removed after a purchase. | [optional] 
**salesforce_account_id** | **String** | Salesforce.com account id | [optional] 
**salesforce_contact_id** | **String** | Salesforce.com contact id | [optional] 
**server_to_server_postback_url** | **String** | Server to server postback URL notified of affiliate transactions | [optional] 
**short_code** | **String** | Short code that can be used in place of the affiliate id within tracking links | [optional] 
**state** | **String** | State | [optional] 
**status** | **String** | Status | [optional] 
**tax_id** | **String** | Tax ID (can only be used to update) | [optional] 
**terminated_for_spam** | **Boolean** | True if the affiliate has been terminated for spamming | [optional] 
**tier_relationships** | [**[AffiliateTierRelationship]**](AffiliateTierRelationship.md) | Relationship with other affiliates that recruted this affiliate | [optional] 
**ysm_account_id** | **String** | Yahoo Search Marketing account id to use for the tracking pixel | [optional] 



## Enum: EmailNotificationScheduleEnum


* `None` (value: `"None"`)

* `Each` (value: `"Each"`)

* `Daily` (value: `"Daily"`)

* `Weekly` (value: `"Weekly"`)

* `Monthly` (value: `"Monthly"`)





## Enum: StatusEnum


* `Active` (value: `"Active"`)

* `Inactive` (value: `"Inactive"`)




