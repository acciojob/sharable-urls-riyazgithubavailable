// your code here
const inputFeild1 = document.getElementById("name");
const inputFeild2 = document.getElementById("year");
const btn = document.getElementById("button");
const head = document.getElementById("url");

let url;
btn.addEventListener("click", (event) => {
	event.preventDefault()
	const value1 = inputFeild1.value;
    const value2 = inputFeild2.value;
	if(value1 !="" && value2 !=""){
		url="https://localhost:8080/?" + "name=" + value1 + "&year=" + value2;
	}else if(value1 !=""){
		url = "https://localhost:8080/?" + "name=" + value1
	}else if(value2 !=""){
		url = "https://localhost:8080/?" + "year=" + value2
	}else {
		url = "https://localhost:8080/"
	}
    head.innerText = url;
	inputFeild1.value="";
	inputFeild2.value="";
});