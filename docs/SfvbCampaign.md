# UltraCartRestApiV2.SfvbCampaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign_uuid** | **String** | The campaign uuid. | [optional] 
**communication_sequence_uuid** | **String** | The communication sequence the steps belong to. | [optional] 
**created_dts** | **String** | When the campaign was created (ISO 8601, UTC). | [optional] 
**deleted** | **Boolean** | True when the campaign was deleted. | [optional] 
**emails** | [**[SfvbCommsEmail]**](SfvbCommsEmail.md) | Its emails, in step order. | [optional] 
**end_once_customer_purchases** | **Boolean** | True when a customer leaves the campaign once they buy from one of its emails. | [optional] 
**end_once_customer_purchases_anywhere** | **Boolean** | True when a customer leaves the campaign once they buy from any source. | [optional] 
**hash_sha256** | **String** | Send this as If-Match when changing or archiving the campaign. | [optional] 
**live** | **Boolean** | True when the emails and postcards reach customers now, so a change to one shows at once.  False only in a status that sends nothing. | [optional] 
**memberships** | [**[SfvbCampaignMembership]**](SfvbCampaignMembership.md) | The lists and segments it sends to or leaves out. | [optional] 
**name** | **String** | The campaign name. | [optional] 
**notes** | **[String]** | What a write did beyond the fields it was asked to change, such as putting emails back to needing review or setting a scheduled campaign back to draft.  Only on a write. | [optional] 
**postcards** | [**[SfvbCommsPostcard]**](SfvbCommsPostcard.md) | Its postcards, in step order. | [optional] 
**scheduled_dts** | **String** | When the campaign is scheduled to send (ISO 8601, UTC), when it is. | [optional] 
**sending_domain_uuid** | **String** | The sending domain uuid.  Defaults to the storefront&#39;s marketing sending domain. | [optional] 
**sending_name** | **String** | The from name.  Defaults to the storefront&#39;s marketing setting. | [optional] 
**sending_user** | **String** | The part of the from address before the at sign.  Defaults to the storefront&#39;s marketing setting. | [optional] 
**status** | **String** | The status, such as draft, scheduled, sending, sent or archived. | [optional] 
**status_dts** | **String** | When the status last changed (ISO 8601, UTC). | [optional] 


