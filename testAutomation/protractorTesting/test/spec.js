describe('Protractor Demo App', function() {
	var firstNumber = element(by.model('first'));
	var secondNumber = element(by.model('second'));
	var goButton = element(by.id('gobutton'));
	var latestResult = element(by.binding('latest'));
	var history = element.all(by.repeater('result in memory'));

	beforeEach(function() {
		browser.get('http://juliemr.github.io/protractor-demo/');
	});

	function add(a,b){
		it('should have add' + a.toString() + b.toString(), function(){
			var c = a + b;
			firstNumber.sendKeys(a);
			secondNumber.sendKeys(b);
			goButton.click();

			expect(latestResult.getText()).toEqual(c.toString());


		});

	}

	add(1,2);
	add(3,4);


});
