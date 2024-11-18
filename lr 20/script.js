$(document).ready(function () {
    $("#hide").click(function () {
        var elements = $("#form " + $("#searchValue").val());
        if ($("#searchValue").val() !== "" && elements.length > 0) {
            elements.toggleClass('visibility');
        } else {
            alert("Error");
        } 
    });
});