angular
  .module("zozorApp", ["ngMaterial", "ngMessages"])
  .component("zozorLogo", {
    transclude: true,
    controller: ZozorLogoController,
    templateUrl: "/js/components/zozor-component/zozor-component.html",
  })
  .component("traveler", {
    transclude: true,
    controller: TravelerController,
    templateUrl: "/js/components/traveler-component/traveler-component.html",
  })
  .component("author", {
    transclude: true,
    controller: AuthorController,
    templateUrl: "/js/components/author-component/author-component.html",
  })
  .component("rotator", {
    transclude: true,
    controller: RotatorController,
    templateUrl: "/js/components/rotator-component/rotator-component.html",
  })
  .component("logo", {
    transclude: true,
    controller: LogoController,
    templateUrl: "/js/components/logo-component/logo-component.html",
  })
  .component("pics", {
    transclude: true,
    controller: PicsController,
    templateUrl: "/js/components/pics-component/pics-component.html",
  })
  .component("reflections", {
    transclude: true,
    controller: ReflectionsController,
    templateUrl:
      "/js/components/reflections-component/reflections-component.html",
  })
  .component("tweet", {
    transclude: true,
    controller: TweetController,
    templateUrl: "/js/components/tweet-component/tweet-component.html",
  });
