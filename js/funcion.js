$(document).ready(function() {
	
// 	var name = $("#idbuscar").val();
  $("#idbuscar").change(function(event){
		$("#loading").html("<p><img src='loading.gif'width='100' height='100' >Buscando....</p>");


  	var name = $("#idbuscar").val();
	var divSalida=$("#dato");
	divSalida.html('');
	var cadena="";
	
$.ajax({
	data: name,
		type:"GET",
		withCredentials:true,
		url: 'https://api.deezer.com/search?q='+ name,
		dataType:"JSON",

})
.done(function(result) {
	$.each(result.data,function(i, musica){ // recorremos el resultado de la api

			mostrar=`
				<tr>
			  		<td><center>${musica.artist.name}</center></td>
			  		<td><center>${musica.title}</center></td>
			  		<td><center><img src="${musica.artist.picture_small}" width="40"></center></td>
			  		<td>
			  			</center><audio controls>
			  				<source src="${musica.preview}" type="audio/mp3">
			  			</audio></center>
			  		</td>
			  	</tr>
			`;

			$('#dato').append(mostrar); // agregamos la fila al final de la tabla
			$('#loading').html("");
			$('#idbuscar').val("");


		});




	console.log("success");
})
.fail(function(result) {

	console.log("error");
})





  })
	
debugger
});

function cargar(){
	debugger
	
}









		// $.ajax({	
		// 	url: 'https://api.deezer.com/search?q='+name,
		// 	data: name,
		// 	method:"GET",
		// 	dataType: 'json',
		// 	// mode: 'cors',
		// 	// headers:{
		// 	// 'Access-Control-Allow-Origin':'*'
		// 	// },
		// 	// body:null,
		// 	// success: function(data)
		// 	// {
		// 	// 	alert('hola0');					
		// 	// }
		// });
			// $.ajax({	
			// url: 'https://api.deezer.com/search?q='+ name,
			// data: name,
			// type:"GET",
			// dataType: 'json'
			// })
			// .done(function(response){

		// 		$.each(response.data,function(i, musica){ 
					
		// 	mostrar=`
		// 		<tr>
		// 	  		<td>${musica.artist.name}</td>
		// 	  		<td>${musica.title}</td>
		// 	  		<td><img src="${musica.artist.picture_small}" width="40"></td>
		// 	  		<td>
		// 	  			<audio controls>
		// 	  				<source src="${musica.preview}" type="audio/mp3">
		// 	  			</audio>
		// 	  		</td>
		// 	  	</tr>
		// 	`;
		// 	$('#dato').append(mostrar); 
		// });
				
	// 			$.each(response.data, function(index, val) {
			
	// 			var cadena="";
	// 			cadena+="<tr>";
	// 			cadena+=	"<td>"+val.creator.name+"</td>";
	// 			cadena+=	"<td>"+val.title+"</td>";
	// 			cadena+=	"<td>"; 
	// 			cadena+= 	"<img src='"+val.artist.picture_small+"'";
	// 			cadena+= 	" width='40'></td>";
	// 			cadena+=	"<td>";
	// 			cadena+=	"<audio controls>" ;
	// 			cadena+=	"<source src='"+val.preview+"' type='audio/mp3'>";
	// 			cadena+=	"</audio>";
	// 			cadena+=	"</td>";
	// 			cadena+=	"</tr>";
	// 			$('#dato').append(mostrar);
	// 			})
	// 			console.log("success");
	// 		})
	// 		.fail(function(response) {
				
	// 			console.log("error");
	// 		})


		
	// });
	// });




	