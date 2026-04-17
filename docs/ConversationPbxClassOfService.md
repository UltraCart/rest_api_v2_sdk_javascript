# UltraCartRestApiV2.ConversationPbxClassOfService

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_countries** | **[String]** | E.164 country calling codes (e.g. 1 for US/Canada, 44 for UK). Empty means domestic only. | [optional] 
**block_premium_numbers** | **Boolean** | Block calls to 900, 976, premium-rate, and shortcode destinations | [optional] 
**conversation_pbx_class_of_service_uuid** | **String** | Class of Service unique identifier | [optional] 
**default_flag** | **Boolean** | If true, this CoS applies to all agents without an explicit cos_uuid. Only one per merchant. | [optional] 
**description** | **String** | Description of the class of service | [optional] 
**merchant_id** | **String** | Merchant Id | [optional] 
**name** | **String** | Display name for the class of service | [optional] 
**outbound_enabled** | **Boolean** | Whether agents with this CoS can make outbound calls | [optional] 
**time_range_uuid** | **String** | UUID of a time range. If set, outbound calls only permitted during those time windows. | [optional] 


