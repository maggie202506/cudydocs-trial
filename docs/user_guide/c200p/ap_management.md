# AP Management

**AP Management** enables centralized control, configuration, and monitoring of wireless access points (APs), including auto-discovery, group policies, and real-time status tracking.

## AP List 
<img src="../../../images/c200p/ap-list.png" alt="" width="800px" style="border: 1px solid #eee; display:block; margin:0 auto;" />
 
- **Name**: Displays the AP's name - user-defined identifier for the AP. Edit in *Config*.
- **Model**: Displays the AP's hardware model. Auto-detected; used for compatibility checks.
- **Version**: Displays the AP's firmware version. Use *Upgrade* to update if outdated.
- **IP Address**: Displays the AP's static or Dynamic IP address. Configure in *Config*.
- **MAC Address**: Displays the AP's physical address. Immutable; useful for filtering/tracking.
- **Status**: Shows Online/Offline/Adopting. Troubleshoot if *Offline*.
- **LED**: Monitors AP status through indicator lights. Turn it *OFF* in *Config* when light interference needs to be avoided.
- **Description**: Optional notes for the AP. Add in *Config*. 
- **Channel**: Displays the AP's current frequency channel, in the format of *XX(2.4G),XX(5G)*. Adjust in Config.
- **Clients**: Shows the amount of connected devices. Check in *View-Clients* for details.
- **Tx/Rx Bytes**: Shows data transmitted/received. Monitor bandwidth usage.

- **Action**
    - <img src="../../../images/c200p/view.png" alt=""/>: View AP details, including Overview, Radio, C lients and SSID.
    - <img src="../../../images/c200p/config.png" alt=""/>: Configure the settings, including Name, LED Status, and 2.4GHz/5GHz channel, etc.
    - <img src="../../../images/c200p/forget.png" alt=""/>: Forget and remove AP from controller but still in the network.
    - <img src="../../../images/c200p/reboot.png" alt=""/>: Reboot the AP system remotely for fixes/updates.
- **Refresh**: Update real-time stats.
- **Adopt**: Authorize unmanaged APs to join controller.
- **Upgrade**: Install firmware updates. Schedule to avoid downtime.

## AP Group
<img src="../../../images/c200p/ap-group.png" alt="" width="800px" style="border: 1px solid #eee; display:block; margin:0 auto;" />

**How to customize an AP Group?**

1. Click <img src="../../../images/c200p/ap-group-add.png" alt="" width="50px"/> and create a name for the group. Click *Save & Apply*.
<img src="../../../images/c200p/ap-group-create.png" alt="" width="500px" style="border: 1px solid #eee; display:block; margin:0 auto;" />

2. Click <img src="../../../images/c200p/view.png" alt="" width="15px"/> and then <img src="../../../images/c200p/ap-group-add.png" alt="" width="50px"/>, select a groupable AP to add it into the group. Click *Save & Apply*.
<img src="../../../images/c200p/ap-group-create4.png" alt="" width="500px" style="border: 1px solid #eee; display:block; margin:0 auto;" />

- **Action**
    - <img src="../../../images/c200p/config.png" alt=""/>: Configure the settings.
     - LED: Keep existing or select ON for visibility or OFF for power saving.
     - IGMP Snooping: Keep existing or select ON to optimize multicast traffic by filtering unnecessary streams to reduce network load.
     - AP Group – Assigns APs to groups for batch configuration (e.g., unified SSID/policy).
     - Description – Adds notes (e.g., location) for easy AP identification.
     - Status – Enables/disables the AP remotely (Active/Inactive).
     - Channel Width – Adjusts bandwidth (e.g., 20/40/80MHz) for speed vs. interference balance.
     - Channel – Manages auto/manual channel selection to avoid congestion.
     - Transmit Power – Sets signal strength (High/Medium/Low) for coverage control.
     - Max Stations – Limits client connections per AP to prevent overload.

    - <img src="../../../images/c200p/forget.png" alt=""/>: Forget and remove AP from controller but still in the network.
    - <img src="../../../images/c200p/reboot.png" alt=""/>: Reboot the AP system remotely for fixes/updates.