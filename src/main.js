class Desserts {
	constructor(type, calories){
		
	}
}

class IceCream extends Desserts{
	constructor(type, calories, flavor, scoops){
	
	}
	
	includeSpoon(){
		if(this.scoops=== 3){
			console.log('Here is your spoon!');
		}
	}
}

const vanillaIceCream = new IceCream('Ice Cream', 340, 'Vanilla', 3);

console.log(vanillaIceCream);

vanillaIceCream.includeSpoon();