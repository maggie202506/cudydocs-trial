# Cellular

## APN
<img src="https://cdn.jsdelivr.net/gh/cudytech-pr/User-Guide/docs/images/industrial_router/general-settings-cellular-apn.webp" alt="" width="800px" style="border:  2px solid #eee;" />
 
On the **Cellular >> APN** page，you can configure the cellular APN. Please follow the steps:

1) Enable the APN feature. 
 
2) Enable the *Data Roaming* to allow your mobile device to connect to the internet or use cellular data when outside your carrier’s network coverage area, often involving additional charges.  
 
3) Select a *SIM Slot* (physical compartment) to insert your SIM card and enable network connectivity. *Auto* is recommended for automatic detection.

4) Select a *Network Mode* of the router's cellular network. *Auto* is recommended for automatic detection.

5) Select a means of *Network Search*. *Auto* is for automatic scanning and connection; or *Manual* requires a click on *Network Search* and selection of your SIM card carrier and network operator.

6) Select the *PDP* (Packet Data Protocol) *Type* that defines the protocol used for data transmission in mobile networks (e.g., IPv4 or IPv4/IPv6).  

7) Enable *Band Select* to allow manual selection of specific frequency bands for network connectivity, useful for optimizing signal strength or compatibility.  

8) Select a specific frequency range allocated for LTE (4G) networks which vary by region and carrier for *LTE Bands*.

<img src="https://cdn.jsdelivr.net/gh/cudytech-pr/User-Guide/docs/images/industrial_router/lte-band.webp" alt="" width="500px" style="display: block; margin: 0 auto;" />

9) Configure *APN Profile* to connect the router to the carrier’s data network, either selecting *Auto* or consulting your carrier for the APN parameters and manually enter it.

<img src="https://cdn.jsdelivr.net/gh/cudytech-pr/User-Guide/docs/images/industrial_router/cellular-APN-settings.webp" alt="" width="500px" style="border:  2px solid #eee;display: block; margin: 0 auto;" />
 
10) Click *Save & Apply* to save and activate the new settings or changes.  Displays the current state of cellular network connectivity, Connected or Disconnected.

----
## SMS
<img src="https://cdn.jsdelivr.net/gh/cudytech-pr/User-Guide/docs/images/industrial_router/general-settings-cellular-sms.webp" alt="" width="800px" style="border:  2px solid #eee;" />

Click *Enable* and then *Save & Apply* to manage or monitor the router remotely by sending simple text commands or receiving automated alerts.

----
## Data Settings
<img src="https://cdn.jsdelivr.net/gh/cudytech-pr/User-Guide/docs/images/industrial_router/general-settings-cellular-data-settings2.webp" alt="" width="800px" style="border:  2px solid #eee;" />

- **SIM Slot**: Select SIM Slot 1 or 2 for your settings.
- **Monthly Data Statistics**: Enable to tracks total data usage within the current billing cycle.
- **Start Date**: Set the reset date for monthly data calculation. Enter a positive integer value.
- **Monthly Used**: Display the amount of data consumed in the current cycle.
- **Correct**: If necessary, enable it to manually adjust the inaccurate data usage records.
- **Data Limit**: Enable to set the maximum allowed data per month; triggers actions (e.g., shutdown) when exceeded.
- **Monthly Allowance**: Limit the monthly total data allocated for the billing cycle (e.g., 10GB).
- **SMS Alert for Usage**: Enable to get SMS notifications when data reaches predefined thresholds.
- **Usage Alert**: Set the percentage-based triggers (e.g., 80%, 90%) to activate alerts before reaching the data limit.
- **Usage Alert Message**: Customize SMS content, or keep the default warnings.
- **Phone Number**: Enter the recipient number(s) for receiving usage alerts.
- Save & Apply: Click to save and activate the new settings or changes.

----
## AT Command
<img src="https://cdn.jsdelivr.net/gh/cudytech-pr/User-Guide/docs/images/industrial_router/general-settings-cellular-at.webp" alt="" width="800px" style="border:  2px solid #eee;" />

AT Commands are standardized text-based instructions (e.g., AT+CSQ) used to configure, diagnose, and control cellular modules (4G/5G) in industrial routers, enabling APN setup, signal checks, and data management.

---
## Modem Reset
<img src="https://cdn.jsdelivr.net/gh/cudytech-pr/User-Guide/docs/images/industrial_router/general-settings-cellular-modem-reset.webp" alt="" width="800px" style="border:  2px solid #eee;" />

Click *Modem Reset* to reset the cellular modules (4G/5G) to factory settings, which may help to restore connectivity during network failures or configuration errors. 