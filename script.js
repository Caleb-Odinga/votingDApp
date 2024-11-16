const CONTRACT_ADDRESS = "0xc19F41A6442C75AA1B8241D0F2963176A6E8294f";
const CONTRACT_ABI = [
            {
                "inputs": [
                    {
                        "internalType": "string[]",
                        "name": "candidateNames",
                        "type": "string[]"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "candidateId",
                        "type": "uint256"
                    }
                ],
                "name": "vote",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "candidateCount",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "candidates",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "voteCount",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "candidateId",
                        "type": "uint256"
                    }
                ],
                "name": "getCandidate",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "voteCount",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "hasVoted",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ];


let web3;
let contract;

window.onload = async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.enable();

        contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
        loadCandidates();
    } else {
        alert("Please install MetaMask to use this DApp.");
    }
};

async function loadCandidates() {
    const candidateCount = await contract.methods.candidateCount().call();
    const candidatesDiv = document.getElementById("candidates");
    candidatesDiv.innerHTML = "";

    for (let i = 0; i < candidateCount; i++) {
        const candidate = await contract.methods.getCandidate(i).call();
        candidatesDiv.innerHTML += `<p>Candidate ${i}: ${candidate[0]} - ${candidate[1]} votes</p>`;
    }
}

document.getElementById("vote-button").onclick = async () => {
    const candidateId = document.getElementById("candidate-id").value;
    const accounts = await web3.eth.getAccounts();

    try {
        await contract.methods.vote(candidateId).send({ from: accounts[0] });
        document.getElementById("status").textContent = "Vote submitted successfully!";
        loadCandidates();
    } catch (error) {
        document.getElementById("status").textContent = "Error: " + error.message;
    }
};
