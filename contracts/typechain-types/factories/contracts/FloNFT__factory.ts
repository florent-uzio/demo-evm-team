/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { FloNFT, FloNFTInterface } from "../../contracts/FloNFT";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSpply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060200160405280600081525062000033816200005a60201b60201c565b5062000054620000486200006f60201b60201c565b6200007760201b60201c565b6200049e565b80600290816200006b9190620003b7565b5050565b600033905090565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620001bf57607f821691505b602082108103620001d557620001d462000177565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200023f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000200565b6200024b868362000200565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600062000298620002926200028c8462000263565b6200026d565b62000263565b9050919050565b6000819050919050565b620002b48362000277565b620002cc620002c3826200029f565b8484546200020d565b825550505050565b600090565b620002e3620002d4565b620002f0818484620002a9565b505050565b5b8181101562000318576200030c600082620002d9565b600181019050620002f6565b5050565b601f82111562000367576200033181620001db565b6200033c84620001f0565b810160208510156200034c578190505b620003646200035b85620001f0565b830182620002f5565b50505b505050565b600082821c905092915050565b60006200038c600019846008026200036c565b1980831691505092915050565b6000620003a7838362000379565b9150826002028217905092915050565b620003c2826200013d565b67ffffffffffffffff811115620003de57620003dd62000148565b5b620003ea8254620001a6565b620003f78282856200031c565b600060209050601f8311600181146200042f57600084156200041a578287015190505b62000426858262000399565b86555062000496565b601f1984166200043f86620001db565b60005b82811015620004695784890151825560018201915060208501945060208101905062000442565b8683101562000489578489015162000485601f89168262000379565b8355505b6001600288020188555050505b505050505050565b612c2280620004ae6000396000f3fe608060405234801561001057600080fd5b50600436106100ce5760003560e01c8063715018a61161008c578063e985e9c511610066578063e985e9c5146101fd578063f242432a1461022d578063f2fde38b14610249578063f8072ed514610265576100ce565b8063715018a6146101b95780638da5cb5b146101c3578063a22cb465146101e1576100ce565b8062fdd58e146100d357806301ffc9a7146101035780630e89341c146101335780631249c58b146101635780632eb2c2d61461016d5780634e1273f414610189575b600080fd5b6100ed60048036038101906100e8919061185c565b610283565b6040516100fa91906118ab565b60405180910390f35b61011d6004803603810190610118919061191e565b61034b565b60405161012a9190611966565b60405180910390f35b61014d60048036038101906101489190611981565b61042d565b60405161015a9190611a3e565b60405180910390f35b61016b6104c1565b005b61018760048036038101906101829190611c5d565b6104ff565b005b6101a3600480360381019061019e9190611def565b6105a0565b6040516101b09190611f25565b60405180910390f35b6101c16106b9565b005b6101cb6106cd565b6040516101d89190611f56565b60405180910390f35b6101fb60048036038101906101f69190611f9d565b6106f7565b005b61021760048036038101906102129190611fdd565b61070d565b6040516102249190611966565b60405180910390f35b6102476004803603810190610242919061201d565b6107a1565b005b610263600480360381019061025e91906120b4565b610842565b005b61026d6108c5565b60405161027a91906118ab565b60405180910390f35b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036102f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ea90612153565b60405180910390fd5b60008083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60007fd9b67a26000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061041657507f0e89341c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806104265750610425826108cb565b5b9050919050565b60606002805461043c906121a2565b80601f0160208091040260200160405190810160405280929190818152602001828054610468906121a2565b80156104b55780601f1061048a576101008083540402835291602001916104b5565b820191906000526020600020905b81548152906001019060200180831161049857829003601f168201915b50505050509050919050565b600460008154600101919050819055506104fd6104dc6106cd565b6001806040518060e0016040528060a78152602001612b4660a79139610935565b565b610507610ae5565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16148061054d575061054c85610547610ae5565b61070d565b5b61058c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058390612245565b60405180910390fd5b6105998585858585610aed565b5050505050565b606081518351146105e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105dd906122d7565b60405180910390fd5b6000835167ffffffffffffffff81111561060357610602611a65565b5b6040519080825280602002602001820160405280156106315781602001602082028036833780820191505090505b50905060005b84518110156106ae5761067e858281518110610656576106556122f7565b5b6020026020010151858381518110610671576106706122f7565b5b6020026020010151610283565b828281518110610691576106906122f7565b5b602002602001018181525050806106a790612355565b9050610637565b508091505092915050565b6106c1610e0e565b6106cb6000610e8c565b565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610709610702610ae5565b8383610f52565b5050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6107a9610ae5565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614806107ef57506107ee856107e9610ae5565b61070d565b5b61082e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082590612245565b60405180910390fd5b61083b85858585856110be565b5050505050565b61084a610e0e565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036108b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b09061240f565b60405180910390fd5b6108c281610e8c565b50565b60045481565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036109a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099b906124a1565b60405180910390fd5b60006109ae610ae5565b905060006109bb85611359565b905060006109c885611359565b90506109d9836000898585896113d3565b8460008088815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a3891906124c1565b925050819055508673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628989604051610ab69291906124f5565b60405180910390a4610acd836000898585896113db565b610adc836000898989896113e3565b50505050505050565b600033905090565b8151835114610b31576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b2890612590565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610ba0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b9790612622565b60405180910390fd5b6000610baa610ae5565b9050610bba8187878787876113d3565b60005b8451811015610d6b576000858281518110610bdb57610bda6122f7565b5b602002602001015190506000858381518110610bfa57610bf96122f7565b5b60200260200101519050600080600084815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610c9b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c92906126b4565b60405180910390fd5b81810360008085815260200190815260200160002060008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508160008085815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d5091906124c1565b9250508190555050505080610d6490612355565b9050610bbd565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610de29291906126d4565b60405180910390a4610df88187878787876113db565b610e068187878787876115ba565b505050505050565b610e16610ae5565b73ffffffffffffffffffffffffffffffffffffffff16610e346106cd565b73ffffffffffffffffffffffffffffffffffffffff1614610e8a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e8190612757565b60405180910390fd5b565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610fc0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fb7906127e9565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516110b19190611966565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff160361112d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161112490612622565b60405180910390fd5b6000611137610ae5565b9050600061114485611359565b9050600061115185611359565b90506111618389898585896113d3565b600080600088815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050858110156111f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111ef906126b4565b60405180910390fd5b85810360008089815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508560008089815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112ad91906124c1565b925050819055508773ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628a8a60405161132a9291906124f5565b60405180910390a4611340848a8a86868a6113db565b61134e848a8a8a8a8a6113e3565b505050505050505050565b60606000600167ffffffffffffffff81111561137857611377611a65565b5b6040519080825280602002602001820160405280156113a65781602001602082028036833780820191505090505b50905082816000815181106113be576113bd6122f7565b5b60200260200101818152505080915050919050565b505050505050565b505050505050565b6114028473ffffffffffffffffffffffffffffffffffffffff16611791565b156115b2578373ffffffffffffffffffffffffffffffffffffffff1663f23a6e6187878686866040518663ffffffff1660e01b815260040161144895949392919061285e565b6020604051808303816000875af192505050801561148457506040513d601f19601f8201168201806040525081019061148191906128cd565b60015b61152957611490612907565b806308c379a0036114ec57506114a4612929565b806114af57506114ee565b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114e39190611a3e565b60405180910390fd5b505b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161152090612a2b565b60405180910390fd5b63f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916146115b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115a790612abd565b60405180910390fd5b505b505050505050565b6115d98473ffffffffffffffffffffffffffffffffffffffff16611791565b15611789578373ffffffffffffffffffffffffffffffffffffffff1663bc197c8187878686866040518663ffffffff1660e01b815260040161161f959493929190612add565b6020604051808303816000875af192505050801561165b57506040513d601f19601f8201168201806040525081019061165891906128cd565b60015b61170057611667612907565b806308c379a0036116c3575061167b612929565b8061168657506116c5565b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116ba9190611a3e565b60405180910390fd5b505b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116f790612a2b565b60405180910390fd5b63bc197c8160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614611787576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161177e90612abd565b60405180910390fd5b505b505050505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006117f3826117c8565b9050919050565b611803816117e8565b811461180e57600080fd5b50565b600081359050611820816117fa565b92915050565b6000819050919050565b61183981611826565b811461184457600080fd5b50565b60008135905061185681611830565b92915050565b60008060408385031215611873576118726117be565b5b600061188185828601611811565b925050602061189285828601611847565b9150509250929050565b6118a581611826565b82525050565b60006020820190506118c0600083018461189c565b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6118fb816118c6565b811461190657600080fd5b50565b600081359050611918816118f2565b92915050565b600060208284031215611934576119336117be565b5b600061194284828501611909565b91505092915050565b60008115159050919050565b6119608161194b565b82525050565b600060208201905061197b6000830184611957565b92915050565b600060208284031215611997576119966117be565b5b60006119a584828501611847565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156119e85780820151818401526020810190506119cd565b60008484015250505050565b6000601f19601f8301169050919050565b6000611a10826119ae565b611a1a81856119b9565b9350611a2a8185602086016119ca565b611a33816119f4565b840191505092915050565b60006020820190508181036000830152611a588184611a05565b905092915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611a9d826119f4565b810181811067ffffffffffffffff82111715611abc57611abb611a65565b5b80604052505050565b6000611acf6117b4565b9050611adb8282611a94565b919050565b600067ffffffffffffffff821115611afb57611afa611a65565b5b602082029050602081019050919050565b600080fd5b6000611b24611b1f84611ae0565b611ac5565b90508083825260208201905060208402830185811115611b4757611b46611b0c565b5b835b81811015611b705780611b5c8882611847565b845260208401935050602081019050611b49565b5050509392505050565b600082601f830112611b8f57611b8e611a60565b5b8135611b9f848260208601611b11565b91505092915050565b600080fd5b600067ffffffffffffffff821115611bc857611bc7611a65565b5b611bd1826119f4565b9050602081019050919050565b82818337600083830152505050565b6000611c00611bfb84611bad565b611ac5565b905082815260208101848484011115611c1c57611c1b611ba8565b5b611c27848285611bde565b509392505050565b600082601f830112611c4457611c43611a60565b5b8135611c54848260208601611bed565b91505092915050565b600080600080600060a08688031215611c7957611c786117be565b5b6000611c8788828901611811565b9550506020611c9888828901611811565b945050604086013567ffffffffffffffff811115611cb957611cb86117c3565b5b611cc588828901611b7a565b935050606086013567ffffffffffffffff811115611ce657611ce56117c3565b5b611cf288828901611b7a565b925050608086013567ffffffffffffffff811115611d1357611d126117c3565b5b611d1f88828901611c2f565b9150509295509295909350565b600067ffffffffffffffff821115611d4757611d46611a65565b5b602082029050602081019050919050565b6000611d6b611d6684611d2c565b611ac5565b90508083825260208201905060208402830185811115611d8e57611d8d611b0c565b5b835b81811015611db75780611da38882611811565b845260208401935050602081019050611d90565b5050509392505050565b600082601f830112611dd657611dd5611a60565b5b8135611de6848260208601611d58565b91505092915050565b60008060408385031215611e0657611e056117be565b5b600083013567ffffffffffffffff811115611e2457611e236117c3565b5b611e3085828601611dc1565b925050602083013567ffffffffffffffff811115611e5157611e506117c3565b5b611e5d85828601611b7a565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611e9c81611826565b82525050565b6000611eae8383611e93565b60208301905092915050565b6000602082019050919050565b6000611ed282611e67565b611edc8185611e72565b9350611ee783611e83565b8060005b83811015611f18578151611eff8882611ea2565b9750611f0a83611eba565b925050600181019050611eeb565b5085935050505092915050565b60006020820190508181036000830152611f3f8184611ec7565b905092915050565b611f50816117e8565b82525050565b6000602082019050611f6b6000830184611f47565b92915050565b611f7a8161194b565b8114611f8557600080fd5b50565b600081359050611f9781611f71565b92915050565b60008060408385031215611fb457611fb36117be565b5b6000611fc285828601611811565b9250506020611fd385828601611f88565b9150509250929050565b60008060408385031215611ff457611ff36117be565b5b600061200285828601611811565b925050602061201385828601611811565b9150509250929050565b600080600080600060a08688031215612039576120386117be565b5b600061204788828901611811565b955050602061205888828901611811565b945050604061206988828901611847565b935050606061207a88828901611847565b925050608086013567ffffffffffffffff81111561209b5761209a6117c3565b5b6120a788828901611c2f565b9150509295509295909350565b6000602082840312156120ca576120c96117be565b5b60006120d884828501611811565b91505092915050565b7f455243313135353a2061646472657373207a65726f206973206e6f742061207660008201527f616c6964206f776e657200000000000000000000000000000000000000000000602082015250565b600061213d602a836119b9565b9150612148826120e1565b604082019050919050565b6000602082019050818103600083015261216c81612130565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806121ba57607f821691505b6020821081036121cd576121cc612173565b5b50919050565b7f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60008201527f6572206f7220617070726f766564000000000000000000000000000000000000602082015250565b600061222f602e836119b9565b915061223a826121d3565b604082019050919050565b6000602082019050818103600083015261225e81612222565b9050919050565b7f455243313135353a206163636f756e747320616e6420696473206c656e67746860008201527f206d69736d617463680000000000000000000000000000000000000000000000602082015250565b60006122c16029836119b9565b91506122cc82612265565b604082019050919050565b600060208201905081810360008301526122f0816122b4565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061236082611826565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361239257612391612326565b5b600182019050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006123f96026836119b9565b91506124048261239d565b604082019050919050565b60006020820190508181036000830152612428816123ec565b9050919050565b7f455243313135353a206d696e7420746f20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b600061248b6021836119b9565b91506124968261242f565b604082019050919050565b600060208201905081810360008301526124ba8161247e565b9050919050565b60006124cc82611826565b91506124d783611826565b92508282019050808211156124ef576124ee612326565b5b92915050565b600060408201905061250a600083018561189c565b612517602083018461189c565b9392505050565b7f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060008201527f6d69736d61746368000000000000000000000000000000000000000000000000602082015250565b600061257a6028836119b9565b91506125858261251e565b604082019050919050565b600060208201905081810360008301526125a98161256d565b9050919050565b7f455243313135353a207472616e7366657220746f20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b600061260c6025836119b9565b9150612617826125b0565b604082019050919050565b6000602082019050818103600083015261263b816125ff565b9050919050565b7f455243313135353a20696e73756666696369656e742062616c616e636520666f60008201527f72207472616e7366657200000000000000000000000000000000000000000000602082015250565b600061269e602a836119b9565b91506126a982612642565b604082019050919050565b600060208201905081810360008301526126cd81612691565b9050919050565b600060408201905081810360008301526126ee8185611ec7565b905081810360208301526127028184611ec7565b90509392505050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006127416020836119b9565b915061274c8261270b565b602082019050919050565b6000602082019050818103600083015261277081612734565b9050919050565b7f455243313135353a2073657474696e6720617070726f76616c2073746174757360008201527f20666f722073656c660000000000000000000000000000000000000000000000602082015250565b60006127d36029836119b9565b91506127de82612777565b604082019050919050565b60006020820190508181036000830152612802816127c6565b9050919050565b600081519050919050565b600082825260208201905092915050565b600061283082612809565b61283a8185612814565b935061284a8185602086016119ca565b612853816119f4565b840191505092915050565b600060a0820190506128736000830188611f47565b6128806020830187611f47565b61288d604083018661189c565b61289a606083018561189c565b81810360808301526128ac8184612825565b90509695505050505050565b6000815190506128c7816118f2565b92915050565b6000602082840312156128e3576128e26117be565b5b60006128f1848285016128b8565b91505092915050565b60008160e01c9050919050565b600060033d11156129265760046000803e6129236000516128fa565b90505b90565b600060443d106129b65761293b6117b4565b60043d036004823e80513d602482011167ffffffffffffffff821117156129635750506129b6565b808201805167ffffffffffffffff81111561298157505050506129b6565b80602083010160043d03850181111561299e5750505050506129b6565b6129ad82602001850186611a94565b82955050505050505b90565b7f455243313135353a207472616e7366657220746f206e6f6e2d4552433131353560008201527f526563656976657220696d706c656d656e746572000000000000000000000000602082015250565b6000612a156034836119b9565b9150612a20826129b9565b604082019050919050565b60006020820190508181036000830152612a4481612a08565b9050919050565b7f455243313135353a204552433131353552656365697665722072656a6563746560008201527f6420746f6b656e73000000000000000000000000000000000000000000000000602082015250565b6000612aa76028836119b9565b9150612ab282612a4b565b604082019050919050565b60006020820190508181036000830152612ad681612a9a565b9050919050565b600060a082019050612af26000830188611f47565b612aff6020830187611f47565b8181036040830152612b118186611ec7565b90508181036060830152612b258185611ec7565b90508181036080830152612b398184612825565b9050969550505050505056fe68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a45784e576c6c4f47356e4d5846684d33703065546c79656d78725a6d316f626d5a6c4d4441784d57316862335278615852786333686c64535a6c634431324d563970626e526c636d35686246396e61575a66596e6c666157516d593351395a772f674e6b6532557255546f704f672f67697068792e676966a2646970667358221220f8f309d2bfdd04c9bd33b599adb911907d958c97b88db985fb67e1c3534881ce64736f6c63430008130033";

type FloNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FloNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FloNFT__factory extends ContractFactory {
  constructor(...args: FloNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      FloNFT & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): FloNFT__factory {
    return super.connect(runner) as FloNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FloNFTInterface {
    return new Interface(_abi) as FloNFTInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): FloNFT {
    return new Contract(address, _abi, runner) as unknown as FloNFT;
  }
}