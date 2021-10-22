function PicsController($scope, $mdDialog) {
  function DialogController($scope, $mdDialog) {
    $scope.picture = null;
    $scope.tiles = buildGridModel({
      backgroundImage: "",
    });

    function buildGridModel(tileTmpl) {
      var it,
        results = [];

      for (var j = 1; j < 35; j++) {
        it = angular.extend({}, tileTmpl);
        it.span = { row: 1, col: 1 };
        it.backgroundImage = "0" + j;

        results.push(it);
      }
      return results;
    }

    $scope.cancel = function () {
      $mdDialog.cancel();
    };

    $scope.back = function () {
      $scope.picture = null;
    };

    $scope.showPic = function (picUrl) {
      $scope.picture = picUrl;
    };
  }

  $scope.showDialog = function (ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: "./js/components/pics-component/pics-component-dialog.html",
      parent: window.jQuery("body")[0],
      targetEvent: ev,
      clickOutsideToClose: true,
    });
  };
}
