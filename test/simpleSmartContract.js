const SimpleSmartContract = artifacts.require('SimpleSmartContract')

contract('SimpleSmartContract', async () => {

  it('Should properly delpoy the smart contract', async () => {
    const simpleSmartContract = await SimpleSmartContract.deployed()
    console.log('\tAddress is: ' +  simpleSmartContract.address)
    assert(simpleSmartContract.address !== '')

    await simpleSmartContract.set('Hello World')
    const data = await simpleSmartContract.get()
    assert(data === 'Hello World')
  })

})
