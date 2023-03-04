function onFormSubmit(){
    var formData = readFormData();
    insertNewRwcord(formData);
    resetForm();
}
function readFormData(){
    var formData = {};
    formData["fulname"] = document.getElementById("fulname").value;
    formData["empcode"] = document.getElementById("empcode").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}
function insertNewRwcord(data){
    var table = document.getElementById("employeeList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fulname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empcode;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell4.innerHTML = `<a>Edit</a>
                       <a>Delete</a>`

}
function resetForm(){
    document.getElementById("fulname").value = "";
    document.getElementById("empcode").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
}
function onEdit(td){
    selecteRow = td.parentElement.parentElement;   
}