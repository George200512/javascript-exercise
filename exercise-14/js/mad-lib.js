// Get the word to fill the story

function getValue(text) {
		let input = prompt(text);
		input = input?.trim() ?? " ";
		return input;
}

//Make the mad lib story generator
function madLib() {
		alert("Welcome to my Mad Lib Story Generator");
		let adjective = getValue("Input an adjective: ");
		let place = getValue("Input a place: ");
		let adjective2 = getValue("Input another adjective: ");
		let articleOfClothing = getValue("Input article of clothing: ");
		let pluralNoun = getValue("Input plural noun: ");
		let name = getValue("Input a name: ");
		let noun = getValue("Input a noun: ");
		let adjective3 = getValue("Input a third adjective: ");
		let story = `It was a ${adjective} day in ${place} when I met a ${adjective2} stranger. This stranger was wearing a ${articleOfClothing} and a pair of ${pluralNoun}. They introduced themselves as ${name} and told me they were on a quest to find the legendary ${noun}. I was ${adjective3} and decided to join them on their journey.`;
		alert(`This is your story: \n ${story}`);
}

(function () {
		let $continue;
		do {
				madLib();
				$continue = confirm("Do you want to restart? ");
		}while($continue);
})();
