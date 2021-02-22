let Flashloan = artifacts.require('Flashloan');

module.exports = function(deployer, network) {
	let lendingPoolAddressesProviderAddress;

    console.log('Network', network);
	switch (network) {
		case 'mainnet':
		case 'mainnet-fork':
		case 'development': // For Ganache mainnet forks
            lendingPoolAddressesProviderAddress = '0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5'
            // V1
 			// lendingPoolAddressesProviderAddress = '0x24a42fD28C976A61Df5D00D0599C34c4f90748c8';
			break;
		case 'ropsten':
		case 'ropsten-fork':
			lendingPoolAddressesProviderAddress = '0x1c8756FD2B28e9426CDBDcC7E3c4d64fa9A54728';
			break;
		case 'kovan':
		case 'kovan-fork':
            lendingPoolAddressesProviderAddress = '0x88757f2f99175387aB4C6a4b3067c77A695b0349'
            // V1
			// lendingPoolAddressesProviderAddress = '0x506B0B2CF20FAA8f38a4E2B524EE43e1f4458Cc5';

			break;
		default:
			throw Error(`Are you deploying to the correct network? (network selected: ${network})`);
	}

	deployer.deploy(Flashloan, lendingPoolAddressesProviderAddress);
};
