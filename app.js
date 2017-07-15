//Checking for changes on input label
window.addEventListener('input', function (e) {
    var myBtn = document.getElementById("okButton");
    myBtn.classList.remove("is-hidden");
}, false);
var x = document.getElementById("okButton").addEventListener("click", addFocus);
function addFocus(){
	var questionList = document.getElementsByTagName("li");
	for(var i = 0; i < questionList.length; i++){
		var quesStatus = questionList[i].classList.contains("focus");
		if(quesStatus === true){
			$("html").velocity("scroll", { offset: "100px", mobileHA: false });

			questionList[i+1].classList.add("focus");
			questionList[i].classList.remove("focus");
		}
		break;
	} 
}