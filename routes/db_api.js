/*
 * Serve JSON to our AngularJS client
 */

var PostController = require('../app/post_controller').PostController;
var postController = new PostController(27017, 'post_db');

module.exports = function(app) {
  app.get('/api/posts', function (req, res) {
    var posts = [];
    postController.findAll(function(error, docs) {
      if (error) {
        res.send(error);
      } else {
        res.json({posts: docs});
      }
    });
  });

  // GET
  app.get('/api/post/:id', function (req, res) {
    var id = req.params.id;
    postController.findPost(id, function(error, doc) {
      if (error) {
        res.send(error);
      } else {
        res.json({post: doc});
      }
    });
  });

  // POST
  app.post('/api/post', function (req, res) {
    postController.newPost(req.body, function(error, result) {
      if (error) {
        res.send(error);
      }
    });
  });

  // PUT
  app.put('/api/post/:id', function (req, res) {
    postController.editPost(req.params.id,
                            req.body,
                            function(error, result) {
      if (error) {
        res.send(error);
      }
    });
  });

  // PUT
  app.delete('/api/post/:id', function (req, res) {
    postController.deletePost(req.params.id, function(error, result) {
      if (error) {
        res.send(error);
      } 
    });
  });
}
