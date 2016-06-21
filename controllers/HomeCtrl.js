TaitWayland.controller("HomeCtrl", function($scope, $http) {
  $scope.header = {
    header1: 'my name is tait',
    header2: 'i’m a ui designer and developer living in birmingham, alabama.',
    header3: 'i like masking tape.'
  };

  $http.get('JSON/HomePage.json').then(function (res) {
    $scope.WhatIDo = res.data.WhatIDoTitle;
    $scope.WhatIDoSections = res.data.WhatIDo;
    $scope.Portfolio = res.data.PortfolioTitle;
    $scope.PortfolioSections = res.data.Portfolio;
  });

});
