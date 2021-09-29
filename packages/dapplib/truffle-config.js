require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note meadow coin gesture crew force gather'; 
let testAccounts = [
"0xeb36c1110ea64be06383e777566c699c89d916ab25f50fe1d43648ec51dc8a79",
"0xccc17205d3cd76566542a0c1a906900700de37d1f4bcc9debf0653fa6b083ab9",
"0xbc772d1e50fec4948aa9edf1e5acb04a6b49ab65cb583d4f10f57e748b4f8760",
"0xd876dd93de7e47b626ad3773db2724c80d7ba83989f6fd8cf07cc6af26b60a77",
"0x66e8d7c84ae8f5296be300c69bef79d00e8c759d77dc740a1523b49ef9071ad8",
"0xaba6cfe1f0ee4c8bd9803e91c29b2cfcc6ea2146562e99529490370c01a56074",
"0xaf40a4cddd4b9ebb42ec6a19d1cd7a578a343d0ac179df7259cf7f6adf17722e",
"0x159548f84e2e0b4d036fe6ae8407dacf4f1bd63ac13088e5543a4032118d1a43",
"0x4e1981b9681162cb93f950c9a47310f6b2c12bb0acd0e375ecd21215d3e1d9eb",
"0x2994a3d6351eba4722ea917d3b172b94fcc6c1d9af7dcf159f03f98309b245f6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


