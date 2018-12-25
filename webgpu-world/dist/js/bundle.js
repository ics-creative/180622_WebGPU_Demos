/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var mat4_namespaceObject = {};
__webpack_require__.r(mat4_namespaceObject);
__webpack_require__.d(mat4_namespaceObject, "create", function() { return create; });
__webpack_require__.d(mat4_namespaceObject, "clone", function() { return clone; });
__webpack_require__.d(mat4_namespaceObject, "copy", function() { return copy; });
__webpack_require__.d(mat4_namespaceObject, "fromValues", function() { return fromValues; });
__webpack_require__.d(mat4_namespaceObject, "set", function() { return set; });
__webpack_require__.d(mat4_namespaceObject, "identity", function() { return identity; });
__webpack_require__.d(mat4_namespaceObject, "transpose", function() { return transpose; });
__webpack_require__.d(mat4_namespaceObject, "invert", function() { return invert; });
__webpack_require__.d(mat4_namespaceObject, "adjoint", function() { return adjoint; });
__webpack_require__.d(mat4_namespaceObject, "determinant", function() { return determinant; });
__webpack_require__.d(mat4_namespaceObject, "multiply", function() { return multiply; });
__webpack_require__.d(mat4_namespaceObject, "translate", function() { return translate; });
__webpack_require__.d(mat4_namespaceObject, "scale", function() { return mat4_scale; });
__webpack_require__.d(mat4_namespaceObject, "rotate", function() { return rotate; });
__webpack_require__.d(mat4_namespaceObject, "rotateX", function() { return rotateX; });
__webpack_require__.d(mat4_namespaceObject, "rotateY", function() { return rotateY; });
__webpack_require__.d(mat4_namespaceObject, "rotateZ", function() { return rotateZ; });
__webpack_require__.d(mat4_namespaceObject, "fromTranslation", function() { return fromTranslation; });
__webpack_require__.d(mat4_namespaceObject, "fromScaling", function() { return fromScaling; });
__webpack_require__.d(mat4_namespaceObject, "fromRotation", function() { return fromRotation; });
__webpack_require__.d(mat4_namespaceObject, "fromXRotation", function() { return fromXRotation; });
__webpack_require__.d(mat4_namespaceObject, "fromYRotation", function() { return fromYRotation; });
__webpack_require__.d(mat4_namespaceObject, "fromZRotation", function() { return fromZRotation; });
__webpack_require__.d(mat4_namespaceObject, "fromRotationTranslation", function() { return fromRotationTranslation; });
__webpack_require__.d(mat4_namespaceObject, "fromQuat2", function() { return fromQuat2; });
__webpack_require__.d(mat4_namespaceObject, "getTranslation", function() { return getTranslation; });
__webpack_require__.d(mat4_namespaceObject, "getScaling", function() { return getScaling; });
__webpack_require__.d(mat4_namespaceObject, "getRotation", function() { return getRotation; });
__webpack_require__.d(mat4_namespaceObject, "fromRotationTranslationScale", function() { return fromRotationTranslationScale; });
__webpack_require__.d(mat4_namespaceObject, "fromRotationTranslationScaleOrigin", function() { return fromRotationTranslationScaleOrigin; });
__webpack_require__.d(mat4_namespaceObject, "fromQuat", function() { return fromQuat; });
__webpack_require__.d(mat4_namespaceObject, "frustum", function() { return frustum; });
__webpack_require__.d(mat4_namespaceObject, "perspective", function() { return perspective; });
__webpack_require__.d(mat4_namespaceObject, "perspectiveFromFieldOfView", function() { return perspectiveFromFieldOfView; });
__webpack_require__.d(mat4_namespaceObject, "ortho", function() { return ortho; });
__webpack_require__.d(mat4_namespaceObject, "lookAt", function() { return lookAt; });
__webpack_require__.d(mat4_namespaceObject, "targetTo", function() { return targetTo; });
__webpack_require__.d(mat4_namespaceObject, "str", function() { return str; });
__webpack_require__.d(mat4_namespaceObject, "frob", function() { return frob; });
__webpack_require__.d(mat4_namespaceObject, "add", function() { return add; });
__webpack_require__.d(mat4_namespaceObject, "subtract", function() { return subtract; });
__webpack_require__.d(mat4_namespaceObject, "multiplyScalar", function() { return multiplyScalar; });
__webpack_require__.d(mat4_namespaceObject, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
__webpack_require__.d(mat4_namespaceObject, "exactEquals", function() { return exactEquals; });
__webpack_require__.d(mat4_namespaceObject, "equals", function() { return mat4_equals; });
__webpack_require__.d(mat4_namespaceObject, "mul", function() { return mul; });
__webpack_require__.d(mat4_namespaceObject, "sub", function() { return sub; });
var vec3_namespaceObject = {};
__webpack_require__.r(vec3_namespaceObject);
__webpack_require__.d(vec3_namespaceObject, "create", function() { return vec3_create; });
__webpack_require__.d(vec3_namespaceObject, "clone", function() { return vec3_clone; });
__webpack_require__.d(vec3_namespaceObject, "length", function() { return vec3_length; });
__webpack_require__.d(vec3_namespaceObject, "fromValues", function() { return vec3_fromValues; });
__webpack_require__.d(vec3_namespaceObject, "copy", function() { return vec3_copy; });
__webpack_require__.d(vec3_namespaceObject, "set", function() { return vec3_set; });
__webpack_require__.d(vec3_namespaceObject, "add", function() { return vec3_add; });
__webpack_require__.d(vec3_namespaceObject, "subtract", function() { return vec3_subtract; });
__webpack_require__.d(vec3_namespaceObject, "multiply", function() { return vec3_multiply; });
__webpack_require__.d(vec3_namespaceObject, "divide", function() { return divide; });
__webpack_require__.d(vec3_namespaceObject, "ceil", function() { return ceil; });
__webpack_require__.d(vec3_namespaceObject, "floor", function() { return floor; });
__webpack_require__.d(vec3_namespaceObject, "min", function() { return min; });
__webpack_require__.d(vec3_namespaceObject, "max", function() { return max; });
__webpack_require__.d(vec3_namespaceObject, "round", function() { return round; });
__webpack_require__.d(vec3_namespaceObject, "scale", function() { return vec3_scale; });
__webpack_require__.d(vec3_namespaceObject, "scaleAndAdd", function() { return scaleAndAdd; });
__webpack_require__.d(vec3_namespaceObject, "distance", function() { return distance; });
__webpack_require__.d(vec3_namespaceObject, "squaredDistance", function() { return squaredDistance; });
__webpack_require__.d(vec3_namespaceObject, "squaredLength", function() { return squaredLength; });
__webpack_require__.d(vec3_namespaceObject, "negate", function() { return negate; });
__webpack_require__.d(vec3_namespaceObject, "inverse", function() { return inverse; });
__webpack_require__.d(vec3_namespaceObject, "normalize", function() { return normalize; });
__webpack_require__.d(vec3_namespaceObject, "dot", function() { return dot; });
__webpack_require__.d(vec3_namespaceObject, "cross", function() { return cross; });
__webpack_require__.d(vec3_namespaceObject, "lerp", function() { return lerp; });
__webpack_require__.d(vec3_namespaceObject, "hermite", function() { return hermite; });
__webpack_require__.d(vec3_namespaceObject, "bezier", function() { return bezier; });
__webpack_require__.d(vec3_namespaceObject, "random", function() { return random; });
__webpack_require__.d(vec3_namespaceObject, "transformMat4", function() { return transformMat4; });
__webpack_require__.d(vec3_namespaceObject, "transformMat3", function() { return transformMat3; });
__webpack_require__.d(vec3_namespaceObject, "transformQuat", function() { return transformQuat; });
__webpack_require__.d(vec3_namespaceObject, "rotateX", function() { return vec3_rotateX; });
__webpack_require__.d(vec3_namespaceObject, "rotateY", function() { return vec3_rotateY; });
__webpack_require__.d(vec3_namespaceObject, "rotateZ", function() { return vec3_rotateZ; });
__webpack_require__.d(vec3_namespaceObject, "angle", function() { return angle; });
__webpack_require__.d(vec3_namespaceObject, "str", function() { return vec3_str; });
__webpack_require__.d(vec3_namespaceObject, "exactEquals", function() { return vec3_exactEquals; });
__webpack_require__.d(vec3_namespaceObject, "equals", function() { return vec3_equals; });
__webpack_require__.d(vec3_namespaceObject, "sub", function() { return vec3_sub; });
__webpack_require__.d(vec3_namespaceObject, "mul", function() { return vec3_mul; });
__webpack_require__.d(vec3_namespaceObject, "div", function() { return div; });
__webpack_require__.d(vec3_namespaceObject, "dist", function() { return dist; });
__webpack_require__.d(vec3_namespaceObject, "sqrDist", function() { return sqrDist; });
__webpack_require__.d(vec3_namespaceObject, "len", function() { return vec3_len; });
__webpack_require__.d(vec3_namespaceObject, "sqrLen", function() { return sqrLen; });
__webpack_require__.d(vec3_namespaceObject, "forEach", function() { return forEach; });

// CONCATENATED MODULE: ./node_modules/gl-matrix/lib/gl-matrix/common.js
/**
 * Common utilities
 * @module glMatrix
 */

// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
var RANDOM = Math.random;

/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */
function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}

var degree = Math.PI / 180;

/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */
function toRadian(a) {
  return a * degree;
}

/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */
function equals(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}
// CONCATENATED MODULE: ./node_modules/gl-matrix/lib/gl-matrix/mat4.js


/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
function create() {
  var out = new ARRAY_TYPE(16);
  if (ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }
  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}

/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */
function clone(a) {
  var out = new ARRAY_TYPE(16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */
function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new ARRAY_TYPE(16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}

/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */
function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}

/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a12 = a[6],
        a13 = a[7];
    var a23 = a[11];

    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];

  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

  return out;
}

/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];

  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}

/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];

  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}

/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];

  // Cache only the current line of the second matrix
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

  b0 = b[4];b1 = b[5];b2 = b[6];b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

  b0 = b[8];b1 = b[9];b2 = b[10];b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

  b0 = b[12];b1 = b[13];b2 = b[14];b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
function translate(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  var a00 = void 0,
      a01 = void 0,
      a02 = void 0,
      a03 = void 0;
  var a10 = void 0,
      a11 = void 0,
      a12 = void 0,
      a13 = void 0;
  var a20 = void 0,
      a21 = void 0,
      a22 = void 0,
      a23 = void 0;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];a01 = a[1];a02 = a[2];a03 = a[3];
    a10 = a[4];a11 = a[5];a12 = a[6];a13 = a[7];
    a20 = a[8];a21 = a[9];a22 = a[10];a23 = a[11];

    out[0] = a00;out[1] = a01;out[2] = a02;out[3] = a03;
    out[4] = a10;out[5] = a11;out[6] = a12;out[7] = a13;
    out[8] = a20;out[9] = a21;out[10] = a22;out[11] = a23;

    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}

/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
function mat4_scale(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];

  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function rotate(out, a, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.sqrt(x * x + y * y + z * z);
  var s = void 0,
      c = void 0,
      t = void 0;
  var a00 = void 0,
      a01 = void 0,
      a02 = void 0,
      a03 = void 0;
  var a10 = void 0,
      a11 = void 0,
      a12 = void 0,
      a13 = void 0;
  var a20 = void 0,
      a21 = void 0,
      a22 = void 0,
      a23 = void 0;
  var b00 = void 0,
      b01 = void 0,
      b02 = void 0;
  var b10 = void 0,
      b11 = void 0,
      b12 = void 0;
  var b20 = void 0,
      b21 = void 0,
      b22 = void 0;

  if (len < EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;

  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;

  a00 = a[0];a01 = a[1];a02 = a[2];a03 = a[3];
  a10 = a[4];a11 = a[5];a12 = a[6];a13 = a[7];
  a20 = a[8];a21 = a[9];a22 = a[10];a23 = a[11];

  // Construct the elements of the rotation matrix
  b00 = x * x * t + c;b01 = y * x * t + z * s;b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;b11 = y * y * t + c;b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;b21 = y * z * t - x * s;b22 = z * z * t + c;

  // Perform rotation-specific matrix multiplication
  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  return out;
}

/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}

/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateY(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}

/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Scaling vector
 * @returns {mat4} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function fromRotation(out, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.sqrt(x * x + y * y + z * z);
  var s = void 0,
      c = void 0,
      t = void 0;

  if (len < EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;

  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;

  // Perform rotation-specific matrix multiplication
  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromRotationTranslation(out, q, v) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;

  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;

  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;

  return out;
}

/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {quat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */
function fromQuat2(out, a) {
  var translation = new ARRAY_TYPE(3);
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];

  var magnitude = bx * bx + by * by + bz * bz + bw * bw;
  //Only scale if it makes sense
  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }
  fromRotationTranslation(out, a, translation);
  return out;
}

/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];

  return out;
}

/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];

  out[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
  out[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
  out[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);

  return out;
}

/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {mat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */
function getRotation(out, mat) {
  // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
  var trace = mat[0] + mat[5] + mat[10];
  var S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (mat[6] - mat[9]) / S;
    out[1] = (mat[8] - mat[2]) / S;
    out[2] = (mat[1] - mat[4]) / S;
  } else if (mat[0] > mat[5] && mat[0] > mat[10]) {
    S = Math.sqrt(1.0 + mat[0] - mat[5] - mat[10]) * 2;
    out[3] = (mat[6] - mat[9]) / S;
    out[0] = 0.25 * S;
    out[1] = (mat[1] + mat[4]) / S;
    out[2] = (mat[8] + mat[2]) / S;
  } else if (mat[5] > mat[10]) {
    S = Math.sqrt(1.0 + mat[5] - mat[0] - mat[10]) * 2;
    out[3] = (mat[8] - mat[2]) / S;
    out[0] = (mat[1] + mat[4]) / S;
    out[1] = 0.25 * S;
    out[2] = (mat[6] + mat[9]) / S;
  } else {
    S = Math.sqrt(1.0 + mat[10] - mat[0] - mat[5]) * 2;
    out[3] = (mat[1] - mat[4]) / S;
    out[0] = (mat[8] + mat[2]) / S;
    out[1] = (mat[6] + mat[9]) / S;
    out[2] = 0.25 * S;
  }

  return out;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */
function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;

  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];

  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;

  return out;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @param {vec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */
function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;

  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;

  var sx = s[0];
  var sy = s[1];
  var sz = s[2];

  var ox = o[0];
  var oy = o[1];
  var oz = o[2];

  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;

  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;

  return out;
}

/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */
function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;

  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;

  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;

  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;

  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;

  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;

  return out;
}

/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */
function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}

/**
 * Generates a perspective projection matrix with the given bounds.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */
function perspective(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf = void 0;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;
  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }
  return out;
}

/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
  var xScale = 2.0 / (leftTan + rightTan);
  var yScale = 2.0 / (upTan + downTan);

  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = far * near / (near - far);
  out[15] = 0.0;
  return out;
}

/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function ortho(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function lookAt(out, eye, center, up) {
  var x0 = void 0,
      x1 = void 0,
      x2 = void 0,
      y0 = void 0,
      y1 = void 0,
      y2 = void 0,
      z0 = void 0,
      z1 = void 0,
      z2 = void 0,
      len = void 0;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];

  if (Math.abs(eyex - centerx) < EPSILON && Math.abs(eyey - centery) < EPSILON && Math.abs(eyez - centerz) < EPSILON) {
    return identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;

  len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;

  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;

  len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;

  return out;
}

/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function targetTo(out, eye, target, up) {
  var eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];

  var z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];

  var len = z0 * z0 + z1 * z1 + z2 * z2;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  var x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;

  len = x0 * x0 + x1 * x1 + x2 * x2;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
};

/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
}

/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2));
}

/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}

/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  out[9] = a[9] + b[9] * scale;
  out[10] = a[10] + b[10] * scale;
  out[11] = a[11] + b[11] * scale;
  out[12] = a[12] + b[12] * scale;
  out[13] = a[13] + b[13] * scale;
  out[14] = a[14] + b[14] * scale;
  out[15] = a[15] + b[15] * scale;
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function mat4_equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var a8 = a[8],
      a9 = a[9],
      a10 = a[10],
      a11 = a[11];
  var a12 = a[12],
      a13 = a[13],
      a14 = a[14],
      a15 = a[15];

  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  var b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  var b8 = b[8],
      b9 = b[9],
      b10 = b[10],
      b11 = b[11];
  var b12 = b[12],
      b13 = b[13],
      b14 = b[14],
      b15 = b[15];

  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}

/**
 * Alias for {@link mat4.multiply}
 * @function
 */
var mul = multiply;

/**
 * Alias for {@link mat4.subtract}
 * @function
 */
var sub = subtract;
// CONCATENATED MODULE: ./node_modules/gl-matrix/lib/gl-matrix/vec3.js


/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
function vec3_create() {
  var out = new ARRAY_TYPE(3);
  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }
  return out;
}

/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */
function vec3_clone(a) {
  var out = new ARRAY_TYPE(3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
function vec3_length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.sqrt(x * x + y * y + z * z);
}

/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */
function vec3_fromValues(x, y, z) {
  var out = new ARRAY_TYPE(3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */
function vec3_copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
function vec3_set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function vec3_add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function vec3_subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}

/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function vec3_multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}

/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}

/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to ceil
 * @returns {vec3} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}

/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to floor
 * @returns {vec3} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}

/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}

/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}

/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to round
 * @returns {vec3} out
 */
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
function vec3_scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}

/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  return out;
}

/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.sqrt(x * x + y * y + z * z);
}

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}

/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}

/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}

/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    out[2] = a[2] * len;
  }
  return out;
}

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2];
  var bx = b[0],
      by = b[1],
      bz = b[2];

  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */
function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}

/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */
function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);

  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

  return out;
}

/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */
function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;

  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

  return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */
function random(out, scale) {
  scale = scale || 1.0;

  var r = RANDOM() * 2.0 * Math.PI;
  var z = RANDOM() * 2.0 - 1.0;
  var zScale = Math.sqrt(1.0 - z * z) * scale;

  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */
function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}

/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */
function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}

/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */
function transformQuat(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];
  var x = a[0],
      y = a[1],
      z = a[2];
  // var qvec = [qx, qy, qz];
  // var uv = vec3.cross([], qvec, a);
  var uvx = qy * z - qz * y,
      uvy = qz * x - qx * z,
      uvz = qx * y - qy * x;
  // var uuv = vec3.cross([], qvec, uv);
  var uuvx = qy * uvz - qz * uvy,
      uuvy = qz * uvx - qx * uvz,
      uuvz = qx * uvy - qy * uvx;
  // vec3.scale(uv, uv, 2 * w);
  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2;
  // vec3.scale(uuv, uuv, 2);
  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2;
  // return vec3.add(out, a, vec3.add(out, uv, uuv));
  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}

/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function vec3_rotateX(out, a, b, c) {
  var p = [],
      r = [];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[0];
  r[1] = p[1] * Math.cos(c) - p[2] * Math.sin(c);
  r[2] = p[1] * Math.sin(c) + p[2] * Math.cos(c);

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function vec3_rotateY(out, a, b, c) {
  var p = [],
      r = [];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[2] * Math.sin(c) + p[0] * Math.cos(c);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(c) - p[0] * Math.sin(c);

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function vec3_rotateZ(out, a, b, c) {
  var p = [],
      r = [];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[0] * Math.cos(c) - p[1] * Math.sin(c);
  r[1] = p[0] * Math.sin(c) + p[1] * Math.cos(c);
  r[2] = p[2];

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */
function angle(a, b) {
  var tempA = vec3_fromValues(a[0], a[1], a[2]);
  var tempB = vec3_fromValues(b[0], b[1], b[2]);

  normalize(tempA, tempA);
  normalize(tempB, tempB);

  var cosine = dot(tempA, tempB);

  if (cosine > 1.0) {
    return 0;
  } else if (cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function vec3_str(a) {
  return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function vec3_exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function vec3_equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}

/**
 * Alias for {@link vec3.subtract}
 * @function
 */
var vec3_sub = vec3_subtract;

/**
 * Alias for {@link vec3.multiply}
 * @function
 */
var vec3_mul = vec3_multiply;

/**
 * Alias for {@link vec3.divide}
 * @function
 */
var div = divide;

/**
 * Alias for {@link vec3.distance}
 * @function
 */
var dist = distance;

/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */
var sqrDist = squaredDistance;

/**
 * Alias for {@link vec3.length}
 * @function
 */
var vec3_len = vec3_length;

/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */
var sqrLen = squaredLength;

/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
var forEach = function () {
  var vec = vec3_create();

  return function (a, stride, offset, count, fn, arg) {
    var i = void 0,
        l = void 0;
    if (!stride) {
      stride = 3;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];vec[1] = a[i + 1];vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];a[i + 1] = vec[1];a[i + 2] = vec[2];
    }

    return a;
  };
}();
// CONCATENATED MODULE: ./node_modules/gl-matrix/lib/gl-matrix.js












// CONCATENATED MODULE: ./src/webgpu/Primitive.ts
class Primitive {
    get numAttributes() {
        return this._numAttributes;
    }
    get numVertices() {
        return this._numVertices;
    }
    get bufferData() {
        return this._bufferData;
    }
    get vertexBuffer() {
        return this._vertexBuffer;
    }
    constructor() {
    }
    createBuffer(gpu) {
        this._vertexBuffer = gpu.createBuffer(this._bufferData);
    }
}

// CONCATENATED MODULE: ./src/project/Cube.ts

class Cube_Cube extends Primitive {
    constructor() {
        super();
        this._numAttributes = 6;
        this._numVertices = 36;
        this._bufferData = new Float32Array([
            // position(x,y,z), normal(x,y,z)
            1.0, -1.0, 1.0, 0.0, -1.0, 0.0,
            -1.0, -1.0, 1.0, 0.0, -1.0, 0.0,
            -1.0, -1.0, -1.0, 0.0, -1.0, 0.0,
            1.0, -1.0, -1.0, 0.0, -1.0, 0.0,
            1.0, -1.0, 1.0, 0.0, -1.0, 0.0,
            -1.0, -1.0, -1.0, 0.0, -1.0, 0.0,
            1.0, 1.0, 1.0, 1.0, 0.0, 0.0,
            1.0, -1.0, 1.0, 1.0, 0.0, 0.0,
            1.0, -1.0, -1.0, 1.0, 0.0, 0.0,
            1.0, 1.0, -1.0, 1.0, 0.0, 0.0,
            1.0, 1.0, 1.0, 1.0, 0.0, 0.0,
            1.0, -1.0, -1.0, 1.0, 0.0, 0.0,
            -1.0, 1.0, 1.0, 0.0, 1.0, 0.0,
            1.0, 1.0, 1.0, 0.0, 1.0, 0.0,
            1.0, 1.0, -1.0, 0.0, 1.0, 0.0,
            -1.0, 1.0, -1.0, 0.0, 1.0, 0.0,
            -1.0, 1.0, 1.0, 0.0, 1.0, 0.0,
            1.0, 1.0, -1.0, 0.0, 1.0, 0.0,
            -1.0, -1.0, 1.0, -1.0, 0.0, 0.0,
            -1.0, 1.0, 1.0, -1.0, 0.0, 0.0,
            -1.0, 1.0, -1.0, -1.0, 0.0, 0.0,
            -1.0, -1.0, -1.0, -1.0, 0.0, 0.0,
            -1.0, -1.0, 1.0, -1.0, 0.0, 0.0,
            -1.0, 1.0, -1.0, -1.0, 0.0, 0.0,
            1.0, 1.0, 1.0, 0.0, 0.0, 1.0,
            -1.0, 1.0, 1.0, 0.0, 0.0, 1.0,
            -1.0, -1.0, 1.0, 0.0, 0.0, 1.0,
            -1.0, -1.0, 1.0, 0.0, 0.0, 1.0,
            1.0, -1.0, 1.0, 0.0, 0.0, 1.0,
            1.0, 1.0, 1.0, 0.0, 0.0, 1.0,
            1.0, -1.0, -1.0, 0.0, 0.0, -1.0,
            -1.0, -1.0, -1.0, 0.0, 0.0, -1.0,
            -1.0, 1.0, -1.0, 0.0, 0.0, -1.0,
            1.0, 1.0, -1.0, 0.0, 0.0, -1.0,
            1.0, -1.0, -1.0, 0.0, 0.0, -1.0,
            -1.0, 1.0, -1.0, 0.0, 0.0, -1.0
        ]);
    }
}

// CONCATENATED MODULE: ./src/project/GLTFLoader.ts
class GLTFLoader {
    static async load(url) {
        const json = await fetch(url).then((response) => response.json());
        const pathArr = url.split('/');
        pathArr.pop();
        const relativePath = pathArr.join('/');
        if (!GLTFLoader.glcontext) {
            GLTFLoader.glcontext = document.createElement('canvas').getContext('webgl');
        }
        const glcontext = GLTFLoader.glcontext;
        console.log(json);
        const mesh = json.meshes[0];
        const primitive = mesh.primitives[0];
        const data = {
            primitiveType: 0 /* POINTS */,
            numVertices: 0,
            position: null,
            normal: null,
            indices: null
        };
        switch (primitive.mode) {
            case glcontext.POINTS:
                data.primitiveType = 0 /* POINTS */;
                break;
            case glcontext.LINES:
                data.primitiveType = 1 /* LINES */;
                break;
            case glcontext.TRIANGLES:
                data.primitiveType = 2 /* TRIANGLES */;
                break;
            default:
                return data;
        }
        const bufferDataList = await GLTFLoader.loadBuffers(json.buffers, relativePath);
        const accessorsDataList = GLTFLoader.loadAccessors(json.accessors, json.bufferViews, bufferDataList);
        const attributes = primitive.attributes;
        const positionAccessorIndex = attributes.POSITION;
        const positionAccessor = json.accessors[positionAccessorIndex];
        data.numVertices = positionAccessor.count;
        data.position = {
            data: accessorsDataList[positionAccessorIndex],
            num: GLTFLoader.getAccessorTypeSize(positionAccessor.type),
            min: positionAccessor.min,
            max: positionAccessor.max
        };
        // console.log(data);
        if (attributes.hasOwnProperty('NORMAL')) {
            const normalAccessorIndex = attributes.NORMAL;
            data.normal = {
                data: accessorsDataList[normalAccessorIndex],
                num: GLTFLoader.getAccessorTypeSize(json.accessors[normalAccessorIndex].type)
            };
        }
        if (primitive.hasOwnProperty('indices')) {
            const indicesAccessorIndex = primitive.indices;
            data.indices = {
                data: accessorsDataList[indicesAccessorIndex],
                num: GLTFLoader.getAccessorTypeSize(json.accessors[indicesAccessorIndex].type)
            };
        }
        return data;
    }
    static async loadBuffers(buffers, relativePath) {
        const bufferDataList = [];
        const length = buffers.length;
        for (let i = 0; i < length; i++) {
            const buffer = buffers[i];
            const bufferData = await fetch(relativePath + '/' + buffer.uri).then((response) => response.arrayBuffer());
            if (bufferData.byteLength === buffer.byteLength) {
                bufferDataList.push(bufferData);
            }
        }
        return bufferDataList;
    }
    static loadAccessors(accessors, bufferViews, bufferDataList) {
        const accessorsDataList = [];
        const length = accessors.length;
        for (let i = 0; i < length; i++) {
            const accessor = accessors[i];
            const bufferView = bufferViews[accessor.bufferView];
            const bufferData = bufferDataList[bufferView.buffer];
            switch (accessor.componentType) {
                case GLTFLoader.glcontext.BYTE:
                    break;
                case GLTFLoader.glcontext.UNSIGNED_BYTE:
                    break;
                case GLTFLoader.glcontext.SHORT:
                    break;
                case GLTFLoader.glcontext.UNSIGNED_SHORT:
                    const uint16Array = new Uint16Array(bufferData, bufferView.byteOffset + accessor.byteOffset, accessor.count * GLTFLoader.getAccessorTypeSize(accessor.type));
                    accessorsDataList.push(uint16Array);
                    break;
                case GLTFLoader.glcontext.INT:
                    break;
                case GLTFLoader.glcontext.UNSIGNED_INT:
                    break;
                case GLTFLoader.glcontext.FLOAT:
                    const float32Array = new Float32Array(bufferData, bufferView.byteOffset + accessor.byteOffset, accessor.count * GLTFLoader.getAccessorTypeSize(accessor.type));
                    accessorsDataList.push(float32Array);
                    break;
                default:
                    break;
            }
        }
        return accessorsDataList;
    }
    static getAccessorTypeSize(accessorType) {
        let size = 0;
        switch (accessorType) {
            case 'SCALAR':
                size = 1 /* SCALAR */;
                break;
            case 'VEC2':
                size = 2 /* VEC2 */;
                break;
            case 'VEC3':
                size = 3 /* VEC3 */;
                break;
            case 'VEC4':
                size = 4 /* VEC4 */;
                break;
            case 'MAT2':
                size = 4 /* MAT2 */;
                break;
            case 'MAT3':
                size = 9 /* MAT3 */;
                break;
            case 'MAT4':
                size = 16 /* MAT4 */;
                break;
        }
        return size;
    }
    constructor() {
    }
}

// CONCATENATED MODULE: ./src/project/GLTF.ts


class GLTF_GLTF extends Primitive {
    constructor() {
        super();
    }
    async loadModel(url, centering = false) {
        const data = await GLTFLoader.load(url);
        const numIndices = data.indices.data.length;
        this._numAttributes = data.position.num + data.normal.num;
        this._numVertices = numIndices;
        let centerX = 0.0;
        let centerY = 0.0;
        let centerZ = 0.0;
        if (centering) {
            const posMin = data.position.min;
            const posMax = data.position.max;
            centerX = (posMax[0] - posMin[0]) / 2 + posMin[0];
            centerY = (posMax[1] - posMin[1]) / 2 + posMin[1];
            centerZ = (posMax[2] - posMin[2]) / 2 + posMin[2];
        }
        this._bufferData = new Float32Array(this._numAttributes * this._numVertices);
        for (let i = 0; i < this._numVertices; i++) {
            const bufferVertexOffset = i * 6;
            const sourceVertexOffset = data.indices.data[i] * 3;
            this._bufferData[bufferVertexOffset] = data.position.data[sourceVertexOffset] - centerX;
            this._bufferData[bufferVertexOffset + 1] = data.position.data[sourceVertexOffset + 1] - centerY;
            this._bufferData[bufferVertexOffset + 2] = data.position.data[sourceVertexOffset + 2] - centerZ;
            this._bufferData[bufferVertexOffset + 3] = data.normal.data[sourceVertexOffset];
            this._bufferData[bufferVertexOffset + 4] = data.normal.data[sourceVertexOffset + 1];
            this._bufferData[bufferVertexOffset + 5] = data.normal.data[sourceVertexOffset + 2];
        }
    }
}

// CONCATENATED MODULE: ./src/project/GUIPanel.ts
class GUIPanel {
    constructor() {
        this.num = 1000;
        this.useModel = true;
    }
    setGUITitle(gui, propertyName, title) {
        let propertyList = gui.domElement.getElementsByClassName('property-name');
        let length = propertyList.length;
        for (let i = 0; i < length; i++) {
            let element = propertyList[i];
            if (element.innerHTML === propertyName) {
                element.innerHTML = title;
            }
        }
    }
}

// CONCATENATED MODULE: ./src/project/RGB.ts
class RGB {
    constructor(r, g, b) {
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.r = r;
        this.g = g;
        this.b = b;
    }
    static createFromHSV(h, s, v) {
        if (s > 1.0) {
            s = 1.0;
        }
        if (v > 1.0) {
            v = 1.0;
        }
        let th = (h + 360) % 360;
        let i = Math.floor(th / 60);
        let f = th / 60 - i;
        let m = v * (1 - s);
        let n = v * (1 - s * f);
        let k = v * (1 - s * (1 - f));
        let color;
        if (s === 0) {
            color = new RGB(v, v, v);
        }
        else {
            switch (i) {
                case 0: {
                    color = new RGB(v, k, m);
                    break;
                }
                case 1: {
                    color = new RGB(n, v, m);
                    break;
                }
                case 2: {
                    color = new RGB(m, v, k);
                    break;
                }
                case 3: {
                    color = new RGB(m, n, v);
                    break;
                }
                case 4: {
                    color = new RGB(k, m, v);
                    break;
                }
                case 5: {
                    color = new RGB(v, m, n);
                    break;
                }
            }
        }
        return color;
    }
}

// CONCATENATED MODULE: ./src/webgpu/Uniform.ts
class Uniform {
    get bufferData() {
        return this._bufferData;
    }
    get bufferDataLength() {
        return this._bufferDataLength;
    }
    get buffer() {
        return this._buffer;
    }
    constructor() {
    }
    createBuffer(gpu) {
        this._buffer = gpu.createBuffer(new Float32Array(this._bufferDataLength));
        this._bufferData = new Float32Array(this._buffer.contents);
    }
    _copyData(data, offset, count) {
        for (let i = 0; i < count; i++) {
            this._bufferData[offset + i] = data[i];
        }
    }
}

// CONCATENATED MODULE: ./src/project/VertexUniform.ts

class VertexUniform_VertexUniform extends Uniform {
    constructor() {
        super();
        this._bufferDataLength = VertexUniform_VertexUniform.BUFFER_LENGTH;
    }
    // Layout
    // 0-15 = mvpMatrix:float4x4
    // 16-31 = modelMatrix:float4x4
    // 32-35 = baseColor:float4
    // 36-39 = ambientLightColor:float4
    // 40-43 = directionalLightColor:float4
    // 44-46 = directionalLightDirection:float3
    get mvpMatrix() {
        return this._bufferData.subarray(0, 16);
    }
    set mvpMatrix(value) {
        this._copyData(value, 0, 16);
    }
    get modelMatrix() {
        return this._bufferData.subarray(16, 32);
    }
    set modelMatrix(value) {
        this._copyData(value, 16, 16);
    }
    get baseColor() {
        return this._bufferData.subarray(32, 35);
    }
    set baseColor(value) {
        this._copyData(value, 32, 4);
    }
    get ambientLightColor() {
        return this._bufferData.subarray(36, 39);
    }
    set ambientLightColor(value) {
        this._copyData(value, 36, 4);
    }
    get directionalLightColor() {
        return this._bufferData.subarray(40, 43);
    }
    set directionalLightColor(value) {
        this._copyData(value, 40, 4);
    }
    get directionalLightDirection() {
        return this._bufferData.subarray(44, 46);
    }
    set directionalLightDirection(value) {
        this._copyData(value, 44, 3);
    }
}
VertexUniform_VertexUniform.BUFFER_LENGTH = 47;

// CONCATENATED MODULE: ./src/webgpu/Camera.ts

class Camera_Camera {
    constructor(fov, aspect, zNear, zFar) {
        //
        this._cameraUP = vec3_namespaceObject.fromValues(0.0, 1.0, 0.0);
        //
        this._projectionMtx = mat4_namespaceObject.identity(mat4_namespaceObject.create());
        this._cameraMtx = mat4_namespaceObject.identity(mat4_namespaceObject.create());
        this._lookMtx = mat4_namespaceObject.identity(mat4_namespaceObject.create());
        //
        this.x = 0.0;
        this.y = 0.0;
        this.z = 0.0;
        mat4_namespaceObject.perspective(this._projectionMtx, fov, aspect, zNear, zFar);
    }
    getCameraMtx() {
        return this._cameraMtx;
    }
    lookAt(point) {
        mat4_namespaceObject.identity(this._lookMtx);
        mat4_namespaceObject.lookAt(this._lookMtx, vec3_namespaceObject.fromValues(this.x, this.y, this.z), point, this._cameraUP);
        mat4_namespaceObject.multiply(this._cameraMtx, this._projectionMtx, this._lookMtx);
    }
}
Camera_Camera.DIRECTION = vec3_namespaceObject.fromValues(0.0, 0.0, 1.0);

// CONCATENATED MODULE: ./src/webgpu/enum/events/KeyboardEventName.ts
class KeyboardEventName {
}
KeyboardEventName.KEY_DOWN = 'keydown';

// CONCATENATED MODULE: ./src/webgpu/enum/events/MouseEventName.ts
class MouseEventName {
}
MouseEventName.MOUSE_DOWN = 'mousedown';
MouseEventName.MOUSE_UP = 'mouseup';
MouseEventName.MOUSE_MOVE = 'mousemove';
MouseEventName.MOUSE_WHEEL = 'mousewheel';
MouseEventName.DOM_MOUSE_SCROLL = 'DOMMouseScroll';

// CONCATENATED MODULE: ./src/webgpu/enum/events/GestureEventName.ts
class GestureEventName {
}
GestureEventName.GESTURE_START = 'gesturestart';
GestureEventName.GESTURE_CHANGE = 'gesturechange';
GestureEventName.GESTURE_END = 'gestureend';

// CONCATENATED MODULE: ./src/webgpu/enum/events/TouchEventName.ts
class TouchEventName {
}
TouchEventName.TOUCH_START = 'touchstart';
TouchEventName.TOUCH_MOVE = 'touchmove';
TouchEventName.TOUCH_END = 'touchend';

// CONCATENATED MODULE: ./src/webgpu/enum/ui/KeyCode.ts
class KeyCode {
}
KeyCode.UP = 38;
KeyCode.DOWN = 40;

// CONCATENATED MODULE: ./src/webgpu/RoundCameraController.ts






class RoundCameraController_RoundCameraController {
    constructor(camera, stage) {
        // parameter
        this.radiusMin = 1.0;
        this.radiusOffset = 0.1;
        this.gestureRadiusFactor = 20.0;
        // camera
        this.radius = 2.0;
        this._theta = 0.0;
        this._oldX = 0.0;
        this._phi = 90.0;
        this._oldY = 0.0;
        this._currentTheta = 0.0;
        this._currentPhi = 90.0;
        this._camera = camera;
        this._stage = stage;
        this._target = vec3_namespaceObject.fromValues(0.0, 0.0, 0.0);
        this.enable();
        this._updateCamera();
    }
    enable() {
        document.addEventListener(KeyboardEventName.KEY_DOWN, (event) => {
            this._keyHandler(event);
        });
        document.addEventListener(MouseEventName.MOUSE_UP, (event) => {
            this._upHandler(event);
        });
        this._stage.addEventListener(MouseEventName.MOUSE_DOWN, (event) => {
            this._downHandler(event);
        });
        this._stage.addEventListener(MouseEventName.MOUSE_MOVE, (event) => {
            this._moveHandler(event);
        });
        this._stage.addEventListener(MouseEventName.MOUSE_WHEEL, (event) => {
            this._wheelHandler(event);
        });
        this._stage.addEventListener(MouseEventName.DOM_MOUSE_SCROLL, (event) => {
            this._domMouseScrollHandler(event);
        });
        // touch
        if ('ontouchstart' in window) {
            this._stage.addEventListener(TouchEventName.TOUCH_START, (event) => {
                this._touchStartHandler(event);
            });
            this._stage.addEventListener(TouchEventName.TOUCH_MOVE, (event) => {
                this._touchMoveHandler(event);
            });
            document.addEventListener(TouchEventName.TOUCH_END, (event) => {
                this._touchEndHandler(event);
            });
        }
        if ('ongesturestart' in window || 'GestureEvent' in window) {
            this._stage.addEventListener(GestureEventName.GESTURE_START, (event) => {
                this._gestureStartHandler(event);
            });
            this._stage.addEventListener(GestureEventName.GESTURE_CHANGE, (event) => {
                this._gestureChangeHandler(event);
            });
            document.addEventListener(GestureEventName.GESTURE_END, (event) => {
                this._gestureEndHandler(event);
            });
        }
    }
    _keyHandler(event) {
        switch (event.keyCode) {
            case KeyCode.UP:
                this.radius -= this.radiusOffset;
                if (this.radius < this.radiusMin) {
                    this.radius = this.radiusMin;
                }
                break;
            case KeyCode.DOWN:
                this.radius += this.radiusOffset;
                break;
            default:
                break;
        }
    }
    _upHandler(event) {
        this.isMouseDown = false;
    }
    _downHandler(event) {
        this.isMouseDown = true;
        let rect = event.target.getBoundingClientRect();
        this._oldX = event.clientX - rect.left;
        this._oldY = event.clientY - rect.top;
    }
    _wheelHandler(event) {
        event.preventDefault();
        if (event.wheelDelta > 0) {
            this.radius -= this.radiusOffset;
            if (this.radius < this.radiusMin) {
                this.radius = this.radiusMin;
            }
        }
        else {
            this.radius += this.radiusOffset;
        }
    }
    _domMouseScrollHandler(event) {
        event.preventDefault();
        if (event.detail < 0) {
            this.radius -= this.radiusOffset;
            if (this.radius < this.radiusMin) {
                this.radius = this.radiusMin;
            }
        }
        else {
            this.radius += this.radiusOffset;
        }
    }
    _moveHandler(event) {
        if (this.isMouseDown) {
            let rect = event.target.getBoundingClientRect();
            let stageX = event.clientX - rect.left;
            let stageY = event.clientY - rect.top;
            this.inputXY(stageX, stageY);
        }
    }
    _touchStartHandler(event) {
        event.preventDefault();
        if (!this.isMouseDown) {
            let touches = event.changedTouches;
            let touch = touches[0];
            this.isMouseDown = true;
            this._identifier = touch.identifier;
            let target = touch.target;
            this._oldX = touch.pageX - target.offsetLeft;
            this._oldY = touch.pageY - target.offsetTop;
        }
    }
    _touchMoveHandler(event) {
        event.preventDefault();
        if (this._isGestureChange) {
            return;
        }
        let touches = event.changedTouches;
        let touchLength = touches.length;
        for (let i = 0; i < touchLength; i++) {
            let touch = touches[i];
            if (touch.identifier === this._identifier) {
                let target = touch.target;
                let stageX = touch.pageX - target.offsetLeft;
                let stageY = touch.pageY - target.offsetTop;
                this.inputXY(stageX, stageY);
                break;
            }
        }
    }
    _touchEndHandler(event) {
        if (this.isMouseDown) {
            event.preventDefault();
        }
        this.isMouseDown = false;
    }
    _gestureStartHandler(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        this._isGestureChange = true;
        this.isMouseDown = true;
        this._oldRadius = this.radius;
    }
    _gestureChangeHandler(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.radius = this._oldRadius + this.gestureRadiusFactor * this.radiusOffset * (1 - event.scale);
        if (this.radius < this.radiusMin) {
            this.radius = this.radiusMin;
        }
    }
    _gestureEndHandler(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        this._isGestureChange = false;
        this.isMouseDown = false;
        this._identifier = -1;
    }
    inputXY(newX, newY) {
        this._theta -= (newX - this._oldX) * 0.3;
        this._oldX = newX;
        this._phi -= (newY - this._oldY) * 0.3;
        this._oldY = newY;
        //
        if (this._phi < 20) {
            this._phi = 20;
        }
        else if (this._phi > 160) {
            this._phi = 160;
        }
    }
    _updateCamera() {
        let t = this._currentTheta * RoundCameraController_RoundCameraController.RAD;
        let p = this._currentPhi * RoundCameraController_RoundCameraController.RAD;
        let rsin = this.radius * Math.sin(p);
        this._camera.x = rsin * Math.sin(t) + this._target[0];
        this._camera.z = rsin * Math.cos(t) + this._target[2];
        this._camera.y = this.radius * Math.cos(p) + this._target[1];
        this._camera.lookAt(this._target);
    }
    upDate(factor = 0.1) {
        this._currentTheta += (this._theta - this._currentTheta) * factor;
        this._currentPhi += (this._phi - this._currentPhi) * factor;
        this._updateCamera();
    }
    rotate(dTheta, dPhi) {
        this._theta += dTheta;
        this._phi += dPhi;
    }
    set(theta, phi) {
        this._theta = theta;
        this._phi = phi;
    }
}
RoundCameraController_RoundCameraController.RAD = Math.PI / 180.0;

// CONCATENATED MODULE: ./src/webgpu/SceneObject.ts

class SceneObject_SceneObject {
    constructor() {
        this._mMatrix = mat4_namespaceObject.identity(mat4_namespaceObject.create());
        this._translateVec = vec3_namespaceObject.create();
        this._scaleVec = vec3_namespaceObject.create();
        this.x = 0.0;
        this.y = 0.0;
        this.z = 0.0;
        this.scaleX = 1.0;
        this.scaleY = 1.0;
        this.scaleZ = 1.0;
        this.rotationX = 0.0;
        this.rotationY = 0.0;
        this.rotationZ = 0.0;
    }
    set vertexUniform(value) {
        this._vertexUniform = value;
    }
    get vertexUniform() {
        return this._vertexUniform;
    }
    getModelMtx() {
        mat4_namespaceObject.identity(this._mMatrix);
        vec3_namespaceObject.set(this._translateVec, this.x, this.y, this.z);
        mat4_namespaceObject.translate(this._mMatrix, this._mMatrix, this._translateVec);
        mat4_namespaceObject.rotateZ(this._mMatrix, this._mMatrix, this.rotationZ);
        mat4_namespaceObject.rotateY(this._mMatrix, this._mMatrix, this.rotationY);
        mat4_namespaceObject.rotateX(this._mMatrix, this._mMatrix, this.rotationX);
        vec3_namespaceObject.set(this._scaleVec, this.scaleX, this.scaleY, this.scaleZ);
        mat4_namespaceObject.scale(this._mMatrix, this._mMatrix, this._scaleVec);
        return this._mMatrix;
    }
}

// CONCATENATED MODULE: ./src/webgpu/WebMetalTranslator.ts
class WebMetalTranslator {
    static get useWebMetal() {
        return WebMetalTranslator._useWebMetal;
    }
    static set useWebMetal(value) {
        WebMetalTranslator._useWebMetal = value;
    }
    static createWebGPURenderingContext(canvas) {
        return WebMetalTranslator.useWebMetal ? canvas.getContext('webmetal') : canvas.getContext('webgpu');
    }
    static createWebGPURenderPipelineDescriptor() {
        return WebMetalTranslator.useWebMetal ? new WebMetalRenderPipelineDescriptor() : new WebGPURenderPipelineDescriptor();
    }
    static createWebGPUDepthStencilDescriptor() {
        return WebMetalTranslator.useWebMetal ? new WebMetalDepthStencilDescriptor() : new WebGPUDepthStencilDescriptor();
    }
    static createWebGPURenderPassDescriptor() {
        return WebMetalTranslator.useWebMetal ? new WebMetalRenderPassDescriptor() : new WebGPURenderPassDescriptor();
    }
    static createWebGPUTextureDescriptor(pixelFormat, width, height, mipmapped) {
        return WebMetalTranslator.useWebMetal ? new WebMetalTextureDescriptor(pixelFormat, width, height, mipmapped) : new WebGPUTextureDescriptor(pixelFormat, width, height, mipmapped);
    }
}

// CONCATENATED MODULE: ./src/Main.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return Main_Main; });










class Main_Main {
    constructor() {
        console.log(new Date());
        this.init();
    }
    async init() {
        // Check whether WebGPU is enabled
        if ('WebMetalRenderingContext' in window) {
            WebMetalTranslator.useWebMetal = true;
        }
        else if ('WebGPURenderingContext' in window && 'WebGPULibrary' in window) {
            WebMetalTranslator.useWebMetal = false;
        }
        else {
            document.body.className = 'error';
            return;
        }
        // Stats setup
        this.stats = new Stats();
        document.body.appendChild(this.stats.dom);
        // GUI setup
        let gui = new dat.GUI({ autoPlace: true });
        let instanceFolder = gui.addFolder('Instance');
        instanceFolder.open();
        let panel = new GUIPanel();
        let instanceNumSlider = instanceFolder.add(panel, 'num', 1000, 6000).step(100);
        panel.setGUITitle(gui, 'num', 'Num');
        instanceNumSlider.onFinishChange((value) => {
            this.cubeNum = value;
            this.resetInstance();
        });
        let useModelCheck = instanceFolder.add(panel, 'useModel');
        panel.setGUITitle(gui, 'useModel', 'Model');
        useModelCheck.onFinishChange((value) => {
            this.useModel = value;
            this.resetInstance();
        });
        this.cubeNum = panel.num;
        this.useModel = panel.useModel;
        // Canvas setup
        this.canvas = document.getElementById(('myCanvas'));
        this.canvas.width = Main_Main.CANVAS_WIDTH;
        this.canvas.height = Main_Main.CANVAS_HEIGHT;
        // Create WebGPURenderingContext
        this.gpu = WebMetalTranslator.createWebGPURenderingContext(this.canvas);
        // Create WebGPUCommandQueue
        this.commandQueue = this.gpu.createCommandQueue();
        const isIPhone = /iP(hone|(o|a)d)/.test(navigator.userAgent);
        // Load metal shader file and create each WebGPUFunction to use for rendering and computing
        const shader = await fetch('shader/defaultShader.metal').then((response) => response.text());
        const library = this.gpu.createLibrary(shader);
        const vertexFunction = library.functionWithName('vertex_main');
        const vertexFunction2 = library.functionWithName('vertex_main2');
        const fragmentFunction = library.functionWithName('fragment_main');
        if (!library || !vertexFunction || !vertexFunction2 || !fragmentFunction) {
            return;
        }
        // Create pipelineState for render
        const cubeRenderPipelineDescriptor = WebMetalTranslator.createWebGPURenderPipelineDescriptor();
        cubeRenderPipelineDescriptor.vertexFunction = vertexFunction;
        cubeRenderPipelineDescriptor.fragmentFunction = fragmentFunction;
        cubeRenderPipelineDescriptor.colorAttachments[0].pixelFormat = 80 /* BGRA8Unorm */;
        cubeRenderPipelineDescriptor.depthAttachmentPixelFormat = 252 /* Depth32Float */;
        this.cubeRenderPipelineState = this.gpu.createRenderPipelineState(cubeRenderPipelineDescriptor);
        const lightHelperRenderPipelineDescriptor = WebMetalTranslator.createWebGPURenderPipelineDescriptor();
        lightHelperRenderPipelineDescriptor.vertexFunction = vertexFunction2;
        lightHelperRenderPipelineDescriptor.fragmentFunction = fragmentFunction;
        lightHelperRenderPipelineDescriptor.colorAttachments[0].pixelFormat = 80 /* BGRA8Unorm */;
        lightHelperRenderPipelineDescriptor.depthAttachmentPixelFormat = 252 /* Depth32Float */;
        this.lightHelperRenderPipelineState = this.gpu.createRenderPipelineState(lightHelperRenderPipelineDescriptor);
        // Create pipelineState for render depth
        const depthStencilDescriptor = WebMetalTranslator.createWebGPUDepthStencilDescriptor();
        depthStencilDescriptor.depthCompareFunction = "less" /* less */;
        depthStencilDescriptor.depthWriteEnabled = true;
        this.depthStencilState = this.gpu.createDepthStencilState(depthStencilDescriptor);
        // Create WebGPURenderPassDescriptor
        this.renderPassDescriptor = WebMetalTranslator.createWebGPURenderPassDescriptor();
        const colorAttachment0 = this.renderPassDescriptor.colorAttachments[0];
        colorAttachment0.storeAction = 1 /* store */;
        colorAttachment0.clearColor = [0.3, 0.6, 0.8, 1.0];
        // Create depth texture
        const depthTextureDescriptor = WebMetalTranslator.createWebGPUTextureDescriptor(252 /* Depth32Float */, Main_Main.CANVAS_WIDTH, Main_Main.CANVAS_HEIGHT, false);
        depthTextureDescriptor.textureType = 2 /* type2D */;
        depthTextureDescriptor.sampleCount = 1;
        depthTextureDescriptor.usage = 0 /* unknown */;
        depthTextureDescriptor.storageMode = 2 /* private */;
        const depthTexture = this.gpu.createTexture(depthTextureDescriptor);
        const depthAttachment = this.renderPassDescriptor.depthAttachment;
        depthAttachment.storeAction = 1 /* store */;
        depthAttachment.clearDepth = 1.0;
        depthAttachment.texture = depthTexture;
        // Initialize objects
        this.cube = new Cube_Cube();
        this.cube.createBuffer(this.gpu);
        this.cubeList = [];
        this.cubeUniformList = [];
        this.resetInstance();
        this.lightHelper = new SceneObject_SceneObject();
        this.lightHelper.rotationX = 45 * Main_Main.RAD;
        this.lightHelper.rotationZ = 45 * Main_Main.RAD;
        const vertexUniform = new VertexUniform_VertexUniform();
        vertexUniform.createBuffer(this.gpu);
        this.lightHelper.vertexUniform = vertexUniform;
        vertexUniform.baseColor = Main_Main.COLOR_DIRECTIONAL_LIGHT;
        this.model = new GLTF_GLTF();
        await this.model.loadModel('assets/Suzanne.gltf', true);
        // await this.model.loadModel('assets/Duck.gltf', true);
        this.model.createBuffer(this.gpu);
        // Initialize camera
        this.camera = new Camera_Camera(45 * Main_Main.RAD, Main_Main.CANVAS_WIDTH / Main_Main.CANVAS_HEIGHT, 0.1, 1000.0);
        this.cameraController = new RoundCameraController_RoundCameraController(this.camera, this.canvas);
        this.canvas.style.cursor = 'move';
        this.cameraController.radius = isIPhone ? 250 : 150;
        this.cameraController.radiusOffset = 2;
        this.cameraController.rotate(0, 0);
        // Initialize values
        this.time = 0;
        this.render();
    }
    resetInstance() {
        const length = this.cubeList.length;
        for (let i = 0; i < length; i++) {
            this.cubeUniformList.push(this.cubeList[i].vertexUniform);
            this.cubeList[i].vertexUniform = null;
            this.cubeList[i] = undefined;
        }
        let cubeScale;
        if (this.useModel) {
            cubeScale = 4.0;
        }
        else {
            cubeScale = 2.0;
        }
        const cubeRange = 100;
        const pi2 = Math.PI * 2;
        this.cubeList = [];
        for (let i = 0; i < this.cubeNum; i++) {
            const obj = new SceneObject_SceneObject();
            obj.scaleX = obj.scaleY = obj.scaleZ = cubeScale;
            obj.x = (Math.random() - 0.5) * cubeRange;
            obj.y = (Math.random() - 0.5) * cubeRange;
            obj.z = (Math.random() - 0.5) * cubeRange;
            obj.rotationX = Math.random() * pi2;
            obj.rotationZ = Math.random() * pi2;
            let vertexUniform;
            if (this.cubeUniformList.length) {
                vertexUniform = this.cubeUniformList.shift();
            }
            else {
                vertexUniform = new VertexUniform_VertexUniform();
                vertexUniform.createBuffer(this.gpu);
            }
            obj.vertexUniform = vertexUniform;
            // const color:RGB = RGB.createFromHSV(360 * Math.random(), 0.8, 0.9);
            const color = RGB.createFromHSV(Math.atan2(obj.z, obj.x) / Main_Main.RAD, 0.8 * Math.sqrt(obj.x * obj.x + obj.z * obj.z) / (cubeRange / 2), 0.9);
            vertexUniform.baseColor = new Float32Array([color.r, color.g, color.b, 1.0]);
            vertexUniform.ambientLightColor = Main_Main.COLOR_AMBIENT_LIGHT;
            vertexUniform.directionalLightColor = Main_Main.COLOR_DIRECTIONAL_LIGHT;
            this.cubeList.push(obj);
        }
    }
    render() {
        this.stats.begin();
        // Update objects
        const rad = this.time / 100;
        const lightDirection = new Float32Array([Math.cos(rad), 0.4, Math.sin(rad)]);
        this.lightHelper.x = lightDirection[0] * 80;
        this.lightHelper.y = lightDirection[1] * 80;
        this.lightHelper.z = lightDirection[2] * 80;
        const cubeLength = this.cubeList.length;
        for (let i = 0; i < cubeLength; i++) {
            const obj = this.cubeList[i];
            if (((this.time + i * 7) / 50 << 0) % 10 === 0) {
                obj.rotationY += 0.2;
            }
            else {
                obj.rotationX += 0.01;
            }
        }
        this.time += 1;
        // Update camera
        this.cameraController.upDate(0.1);
        const cameraMatrix = this.camera.getCameraMtx();
        // Prepare command
        const commandBuffer = this.commandQueue.createCommandBuffer();
        const drawable = this.gpu.nextDrawable();
        this.renderPassDescriptor.colorAttachments[0].texture = drawable.texture;
        // Render cube
        this.renderPassDescriptor.colorAttachments[0].loadAction = 2 /* clear */;
        this.renderPassDescriptor.depthAttachment.loadAction = 2 /* clear */;
        const cubeRenderCommandEncoder = commandBuffer.createRenderCommandEncoderWithDescriptor(this.renderPassDescriptor);
        cubeRenderCommandEncoder.setRenderPipelineState(this.cubeRenderPipelineState);
        cubeRenderCommandEncoder.setDepthStencilState(this.depthStencilState);
        let geometry;
        if (this.useModel) {
            geometry = this.model;
        }
        else {
            geometry = this.cube;
        }
        cubeRenderCommandEncoder.setVertexBuffer(geometry.vertexBuffer, 0, 0);
        for (let i = 0; i < cubeLength; i++) {
            const obj = this.cubeList[i];
            const objMMatrix = obj.getModelMtx();
            const objectMVPMatrix = mat4_namespaceObject.create();
            mat4_namespaceObject.multiply(objectMVPMatrix, cameraMatrix, objMMatrix);
            const vertexUniform = obj.vertexUniform;
            vertexUniform.mvpMatrix = objectMVPMatrix;
            vertexUniform.modelMatrix = objMMatrix;
            vertexUniform.directionalLightDirection = lightDirection;
            cubeRenderCommandEncoder.setVertexBuffer(obj.vertexUniform.buffer, 0, 1);
            cubeRenderCommandEncoder.drawPrimitives(3 /* triangle */, 0, geometry.numVertices);
        }
        cubeRenderCommandEncoder.endEncoding();
        // Render light helper
        this.renderPassDescriptor.colorAttachments[0].loadAction = 1 /* load */;
        this.renderPassDescriptor.depthAttachment.loadAction = 1 /* load */;
        const lightHelperRenderCommandEncoder = commandBuffer.createRenderCommandEncoderWithDescriptor(this.renderPassDescriptor);
        lightHelperRenderCommandEncoder.setRenderPipelineState(this.lightHelperRenderPipelineState);
        lightHelperRenderCommandEncoder.setDepthStencilState(this.depthStencilState);
        lightHelperRenderCommandEncoder.setVertexBuffer(this.cube.vertexBuffer, 0, 0);
        const lightMMatrix = this.lightHelper.getModelMtx();
        const lightMVPMatrix = mat4_namespaceObject.create();
        mat4_namespaceObject.multiply(lightMVPMatrix, cameraMatrix, lightMMatrix);
        const vertexUniform = this.lightHelper.vertexUniform;
        vertexUniform.mvpMatrix = lightMVPMatrix;
        lightHelperRenderCommandEncoder.setVertexBuffer(this.lightHelper.vertexUniform.buffer, 0, 1);
        lightHelperRenderCommandEncoder.drawPrimitives(2 /* linestrip */, 0, this.cube.numVertices);
        lightHelperRenderCommandEncoder.endEncoding();
        // Commit command
        commandBuffer.presentDrawable(drawable);
        commandBuffer.commit();
        this.stats.end();
        requestAnimationFrame(() => this.render());
    }
}
Main_Main.RAD = Math.PI / 180;
Main_Main.CANVAS_WIDTH = innerWidth * devicePixelRatio;
Main_Main.CANVAS_HEIGHT = innerHeight * devicePixelRatio;
Main_Main.COLOR_AMBIENT_LIGHT = new Float32Array([0.2, 0.2, 0.2, 1.0]);
Main_Main.COLOR_DIRECTIONAL_LIGHT = new Float32Array([0.8, 0.8, 0.8, 1.0]);
window.addEventListener('DOMContentLoaded', () => {
    new Main_Main();
});


/***/ })

/******/ });