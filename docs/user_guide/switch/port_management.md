# Port Management

!!! Note
    Images of GS1024E are for reference only; details may vary by model.

## Port Settings
<img src="https://cdn.jsdelivr.net/gh/cudytech-pr/User-Guide/docs/images/switch/port-settings.webp" alt="" width="1000px" style="border: 1px solid #eee;" />

- Port: Specifies the physical port on the switch.
- State: Select the port state to be **Enabled** or **Disabled**.
- Automatic: Turn **On** or **Off** the auto-negotiation for the port.
- Rate: Select the data transfer rate and mode (half or full duplex) for the port.
- Flow Control: Turn On or Off the flow control to manage data transmission. 
- Apply: Click to save and apply your changes or settings.
- The table displays the current state for each port and will change with the new settings.

---
## Port Trunk
<img src="https://cdn.jsdelivr.net/gh/cudytech-pr/User-Guide/docs/images/switch/port-trunk.webp" alt="" width="1000px" style="border: 1px solid #eee;" />

- Trunk Group: Select a group of ports that can be managed as a single logical link. 4 trunk groups are available.
- Member Port: Specify the port(s) that is one or several member(s) of the selected trunk group. You may press **Ctrl** key to select multiple ports at once.
- Apply: Click to save and apply your changes or settings.
- Select All: Click to select all the entries.
- Delete: Click to delete the selected entries.

---
## Port Mirror
<img src="https://cdn.jsdelivr.net/gh/cudytech-pr/User-Guide/docs/images/switch/port-mirror.webp" alt="" width="1000px" style="border: 1px solid #eee;" />

- Session: Identify a specific mirroring session.
- Port Mirror: Select to **Disable** or **Enable** the Port Mirror.
- Mirroring Port: Specify the port that will receive mirrored traffic.
- Mirrored Port: Specify the port whose traffic will be mirrored.
- Ingress: Select to **Disable** or **Enable** the mirrored incoming traffic.
- Egress: Select to **Disable** or **Enable** the mirrored outgoing traffic.

---

## Speed Limit
<img src="https://cdn.jsdelivr.net/gh/cudytech-pr/User-Guide/docs/images/switch/speed-limit.webp" alt="" width="1000px" style="border: 1px solid #eee;" />

- Port: Specify the port to apply speed limits to.
- Ingress Speed: Set the maximum incoming data rate for the port.
- Egress Speed: Set the maximum outgoing data rate for the port.
- Apply: Click to save and apply your changes or settings.

---

## Jumbo Frame
<img src="https://cdn.jsdelivr.net/gh/cudytech-pr/User-Guide/docs/images/switch/jumbo-frame.webp" alt="" width="1000px" style="border: 1px solid #eee;" />

- Jumbo Frame Enable: Select to Enable or Disable jumbo frame support.
- MTU Size: Set the maximum transmission unit size for jumbo frames. Bigger MTUs enhance throughput but need compatible devices and careful management to avoid issues.
- Apply: Click to save and apply your changes or settings.

---

## EEE Config
<img src="https://cdn.jsdelivr.net/gh/cudytech-pr/User-Guide/docs/images/switch/EEE-config.webp" alt="" width="1000px" style="border: 1px solid #eee;" />

How to enable the Energy-Efficient Ethernet (EEE) state to manage power consumption?

1. Check to select the port(s) to be configured.
2. Select to **Enable** or **Disable** the EEE State.
3. Click **Apply** to save and apply your changes or settings.

---

## Storm Control
<img src="https://cdn.jsdelivr.net/gh/cudytech-pr/User-Guide/docs/images/switch/storm-control.webp" alt="" width="1000px" style="border: 1px solid #eee;" />

**Storm Suppression** manages traffic storms by limiting the rate of unknown unicast, multicast, and broadcast packets.

- Port: Specify the port to apply storm control to.
- State: Enable or Disable storm control.
- Unknown Unicast Packets: Enable or Disable the the traffic storm control of unknown unicast packets.
- Multicast Packets: Enable or Disable the the traffic storm control of multicast packets.
- Broadcast Packets: Enable or Disable the the traffic storm control of broadcast packets.
- Speed: Set the speed at which unicast/multicast/broadcast packets are suppressed.
- Apply: Click to save and apply your changes or settings.

---

## Traffic Monitor
<img src="https://cdn.jsdelivr.net/gh/cudytech-pr/User-Guide/docs/images/switch/traffic-monitor2.webp" alt="" width="1000px" style="border: 1px solid #eee;" />

**Traffic Monitor** tracks real-time data flow metrics including Tx/Rx bytes (transmitted/received data volume) and Tx/Rx pkts (packet counts) per port, in order to monitor bandwidth usage and detect anomalies.

- Port: Displays the port being monitored.
- Tx bytes: Displays the number of transmitted bytes.
- Rx bytes: Displays the number of received bytes.
- Tx pkts: Displays the number of transmitted packets.
- Rx pkts: Displays the number of received packets.
- Clear: Click to empty the traffic data in the table.

---
## MAC Manage
<img src="https://cdn.jsdelivr.net/gh/cudytech-pr/User-Guide/docs/images/switch/mac-manage.webp" alt="" width="1000px" style="border: 1px solid #eee;" />

- Port Index: Identify the port for MAC address management.
- Maximum MAC number: Set the maximum number of MAC addresses allowed on the specified port(s). 0 means disabled.
- VID: Specify the VLAN ID.
- MAC address: Enter the MAC addresses associated with the port.
- Apply: Click to save and apply your changes or settings.
- Add: Click to add a new MAC address entry into the Static MAC Address Table.
- Delete: Click to delete the selected MAC address entry.

- Dynamic MAC Address Table: Displays the dynamic MAC address table with index, VLAN ID, MAC address, port and aging time.
- Aging time: Indicates the aging time for dynamic MAC addresses.