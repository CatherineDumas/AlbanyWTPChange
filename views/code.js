$("#db_select").on("change", function() {
    $("#" + $(this).val()).show().siblings().hide();
})
if(document.getElementById("db_select") == null){
	document.write("it's null");
}
else{
document.write(document.getElementById("db_select").value);
}