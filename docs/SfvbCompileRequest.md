# UltraCartRestApiV2.SfvbCompileRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cjson** | **String** | The container JSON to compile. | [optional] 
**containerName** | **String** | Optional container name, used to derive the container id the same way a .cjson file name would.  Omit and the id on the document is kept. | [optional] 
**storefrontOid** | **Number** | Optional storefront oid.  Required when theme_oid is supplied. | [optional] 
**themeOid** | **Number** | Optional theme oid.  Supplies the theme&#39;s inherit groups configuration so compilation matches what the theme would produce.  Omit to compile without inheritance. | [optional] 
**validate** | **Boolean** | Run validation before compiling and fail on errors.  Defaults to true. | [optional] 


