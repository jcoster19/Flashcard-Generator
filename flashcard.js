var inquirer = require("inquirer");

function BasicCard(front, back) {

	if(this instanceof BasicCard) {
		return new BasicCard(front, back);

	}

	this.front = front;
	this.back = back;

};



function basic() {
	var currentCard;
	var availableCards = [];
	

	for( var i =0; i< basicCardData.length; i++) {
		currentCard = new BasicCard(basicCardData[i].front, basicCardData[i].back);
		availableCards.push(currentCard);
	}

	
};



function ClozeCard(text, deleteCloze) {

	if(this instanceof ClozeCard) {

		return new ClozeCard(text, deleteCloze);
	}

	var clozePosition = deleteCloze(text, deleteCloze);

	this.partial = getPartial(text, clozePosition);

	this.cloze = text.slice(clozePosition[0], clozePosition[1]);

	function getPartial(text, clozePosition) {

		var startDelete = text.slice(0, clozePosition[0]);

		var endDelete = text.slice(clozePosition[1], text.length);

		return startDelete +"........." + endDelete;
	}

	function clozeDelete(text, deleteCloze) {

		var startDelete = text.deleteCloze;

			if( startDelete ==-1) {
				return [startDelete, startDelete + deleteCloze.length];
			}

			throw new Error("Can't find the Cloze Deletion in the text!");


	}


}

function Cloze () {

	var currentCard;
	var availableCards = [];

	for(var i = 0; i < ClozeCardData.length; i++) {

		currentCard = new ClozeCard(ClozeCardData[i].partial, ClozeCardData[i].cloze);

		availableCards.push(currentCard);
	}
};