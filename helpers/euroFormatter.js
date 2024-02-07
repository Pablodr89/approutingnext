export const euroFormatter = cantidad => {
	const formatter = new Intl.NumberFormat('es-ES', {
		style: 'currency',
		currency: 'EUR',
	});
	return formatter.format(cantidad);
};
