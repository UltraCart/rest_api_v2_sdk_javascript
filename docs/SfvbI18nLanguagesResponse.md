# UltraCartRestApiV2.SfvbI18nLanguagesResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changed** | **Boolean** | On enable or disable, false when the language was already in that state and nothing was saved. | [optional] 
**character_estimate** | **Number** | About how many characters of storefront text one language translates. | [optional] 
**default_language_code** | **String** | The code of the language shoppers start in.  The source of every string is still English. | [optional] 
**hash_sha256** | **String** | Send back as If-Match when enabling or disabling a language. | [optional] 
**languages** | [**[SfvbI18nLanguage]**](SfvbI18nLanguage.md) | Every language the storefront can be translated into, enabled or not, English first. | [optional] 
**per_language_cost** | **String** | The estimated machine translation cost of enabling one more language, formatted. | [optional] 
**storefront_oid** | **Number** | The storefront. | [optional] 
**supports_i18n** | **Boolean** | False when the active theme takes its languages from locale files.  Language and message writes are refused then. | [optional] 


