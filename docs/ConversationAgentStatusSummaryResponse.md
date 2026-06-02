# UltraCartRestApiV2.ConversationAgentStatusSummaryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agents** | [**[AgentSummary]**](AgentSummary.md) | Per-agent enriched summary (status totals + activity metrics) | [optional] 
**avg_available_pct** | **Object** |  | [optional] 
**error** | [**Error**](Error.md) |  | [optional] 
**metadata** | [**ResponseMetadata**](ResponseMetadata.md) |  | [optional] 
**status_breakdown** | **Object** | Total seconds-in-status across all agents, keyed by status name | [optional] 
**success** | **Boolean** | Indicates if API call was successful | [optional] 
**total_agents** | **Number** | Distinct agents with at least one transition in the range | [optional] 
**warning** | [**Warning**](Warning.md) |  | [optional] 


