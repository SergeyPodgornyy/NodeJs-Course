module.exports = function(length, breadth, callback){
    try {
        if (length < 0 || breadth < 0) {
            throw new Error("Neither length nor breadth can't be negative value");
        } else {
            callback(null, {
                area: function(){
                    return length*breadth;
                },
                perimeter: function(){
                    return 2*(length+breadth);
                }
            });
        }
    } catch (error) {
        callback(error, null);
    }
}
