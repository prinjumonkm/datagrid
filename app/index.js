import {GetData} from "./api/API.js";
import {DataGrid} from "./utils/datagrid.js";

const setData=()=>
{
        GetData("db.json").then((data)=>{
        DataGrid(data,document.getElementById("tableholder"),callbackFromDataGrid);
        }).catch((error)=>{
            //console.log("data");
        })
}
const callbackFromDataGrid= (id,action) =>
{
//alert(id+action);
// Do the action here.
}
setData();