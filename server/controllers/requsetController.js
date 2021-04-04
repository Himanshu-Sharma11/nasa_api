import { FETCH_NASA } from '../api/api.js';
import dateFormat from 'dateformat';

export const API_CONTROLLER = async (req, res) => {
  const date = req.params.date;
  const newDate = dateFormat(date, 'isoDate');

  try {
    const { data } = await FETCH_NASA(newDate);
    if (Object.keys(data).length > 0) {
      return res.status(200).json(data);
    } else {
      return res.status(404).json({ body: 'No Data was found Sorry 😢' });
    }
  } catch (error) {
    console.log(error);
  }
};
