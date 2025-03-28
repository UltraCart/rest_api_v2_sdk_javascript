# UltraCartRestApiV2.EmailSegment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_csv_download** | **Boolean** | True if the current user has the rights to download this segment. | [optional] 
**allow_facebook_audiences** | **Boolean** | True if this StoreFront has the Facebook Analytics app connected and supports them | [optional] 
**created_dts** | **String** | Created date | [optional] 
**deleted** | **Boolean** | True if this campaign was deleted | [optional] 
**email_segment_uuid** | **String** | Email segment UUID | [optional] 
**esp_list_segment_folder_uuid** | **String** | List/Segment folder UUID | [optional] 
**facebook_custom_audience** | **Boolean** | True if you want to sync to a facebook custom audience | [optional] 
**filter_profile_equation_json** | **String** | File profile equation json | [optional] 
**member_count** | **Number** | Count of members in this segment | [optional] 
**merchant_id** | **String** | Merchant ID | [optional] 
**name** | **String** | Name of email segment | [optional] 
**rank_json** | **String** | Rank settings json | [optional] 
**rebuild_percentage** | **Number** | Percentage of completion for a rebuild.  The value range will be 0-1.  Multiply by 100 to format for display. | [optional] 
**rebuild_required** | **Boolean** | True if a rebuild is required because some part of the segment has changed | [optional] 
**storefront_oid** | **Number** | Storefront oid | [optional] 
**thirdparty_join_add_tags** | **[String]** | Third party provider tags to add when a customer joins the segment. | [optional] 
**thirdparty_join_remove_tags** | **[String]** | Third party provider tags to remove when a customer joins the segment. | [optional] 
**thirdparty_leave_add_tags** | **[String]** | Third party provider tags to add when a customer leaves the segment. | [optional] 
**thirdparty_leave_remove_tags** | **[String]** | Third party provider tags to remove when a customer leaves the segment. | [optional] 
**thirdparty_list_id** | **String** | List id of third party provider to sync with. | [optional] 
**thirdparty_provider_name** | **String** | Name of third party provider to sync segment to a list with. | [optional] 
**used_by** | [**[EmailListSegmentUsedBy]**](EmailListSegmentUsedBy.md) | Details on the flows or campaigns that use this list. | [optional] 


