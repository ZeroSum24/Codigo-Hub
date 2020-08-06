
  
<h1  align="center" style="text-align: center;"><span  align="center" style="color: #ff0000;"><strong><span align="center" style="color: #FF0000;"> Código Hub
</span> </strong></span></h1>
<p style="text-align: center;">&nbsp;</p>
<p align="center">

<img alt="Código Hub" src="src/images/codigo_225.png">
</p>


##Project Overview

Código is a firmware distribution service built on top of the Ethereum blockchain and IPFS. Código natively allows developers to upload firmware for different devices and provides rudimentary search capabilities for users. Users can download firmware either by requesting a specific firmware image from a known developer or utilising a built-in web of trust model to automatically select a trusted developer.

This project aims to produce a DApp front end driver for Código, called Código Hub, to make it easier for developers to manage the firmware they upload to the network and for users to discover new firmware for their devices.

For developers we provide a convenient UI for viewing previously uploaded firmware, Filecoin integration for friction-less persistence on IPFS and a bounty system which rewards developers with ETH for filling unmet needs in the IoT domain.

For users we provide a graphical method for searching all firmware available on the network, automatic firmware deployment via MQTT (for supported devices), a reputation system to help users make trust decisions about individual firmware or developers, and the bounty system which allows users to offer ETH in return for novel features.

Código Hub is built using React.js, Redex, Redux Persist and 3box. Intergration with several custom Ethereum 1.0 smart contracts is provided by Metamask. Filecoin and IPFS integration is provided by the Textile Powergate Javascript library and a hosted Powergate instance provided by Textile. Websocket MQTT is used to communicate with and automatically deploy firmware to compatible devices.

</div>

##Future Work 

There are some improvements that could be made to app in the future:
* Inspect developer history on the Código Network using The Graph
* Use Unstoppable Domains to allow developers to add their crypto domain to their profile
* Stricter validation using user reputation, firmware metrics and CHAINIAC
moving instead to a system like fixed membership numbers


## Technologies Used
[React](https://codigo-hub.com/) <br />
[Fleek](https://codigo-hub.com/) <br />
[Textile](https://codigo-hub.com/) <br />
[Filecoin](https://codigo-hub.com/) <br />
[Ethereum](https://codigo-hub.com/) <br />
[MetaMask](https://codigo-hub.com/) <br />
[Redux](https://codigo-hub.com/) <br />
[IPFS](https://codigo-hub.com/) <br />
[3Box](https://codigo-hub.com/) <br />



## Software Developers

* **[Stephen Waddell](https://github.com/ZeroSum24)** <br />
* **[Michal Michaelides](https://github.com/michaelg9)** <br />
* **[Alex Shand](https://github.com/Alex-Shand)** <br />
* **[Mahbub Iftekhar](https://www.mahbubiftekhar.co.uk/)** <br />
* **[Bernard Choo](https://github.com/Bernardchoo)** <br />



## CODE LICESNSE - MIT

MIT Licence

Copyright (c) 2020

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
