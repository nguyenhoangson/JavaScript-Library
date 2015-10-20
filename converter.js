/**
 * Created by livetolove128 on 19/10/15.
 */

var converter = {};

converter.convert = function(HTMLString){
    var slimString = 'I am string';
    console.log('Hello the world');
    return slimString;
};

converter.generate = function(tree){
    return (printTree(tree, 0));
};

/* Helpers */
function Node(tag, attributes, text){
    this.tag = tag;
    this.attributes = attributes;
    this.text = text;
    this.children = [];
}

function printTree(node, level){

    var myStr =  new Array(level+1).join('\t') + node.tag +  ' ' + node.attributes + ' ' + node.text + '\n';


    if(node.children.length > 0) {

        for (var i = 0; i < node.children.length; i++) {
            myStr += printTree(node.children[i], level + 1);
        }
    }

    return myStr;
}

module.exports = converter;