import web3 from "web3_config/web3";
import contractArtifact from "contracts/build/MediStore.json";

// Get Deployed address dynamicly
const deployments = Object.keys(contractArtifact.networks);
const deployedAddress =
  contractArtifact.networks[deployments[deployments.length - 1]].address;
// Contract ABI
const abi = contractArtifact.abi;

export default new web3.eth.Contract(abi, deployedAddress);
