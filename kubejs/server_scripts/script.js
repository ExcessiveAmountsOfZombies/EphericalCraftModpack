// priority: 0


console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	event.remove({mod: 'mythicmetals', type: 'minecraft:blasting', output: 'mythicmetals:adamantite_ingot'})
	event.remove({mod: 'mythicmetals', type: 'minecraft:blasting', output: 'mythicmetals:mythril_ingot'})
	event.remove({mod: 'mythicmetals', type: 'minecraft:blasting', output: 'mythicmetals:orichalcum_ingot'})
	event.remove({mod: 'mythicmetals', type: 'minecraft:blasting', output: 'mythicmetals:palladium_ingot'})
	event.remove({mod: 'mythicmetals', type: 'minecraft:blasting', output: 'mythicmetals:banglum_ingot'})
	event.remove({mod: 'mythicmetals', type: 'minecraft:smelting', output: 'mythicmetals:banglum_ingot'})
	event.remove({mod: 'mythicmetals', type: 'alloy_forgery:forging', output: 'mythicmetals:steel_ingot'})
	event.remove({mod: 'modern_industrialization', output: 'modern_industrialization:replicator'})

	event.remove({mod: 'farmersdelight', output: 'farmersdelight:tomato_seeds'})
	
	// Change recipes here
})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})