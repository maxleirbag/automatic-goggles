//source = [
// 	[
// 			"STUDIO CASAL\nMÁX\nsó tem 2\n\nNo prédio principal do Resort, sem varanda e próximo à recepção. Dispõe de uma cama de casal e uma cama de solteiro. Acomoda até 2 pessoas. Sem cama extra. Inclui ingressos do Pratagy Acqua Park*. All inclusive com serviço de buffet.\n\n",
// 			"\ni\nMaio 2023\nPague agora\nParcele em até 10x sem juros | Cancelamento grátis até 07 dias após a compra\n",
// 			"\nR$ 1.389,73\n5%\nR$ 1.320,00\n/noite\n",
// 			"\nNº DE QUARTOS\n1 QUARTO\n2 QUARTOS"
// 	],
// 	[
// 			"STUDIO FAMILIA\nMÁX\n\nNo prédio principal do Resort, com varanda e vista para os jardins. Dispõe de uma cama de casal e uma cama de solteiro. Acomoda até 3 pessoas, nas opções de 1 adulto e 2 crianças (free até 12 anos) ou 2 adultos e 1 criança (free até 12 anos) ou 3 adultos. Sem cama extra. Inclui ingressos do Pratagy Acqua Park*. All inclusive com serviço de buffet.\n\n",
// 			"\ni\nMaio 2023\nPague agora\nParcele em até 10x sem juros | Cancelamento grátis até 07 dias após a compra\n",
// 			"\nR$ 1.528,73\n5%\nR$ 1.452,50\n/noite\n",
// 			"\nNº DE QUARTOS\n1 QUARTO\n2 QUARTOS\n3 QUARTOS\n4 QUARTOS\n5 QUARTOS"
// 	],
// 	[
// 			"CABANA\nMÁX\n\nNos jardins do Resort e com varanda. Dispõe de duas camas de casal. Acomoda até 4 pessoas, nas opções de 1 adulto + 3 crianças (free até 12 anos) ou 2 adultos e 2 crianças (free até 12 anos) ou 3 adultos e 1 criança (free até 12 anos) ou 4 adultos. Sem cama extra. Inclui ingressos do Pratagy Acqua Park*. All inclusive com serviço de buffet.\n\n",
// 			"\ni\nMaio 2023\nPague agora\nParcele em até 10x sem juros | Cancelamento grátis até 07 dias após a compra\n",
// 			"\nR$ 1.687,09\n5%\nR$ 1.602,50\n/noite\n",
// 			"\nNº DE QUARTOS\n1 QUARTO\n2 QUARTOS\n3 QUARTOS\n4 QUARTOS\n5 QUARTOS"
// 	]
// ]


const arrayExample = [
	"STUDIO CASAL\nMÁX\nsó tem 2\n\nNo prédio principal do Resort, sem varanda e próximo à recepção. Dispõe de uma cama de casal e uma cama de solteiro. Acomoda até 2 pessoas. Sem cama extra. Inclui ingressos do Pratagy Acqua Park*. All inclusive com serviço de buffet.\n\n",
	"\ni\nMaio 2023\nPague agora\nParcele em até 10x sem juros | Cancelamento grátis até 07 dias após a compra\n",
	"\nR$ 1.389,73\n5%\nR$ 1.320,00\n/noite\n",
	"\nNº DE QUARTOS\n1 QUARTO\n2 QUARTOS"
]


const array2 = arrayExample.map((hotel)=> {
	let final
	hotel.trim()
	hotel.replace('\n', '\b')
	final = hotel;
return final})

array2.forEach((hotel) => console.log(hotel))
// console.log(arrayExample)

