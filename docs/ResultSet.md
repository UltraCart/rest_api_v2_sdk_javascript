# UltraCartRestApiV2.ResultSet

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **Number** | Number of results in this set | [optional] 
**limit** | **Number** | Maximum number of results that can be returned in a set | [optional] 
**more** | **Boolean** | True if there are more results to query | [optional] 
**next_offset** | **Number** | The next offset that you should query to retrieve more results | [optional] 
**offset** | **Number** | Offset of this result set (zero based) | [optional] 
**total_records** | **Number** | The total number of records in the result set.  May be null if the number is not known and the client should continue iterating as long as more is true. | [optional] 


