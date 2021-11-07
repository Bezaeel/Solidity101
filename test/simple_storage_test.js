var simple_storage = artifacts.require("simple_storage");

contract("simple_storage", accts => {
    it("should return correct stored data", async() => {
        let instance = await simple_storage.deployed();
        let _ = await instance.set(20);
        let sd = await instance.get();
        assert.equal(sd, 20);
    })
})