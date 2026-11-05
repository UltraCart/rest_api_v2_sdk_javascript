# UltraCartRestApiV2.SfvbCommsListDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_dts** | **String** | When the list was created. | [optional] 
**folder_uuid** | **String** | The list and segment folder it is filed in, or none. | [optional] 
**hash_sha256** | **String** | The hash of the name, folder and public settings.  Send it as If-Match to change or archive the list. | [optional] 
**list_uuid** | **String** | The list uuid. | [optional] 
**member_count** | **Number** | How many customers are on the list. | [optional] 
**name** | **String** | The list name. | [optional] 
**public_description** | **String** | The description subscribers see for a public list. | [optional] 
**public_list** | **Boolean** | True when subscribers can choose this list on the storefront&#39;s email preferences page. | [optional] 
**used_by** | [**[SfvbCommsSegmentUsedBy]**](SfvbCommsSegmentUsedBy.md) | The campaigns that send to the list and the flows it starts, each with whether it is live. | [optional] 


