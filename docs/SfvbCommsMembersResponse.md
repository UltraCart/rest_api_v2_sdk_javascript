# UltraCartRestApiV2.SfvbCommsMembersResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_data** | **String** | masked, or shown when show_customer_data was sent. | [optional] 
**list_uuid** | **String** | The list, for a list&#39;s members. | [optional] 
**members** | [**[SfvbCommsMember]**](SfvbCommsMember.md) | This page of members. | [optional] 
**notes** | **[String]** | What to keep in mind, such as how to handle customer data that is shown. | [optional] 
**page** | **Number** | The page number, from 1. | [optional] 
**page_size** | **Number** | Members per page. | [optional] 
**rebuild_required** | **Boolean** | For a segment, true while it is being rebuilt, so the members are from the last rebuild. | [optional] 
**segment_uuid** | **String** | The segment, for a segment&#39;s members. | [optional] 
**total_members** | **Number** | How many members there are. | [optional] 
**total_pages** | **Number** | How many pages there are. | [optional] 


