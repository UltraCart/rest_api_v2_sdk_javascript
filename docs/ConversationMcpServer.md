# UltraCartRestApiV2.ConversationMcpServer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_method** | **String** | Authorization Method | [optional] 
**basic_password** | **String** | Basic password | [optional] 
**basic_user_name** | **String** | Basic user name | [optional] 
**header_name** | **String** | Header name | [optional] 
**header_value** | **String** | Header value | [optional] 
**mcp_server_uuid** | **String** | UUID of the MCP server configuration | [optional] 
**priority** | **Number** | Priority on which the MCP server tools are incorporated into the model.  Lower number comes first | [optional] 
**url** | **String** | URL to the MCP server (must be https) | [optional] 



## Enum: AuthMethodEnum


* `none` (value: `"none"`)

* `header` (value: `"header"`)

* `basic` (value: `"basic"`)




