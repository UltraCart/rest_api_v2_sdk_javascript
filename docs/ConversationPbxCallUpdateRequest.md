# UltraCartRestApiV2.ConversationPbxCallUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**finalize** | **Boolean** | True when the agent has finished after-call work (Save &amp; finish). Stamps notes_finalized_dts, which together with transcript availability gates Zoho Desk ticket creation. | [optional] 
**notes** | **String** | Agent-authored notes for the call. Card-like values are scrubbed server-side for PCI compliance. | [optional] 
**zoho_desk_ticket_id** | **String** | Existing zoho desk ticket id to associate this call with. | [optional] 
**zoho_desk_ticket_url** | **String** | Existing zoho desk ticket URL | [optional] 


