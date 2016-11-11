$( document ).ready(function() {
    	$.ajax({
			url:'http://servicos.cptec.inpe.br/XML/listaCidades',
			// se der erro mostra alerta
			error: function(erro) {
				alert(erro.responseText, 3000, 'redtext');
			},
			// se der certo, faz isso
			success: function(dados) {
				// pega a div com id="conteudo"
				var selecao = document.querySelector('#selecao');
				$(dados).find('cidades').each(
					function(){
						
					}
				)
			}
	});
});



$('.mostrarPrev').on('click', function() {
	// pega id da cidade selecionada
	var idCidade = $('#selecao').val();
	// tenta ajax
	$.ajax({
		url:'http://servicos.cptec.inpe.br/XML/cidade/'+idCidade+'/previsao.xml',
		// se der erro mostra alerta
		error: function(erro) {
			alert(erro.responseText, 3000, 'redtext');
		},
		// se der certo, faz isso
		success: function(dados) {
			// pega a div com id="conteudo"
			var contDiv =
			document.querySelector("#conteudo");
			$(dados).find('cidade').each(
				function() {
					// pega o nome da cidade
					var nomeCidade = $(this).find('nome');
					contDiv.innerHTML += "<h1> Cidade: " + nomeCidade.text() + " </h1><br />";
					// pega entra no previsao
					$(dados).find('previsao').each(function() {
						//recupera os dados
						var dia = $(this).find('dia');
						var min = $(this).find('minima');
						var max = $(this).find('maxima');
						//printa os dados
						contDiv.innerHTML += "Dia: " + dia.text() + 
											 " Min.: " + min.text() + 
											 " Max.: " + max.text() + "<br/>";
				});
			});
		}
	});
});