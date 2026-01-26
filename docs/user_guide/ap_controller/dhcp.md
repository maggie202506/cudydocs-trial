# DHCP Server

When the controller works in the mode of *Main Router and AP Controller*, it could also acts as a DHCP (Dynamic Host Configuration Protocol) server to dynamically assign TCP/IP parameters to client devices from the IP Address Pool. DO NOT disable DHCP server unless you have another DHCP server, or you want to manually assign the TCP/IP parameters to every client device on the network. 

Go to *Advanced Settings -> Network -> DHCP Server* or *System Status-> DHCP Server -> More Details* to see if it is *Enabled* or *Disabled* as well as its IP address and subnet mask. Click *More Details* to know more information about it or make changes on Settings page.

## DHCP Status

<img src="https://cdn.jsdelivr.net/gh/Cudytech-pr/User-Guide/docs/images/ap_controller/status-dhcp.webp" alt="" width="800px" style="border: 1px solid #eee;" />

- Status: Indicates whether the DHCP service is active (enabled) or inactive (disabled) on the network.
- IP Start: Display the first IP address in the range that the DHCP server can assign to devices.
- IP End: Display the last IP address in the assignable range for DHCP leases.
- Preferred DNS: Display the primary DNS server IP provided by DHCP for domain resolution.
- Default Gateway: Display the router/firewall IP that devices use to access external networks.
- Lease time: Display the duration a device retains an assigned IP before renewal.

## DHCP Leases

<img src="https://cdn.jsdelivr.net/gh/Cudytech-pr/User-Guide/docs/images/ap_controller/status-dhcp2.webp" alt="" width="800px" style="border: 1px solid #eee;" />

The DHCP Leases will show a list of clients which the Router being a DHCP server has allocated an IP address to, including such information as IP address, MAC address and Host name.

## DHCP Settings

<img src="https://cdn.jsdelivr.net/gh/Cudytech-pr/User-Guide/docs/images/ap_controller/status-dhcp3.webp" alt="" width="800px" style="border: 1px solid #eee;" />

**To specify the IP address that the Router assigns, please follow the steps below.**

1.Enable the DHCP Server.

2.Enter the starting IP addresses and the Limit number to create the IP Address Pool.

3.(Optional) Enter the DNS if the ISP offers. 

4.Enter the Lease time.

5.Click *Save & Apply*.

!!! Note
     If you want to reserve for a specified client device an IP address, which is assigned by the router as a DHCP server, you may use the [IP/MAC binding](security.md#ipmac-binding) function.