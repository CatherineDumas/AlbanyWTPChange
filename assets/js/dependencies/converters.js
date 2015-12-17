
function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {
    //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    
    var CSV = '';    
    //Set Report title in first row or line
    
    CSV += ReportTitle + '\r\n\n';

    //This condition will generate the Label/Header
    if (ShowLabel) {
        var row = "";
        
        //This loop will extract the label from 1st index of on array
        for (var index in arrData[0]) {
            
            //Now convert each value to string and comma-seprated
            row += index + ',';
        }

        row = row.slice(0, -1);
        
        //append Label row with line break
        CSV += row + '\r\n';
    }
    
    //1st loop is to extract each row
    for (var i = 0; i < arrData.length; i++) {
        var row = "";
        
        //2nd loop will extract each column and convert it in string comma-seprated
        for (var index in arrData[i]) {
            var origRow = "" + arrData[i][index];
            origRow = origRow.replace(/(\r\n|\n|\r)/gm,"");
            row += '"' + origRow + '",';
        }

        row.slice(0, row.length - 1);
        
        //add a line break after each row
        CSV += row + '\r\n';
    }

    if (CSV == '') {        
        alert("Invalid data");
        return;
    }   
    
    //Generate a file name
    var filename = ReportTitle + ".csv";
    //this will remove the blank-spaces from the title and replace it with an underscore
 
    
    //this trick will generate a temp "a" tag
    var link = document.createElement("a");    
    link.id="lnkDwnldLnk";

    //this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);

    var csv = CSV;  
    blob = new Blob([csv], { type: 'text/csv' }); 
    var csvUrl = window.URL.createObjectURL(blob);

    $("#lnkDwnldLnk")
    .attr({
        'download': filename,
        'href': csvUrl
    }); 

    $('#lnkDwnldLnk')[0].click();    
    document.body.removeChild(link);
}

function JSONToTSVConvertor(JSONData, ReportTitle, ShowLabel) {
    //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    
    var tsv = '';    
    //Set Report title in first row or line
    
    tsv += ReportTitle + '\r\n\n';

    //This condition will generate the Label/Header
    if (ShowLabel) {
        var row = "";
        
        //This loop will extract the label from 1st index of on array
        for (var index in arrData[0]) {
            
            //Now convert each value to string and comma-seprated
            row += index + '\t';
        }

        row = row.slice(0, -1);
        
        //append Label row with line break
        tsv += row + '\r\n';
    }
    
    //1st loop is to extract each row
    for (var i = 0; i < arrData.length; i++) {
        var row = "";
        
        //2nd loop will extract each column and convert it in string comma-seprated
        for (var index in arrData[i]) {
            var origRow = "" + arrData[i][index];
            origRow = origRow.replace(/(\r\n|\n|\r)/gm,"")
            row += '"' + origRow + '"\t';
        }

        row.slice(0, row.length - 1);
        
        //add a line break after each row
        tsv += row + '\r\n';
    }

    if (tsv == '') {        
        alert("Invalid data");
        return;
    }   
    
    
    //Generate a file name
    var filename = ReportTitle + ".tsv";
    //this will remove the blank-spaces from the title and replace it with an underscore
 
    
    //this trick will generate a temp "a" tag
    var link = document.createElement("a");    
    link.id="lnkDwnldLnk";

    //this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);

 
    blob = new Blob([tsv], { type: 'text/tsv' }); 
    var tsvUrl = window.URL.createObjectURL(blob);

    $("#lnkDwnldLnk")
    .attr({
        'download': filename,
        'href': tsvUrl
    }); 

    $('#lnkDwnldLnk')[0].click();    
    document.body.removeChild(link);

}