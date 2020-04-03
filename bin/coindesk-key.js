const program = require('commander');
const keys = require('./commands/key')

program
    .command('set')
    .description('Set New Api -- Get at https://nomics.com')
    .action(keys.set)


program
    .command('show')
    .description('show API Key')
    .action(keys.show)

program
    .command('remove')
    .description('Remove API Key')
    .action(keys.remove)

program.parse(process.argv)