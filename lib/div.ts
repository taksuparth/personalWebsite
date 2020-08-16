import mysql from 'mysql';

const connectMySql = async () => {
  const config = {
    host     : process.env.MY_SQL_HOST,
    user     : process.env.MY_SQL_USER,
    password : process.env.MY_SQL_PASSWORD,
    database : process.env.MY_SQL_DB,
    insecureAuth: true,
  }
  const connection = mysql.createConnection(config);
  await connection.connect(err => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });
  return connection;
}

export default connectMySql;