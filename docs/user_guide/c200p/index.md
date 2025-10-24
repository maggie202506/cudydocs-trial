# C200P

## Overview
- Check the [package content](overview.md#package-content).
- View the AP controller's [appearance](overview.md#appearance).
- View the [interaces](overview.md#interfaces) layout. 
- Check the [LED indicators](overview.md#leds) status.

## Connect
- [Connect](connection.md#main-router-and-ap-controller-mode) the devices in the Main Router and AP Controller mode.
- [Connect](connection.md#ap-controller-mode) the devices in the AP Controller mode.

## Quick Setup
- [Set up Main Router and AP Controller mode](quick_setup.md#main-router-and-ap-controller-mode) with web-based Quick Setup wizard.
- [Set up AP Controller mode](quick_setup.md#ap-controller-mode) with web-based Quick Setup wizard.

-----
## Management
### I. System Status
Check the [status](status.md) of the AP controller's system, including AP management, devices, LAN and so on.

### II. General Settings

<img src="../../../images/noteicon.webp" alt="" /> In AP Controller mode, *WAN Mode* and *VPN* are NOT available for configuration.

- [AP Management](ap_management.md): Centralized control, configuration, and monitoring of wireless APs (Access Points), including auto-discovery, group policies, and real-time status tracking.    
- [Wireless](wireless.md): Configure and manage wireless network settings for the controlled APs.
- [Captive Portal](captive_portal.md): Allow you to design a portal page for network access verification. 
- [WAN Mode](wan.md): Set your Internet connection. Select your Internet connection type and configure the required parameters.
- [PoE](poe.md): Allow remote control of power delivery to connected access points via Ethernet cables.
- [VPN](vpn.md): Help to access Internet resources remotely, securely, and privately through tunneling technology.
- [Firmware](firmware.md): Update the AP controller's firmware to be the latest version.

### III. Advanced Settings

**[Network](network.md)**

<img src="../../../images/noteicon.webp" alt="" /> In AP Controller mode, only *LAN*, *DHCP Server*, *Wake on LAN* and *USB Sharing* are available for configuration.

- [LAN](network.md#lan): Modify the AP controller's LAN IP address, when necessary.
- [DHCP Server](network.md#dhcp-server): Specify the IP address for client devices by the AP controller as a DHCP Server.
- [IPv6](IPv6.md): Set up an IPv6 Connection. 
- [QoS](network.md#qos): Prioritize connection of specific devices for a certain duration. 
- [Custom DNS](network.md#custom-dns): Customize a DNS server to be resolved through for DNS names. 
- [DDNS](network.md#ddns): Map a domain name to the dynamic IP address of a network device. 
- [Static Routing](network.md#static-routing): Manually configure routings for data forwarding. 
- [Port Forwards](network.md#port-forwards): Set up public services on your local network with higher security. 
- [Port Trigger](network.md#port-trigger): Specify a triggering port and its corresponding external ports. 
- [DMZ](network.md#dmz): Disable DMZ unless necessary.
- [Online Detection](network.md#online-detection): Ensure your network always online and operational. 
- [TTL](network.md#ttl): Set the maximum time for packets to survive in the network. 
- [Wake on LAN](network.md#wake-on-lan): Allow a computer to be turned on or awakened by a network message.
- [UPnP](network.md#upnp): Allow applications or host devices to automatically find the front-end NAT device. 
- [USB Sharing](network.md#usb-sharing): Allow network-connected devices to access the shared files in the USB devices connected to the AP controller.

**[Security](security.md)**

<img src="../../../images/noteicon.webp" alt="" /> In AP Controller mode, ONLY *Wi-Fi Schedule* is available for configuration.

- [Firewall](security.md#firewall): Monitor and control incoming and outgoing network traffic based on predetermined security rules.
- [MAC Filter](security.md#mac-filter): Prevent unauthorized devices with certain MAC address from accessing the network.
- [IP Filter](security.md#ip-filter): Block or allow traffic to your network or system based on the IP addresses. 
- [Domain Filter](security.md#domain-filter): Control or limit access to specific websites or Internet services by filtering domain name requests. 
- [IP/MAC Binding](security.md#ipmac-binding): Bind network device's IP address to its MAC address. 
- [ALG](security.md#alg): Inspect and modify application-layer data in network traffic to allow it to pass through firewalls and other security devices more easily.
- [WiFi Schedule](security.md#wifi-schedule): Turn on/off the AP controller's wireless network automatically at a specific time.

**[System](system.md)**  

<img src="../../../images/noteicon.webp" alt="" /> In AP Controller mode, TR069 is NOT available.

- [System Time](system.md#system-time): Configure the AP controller's system time, necessary for some time-based functions.
- [Auto Upgrade](system.md#auto-upgrade): Schedule to automatically upgrade the firmware to the latest version.
- [Backup/Restore](system.md#backuprestore): Backup the configuration file or restore it.
- [Administration](system.md#administration): Access and manage the AP controller from the local or remote devices.
- [Admin Account](system.md#admin-account): Change the AP controller's login password.
- [Language](system.md#language): Customize the AP controller's web management language.
- [Timed Reboot](system.md#timed-reboot): Schedule for the AP controller rebooting.
- [Reboot](system.md#reboot): Reboot the AP controller for the settings or changes to take effect.
- [Reset](system.md#reset): Restore the AP controller to its factory default settings.
- [TR069](system.md#tr069): Configure the AP controller's TR069 (CPE WAN Management).

### IV. Diagnostic Tools
- [Diagnosis](diagnostic_tools.md#diagnosis): Automatically check AP health and generates troubleshooting reports.
- [PING](diagnostic_tools.md#ping): Used to test the connectivity between the AP controller and the tested host, and measure the round-trip time.
- [TRACEROUTE](diagnostic_tools.md#traceroute): Used to test the route or path your AP controller has passed to reach the tested host, and measure transit delays of packets across an Internet Protocol network.
- [NSLOOKUP](diagnostic_tools.md#nslookup): Query DNS servers to resolve domain names into IP addresses.
- [System Log](diagnostic_tools.md#system-log): Track all the AP controller behaviors. 