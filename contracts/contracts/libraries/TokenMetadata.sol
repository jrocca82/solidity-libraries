// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

library TokenMetadata {
  using Strings for uint256;

  struct Attributes {
    string traitType;
    string value;
  }

  function formatJsonField(
    string memory _fieldName,
    string memory _value,
    bool _addComma
  ) internal pure returns (bytes memory formattedJsonField) {
    formattedJsonField = abi.encodePacked(
      '"',
      _fieldName,
      '": ',
      '"',
      _value,
      '"'
    );

    if (_addComma) {
      formattedJsonField = bytes.concat(
        formattedJsonField,
        abi.encodePacked(",")
      );
    }
  }

  function formatAttributes(
    Attributes[] memory _attributes,
    bool _addComma
  ) internal pure returns (bytes memory formattedTokenType) {
    formattedTokenType = abi.encodePacked(
      "{",
      formatJsonField("trait_type", _attributes.traitType, true),
      formatJsonField("value", _attributes.value, false),
      "}"
    );

    if (_addComma) {
      formattedTokenType = bytes.concat(
        formattedTokenType,
        abi.encodePacked(",")
      );
    }
  }

  function formatAttributesInMetadata(
    Attributes[] memory _attributes,
  ) internal pure returns (bytes memory attributes) {
    attributes = abi.encodePacked('"attributes": [');

    for (uint256 i = 0; i < _attributes.length; i++) {
      bytes memory formattedType = formatTokenType(
        _attributes[i],
        i != _tokenTypes.length - 1
      );

      attributes = bytes.concat(attributes, formattedType);
    }

    attributes = bytes.concat(attributes, "]");
  }

  function buildTokenURI(
    Attributes[] memory _attributes,
    string memory _name,
    string memory _imageURI,
    string memory _description,
    uint256 _tokenId,
  ) internal pure returns (string memory) {
    bytes memory dataURI = abi.encodePacked(
      "{",
      '"name": "',
      _name,
      " #",
      _tokenId.toString(),
      '",',
      TokenMetadata.formatJsonField("image", _imageURI, true),
      TokenMetadata.formatJsonField("description", _description, true),
      TokenMetadata.formatAttributesInMetadata(_attributes),
      "}"
    );

    return
      string(
        abi.encodePacked(
          "data:application/json;base64,",
          Base64.encode(dataURI)
        )
      );
  }
}