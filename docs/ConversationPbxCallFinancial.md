# UltraCartRestApiV2.ConversationPbxCallFinancial

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ai_agent_billed_minutes** | **Number** | Total AI agent billed minutes for this call | [optional] 
**ai_agent_cost** | **Number** | Total AI agent cost for this call | [optional] 
**ai_agent_cost_currency** | **String** | Currency for AI agent cost | [optional] 
**call_currency** | **String** | Currency for call price (default USD) | [optional] 
**call_price** | **Number** | Twilio call cost | [optional] 
**call_price_estimated** | **Boolean** | True if call price is a fallback-rate estimate, false if Twilio-confirmed | [optional] 
**transcription_cost** | **Number** | AWS Transcribe transcription cost | [optional] 


