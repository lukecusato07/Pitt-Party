    var yesRadio = document.getElementById("yes");
    var noRadio = document.getElementById("no");
    var extraInfoForm = document.getElementById("extra_info");
    var specifyDiv = document.getElementById("specify");
    var noMessageDiv = document.getElementById("noMessage");

    yesRadio.addEventListener("change", function() {
        if (yesRadio.checked) {
            extraInfoForm.style.display = "block";
            noMessageDiv.style.display = "none";
        }
    });

    noRadio.addEventListener("change", function() {
        if (noRadio.checked) {
            extraInfoForm.style.display = "none";
            specifyDiv.style.display = "none";
            noMessageDiv.style.display = "block";
            noMessageDiv.innerHTML = "<p>I'm sorry you won't be able to make it! I hope to see you at the next pregame party!</p>";
        }
    });

    var dietarySelect = document.getElementById("dietary_restrictions");
    dietarySelect.addEventListener("change", function() {
        if (dietarySelect.value === "allergy" || dietarySelect.value === "other") {
            specifyDiv.style.display = "block";
        } else {
            specifyDiv.style.display = "none";
        }
    });

function form_submit(){
    console.log("Submitted!");
    if (yesRadio.checked) {
        var comingElement = document.getElementById("coming");
        comingElement.style.display = "block";

        setTimeout(function() {
            comingElement.style.display = "none";
        }, 5000);
    }
    if (noRadio.checked) {
        var not_comingElement = document.getElementById("not_coming");
        not_comingElement.style.display = "block";

        setTimeout(function() {
            not_comingElement.style.display = "none";
        }, 5000);
    }
}
