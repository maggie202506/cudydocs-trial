# What can I do if I can't login to the web page of Cudy routers?
Dear Customer,

Please follow the steps below.

1. Check that the router has been powered on and started normally. 
    - You can use the power adapter included in the package. If you don't use that power adapter, please use a power adapter with the same voltage as the one marked on the label of your router. The current must be at least the rated current marked on the label.
    - After powering on, wait for about 1 minute for the device to start up. At this time, you can use a mobile phone or other terminal to try to search for the SSID marked on the router label.

    <img src="https://cdn.jsdelivr.net/gh/cudytech-pr/User-Guide/docs/images/FAQ/10001/routerlabel.webp" alt="router" width="500px" style="display: block; margin: 0 auto;" >
    
    <img src="https://cdn.jsdelivr.net/gh/cudytech-pr/User-Guide/docs/images/noteicon.webp" alt="" > If you wait for more than 3 minutes, the router's default SSID still cannot be found. Please try to reset the router to factory default by long pressing the reset button for about 3 seconds. You can release the reset button when the LED flashes.  Then try again after the router restarts.

2. Check to confirm that the terminal is connected to the router.  
    - **Wireless connection**: Please use your mobile phone, tablet or computer to search for the default Wi-Fi SSID of the router: Cudy-XXXX and Cudy-XXXX-5G, and enter the Wi-Fi password to connect. The SSID and Password are printed on the label of router.
    - **Network cable connection**: Please connect the computer to the LAN port of the router through a network cable. The LED of the LAN port you connect will be light on if there is one.
    
    <img src="https://cdn.jsdelivr.net/gh/cudytech-pr/User-Guide/docs/images/noteicon.webp" alt="" > If you are using a mobile phone or tablet, turn off mobile data or VPN, if applicable.

3. Check the TCP/IP Settings of the terminals.
    - If using a computer, ensure its network TCP/IP settings are configured to obtain an IPv4 address automatically.  Windows Example:
    - If you have configured your PC’s wireless network adapter with a custom IP address and DNS settings. You should switch back to obtaining them automatically.
        - Press Windows+R to open the Run box. Then, type ncpa.cpl and select OK.
        - Right-click the Wired or Wi-Fi adapter and select Properties.
        - Under the Networking tab, double-click Internet Protocol Version 4 (TCP/IPv4) Properties.
        
        <img src="https://cdn.jsdelivr.net/gh/cudytech-pr/User-Guide/docs/images/FAQ/10001/TCPIPV4.webp" alt="tcpipv4" width="500px" style="display: block; margin: 0 auto;" >

    - Select the radio buttons next to Obtain an IP address automatically and Obtain DNS server address automatically.

    <img src="https://cdn.jsdelivr.net/gh/cudytech-pr/User-Guide/docs/images/FAQ/10001/DHCPclient.webp" alt="dhcp" width="500px" style="display: block; margin: 0 auto;" >

4. Verify that the router’s management address is correctly entered in the web browser.
    You can use either [http://cudy.net/](http://cudy.net/) or [http://192.168.10.1/](http://192.168.10.1/)  to log in to the web interface of your Cudy router for initial setup. Please type and check carefully.

5. Try changing the access terminal or web browser.
    - If you can't open the login page of the router on a phone, please try another terminal, such as a laptop, pad etc.
    - You also can try other web browsers on the terminal.

6. Try to use Cudy APP.
    Most of our Cudy router can be managed by the Cudy APP. Please install Cudy APP and try to setup the router via APP. You can download Cudy APP in Google Play and Apple APP Store. Please check the details of the APP on the website [https://www.cudy.com/cudy_app](https://www.cudy.com/cudy_app).

7. Please check and shutdown the WEB proxy and VPN on the terminal. Then try again.

8. Please try to reset the router to factory default by long pressing the reset button for about 3 seconds. You can release the reset button when the LED flashes.  Then try again after the router restarts.