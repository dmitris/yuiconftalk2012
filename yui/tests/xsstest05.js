YUI({
  base: '../../js/yui-3.7.1/build/',
  combine: false,
  modules: {
    'xsstest' : {
      fullpath: 'xsstest05.js',
      requires: ['node-base']
    }
  }
}).use('node', 'xsstest', function(Y){


YUI().add('test', function(Y){
  var testCase = new Y.Test.Case(
    {
      name: "Xsstest05 Test",
      testFunc: function() {
        
      }
    }
    )
})