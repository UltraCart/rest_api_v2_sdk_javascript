# UltraCartRestApiV2.ConversationVirtualAgentCapabilityCustomCollection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ai_description** | **String** | Merchant authored description of what is in this collection, which is what the agent sees when deciding whether to search it | [optional] 
**ai_enabled** | **Boolean** | True if this collection has been enabled for AI access in its own configuration.  A collection that is not enabled cannot be searched even if it is selected here. | [optional] 
**collection_name** | **String** | Merchant assigned name of the collection | [optional] 
**error_message** | **String** | Error from the last build, if it failed.  A collection with an error will return nothing to the agent, so this is worth surfacing next to the selection. | [optional] 
**last_update_dts** | **String** | Date/time the collection was last rebuilt from the merchant&#39;s BigQuery query | [optional] 
**record_count** | **Number** | Number of records loaded on the last build | [optional] 
**typesense_custom_collection_oid** | **Number** | The identifier to place in custom_collection_oids to grant the agent access to this collection | [optional] 


