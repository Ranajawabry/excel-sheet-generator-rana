const generate = document.getElementById('generate');
const export_button = document.getElementById('export');
const columns = document.getElementById('columns');
const rows = document.getElementById('rows');
const table = document.querySelector('.inner_data');
console.log(table);


generate.addEventListener('click',(e)=>{
    e.preventDefault();
    const columnsValue =columns.value;
    const rowsValue = rows.value;
    console.log(columnsValue);

    generateTable(columnsValue,rowsValue);

})

const generateTable =(columns,rows)=>{

    if(columns==0 || columns==0 || columns<0 || rows <0){
        return
    }
    let result="";

    for (let i = 0; i < rows; i++) {
        let tableRow = `<tr>`
        for (let j = 0; j < columns; j++) {
            tableRow += `<td contenteditable></td>`
        }
        tableRow += `</tr>`

        result += tableRow
    }

    table.innerHTML = result;

}



function htmlTableToExcel(type) {
    if (columns.value == 0 || rows.value == 0) {
        return
    }
    const data = document.querySelector('.table');
    const excelFile = XLSX.utils.table_to_book(data, { sheet: "sheet1" });
    XLSX.write(excelFile, { bookType: type, bookSST: true, type: 'base64' });
    XLSX.writeFile(excelFile, 'ExportedFile:HTMLTableToExcel.' + type);
}





