function ContentHandler () {

    // Handles dishes ===========================================================

    this.displayAllDishes = function(req, res, next) {
        res.end('Will send all the dishes to you!');
    }

    this.displayDish = function(req, res, next) {
        res.end('Will send details of the dish: ' + req.params.Id +' to you!');
    }

    this.addNewDish = function(req, res, next) {
        res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
    }

    this.updateTheDish = function(req, res, next) {
        res.write('Updating the dish: ' + req.params.Id + '\n');
        res.end('Will update the dish: ' + req.body.name + 
                ' with details: ' + req.body.description);
    }

    this.deleteAllDishes = function(req, res, next) {
        res.end('Deleting all dishes');
    }

    this.deleteTheDish = function(req, res, next) {
        res.end('Deleting dish: ' + req.params.Id);
    }

    // Handle promotions ========================================================
    this.displayAllPromotions = function(req, res, next) {
        res.end('Will send all the promotions to you!');
    }

    this.displayPromotion = function(req, res, next) {
        res.end('Will send details of the promotion: ' + req.params.Id +' to you!');
    }

    this.addNewPromotion = function(req, res, next) {
        res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
    }

    this.updateThePromotion = function(req, res, next) {
        res.write('Updating the promotion: ' + req.params.Id + '\n');
        res.end('Will update the promotion: ' + req.body.name + 
                ' with details: ' + req.body.description);
    }

    this.deleteAllPromotions = function(req, res, next) {
        res.end('Deleting all promotions');
    }

    this.deleteThePromotion = function(req, res, next) {
        res.end('Deleting promotion: ' + req.params.Id);
    }

    // Handle leadership ========================================================
    this.displayAllLeaders = function(req, res, next) {
        res.end('Will send details about all leaders to you!');
    }

    this.displayLeader = function(req, res, next) {
        res.end('Will send details of the leader: ' + req.params.Id +' to you!');
    }

    this.addNewLeader = function(req, res, next) {
        res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
    }

    this.updateTheLeader = function(req, res, next) {
        res.write('Updating the leader: ' + req.params.Id + '\n');
        res.end('Will update the leader: ' + req.body.name + 
                ' with details: ' + req.body.description);
    }

    this.deleteAllLeaders = function(req, res, next) {
        res.end('Deleting all leaders');
    }

    this.deleteTheLeader = function(req, res, next) {
        res.end('Deleting leader: ' + req.params.Id);
    }
}

module.exports = ContentHandler;
