# UltraCartRestApiV2.SfvbCampaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign_uuid** | **String** | The campaign uuid. | [optional] 
**communication_sequence_uuid** | **String** | The communication sequence the steps belong to. | [optional] 
**created_dts** | **String** | When the campaign was created (ISO 8601, UTC). | [optional] 
**deleted** | **Boolean** | True when the campaign was deleted. | [optional] 
**emails** | [**[SfvbCommsEmail]**](SfvbCommsEmail.md) | Its emails, in step order. | [optional] 
**live** | **Boolean** | True when the emails and postcards reach customers now, so a change to one shows at once.  False only in a status that sends nothing. | [optional] 
**name** | **String** | The campaign name. | [optional] 
**postcards** | [**[SfvbCommsPostcard]**](SfvbCommsPostcard.md) | Its postcards, in step order. | [optional] 
**scheduled_dts** | **String** | When the campaign is scheduled to send (ISO 8601, UTC), when it is. | [optional] 
**status** | **String** | The status, such as draft, scheduled, sending, sent or archived. | [optional] 
**status_dts** | **String** | When the status last changed (ISO 8601, UTC). | [optional] 


