**A decentralized application (DApp) ** for conducting secure and transparent voting using the Ethereum blockchain. This project allows users to vote for predefined candidates and view the current vote counts in real time.

**Features**

Decentralized voting powered by a Solidity smart contract.

Real-time vote count updates displayed on the frontend.

MetaMask integration for secure wallet interaction.

Deployed on the Sepolia Testnet.

Security to ensure an address can only be used to vote once

**Getting Started**

_Prerequisites_

MetaMask browser extension installed and connected to the Sepolia Testnet.

A modern web browser (e.g., Chrome, Firefox, Brave).

Basic knowledge of Ethereum and smart contracts is a plus!

**Installation**

1._Clone this repository _
    git clone https://github.com/Caleb-Odinga/votingDapp.git
      cd voting-dapp

2._Open the project folder in your text editor_

3._Serve the project locally_: 
   Use a lightweight HTTP server (e.g., Live Server for VS Code or http-server)
      or you can use the following command if you have node installed: npx http-server

  Open the provided localhost URL in your browser.

4._Interact with the DApp_:
    Ensure MetaMask is connected to the Sepolia Testnet.
     View the candidates, cast your vote, and check the updated results.
     You can only vote once from the same addresss 

**Smart Contract Details**

Deployment: The smart contract is deployed on the Sepolia Testnet.

Contract Name: Voting

Deployed Address: 0xC4B2a13ee6981CBA83B6eC48553cb3c401b87Fcf

Constructor Arguments: List of candidate names (e.g., ["Ruto", "Raila", "Karua"]).
ABI
The contract ABI is located in the script.js file.

**Usage**

View Candidates: The DApp displays the list of candidates with their current vote counts.

Cast a Vote: Enter the Candidate ID in the input field.

Click Vote and confirm the transaction in MetaMask.

Check Results:After a successful transaction, the candidate’s vote count updates in real time.

**Project Structure**
 
 voting-dapp/

├── index.html       # Main HTML file

├── style.css        # Styling for the DApp

├── script.js        # JavaScript for frontend logic and Web3.js interaction

├── README.md        # Project documentation

└── Voting.sol       # Solidity smart contract

**Tech Stack**

Frontend: HTML, CSS, JavaScript

Blockchain: Ethereum (Sepolia Testnet)

Wallet Integration: MetaMask

Library: Web3.js

Smart Contract: Solidity

**Future Enhancements**

Add live blockchain event listeners for real-time updates.

Improve UI/UX for better user experience.

Add more features like voting restrictions, result summaries, admin controls.

Deploy on the Ethereum mainnet.

Contributing: Contributions are welcome! Feel free to fork the repository and submit a pull request.

**Acknowledgments**

Ethereum and the Solidity documentation.

Remix IDE for smart contract development.

Web3.js library for blockchain interaction.

_//Shakii _
