(function() {

	var app = angular.module('store',[]);
	app.controller('StoreController', function() { 
		this.products = gems; 
	} );
	
	app.controller('PanelController', function() {
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab=setTab;
		};

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview=function(product) {
			product.reviews.push(this.review);
			this.review = {};
		};

	});

	var gems = [{
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Dodeca is a very popular gem',
		canPurchase: true,
		images: "images/gem1.jpg",		
		},
		{
		name: 'Pentagonal gem',
		price: 5.95,
		description: 'bloody gem is very good',
		canPurchase: true,
		images: "images/gem2.jpg",		
		}
	];

		
}
)();

