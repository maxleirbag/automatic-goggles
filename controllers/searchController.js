const LetsbookDataScraper = require('../services/LetsbookScraperService');
const ReservationAttempts = require('../database/models/ReservationAttempts');
const sequelize = require('../database/config/config');

exports.searchLetsbookDefaultHotelWithMinimumData = async (req, res) => {
  try {
    const { body } = req;
    const checkinDateParts = body.checkin.split('-');
    const checkoutDateParts = body.checkout.split('-');

    const isSearchPossible = isDatePeriodValid(checkinDateParts, checkoutDateParts);

    if (isSearchPossible) {
      const { checkinURL, checkoutURL } = adaptCheckinAndCheckoutPayloadToURL(checkinDateParts, checkoutDateParts);
      const searchURL = `https://pratagy.letsbook.com.br/D/Reserva?checkin=${checkinURL}&checkout=${checkoutURL}&adultos=2&criancas=&destino=Pratagy+Beach+Resort+All+Inclusive&hotel=1`;

      const scrap = new LetsbookDataScraper(searchURL);
      await scrap.scrapeMinimumData();
      const resultingRooms = scrap.getRooms();
      const transaction = await sequelize.transaction();
      try {
        await ReservationAttempts.bulkCreate(resultingRooms, { transaction: transaction });
        await transaction.commit();
        res.status(200).send(resultingRooms);
      } catch (error) {
        await transaction.rollback();
        console.error(error);
        res.send(resultingRooms);
      }
    } else {
      res.send('Intervalo de data para reserva inválido. Tente novamente com um período sequencial de pelo menos 4 diárias.');
      console.log('Intervalo de data para reserva inválido. Tente novamente com um período sequencial de pelo menos 4 diárias.');
    }
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .send('Não foi possível buscar as informações da reserva para o Pratagy Beach Resort All Inclusive, com os dados fornecidos.');
  }
};
function isDatePeriodValid(checkinDateParts, checkoutDateParts) {
  const today = new Date();
  const todayDay = today.getDay();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();
  const checkinDay = checkinDateParts[2];
  const checkinMonth = checkinDateParts[1];
  const checkinYear = checkinDateParts[0];
  const checkoutDay = checkoutDateParts[2];
  const checkoutMonth = checkoutDateParts[1];
  const checkoutYear = checkoutDateParts[0];

  const yearTest = checkinYear == todayYear && checkoutYear == todayYear;
  const monthTest = checkinMonth >= todayMonth && checkoutMonth >= todayMonth;
  const dayTest = checkinDay >= todayDay && checkoutDay > todayDay;

  const checkinUTC = Date.UTC(checkinYear, checkinMonth, checkinDay);
  const checkoutUTC = Date.UTC(checkoutYear, checkoutMonth, checkoutDay);
  const daysDiff = Math.floor((checkoutUTC - checkinUTC) / (1000 * 60 * 60 * 24));
  const minimumDaysTest = daysDiff >= 4;

  return yearTest && monthTest && dayTest && minimumDaysTest;
}
function adaptCheckinAndCheckoutPayloadToURL(checkinDateParts, checkoutDateParts) {
  const checkinURL = `${checkinDateParts[2]}%2F${checkinDateParts[1]}%2F${checkinDateParts[0]}`;
  const checkoutURL = `${checkoutDateParts[2]}%2F${checkoutDateParts[1]}%2F${checkoutDateParts[0]}`;
  return { checkinURL, checkoutURL };
}

exports.getAllReservationsAttempts = async (req, res) => {
  try {
    const allReservationAttempts = await ReservationAttempts.findAll();
    res.status(200).send(allReservationAttempts);
  } catch (error) {
    console.error(error);
    res.status(400).send('Não foi possível buscar todas as tentativas de busca.');
  }
};
