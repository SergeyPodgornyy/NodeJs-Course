var ContentHandler = require('./content');

module.exports = function(app) {

    var contentHandler = new ContentHandler();

    app.all('/dishes', function(req,res,next) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        next();
    });

    app.get('/dishes', contentHandler.displayAllDishes);
    app.post('/dishes', contentHandler.addNewDish);
    app.delete('/dishes', contentHandler.deleteAllDishes);

    app.get('/dishes/:Id', contentHandler.displayDish);
    app.put('/dishes/:Id', contentHandler.updateTheDish);
    app.delete('/dishes/:Id', contentHandler.deleteTheDish);

// =====================================================================================

    app.all('/promotions', function(req,res,next) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        next();
    });

    app.get('/promotions', contentHandler.displayAllPromotions);
    app.post('/promotions', contentHandler.addNewPromotion);
    app.delete('/promotions', contentHandler.deleteAllPromotions);

    app.get('/promotions/:Id', contentHandler.displayPromotion);
    app.put('/promotions/:Id', contentHandler.updateThePromotion);
    app.delete('/promotions/:Id', contentHandler.deleteThePromotion);

// =====================================================================================

    app.all('/leadership', function(req,res,next) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        next();
    });

    app.get('/leadership', contentHandler.displayAllLeaders);
    app.post('/leadership', contentHandler.addNewLeader);
    app.delete('/leadership', contentHandler.deleteAllLeaders);

    app.get('/leadership/:Id', contentHandler.displayLeader);
    app.put('/leadership/:Id', contentHandler.updateTheLeader);
    app.delete('/leadership/:Id', contentHandler.deleteTheLeader);
}
