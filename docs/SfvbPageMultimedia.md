# UltraCartRestApiV2.SfvbPageMultimedia

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | The image code, which is what pageImageCode refers to.  Empty for the default image. | [optional] 
**declared** | **Boolean** | True when a template declares this code.  An attached image whose code nothing declares renders nowhere unless a pageimage element names it. | [optional] 
**_default** | **Boolean** | True for the page&#39;s default image, which a pageimage element with no pageImageCode renders.  This is the thumbnail a subgroup tile shows. | [optional] 
**description** | **String** | What the slot is for, as the declaring template describes it, otherwise the description stored with the image.  Rendered as the alt text. | [optional] 
**dimensions** | **String** | Width x height in pixels, when the attached file is an image. | [optional] 
**filename** | **String** | The attached file&#39;s name within the page&#39;s folder.  Empty when nothing is attached. | [optional] 
**public_url** | **String** | Where the source file is served on the storefront.  Absent when nothing is attached. | [optional] 


