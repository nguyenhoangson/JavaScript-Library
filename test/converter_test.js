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
});