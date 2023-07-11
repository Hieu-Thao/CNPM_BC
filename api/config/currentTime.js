const today = new Date();
const currentTime =
	today.getFullYear() +
	'-' +
	(today.getMonth() + 1 < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1) +
	'-' +
	(today.getDate() < 10 ? '0' + today.getDate() : today.getDate());

const monthNames = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];

const currentTimePrefixMonth =
	monthNames[today.getMonth()] +
	' ' +
	(today.getDate() < 10 ? '0' + today.getDate() : today.getDate()) +
	' ' +
	today.getFullYear();

exports.currentTime = currentTime;
exports.currentTimePrefixMonth = currentTimePrefixMonth;

const AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_DEFAULT_REGION,
  endpoint: process.env.AWS_END_POINT_DDB_LOCAL,
});

const dynamoDB = new AWS.DynamoDB();
const docClient = new AWS.DynamoDB.DocumentClient({ convertEmptyValues: true });

exports.docClient = docClient;
exports.dynamoDB = dynamoDB;