### Summary:
This repo includes helpful scripts/contract libraries that can be used to make debugging and hashing data easier.

### Usage:
## Contracts:
# Base64.sol:
In your solidity contract, encode token metadata or similar into base64 as follows:

string memory json = Base64.encode(
    abi.encodePacked(
        '{"name": "',
        charAttributes.name,
        ' NFT #: ',
        Strings.toString(_tokenId + 1),
        '", "description": "Nft description", "image": "',
        charAttributes.imageURI,
        '", "attributes": [ { "trait_type": "speed", "value": ',strSpeed,'} ]}'
   )
);

# Hex.sol:
Convert bytes data into a hex string for debugging within your solidity contract:

bytes32 eventHash = keccak256(
      abi.encodePacked(
        _eventParams.tokenURI,
        _eventParams.claimableExpiryDate,
        _eventParams.eventCreator,
        _eventParams.totalSupply
      )
    );
    console.log(HexConverter.toHex(eventHash));

## Scripts:
hardhat-chai-matchers library will allow you to check if an event is emitted (see https://hardhat.org/hardhat-chai-matchers/docs/reference).

However, to check the values of the event emitted, use the getEventData from the "scripts" folder in your unit tests as follows:

const receipt = await (await contract.someMethod(withParams)).wait(1);
const event = getEventData("EventCreated", contract, receipt);
expect(event.tokenId).to.be.equal(0);