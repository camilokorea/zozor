function TravelerController($scope, $mdDialog) {
  function DialogController($scope, $mdDialog) {
    $scope.cancel = function () {
      $mdDialog.cancel();
    };
  }

  $scope.showDialog = function (ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl:
        "./js/components/traveler-component/traveler-component-dialog.html",
      parent: window.jQuery("body")[0],
      targetEvent: ev,
      clickOutsideToClose: true,
    });
  };
}
