require('dotenv').config();
const mongoose = require('mongoose');
const { DateTime } = require('luxon');

const { DBUSER, DBPASS, DBCLUSTER, DBNAME, TIME_ZONE } = process.env;

async function connection() {
  try {
    await mongoose.connect(`mongodb+srv://${DBUSER}:${DBPASS}@${DBCLUSTER}/${DBNAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.info('DB Connected', DateTime.now().setZone(TIME_ZONE).toISO());
  } catch (error) {
    console.error(error);
  }
}

module.exports = async () => {
  await connection();
}