const SimpleSmartContract = artifacts.require('SimpleSmartContract')

contract('SimpleSmartContract', async () => {
  let simpleSmartContract = null

  before('Should properly delpoy the smart contract', async () => {
    simpleSmartContract = await SimpleSmartContract.deployed()
    console.log('\tAddress is: ' +  simpleSmartContract.address)
    assert(simpleSmartContract.address !== '')

    await simpleSmartContract.set('Hello World')
    const data = await simpleSmartContract.get()
    assert(data === 'Hello World')
  })

  it('Should add an ID to the ids array', async () => {
    await simpleSmartContract.addId(10)
    // Use default getter
    const result = await simpleSmartContract.ids(0)
    assert(result.toNumber() === 10)
  })

  it('Should read an ID from the ids array', async () => {
    const result = await simpleSmartContract.getId(0)
    assert(result.toNumber() === 10)
  })

  it('Should read all IDs from the ids array', async () => {
    const result = await simpleSmartContract.getIds()
    const ids = result.map(id => id.toNumber())
    assert.deepEqual(ids, [10])
  })

  it('Should read ID array length', async () => {
    const result = await simpleSmartContract.getIdLength()
    assert(result.toNumber() === 1)
  })

})
