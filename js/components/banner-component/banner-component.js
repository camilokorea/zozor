function BannerController($scope) {
  $scope.indexBanner = 0;

  $scope.idsBanner = [
    { id: "001", title: "Reflections on my holidays in the United States..." },
    { id: "002", title: "Reflections on my holidays in China..." },
    { id: "003", title: "Reflections on my holidays in Italy..." },
    { id: "004", title: "Reflections on my holidays in Jordan..." },
    { id: "005", title: "Reflections on my holidays in India..." },
    { id: "006", title: "Reflections on my holidays in Guatemala..." },
  ];

  $scope.changeImageBanner = function () {
    $scope.$apply(function () {
      $scope.indexBanner++;

      if ($scope.indexBanner === $scope.idsBanner.length) {
        $scope.indexBanner = 0;
      }
    });
  };

  $scope.rotateImages = function () {
    window.setInterval($scope.changeImageBanner, 7000);
  };

  $scope.rotateImages();
}
