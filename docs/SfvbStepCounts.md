# UltraCartRestApiV2.SfvbStepCounts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clicked** | **Number** | Messages with a click. | [optional] 
**customers** | **Number** | For a step that isn&#39;t an email, the customers that passed through it. | [optional] 
**delivered** | **Number** | Messages delivered. | [optional] 
**opened** | **Number** | Emails opened. | [optional] 
**sent** | **Number** | Messages sent. | [optional] 
**skipped** | **Number** | Customers who reached the step and were not sent anything.  The dispatch log says why. | [optional] 
**source** | **String** | email (the step&#39;s email, all time), sequence (the begin step, customers who started the sequence, all time) or step (this step, the last 90 days). | [optional] 
**spam** | **Number** | Spam complaints. | [optional] 
**unsubscribed** | **Number** | Unsubscribes from these messages. | [optional] 


