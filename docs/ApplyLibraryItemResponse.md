# UltraCartRestApiV2.ApplyLibraryItemResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**[LibraryItemAttribute]**](LibraryItemAttribute.md) | Attributes from the library item | [optional] 
**cjson** | **String** | Cjson from library item, only populated if this library item was a cjson snippet or marketing email (not transactional) | [optional] 
**content_type** | **String** | flow, campaign, cjson, upsell, postcard, transactional_email or email | [optional] 
**email_template_vm_path** | **String** | If a marketing email was applied, this is the path to the template encapsulating the cjson.  This is needed for the UltraCart UI. | [optional] 
**error** | [**Error**](Error.md) |  | [optional] 
**metadata** | [**ResponseMetadata**](ResponseMetadata.md) |  | [optional] 
**storefront_oid** | **Number** | StoreFront oid where content originates necessary for tracking down relative assets | [optional] 
**success** | **Boolean** | Indicates if API call was successful | [optional] 
**title** | **String** | title of library item, usually the name of the flow or campaign, or description of cjson | [optional] 
**uuid** | **String** | UUID of marketing email or communication flow/campaign if this library item was an email, campaign or flow | [optional] 
**warning** | [**Warning**](Warning.md) |  | [optional] 


