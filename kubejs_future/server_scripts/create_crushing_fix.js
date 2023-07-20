// ONLY USE IF YOUR ORESTONE CRUSHING RECIPES ARE MISSING BECAUSE OF SPELUNKERY!

let ASURINE_TYPES = {
    create_asurine_crushing: 'create:asurine', 
    create_asurine_recycling: '#create:stone_types/asurine'
}
let CRIMSITE_TYPES = {
    create_crimsite_crushing: 'create:crimsite',
    create_asurine_recycling: '#create:stone_types/crimsite'
}
let OCHRUM_TYPES = {
    create_ochrum_crushing: 'create:ochrum',
    create_ochrum_recycling: '#create:stone_types/ochrum'
}
let VERIDIUM_TYPES = {
    create_veridium_crushing: 'create:veridium',
    create_veridium_recycling: '#create:stone_types/veridium'
}

ServerEvents.recipes(event => {
    Object.keys(ASURINE_TYPES).forEach(ore => {
        event.recipes.createCrushing([
            Item.of('create:crushed_raw_zinc').withChance(0.3),
            Item.of('create:zinc_nugget').withChance(0.3)
        ], `${ASURINE_TYPES[ore]}`).processingTime(250).id(`kubejs:${ore}`)       
    })
    Object.keys(CRIMSITE_TYPES).forEach(ore => {
        event.recipes.createCrushing([
            Item.of('create:crushed_raw_iron').withChance(0.4),
            Item.of('minecraft:iron_nugget').withChance(0.4)
        ], `${CRIMSITE_TYPES[ore]}`).processingTime(250).id(`kubejs:${ore}`)
    })
    Object.keys(OCHRUM_TYPES).forEach(ore => {
        event.recipes.createCrushing([
            Item.of('create:crushed_raw_gold').withChance(0.2),
            Item.of('minecraft:gold_nugget').withChance(0.2)
        ], `${OCHRUM_TYPES[ore]}`).processingTime(250).id(`kubejs:${ore}`)
    })
    Object.keys(VERIDIUM_TYPES).forEach(ore => {
        event.recipes.createCrushing([
            Item.of('create:crushed_raw_copper').withChance(0.8),
            Item.of('create:copper_nugget').withChance(0.8)
        ], `${VERIDIUM_TYPES[ore]}`).processingTime(250).id(`kubejs:${ore}`)
    })
})
