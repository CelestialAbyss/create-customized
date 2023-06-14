onEvent('recipes', event => {
    // include me if you want vanilla Minecraft to be better integrated with Create
    event.remove({id:'minecraft:bucket'})
    event.remove({id:'minecraft:clock'})
    event.remove({id:'minecraft:compass'})
    event.remove({id:'minecraft:hopper'})
    event.shaped('minecraft:bucket',[
        'F F',
        ' F '
    ],{
        F: 'create:iron_sheet'
    }).id('create_customized:bucket')
    event.shaped('minecraft:clock',[
        ' G ',
        'GMG',
        ' G '
    ],{
        G: 'create:golden_sheet',
        M: 'create:precision_mechanism'
    }).id('create_customized:mechanical_clock')
    event.shaped('minecraft:compass',[
        ' F ',
        'FRF',
        ' F '
    ],{
        F: 'create:iron_sheet',
        R: 'minecraft:redstone'
    }).id('create_customized:compass')
    event.shaped('minecraft:hopper',[
        'F F',
        'FCF',
        ' F '
    ],{
        F: 'create:iron_sheet',
        C: '#forge:chests/wooden'
    }).id('create_customized:hopper')
})