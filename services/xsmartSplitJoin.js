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

