YUI.add("xsstest", function(Y) {
  /*
  * Validation function - prevent XSS by filtering out script tags
  * @param - text string to validate
  * @return - false if the string dangerous (contains <script> tag), false otherwise
  */
  var validate = function(input) {
    if (input.toLowerCase().lastIndexOf('<script') == -1) {
      return true;
    }
    return false;
    
  }
  
  /*
  * add the validation function to the module * for testing only!! * (to make it accessible to the test suite)
  */
  Y.namespace('Xsstest').validate = validate;
  
  /*
  * This functions takes a YUI element and text and insert text into the node
  * @param node_id - the id of the target node to insert text into
  * @param text - text to insert
  * @return true on success, false on failure
  */
  Y.namespace('Xsstest').insert = function (node_id, text) {
    // validate the input against XSS
    if (validate(text) == false) {
      return false;
    }
    var node = Y.one(node_id);
    if (node) {
      node.setHTML(text);
      return true;
    } else {
      return false;
    }
  };
}, '0.0.1', {requires: ['node-base']});