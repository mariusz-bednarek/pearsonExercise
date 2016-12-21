import angular from 'angular';
import 'angular-mocks';
import {footer} from './footer';

describe('footer component', () => {
  beforeEach(() => {
    angular
      .module('footer', ['app/components/footer/footer.html'])
      .component('footer', footer);
    angular.mock.module('footer');
  });

  it('component should be rendered', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<footer></footer>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
