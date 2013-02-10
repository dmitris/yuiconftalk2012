YUI.add("xsstest", function(Y) {
  /*
  * Validation function - compares original and escaped versions, fails if do not match
  * @param - text string to validate
  * @return - false if the string dangerous (contains <script> tag), false otherwise
  */
  var validate = function(input) {
    var escaped = Y.Escape.html(input);
    if (escaped != input) {
      Y.log("Validation Error: Rejecting invalid input " + input);
      return false;
    }
    return true;
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
}, '0.0.1', {requires: ['escape','node-base']});