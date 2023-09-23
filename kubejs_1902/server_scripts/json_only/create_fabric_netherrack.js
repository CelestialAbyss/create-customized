ServerEvents.recipes(event => {
    event.custom({
        "type": "create:filling",
        "ingredients": [
            {
                "item": "minecraft:cobblestone"
            },
            {
                "amount": 20250,
                "fluid": "create:potion",
                "nbt": {
                    "Bottle": "REGULAR",
                    "Potion": "minecraft:strong_healing"
                }
            }
        ],
        "results": [
            {
                "item": "minecraft:netherrack"
            }
        ]
    }).id('kubejs:living_flesh_stone')
})