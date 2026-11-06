# UltraCartRestApiV2.SfvbCommsTemplateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_cjson** | **String** | The template&#39;s body, as CJSON. | [optional] 
**email_template_vm_path** | **String** | The Velocity template it renders inside, as stored.  It is looked up in the storefront&#39;s active theme. | [optional] 
**notes** | **[String]** | What isn&#39;t shown. | [optional] 
**template** | [**SfvbCommsTemplate**](SfvbCommsTemplate.md) |  | [optional] 
**template_exists** | **Boolean** | True when the file at template_path exists. | [optional] 
**template_note** | **String** | Why there is no template file, or null when there is one. | [optional] 
**template_path** | **String** | The theme file that template is, as a render finds it.  Read it with the files endpoints, whose read also reports valid and velocity_errors.  Null when it couldn&#39;t be worked out, with template_note saying why. | [optional] 


