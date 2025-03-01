function insert_Row() {

	let table = document.querySelector("#sampleTable");
	table.innerHTML = 
		`
			<tr>
				<td>New cell1</td> 
				<td>New cell2</td>
			</tr> 
		` + table.innerHTML;
  
}
