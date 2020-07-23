# UltraCartRestApiV2.EmailSegment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_csv_download** | **Boolean** | True if the current user has the rights to download this segment. | [optional] 
**allow_facebook_audiences** | **Boolean** | True if this StoreFront has the Facebook Analytics app connected and supports them | [optional] 
**created_dts** | **String** | Created date | [optional] 
**deleted** | **Boolean** | True if this campaign was deleted | [optional] 
**email_segment_uuid** | **String** | Email segment UUID | [optional] 
**facebook_custom_audience** | **Boolean** | True if you want to sync to a facebook custom audience | [optional] 
**filter_profile_equation_json** | **String** | File profile equation json | [optional] 
**member_count** | **Number** | Count of members in this segment | [optional] 
**merchant_id** | **String** | Merchant ID | [optional] 
**name** | **String** | Name of email segment | [optional] 
**rank_json** | **String** | Rank settings json | [optional] 
**rebuild_required** | **Boolean** | True if a rebuild is required because some part of the segment has changed | [optional] 
**storefront_oid** | **Number** | Storefront oid | [optional] 
**used_by** | [**[EmailListSegmentUsedBy]**](EmailListSegmentUsedBy.md) | Details on the flows or campaigns that use this list. | [optional] 


