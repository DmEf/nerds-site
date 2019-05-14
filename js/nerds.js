var link = document.querySelector(".red-btn-map");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var userName = popup.querySelector("[name=user-name]");
var userMail = popup.querySelector("[name=user-mail]");
var userMessage = popup.querySelector("[name=user-message]")
var form = popup.querySelector("form");
var storageName = localStorage.getItem("userName");
var storageMail = localStorage.getItem("userMail");

link.addEventListener("click", function(event) {
	event.preventDefault();
	console.log("поймал нажатие на кнопку");
	popup.classList.add("modal-content-show");
	userName.focus();

	if (storageName && storageMail) {
		userName.value = storageName;
		userMail.value = storageMail;
		userMessage.focus();
	} else {
		userName.focus();
	}
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	console.log("поймал кнопку закрытия");
	popup.classList.remove("modal-content-show");
	popup.classList.remove("modal-error");

});

form.addEventListener("submit", function(event) {
	if (!userName.value || !userMail.value) {
		event.preventDefault();
		console.log("нужно заполнить поля");
		popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else {
		localStorage.setItem("userName", userName.value);
		localStorage.setItem("userMail", userMail.value);
	}
});

window.addEventListener("keydown", function(event){
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-content-show")) {
			popup.classList.remove("modal-content-show");
			popup.classList.add("modal-error");
		}
	}
});