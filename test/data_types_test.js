var data_types = artifacts.require("data_types");

contract("data_types", accts => {
    it.only("should return user", async () => {
        let user = {
            name: "Talabi",
            country: "NG",
        }
        let instance = await data_types.deployed();
        await instance.AddUser(user.name, user.country);
        await instance.AddUser("Opemipo", user.country);
        let result = await instance.GetUser(0);
        console.log(result)

        assert.equal("Talabi", result[0]);
    })
})
