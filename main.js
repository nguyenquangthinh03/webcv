document.addEventListener("click", function (e) {
    let clickEd = e.target;
    if (clickEd.classList.contains("exp-header")) {
        let eduHeader = document.querySelector(".edu-header");
        let expTable = document.querySelector(".exp-table");
        let eduTable = document.querySelector(".edu-table");
        expTable.style.display = "table";
        if (clickEd.classList.contains("change-background")) {
            clickEd.classList.remove("change-background");
            eduHeader.classList.add("change-background");
            eduTable.style.display = "none";
        }

    }
    if (clickEd.classList.contains("edu-header")) {
        let expHeader = document.querySelector(".exp-header");
        let expTable = document.querySelector(".exp-table");
        let eduTable = document.querySelector(".edu-table");
        eduTable.style.display = "table";
        console.log(expHeader)
        if (clickEd.classList.contains("change-background")) {
            clickEd.classList.remove("change-background");
            expHeader.classList.add("change-background");
            expTable.style.display = "none";
        }
    }
})