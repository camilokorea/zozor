function LogoController($scope) {
  $scope.displayed = false;

  this.$onInit = function () {
    window.jQuery("#logo").click(function () {
      if ($scope.displayed === false) {
        window.jQuery("#logo").addClass("open");

        window
          .jQuery("#logo_navigation .option")
          .show()
          .addClass("animate__animated animate__bounceIn option");
        $scope.displayed = true;
      } else {
        window.jQuery("#logo").removeClass("open");

        window
          .jQuery("#logo_navigation .option")
          .removeClass("animate__bounceIn")
          .addClass("animate__bounceOut");

        window.setTimeout(function () {
          window
            .jQuery("#logo_navigation .option")
            .removeClass("animate__animated animate__bounceOut")
            .hide();
        }, 1500);
        $scope.displayed = false;
      }
    });
  };
}
