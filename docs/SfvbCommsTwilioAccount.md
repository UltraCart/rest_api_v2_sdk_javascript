# UltraCartRestApiV2.SfvbCommsTwilioAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_sid** | **String** | The Twilio account SID, AC followed by 32 hex digits.  It names the account, so it is also the target_id of a secret request for its auth token.  Required to create. | [optional] 
**ai_twiml_app_sid** | **String** | The SID of the TwiML app UltraCart made for the AI agent.  Set by the server. | [optional] 
**api_key_id** | **String** | The SID of the Twilio API key UltraCart made for this account.  Set by the server.  Its secret is never returned. | [optional] 
**api_key_name** | **String** | The name of the Twilio API key UltraCart made for this account.  Set by the server. | [optional] 
**auth_token** | **String** | The Twilio auth token.  A secret field.  Reads return a mask.  To set it, send a secret handle (sec_...) made for this account SID by POST secrets with sink twilio.account.auth_token.  Send the mask back, or leave it out, to keep it.  Required to create. | [optional] 
**esp_twilio_uuid** | **String** | UltraCart&#39;s id for the Twilio account.  Set by the server. | [optional] 
**inbound_twiml_app_sid** | **String** | The SID of the TwiML app UltraCart made for inbound calls and SMS.  Set by the server. | [optional] 
**outbound_twiml_app_sid** | **String** | The SID of the TwiML app UltraCart made for outbound calls.  Set by the server. | [optional] 
**phone_numbers** | **[String]** | The account&#39;s phone numbers UltraCart uses, in E.164 format.  Leave it out of an update to keep them; an update that sends it replaces them all. | [optional] 
**public_key_sid** | **String** | The SID of the voice encryption public key UltraCart registered with Twilio.  Set by the server.  The keys themselves are never returned. | [optional] 
**twilio_workspace_sid** | **String** | The SID of the TaskRouter workspace the phone system uses, when it has one.  Set by the server. | [optional] 


