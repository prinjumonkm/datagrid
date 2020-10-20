
export const  DataGrid =  (data,holder,callback) =>
{
const Keys = [];
for (let key in data[0])
{
    if(data[0][key]["show"] == "true")
    {
        Keys.push(key);
    }
}
let table = document.createElement("TABLE");
holder.appendChild(table);
//Add the header row.
var row = table.insertRow(-1);
for (var i = 0; i < Keys.length; i++) {
    var headerCell = document.createElement("TH");
    headerCell.innerHTML = Keys[i];
    row.appendChild(headerCell);
}

for (var i = 0; i < data.length; i++) {
    row = table.insertRow(-1);   
    for (var j = 0; j < Keys.length; j++) {
        let str = "";
        var cell = row.insertCell(-1);
        if(data[i][Keys[j]]["icon"] !="")
        {
            str = str+'<i class="'+data[i][Keys[j]]["icon"]+'"  ';
        }        
        if (data[i][Keys[j]]["text"]!="")
        {
            str = str+data[i][Keys[j]]["text"]+'</i>';
        }
        else
        {
            str = str+'></i>'
        }
        cell.innerHTML = str;
        if (data[i][Keys[j]]["action"]!="none")
        {
        let id = data[i]["id"]["text"]
        let action = data[i][Keys[j]]["action"]
        cell.onclick = ()=>{callback(id,action)}
        }
  }    
}
}