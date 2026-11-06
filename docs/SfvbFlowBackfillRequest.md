# UltraCartRestApiV2.SfvbFlowBackfillRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dry_run** | **Boolean** | Count who would be enrolled and enroll nobody. | [optional] 
**flow_uuid** | **String** | The flow.  Used by a flow.backfill approval request.  The backfill call takes it from the path. | [optional] 
**order_days_old** | **Number** | For an order trigger, how many days of orders to enroll, 1 to 90 (default 5). | [optional] 
**relative_to_event** | **Boolean** | For an order trigger, shorten the flow&#39;s first wait by each order&#39;s age. | [optional] 


