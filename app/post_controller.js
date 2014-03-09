var mongo = require('mongodb');
var monk = require('monk');

PostController = function(port, db) {
  this.db = monk('localhost:' + port + '/' + db);
};

PostController.prototype.findAll = function(callback) {
  var collection = this.db.get('posts');
  collection.find({})
    .success(function(result) {
      callback(null, result);
    })
    .error(function(err) {
      callback(err, null);
    });
};

PostController.prototype.findPost = function(id, callback) {
  var collection = this.db.get('posts');
  collection.findById(id)
    .success(function(result) {
      callback(null, result);
    })
    .error(function(err) {
      callback(err, null);
    });
};

PostController.prototype.newPost = function(post, callback) {
  var collection = this.db.get('posts');
  collection.insert(post)
    .success(function(result) {
      callback(null, result);
    })
    .error(function(err) {
      callback(err, null);
    });
};

PostController.prototype.editPost = function(id, post, callback) {
  collection = this.db.get('posts');
  collection.updateById(collection.id(id), post)
    .success(function(result) {
      callback(null, result);
    })
    .error(function(err) {
      callback(err, null);
    });
};

PostController.prototype.deletePost = function(id, callback) {
  collection = this.db.get('posts');
  collection.remove({_id: id})
    .success(function(result) {
      callback(null, result);
    })
    .error(function(err) {
      callback(err, null);
    });
};

exports.PostController = PostController;