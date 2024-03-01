// import { Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import Web3 from 'web3';
// import { Contract } from 'web3-eth-contract';

// @Injectable()
// export class ContractService {
//   private web3: Web3;
//   private contract: Contract<any>;
//   private infura_project_id: string;
//   private contract_abi: any;
//   private contract_adress: string;

//   constructor(private readonly configService: ConfigService) {
//     this.infura_project_id =
//       this.configService.get<string>('INFURA_PROJECT_ID');
//     this.contract_abi = [] as const;
//     this.contract_adress = this.configService.get<string>('CONTRACT_ADDRESS');
//     this.web3 = new Web3(
//       `https://goerli.infura.io/v3/${this.infura_project_id}`,
//     );
//     this.contract = new this.web3.eth.Contract(
//       this.contract_abi,
//       this.contract_adress,
//     );

//     this.startListeningToEvents();
//   }

//   private startListeningToEvents() {
//     this.contract.events
//       .OrderCreated({})
//       .on('data', (event) => {
//         console.log('OrderCreated event:', event);
//         // Your logic for handling the OrderCreated event
//       })
//       .on('error', console.error);

//     this.contract.events
//       .OrderMatched({})
//       .on('data', (event) => {
//         console.log('OrderMatched event:', event);
//         // Your logic for handling the OrderMatched event
//       })
//       .on('error', console.error);

//     this.contract.events
//       .OrderCancelled({})
//       .on('data', (event) => {
//         console.log('OrderCancelled event:', event);
//         // Your logic for handling the OrderCancelled event
//       })
//       .on('error', console.error);
//   }
// }
