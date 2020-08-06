
  
<h1  align="center" style="text-align: center;"><span  align="center" style="color: #ff0000;"><strong><span align="center" style="color: #FF0000;"> Código Hub
</span> </strong></span></h1>
<p style="text-align: center;">&nbsp;</p>
<p align="center">

<img alt="Código Hub" src="src/images/codigo_225.png" width="200">
</p>


## Project Overview

[Código](https://codigo-hub.com/) is a firmware distribution service built on top of the Ethereum blockchain and IPFS. Código natively allows developers to upload firmware for different devices and provides rudimentary search capabilities for users. Users can download firmware either by requesting a specific firmware image from a known developer or utilising a built-in web of trust model to automatically select a trusted developer.

This project aims to produce a DApp front end driver for Código, called Código Hub, to make it easier for developers to manage the firmware they upload to the network and for users to discover new firmware for their devices.

For developers we provide a convenient UI for viewing previously uploaded firmware, Filecoin integration for friction-less persistence on IPFS and a bounty system which rewards developers with ETH for filling unmet needs in the IoT domain.

For users we provide a graphical method for searching all firmware available on the network, automatic firmware deployment via MQTT (for supported devices), a reputation system to help users make trust decisions about individual firmware or developers, and the bounty system which allows users to offer ETH in return for novel features.

[Código Hub](https://codigo-hub.com/)  is built using React.js, Redex, Redux Persist and 3box. Intergration with several custom Ethereum 1.0 smart contracts is provided by Metamask. Filecoin and IPFS integration is provided by the Textile Powergate Javascript library and a hosted Powergate instance provided by Textile. Websocket MQTT is used to communicate with and automatically deploy firmware to compatible devices.
</div>

## System Design Diagram
<img alt="System Diagram" src="src/images/overview.png">



## [Demo Video](https://codigo-hub.com/)
You can view our demo video by clicking [here](https://codigo-hub.com/)

## Technologies Used
[React](https://reactjs.org/) <br />
[Fleek](https://fleek.co/) <br />
[Textile](https://codigo-hub.com/) <br />
[Filecoin](https://filecoin.io/) <br />
[Ethereum](https://ethereum.org/en/) <br />
[MetaMask](https://metamask.io/) <br />
[Redux](https://redux.js.org/introduction/getting-started) <br />
[IPFS](https://ipfs.io/) <br />
[3Box](https://3box.io/) <br />

## Developers

* **[Stephen Waddell](https://github.com/ZeroSum24)** <br />
* **[Michael Michaelides](https://github.com/michaelg9)** <br />
* **[Alex Shand](https://github.com/Alex-Shand)** <br />
* **[Mahbub Iftekhar](https://www.mahbubiftekhar.co.uk/)** <br />
* **[Bernard Choo](https://github.com/Bernardchoo)** <br />


## Future Work 

There are some improvements that could be made to app in the future:
* Inspect developer history on the Código Network using The Graph
* Use Unstoppable Domains to allow developers to add their crypto domain to their profile
* Stricter validation using user reputation, firmware metrics and CHAINIAC
moving instead to a system like fixed membership numbers


