console.log('Loaded, bro');

portfolioApp = angular.module('portfolioApp', ['ngSanitize']);

portfolioApp.controller('PortfolioCtrl', function($scope, $location) {
  $scope.page = $location.path() || '/home';
  $scope.projects = [
    {
      name: 'CommentCloud',
      blurb: 'A Soundcloud comment visualizer',
      technologies: [
        'Backbone',
        'Rails',
        'Soundcloud API'
      ],
      links: [
        'https://github.com/DrRobotmck/commentcloud',
        'http://commentcloud.mckenneth.com'
      ],
      image: 'public/images/commentcloud.png'
    },
    {
      name: 'Gifbomb',
      blurb: 'Search, Click, Share. There\'s no better way to gif.',
      technologies: [
        'Backbone',
        'Local Storage',
        'Giphy API'
      ],
      links: [
        'https://github.com/DrRobotmck/gifbomb2',
        'http://gifbomb.mckenneth.com'
      ],
      image:'public/images/gifbomb.png'
    },
    {
      name:'Dinr',
      blurb: 'Fusion of Yelp with NYC restaurant inspection ratings',
      technologies: [
        'Angular',
        'Rails',
        'NYC Open Data',
        'PostgreSQL'
      ],
      links: [
        'https://github.com/DrRobotmck/dinr_app',
        'http://dinr.mckenneth.com'
      ]
    }
  ];
  $scope.homeTemplate = '<span class="firstName">McKenneth</span><span class="lastName">Scott</span><span class="suffix">III</span>';
  $scope.projectTemplate = "<div ng-repeat='project in projects'><div id='overlay'><h1>{{project.name}}</h1><h5>{{project.blurb}}</h5><h5>Technologies</h5><ul><li ng-repeat='tech in project.technologies'>{{tech}}</li></ul><ul><li ng-repeat='link in project.links'>{{link}}</li></ul></div><div id='background'></div></div>";

})