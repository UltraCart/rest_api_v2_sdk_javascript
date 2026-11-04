# UltraCartRestApiV2.SfvbTrackingProviderField

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed** | **[String]** | For a select, the values accepted. | [optional] 
**key** | **String** | The field key a write names. | [optional] 
**label** | **String** | The label the admin shows. | [optional] 
**mask** | **String** | For a stored secret, its mask.  Send it back, or leave the secret out, to keep it. | [optional] 
**max** | **Number** | The longest value accepted, or for an id_list the longest line. | [optional] 
**max_value** | **Number** | For a number, the largest value accepted. | [optional] 
**min_value** | **Number** | For a number, the smallest value accepted. | [optional] 
**secret** | **Boolean** | True for a secret.  Its value is never returned; set and mask say whether one is stored. | [optional] 
**set** | **Boolean** | For a secret, true when one is stored. | [optional] 
**sink** | **String** | For a writable secret, the sink a secret request names, with this storefront_oid as its target. | [optional] 
**type** | **String** | id, id_list, token, url, server_url, host, host_list, bool, select, number, numeric_id or secret.  It decides what a write accepts. | [optional] 
**unavailable_reason** | **String** | Present only when this storefront can&#39;t turn the field on, and why.  Turning it off still works. | [optional] 
**value** | **String** | The stored value.  Booleans are true or false.  Null when blank.  Never present for a secret. | [optional] 
**writable** | **Boolean** | False for a field the API reports but does not change. | [optional] 


