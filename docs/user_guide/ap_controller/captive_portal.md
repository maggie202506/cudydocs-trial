# Captive Portal

Allows you to design a portal page for network access verification. Customers are directed to view an advertisement or accept set terms before being granted Internet access. In this way, it offers unique marketing opportunities for small businesses to improve brand awareness and deliver marketing messages. 

<img src="https://cdn.jsdelivr.net/gh/Cudytech-pr/User-Guide/docs/images/ap_controller/general-captive.webp" alt="" width="800px" style="border: 1px solid #eee;" />

- Enable: Toggle to activate the Captive Portal feature for the APs.
- Authentication Type: Select to define the login method.
    - No Authentication: Open network with no login required (e.g., public Wi-Fi).
    - Local Password: Uses a pre-shared key (PSK) stored on the AP/controller (e.g., WPA2-Personal for simple private networks). When selected, it is required to set a password.
    - External Portal Server: Redirects authentication to an external system.

*Continue to configure the below parameters if No Authentication/Local Password is selected as the Authentication Type:*

- Authentication Timeout: Sets the maximum time in seconds for users to complete authentication.
- Landing Page: Enable it and enter the URL you would like to redirect the clients/users to see before logging in.
- Portal Customization: Customize the portal's visual design and content.
    - Logo: Enable to display a logo on the login page.
    - Logo Picture: Click *Browse...* to locate and upload the logo image file, e.g., company logo.
    - Background Picture: Click *Browse...* to locate and upload a background image for the portal.
    - Title Text: Edit the main heading, e.g., "Welcome to Guest Wi-Fi".
    - Title Color: Adjust the color of the title text.
    - Welcome Text: Customize the secondary greeting message.
    - Welcome Color: Change the color of the welcome text.
    - Button Text: Modify the login button label.
    - Button Color: Set the button's background/text color.
    - Term of Service: Enable it and customize legal terms users must accept.
    - Copyright: Enable it and set the copyright info at the page footer.

*Continue to configure the below parameters if External Portal Server is selected as the Authentication Type:*
<img src="https://cdn.jsdelivr.net/gh/Cudytech-pr/User-Guide/docs/images/ap_controller/general-captive2.webp" alt="" width="800px" style="border: 1px solid #eee;" />

- Authentication Type: Select External Portal Server to delegate authentication to an external system.
- Local Network: Define the VLAN/IP range for unauthenticated clients. Set the field to an unused /24 private subnet that matches the guest VLAN on your switch or firewall; if none exists, keep the default 10.1.30.0/24 and ensure the upstream port carries the corresponding VLAN tag.
- Captive Portal URL: (Optional) Specify the redirect URL for authentication.
- Profile: Choose a pre-configured portal template or custom profile for branding.
    - HotspotSystem: A commercial-grade portal for monetized or branded guest Wi-Fi, configured via cloud dashboard with payment/voucher options.
    - Iron Wi-Fi: Social media-focused authentication (e.g., Facebook login), set up by API integration and splash page customization.
    - ObiFi: SIM-like secure access for enterprises, configured with data plans and RADIUS/SSO integration.
    - VulaCoin: Blockchain-based Wi-Fi with crypto payments, requiring wallet integration and token rules.
    - WorldSpot.net: Geo-fenced portals for location-based content, set up via GPS zones and local ads.
    - WiFiMAX: Carrier-scale Wi-Fi management (ISPs), deployed with RADIUS and bandwidth throttling.
    - Manual: Fully customizable (HTML/CSS), ideal for developers or unique protocols.

- RADIUS NAS ID: (Optional) For HotspotSystem/lron Wi-Fi/WorldSpot.net/WiFiMAX only. Enter a unique identifier for the AP/controller in RADIUS logs.
- Lease time: Set session duration before re-authentication.
- CoA Port: RADIUS Change of Authorization port (default 3799) for dynamic policy updates.
- UAM Secret: (Optional) For Iron Wi-Fi/WorldSpot.net only. Enter a shared key for secure communication between the portal and authentication server.
- UAM Server: (Optional) For VulaCoin/WiFiMAX only. A dedicated service handling authentication (e.g., payment verification for VulaCoin or RADIUS-coordinated access control for WiFiMAX).
- RADIUS Secret: (Optional) For Iron Wi-Fi/WorldSpot.net only. Enter the password used to encrypt RADIUS protocol exchanges.