# UltraCartRestApiV2.SfvbAffiliateNetwork

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affiliate_network_oid** | **Number** | The network&#39;s oid.  Smart Attribution names it as a platform&#39;s integration_id. | [optional] 
**approval_needed** | **Boolean** | On a dry run, whether the real write needs an approved affiliate_network.change request. | [optional] 
**assign_to_affiliate_oid** | **Number** | The account&#39;s own affiliate that orders from this network are assigned to.  Null when none. | [optional] 
**changes** | [**[SfvbTrackingChange]**](SfvbTrackingChange.md) | On a write, what changed, or what would change on a dry run.  conversion_pixel shows its size and hash, not its content. | [optional] 
**commission** | **Number** | A fixed commission amount, in the account&#39;s currency.  Null when not set. | [optional] 
**conversion_pixel** | **String** | HTML for custom, or the postback URL for server_to_server, with the admin&#39;s order tokens.  Only on a read of one network and on a write.  Empty when not set. | [optional] 
**conversion_pixel_sha256** | **String** | The SHA-256 of conversion_pixel as UTF-8. | [optional] 
**conversion_pixel_size_bytes** | **Number** | The size of conversion_pixel in UTF-8 bytes. | [optional] 
**conversion_type** | **String** | custom prints conversion_pixel into the receipt page.  commission_junction fires the account&#39;s Commission Junction setup instead and does not use conversion_pixel.  server_to_server has UltraCart&#39;s server request conversion_pixel as an https URL after the order.  A value stored by the admin that is none of these is shown as stored. | [optional] 
**cookie_lifetime_days** | **Number** | How long the visit is remembered, in days, 1 to 3650. | [optional] 
**dry_run** | **Boolean** | On a write, true when nothing was saved. | [optional] 
**fire_percentage** | **Number** | The share of this network&#39;s orders whose pixel fires, from 0 to 100. | [optional] 
**hash_sha256** | **String** | The hash of the network as stored.  Send it as If-Match on an update or delete. | [optional] 
**if_not_fired** | **String** | What UltraCart&#39;s own affiliate system does with an order whose pixel did not fire.  process handles it as usual, skip leaves it out, assign credits if_not_fired_affiliate_oid. | [optional] 
**if_not_fired_affiliate_oid** | **Number** | For if_not_fired assign, the account&#39;s own affiliate to credit. | [optional] 
**network_name** | **String** | The network&#39;s name, up to 50 characters. | [optional] 
**parameter_name** | **String** | The URL parameter that marks a visit from this network, up to 50 characters.  Compared without case. | [optional] 
**parameter_value** | **String** | The parameter&#39;s value for this network, up to 100 characters.  Compared without case. | [optional] 
**record_fire_in_custom_field** | **Number** | The order custom field, 1 to 10, that records whether the pixel fired. | [optional] 
**record_name_in_custom_field** | **Number** | The order custom field, 1 to 10, that records the network&#39;s name. | [optional] 
**remove_empty_pixel_parameters** | **Boolean** | For server_to_server only, true to drop query parameters that are empty after the tokens are filled in. | [optional] 
**stomp_previous_cookie** | **Boolean** | True to replace another network&#39;s cookie.  False keeps the first network&#39;s. | [optional] 



## Enum: ConversionTypeEnum


* `custom` (value: `"custom"`)

* `commission_junction` (value: `"commission_junction"`)

* `server_to_server` (value: `"server_to_server"`)





## Enum: IfNotFiredEnum


* `process` (value: `"process"`)

* `skip` (value: `"skip"`)

* `assign` (value: `"assign"`)




