function insert_Row() {

	let table = document.querySelector("#sampleTable");
	table.innerHTML = 
		`
		<tr>
            <td>New Cell1</td>  
            <td>New Cell2</td>
        </tr>
		` + table.innerHTML;
  
}
