function RotatorController($scope) {
    $scope.idsZozor = ["002", "003", "004", "006", "007", "008", "009"];
    $scope.indexZozor = 0;
  
    $scope.changeImageZozor = function () {
      $scope.$apply(function () {
        $scope.indexZozor++;
  
        if ($scope.indexZozor === $scope.idsZozor.length) {
          $scope.indexZozor = 0;
        }
      });
    };
  
    $scope.rotateImages = function () {
      window.setInterval($scope.changeImageZozor, 5000);
    };
  
    $scope.rotateImages();
  }
  