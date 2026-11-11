# UltraCartRestApiV2.SfvbCliVersion

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cutoff** | **String** | The date (yyyy-MM-dd) the minimum will be raised to the recommended version.  Omitted when none is announced. | [optional] 
**minimum** | **String** | The lowest supported version.  Omitted when none is set. | [optional] 
**recommended** | **String** | The version to upgrade to.  Omitted when none is set. | [optional] 
**reported** | **String** | The version the CLI sent in X-UltraCart-CLI-Version.  Omitted when it sent none, which is read as 0.0.0. | [optional] 
**status** | **String** | ok, deprecated (below recommended - keep working, tell the merchant to upgrade) or unsupported (below minimum - every other call is refused with 426 sfvb.cli_upgrade_required). | [optional] 


