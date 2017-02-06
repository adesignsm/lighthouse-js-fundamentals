for (var i = 100; i < 200 + 1; i++) {

	console.log(i);

	if (i % 3 === 0 && i % 4 === 0) {

		console.log("Super loop af");
	}

	if (i % 3 === 0 || i % 4 === 0) {

		console.log("Mini loop");
	}
}