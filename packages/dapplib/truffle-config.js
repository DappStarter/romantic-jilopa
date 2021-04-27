require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remember essay hockey knee blue gather'; 
let testAccounts = [
"0x0cf752138d8312c7b604563a7a74e69ba046394ec0d9613447b98f411aab761c",
"0xf732dcf771012c00f177d30778ca28efa7a8b35f24704fbb189d144cbb66ea8a",
"0xe46c1db43018cff1e3afc523ae64c20c3528722682bd0f9078912fac6306422e",
"0x30cd38bb908098541d0cc6b81684b2305545817dd43e5f038e82118680dacc1a",
"0xede7b6e4710021959112b27102d4bf4067a66279dd22eb5fd74df3114d1a66ed",
"0xb8f349aa78fb987141d14cc2000a59152c0e0889c3a80252d5a4720b1d49b7ba",
"0x75cf464fbfa066f8aec24da973855a83e7a3c499e54f9f996899cf6246c90c74",
"0x47103238317f81763ff95d8b77b1eab0fa630cea3d50a068f318b2cfe1f4ca02",
"0xfc4929b046576a7f43f2e8abb8780f7d541247f102d5c4eb9ad03d950cf2fc0e",
"0x869af451014c7941a4bf41efa51561cabc33b8c734092123a0b9977dfd7866c6"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
