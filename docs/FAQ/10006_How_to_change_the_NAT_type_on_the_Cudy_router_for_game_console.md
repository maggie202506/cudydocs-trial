# How to change the NAT type on the Cudy router for game console?
Some customers get a warning when play games with Cudy router. The router's NAT type is NAT3. You need to change the NAT type of router. Please follow the methods below.

1. Check the IP address of your game console. You can check it on settings on your game console. You can also check it on the device list of your Cudy router. Please login to the web page of your Cudy router by [http://cudy.net/](http://cudy.net/) or [http://192.168.10.1/](http://192.168.10.1/). Input the password to login. As shown below. For example: the IP address is **192.168.200.76**.

    <img src="https://cdn.jsdelivr.net/gh/cudytech-pr/User-Guide/docs/images/FAQ/10006/Devices.webp" alt="Devices" width="800px" style="display: block; margin: 0 auto;">

    <img src="https://cdn.jsdelivr.net/gh/cudytech-pr/User-Guide/docs/images/FAQ/10006/Devices_list.webp" alt="Devices_list" width="800px" style="display: block; margin: 0 auto;">

2. The first Method: Set the IP address of the game console to be the DMZ IP address. Please go to the **Advanced Settings** --- **DMZ** function page. Enable the DMZ function and input the IP address of the game console.

    <img src="https://cdn.jsdelivr.net/gh/cudytech-pr/User-Guide/docs/images/FAQ/10006/DMZ.webp" alt="DMZ" width="400px" style="display: block; margin: 0 auto;">

3. The second Method: Set the port forward function to open ports to the IP address of the game console. Please go to the **Advanced Settings** --- **Port Forwards** function page. Add the necessary ports to the IP address of the game console. Take **Xbox** for example. 
    
    - UDP: 88, 3074

    - TCP: 3074

    Please add three port forward rules, as shown below.

    <img src="https://cdn.jsdelivr.net/gh/cudytech-pr/User-Guide/docs/images/FAQ/10006/xbox_example.webp" alt="add" width="800px" style="display: block; margin: 0 auto;">

    Other game consoles may need other ports to be forwarded. You can refer to this website [Port forward on different Games](https://portforward.com/games/).