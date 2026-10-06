# UltraCartRestApiV2.SfvbNotFoundEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bot_hits** | **Number** | Bot hits since bot counting began on this entry.  Empty when not yet counted. | [optional] 
**bot_share** | **Object** | bot_hits divided by counted_hits, 0 to 1.  Empty when not yet counted. | [optional] 
**counted_hits** | **Number** | Hits since bot counting began, the base for bot_share. | [optional] 
**first_seen_dts** | **String** | First hit, ISO 8601. | [optional] 
**hits** | **Number** | Every recorded hit, bots included. | [optional] 
**ignored** | **Boolean** | True when the entry is ignored and no longer counts. | [optional] 
**last_seen_dts** | **String** | Latest hit, ISO 8601. | [optional] 
**not_found_id** | **String** | The entry&#39;s id. | [optional] 
**path** | **String** | The path, without its query string.  Token-like segments show as {token} unless asked for. | [optional] 
**redirected_to** | **String** | Where a redirect rule now sends this path, when one does. | [optional] 
**referrer_hosts** | **[String]** | Hosts of the pages that linked to it. | [optional] 


