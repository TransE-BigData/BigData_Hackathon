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

            var content = "<span id='month'>請選擇月份：<select>";
            for (var i = 1; i <= 12; i++)
                content += "<option value='" + i + "'>" + i + "月</option>";
            content += "</select></span>";

        } else if (selectedRange === "year" && !yearExists && monthExists) { //if user choose year
            $("#month").remove();
            yearExists = true;
            monthExists = false;

            var content = "<span id='year'>請選擇年份：<select>";
            for (var i = 2011; i <= 2016; i++)
                content += "<option value='" + i + "'>" + i + "年</option>";
            content += "</select></span>";

            isMonthOrYear = 0;
        }

        $("#monthOrYear").append(content);
    });





});

function showSelect(range, engRange, start, end) {
    var content = "<span id='" + engRange + "'>請選擇" + range + "份：<select>";
    for (var i = start; i <= end; i++)
        content += "<option value='" + i + "'>" + i + range + "</option>";
    content += "</select></span>";

    $("#monthOrYear").append(content);
}
