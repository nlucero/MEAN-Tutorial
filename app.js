(function() {
  'use strict';

  angular
    .module('flapperNews', [])
    .controller('MainCtrl', ['$scope', 'postsService', MainCtrl])
    .factory('postsService', [PostsService])

  function MainCtrl($scope, postsService) {
      var vm = this

      vm.posts = postsService.posts

      vm.addPost = function() {
        if (!vm.title) return

        vm.posts.push({
          title: vm.title,
          link: vm.link,
          upvotes: 0
        })

        vm.title = ''
        vm.link = ''
      }

      vm.incrementUpvotes = function(post) {
        post.upvotes++
      }
  }

  function PostsService() {
    var posts = [
      { title: 'post 1', upvotes: 5  },
      { title: 'post 2', upvotes: 2  },
      { title: 'post 3', upvotes: 15 },
      { title: 'post 4', upvotes: 9  },
      { title: 'post 5', upvotes: 4  }
    ]

    return {
      posts: posts
    }
  }
}());
