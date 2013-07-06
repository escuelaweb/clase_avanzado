
// Nombre del archivo: dia1JS.js


	$(document).ready( function() {

		// contenido jQuery
		// Espera a que la pagina este cargada completamente

		$("#open-home").click(
			function() {
				/*
				Las funciones disponibles son:

				.show() muestra el elemento
				.hide() lo oculta
				.toggle() lo muestra si esta oculto, 
							y lo oculta si se esta mostrando

				.slideUp()
				.slideDown()
				slideToggle()

				.fadeIn()
				.fadeOut()
				.fadeToggle()

				.addClass() agrega clase css a la etiqueta
				.removeClass()
				.toggleClass()
				*/
				$("#home").toggleClass("active");
			}
		);	




	});
