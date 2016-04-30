$(document).ready(function() {
    var monthExists = $('input[name="range"]:checked', '#myForm').val() === 'month' ? true : false;
    var yearExists = $('input[name="range"]:checked', '#myForm').val() === 'year' ? true : false;

    if (!yearExists) {
        showSelect("月", "month", 1, 12);
    } else if (yearExists) {
        showSelect("年", "year", 2011, 2016);
    }


    $("input:radio").on("click", function() {
        var selectedRange = $('input[name="range"]:checked', '#myForm').val();

        if (selectedRange === "month" && !monthExists && yearExists) { //if user choose month
            $("#year").remove();
            monthExists = true;
            yearExists = false;

            showSelect("月", "month", 1, 12);

        } else if (selectedRange === "year" && !yearExists && monthExists) { //if user choose year
            $("#month").remove();
            yearExists = true;
            monthExists = false;

            showSelect("年", "year", 2011, 2016);
        }
    });


});

function showSelect(range, engRange, start, end) {
    var content = "<span id='" + engRange + "'>請選擇" + range + "份：<select name=" + engRange + ">";
    for (var i = start; i <= end; i++)
        content += "<option value='" + i + "'>" + i + range + "</option>";
    content += "</select></span>";

    $("#monthOrYear").append(content);
}
