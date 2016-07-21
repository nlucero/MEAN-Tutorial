(function() {
  'use strict';

  angular
    .module('flapperNews', [])
    .controller('MainCtrl', ['$scope', MainCtrl])

  function MainCtrl($scope) {
      var vm = this

      vm.posts = [
        { title: 'post 1', upvotes: 5  },
        { title: 'post 2', upvotes: 2  },
        { title: 'post 3', upvotes: 15 },
        { title: 'post 4', upvotes: 9  },
        { title: 'post 5', upvotes: 4  }
      ]

      vm.addPost = function() {
        vm.posts.push({ title: vm.title, upvotes: 0 })
      }

      vm.incrementUpvotes = function(post) {
        post.upvotes++
      }
  }
}());
