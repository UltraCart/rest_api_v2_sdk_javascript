# UltraCartRestApiV2.EmailCampaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**click_rate_formatted** | **String** | Click rate of emails | [optional] 
**created_dts** | **String** | Created date | [optional] 
**deleted** | **Boolean** | True if this campaign was deleted | [optional] 
**email_campaign_uuid** | **String** | Email campaign UUID | [optional] 
**email_communication_sequence_uuid** | **String** | Email communication sequence UUID | [optional] 
**end_once_customer_purchases** | **Boolean** | True if the customer should end the flow once they purchase from this campaign | [optional] 
**end_once_customer_purchases_anywhere** | **Boolean** | True if the customer should end the flow once they purchase from anywhere | [optional] 
**esp_campaign_folder_uuid** | **String** | Campaign folder UUID.  Null for uncategorized | [optional] 
**esp_domain_user** | **String** | User of the sending address | [optional] 
**esp_domain_uuid** | **String** | UUID of the sending domain | [optional] 
**esp_friendly_name** | **String** | Friendly name of the sending email | [optional] 
**library_item_oid** | **Number** | If this item was ever added to the Code Library, this is the oid for that library item, or 0 if never added before.  This value is used to determine if a library item should be inserted or updated. | [optional] 
**memberships** | [**[EmailListSegmentMembership]**](EmailListSegmentMembership.md) | List and segment memberships | [optional] 
**merchant_id** | **String** | Merchant ID | [optional] 
**name** | **String** | Name of email campaign | [optional] 
**open_rate_formatted** | **String** | Open rate of emails | [optional] 
**prevent_sending_due_to_spam** | **Boolean** | True if this campaign is prevented from sending at this time due to spam complaints. | [optional] 
**revenue_formatted** | **String** | Revenue associated with campaign | [optional] 
**revenue_per_customer_formatted** | **String** | Revenue per customer associated with campaign | [optional] 
**scheduled_dts** | **String** | Scheduled date | [optional] 
**screenshot_large_full_url** | **String** | URL to a large full length screenshot | [optional] 
**status** | **String** | Status of the campaign of draft, archived, and sent | [optional] 
**status_dts** | **String** | Timestamp when the last status change happened | [optional] 
**storefront_oid** | **Number** | Storefront oid | [optional] 


