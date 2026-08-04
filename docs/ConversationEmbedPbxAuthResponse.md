# UltraCartRestApiV2.ConversationEmbedPbxAuthResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchant_id** | **String** | Merchant identifier the agent belongs to. | [optional] 
**pbx_admin** | **Boolean** | True if this agent has PBX admin privileges. | [optional] 
**pbx_jwt** | **String** | JWT used by the softphone widget to authenticate to the PBX WebSocket relay. | [optional] 
**pbx_supervisor** | **Boolean** | True if this agent has PBX supervisor privileges. | [optional] 
**pbx_user** | **Boolean** | True if this agent has baseline PBX access. | [optional] 
**pbx_voice_identity** | **String** | Voice identity string identifying this agent to the PBX (e.g., client:user_123). | [optional] 


