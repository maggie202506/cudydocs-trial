# How to configure IP Reservation on the Cudy router?
IP Reservation, is used to allocate a static IPv4 address to a MAC address.

1. Please login to the web page of your Cudy router by [http://cudy.net/](http://cudy.net/) or [http://192.168.10.1/](http://192.168.10.1/). Input the password to login.

2. Click **Advanced Settings** -> **IP/MAC Binding** in the **Security** section.

    <img src="https://cdn.jsdelivr.net/gh/Cudytech-pr/User-Guide/docs/images/faq/10005/ip_mac_binding.webp" alt="ipmac" width="800px" style="display: block; margin: 0 auto;">

3. Click **Add** to append one entry to the list. Select the device from the MAC-Address list and enter the IP address that you want to allocate. Enter a **Comment** for this entry optional.

    <img src="https://cdn.jsdelivr.net/gh/Cudytech-pr/User-Guide/docs/images/faq/10005/add_item.webp" alt="add" width="800px" style="display: block; margin: 0 auto;">

    Click **Save & Apply**.

Disconnect the device and connect again. Then you can check the IP address of the device if the IP Address you set.

!!!Note
    The IP Address and MAC Address of these entries also ARP bind.