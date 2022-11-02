import { Color } from '../models/Color.js';

export const getColors = async (req, res) => {
	const { type } = req.params;

	try {
		const colors = await Color.findAll();

		switch (type) {
			case 'csv':
				let csv = 'r|g|b|like\n';
				colors.forEach((color) => {
					csv += `${color.r}|${color.g}|${color.b}|${color.like}\n`;
				});
				res.set('Content-Type', 'text/csv');
				res.send(csv);
				break;
			case 'xml':
				res.set('Content-Type', 'text/xml');
				res.send(`<colors>
					${colors
						.map(
							(color) =>
								`<color>\n
                  <like>${color.like}</like>\n
                  <r>${color.r}</r>\n
                  <g>${color.g}</g>\n
                  <b>${color.b}</b>\n
                </color>`
						)
						.join('')}
				</colors>`);
				break;
			case 'json':
			default:
				res.json(colors);
				break;
		}
	} catch (error) {
		return res.status(500).json({ message: 'error al obtener los colores' });
	}
};

export const postColor = async (req, res) => {
	const { red, green, blue, like } = req.body;
	try {
		const newColor = await Color.create({
			r: red,
			g: green,
			b: blue,
			like,
		});

		res.json(newColor);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: 'Error al insertar el color' });
	}
};
