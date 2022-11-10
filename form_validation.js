window.addEventListener("load", function () {
    const form = document.getElementById('contact');
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        console.log(form);
        
        if ((email === "") && (phone === "")) {
            alert("Error: missing email or phone number.");
            return false;
        } else {
            const data = new FormData(form);
            const action = e.target.action;
            console.log(data.get("phone"));
            
            fetch(action, {
                method: 'POST',
                body: data,
            })
            .then(() => {
                document.querySelector(".success").classList.remove("hidden");
                window.scrollTo(0, 0);
            }).catch(() => {
                alert("Error: please try again at another time.");
            })
        }
    });
});