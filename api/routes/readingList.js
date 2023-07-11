const readingListController = require('../modules/readingList/readingListController');
const {
	verifyToken,
	verifyTokenAndAuthorization,
	verifyTokenAndAdmin,
} = require('../middleware/verifyToken');
const readingListService = require('../modules/readingList/ReadingListService');

module.exports = async (app) => {
	app.get('/api/reading_list/', verifyToken, readingListController.getAll);
	app.post('/api/reading_list/create/', verifyToken, readingListController.create);
	app.delete('/api/reading_list/delete/:SaveID', verifyToken, readingListController.deleteByID);
};