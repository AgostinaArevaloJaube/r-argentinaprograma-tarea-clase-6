// DOM elements
const $nextStep = document.querySelector('#next-step');
const $numberOfMembers = document.querySelector('#number-of-members');
const $membersContainer = document.querySelector('#members');
const $resetBtn = document.querySelector('#reset');
const $calculateBtn = document.querySelector('#calculate');
const $results = document.querySelector('#results');
const $olderAge = document.querySelector('#older-age');
const $youngestAge = document.querySelector('#youngest-age');
const $averageAge = document.querySelector('#average');

// Events
$nextStep.onclick = (event) => {
	event.preventDefault();
	const numberOfMembers = Number($numberOfMembers.value);
	removePreviousMembers();
	createMembers(numberOfMembers);
};

$calculateBtn.onclick = (event) => {
	event.preventDefault();
	const $memberAges = document.querySelectorAll('.member__input');
	const ages = getAges($memberAges);
	displayResults(ages);
};

$resetBtn.onclick = (event) => {
	event.preventDefault();
	reset();
};

const createMembers = (numberOfMembers) => {
	if (numberOfMembers > 0) {
		$calculateBtn.classList.remove('hidden');
		$resetBtn.classList.remove('hidden');
	}

	for (let i = 0; i < numberOfMembers; i++) {
		const $memberContainer = document.createElement('div');
		$memberContainer.classList.add('member');
		$memberContainer.innerHTML = `
		<label for="" class="member__label">Edad del integrante número: ${i + 1}</label>
		<input type="number" class="member__input">
		`;
		$membersContainer.appendChild($memberContainer);
	}
};

const removePreviousMembers = () => {
	const $members = document.querySelectorAll('.member');
	for (let i = 0; i < $members.length; i++) {
		$members[i].remove();
	}
};

const reset = () => {
	removePreviousMembers();
	$calculateBtn.classList.add('hidden');
	$results.classList.add('hidden');
	$resetBtn.classList.add('hidden');
};

const getAges = (inputAge) => {
	let ages = [];
	for (let i = 0; i < inputAge.length; i++) {
		ages.push(Number(inputAge[i].value));
	}
	console.log(ages);
	return ages;
};

const getOldestAge = (ages) => {
	let oldestAge = ages[0];
	for (let i = 0; i < ages.length; i++) {
		if (ages[i] > oldestAge) {
			oldestAge = ages[i];
		}
	}
	return oldestAge;
};

const getYoungestAge = (ages) => {
	let youngestAge = ages[0];
	for (let i = 0; i < ages.length; i++) {
		if (ages[i] < youngestAge) {
			youngestAge = ages[i];
		}
	}
	return youngestAge;
};

const getAverage = (ages) => {
	let number = 0;
	for (let i = 0; i < ages.length; i++) {
		number += ages[i];
	}
	return number / ages.length;
};

const displayResults = (ages) => {
	$results.classList.remove('hidden');
	$olderAge.textContent = getOldestAge(ages);
	$youngestAge.textContent = getYoungestAge(ages);
	$averageAge.textContent = getAverage(ages);
};
