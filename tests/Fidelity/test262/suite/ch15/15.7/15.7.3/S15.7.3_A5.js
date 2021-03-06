// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Number constructor has the property "NEGATIVE_INFINITY"
 *
 * @path ch15/15.7/15.7.3/S15.7.3_A5.js
 * @description Checking existence of the property "NEGATIVE_INFINITY"
 */

if(!Number.hasOwnProperty("NEGATIVE_INFINITY")){
  $ERROR('#1: The Number constructor has the property "NEGATIVE_INFINITY"');
}


