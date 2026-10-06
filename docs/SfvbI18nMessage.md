# UltraCartRestApiV2.SfvbI18nMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**edited** | **Boolean** | True when the English was changed from the template&#39;s text. | [optional] 
**english_text** | **String** | The English text, the source every other language is translated from. | [optional] 
**hash_sha256** | **String** | Send back as If-Match when setting or resetting this message. | [optional] 
**imported** | **Boolean** | True when the message came from an older theme&#39;s locale file.  It cannot be reset. | [optional] 
**key** | **String** | The message key. | [optional] 
**theme_oid** | **Number** | The theme the message belongs to.  Messages are kept per storefront and theme. | [optional] 
**translations** | [**[SfvbI18nTranslation]**](SfvbI18nTranslation.md) | Each enabled language other than English, with its text and where it comes from. | [optional] 


