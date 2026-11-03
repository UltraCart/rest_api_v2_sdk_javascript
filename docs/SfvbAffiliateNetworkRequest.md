# UltraCartRestApiV2.SfvbAffiliateNetworkRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assign_to_affiliate_oid** | **Number** | One of the account&#39;s own affiliates.  Name it in unset to clear it. | [optional] 
**commission** | **Number** | A fixed commission amount, 0 or more, with at most 6 decimals.  Name it in unset to clear it. | [optional] 
**conversion_pixel** | **String** | HTML for custom, at most 10,000 characters, or one https URL for server_to_server.  An empty string empties it.  A pixel that a custom or server_to_server network will use needs an approved affiliate_network.change request for exactly this change. | [optional] 
**conversion_type** | **String** | custom, commission_junction or server_to_server. | [optional] 
**cookie_lifetime_days** | **Number** | 1 to 3650. | [optional] 
**dry_run** | **Boolean** | True to check the change and say whether it needs an approval, without saving. | [optional] 
**fire_percentage** | **Number** | 0 to 100, with at most 2 decimals. | [optional] 
**if_not_fired** | **String** | process, skip or assign.  assign needs if_not_fired_affiliate_oid. | [optional] 
**if_not_fired_affiliate_oid** | **Number** | For if_not_fired assign, one of the account&#39;s own affiliates. | [optional] 
**network_name** | **String** | Up to 50 characters.  Required on a create. | [optional] 
**parameter_name** | **String** | Up to 50 characters.  Required on a create. | [optional] 
**parameter_value** | **String** | Up to 100 characters.  Required on a create. | [optional] 
**record_fire_in_custom_field** | **Number** | 1 to 10. | [optional] 
**record_name_in_custom_field** | **Number** | 1 to 10. | [optional] 
**remove_empty_pixel_parameters** | **Boolean** | server_to_server only. | [optional] 
**stomp_previous_cookie** | **Boolean** | True to replace another network&#39;s cookie. | [optional] 
**unset** | **[String]** | Fields to clear.  commission and assign_to_affiliate_oid only. | [optional] 



## Enum: ConversionTypeEnum


* `custom` (value: `"custom"`)

* `commission_junction` (value: `"commission_junction"`)

* `server_to_server` (value: `"server_to_server"`)





## Enum: IfNotFiredEnum


* `process` (value: `"process"`)

* `skip` (value: `"skip"`)

* `assign` (value: `"assign"`)




