import {NextApiRequest, NextApiResponse} from 'next';
import connectSql from '../../../lib/div';

const getVehicleDetail = async (req: NextApiRequest, res: NextApiResponse) => {
  // const sqlDb = await connectSql();
  // const something = await sqlDb.query('SELECT * from cats');
  // console.log(something);
  // res.status(200).json({});
  // sqlDb.end();
  return new Promise(async (resolve, reject) => {
    let sqlDb;
    try {
      sqlDb = await connectSql();
      await sqlDb.query('SELECT * from cats', (error, result) => {
        res.status(200).json(result);
        resolve();
      });
    } catch (error) {
      console.error(error); // Can be a simple console.error too
      res.status(500).end();
      return resolve()
    } finally {
      sqlDb?.end();
    }
  });
};

export default getVehicleDetail;