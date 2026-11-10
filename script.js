function stringChop(str, size) {
  // your code here
	let ans= [];

	for(let i=0; i<str.length; i += n) {
		ans.push(str.slice(i, i+n)):
	}

	return ans;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
