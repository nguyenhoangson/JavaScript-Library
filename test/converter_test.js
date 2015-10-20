/**
 * Created by livetolove128 on 20/10/15.
 */
var chai = require('chai');
var expect = chai.expect;

// module under test
var converter = require('../converter');

describe('Test slim converter', function(){

    describe('Test convert method', function(){

        it('should convert <p> tag of HTML to p tag of slim', function(){
            var testInput = '<p> My name is Nguyen Hoang Son </p>';
            var expected = 'p Myname is Nguyen Hoang Son\n';
            expect(converter.convert(testInput)).to.equals(expected);
        });
    });

    describe('Test generate method', function(){

        it('should generate slim code from a tree structure', function(){
            /* Test input
             *    div
             *   / \
             *  p  div
             *       \
             *        p
             */

            var testInput = {
                tag: 'div',
                attributes: '',
                text: '',
                children: []
            };

            testInput.children.push({
                tag: 'p',
                attributes: 'style="something"',
                text: 'Hello the world',
                children: []
            });

            testInput.children.push({
                tag: 'div',
                attributes: 'style="hi"',
                text: '',
                children: []
            });

            testInput.children[1].children.push({
                tag: 'p',
                attributes: 'style="Chao"',
                text: 'May be',
                children: []
            });

            expect(converter.generate(testInput)).to.equal('div  \n\tp style="something" Hello the world\n\tdiv style="hi" \n\t\tp style="Chao" May be\n');
        });
    });
});