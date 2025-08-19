# How_to_recover_Cudy_devices'_firmware_via_TFTP ?
Dear Customer,

Please follow the steps below.

1. Please prepare a TFTP tool on your computer in advance.

<img src="../../images/FAQ/10002/tftp_tool.png">

2. Download the official firmware of the Cudy device from the Cudy official website, and rename the firmware to "**recovery.bin**" , and place it in the same path as the tftp tool;

<img src="../../images/FAQ/10002/tftp_tool_firmware.png">

3. Disconnect the power to the router; connect the computer to the " **LAN** " port of the router with a network cable, and manually configure the computer network interface card to the static IP of the "**192.168.1.88**" .

<img src="../../images/FAQ/10002/IP_SETTINGS.png">

4. Turn off the computer's firewall (you can turn off the firewall by typing '**netsh advfirewall set allprofiles state off** 'on the command line), or turn off the firewall on the settings page.

<img src="../../images/FAQ/10002/turn_off_firewall.png">

5. Then **right-click** to run the tftp tool as an administrator.

<img src="../../images/FAQ/10002/run_tftp.png">

6. Press and hold the RESET button on the router body (do not release it), then power on the router. When TFTP starts transmitting data, release the RESET button.

<img src="../../images/FAQ/10002/upload_firmware_via_tftp.png">

7. After the transfer is complete, wait for a period of time about 2 minutes, when the router's indicator light starts to blink slowly, the firmware update is completed; change the static IP of the computer back to dynamic acquisition, and check if the router recover to normal?
