# AP Management

This enables centralized control, configuration, and monitoring of wireless APs (Access Points), including auto-discovery, group policies, and real-time status tracking.

<img src="../../../images/noteicon.png" alt="" /> A maxium of 10 APs or 100 clients are allowed in *Main Router and AP Controller* mode; while a maxium of 200 APs are allowed in *AP Controller* mode.

----
## AP List 
Enables individual configuration and management for the APs, which are in the factory default state and connected in the same subnet with the AP controller.

<img src="../../../images/c200p/ap-list.png" alt="" width="800px" style="border: 1px solid #eee; display:block; margin:0 auto;" />

- Name: Displays the AP's name - user-defined identifier for the AP. Edit in *Config*.
- Model: Displays the AP's hardware model. Auto-detected; used for compatibility checks.
- Version: Displays the AP's firmware version. Use *Upgrade* to update if outdated.
- IP Address: Displays the AP's static or Dynamic IP address. Configure in *Config*.
- MAC Address: Displays the AP's physical address. Immutable; useful for filtering/tracking.
- Status: Shows Online/Offline/Adopting. Troubleshoot if *Offline*.
- LED: Monitors AP status through indicator lights. Turn it *OFF* in *Config* when light interference needs to be avoided.
- Description: Optional notes for the AP. Add in *Config*. 
- Channel: Displays the AP's current frequency channel, in the format of *XX(2.4G),XX(5G)*. Adjust in Config.
- Clients: Shows the amount of connected devices. Check in *View-Clients* for details.
- Tx/Rx Bytes: Shows data transmitted/received. Monitor bandwidth usage.

- Action
    - <img src="../../../images/c200p/view.png" alt=""/>: View AP details, including Overview, Radio, C lients and SSID.
    - <img src="../../../images/c200p/config.png" alt=""/>: Configure the settings, including Name, LED Status, and 2.4GHz/5GHz channel, etc.
    - <img src="../../../images/c200p/forget.png" alt=""/>: Forget and remove AP from controller but still in the network.
    - <img src="../../../images/c200p/reboot.png" alt=""/>: Reboot the AP system remotely for fixes/updates.
- Refresh: Update real-time stats.
- Adopt: Authorize unmanaged APs to join controller.
- Upgrade: Install firmware updates.

----

## AP Group
Enables batch configuration for the APs in the same AP group, which can be created and customized. 

<img src="../../../images/c200p/ap-group.png" alt="" width="800px" style="border: 1px solid #eee; display:block; margin:0 auto;" />

**How to create an AP Group?**

1. Click <img src="../../../images/c200p/ap-group-add.png" alt="" width="50px"/> and create a name for the group. Click *Save & Apply*.
<img src="../../../images/c200p/ap-group-create.png" alt="" width="500px" style="border: 1px solid #eee; display:block; margin:0 auto;" />

2. Click <img src="../../../images/c200p/view.png" alt="" width="15px"/> and then <img src="../../../images/c200p/ap-group-add.png" alt="" width="50px"/>, select a groupable AP to add it into the group. Click *Save & Apply*.
<img src="../../../images/c200p/ap-group-create4.png" alt="" width="500px" style="border: 1px solid #eee; display:block; margin:0 auto;" />

**How to manage the APs in the same AP group?**

- <img src="../../../images/c200p/config.png" alt=""/>: Batch-configure the APs in the same group.

    <img src="../../../images/c200p/apgroup-config.png" alt="" width="500px" style="border: 1px solid #eee; display:block; margin:0 auto;" />

    - LED: *Keep Existing*, or select *ON* for visibility or *OFF* for power saving.
    - IGMP Snooping: *Keep Existing*, or select *ON* to optimize multicast traffic by filtering unnecessary streams to reduce network load.
    - AP Group: *Keep Existing*, or assigns APs to other group.
    - Description: Add notes for easy AP Group identification.
    - (2.4G/5G) Status: *Keep Existing*, or select to turn *ON* or *OFF* the AP's 2.4G/5G Wi-Fi.
    - (2.4G/5G) Channel Width: *Keep Existing*, or select *Auto* to adjust bandwidth for optimal speed and interference balance.
    - (2.4G/5G) Channel:  *Keep Existing*, or select *Auto* for automatical channel selection to avoid congestion.
    - (2.4G/5G) Transmit Power: *Keep Existing*, or select *Maximum/Medium/Minimum* signal strength for coverage control.
    - (2.4G/5G) Max Stations: *Keep Existing*, or select *Custom* to limit client connections per AP to prevent overload.

- <img src="../../../images/c200p/upgrade.png" alt=""/>: Upgrade the firmwares of the APs in the group.

- <img src="../../../images/c200p/forget.png" alt=""/>: Forget and remove AP groups from controller but still in the network.

- <img src="../../../images/c200p/reboot.png" alt=""/>: Reboot the AP systems remotely for fixes/updates.

<img src="../../../images/noteicon.png" alt="" /> APs in the same AP group will share an identical SSID, while different AP groups should have different SSIDs. Refer to [General Settings -> Wireless](wireless.md) for more detailed configurations.