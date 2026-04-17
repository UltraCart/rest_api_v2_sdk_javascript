# UltraCartRestApiV2.TransactionEmail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **String** | Actual template contents | [optional] 
**esp_domain_uuid** | **String** | The uuid of the sending domain | [optional] 
**esp_friendly_name** | **String** | Friendly from that will appear in customer email clients. | [optional] 
**esp_user** | **String** | The username of the sending email.  This is not the full email.  Only the username which is everything before the @ sign. | [optional] 
**file_exists** | **Boolean** | An internal identifier used to aid in retrieving templates from the filesystem. | [optional] 
**file_name** | **String** | File name | [optional] 
**group** | **String** | Group | [optional] 
**handlebar_variables** | **[String]** | Handlebar Variables available for email template | [optional] 
**invalid** | **Boolean** | Invalid will be true if the template cannot compile | [optional] 
**last_modified** | **String** | Last modified timestamp | [optional] 
**library_item_oid** | **Number** | If this item was ever added to the Code Library, this is the oid for that library item, or 0 if never added before.  This value is used to determine if a library item should be inserted or updated. | [optional] 
**options** | [**[TransactionEmailOption]**](TransactionEmailOption.md) | Options that help govern how and when this template is used | [optional] 
**path** | **String** | directory path where template is stored in file system | [optional] 
**size** | **String** | Size of file in friendly description | [optional] 
**store_front_fs_directory_oid** | **Number** | Internal identifier used to store and retrieve template from filesystem | [optional] 
**store_front_fs_file_oid** | **Number** | Internal identifier used to store and retrieve template from filesystem | [optional] 
**subject** | **String** | Subject | [optional] 
**syntax_errors** | **String** | Any syntax errors contained within the tempalate | [optional] 
**template_path_relative_path** | **String** | Internal value used to locate the template in the filesystem | [optional] 
**theme_relative_path** | **String** | Theme relative path in the filesystem. | [optional] 


