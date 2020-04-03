const inquirer = require('inquirer')
const colors = require('colors')
const KeyManager = require('../lib/KeyManager')
const { isRequired } = require('../utils/validation')

const key = {
    async set() {
        const keyManager = new KeyManager();
        const input = await inquirer.prompt([{
            type: 'input',
            name: 'key',
            message: 'Enter API Key '.green + 'https://nomics.com',
            validate: isRequired
        }])
        const key = keyManager.setKey(input.key)
        if (key) {
            console.log('API Key Set'.blue);
        }
    },
    show() {
        try {
            const keyManage = new KeyManager();
            const key = keyManage.getKey();
            console.log('Current Api key: ', key.yellow)
        } catch (error) {
            console.log(error.message.red)
        }
    },
    remove() {
        try {
            const keyManage = new KeyManager();
            keyManage.deleteKey();
            console.log('API key deleted'.green)
        } catch (error) {
            console.log(error.message.red)
        }
    }
}

module.exports = key