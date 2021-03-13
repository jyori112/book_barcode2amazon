/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@zxing/browser/umd/zxing-browser.js":
/*!**********************************************************!*\
  !*** ./node_modules/@zxing/browser/umd/zxing-browser.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

(function(global,factory){ true?factory(exports):0;})(this,function(exports){'use strict';function fixProto(target,prototype){var setPrototypeOf=Object.setPrototypeOf;setPrototypeOf?setPrototypeOf(target,prototype):target.__proto__=prototype;}function fixStack(target,fn){if(fn===void 0){fn=target.constructor;}var captureStackTrace=Error.captureStackTrace;captureStackTrace&&captureStackTrace(target,fn);}var __extends=function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b){if(b.hasOwnProperty(p)){d[p]=b[p];}}};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var CustomError=function(_super){__extends(CustomError,_super);function CustomError(message){var _newTarget=this.constructor;var _this=_super.call(this,message)||this;Object.defineProperty(_this,'name',{value:_newTarget.name,enumerable:false,configurable:true});fixProto(_this,_newTarget.prototype);fixStack(_this);return _this;}return CustomError;}(Error);var __extends$1=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * Custom Error class of type Exception.
   */var Exception=/** @class */function(_super){__extends$1(Exception,_super);/**
       * Allows Exception to be constructed directly
       * with some message and prototype definition.
       */function Exception(message){if(message===void 0){message=undefined;}var _this=_super.call(this,message)||this;_this.message=message;return _this;}Exception.prototype.getKind=function(){var ex=this.constructor;return ex.kind;};/**
       * It's typed as string so it can be extended and overriden.
       */Exception.kind='Exception';return Exception;}(CustomError);var __extends$2=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * Custom Error class of type Exception.
   */var ArgumentException=/** @class */function(_super){__extends$2(ArgumentException,_super);function ArgumentException(){return _super!==null&&_super.apply(this,arguments)||this;}ArgumentException.kind='ArgumentException';return ArgumentException;}(Exception);var __extends$3=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * Custom Error class of type Exception.
   */var IllegalArgumentException=/** @class */function(_super){__extends$3(IllegalArgumentException,_super);function IllegalArgumentException(){return _super!==null&&_super.apply(this,arguments)||this;}IllegalArgumentException.kind='IllegalArgumentException';return IllegalArgumentException;}(Exception);/*
   * Copyright 2009 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var BinaryBitmap=/** @class */function(){function BinaryBitmap(binarizer){this.binarizer=binarizer;if(binarizer===null){throw new IllegalArgumentException('Binarizer must be non-null.');}}/**
       * @return The width of the bitmap.
       */BinaryBitmap.prototype.getWidth=function(){return this.binarizer.getWidth();};/**
       * @return The height of the bitmap.
       */BinaryBitmap.prototype.getHeight=function(){return this.binarizer.getHeight();};/**
       * Converts one row of luminance data to 1 bit data. May actually do the conversion, or return
       * cached data. Callers should assume this method is expensive and call it as seldom as possible.
       * This method is intended for decoding 1D barcodes and may choose to apply sharpening.
       *
       * @param y The row to fetch, which must be in [0, bitmap height)
       * @param row An optional preallocated array. If null or too small, it will be ignored.
       *            If used, the Binarizer will call BitArray.clear(). Always use the returned object.
       * @return The array of bits for this row (true means black).
       * @throws NotFoundException if row can't be binarized
       */BinaryBitmap.prototype.getBlackRow=function(y/*int*/,row){return this.binarizer.getBlackRow(y,row);};/**
       * Converts a 2D array of luminance data to 1 bit. As above, assume this method is expensive
       * and do not call it repeatedly. This method is intended for decoding 2D barcodes and may or
       * may not apply sharpening. Therefore, a row from this matrix may not be identical to one
       * fetched using getBlackRow(), so don't mix and match between them.
       *
       * @return The 2D array of bits for the image (true means black).
       * @throws NotFoundException if image can't be binarized to make a matrix
       */BinaryBitmap.prototype.getBlackMatrix=function(){// The matrix is created on demand the first time it is requested, then cached. There are two
// reasons for this:
// 1. This work will never be done if the caller only installs 1D Reader objects, or if a
//    1D Reader finds a barcode before the 2D Readers run.
// 2. This work will only be done once even if the caller installs multiple 2D Readers.
if(this.matrix===null||this.matrix===undefined){this.matrix=this.binarizer.getBlackMatrix();}return this.matrix;};/**
       * @return Whether this bitmap can be cropped.
       */BinaryBitmap.prototype.isCropSupported=function(){return this.binarizer.getLuminanceSource().isCropSupported();};/**
       * Returns a new object with cropped image data. Implementations may keep a reference to the
       * original data rather than a copy. Only callable if isCropSupported() is true.
       *
       * @param left The left coordinate, which must be in [0,getWidth())
       * @param top The top coordinate, which must be in [0,getHeight())
       * @param width The width of the rectangle to crop.
       * @param height The height of the rectangle to crop.
       * @return A cropped version of this object.
       */BinaryBitmap.prototype.crop=function(left/*int*/,top/*int*/,width/*int*/,height/*int*/){var newSource=this.binarizer.getLuminanceSource().crop(left,top,width,height);return new BinaryBitmap(this.binarizer.createBinarizer(newSource));};/**
       * @return Whether this bitmap supports counter-clockwise rotation.
       */BinaryBitmap.prototype.isRotateSupported=function(){return this.binarizer.getLuminanceSource().isRotateSupported();};/**
       * Returns a new object with rotated image data by 90 degrees counterclockwise.
       * Only callable if {@link #isRotateSupported()} is true.
       *
       * @return A rotated version of this object.
       */BinaryBitmap.prototype.rotateCounterClockwise=function(){var newSource=this.binarizer.getLuminanceSource().rotateCounterClockwise();return new BinaryBitmap(this.binarizer.createBinarizer(newSource));};/**
       * Returns a new object with rotated image data by 45 degrees counterclockwise.
       * Only callable if {@link #isRotateSupported()} is true.
       *
       * @return A rotated version of this object.
       */BinaryBitmap.prototype.rotateCounterClockwise45=function(){var newSource=this.binarizer.getLuminanceSource().rotateCounterClockwise45();return new BinaryBitmap(this.binarizer.createBinarizer(newSource));};/*@Override*/BinaryBitmap.prototype.toString=function(){try{return this.getBlackMatrix().toString();}catch(e/*: NotFoundException*/){return'';}};return BinaryBitmap;}();var __extends$4=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * Custom Error class of type Exception.
   */var ChecksumException=/** @class */function(_super){__extends$4(ChecksumException,_super);function ChecksumException(){return _super!==null&&_super.apply(this,arguments)||this;}ChecksumException.getChecksumInstance=function(){return new ChecksumException();};ChecksumException.kind='ChecksumException';return ChecksumException;}(Exception);/*
   * Copyright 2009 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /**
   * This class hierarchy provides a set of methods to convert luminance data to 1 bit data.
   * It allows the algorithm to vary polymorphically, for example allowing a very expensive
   * thresholding technique for servers and a fast one for mobile. It also permits the implementation
   * to vary, e.g. a JNI version for Android and a Java fallback version for other platforms.
   *
   * @author dswitkin@google.com (Daniel Switkin)
   */var Binarizer=/** @class */function(){function Binarizer(source){this.source=source;}Binarizer.prototype.getLuminanceSource=function(){return this.source;};Binarizer.prototype.getWidth=function(){return this.source.getWidth();};Binarizer.prototype.getHeight=function(){return this.source.getHeight();};return Binarizer;}();var System=/** @class */function(){function System(){}// public static void arraycopy(Object src, int srcPos, Object dest, int destPos, int length)
/**
       * Makes a copy of a array.
       */System.arraycopy=function(src,srcPos,dest,destPos,length){// TODO: better use split or set?
while(length--){dest[destPos++]=src[srcPos++];}};/**
       * Returns the current time in milliseconds.
       */System.currentTimeMillis=function(){return Date.now();};return System;}();var __extends$5=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * Custom Error class of type Exception.
   */var IndexOutOfBoundsException=/** @class */function(_super){__extends$5(IndexOutOfBoundsException,_super);function IndexOutOfBoundsException(){return _super!==null&&_super.apply(this,arguments)||this;}IndexOutOfBoundsException.kind='IndexOutOfBoundsException';return IndexOutOfBoundsException;}(Exception);var __extends$6=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * Custom Error class of type Exception.
   */var ArrayIndexOutOfBoundsException=/** @class */function(_super){__extends$6(ArrayIndexOutOfBoundsException,_super);function ArrayIndexOutOfBoundsException(index,message){if(index===void 0){index=undefined;}if(message===void 0){message=undefined;}var _this=_super.call(this,message)||this;_this.index=index;_this.message=message;return _this;}ArrayIndexOutOfBoundsException.kind='ArrayIndexOutOfBoundsException';return ArrayIndexOutOfBoundsException;}(IndexOutOfBoundsException);var __values=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};var Arrays=/** @class */function(){function Arrays(){}/**
       * Assigns the specified int value to each element of the specified array
       * of ints.
       *
       * @param a the array to be filled
       * @param val the value to be stored in all elements of the array
       */Arrays.fill=function(a,val){for(var i=0,len=a.length;i<len;i++)a[i]=val;};/**
       * Assigns the specified int value to each element of the specified
       * range of the specified array of ints.  The range to be filled
       * extends from index {@code fromIndex}, inclusive, to index
       * {@code toIndex}, exclusive.  (If {@code fromIndex==toIndex}, the
       * range to be filled is empty.)
       *
       * @param a the array to be filled
       * @param fromIndex the index of the first element (inclusive) to be
       *        filled with the specified value
       * @param toIndex the index of the last element (exclusive) to be
       *        filled with the specified value
       * @param val the value to be stored in all elements of the array
       * @throws IllegalArgumentException if {@code fromIndex > toIndex}
       * @throws ArrayIndexOutOfBoundsException if {@code fromIndex < 0} or
       *         {@code toIndex > a.length}
       */Arrays.fillWithin=function(a,fromIndex,toIndex,val){Arrays.rangeCheck(a.length,fromIndex,toIndex);for(var i=fromIndex;i<toIndex;i++)a[i]=val;};/**
       * Checks that {@code fromIndex} and {@code toIndex} are in
       * the range and throws an exception if they aren't.
       */Arrays.rangeCheck=function(arrayLength,fromIndex,toIndex){if(fromIndex>toIndex){throw new IllegalArgumentException('fromIndex('+fromIndex+') > toIndex('+toIndex+')');}if(fromIndex<0){throw new ArrayIndexOutOfBoundsException(fromIndex);}if(toIndex>arrayLength){throw new ArrayIndexOutOfBoundsException(toIndex);}};Arrays.asList=function(){var args=[];for(var _i=0;_i<arguments.length;_i++){args[_i]=arguments[_i];}return args;};Arrays.create=function(rows,cols,value){var arr=Array.from({length:rows});return arr.map(function(x){return Array.from({length:cols}).fill(value);});};Arrays.createInt32Array=function(rows,cols,value){var arr=Array.from({length:rows});return arr.map(function(x){return Int32Array.from({length:cols}).fill(value);});};Arrays.equals=function(first,second){if(!first){return false;}if(!second){return false;}if(!first.length){return false;}if(!second.length){return false;}if(first.length!==second.length){return false;}for(var i=0,length_1=first.length;i<length_1;i++){if(first[i]!==second[i]){return false;}}return true;};Arrays.hashCode=function(a){var e_1,_a;if(a===null){return 0;}var result=1;try{for(var a_1=__values(a),a_1_1=a_1.next();!a_1_1.done;a_1_1=a_1.next()){var element=a_1_1.value;result=31*result+element;}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(a_1_1&&!a_1_1.done&&(_a=a_1.return))_a.call(a_1);}finally{if(e_1)throw e_1.error;}}return result;};Arrays.fillUint8Array=function(a,value){for(var i=0;i!==a.length;i++){a[i]=value;}};Arrays.copyOf=function(original,newLength){return original.slice(0,newLength);};Arrays.copyOfUint8Array=function(original,newLength){if(original.length<=newLength){var newArray=new Uint8Array(newLength);newArray.set(original);return newArray;}return original.slice(0,newLength);};Arrays.copyOfRange=function(original,from,to){var newLength=to-from;var copy=new Int32Array(newLength);System.arraycopy(original,from,copy,0,newLength);return copy;};/*
      * Returns the index of of the element in a sorted array or (-n-1) where n is the insertion point
      * for the new element.
      * Parameters:
      *     ar - A sorted array
      *     el - An element to search for
      *     comparator - A comparator function. The function takes two arguments: (a, b) and returns:
      *        a negative number  if a is less than b;
      *        0 if a is equal to b;
      *        a positive number of a is greater than b.
      * The array may contain duplicate elements. If there are more than one equal elements in the array,
      * the returned value can be the index of any one of the equal elements.
      *
      * http://jsfiddle.net/aryzhov/pkfst550/
      */Arrays.binarySearch=function(ar,el,comparator){if(undefined===comparator){comparator=Arrays.numberComparator;}var m=0;var n=ar.length-1;while(m<=n){var k=n+m>>1;var cmp=comparator(el,ar[k]);if(cmp>0){m=k+1;}else if(cmp<0){n=k-1;}else{return k;}}return-m-1;};Arrays.numberComparator=function(a,b){return a-b;};return Arrays;}();/**
   * Ponyfill for Java's Integer class.
   */var Integer=/** @class */function(){function Integer(){}Integer.numberOfTrailingZeros=function(i){var y;if(i===0)return 32;var n=31;y=i<<16;if(y!==0){n-=16;i=y;}y=i<<8;if(y!==0){n-=8;i=y;}y=i<<4;if(y!==0){n-=4;i=y;}y=i<<2;if(y!==0){n-=2;i=y;}return n-(i<<1>>>31);};Integer.numberOfLeadingZeros=function(i){// HD, Figure 5-6
if(i===0){return 32;}var n=1;if(i>>>16===0){n+=16;i<<=16;}if(i>>>24===0){n+=8;i<<=8;}if(i>>>28===0){n+=4;i<<=4;}if(i>>>30===0){n+=2;i<<=2;}n-=i>>>31;return n;};Integer.toHexString=function(i){return i.toString(16);};Integer.toBinaryString=function(intNumber){return String(parseInt(String(intNumber),2));};// Returns the number of one-bits in the two's complement binary representation of the specified int value. This function is sometimes referred to as the population count.
// Returns:
// the number of one-bits in the two's complement binary representation of the specified int value.
Integer.bitCount=function(i){// HD, Figure 5-2
i=i-(i>>>1&0x55555555);i=(i&0x33333333)+(i>>>2&0x33333333);i=i+(i>>>4)&0x0f0f0f0f;i=i+(i>>>8);i=i+(i>>>16);return i&0x3f;};Integer.truncDivision=function(dividend,divisor){return Math.trunc(dividend/divisor);};/**
       * Converts A string to an integer.
       * @param s A string to convert into a number.
       * @param radix A value between 2 and 36 that specifies the base of the number in numString. If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal. All other strings are considered decimal.
       */Integer.parseInt=function(num,radix){if(radix===void 0){radix=undefined;}return parseInt(num,radix);};Integer.MIN_VALUE_32_BITS=-2147483648;Integer.MAX_VALUE=Number.MAX_SAFE_INTEGER;return Integer;}();/*
   * Copyright 2007 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /**
   * <p>A simple, fast array of bits, represented compactly by an array of ints internally.</p>
   *
   * @author Sean Owen
   */var BitArray/*implements Cloneable*/=/** @class */function(){// public constructor() {
//   this.size = 0
//   this.bits = new Int32Array(1)
// }
// public constructor(size?: number /*int*/) {
//   if (undefined === size) {
//     this.size = 0
//   } else {
//     this.size = size
//   }
//   this.bits = this.makeArray(size)
// }
// For testing only
function BitArray(size/*int*/,bits){if(undefined===size){this.size=0;this.bits=new Int32Array(1);}else{this.size=size;if(undefined===bits||null===bits){this.bits=BitArray.makeArray(size);}else{this.bits=bits;}}}BitArray.prototype.getSize=function(){return this.size;};BitArray.prototype.getSizeInBytes=function(){return Math.floor((this.size+7)/8);};BitArray.prototype.ensureCapacity=function(size/*int*/){if(size>this.bits.length*32){var newBits=BitArray.makeArray(size);System.arraycopy(this.bits,0,newBits,0,this.bits.length);this.bits=newBits;}};/**
       * @param i bit to get
       * @return true iff bit i is set
       */BitArray.prototype.get=function(i/*int*/){return(this.bits[Math.floor(i/32)]&1<<(i&0x1F))!==0;};/**
       * Sets bit i.
       *
       * @param i bit to set
       */BitArray.prototype.set=function(i/*int*/){this.bits[Math.floor(i/32)]|=1<<(i&0x1F);};/**
       * Flips bit i.
       *
       * @param i bit to set
       */BitArray.prototype.flip=function(i/*int*/){this.bits[Math.floor(i/32)]^=1<<(i&0x1F);};/**
       * @param from first bit to check
       * @return index of first bit that is set, starting from the given index, or size if none are set
       *  at or beyond this given index
       * @see #getNextUnset(int)
       */BitArray.prototype.getNextSet=function(from/*int*/){var size=this.size;if(from>=size){return size;}var bits=this.bits;var bitsOffset=Math.floor(from/32);var currentBits=bits[bitsOffset];// mask off lesser bits first
currentBits&=~((1<<(from&0x1F))-1);var length=bits.length;while(currentBits===0){if(++bitsOffset===length){return size;}currentBits=bits[bitsOffset];}var result=bitsOffset*32+Integer.numberOfTrailingZeros(currentBits);return result>size?size:result;};/**
       * @param from index to start looking for unset bit
       * @return index of next unset bit, or {@code size} if none are unset until the end
       * @see #getNextSet(int)
       */BitArray.prototype.getNextUnset=function(from/*int*/){var size=this.size;if(from>=size){return size;}var bits=this.bits;var bitsOffset=Math.floor(from/32);var currentBits=~bits[bitsOffset];// mask off lesser bits first
currentBits&=~((1<<(from&0x1F))-1);var length=bits.length;while(currentBits===0){if(++bitsOffset===length){return size;}currentBits=~bits[bitsOffset];}var result=bitsOffset*32+Integer.numberOfTrailingZeros(currentBits);return result>size?size:result;};/**
       * Sets a block of 32 bits, starting at bit i.
       *
       * @param i first bit to set
       * @param newBits the new value of the next 32 bits. Note again that the least-significant bit
       * corresponds to bit i, the next-least-significant to i+1, and so on.
       */BitArray.prototype.setBulk=function(i/*int*/,newBits/*int*/){this.bits[Math.floor(i/32)]=newBits;};/**
       * Sets a range of bits.
       *
       * @param start start of range, inclusive.
       * @param end end of range, exclusive
       */BitArray.prototype.setRange=function(start/*int*/,end/*int*/){if(end<start||start<0||end>this.size){throw new IllegalArgumentException();}if(end===start){return;}end--;// will be easier to treat this as the last actually set bit -- inclusive
var firstInt=Math.floor(start/32);var lastInt=Math.floor(end/32);var bits=this.bits;for(var i=firstInt;i<=lastInt;i++){var firstBit=i>firstInt?0:start&0x1F;var lastBit=i<lastInt?31:end&0x1F;// Ones from firstBit to lastBit, inclusive
var mask=(2<<lastBit)-(1<<firstBit);bits[i]|=mask;}};/**
       * Clears all bits (sets to false).
       */BitArray.prototype.clear=function(){var max=this.bits.length;var bits=this.bits;for(var i=0;i<max;i++){bits[i]=0;}};/**
       * Efficient method to check if a range of bits is set, or not set.
       *
       * @param start start of range, inclusive.
       * @param end end of range, exclusive
       * @param value if true, checks that bits in range are set, otherwise checks that they are not set
       * @return true iff all bits are set or not set in range, according to value argument
       * @throws IllegalArgumentException if end is less than start or the range is not contained in the array
       */BitArray.prototype.isRange=function(start/*int*/,end/*int*/,value){if(end<start||start<0||end>this.size){throw new IllegalArgumentException();}if(end===start){return true;// empty range matches
}end--;// will be easier to treat this as the last actually set bit -- inclusive
var firstInt=Math.floor(start/32);var lastInt=Math.floor(end/32);var bits=this.bits;for(var i=firstInt;i<=lastInt;i++){var firstBit=i>firstInt?0:start&0x1F;var lastBit=i<lastInt?31:end&0x1F;// Ones from firstBit to lastBit, inclusive
var mask=(2<<lastBit)-(1<<firstBit)&0xFFFFFFFF;// TYPESCRIPTPORT: & 0xFFFFFFFF added to discard anything after 32 bits, as ES has 53 bits
// Return false if we're looking for 1s and the masked bits[i] isn't all 1s (is: that,
// equals the mask, or we're looking for 0s and the masked portion is not all 0s
if((bits[i]&mask)!==(value?mask:0)){return false;}}return true;};BitArray.prototype.appendBit=function(bit){this.ensureCapacity(this.size+1);if(bit){this.bits[Math.floor(this.size/32)]|=1<<(this.size&0x1F);}this.size++;};/**
       * Appends the least-significant bits, from value, in order from most-significant to
       * least-significant. For example, appending 6 bits from 0x000001E will append the bits
       * 0, 1, 1, 1, 1, 0 in that order.
       *
       * @param value {@code int} containing bits to append
       * @param numBits bits from value to append
       */BitArray.prototype.appendBits=function(value/*int*/,numBits/*int*/){if(numBits<0||numBits>32){throw new IllegalArgumentException('Num bits must be between 0 and 32');}this.ensureCapacity(this.size+numBits);// const appendBit = this.appendBit;
for(var numBitsLeft=numBits;numBitsLeft>0;numBitsLeft--){this.appendBit((value>>numBitsLeft-1&0x01)===1);}};BitArray.prototype.appendBitArray=function(other){var otherSize=other.size;this.ensureCapacity(this.size+otherSize);// const appendBit = this.appendBit;
for(var i=0;i<otherSize;i++){this.appendBit(other.get(i));}};BitArray.prototype.xor=function(other){if(this.size!==other.size){throw new IllegalArgumentException('Sizes don\'t match');}var bits=this.bits;for(var i=0,length_1=bits.length;i<length_1;i++){// The last int could be incomplete (i.e. not have 32 bits in
// it) but there is no problem since 0 XOR 0 == 0.
bits[i]^=other.bits[i];}};/**
       *
       * @param bitOffset first bit to start writing
       * @param array array to write into. Bytes are written most-significant byte first. This is the opposite
       *  of the internal representation, which is exposed by {@link #getBitArray()}
       * @param offset position in array to start writing
       * @param numBytes how many bytes to write
       */BitArray.prototype.toBytes=function(bitOffset/*int*/,array,offset/*int*/,numBytes/*int*/){for(var i=0;i<numBytes;i++){var theByte=0;for(var j=0;j<8;j++){if(this.get(bitOffset)){theByte|=1<<7-j;}bitOffset++;}array[offset+i]=/*(byte)*/theByte;}};/**
       * @return underlying array of ints. The first element holds the first 32 bits, and the least
       *         significant bit is bit 0.
       */BitArray.prototype.getBitArray=function(){return this.bits;};/**
       * Reverses all bits in the array.
       */BitArray.prototype.reverse=function(){var newBits=new Int32Array(this.bits.length);// reverse all int's first
var len=Math.floor((this.size-1)/32);var oldBitsLen=len+1;var bits=this.bits;for(var i=0;i<oldBitsLen;i++){var x=bits[i];x=x>>1&0x55555555|(x&0x55555555)<<1;x=x>>2&0x33333333|(x&0x33333333)<<2;x=x>>4&0x0f0f0f0f|(x&0x0f0f0f0f)<<4;x=x>>8&0x00ff00ff|(x&0x00ff00ff)<<8;x=x>>16&0x0000ffff|(x&0x0000ffff)<<16;newBits[len-i]=/*(int)*/x;}// now correct the int's if the bit size isn't a multiple of 32
if(this.size!==oldBitsLen*32){var leftOffset=oldBitsLen*32-this.size;var currentInt=newBits[0]>>>leftOffset;for(var i=1;i<oldBitsLen;i++){var nextInt=newBits[i];currentInt|=nextInt<<32-leftOffset;newBits[i-1]=currentInt;currentInt=nextInt>>>leftOffset;}newBits[oldBitsLen-1]=currentInt;}this.bits=newBits;};BitArray.makeArray=function(size/*int*/){return new Int32Array(Math.floor((size+31)/32));};/*@Override*/BitArray.prototype.equals=function(o){if(!(o instanceof BitArray)){return false;}var other=o;return this.size===other.size&&Arrays.equals(this.bits,other.bits);};/*@Override*/BitArray.prototype.hashCode=function(){return 31*this.size+Arrays.hashCode(this.bits);};/*@Override*/BitArray.prototype.toString=function(){var result='';for(var i=0,size=this.size;i<size;i++){if((i&0x07)===0){result+=' ';}result+=this.get(i)?'X':'.';}return result;};/*@Override*/BitArray.prototype.clone=function(){return new BitArray(this.size,this.bits.slice());};return BitArray;}();/*
   * Copyright 2009 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /*namespace com.google.zxing {*/ /**
   * Encapsulates a type of hint that a caller may pass to a barcode reader to help it
   * more quickly or accurately decode it. It is up to implementations to decide what,
   * if anything, to do with the information that is supplied.
   *
   * @author Sean Owen
   * @author dswitkin@google.com (Daniel Switkin)
   * @see Reader#decode(BinaryBitmap,java.util.Map)
   */var DecodeHintType;(function(DecodeHintType){/**
       * Unspecified, application-specific hint. Maps to an unspecified {@link Object}.
       */DecodeHintType[DecodeHintType["OTHER"]=0]="OTHER";/*(Object.class)*/ /**
       * Image is a pure monochrome image of a barcode. Doesn't matter what it maps to;
       * use {@link Boolean#TRUE}.
       */DecodeHintType[DecodeHintType["PURE_BARCODE"]=1]="PURE_BARCODE";/*(Void.class)*/ /**
       * Image is known to be of one of a few possible formats.
       * Maps to a {@link List} of {@link BarcodeFormat}s.
       */DecodeHintType[DecodeHintType["POSSIBLE_FORMATS"]=2]="POSSIBLE_FORMATS";/*(List.class)*/ /**
       * Spend more time to try to find a barcode; optimize for accuracy, not speed.
       * Doesn't matter what it maps to; use {@link Boolean#TRUE}.
       */DecodeHintType[DecodeHintType["TRY_HARDER"]=3]="TRY_HARDER";/*(Void.class)*/ /**
       * Specifies what character encoding to use when decoding, where applicable (type String)
       */DecodeHintType[DecodeHintType["CHARACTER_SET"]=4]="CHARACTER_SET";/*(String.class)*/ /**
       * Allowed lengths of encoded data -- reject anything else. Maps to an {@code Int32Array}.
       */DecodeHintType[DecodeHintType["ALLOWED_LENGTHS"]=5]="ALLOWED_LENGTHS";/*(Int32Array.class)*/ /**
       * Assume Code 39 codes employ a check digit. Doesn't matter what it maps to;
       * use {@link Boolean#TRUE}.
       */DecodeHintType[DecodeHintType["ASSUME_CODE_39_CHECK_DIGIT"]=6]="ASSUME_CODE_39_CHECK_DIGIT";/*(Void.class)*/ /**
       * Assume the barcode is being processed as a GS1 barcode, and modify behavior as needed.
       * For example this affects FNC1 handling for Code 128 (aka GS1-128). Doesn't matter what it maps to;
       * use {@link Boolean#TRUE}.
       */DecodeHintType[DecodeHintType["ASSUME_GS1"]=7]="ASSUME_GS1";/*(Void.class)*/ /**
       * If true, return the start and end digits in a Codabar barcode instead of stripping them. They
       * are alpha, whereas the rest are numeric. By default, they are stripped, but this causes them
       * to not be. Doesn't matter what it maps to; use {@link Boolean#TRUE}.
       */DecodeHintType[DecodeHintType["RETURN_CODABAR_START_END"]=8]="RETURN_CODABAR_START_END";/*(Void.class)*/ /**
       * The caller needs to be notified via callback when a possible {@link ResultPoint}
       * is found. Maps to a {@link ResultPointCallback}.
       */DecodeHintType[DecodeHintType["NEED_RESULT_POINT_CALLBACK"]=9]="NEED_RESULT_POINT_CALLBACK";/*(ResultPointCallback.class)*/ /**
       * Allowed extension lengths for EAN or UPC barcodes. Other formats will ignore this.
       * Maps to an {@code Int32Array} of the allowed extension lengths, for example [2], [5], or [2, 5].
       * If it is optional to have an extension, do not set this hint. If this is set,
       * and a UPC or EAN barcode is found but an extension is not, then no result will be returned
       * at all.
       */DecodeHintType[DecodeHintType["ALLOWED_EAN_EXTENSIONS"]=10]="ALLOWED_EAN_EXTENSIONS";/*(Int32Array.class)*/ // End of enumeration values.
/**
       * Data type the hint is expecting.
       * Among the possible values the {@link Void} stands out as being used for
       * hints that do not expect a value to be supplied (flag hints). Such hints
       * will possibly have their value ignored, or replaced by a
       * {@link Boolean#TRUE}. Hint suppliers should probably use
       * {@link Boolean#TRUE} as directed by the actual hint documentation.
       */ // private valueType: Class<?>
// DecodeHintType(valueType: Class<?>) {
//   this.valueType = valueType
// }
// public getValueType(): Class<?> {
//   return valueType
// }
})(DecodeHintType||(DecodeHintType={}));var DecodeHintType$1=DecodeHintType;var __extends$7=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * Custom Error class of type Exception.
   */var FormatException=/** @class */function(_super){__extends$7(FormatException,_super);function FormatException(){return _super!==null&&_super.apply(this,arguments)||this;}FormatException.getFormatInstance=function(){return new FormatException();};FormatException.kind='FormatException';return FormatException;}(Exception);/*
   * Copyright 2008 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __values$1=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};/*import java.util.HashMap;*/ /*import java.util.Map;*/var CharacterSetValueIdentifiers;(function(CharacterSetValueIdentifiers){CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["Cp437"]=0]="Cp437";CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_1"]=1]="ISO8859_1";CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_2"]=2]="ISO8859_2";CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_3"]=3]="ISO8859_3";CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_4"]=4]="ISO8859_4";CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_5"]=5]="ISO8859_5";CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_6"]=6]="ISO8859_6";CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_7"]=7]="ISO8859_7";CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_8"]=8]="ISO8859_8";CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_9"]=9]="ISO8859_9";CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_10"]=10]="ISO8859_10";CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_11"]=11]="ISO8859_11";CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_13"]=12]="ISO8859_13";CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_14"]=13]="ISO8859_14";CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_15"]=14]="ISO8859_15";CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ISO8859_16"]=15]="ISO8859_16";CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["SJIS"]=16]="SJIS";CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["Cp1250"]=17]="Cp1250";CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["Cp1251"]=18]="Cp1251";CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["Cp1252"]=19]="Cp1252";CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["Cp1256"]=20]="Cp1256";CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["UnicodeBigUnmarked"]=21]="UnicodeBigUnmarked";CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["UTF8"]=22]="UTF8";CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["ASCII"]=23]="ASCII";CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["Big5"]=24]="Big5";CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["GB18030"]=25]="GB18030";CharacterSetValueIdentifiers[CharacterSetValueIdentifiers["EUC_KR"]=26]="EUC_KR";})(CharacterSetValueIdentifiers||(CharacterSetValueIdentifiers={}));/**
   * Encapsulates a Character Set ECI, according to "Extended Channel Interpretations" 5.3.1.1
   * of ISO 18004.
   *
   * @author Sean Owen
   */var CharacterSetECI=/** @class */function(){function CharacterSetECI(valueIdentifier,valuesParam,name){var e_1,_a;var otherEncodingNames=[];for(var _i=3;_i<arguments.length;_i++){otherEncodingNames[_i-3]=arguments[_i];}this.valueIdentifier=valueIdentifier;this.name=name;if(typeof valuesParam==='number'){this.values=Int32Array.from([valuesParam]);}else{this.values=valuesParam;}this.otherEncodingNames=otherEncodingNames;CharacterSetECI.VALUE_IDENTIFIER_TO_ECI.set(valueIdentifier,this);CharacterSetECI.NAME_TO_ECI.set(name,this);var values=this.values;for(var i=0,length_1=values.length;i!==length_1;i++){var v=values[i];CharacterSetECI.VALUES_TO_ECI.set(v,this);}try{for(var otherEncodingNames_1=__values$1(otherEncodingNames),otherEncodingNames_1_1=otherEncodingNames_1.next();!otherEncodingNames_1_1.done;otherEncodingNames_1_1=otherEncodingNames_1.next()){var otherName=otherEncodingNames_1_1.value;CharacterSetECI.NAME_TO_ECI.set(otherName,this);}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(otherEncodingNames_1_1&&!otherEncodingNames_1_1.done&&(_a=otherEncodingNames_1.return))_a.call(otherEncodingNames_1);}finally{if(e_1)throw e_1.error;}}}// CharacterSetECI(value: number /*int*/) {
//   this(new Int32Array {value})
// }
// CharacterSetECI(value: number /*int*/, String... otherEncodingNames) {
//   this.values = new Int32Array {value}
//   this.otherEncodingNames = otherEncodingNames
// }
// CharacterSetECI(values: Int32Array, String... otherEncodingNames) {
//   this.values = values
//   this.otherEncodingNames = otherEncodingNames
// }
CharacterSetECI.prototype.getValueIdentifier=function(){return this.valueIdentifier;};CharacterSetECI.prototype.getName=function(){return this.name;};CharacterSetECI.prototype.getValue=function(){return this.values[0];};/**
       * @param value character set ECI value
       * @return {@code CharacterSetECI} representing ECI of given value, or null if it is legal but
       *   unsupported
       * @throws FormatException if ECI value is invalid
       */CharacterSetECI.getCharacterSetECIByValue=function(value/*int*/){if(value<0||value>=900){throw new FormatException('incorect value');}var characterSet=CharacterSetECI.VALUES_TO_ECI.get(value);if(undefined===characterSet){throw new FormatException('incorect value');}return characterSet;};/**
       * @param name character set ECI encoding name
       * @return CharacterSetECI representing ECI for character encoding, or null if it is legal
       *   but unsupported
       */CharacterSetECI.getCharacterSetECIByName=function(name){var characterSet=CharacterSetECI.NAME_TO_ECI.get(name);if(undefined===characterSet){throw new FormatException('incorect value');}return characterSet;};CharacterSetECI.prototype.equals=function(o){if(!(o instanceof CharacterSetECI)){return false;}var other=o;return this.getName()===other.getName();};CharacterSetECI.VALUE_IDENTIFIER_TO_ECI=new Map();CharacterSetECI.VALUES_TO_ECI=new Map();CharacterSetECI.NAME_TO_ECI=new Map();// Enum name is a Java encoding valid for java.lang and java.io
// TYPESCRIPTPORT: changed the main label for ISO as the TextEncoder did not recognized them in the form from java
// (eg ISO8859_1 must be ISO88591 or ISO8859-1 or ISO-8859-1)
// later on: well, except 16 wich does not work with ISO885916 so used ISO-8859-1 form for default
CharacterSetECI.Cp437=new CharacterSetECI(CharacterSetValueIdentifiers.Cp437,Int32Array.from([0,2]),'Cp437');CharacterSetECI.ISO8859_1=new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_1,Int32Array.from([1,3]),'ISO-8859-1','ISO88591','ISO8859_1');CharacterSetECI.ISO8859_2=new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_2,4,'ISO-8859-2','ISO88592','ISO8859_2');CharacterSetECI.ISO8859_3=new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_3,5,'ISO-8859-3','ISO88593','ISO8859_3');CharacterSetECI.ISO8859_4=new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_4,6,'ISO-8859-4','ISO88594','ISO8859_4');CharacterSetECI.ISO8859_5=new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_5,7,'ISO-8859-5','ISO88595','ISO8859_5');CharacterSetECI.ISO8859_6=new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_6,8,'ISO-8859-6','ISO88596','ISO8859_6');CharacterSetECI.ISO8859_7=new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_7,9,'ISO-8859-7','ISO88597','ISO8859_7');CharacterSetECI.ISO8859_8=new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_8,10,'ISO-8859-8','ISO88598','ISO8859_8');CharacterSetECI.ISO8859_9=new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_9,11,'ISO-8859-9','ISO88599','ISO8859_9');CharacterSetECI.ISO8859_10=new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_10,12,'ISO-8859-10','ISO885910','ISO8859_10');CharacterSetECI.ISO8859_11=new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_11,13,'ISO-8859-11','ISO885911','ISO8859_11');CharacterSetECI.ISO8859_13=new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_13,15,'ISO-8859-13','ISO885913','ISO8859_13');CharacterSetECI.ISO8859_14=new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_14,16,'ISO-8859-14','ISO885914','ISO8859_14');CharacterSetECI.ISO8859_15=new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_15,17,'ISO-8859-15','ISO885915','ISO8859_15');CharacterSetECI.ISO8859_16=new CharacterSetECI(CharacterSetValueIdentifiers.ISO8859_16,18,'ISO-8859-16','ISO885916','ISO8859_16');CharacterSetECI.SJIS=new CharacterSetECI(CharacterSetValueIdentifiers.SJIS,20,'SJIS','Shift_JIS');CharacterSetECI.Cp1250=new CharacterSetECI(CharacterSetValueIdentifiers.Cp1250,21,'Cp1250','windows-1250');CharacterSetECI.Cp1251=new CharacterSetECI(CharacterSetValueIdentifiers.Cp1251,22,'Cp1251','windows-1251');CharacterSetECI.Cp1252=new CharacterSetECI(CharacterSetValueIdentifiers.Cp1252,23,'Cp1252','windows-1252');CharacterSetECI.Cp1256=new CharacterSetECI(CharacterSetValueIdentifiers.Cp1256,24,'Cp1256','windows-1256');CharacterSetECI.UnicodeBigUnmarked=new CharacterSetECI(CharacterSetValueIdentifiers.UnicodeBigUnmarked,25,'UnicodeBigUnmarked','UTF-16BE','UnicodeBig');CharacterSetECI.UTF8=new CharacterSetECI(CharacterSetValueIdentifiers.UTF8,26,'UTF8','UTF-8');CharacterSetECI.ASCII=new CharacterSetECI(CharacterSetValueIdentifiers.ASCII,Int32Array.from([27,170]),'ASCII','US-ASCII');CharacterSetECI.Big5=new CharacterSetECI(CharacterSetValueIdentifiers.Big5,28,'Big5');CharacterSetECI.GB18030=new CharacterSetECI(CharacterSetValueIdentifiers.GB18030,29,'GB18030','GB2312','EUC_CN','GBK');CharacterSetECI.EUC_KR=new CharacterSetECI(CharacterSetValueIdentifiers.EUC_KR,30,'EUC_KR','EUC-KR');return CharacterSetECI;}();var __extends$8=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * Custom Error class of type Exception.
   */var UnsupportedOperationException=/** @class */function(_super){__extends$8(UnsupportedOperationException,_super);function UnsupportedOperationException(){return _super!==null&&_super.apply(this,arguments)||this;}UnsupportedOperationException.kind='UnsupportedOperationException';return UnsupportedOperationException;}(Exception);/**
   * Responsible for en/decoding strings.
   */var StringEncoding=/** @class */function(){function StringEncoding(){}/**
       * Decodes some Uint8Array to a string format.
       */StringEncoding.decode=function(bytes,encoding){var encodingName=this.encodingName(encoding);if(this.customDecoder){return this.customDecoder(bytes,encodingName);}// Increases browser support.
if(typeof TextDecoder==='undefined'||this.shouldDecodeOnFallback(encodingName)){return this.decodeFallback(bytes,encodingName);}return new TextDecoder(encodingName).decode(bytes);};/**
       * Checks if the decoding method should use the fallback for decoding
       * once Node TextDecoder doesn't support all encoding formats.
       *
       * @param encodingName
       */StringEncoding.shouldDecodeOnFallback=function(encodingName){return!StringEncoding.isBrowser()&&encodingName==='ISO-8859-1';};/**
       * Encodes some string into a Uint8Array.
       */StringEncoding.encode=function(s,encoding){var encodingName=this.encodingName(encoding);if(this.customEncoder){return this.customEncoder(s,encodingName);}// Increases browser support.
if(typeof TextEncoder==='undefined'){return this.encodeFallback(s);}// TextEncoder only encodes to UTF8 by default as specified by encoding.spec.whatwg.org
return new TextEncoder().encode(s);};StringEncoding.isBrowser=function(){return typeof window!=='undefined'&&{}.toString.call(window)==='[object Window]';};/**
       * Returns the string value from some encoding character set.
       */StringEncoding.encodingName=function(encoding){return typeof encoding==='string'?encoding:encoding.getName();};/**
       * Returns character set from some encoding character set.
       */StringEncoding.encodingCharacterSet=function(encoding){if(encoding instanceof CharacterSetECI){return encoding;}return CharacterSetECI.getCharacterSetECIByName(encoding);};/**
       * Runs a fallback for the native decoding funcion.
       */StringEncoding.decodeFallback=function(bytes,encoding){var characterSet=this.encodingCharacterSet(encoding);if(StringEncoding.isDecodeFallbackSupported(characterSet)){var s='';for(var i=0,length_1=bytes.length;i<length_1;i++){var h=bytes[i].toString(16);if(h.length<2){h='0'+h;}s+='%'+h;}return decodeURIComponent(s);}if(characterSet.equals(CharacterSetECI.UnicodeBigUnmarked)){return String.fromCharCode.apply(null,new Uint16Array(bytes.buffer));}throw new UnsupportedOperationException("Encoding "+this.encodingName(encoding)+" not supported by fallback.");};StringEncoding.isDecodeFallbackSupported=function(characterSet){return characterSet.equals(CharacterSetECI.UTF8)||characterSet.equals(CharacterSetECI.ISO8859_1)||characterSet.equals(CharacterSetECI.ASCII);};/**
       * Runs a fallback for the native encoding funcion.
       *
       * @see https://stackoverflow.com/a/17192845/4367683
       */StringEncoding.encodeFallback=function(s){var encodedURIstring=btoa(unescape(encodeURIComponent(s)));var charList=encodedURIstring.split('');var uintArray=[];for(var i=0;i<charList.length;i++){uintArray.push(charList[i].charCodeAt(0));}return new Uint8Array(uintArray);};return StringEncoding;}();/*
   * Copyright (C) 2010 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /**
   * Common string-related functions.
   *
   * @author Sean Owen
   * @author Alex Dupre
   */var StringUtils=/** @class */function(){function StringUtils(){}// SHIFT_JIS.equalsIgnoreCase(PLATFORM_DEFAULT_ENCODING) ||
// EUC_JP.equalsIgnoreCase(PLATFORM_DEFAULT_ENCODING);
StringUtils.castAsNonUtf8Char=function(code,encoding){if(encoding===void 0){encoding=null;}// ISO 8859-1 is the Java default as UTF-8 is JavaScripts
// you can see this method as a Java version of String.fromCharCode
var e=encoding?encoding.getName():this.ISO88591;// use passed format (fromCharCode will return UTF8 encoding)
return StringEncoding.decode(new Uint8Array([code]),e);};/**
       * @param bytes bytes encoding a string, whose encoding should be guessed
       * @param hints decode hints if applicable
       * @return name of guessed encoding; at the moment will only guess one of:
       *  {@link #SHIFT_JIS}, {@link #UTF8}, {@link #ISO88591}, or the platform
       *  default encoding if none of these can possibly be correct
       */StringUtils.guessEncoding=function(bytes,hints){if(hints!==null&&hints!==undefined&&undefined!==hints.get(DecodeHintType$1.CHARACTER_SET)){return hints.get(DecodeHintType$1.CHARACTER_SET).toString();}// For now, merely tries to distinguish ISO-8859-1, UTF-8 and Shift_JIS,
// which should be by far the most common encodings.
var length=bytes.length;var canBeISO88591=true;var canBeShiftJIS=true;var canBeUTF8=true;var utf8BytesLeft=0;// int utf8LowChars = 0
var utf2BytesChars=0;var utf3BytesChars=0;var utf4BytesChars=0;var sjisBytesLeft=0;// int sjisLowChars = 0
var sjisKatakanaChars=0;// int sjisDoubleBytesChars = 0
var sjisCurKatakanaWordLength=0;var sjisCurDoubleBytesWordLength=0;var sjisMaxKatakanaWordLength=0;var sjisMaxDoubleBytesWordLength=0;// int isoLowChars = 0
// int isoHighChars = 0
var isoHighOther=0;var utf8bom=bytes.length>3&&bytes[0]===/*(byte) */0xEF&&bytes[1]===/*(byte) */0xBB&&bytes[2]===/*(byte) */0xBF;for(var i=0;i<length&&(canBeISO88591||canBeShiftJIS||canBeUTF8);i++){var value=bytes[i]&0xFF;// UTF-8 stuff
if(canBeUTF8){if(utf8BytesLeft>0){if((value&0x80)===0){canBeUTF8=false;}else{utf8BytesLeft--;}}else if((value&0x80)!==0){if((value&0x40)===0){canBeUTF8=false;}else{utf8BytesLeft++;if((value&0x20)===0){utf2BytesChars++;}else{utf8BytesLeft++;if((value&0x10)===0){utf3BytesChars++;}else{utf8BytesLeft++;if((value&0x08)===0){utf4BytesChars++;}else{canBeUTF8=false;}}}}}// else {
// utf8LowChars++
// }
}// ISO-8859-1 stuff
if(canBeISO88591){if(value>0x7F&&value<0xA0){canBeISO88591=false;}else if(value>0x9F){if(value<0xC0||value===0xD7||value===0xF7){isoHighOther++;}// else {
// isoHighChars++
// }
}// else {
// isoLowChars++
// }
}// Shift_JIS stuff
if(canBeShiftJIS){if(sjisBytesLeft>0){if(value<0x40||value===0x7F||value>0xFC){canBeShiftJIS=false;}else{sjisBytesLeft--;}}else if(value===0x80||value===0xA0||value>0xEF){canBeShiftJIS=false;}else if(value>0xA0&&value<0xE0){sjisKatakanaChars++;sjisCurDoubleBytesWordLength=0;sjisCurKatakanaWordLength++;if(sjisCurKatakanaWordLength>sjisMaxKatakanaWordLength){sjisMaxKatakanaWordLength=sjisCurKatakanaWordLength;}}else if(value>0x7F){sjisBytesLeft++;// sjisDoubleBytesChars++
sjisCurKatakanaWordLength=0;sjisCurDoubleBytesWordLength++;if(sjisCurDoubleBytesWordLength>sjisMaxDoubleBytesWordLength){sjisMaxDoubleBytesWordLength=sjisCurDoubleBytesWordLength;}}else{// sjisLowChars++
sjisCurKatakanaWordLength=0;sjisCurDoubleBytesWordLength=0;}}}if(canBeUTF8&&utf8BytesLeft>0){canBeUTF8=false;}if(canBeShiftJIS&&sjisBytesLeft>0){canBeShiftJIS=false;}// Easy -- if there is BOM or at least 1 valid not-single byte character (and no evidence it can't be UTF-8), done
if(canBeUTF8&&(utf8bom||utf2BytesChars+utf3BytesChars+utf4BytesChars>0)){return StringUtils.UTF8;}// Easy -- if assuming Shift_JIS or at least 3 valid consecutive not-ascii characters (and no evidence it can't be), done
if(canBeShiftJIS&&(StringUtils.ASSUME_SHIFT_JIS||sjisMaxKatakanaWordLength>=3||sjisMaxDoubleBytesWordLength>=3)){return StringUtils.SHIFT_JIS;}// Distinguishing Shift_JIS and ISO-8859-1 can be a little tough for short words. The crude heuristic is:
// - If we saw
//   - only two consecutive katakana chars in the whole text, or
//   - at least 10% of bytes that could be "upper" not-alphanumeric Latin1,
// - then we conclude Shift_JIS, else ISO-8859-1
if(canBeISO88591&&canBeShiftJIS){return sjisMaxKatakanaWordLength===2&&sjisKatakanaChars===2||isoHighOther*10>=length?StringUtils.SHIFT_JIS:StringUtils.ISO88591;}// Otherwise, try in order ISO-8859-1, Shift JIS, UTF-8 and fall back to default platform encoding
if(canBeISO88591){return StringUtils.ISO88591;}if(canBeShiftJIS){return StringUtils.SHIFT_JIS;}if(canBeUTF8){return StringUtils.UTF8;}// Otherwise, we take a wild guess with platform encoding
return StringUtils.PLATFORM_DEFAULT_ENCODING;};/**
       *
       * @see https://stackoverflow.com/a/13439711/4367683
       *
       * @param append The new string to append.
       * @param args Argumets values to be formated.
       */StringUtils.format=function(append){var args=[];for(var _i=1;_i<arguments.length;_i++){args[_i-1]=arguments[_i];}var i=-1;function callback(exp,p0,p1,p2,p3,p4){if(exp==='%%')return'%';if(args[++i]===undefined)return undefined;exp=p2?parseInt(p2.substr(1)):undefined;var base=p3?parseInt(p3.substr(1)):undefined;var val;switch(p4){case's':val=args[i];break;case'c':val=args[i][0];break;case'f':val=parseFloat(args[i]).toFixed(exp);break;case'p':val=parseFloat(args[i]).toPrecision(exp);break;case'e':val=parseFloat(args[i]).toExponential(exp);break;case'x':val=parseInt(args[i]).toString(base?base:16);break;case'd':val=parseFloat(parseInt(args[i],base?base:10).toPrecision(exp)).toFixed(0);break;}val=typeof val==='object'?JSON.stringify(val):(+val).toString(base);var size=parseInt(p1);/* padding size */var ch=p1&&p1[0]+''==='0'?'0':' ';/* isnull? */while(val.length<size)val=p0!==undefined?val+ch:ch+val;/* isminus? */return val;}var regex=/%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g;return append.replace(regex,callback);};/**
       *
       */StringUtils.getBytes=function(str,encoding){return StringEncoding.encode(str,encoding);};/**
       * Returns the charcode at the specified index or at index zero.
       */StringUtils.getCharCode=function(str,index){if(index===void 0){index=0;}return str.charCodeAt(index);};/**
       * Returns char for given charcode
       */StringUtils.getCharAt=function(charCode){return String.fromCharCode(charCode);};StringUtils.SHIFT_JIS=CharacterSetECI.SJIS.getName();// "SJIS"
StringUtils.GB2312='GB2312';StringUtils.ISO88591=CharacterSetECI.ISO8859_1.getName();// "ISO8859_1"
StringUtils.EUC_JP='EUC_JP';StringUtils.UTF8=CharacterSetECI.UTF8.getName();// "UTF8"
StringUtils.PLATFORM_DEFAULT_ENCODING=StringUtils.UTF8;// "UTF8"//Charset.defaultCharset().name()
StringUtils.ASSUME_SHIFT_JIS=false;return StringUtils;}();var StringBuilder=/** @class */function(){function StringBuilder(value){if(value===void 0){value='';}this.value=value;}StringBuilder.prototype.enableDecoding=function(encoding){this.encoding=encoding;return this;};StringBuilder.prototype.append=function(s){if(typeof s==='string'){this.value+=s.toString();}else if(this.encoding){// use passed format (fromCharCode will return UTF8 encoding)
this.value+=StringUtils.castAsNonUtf8Char(s,this.encoding);}else{// correctly converts from UTF-8, but not other encodings
this.value+=String.fromCharCode(s);}return this;};StringBuilder.prototype.appendChars=function(str,offset,len){for(var i=offset;offset<offset+len;i++){this.append(str[i]);}return this;};StringBuilder.prototype.length=function(){return this.value.length;};StringBuilder.prototype.charAt=function(n){return this.value.charAt(n);};StringBuilder.prototype.deleteCharAt=function(n){this.value=this.value.substr(0,n)+this.value.substring(n+1);};StringBuilder.prototype.setCharAt=function(n,c){this.value=this.value.substr(0,n)+c+this.value.substr(n+1);};StringBuilder.prototype.substring=function(start,end){return this.value.substring(start,end);};/**
       * @note helper method for RSS Expanded
       */StringBuilder.prototype.setLengthToZero=function(){this.value='';};StringBuilder.prototype.toString=function(){return this.value;};StringBuilder.prototype.insert=function(n,c){this.value=this.value.substr(0,n)+c+this.value.substr(n+c.length);};return StringBuilder;}();/*
   * Copyright 2007 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /**
   * <p>Represents a 2D matrix of bits. In function arguments below, and throughout the common
   * module, x is the column position, and y is the row position. The ordering is always x, y.
   * The origin is at the top-left.</p>
   *
   * <p>Internally the bits are represented in a 1-D array of 32-bit ints. However, each row begins
   * with a new int. This is done intentionally so that we can copy out a row into a BitArray very
   * efficiently.</p>
   *
   * <p>The ordering of bits is row-major. Within each int, the least significant bits are used first,
   * meaning they represent lower x values. This is compatible with BitArray's implementation.</p>
   *
   * @author Sean Owen
   * @author dswitkin@google.com (Daniel Switkin)
   */var BitMatrix/*implements Cloneable*/=/** @class */function(){/**
       * Creates an empty square {@link BitMatrix}.
       *
       * @param dimension height and width
       */ // public constructor(dimension: number /*int*/) {
//   this(dimension, dimension)
// }
/**
       * Creates an empty {@link BitMatrix}.
       *
       * @param width bit matrix width
       * @param height bit matrix height
       */ // public constructor(width: number /*int*/, height: number /*int*/) {
//   if (width < 1 || height < 1) {
//     throw new IllegalArgumentException("Both dimensions must be greater than 0")
//   }
//   this.width = width
//   this.height = height
//   this.rowSize = (width + 31) / 32
//   bits = new int[rowSize * height];
// }
function BitMatrix(width/*int*/,height/*int*/,rowSize/*int*/,bits){this.width=width;this.height=height;this.rowSize=rowSize;this.bits=bits;if(undefined===height||null===height){height=width;}this.height=height;if(width<1||height<1){throw new IllegalArgumentException('Both dimensions must be greater than 0');}if(undefined===rowSize||null===rowSize){rowSize=Math.floor((width+31)/32);}this.rowSize=rowSize;if(undefined===bits||null===bits){this.bits=new Int32Array(this.rowSize*this.height);}}/**
       * Interprets a 2D array of booleans as a {@link BitMatrix}, where "true" means an "on" bit.
       *
       * @function parse
       * @param image bits of the image, as a row-major 2D array. Elements are arrays representing rows
       * @return {@link BitMatrix} representation of image
       */BitMatrix.parseFromBooleanArray=function(image){var height=image.length;var width=image[0].length;var bits=new BitMatrix(width,height);for(var i=0;i<height;i++){var imageI=image[i];for(var j=0;j<width;j++){if(imageI[j]){bits.set(j,i);}}}return bits;};/**
       *
       * @function parse
       * @param stringRepresentation
       * @param setString
       * @param unsetString
       */BitMatrix.parseFromString=function(stringRepresentation,setString,unsetString){if(stringRepresentation===null){throw new IllegalArgumentException('stringRepresentation cannot be null');}var bits=new Array(stringRepresentation.length);var bitsPos=0;var rowStartPos=0;var rowLength=-1;var nRows=0;var pos=0;while(pos<stringRepresentation.length){if(stringRepresentation.charAt(pos)==='\n'||stringRepresentation.charAt(pos)==='\r'){if(bitsPos>rowStartPos){if(rowLength===-1){rowLength=bitsPos-rowStartPos;}else if(bitsPos-rowStartPos!==rowLength){throw new IllegalArgumentException('row lengths do not match');}rowStartPos=bitsPos;nRows++;}pos++;}else if(stringRepresentation.substring(pos,pos+setString.length)===setString){pos+=setString.length;bits[bitsPos]=true;bitsPos++;}else if(stringRepresentation.substring(pos,pos+unsetString.length)===unsetString){pos+=unsetString.length;bits[bitsPos]=false;bitsPos++;}else{throw new IllegalArgumentException('illegal character encountered: '+stringRepresentation.substring(pos));}}// no EOL at end?
if(bitsPos>rowStartPos){if(rowLength===-1){rowLength=bitsPos-rowStartPos;}else if(bitsPos-rowStartPos!==rowLength){throw new IllegalArgumentException('row lengths do not match');}nRows++;}var matrix=new BitMatrix(rowLength,nRows);for(var i=0;i<bitsPos;i++){if(bits[i]){matrix.set(Math.floor(i%rowLength),Math.floor(i/rowLength));}}return matrix;};/**
       * <p>Gets the requested bit, where true means black.</p>
       *
       * @param x The horizontal component (i.e. which column)
       * @param y The vertical component (i.e. which row)
       * @return value of given bit in matrix
       */BitMatrix.prototype.get=function(x/*int*/,y/*int*/){var offset=y*this.rowSize+Math.floor(x/32);return(this.bits[offset]>>>(x&0x1f)&1)!==0;};/**
       * <p>Sets the given bit to true.</p>
       *
       * @param x The horizontal component (i.e. which column)
       * @param y The vertical component (i.e. which row)
       */BitMatrix.prototype.set=function(x/*int*/,y/*int*/){var offset=y*this.rowSize+Math.floor(x/32);this.bits[offset]|=1<<(x&0x1f)&0xFFFFFFFF;};BitMatrix.prototype.unset=function(x/*int*/,y/*int*/){var offset=y*this.rowSize+Math.floor(x/32);this.bits[offset]&=~(1<<(x&0x1f)&0xFFFFFFFF);};/**
       * <p>Flips the given bit.</p>
       *
       * @param x The horizontal component (i.e. which column)
       * @param y The vertical component (i.e. which row)
       */BitMatrix.prototype.flip=function(x/*int*/,y/*int*/){var offset=y*this.rowSize+Math.floor(x/32);this.bits[offset]^=1<<(x&0x1f)&0xFFFFFFFF;};/**
       * Exclusive-or (XOR): Flip the bit in this {@code BitMatrix} if the corresponding
       * mask bit is set.
       *
       * @param mask XOR mask
       */BitMatrix.prototype.xor=function(mask){if(this.width!==mask.getWidth()||this.height!==mask.getHeight()||this.rowSize!==mask.getRowSize()){throw new IllegalArgumentException('input matrix dimensions do not match');}var rowArray=new BitArray(Math.floor(this.width/32)+1);var rowSize=this.rowSize;var bits=this.bits;for(var y=0,height=this.height;y<height;y++){var offset=y*rowSize;var row=mask.getRow(y,rowArray).getBitArray();for(var x=0;x<rowSize;x++){bits[offset+x]^=row[x];}}};/**
       * Clears all bits (sets to false).
       */BitMatrix.prototype.clear=function(){var bits=this.bits;var max=bits.length;for(var i=0;i<max;i++){bits[i]=0;}};/**
       * <p>Sets a square region of the bit matrix to true.</p>
       *
       * @param left The horizontal position to begin at (inclusive)
       * @param top The vertical position to begin at (inclusive)
       * @param width The width of the region
       * @param height The height of the region
       */BitMatrix.prototype.setRegion=function(left/*int*/,top/*int*/,width/*int*/,height/*int*/){if(top<0||left<0){throw new IllegalArgumentException('Left and top must be nonnegative');}if(height<1||width<1){throw new IllegalArgumentException('Height and width must be at least 1');}var right=left+width;var bottom=top+height;if(bottom>this.height||right>this.width){throw new IllegalArgumentException('The region must fit inside the matrix');}var rowSize=this.rowSize;var bits=this.bits;for(var y=top;y<bottom;y++){var offset=y*rowSize;for(var x=left;x<right;x++){bits[offset+Math.floor(x/32)]|=1<<(x&0x1f)&0xFFFFFFFF;}}};/**
       * A fast method to retrieve one row of data from the matrix as a BitArray.
       *
       * @param y The row to retrieve
       * @param row An optional caller-allocated BitArray, will be allocated if null or too small
       * @return The resulting BitArray - this reference should always be used even when passing
       *         your own row
       */BitMatrix.prototype.getRow=function(y/*int*/,row){if(row===null||row===undefined||row.getSize()<this.width){row=new BitArray(this.width);}else{row.clear();}var rowSize=this.rowSize;var bits=this.bits;var offset=y*rowSize;for(var x=0;x<rowSize;x++){row.setBulk(x*32,bits[offset+x]);}return row;};/**
       * @param y row to set
       * @param row {@link BitArray} to copy from
       */BitMatrix.prototype.setRow=function(y/*int*/,row){System.arraycopy(row.getBitArray(),0,this.bits,y*this.rowSize,this.rowSize);};/**
       * Modifies this {@code BitMatrix} to represent the same but rotated 180 degrees
       */BitMatrix.prototype.rotate180=function(){var width=this.getWidth();var height=this.getHeight();var topRow=new BitArray(width);var bottomRow=new BitArray(width);for(var i=0,length_1=Math.floor((height+1)/2);i<length_1;i++){topRow=this.getRow(i,topRow);bottomRow=this.getRow(height-1-i,bottomRow);topRow.reverse();bottomRow.reverse();this.setRow(i,bottomRow);this.setRow(height-1-i,topRow);}};/**
       * This is useful in detecting the enclosing rectangle of a 'pure' barcode.
       *
       * @return {@code left,top,width,height} enclosing rectangle of all 1 bits, or null if it is all white
       */BitMatrix.prototype.getEnclosingRectangle=function(){var width=this.width;var height=this.height;var rowSize=this.rowSize;var bits=this.bits;var left=width;var top=height;var right=-1;var bottom=-1;for(var y=0;y<height;y++){for(var x32=0;x32<rowSize;x32++){var theBits=bits[y*rowSize+x32];if(theBits!==0){if(y<top){top=y;}if(y>bottom){bottom=y;}if(x32*32<left){var bit=0;while((theBits<<31-bit&0xFFFFFFFF)===0){bit++;}if(x32*32+bit<left){left=x32*32+bit;}}if(x32*32+31>right){var bit=31;while(theBits>>>bit===0){bit--;}if(x32*32+bit>right){right=x32*32+bit;}}}}}if(right<left||bottom<top){return null;}return Int32Array.from([left,top,right-left+1,bottom-top+1]);};/**
       * This is useful in detecting a corner of a 'pure' barcode.
       *
       * @return {@code x,y} coordinate of top-left-most 1 bit, or null if it is all white
       */BitMatrix.prototype.getTopLeftOnBit=function(){var rowSize=this.rowSize;var bits=this.bits;var bitsOffset=0;while(bitsOffset<bits.length&&bits[bitsOffset]===0){bitsOffset++;}if(bitsOffset===bits.length){return null;}var y=bitsOffset/rowSize;var x=bitsOffset%rowSize*32;var theBits=bits[bitsOffset];var bit=0;while((theBits<<31-bit&0xFFFFFFFF)===0){bit++;}x+=bit;return Int32Array.from([x,y]);};BitMatrix.prototype.getBottomRightOnBit=function(){var rowSize=this.rowSize;var bits=this.bits;var bitsOffset=bits.length-1;while(bitsOffset>=0&&bits[bitsOffset]===0){bitsOffset--;}if(bitsOffset<0){return null;}var y=Math.floor(bitsOffset/rowSize);var x=Math.floor(bitsOffset%rowSize)*32;var theBits=bits[bitsOffset];var bit=31;while(theBits>>>bit===0){bit--;}x+=bit;return Int32Array.from([x,y]);};/**
       * @return The width of the matrix
       */BitMatrix.prototype.getWidth=function(){return this.width;};/**
       * @return The height of the matrix
       */BitMatrix.prototype.getHeight=function(){return this.height;};/**
       * @return The row size of the matrix
       */BitMatrix.prototype.getRowSize=function(){return this.rowSize;};/*@Override*/BitMatrix.prototype.equals=function(o){if(!(o instanceof BitMatrix)){return false;}var other=o;return this.width===other.width&&this.height===other.height&&this.rowSize===other.rowSize&&Arrays.equals(this.bits,other.bits);};/*@Override*/BitMatrix.prototype.hashCode=function(){var hash=this.width;hash=31*hash+this.width;hash=31*hash+this.height;hash=31*hash+this.rowSize;hash=31*hash+Arrays.hashCode(this.bits);return hash;};/**
       * @return string representation using "X" for set and " " for unset bits
       */ /*@Override*/ // public toString(): string {
//   return toString(": "X, "  ")
// }
/**
       * @param setString representation of a set bit
       * @param unsetString representation of an unset bit
       * @return string representation of entire matrix utilizing given strings
       */ // public toString(setString: string = "X ", unsetString: string = "  "): string {
//   return this.buildToString(setString, unsetString, "\n")
// }
/**
       * @param setString representation of a set bit
       * @param unsetString representation of an unset bit
       * @param lineSeparator newline character in string representation
       * @return string representation of entire matrix utilizing given strings and line separator
       * @deprecated call {@link #toString(String,String)} only, which uses \n line separator always
       */ // @Deprecated
BitMatrix.prototype.toString=function(setString,unsetString,lineSeparator){if(setString===void 0){setString='X ';}if(unsetString===void 0){unsetString='  ';}if(lineSeparator===void 0){lineSeparator='\n';}return this.buildToString(setString,unsetString,lineSeparator);};BitMatrix.prototype.buildToString=function(setString,unsetString,lineSeparator){var result=new StringBuilder();// result.append(lineSeparator);
for(var y=0,height=this.height;y<height;y++){for(var x=0,width=this.width;x<width;x++){result.append(this.get(x,y)?setString:unsetString);}result.append(lineSeparator);}return result.toString();};/*@Override*/BitMatrix.prototype.clone=function(){return new BitMatrix(this.width,this.height,this.rowSize,this.bits.slice());};return BitMatrix;}();var __extends$9=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * Custom Error class of type Exception.
   */var NotFoundException=/** @class */function(_super){__extends$9(NotFoundException,_super);function NotFoundException(){return _super!==null&&_super.apply(this,arguments)||this;}NotFoundException.getNotFoundInstance=function(){return new NotFoundException();};NotFoundException.kind='NotFoundException';return NotFoundException;}(Exception);/*
   * Copyright 2009 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __extends$a=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * This Binarizer implementation uses the old ZXing global histogram approach. It is suitable
   * for low-end mobile devices which don't have enough CPU or memory to use a local thresholding
   * algorithm. However, because it picks a global black point, it cannot handle difficult shadows
   * and gradients.
   *
   * Faster mobile devices and all desktop applications should probably use HybridBinarizer instead.
   *
   * @author dswitkin@google.com (Daniel Switkin)
   * @author Sean Owen
   */var GlobalHistogramBinarizer=/** @class */function(_super){__extends$a(GlobalHistogramBinarizer,_super);function GlobalHistogramBinarizer(source){var _this=_super.call(this,source)||this;_this.luminances=GlobalHistogramBinarizer.EMPTY;_this.buckets=new Int32Array(GlobalHistogramBinarizer.LUMINANCE_BUCKETS);return _this;}// Applies simple sharpening to the row data to improve performance of the 1D Readers.
/*@Override*/GlobalHistogramBinarizer.prototype.getBlackRow=function(y/*int*/,row){var source=this.getLuminanceSource();var width=source.getWidth();if(row===undefined||row===null||row.getSize()<width){row=new BitArray(width);}else{row.clear();}this.initArrays(width);var localLuminances=source.getRow(y,this.luminances);var localBuckets=this.buckets;for(var x=0;x<width;x++){localBuckets[(localLuminances[x]&0xff)>>GlobalHistogramBinarizer.LUMINANCE_SHIFT]++;}var blackPoint=GlobalHistogramBinarizer.estimateBlackPoint(localBuckets);if(width<3){// Special case for very small images
for(var x=0;x<width;x++){if((localLuminances[x]&0xff)<blackPoint){row.set(x);}}}else{var left=localLuminances[0]&0xff;var center=localLuminances[1]&0xff;for(var x=1;x<width-1;x++){var right=localLuminances[x+1]&0xff;// A simple -1 4 -1 box filter with a weight of 2.
if((center*4-left-right)/2<blackPoint){row.set(x);}left=center;center=right;}}return row;};// Does not sharpen the data, as this call is intended to only be used by 2D Readers.
/*@Override*/GlobalHistogramBinarizer.prototype.getBlackMatrix=function(){var source=this.getLuminanceSource();var width=source.getWidth();var height=source.getHeight();var matrix=new BitMatrix(width,height);// Quickly calculates the histogram by sampling four rows from the image. This proved to be
// more robust on the blackbox tests than sampling a diagonal as we used to do.
this.initArrays(width);var localBuckets=this.buckets;for(var y=1;y<5;y++){var row=Math.floor(height*y/5);var localLuminances_1=source.getRow(row,this.luminances);var right=Math.floor(width*4/5);for(var x=Math.floor(width/5);x<right;x++){var pixel=localLuminances_1[x]&0xff;localBuckets[pixel>>GlobalHistogramBinarizer.LUMINANCE_SHIFT]++;}}var blackPoint=GlobalHistogramBinarizer.estimateBlackPoint(localBuckets);// We delay reading the entire image luminance until the black point estimation succeeds.
// Although we end up reading four rows twice, it is consistent with our motto of
// "fail quickly" which is necessary for continuous scanning.
var localLuminances=source.getMatrix();for(var y=0;y<height;y++){var offset=y*width;for(var x=0;x<width;x++){var pixel=localLuminances[offset+x]&0xff;if(pixel<blackPoint){matrix.set(x,y);}}}return matrix;};/*@Override*/GlobalHistogramBinarizer.prototype.createBinarizer=function(source){return new GlobalHistogramBinarizer(source);};GlobalHistogramBinarizer.prototype.initArrays=function(luminanceSize/*int*/){if(this.luminances.length<luminanceSize){this.luminances=new Uint8ClampedArray(luminanceSize);}var buckets=this.buckets;for(var x=0;x<GlobalHistogramBinarizer.LUMINANCE_BUCKETS;x++){buckets[x]=0;}};GlobalHistogramBinarizer.estimateBlackPoint=function(buckets){// Find the tallest peak in the histogram.
var numBuckets=buckets.length;var maxBucketCount=0;var firstPeak=0;var firstPeakSize=0;for(var x=0;x<numBuckets;x++){if(buckets[x]>firstPeakSize){firstPeak=x;firstPeakSize=buckets[x];}if(buckets[x]>maxBucketCount){maxBucketCount=buckets[x];}}// Find the second-tallest peak which is somewhat far from the tallest peak.
var secondPeak=0;var secondPeakScore=0;for(var x=0;x<numBuckets;x++){var distanceToBiggest=x-firstPeak;// Encourage more distant second peaks by multiplying by square of distance.
var score=buckets[x]*distanceToBiggest*distanceToBiggest;if(score>secondPeakScore){secondPeak=x;secondPeakScore=score;}}// Make sure firstPeak corresponds to the black peak.
if(firstPeak>secondPeak){var temp=firstPeak;firstPeak=secondPeak;secondPeak=temp;}// If there is too little contrast in the image to pick a meaningful black point, throw rather
// than waste time trying to decode the image, and risk false positives.
if(secondPeak-firstPeak<=numBuckets/16){throw new NotFoundException();}// Find a valley between them that is low and closer to the white peak.
var bestValley=secondPeak-1;var bestValleyScore=-1;for(var x=secondPeak-1;x>firstPeak;x--){var fromFirst=x-firstPeak;var score=fromFirst*fromFirst*(secondPeak-x)*(maxBucketCount-buckets[x]);if(score>bestValleyScore){bestValley=x;bestValleyScore=score;}}return bestValley<<GlobalHistogramBinarizer.LUMINANCE_SHIFT;};GlobalHistogramBinarizer.LUMINANCE_BITS=5;GlobalHistogramBinarizer.LUMINANCE_SHIFT=8-GlobalHistogramBinarizer.LUMINANCE_BITS;GlobalHistogramBinarizer.LUMINANCE_BUCKETS=1<<GlobalHistogramBinarizer.LUMINANCE_BITS;GlobalHistogramBinarizer.EMPTY=Uint8ClampedArray.from([0]);return GlobalHistogramBinarizer;}(Binarizer);/*
   * Copyright 2009 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __extends$b=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * This class implements a local thresholding algorithm, which while slower than the
   * GlobalHistogramBinarizer, is fairly efficient for what it does. It is designed for
   * high frequency images of barcodes with black data on white backgrounds. For this application,
   * it does a much better job than a global blackpoint with severe shadows and gradients.
   * However it tends to produce artifacts on lower frequency images and is therefore not
   * a good general purpose binarizer for uses outside ZXing.
   *
   * This class extends GlobalHistogramBinarizer, using the older histogram approach for 1D readers,
   * and the newer local approach for 2D readers. 1D decoding using a per-row histogram is already
   * inherently local, and only fails for horizontal gradients. We can revisit that problem later,
   * but for now it was not a win to use local blocks for 1D.
   *
   * This Binarizer is the default for the unit tests and the recommended class for library users.
   *
   * @author dswitkin@google.com (Daniel Switkin)
   */var HybridBinarizer=/** @class */function(_super){__extends$b(HybridBinarizer,_super);function HybridBinarizer(source){var _this=_super.call(this,source)||this;_this.matrix=null;return _this;}/**
       * Calculates the final BitMatrix once for all requests. This could be called once from the
       * constructor instead, but there are some advantages to doing it lazily, such as making
       * profiling easier, and not doing heavy lifting when callers don't expect it.
       */ /*@Override*/HybridBinarizer.prototype.getBlackMatrix=function(){if(this.matrix!==null){return this.matrix;}var source=this.getLuminanceSource();var width=source.getWidth();var height=source.getHeight();if(width>=HybridBinarizer.MINIMUM_DIMENSION&&height>=HybridBinarizer.MINIMUM_DIMENSION){var luminances=source.getMatrix();var subWidth=width>>HybridBinarizer.BLOCK_SIZE_POWER;if((width&HybridBinarizer.BLOCK_SIZE_MASK)!==0){subWidth++;}var subHeight=height>>HybridBinarizer.BLOCK_SIZE_POWER;if((height&HybridBinarizer.BLOCK_SIZE_MASK)!==0){subHeight++;}var blackPoints=HybridBinarizer.calculateBlackPoints(luminances,subWidth,subHeight,width,height);var newMatrix=new BitMatrix(width,height);HybridBinarizer.calculateThresholdForBlock(luminances,subWidth,subHeight,width,height,blackPoints,newMatrix);this.matrix=newMatrix;}else{// If the image is too small, fall back to the global histogram approach.
this.matrix=_super.prototype.getBlackMatrix.call(this);}return this.matrix;};/*@Override*/HybridBinarizer.prototype.createBinarizer=function(source){return new HybridBinarizer(source);};/**
       * For each block in the image, calculate the average black point using a 5x5 grid
       * of the blocks around it. Also handles the corner cases (fractional blocks are computed based
       * on the last pixels in the row/column which are also used in the previous block).
       */HybridBinarizer.calculateThresholdForBlock=function(luminances,subWidth/*int*/,subHeight/*int*/,width/*int*/,height/*int*/,blackPoints,matrix){var maxYOffset=height-HybridBinarizer.BLOCK_SIZE;var maxXOffset=width-HybridBinarizer.BLOCK_SIZE;for(var y=0;y<subHeight;y++){var yoffset=y<<HybridBinarizer.BLOCK_SIZE_POWER;if(yoffset>maxYOffset){yoffset=maxYOffset;}var top_1=HybridBinarizer.cap(y,2,subHeight-3);for(var x=0;x<subWidth;x++){var xoffset=x<<HybridBinarizer.BLOCK_SIZE_POWER;if(xoffset>maxXOffset){xoffset=maxXOffset;}var left=HybridBinarizer.cap(x,2,subWidth-3);var sum=0;for(var z=-2;z<=2;z++){var blackRow=blackPoints[top_1+z];sum+=blackRow[left-2]+blackRow[left-1]+blackRow[left]+blackRow[left+1]+blackRow[left+2];}var average=sum/25;HybridBinarizer.thresholdBlock(luminances,xoffset,yoffset,average,width,matrix);}}};HybridBinarizer.cap=function(value/*int*/,min/*int*/,max/*int*/){return value<min?min:value>max?max:value;};/**
       * Applies a single threshold to a block of pixels.
       */HybridBinarizer.thresholdBlock=function(luminances,xoffset/*int*/,yoffset/*int*/,threshold/*int*/,stride/*int*/,matrix){for(var y=0,offset=yoffset*stride+xoffset;y<HybridBinarizer.BLOCK_SIZE;y++,offset+=stride){for(var x=0;x<HybridBinarizer.BLOCK_SIZE;x++){// Comparison needs to be <= so that black == 0 pixels are black even if the threshold is 0.
if((luminances[offset+x]&0xFF)<=threshold){matrix.set(xoffset+x,yoffset+y);}}}};/**
       * Calculates a single black point for each block of pixels and saves it away.
       * See the following thread for a discussion of this algorithm:
       *  http://groups.google.com/group/zxing/browse_thread/thread/d06efa2c35a7ddc0
       */HybridBinarizer.calculateBlackPoints=function(luminances,subWidth/*int*/,subHeight/*int*/,width/*int*/,height/*int*/){var maxYOffset=height-HybridBinarizer.BLOCK_SIZE;var maxXOffset=width-HybridBinarizer.BLOCK_SIZE;// tslint:disable-next-line:whitespace
var blackPoints=new Array(subHeight);// subWidth
for(var y=0;y<subHeight;y++){blackPoints[y]=new Int32Array(subWidth);var yoffset=y<<HybridBinarizer.BLOCK_SIZE_POWER;if(yoffset>maxYOffset){yoffset=maxYOffset;}for(var x=0;x<subWidth;x++){var xoffset=x<<HybridBinarizer.BLOCK_SIZE_POWER;if(xoffset>maxXOffset){xoffset=maxXOffset;}var sum=0;var min=0xFF;var max=0;for(var yy=0,offset=yoffset*width+xoffset;yy<HybridBinarizer.BLOCK_SIZE;yy++,offset+=width){for(var xx=0;xx<HybridBinarizer.BLOCK_SIZE;xx++){var pixel=luminances[offset+xx]&0xFF;sum+=pixel;// still looking for good contrast
if(pixel<min){min=pixel;}if(pixel>max){max=pixel;}}// short-circuit min/max tests once dynamic range is met
if(max-min>HybridBinarizer.MIN_DYNAMIC_RANGE){// finish the rest of the rows quickly
for(yy++,offset+=width;yy<HybridBinarizer.BLOCK_SIZE;yy++,offset+=width){for(var xx=0;xx<HybridBinarizer.BLOCK_SIZE;xx++){sum+=luminances[offset+xx]&0xFF;}}}}// The default estimate is the average of the values in the block.
var average=sum>>HybridBinarizer.BLOCK_SIZE_POWER*2;if(max-min<=HybridBinarizer.MIN_DYNAMIC_RANGE){// If variation within the block is low, assume this is a block with only light or only
// dark pixels. In that case we do not want to use the average, as it would divide this
// low contrast area into black and white pixels, essentially creating data out of noise.
//
// The default assumption is that the block is light/background. Since no estimate for
// the level of dark pixels exists locally, use half the min for the block.
average=min/2;if(y>0&&x>0){// Correct the "white background" assumption for blocks that have neighbors by comparing
// the pixels in this block to the previously calculated black points. This is based on
// the fact that dark barcode symbology is always surrounded by some amount of light
// background for which reasonable black point estimates were made. The bp estimated at
// the boundaries is used for the interior.
// The (min < bp) is arbitrary but works better than other heuristics that were tried.
var averageNeighborBlackPoint=(blackPoints[y-1][x]+2*blackPoints[y][x-1]+blackPoints[y-1][x-1])/4;if(min<averageNeighborBlackPoint){average=averageNeighborBlackPoint;}}}blackPoints[y][x]=average;}}return blackPoints;};// This class uses 5x5 blocks to compute local luminance, where each block is 8x8 pixels.
// So this is the smallest dimension in each axis we can accept.
HybridBinarizer.BLOCK_SIZE_POWER=3;HybridBinarizer.BLOCK_SIZE=1<<HybridBinarizer.BLOCK_SIZE_POWER;// ...0100...00
HybridBinarizer.BLOCK_SIZE_MASK=HybridBinarizer.BLOCK_SIZE-1;// ...0011...11
HybridBinarizer.MINIMUM_DIMENSION=HybridBinarizer.BLOCK_SIZE*5;HybridBinarizer.MIN_DYNAMIC_RANGE=24;return HybridBinarizer;}(GlobalHistogramBinarizer);/*
   * Copyright 2009 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /*namespace com.google.zxing {*/ /**
   * The purpose of this class hierarchy is to abstract different bitmap implementations across
   * platforms into a standard interface for requesting greyscale luminance values. The interface
   * only provides immutable methods; therefore crop and rotation create copies. This is to ensure
   * that one Reader does not modify the original luminance source and leave it in an unknown state
   * for other Readers in the chain.
   *
   * @author dswitkin@google.com (Daniel Switkin)
   */var LuminanceSource=/** @class */function(){function LuminanceSource(width/*int*/,height/*int*/){this.width=width;this.height=height;}/**
       * @return The width of the bitmap.
       */LuminanceSource.prototype.getWidth=function(){return this.width;};/**
       * @return The height of the bitmap.
       */LuminanceSource.prototype.getHeight=function(){return this.height;};/**
       * @return Whether this subclass supports cropping.
       */LuminanceSource.prototype.isCropSupported=function(){return false;};/**
       * Returns a new object with cropped image data. Implementations may keep a reference to the
       * original data rather than a copy. Only callable if isCropSupported() is true.
       *
       * @param left The left coordinate, which must be in [0,getWidth())
       * @param top The top coordinate, which must be in [0,getHeight())
       * @param width The width of the rectangle to crop.
       * @param height The height of the rectangle to crop.
       * @return A cropped version of this object.
       */LuminanceSource.prototype.crop=function(left/*int*/,top/*int*/,width/*int*/,height/*int*/){throw new UnsupportedOperationException('This luminance source does not support cropping.');};/**
       * @return Whether this subclass supports counter-clockwise rotation.
       */LuminanceSource.prototype.isRotateSupported=function(){return false;};/**
       * Returns a new object with rotated image data by 90 degrees counterclockwise.
       * Only callable if {@link #isRotateSupported()} is true.
       *
       * @return A rotated version of this object.
       */LuminanceSource.prototype.rotateCounterClockwise=function(){throw new UnsupportedOperationException('This luminance source does not support rotation by 90 degrees.');};/**
       * Returns a new object with rotated image data by 45 degrees counterclockwise.
       * Only callable if {@link #isRotateSupported()} is true.
       *
       * @return A rotated version of this object.
       */LuminanceSource.prototype.rotateCounterClockwise45=function(){throw new UnsupportedOperationException('This luminance source does not support rotation by 45 degrees.');};/*@Override*/LuminanceSource.prototype.toString=function(){var row=new Uint8ClampedArray(this.width);var result=new StringBuilder();for(var y=0;y<this.height;y++){var sourceRow=this.getRow(y,row);for(var x=0;x<this.width;x++){var luminance=sourceRow[x]&0xFF;var c=void 0;if(luminance<0x40){c='#';}else if(luminance<0x80){c='+';}else if(luminance<0xC0){c='.';}else{c=' ';}result.append(c);}result.append('\n');}return result.toString();};return LuminanceSource;}();/*
   * Copyright 2009 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __extends$c=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/*namespace com.google.zxing {*/ /**
   * A wrapper implementation of {@link LuminanceSource} which inverts the luminances it returns -- black becomes
   * white and vice versa, and each value becomes (255-value).
   *
   * @author Sean Owen
   */var InvertedLuminanceSource=/** @class */function(_super){__extends$c(InvertedLuminanceSource,_super);function InvertedLuminanceSource(delegate){var _this=_super.call(this,delegate.getWidth(),delegate.getHeight())||this;_this.delegate=delegate;return _this;}/*@Override*/InvertedLuminanceSource.prototype.getRow=function(y/*int*/,row){var sourceRow=this.delegate.getRow(y,row);var width=this.getWidth();for(var i=0;i<width;i++){sourceRow[i]=/*(byte)*/255-(sourceRow[i]&0xFF);}return sourceRow;};/*@Override*/InvertedLuminanceSource.prototype.getMatrix=function(){var matrix=this.delegate.getMatrix();var length=this.getWidth()*this.getHeight();var invertedMatrix=new Uint8ClampedArray(length);for(var i=0;i<length;i++){invertedMatrix[i]=/*(byte)*/255-(matrix[i]&0xFF);}return invertedMatrix;};/*@Override*/InvertedLuminanceSource.prototype.isCropSupported=function(){return this.delegate.isCropSupported();};/*@Override*/InvertedLuminanceSource.prototype.crop=function(left/*int*/,top/*int*/,width/*int*/,height/*int*/){return new InvertedLuminanceSource(this.delegate.crop(left,top,width,height));};/*@Override*/InvertedLuminanceSource.prototype.isRotateSupported=function(){return this.delegate.isRotateSupported();};/**
       * @return original delegate {@link LuminanceSource} since invert undoes itself
       */ /*@Override*/InvertedLuminanceSource.prototype.invert=function(){return this.delegate;};/*@Override*/InvertedLuminanceSource.prototype.rotateCounterClockwise=function(){return new InvertedLuminanceSource(this.delegate.rotateCounterClockwise());};/*@Override*/InvertedLuminanceSource.prototype.rotateCounterClockwise45=function(){return new InvertedLuminanceSource(this.delegate.rotateCounterClockwise45());};return InvertedLuminanceSource;}(LuminanceSource);var __extends$d=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * @deprecated Moving to @zxing/browser
   */var HTMLCanvasElementLuminanceSource=/** @class */function(_super){__extends$d(HTMLCanvasElementLuminanceSource,_super);function HTMLCanvasElementLuminanceSource(canvas){var _this=_super.call(this,canvas.width,canvas.height)||this;_this.canvas=canvas;_this.tempCanvasElement=null;_this.buffer=HTMLCanvasElementLuminanceSource.makeBufferFromCanvasImageData(canvas);return _this;}HTMLCanvasElementLuminanceSource.makeBufferFromCanvasImageData=function(canvas){var imageData=canvas.getContext('2d').getImageData(0,0,canvas.width,canvas.height);return HTMLCanvasElementLuminanceSource.toGrayscaleBuffer(imageData.data,canvas.width,canvas.height);};HTMLCanvasElementLuminanceSource.toGrayscaleBuffer=function(imageBuffer,width,height){var grayscaleBuffer=new Uint8ClampedArray(width*height);for(var i=0,j=0,length_1=imageBuffer.length;i<length_1;i+=4,j++){var gray=void 0;var alpha=imageBuffer[i+3];// The color of fully-transparent pixels is irrelevant. They are often, technically, fully-transparent
// black (0 alpha, and then 0 RGB). They are often used, of course as the "white" area in a
// barcode image. Force any such pixel to be white:
if(alpha===0){gray=0xFF;}else{var pixelR=imageBuffer[i];var pixelG=imageBuffer[i+1];var pixelB=imageBuffer[i+2];// .299R + 0.587G + 0.114B (YUV/YIQ for PAL and NTSC),
// (306*R) >> 10 is approximately equal to R*0.299, and so on.
// 0x200 >> 10 is 0.5, it implements rounding.
gray=306*pixelR+601*pixelG+117*pixelB+0x200>>10;}grayscaleBuffer[j]=gray;}return grayscaleBuffer;};HTMLCanvasElementLuminanceSource.prototype.getRow=function(y/*int*/,row){if(y<0||y>=this.getHeight()){throw new IllegalArgumentException('Requested row is outside the image: '+y);}var width=this.getWidth();var start=y*width;if(row===null){row=this.buffer.slice(start,start+width);}else{if(row.length<width){row=new Uint8ClampedArray(width);}// The underlying raster of image consists of bytes with the luminance values
// TODO: can avoid set/slice?
row.set(this.buffer.slice(start,start+width));}return row;};HTMLCanvasElementLuminanceSource.prototype.getMatrix=function(){return this.buffer;};HTMLCanvasElementLuminanceSource.prototype.isCropSupported=function(){return true;};HTMLCanvasElementLuminanceSource.prototype.crop=function(left/*int*/,top/*int*/,width/*int*/,height/*int*/){_super.prototype.crop.call(this,left,top,width,height);return this;};/**
       * This is always true, since the image is a gray-scale image.
       *
       * @return true
       */HTMLCanvasElementLuminanceSource.prototype.isRotateSupported=function(){return true;};HTMLCanvasElementLuminanceSource.prototype.rotateCounterClockwise=function(){this.rotate(-90);return this;};HTMLCanvasElementLuminanceSource.prototype.rotateCounterClockwise45=function(){this.rotate(-45);return this;};HTMLCanvasElementLuminanceSource.prototype.getTempCanvasElement=function(){if(null===this.tempCanvasElement){var tempCanvasElement=this.canvas.ownerDocument.createElement('canvas');tempCanvasElement.width=this.canvas.width;tempCanvasElement.height=this.canvas.height;this.tempCanvasElement=tempCanvasElement;}return this.tempCanvasElement;};HTMLCanvasElementLuminanceSource.prototype.rotate=function(angle){var tempCanvasElement=this.getTempCanvasElement();var tempContext=tempCanvasElement.getContext('2d');var angleRadians=angle*HTMLCanvasElementLuminanceSource.DEGREE_TO_RADIANS;// Calculate and set new dimensions for temp canvas
var width=this.canvas.width;var height=this.canvas.height;var newWidth=Math.ceil(Math.abs(Math.cos(angleRadians))*width+Math.abs(Math.sin(angleRadians))*height);var newHeight=Math.ceil(Math.abs(Math.sin(angleRadians))*width+Math.abs(Math.cos(angleRadians))*height);tempCanvasElement.width=newWidth;tempCanvasElement.height=newHeight;// Draw at center of temp canvas to prevent clipping of image data
tempContext.translate(newWidth/2,newHeight/2);tempContext.rotate(angleRadians);tempContext.drawImage(this.canvas,width/-2,height/-2);this.buffer=HTMLCanvasElementLuminanceSource.makeBufferFromCanvasImageData(tempCanvasElement);return this;};HTMLCanvasElementLuminanceSource.prototype.invert=function(){return new InvertedLuminanceSource(this);};HTMLCanvasElementLuminanceSource.DEGREE_TO_RADIANS=Math.PI/180;return HTMLCanvasElementLuminanceSource;}(LuminanceSource);/**
   * @deprecated Moving to @zxing/browser
   *
   * Video input device metadata containing the id and label of the device if available.
   */var VideoInputDevice=/** @class */function(){/**
       * Creates an instance of VideoInputDevice.
       *
       * @param {string} deviceId the video input device id
       * @param {string} label the label of the device if available
       */function VideoInputDevice(deviceId,label,groupId){this.deviceId=deviceId;this.label=label;/** @inheritdoc */this.kind='videoinput';this.groupId=groupId||undefined;}/** @inheritdoc */VideoInputDevice.prototype.toJSON=function(){return{kind:this.kind,groupId:this.groupId,deviceId:this.deviceId,label:this.label};};return VideoInputDevice;}();var __awaiter=undefined&&undefined.__awaiter||function(thisArg,_arguments,P,generator){function adopt(value){return value instanceof P?value:new P(function(resolve){resolve(value);});}return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):adopt(result.value).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});};var __generator=undefined&&undefined.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}};var __values$2=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};/**
   * @deprecated Moving to @zxing/browser
   *
   * Base class for browser code reader.
   */var BrowserCodeReader=/** @class */function(){/**
       * Creates an instance of BrowserCodeReader.
       * @param {Reader} reader The reader instance to decode the barcode
       * @param {number} [timeBetweenScansMillis=500] the time delay between subsequent successful decode tries
       *
       * @memberOf BrowserCodeReader
       */function BrowserCodeReader(reader,timeBetweenScansMillis,_hints){if(timeBetweenScansMillis===void 0){timeBetweenScansMillis=500;}this.reader=reader;this.timeBetweenScansMillis=timeBetweenScansMillis;this._hints=_hints;/**
           * This will break the loop.
           */this._stopContinuousDecode=false;/**
           * This will break the loop.
           */this._stopAsyncDecode=false;/**
           * Delay time between decode attempts made by the scanner.
           */this._timeBetweenDecodingAttempts=0;}Object.defineProperty(BrowserCodeReader.prototype,"hasNavigator",{/**
           * If navigator is present.
           */get:function(){return typeof navigator!=='undefined';},enumerable:false,configurable:true});Object.defineProperty(BrowserCodeReader.prototype,"isMediaDevicesSuported",{/**
           * If mediaDevices under navigator is supported.
           */get:function(){return this.hasNavigator&&!!navigator.mediaDevices;},enumerable:false,configurable:true});Object.defineProperty(BrowserCodeReader.prototype,"canEnumerateDevices",{/**
           * If enumerateDevices under navigator is supported.
           */get:function(){return!!(this.isMediaDevicesSuported&&navigator.mediaDevices.enumerateDevices);},enumerable:false,configurable:true});Object.defineProperty(BrowserCodeReader.prototype,"timeBetweenDecodingAttempts",{/** Time between two decoding tries in milli seconds. */get:function(){return this._timeBetweenDecodingAttempts;},/**
           * Change the time span the decoder waits between two decoding tries.
           *
           * @param {number} millis Time between two decoding tries in milli seconds.
           */set:function(millis){this._timeBetweenDecodingAttempts=millis<0?0:millis;},enumerable:false,configurable:true});Object.defineProperty(BrowserCodeReader.prototype,"hints",{/**
           * Sets the hints.
           */get:function(){return this._hints;},/**
           * Sets the hints.
           */set:function(hints){this._hints=hints||null;},enumerable:false,configurable:true});/**
       * Lists all the available video input devices.
       */BrowserCodeReader.prototype.listVideoInputDevices=function(){return __awaiter(this,void 0,void 0,function(){var devices,videoDevices,devices_1,devices_1_1,device,kind,deviceId,label,groupId,videoDevice;var e_1,_a;return __generator(this,function(_b){switch(_b.label){case 0:if(!this.hasNavigator){throw new Error('Can\'t enumerate devices, navigator is not present.');}if(!this.canEnumerateDevices){throw new Error('Can\'t enumerate devices, method not supported.');}return[4/*yield*/,navigator.mediaDevices.enumerateDevices()];case 1:devices=_b.sent();videoDevices=[];try{for(devices_1=__values$2(devices),devices_1_1=devices_1.next();!devices_1_1.done;devices_1_1=devices_1.next()){device=devices_1_1.value;kind=device.kind==='video'?'videoinput':device.kind;if(kind!=='videoinput'){continue;}deviceId=device.deviceId||device.id;label=device.label||"Video device "+(videoDevices.length+1);groupId=device.groupId;videoDevice={deviceId:deviceId,label:label,kind:kind,groupId:groupId};videoDevices.push(videoDevice);}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(devices_1_1&&!devices_1_1.done&&(_a=devices_1.return))_a.call(devices_1);}finally{if(e_1)throw e_1.error;}}return[2/*return*/,videoDevices];}});});};/**
       * Obtain the list of available devices with type 'videoinput'.
       *
       * @returns {Promise<VideoInputDevice[]>} an array of available video input devices
       *
       * @memberOf BrowserCodeReader
       *
       * @deprecated Use `listVideoInputDevices` instead.
       */BrowserCodeReader.prototype.getVideoInputDevices=function(){return __awaiter(this,void 0,void 0,function(){var devices;return __generator(this,function(_a){switch(_a.label){case 0:return[4/*yield*/,this.listVideoInputDevices()];case 1:devices=_a.sent();return[2/*return*/,devices.map(function(d){return new VideoInputDevice(d.deviceId,d.label);})];}});});};/**
       * Let's you find a device using it's Id.
       */BrowserCodeReader.prototype.findDeviceById=function(deviceId){return __awaiter(this,void 0,void 0,function(){var devices;return __generator(this,function(_a){switch(_a.label){case 0:return[4/*yield*/,this.listVideoInputDevices()];case 1:devices=_a.sent();if(!devices){return[2/*return*/,null];}return[2/*return*/,devices.find(function(x){return x.deviceId===deviceId;})];}});});};/**
       * Decodes the barcode from the device specified by deviceId while showing the video in the specified video element.
       *
       * @param deviceId the id of one of the devices obtained after calling getVideoInputDevices. Can be undefined, in this case it will decode from one of the available devices, preffering the main camera (environment facing) if available.
       * @param video the video element in page where to show the video while decoding. Can be either an element id or directly an HTMLVideoElement. Can be undefined, in which case no video will be shown.
       * @returns The decoding result.
       *
       * @memberOf BrowserCodeReader
       *
       * @deprecated Use `decodeOnceFromVideoDevice` instead.
       */BrowserCodeReader.prototype.decodeFromInputVideoDevice=function(deviceId,videoSource){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){switch(_a.label){case 0:return[4/*yield*/,this.decodeOnceFromVideoDevice(deviceId,videoSource)];case 1:return[2/*return*/,_a.sent()];}});});};/**
       * In one attempt, tries to decode the barcode from the device specified by deviceId while showing the video in the specified video element.
       *
       * @param deviceId the id of one of the devices obtained after calling getVideoInputDevices. Can be undefined, in this case it will decode from one of the available devices, preffering the main camera (environment facing) if available.
       * @param video the video element in page where to show the video while decoding. Can be either an element id or directly an HTMLVideoElement. Can be undefined, in which case no video will be shown.
       * @returns The decoding result.
       *
       * @memberOf BrowserCodeReader
       */BrowserCodeReader.prototype.decodeOnceFromVideoDevice=function(deviceId,videoSource){return __awaiter(this,void 0,void 0,function(){var videoConstraints,constraints;return __generator(this,function(_a){switch(_a.label){case 0:this.reset();if(!deviceId){videoConstraints={facingMode:'environment'};}else{videoConstraints={deviceId:{exact:deviceId}};}constraints={video:videoConstraints};return[4/*yield*/,this.decodeOnceFromConstraints(constraints,videoSource)];case 1:return[2/*return*/,_a.sent()];}});});};/**
       * In one attempt, tries to decode the barcode from a stream obtained from the given constraints while showing the video in the specified video element.
       *
       * @param constraints the media stream constraints to get s valid media stream to decode from
       * @param video the video element in page where to show the video while decoding. Can be either an element id or directly an HTMLVideoElement. Can be undefined, in which case no video will be shown.
       * @returns The decoding result.
       *
       * @memberOf BrowserCodeReader
       */BrowserCodeReader.prototype.decodeOnceFromConstraints=function(constraints,videoSource){return __awaiter(this,void 0,void 0,function(){var stream;return __generator(this,function(_a){switch(_a.label){case 0:return[4/*yield*/,navigator.mediaDevices.getUserMedia(constraints)];case 1:stream=_a.sent();return[4/*yield*/,this.decodeOnceFromStream(stream,videoSource)];case 2:return[2/*return*/,_a.sent()];}});});};/**
       * In one attempt, tries to decode the barcode from a stream obtained from the given constraints while showing the video in the specified video element.
       *
       * @param {MediaStream} [constraints] the media stream constraints to get s valid media stream to decode from
       * @param {string|HTMLVideoElement} [video] the video element in page where to show the video while decoding. Can be either an element id or directly an HTMLVideoElement. Can be undefined, in which case no video will be shown.
       * @returns {Promise<Result>} The decoding result.
       *
       * @memberOf BrowserCodeReader
       */BrowserCodeReader.prototype.decodeOnceFromStream=function(stream,videoSource){return __awaiter(this,void 0,void 0,function(){var video,result;return __generator(this,function(_a){switch(_a.label){case 0:this.reset();return[4/*yield*/,this.attachStreamToVideo(stream,videoSource)];case 1:video=_a.sent();return[4/*yield*/,this.decodeOnce(video)];case 2:result=_a.sent();return[2/*return*/,result];}});});};/**
       * Continuously decodes the barcode from the device specified by device while showing the video in the specified video element.
       *
       * @param {string|null} [deviceId] the id of one of the devices obtained after calling getVideoInputDevices. Can be undefined, in this case it will decode from one of the available devices, preffering the main camera (environment facing) if available.
       * @param {string|HTMLVideoElement|null} [video] the video element in page where to show the video while decoding. Can be either an element id or directly an HTMLVideoElement. Can be undefined, in which case no video will be shown.
       * @returns {Promise<void>}
       *
       * @memberOf BrowserCodeReader
       *
       * @deprecated Use `decodeFromVideoDevice` instead.
       */BrowserCodeReader.prototype.decodeFromInputVideoDeviceContinuously=function(deviceId,videoSource,callbackFn){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){switch(_a.label){case 0:return[4/*yield*/,this.decodeFromVideoDevice(deviceId,videoSource,callbackFn)];case 1:return[2/*return*/,_a.sent()];}});});};/**
       * Continuously tries to decode the barcode from the device specified by device while showing the video in the specified video element.
       *
       * @param {string|null} [deviceId] the id of one of the devices obtained after calling getVideoInputDevices. Can be undefined, in this case it will decode from one of the available devices, preffering the main camera (environment facing) if available.
       * @param {string|HTMLVideoElement|null} [video] the video element in page where to show the video while decoding. Can be either an element id or directly an HTMLVideoElement. Can be undefined, in which case no video will be shown.
       * @returns {Promise<void>}
       *
       * @memberOf BrowserCodeReader
       */BrowserCodeReader.prototype.decodeFromVideoDevice=function(deviceId,videoSource,callbackFn){return __awaiter(this,void 0,void 0,function(){var videoConstraints,constraints;return __generator(this,function(_a){switch(_a.label){case 0:if(!deviceId){videoConstraints={facingMode:'environment'};}else{videoConstraints={deviceId:{exact:deviceId}};}constraints={video:videoConstraints};return[4/*yield*/,this.decodeFromConstraints(constraints,videoSource,callbackFn)];case 1:return[2/*return*/,_a.sent()];}});});};/**
       * Continuously tries to decode the barcode from a stream obtained from the given constraints while showing the video in the specified video element.
       *
       * @param {MediaStream} [constraints] the media stream constraints to get s valid media stream to decode from
       * @param {string|HTMLVideoElement} [video] the video element in page where to show the video while decoding. Can be either an element id or directly an HTMLVideoElement. Can be undefined, in which case no video will be shown.
       * @returns {Promise<Result>} The decoding result.
       *
       * @memberOf BrowserCodeReader
       */BrowserCodeReader.prototype.decodeFromConstraints=function(constraints,videoSource,callbackFn){return __awaiter(this,void 0,void 0,function(){var stream;return __generator(this,function(_a){switch(_a.label){case 0:return[4/*yield*/,navigator.mediaDevices.getUserMedia(constraints)];case 1:stream=_a.sent();return[4/*yield*/,this.decodeFromStream(stream,videoSource,callbackFn)];case 2:return[2/*return*/,_a.sent()];}});});};/**
       * In one attempt, tries to decode the barcode from a stream obtained from the given constraints while showing the video in the specified video element.
       *
       * @param {MediaStream} [constraints] the media stream constraints to get s valid media stream to decode from
       * @param {string|HTMLVideoElement} [video] the video element in page where to show the video while decoding. Can be either an element id or directly an HTMLVideoElement. Can be undefined, in which case no video will be shown.
       * @returns {Promise<Result>} The decoding result.
       *
       * @memberOf BrowserCodeReader
       */BrowserCodeReader.prototype.decodeFromStream=function(stream,videoSource,callbackFn){return __awaiter(this,void 0,void 0,function(){var video;return __generator(this,function(_a){switch(_a.label){case 0:this.reset();return[4/*yield*/,this.attachStreamToVideo(stream,videoSource)];case 1:video=_a.sent();return[4/*yield*/,this.decodeContinuously(video,callbackFn)];case 2:return[2/*return*/,_a.sent()];}});});};/**
       * Breaks the decoding loop.
       */BrowserCodeReader.prototype.stopAsyncDecode=function(){this._stopAsyncDecode=true;};/**
       * Breaks the decoding loop.
       */BrowserCodeReader.prototype.stopContinuousDecode=function(){this._stopContinuousDecode=true;};/**
       * Sets the new stream and request a new decoding-with-delay.
       *
       * @param stream The stream to be shown in the video element.
       * @param decodeFn A callback for the decode method.
       */BrowserCodeReader.prototype.attachStreamToVideo=function(stream,videoSource){return __awaiter(this,void 0,void 0,function(){var videoElement;return __generator(this,function(_a){switch(_a.label){case 0:videoElement=this.prepareVideoElement(videoSource);this.addVideoSource(videoElement,stream);this.videoElement=videoElement;this.stream=stream;return[4/*yield*/,this.playVideoOnLoadAsync(videoElement)];case 1:_a.sent();return[2/*return*/,videoElement];}});});};/**
       *
       * @param videoElement
       */BrowserCodeReader.prototype.playVideoOnLoadAsync=function(videoElement){var _this=this;return new Promise(function(resolve,reject){return _this.playVideoOnLoad(videoElement,function(){return resolve();});});};/**
       * Binds listeners and callbacks to the videoElement.
       *
       * @param element
       * @param callbackFn
       */BrowserCodeReader.prototype.playVideoOnLoad=function(element,callbackFn){var _this=this;this.videoEndedListener=function(){return _this.stopStreams();};this.videoCanPlayListener=function(){return _this.tryPlayVideo(element);};element.addEventListener('ended',this.videoEndedListener);element.addEventListener('canplay',this.videoCanPlayListener);element.addEventListener('playing',callbackFn);// if canplay was already fired, we won't know when to play, so just give it a try
this.tryPlayVideo(element);};/**
       * Checks if the given video element is currently playing.
       */BrowserCodeReader.prototype.isVideoPlaying=function(video){return video.currentTime>0&&!video.paused&&!video.ended&&video.readyState>2;};/**
       * Just tries to play the video and logs any errors.
       * The play call is only made is the video is not already playing.
       */BrowserCodeReader.prototype.tryPlayVideo=function(videoElement){return __awaiter(this,void 0,void 0,function(){var _a;return __generator(this,function(_b){switch(_b.label){case 0:if(this.isVideoPlaying(videoElement)){console.warn('Trying to play video that is already playing.');return[2/*return*/];}_b.label=1;case 1:_b.trys.push([1,3,,4]);return[4/*yield*/,videoElement.play()];case 2:_b.sent();return[3/*break*/,4];case 3:_a=_b.sent();console.warn('It was not possible to play the video.');return[3/*break*/,4];case 4:return[2/*return*/];}});});};/**
       * Searches and validates a media element.
       */BrowserCodeReader.prototype.getMediaElement=function(mediaElementId,type){var mediaElement=document.getElementById(mediaElementId);if(!mediaElement){throw new ArgumentException("element with id '"+mediaElementId+"' not found");}if(mediaElement.nodeName.toLowerCase()!==type.toLowerCase()){throw new ArgumentException("element with id '"+mediaElementId+"' must be an "+type+" element");}return mediaElement;};/**
       * Decodes the barcode from an image.
       *
       * @param {(string|HTMLImageElement)} [source] The image element that can be either an element id or the element itself. Can be undefined in which case the decoding will be done from the imageUrl parameter.
       * @param {string} [url]
       * @returns {Promise<Result>} The decoding result.
       *
       * @memberOf BrowserCodeReader
       */BrowserCodeReader.prototype.decodeFromImage=function(source,url){if(!source&&!url){throw new ArgumentException('either imageElement with a src set or an url must be provided');}if(url&&!source){return this.decodeFromImageUrl(url);}return this.decodeFromImageElement(source);};/**
       * Decodes the barcode from a video.
       *
       * @param {(string|HTMLImageElement)} [source] The image element that can be either an element id or the element itself. Can be undefined in which case the decoding will be done from the imageUrl parameter.
       * @param {string} [url]
       * @returns {Promise<Result>} The decoding result.
       *
       * @memberOf BrowserCodeReader
       */BrowserCodeReader.prototype.decodeFromVideo=function(source,url){if(!source&&!url){throw new ArgumentException('Either an element with a src set or an URL must be provided');}if(url&&!source){return this.decodeFromVideoUrl(url);}return this.decodeFromVideoElement(source);};/**
       * Decodes continuously the barcode from a video.
       *
       * @param {(string|HTMLImageElement)} [source] The image element that can be either an element id or the element itself. Can be undefined in which case the decoding will be done from the imageUrl parameter.
       * @param {string} [url]
       * @returns {Promise<Result>} The decoding result.
       *
       * @memberOf BrowserCodeReader
       *
       * @experimental
       */BrowserCodeReader.prototype.decodeFromVideoContinuously=function(source,url,callbackFn){if(undefined===source&&undefined===url){throw new ArgumentException('Either an element with a src set or an URL must be provided');}if(url&&!source){return this.decodeFromVideoUrlContinuously(url,callbackFn);}return this.decodeFromVideoElementContinuously(source,callbackFn);};/**
       * Decodes something from an image HTML element.
       */BrowserCodeReader.prototype.decodeFromImageElement=function(source){if(!source){throw new ArgumentException('An image element must be provided.');}this.reset();var element=this.prepareImageElement(source);this.imageElement=element;var task;if(this.isImageLoaded(element)){task=this.decodeOnce(element,false,true);}else{task=this._decodeOnLoadImage(element);}return task;};/**
       * Decodes something from an image HTML element.
       */BrowserCodeReader.prototype.decodeFromVideoElement=function(source){var element=this._decodeFromVideoElementSetup(source);return this._decodeOnLoadVideo(element);};/**
       * Decodes something from an image HTML element.
       */BrowserCodeReader.prototype.decodeFromVideoElementContinuously=function(source,callbackFn){var element=this._decodeFromVideoElementSetup(source);return this._decodeOnLoadVideoContinuously(element,callbackFn);};/**
       * Sets up the video source so it can be decoded when loaded.
       *
       * @param source The video source element.
       */BrowserCodeReader.prototype._decodeFromVideoElementSetup=function(source){if(!source){throw new ArgumentException('A video element must be provided.');}this.reset();var element=this.prepareVideoElement(source);// defines the video element before starts decoding
this.videoElement=element;return element;};/**
       * Decodes an image from a URL.
       */BrowserCodeReader.prototype.decodeFromImageUrl=function(url){if(!url){throw new ArgumentException('An URL must be provided.');}this.reset();var element=this.prepareImageElement();this.imageElement=element;var decodeTask=this._decodeOnLoadImage(element);element.src=url;return decodeTask;};/**
       * Decodes an image from a URL.
       */BrowserCodeReader.prototype.decodeFromVideoUrl=function(url){if(!url){throw new ArgumentException('An URL must be provided.');}this.reset();// creates a new element
var element=this.prepareVideoElement();var decodeTask=this.decodeFromVideoElement(element);element.src=url;return decodeTask;};/**
       * Decodes an image from a URL.
       *
       * @experimental
       */BrowserCodeReader.prototype.decodeFromVideoUrlContinuously=function(url,callbackFn){if(!url){throw new ArgumentException('An URL must be provided.');}this.reset();// creates a new element
var element=this.prepareVideoElement();var decodeTask=this.decodeFromVideoElementContinuously(element,callbackFn);element.src=url;return decodeTask;};BrowserCodeReader.prototype._decodeOnLoadImage=function(element){var _this=this;return new Promise(function(resolve,reject){_this.imageLoadedListener=function(){return _this.decodeOnce(element,false,true).then(resolve,reject);};element.addEventListener('load',_this.imageLoadedListener);});};BrowserCodeReader.prototype._decodeOnLoadVideo=function(videoElement){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){switch(_a.label){case 0:// plays the video
return[4/*yield*/,this.playVideoOnLoadAsync(videoElement)];case 1:// plays the video
_a.sent();return[4/*yield*/,this.decodeOnce(videoElement)];case 2:// starts decoding after played the video
return[2/*return*/,_a.sent()];}});});};BrowserCodeReader.prototype._decodeOnLoadVideoContinuously=function(videoElement,callbackFn){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){switch(_a.label){case 0:// plays the video
return[4/*yield*/,this.playVideoOnLoadAsync(videoElement)];case 1:// plays the video
_a.sent();// starts decoding after played the video
this.decodeContinuously(videoElement,callbackFn);return[2/*return*/];}});});};BrowserCodeReader.prototype.isImageLoaded=function(img){// During the onload event, IE correctly identifies any images that
// weren’t downloaded as not complete. Others should too. Gecko-based
// browsers act like NS4 in that they report this incorrectly.
if(!img.complete){return false;}// However, they do have two very useful properties: naturalWidth and
// naturalHeight. These give the true size of the image. If it failed
// to load, either of these should be zero.
if(img.naturalWidth===0){return false;}// No other way of checking: assume it’s ok.
return true;};BrowserCodeReader.prototype.prepareImageElement=function(imageSource){var imageElement;if(typeof imageSource==='undefined'){imageElement=document.createElement('img');imageElement.width=200;imageElement.height=200;}if(typeof imageSource==='string'){imageElement=this.getMediaElement(imageSource,'img');}if(imageSource instanceof HTMLImageElement){imageElement=imageSource;}return imageElement;};/**
       * Sets a HTMLVideoElement for scanning or creates a new one.
       *
       * @param videoSource The HTMLVideoElement to be set.
       */BrowserCodeReader.prototype.prepareVideoElement=function(videoSource){var videoElement;if(!videoSource&&typeof document!=='undefined'){videoElement=document.createElement('video');videoElement.width=200;videoElement.height=200;}if(typeof videoSource==='string'){videoElement=this.getMediaElement(videoSource,'video');}if(videoSource instanceof HTMLVideoElement){videoElement=videoSource;}// Needed for iOS 11
videoElement.setAttribute('autoplay','true');videoElement.setAttribute('muted','true');videoElement.setAttribute('playsinline','true');return videoElement;};/**
       * Tries to decode from the video input until it finds some value.
       */BrowserCodeReader.prototype.decodeOnce=function(element,retryIfNotFound,retryIfChecksumOrFormatError){var _this=this;if(retryIfNotFound===void 0){retryIfNotFound=true;}if(retryIfChecksumOrFormatError===void 0){retryIfChecksumOrFormatError=true;}this._stopAsyncDecode=false;var loop=function(resolve,reject){if(_this._stopAsyncDecode){reject(new NotFoundException('Video stream has ended before any code could be detected.'));_this._stopAsyncDecode=undefined;return;}try{var result=_this.decode(element);resolve(result);}catch(e){var ifNotFound=retryIfNotFound&&e instanceof NotFoundException;var isChecksumOrFormatError=e instanceof ChecksumException||e instanceof FormatException;var ifChecksumOrFormat=isChecksumOrFormatError&&retryIfChecksumOrFormatError;if(ifNotFound||ifChecksumOrFormat){// trying again
return setTimeout(loop,_this._timeBetweenDecodingAttempts,resolve,reject);}reject(e);}};return new Promise(function(resolve,reject){return loop(resolve,reject);});};/**
       * Continuously decodes from video input.
       */BrowserCodeReader.prototype.decodeContinuously=function(element,callbackFn){var _this=this;this._stopContinuousDecode=false;var loop=function(){if(_this._stopContinuousDecode){_this._stopContinuousDecode=undefined;return;}try{var result=_this.decode(element);callbackFn(result,null);setTimeout(loop,_this.timeBetweenScansMillis);}catch(e){callbackFn(null,e);var isChecksumOrFormatError=e instanceof ChecksumException||e instanceof FormatException;var isNotFound=e instanceof NotFoundException;if(isChecksumOrFormatError||isNotFound){// trying again
setTimeout(loop,_this._timeBetweenDecodingAttempts);}}};loop();};/**
       * Gets the BinaryBitmap for ya! (and decodes it)
       */BrowserCodeReader.prototype.decode=function(element){// get binary bitmap for decode function
var binaryBitmap=this.createBinaryBitmap(element);return this.decodeBitmap(binaryBitmap);};/**
       * Creates a binaryBitmap based in some image source.
       *
       * @param mediaElement HTML element containing drawable image source.
       */BrowserCodeReader.prototype.createBinaryBitmap=function(mediaElement){var ctx=this.getCaptureCanvasContext(mediaElement);this.drawImageOnCanvas(ctx,mediaElement);var canvas=this.getCaptureCanvas(mediaElement);var luminanceSource=new HTMLCanvasElementLuminanceSource(canvas);var hybridBinarizer=new HybridBinarizer(luminanceSource);return new BinaryBitmap(hybridBinarizer);};/**
       *
       */BrowserCodeReader.prototype.getCaptureCanvasContext=function(mediaElement){if(!this.captureCanvasContext){var elem=this.getCaptureCanvas(mediaElement);var ctx=elem.getContext('2d');this.captureCanvasContext=ctx;}return this.captureCanvasContext;};/**
       *
       */BrowserCodeReader.prototype.getCaptureCanvas=function(mediaElement){if(!this.captureCanvas){var elem=this.createCaptureCanvas(mediaElement);this.captureCanvas=elem;}return this.captureCanvas;};/**
       * Ovewriting this allows you to manipulate the snapshot image in anyway you want before decode.
       */BrowserCodeReader.prototype.drawImageOnCanvas=function(canvasElementContext,srcElement){canvasElementContext.drawImage(srcElement,0,0);};/**
       * Call the encapsulated readers decode
       */BrowserCodeReader.prototype.decodeBitmap=function(binaryBitmap){return this.reader.decode(binaryBitmap,this._hints);};/**
       * 🖌 Prepares the canvas for capture and scan frames.
       */BrowserCodeReader.prototype.createCaptureCanvas=function(mediaElement){if(typeof document==='undefined'){this._destroyCaptureCanvas();return null;}var canvasElement=document.createElement('canvas');var width;var height;if(typeof mediaElement!=='undefined'){if(mediaElement instanceof HTMLVideoElement){width=mediaElement.videoWidth;height=mediaElement.videoHeight;}else if(mediaElement instanceof HTMLImageElement){width=mediaElement.naturalWidth||mediaElement.width;height=mediaElement.naturalHeight||mediaElement.height;}}canvasElement.style.width=width+'px';canvasElement.style.height=height+'px';canvasElement.width=width;canvasElement.height=height;return canvasElement;};/**
       * Stops the continuous scan and cleans the stream.
       */BrowserCodeReader.prototype.stopStreams=function(){if(this.stream){this.stream.getVideoTracks().forEach(function(t){return t.stop();});this.stream=undefined;}if(this._stopAsyncDecode===false){this.stopAsyncDecode();}if(this._stopContinuousDecode===false){this.stopContinuousDecode();}};/**
       * Resets the code reader to the initial state. Cancels any ongoing barcode scanning from video or camera.
       *
       * @memberOf BrowserCodeReader
       */BrowserCodeReader.prototype.reset=function(){// stops the camera, preview and scan 🔴
this.stopStreams();// clean and forget about HTML elements
this._destroyVideoElement();this._destroyImageElement();this._destroyCaptureCanvas();};BrowserCodeReader.prototype._destroyVideoElement=function(){if(!this.videoElement){return;}// first gives freedon to the element 🕊
if(typeof this.videoEndedListener!=='undefined'){this.videoElement.removeEventListener('ended',this.videoEndedListener);}if(typeof this.videoPlayingEventListener!=='undefined'){this.videoElement.removeEventListener('playing',this.videoPlayingEventListener);}if(typeof this.videoCanPlayListener!=='undefined'){this.videoElement.removeEventListener('loadedmetadata',this.videoCanPlayListener);}// then forgets about that element 😢
this.cleanVideoSource(this.videoElement);this.videoElement=undefined;};BrowserCodeReader.prototype._destroyImageElement=function(){if(!this.imageElement){return;}// first gives freedon to the element 🕊
if(undefined!==this.imageLoadedListener){this.imageElement.removeEventListener('load',this.imageLoadedListener);}// then forget about that element 😢
this.imageElement.src=undefined;this.imageElement.removeAttribute('src');this.imageElement=undefined;};/**
       * Cleans canvas references 🖌
       */BrowserCodeReader.prototype._destroyCaptureCanvas=function(){// then forget about that element 😢
this.captureCanvasContext=undefined;this.captureCanvas=undefined;};/**
       * Defines what the videoElement src will be.
       *
       * @param videoElement
       * @param stream
       */BrowserCodeReader.prototype.addVideoSource=function(videoElement,stream){// Older browsers may not have `srcObject`
try{// @note Throws Exception if interrupted by a new loaded request
videoElement.srcObject=stream;}catch(err){// @note Avoid using this in new browsers, as it is going away.
videoElement.src=URL.createObjectURL(stream);}};/**
       * Unbinds a HTML video src property.
       *
       * @param videoElement
       */BrowserCodeReader.prototype.cleanVideoSource=function(videoElement){try{videoElement.srcObject=null;}catch(err){videoElement.src='';}this.videoElement.removeAttribute('src');};return BrowserCodeReader;}();/*
   * Copyright 2007 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /**
   * <p>Encapsulates the result of decoding a barcode within an image.</p>
   *
   * @author Sean Owen
   */var Result=/** @class */function(){// public constructor(private text: string,
//               Uint8Array rawBytes,
//               ResultPoconst resultPoints: Int32Array,
//               BarcodeFormat format) {
//   this(text, rawBytes, resultPoints, format, System.currentTimeMillis())
// }
// public constructor(text: string,
//               Uint8Array rawBytes,
//               ResultPoconst resultPoints: Int32Array,
//               BarcodeFormat format,
//               long timestamp) {
//   this(text, rawBytes, rawBytes == null ? 0 : 8 * rawBytes.length,
//        resultPoints, format, timestamp)
// }
function Result(text,rawBytes,numBits,resultPoints,format,timestamp){if(numBits===void 0){numBits=rawBytes==null?0:8*rawBytes.length;}if(timestamp===void 0){timestamp=System.currentTimeMillis();}this.text=text;this.rawBytes=rawBytes;this.numBits=numBits;this.resultPoints=resultPoints;this.format=format;this.timestamp=timestamp;this.text=text;this.rawBytes=rawBytes;if(undefined===numBits||null===numBits){this.numBits=rawBytes===null||rawBytes===undefined?0:8*rawBytes.length;}else{this.numBits=numBits;}this.resultPoints=resultPoints;this.format=format;this.resultMetadata=null;if(undefined===timestamp||null===timestamp){this.timestamp=System.currentTimeMillis();}else{this.timestamp=timestamp;}}/**
       * @return raw text encoded by the barcode
       */Result.prototype.getText=function(){return this.text;};/**
       * @return raw bytes encoded by the barcode, if applicable, otherwise {@code null}
       */Result.prototype.getRawBytes=function(){return this.rawBytes;};/**
       * @return how many bits of {@link #getRawBytes()} are valid; typically 8 times its length
       * @since 3.3.0
       */Result.prototype.getNumBits=function(){return this.numBits;};/**
       * @return points related to the barcode in the image. These are typically points
       *         identifying finder patterns or the corners of the barcode. The exact meaning is
       *         specific to the type of barcode that was decoded.
       */Result.prototype.getResultPoints=function(){return this.resultPoints;};/**
       * @return {@link BarcodeFormat} representing the format of the barcode that was decoded
       */Result.prototype.getBarcodeFormat=function(){return this.format;};/**
       * @return {@link Map} mapping {@link ResultMetadataType} keys to values. May be
       *   {@code null}. This contains optional metadata about what was detected about the barcode,
       *   like orientation.
       */Result.prototype.getResultMetadata=function(){return this.resultMetadata;};Result.prototype.putMetadata=function(type,value){if(this.resultMetadata===null){this.resultMetadata=new Map();}this.resultMetadata.set(type,value);};Result.prototype.putAllMetadata=function(metadata){if(metadata!==null){if(this.resultMetadata===null){this.resultMetadata=metadata;}else{this.resultMetadata=new Map(metadata);}}};Result.prototype.addResultPoints=function(newPoints){var oldPoints=this.resultPoints;if(oldPoints===null){this.resultPoints=newPoints;}else if(newPoints!==null&&newPoints.length>0){var allPoints=new Array(oldPoints.length+newPoints.length);System.arraycopy(oldPoints,0,allPoints,0,oldPoints.length);System.arraycopy(newPoints,0,allPoints,oldPoints.length,newPoints.length);this.resultPoints=allPoints;}};Result.prototype.getTimestamp=function(){return this.timestamp;};/*@Override*/Result.prototype.toString=function(){return this.text;};return Result;}();/*
   * Direct port to TypeScript of ZXing by Adrian Toșcă
   */ /*
   * Copyright 2009 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /*namespace com.google.zxing {*/ /**
   * Enumerates barcode formats known to this package. Please keep alphabetized.
   *
   * @author Sean Owen
   */var BarcodeFormat;(function(BarcodeFormat){/** Aztec 2D barcode format. */BarcodeFormat[BarcodeFormat["AZTEC"]=0]="AZTEC";/** CODABAR 1D format. */BarcodeFormat[BarcodeFormat["CODABAR"]=1]="CODABAR";/** Code 39 1D format. */BarcodeFormat[BarcodeFormat["CODE_39"]=2]="CODE_39";/** Code 93 1D format. */BarcodeFormat[BarcodeFormat["CODE_93"]=3]="CODE_93";/** Code 128 1D format. */BarcodeFormat[BarcodeFormat["CODE_128"]=4]="CODE_128";/** Data Matrix 2D barcode format. */BarcodeFormat[BarcodeFormat["DATA_MATRIX"]=5]="DATA_MATRIX";/** EAN-8 1D format. */BarcodeFormat[BarcodeFormat["EAN_8"]=6]="EAN_8";/** EAN-13 1D format. */BarcodeFormat[BarcodeFormat["EAN_13"]=7]="EAN_13";/** ITF (Interleaved Two of Five) 1D format. */BarcodeFormat[BarcodeFormat["ITF"]=8]="ITF";/** MaxiCode 2D barcode format. */BarcodeFormat[BarcodeFormat["MAXICODE"]=9]="MAXICODE";/** PDF417 format. */BarcodeFormat[BarcodeFormat["PDF_417"]=10]="PDF_417";/** QR Code 2D barcode format. */BarcodeFormat[BarcodeFormat["QR_CODE"]=11]="QR_CODE";/** RSS 14 */BarcodeFormat[BarcodeFormat["RSS_14"]=12]="RSS_14";/** RSS EXPANDED */BarcodeFormat[BarcodeFormat["RSS_EXPANDED"]=13]="RSS_EXPANDED";/** UPC-A 1D format. */BarcodeFormat[BarcodeFormat["UPC_A"]=14]="UPC_A";/** UPC-E 1D format. */BarcodeFormat[BarcodeFormat["UPC_E"]=15]="UPC_E";/** UPC/EAN extension format. Not a stand-alone format. */BarcodeFormat[BarcodeFormat["UPC_EAN_EXTENSION"]=16]="UPC_EAN_EXTENSION";})(BarcodeFormat||(BarcodeFormat={}));var BarcodeFormat$1=BarcodeFormat;/*
   * Copyright 2008 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /*namespace com.google.zxing {*/ /**
   * Represents some type of metadata about the result of the decoding that the decoder
   * wishes to communicate back to the caller.
   *
   * @author Sean Owen
   */var ResultMetadataType;(function(ResultMetadataType){/**
       * Unspecified, application-specific metadata. Maps to an unspecified {@link Object}.
       */ResultMetadataType[ResultMetadataType["OTHER"]=0]="OTHER";/**
       * Denotes the likely approximate orientation of the barcode in the image. This value
       * is given as degrees rotated clockwise from the normal, upright orientation.
       * For example a 1D barcode which was found by reading top-to-bottom would be
       * said to have orientation "90". This key maps to an {@link Integer} whose
       * value is in the range [0,360).
       */ResultMetadataType[ResultMetadataType["ORIENTATION"]=1]="ORIENTATION";/**
       * <p>2D barcode formats typically encode text, but allow for a sort of 'byte mode'
       * which is sometimes used to encode binary data. While {@link Result} makes available
       * the complete raw bytes in the barcode for these formats, it does not offer the bytes
       * from the byte segments alone.</p>
       *
       * <p>This maps to a {@link java.util.List} of byte arrays corresponding to the
       * raw bytes in the byte segments in the barcode, in order.</p>
       */ResultMetadataType[ResultMetadataType["BYTE_SEGMENTS"]=2]="BYTE_SEGMENTS";/**
       * Error correction level used, if applicable. The value type depends on the
       * format, but is typically a String.
       */ResultMetadataType[ResultMetadataType["ERROR_CORRECTION_LEVEL"]=3]="ERROR_CORRECTION_LEVEL";/**
       * For some periodicals, indicates the issue number as an {@link Integer}.
       */ResultMetadataType[ResultMetadataType["ISSUE_NUMBER"]=4]="ISSUE_NUMBER";/**
       * For some products, indicates the suggested retail price in the barcode as a
       * formatted {@link String}.
       */ResultMetadataType[ResultMetadataType["SUGGESTED_PRICE"]=5]="SUGGESTED_PRICE";/**
       * For some products, the possible country of manufacture as a {@link String} denoting the
       * ISO country code. Some map to multiple possible countries, like "US/CA".
       */ResultMetadataType[ResultMetadataType["POSSIBLE_COUNTRY"]=6]="POSSIBLE_COUNTRY";/**
       * For some products, the extension text
       */ResultMetadataType[ResultMetadataType["UPC_EAN_EXTENSION"]=7]="UPC_EAN_EXTENSION";/**
       * PDF417-specific metadata
       */ResultMetadataType[ResultMetadataType["PDF417_EXTRA_METADATA"]=8]="PDF417_EXTRA_METADATA";/**
       * If the code format supports structured append and the current scanned code is part of one then the
       * sequence number is given with it.
       */ResultMetadataType[ResultMetadataType["STRUCTURED_APPEND_SEQUENCE"]=9]="STRUCTURED_APPEND_SEQUENCE";/**
       * If the code format supports structured append and the current scanned code is part of one then the
       * parity is given with it.
       */ResultMetadataType[ResultMetadataType["STRUCTURED_APPEND_PARITY"]=10]="STRUCTURED_APPEND_PARITY";})(ResultMetadataType||(ResultMetadataType={}));var ResultMetadataType$1=ResultMetadataType;/*
   * Copyright 2007 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /*namespace com.google.zxing.common {*/ /*import java.util.List;*/ /**
   * <p>Encapsulates the result of decoding a matrix of bits. This typically
   * applies to 2D barcode formats. For now it contains the raw bytes obtained,
   * as well as a String interpretation of those bytes, if applicable.</p>
   *
   * @author Sean Owen
   */var DecoderResult=/** @class */function(){// public constructor(rawBytes: Uint8Array,
//                      text: string,
//                      List<Uint8Array> byteSegments,
//                      String ecLevel) {
//   this(rawBytes, text, byteSegments, ecLevel, -1, -1)
// }
function DecoderResult(rawBytes,text,byteSegments,ecLevel,structuredAppendSequenceNumber,structuredAppendParity){if(structuredAppendSequenceNumber===void 0){structuredAppendSequenceNumber=-1;}if(structuredAppendParity===void 0){structuredAppendParity=-1;}this.rawBytes=rawBytes;this.text=text;this.byteSegments=byteSegments;this.ecLevel=ecLevel;this.structuredAppendSequenceNumber=structuredAppendSequenceNumber;this.structuredAppendParity=structuredAppendParity;this.numBits=rawBytes===undefined||rawBytes===null?0:8*rawBytes.length;}/**
       * @return raw bytes representing the result, or {@code null} if not applicable
       */DecoderResult.prototype.getRawBytes=function(){return this.rawBytes;};/**
       * @return how many bits of {@link #getRawBytes()} are valid; typically 8 times its length
       * @since 3.3.0
       */DecoderResult.prototype.getNumBits=function(){return this.numBits;};/**
       * @param numBits overrides the number of bits that are valid in {@link #getRawBytes()}
       * @since 3.3.0
       */DecoderResult.prototype.setNumBits=function(numBits/*int*/){this.numBits=numBits;};/**
       * @return text representation of the result
       */DecoderResult.prototype.getText=function(){return this.text;};/**
       * @return list of byte segments in the result, or {@code null} if not applicable
       */DecoderResult.prototype.getByteSegments=function(){return this.byteSegments;};/**
       * @return name of error correction level used, or {@code null} if not applicable
       */DecoderResult.prototype.getECLevel=function(){return this.ecLevel;};/**
       * @return number of errors corrected, or {@code null} if not applicable
       */DecoderResult.prototype.getErrorsCorrected=function(){return this.errorsCorrected;};DecoderResult.prototype.setErrorsCorrected=function(errorsCorrected/*Integer*/){this.errorsCorrected=errorsCorrected;};/**
       * @return number of erasures corrected, or {@code null} if not applicable
       */DecoderResult.prototype.getErasures=function(){return this.erasures;};DecoderResult.prototype.setErasures=function(erasures/*Integer*/){this.erasures=erasures;};/**
       * @return arbitrary additional metadata
       */DecoderResult.prototype.getOther=function(){return this.other;};DecoderResult.prototype.setOther=function(other){this.other=other;};DecoderResult.prototype.hasStructuredAppend=function(){return this.structuredAppendParity>=0&&this.structuredAppendSequenceNumber>=0;};DecoderResult.prototype.getStructuredAppendParity=function(){return this.structuredAppendParity;};DecoderResult.prototype.getStructuredAppendSequenceNumber=function(){return this.structuredAppendSequenceNumber;};return DecoderResult;}();/*
   * Copyright 2007 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /**
   * <p>This class contains utility methods for performing mathematical operations over
   * the Galois Fields. Operations use a given primitive polynomial in calculations.</p>
   *
   * <p>Throughout this package, elements of the GF are represented as an {@code int}
   * for convenience and speed (but at the cost of memory).
   * </p>
   *
   * @author Sean Owen
   * @author David Olivier
   */var AbstractGenericGF=/** @class */function(){function AbstractGenericGF(){}/**
       * @return 2 to the power of a in GF(size)
       */AbstractGenericGF.prototype.exp=function(a){return this.expTable[a];};/**
       * @return base 2 log of a in GF(size)
       */AbstractGenericGF.prototype.log=function(a/*int*/){if(a===0){throw new IllegalArgumentException();}return this.logTable[a];};/**
       * Implements both addition and subtraction -- they are the same in GF(size).
       *
       * @return sum/difference of a and b
       */AbstractGenericGF.addOrSubtract=function(a/*int*/,b/*int*/){return a^b;};return AbstractGenericGF;}();/*
   * Copyright 2007 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /**
   * <p>Represents a polynomial whose coefficients are elements of a GF.
   * Instances of this class are immutable.</p>
   *
   * <p>Much credit is due to William Rucklidge since portions of this code are an indirect
   * port of his C++ Reed-Solomon implementation.</p>
   *
   * @author Sean Owen
   */var GenericGFPoly=/** @class */function(){/**
       * @param field the {@link GenericGF} instance representing the field to use
       * to perform computations
       * @param coefficients coefficients as ints representing elements of GF(size), arranged
       * from most significant (highest-power term) coefficient to least significant
       * @throws IllegalArgumentException if argument is null or empty,
       * or if leading coefficient is 0 and this is not a
       * constant polynomial (that is, it is not the monomial "0")
       */function GenericGFPoly(field,coefficients){if(coefficients.length===0){throw new IllegalArgumentException();}this.field=field;var coefficientsLength=coefficients.length;if(coefficientsLength>1&&coefficients[0]===0){// Leading term must be non-zero for anything except the constant polynomial "0"
var firstNonZero=1;while(firstNonZero<coefficientsLength&&coefficients[firstNonZero]===0){firstNonZero++;}if(firstNonZero===coefficientsLength){this.coefficients=Int32Array.from([0]);}else{this.coefficients=new Int32Array(coefficientsLength-firstNonZero);System.arraycopy(coefficients,firstNonZero,this.coefficients,0,this.coefficients.length);}}else{this.coefficients=coefficients;}}GenericGFPoly.prototype.getCoefficients=function(){return this.coefficients;};/**
       * @return degree of this polynomial
       */GenericGFPoly.prototype.getDegree=function(){return this.coefficients.length-1;};/**
       * @return true iff this polynomial is the monomial "0"
       */GenericGFPoly.prototype.isZero=function(){return this.coefficients[0]===0;};/**
       * @return coefficient of x^degree term in this polynomial
       */GenericGFPoly.prototype.getCoefficient=function(degree/*int*/){return this.coefficients[this.coefficients.length-1-degree];};/**
       * @return evaluation of this polynomial at a given point
       */GenericGFPoly.prototype.evaluateAt=function(a/*int*/){if(a===0){// Just return the x^0 coefficient
return this.getCoefficient(0);}var coefficients=this.coefficients;var result;if(a===1){// Just the sum of the coefficients
result=0;for(var i=0,length_1=coefficients.length;i!==length_1;i++){var coefficient=coefficients[i];result=AbstractGenericGF.addOrSubtract(result,coefficient);}return result;}result=coefficients[0];var size=coefficients.length;var field=this.field;for(var i=1;i<size;i++){result=AbstractGenericGF.addOrSubtract(field.multiply(a,result),coefficients[i]);}return result;};GenericGFPoly.prototype.addOrSubtract=function(other){if(!this.field.equals(other.field)){throw new IllegalArgumentException('GenericGFPolys do not have same GenericGF field');}if(this.isZero()){return other;}if(other.isZero()){return this;}var smallerCoefficients=this.coefficients;var largerCoefficients=other.coefficients;if(smallerCoefficients.length>largerCoefficients.length){var temp=smallerCoefficients;smallerCoefficients=largerCoefficients;largerCoefficients=temp;}var sumDiff=new Int32Array(largerCoefficients.length);var lengthDiff=largerCoefficients.length-smallerCoefficients.length;// Copy high-order terms only found in higher-degree polynomial's coefficients
System.arraycopy(largerCoefficients,0,sumDiff,0,lengthDiff);for(var i=lengthDiff;i<largerCoefficients.length;i++){sumDiff[i]=AbstractGenericGF.addOrSubtract(smallerCoefficients[i-lengthDiff],largerCoefficients[i]);}return new GenericGFPoly(this.field,sumDiff);};GenericGFPoly.prototype.multiply=function(other){if(!this.field.equals(other.field)){throw new IllegalArgumentException('GenericGFPolys do not have same GenericGF field');}if(this.isZero()||other.isZero()){return this.field.getZero();}var aCoefficients=this.coefficients;var aLength=aCoefficients.length;var bCoefficients=other.coefficients;var bLength=bCoefficients.length;var product=new Int32Array(aLength+bLength-1);var field=this.field;for(var i=0;i<aLength;i++){var aCoeff=aCoefficients[i];for(var j=0;j<bLength;j++){product[i+j]=AbstractGenericGF.addOrSubtract(product[i+j],field.multiply(aCoeff,bCoefficients[j]));}}return new GenericGFPoly(field,product);};GenericGFPoly.prototype.multiplyScalar=function(scalar/*int*/){if(scalar===0){return this.field.getZero();}if(scalar===1){return this;}var size=this.coefficients.length;var field=this.field;var product=new Int32Array(size);var coefficients=this.coefficients;for(var i=0;i<size;i++){product[i]=field.multiply(coefficients[i],scalar);}return new GenericGFPoly(field,product);};GenericGFPoly.prototype.multiplyByMonomial=function(degree/*int*/,coefficient/*int*/){if(degree<0){throw new IllegalArgumentException();}if(coefficient===0){return this.field.getZero();}var coefficients=this.coefficients;var size=coefficients.length;var product=new Int32Array(size+degree);var field=this.field;for(var i=0;i<size;i++){product[i]=field.multiply(coefficients[i],coefficient);}return new GenericGFPoly(field,product);};GenericGFPoly.prototype.divide=function(other){if(!this.field.equals(other.field)){throw new IllegalArgumentException('GenericGFPolys do not have same GenericGF field');}if(other.isZero()){throw new IllegalArgumentException('Divide by 0');}var field=this.field;var quotient=field.getZero();var remainder=this;var denominatorLeadingTerm=other.getCoefficient(other.getDegree());var inverseDenominatorLeadingTerm=field.inverse(denominatorLeadingTerm);while(remainder.getDegree()>=other.getDegree()&&!remainder.isZero()){var degreeDifference=remainder.getDegree()-other.getDegree();var scale=field.multiply(remainder.getCoefficient(remainder.getDegree()),inverseDenominatorLeadingTerm);var term=other.multiplyByMonomial(degreeDifference,scale);var iterationQuotient=field.buildMonomial(degreeDifference,scale);quotient=quotient.addOrSubtract(iterationQuotient);remainder=remainder.addOrSubtract(term);}return[quotient,remainder];};/*@Override*/GenericGFPoly.prototype.toString=function(){var result='';for(var degree=this.getDegree();degree>=0;degree--){var coefficient=this.getCoefficient(degree);if(coefficient!==0){if(coefficient<0){result+=' - ';coefficient=-coefficient;}else{if(result.length>0){result+=' + ';}}if(degree===0||coefficient!==1){var alphaPower=this.field.log(coefficient);if(alphaPower===0){result+='1';}else if(alphaPower===1){result+='a';}else{result+='a^';result+=alphaPower;}}if(degree!==0){if(degree===1){result+='x';}else{result+='x^';result+=degree;}}}}return result;};return GenericGFPoly;}();var __extends$e=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * Custom Error class of type Exception.
   */var ArithmeticException=/** @class */function(_super){__extends$e(ArithmeticException,_super);function ArithmeticException(){return _super!==null&&_super.apply(this,arguments)||this;}ArithmeticException.kind='ArithmeticException';return ArithmeticException;}(Exception);/*
   * Copyright 2007 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __extends$f=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * <p>This class contains utility methods for performing mathematical operations over
   * the Galois Fields. Operations use a given primitive polynomial in calculations.</p>
   *
   * <p>Throughout this package, elements of the GF are represented as an {@code int}
   * for convenience and speed (but at the cost of memory).
   * </p>
   *
   * @author Sean Owen
   * @author David Olivier
   */var GenericGF=/** @class */function(_super){__extends$f(GenericGF,_super);/**
       * Create a representation of GF(size) using the given primitive polynomial.
       *
       * @param primitive irreducible polynomial whose coefficients are represented by
       *  the bits of an int, where the least-significant bit represents the constant
       *  coefficient
       * @param size the size of the field
       * @param b the factor b in the generator polynomial can be 0- or 1-based
       *  (g(x) = (x+a^b)(x+a^(b+1))...(x+a^(b+2t-1))).
       *  In most cases it should be 1, but for QR code it is 0.
       */function GenericGF(primitive/*int*/,size/*int*/,generatorBase/*int*/){var _this=_super.call(this)||this;_this.primitive=primitive;_this.size=size;_this.generatorBase=generatorBase;var expTable=new Int32Array(size);var x=1;for(var i=0;i<size;i++){expTable[i]=x;x*=2;// we're assuming the generator alpha is 2
if(x>=size){x^=primitive;x&=size-1;}}_this.expTable=expTable;var logTable=new Int32Array(size);for(var i=0;i<size-1;i++){logTable[expTable[i]]=i;}_this.logTable=logTable;// logTable[0] == 0 but this should never be used
_this.zero=new GenericGFPoly(_this,Int32Array.from([0]));_this.one=new GenericGFPoly(_this,Int32Array.from([1]));return _this;}GenericGF.prototype.getZero=function(){return this.zero;};GenericGF.prototype.getOne=function(){return this.one;};/**
       * @return the monomial representing coefficient * x^degree
       */GenericGF.prototype.buildMonomial=function(degree/*int*/,coefficient/*int*/){if(degree<0){throw new IllegalArgumentException();}if(coefficient===0){return this.zero;}var coefficients=new Int32Array(degree+1);coefficients[0]=coefficient;return new GenericGFPoly(this,coefficients);};/**
       * @return multiplicative inverse of a
       */GenericGF.prototype.inverse=function(a/*int*/){if(a===0){throw new ArithmeticException();}return this.expTable[this.size-this.logTable[a]-1];};/**
       * @return product of a and b in GF(size)
       */GenericGF.prototype.multiply=function(a/*int*/,b/*int*/){if(a===0||b===0){return 0;}return this.expTable[(this.logTable[a]+this.logTable[b])%(this.size-1)];};GenericGF.prototype.getSize=function(){return this.size;};GenericGF.prototype.getGeneratorBase=function(){return this.generatorBase;};/*@Override*/GenericGF.prototype.toString=function(){return'GF(0x'+Integer.toHexString(this.primitive)+','+this.size+')';};GenericGF.prototype.equals=function(o){return o===this;};GenericGF.AZTEC_DATA_12=new GenericGF(0x1069,4096,1);// x^12 + x^6 + x^5 + x^3 + 1
GenericGF.AZTEC_DATA_10=new GenericGF(0x409,1024,1);// x^10 + x^3 + 1
GenericGF.AZTEC_DATA_6=new GenericGF(0x43,64,1);// x^6 + x + 1
GenericGF.AZTEC_PARAM=new GenericGF(0x13,16,1);// x^4 + x + 1
GenericGF.QR_CODE_FIELD_256=new GenericGF(0x011d,256,0);// x^8 + x^4 + x^3 + x^2 + 1
GenericGF.DATA_MATRIX_FIELD_256=new GenericGF(0x012d,256,1);// x^8 + x^5 + x^3 + x^2 + 1
GenericGF.AZTEC_DATA_8=GenericGF.DATA_MATRIX_FIELD_256;GenericGF.MAXICODE_FIELD_64=GenericGF.AZTEC_DATA_6;return GenericGF;}(AbstractGenericGF);var __extends$g=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * Custom Error class of type Exception.
   */var ReedSolomonException=/** @class */function(_super){__extends$g(ReedSolomonException,_super);function ReedSolomonException(){return _super!==null&&_super.apply(this,arguments)||this;}ReedSolomonException.kind='ReedSolomonException';return ReedSolomonException;}(Exception);var __extends$h=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * Custom Error class of type Exception.
   */var IllegalStateException=/** @class */function(_super){__extends$h(IllegalStateException,_super);function IllegalStateException(){return _super!==null&&_super.apply(this,arguments)||this;}IllegalStateException.kind='IllegalStateException';return IllegalStateException;}(Exception);/*
   * Copyright 2007 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /**
   * <p>Implements Reed-Solomon decoding, as the name implies.</p>
   *
   * <p>The algorithm will not be explained here, but the following references were helpful
   * in creating this implementation:</p>
   *
   * <ul>
   * <li>Bruce Maggs.
   * <a href="http://www.cs.cmu.edu/afs/cs.cmu.edu/project/pscico-guyb/realworld/www/rs_decode.ps">
   * "Decoding Reed-Solomon Codes"</a> (see discussion of Forney's Formula)</li>
   * <li>J.I. Hall. <a href="www.mth.msu.edu/~jhall/classes/codenotes/GRS.pdf">
   * "Chapter 5. Generalized Reed-Solomon Codes"</a>
   * (see discussion of Euclidean algorithm)</li>
   * </ul>
   *
   * <p>Much credit is due to William Rucklidge since portions of this code are an indirect
   * port of his C++ Reed-Solomon implementation.</p>
   *
   * @author Sean Owen
   * @author William Rucklidge
   * @author sanfordsquires
   */var ReedSolomonDecoder=/** @class */function(){function ReedSolomonDecoder(field){this.field=field;}/**
       * <p>Decodes given set of received codewords, which include both data and error-correction
       * codewords. Really, this means it uses Reed-Solomon to detect and correct errors, in-place,
       * in the input.</p>
       *
       * @param received data and error-correction codewords
       * @param twoS number of error-correction codewords available
       * @throws ReedSolomonException if decoding fails for any reason
       */ReedSolomonDecoder.prototype.decode=function(received,twoS/*int*/){var field=this.field;var poly=new GenericGFPoly(field,received);var syndromeCoefficients=new Int32Array(twoS);var noError=true;for(var i=0;i<twoS;i++){var evalResult=poly.evaluateAt(field.exp(i+field.getGeneratorBase()));syndromeCoefficients[syndromeCoefficients.length-1-i]=evalResult;if(evalResult!==0){noError=false;}}if(noError){return;}var syndrome=new GenericGFPoly(field,syndromeCoefficients);var sigmaOmega=this.runEuclideanAlgorithm(field.buildMonomial(twoS,1),syndrome,twoS);var sigma=sigmaOmega[0];var omega=sigmaOmega[1];var errorLocations=this.findErrorLocations(sigma);var errorMagnitudes=this.findErrorMagnitudes(omega,errorLocations);for(var i=0;i<errorLocations.length;i++){var position=received.length-1-field.log(errorLocations[i]);if(position<0){throw new ReedSolomonException('Bad error location');}received[position]=GenericGF.addOrSubtract(received[position],errorMagnitudes[i]);}};ReedSolomonDecoder.prototype.runEuclideanAlgorithm=function(a,b,R/*int*/){// Assume a's degree is >= b's
if(a.getDegree()<b.getDegree()){var temp=a;a=b;b=temp;}var field=this.field;var rLast=a;var r=b;var tLast=field.getZero();var t=field.getOne();// Run Euclidean algorithm until r's degree is less than R/2
while(r.getDegree()>=(R/2|0)){var rLastLast=rLast;var tLastLast=tLast;rLast=r;tLast=t;// Divide rLastLast by rLast, with quotient in q and remainder in r
if(rLast.isZero()){// Oops, Euclidean algorithm already terminated?
throw new ReedSolomonException('r_{i-1} was zero');}r=rLastLast;var q=field.getZero();var denominatorLeadingTerm=rLast.getCoefficient(rLast.getDegree());var dltInverse=field.inverse(denominatorLeadingTerm);while(r.getDegree()>=rLast.getDegree()&&!r.isZero()){var degreeDiff=r.getDegree()-rLast.getDegree();var scale=field.multiply(r.getCoefficient(r.getDegree()),dltInverse);q=q.addOrSubtract(field.buildMonomial(degreeDiff,scale));r=r.addOrSubtract(rLast.multiplyByMonomial(degreeDiff,scale));}t=q.multiply(tLast).addOrSubtract(tLastLast);if(r.getDegree()>=rLast.getDegree()){throw new IllegalStateException('Division algorithm failed to reduce polynomial?');}}var sigmaTildeAtZero=t.getCoefficient(0);if(sigmaTildeAtZero===0){throw new ReedSolomonException('sigmaTilde(0) was zero');}var inverse=field.inverse(sigmaTildeAtZero);var sigma=t.multiplyScalar(inverse);var omega=r.multiplyScalar(inverse);return[sigma,omega];};ReedSolomonDecoder.prototype.findErrorLocations=function(errorLocator){// This is a direct application of Chien's search
var numErrors=errorLocator.getDegree();if(numErrors===1){// shortcut
return Int32Array.from([errorLocator.getCoefficient(1)]);}var result=new Int32Array(numErrors);var e=0;var field=this.field;for(var i=1;i<field.getSize()&&e<numErrors;i++){if(errorLocator.evaluateAt(i)===0){result[e]=field.inverse(i);e++;}}if(e!==numErrors){throw new ReedSolomonException('Error locator degree does not match number of roots');}return result;};ReedSolomonDecoder.prototype.findErrorMagnitudes=function(errorEvaluator,errorLocations){// This is directly applying Forney's Formula
var s=errorLocations.length;var result=new Int32Array(s);var field=this.field;for(var i=0;i<s;i++){var xiInverse=field.inverse(errorLocations[i]);var denominator=1;for(var j=0;j<s;j++){if(i!==j){// denominator = field.multiply(denominator,
//    GenericGF.addOrSubtract(1, field.multiply(errorLocations[j], xiInverse)))
// Above should work but fails on some Apple and Linux JDKs due to a Hotspot bug.
// Below is a funny-looking workaround from Steven Parkes
var term=field.multiply(errorLocations[j],xiInverse);var termPlus1=(term&0x1)===0?term|1:term&~1;denominator=field.multiply(denominator,termPlus1);}}result[i]=field.multiply(errorEvaluator.evaluateAt(xiInverse),field.inverse(denominator));if(field.getGeneratorBase()!==0){result[i]=field.multiply(result[i],xiInverse);}}return result;};return ReedSolomonDecoder;}();/*
   * Copyright 2010 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ // import java.util.Arrays;
var Table;(function(Table){Table[Table["UPPER"]=0]="UPPER";Table[Table["LOWER"]=1]="LOWER";Table[Table["MIXED"]=2]="MIXED";Table[Table["DIGIT"]=3]="DIGIT";Table[Table["PUNCT"]=4]="PUNCT";Table[Table["BINARY"]=5]="BINARY";})(Table||(Table={}));/**
   * <p>The main class which implements Aztec Code decoding -- as opposed to locating and extracting
   * the Aztec Code from an image.</p>
   *
   * @author David Olivier
   */var Decoder=/** @class */function(){function Decoder(){}Decoder.prototype.decode=function(detectorResult){this.ddata=detectorResult;var matrix=detectorResult.getBits();var rawbits=this.extractBits(matrix);var correctedBits=this.correctBits(rawbits);var rawBytes=Decoder.convertBoolArrayToByteArray(correctedBits);var result=Decoder.getEncodedData(correctedBits);var decoderResult=new DecoderResult(rawBytes,result,null,null);decoderResult.setNumBits(correctedBits.length);return decoderResult;};// This method is used for testing the high-level encoder
Decoder.highLevelDecode=function(correctedBits){return this.getEncodedData(correctedBits);};/**
       * Gets the string encoded in the aztec code bits
       *
       * @return the decoded string
       */Decoder.getEncodedData=function(correctedBits){var endIndex=correctedBits.length;var latchTable=Table.UPPER;// table most recently latched to
var shiftTable=Table.UPPER;// table to use for the next read
var result='';var index=0;while(index<endIndex){if(shiftTable===Table.BINARY){if(endIndex-index<5){break;}var length_1=Decoder.readCode(correctedBits,index,5);index+=5;if(length_1===0){if(endIndex-index<11){break;}length_1=Decoder.readCode(correctedBits,index,11)+31;index+=11;}for(var charCount=0;charCount<length_1;charCount++){if(endIndex-index<8){index=endIndex;// Force outer loop to exit
break;}var code=Decoder.readCode(correctedBits,index,8);result+=/*(char)*/StringUtils.castAsNonUtf8Char(code);index+=8;}// Go back to whatever mode we had been in
shiftTable=latchTable;}else{var size=shiftTable===Table.DIGIT?4:5;if(endIndex-index<size){break;}var code=Decoder.readCode(correctedBits,index,size);index+=size;var str=Decoder.getCharacter(shiftTable,code);if(str.startsWith('CTRL_')){// Table changes
// ISO/IEC 24778:2008 prescribes ending a shift sequence in the mode from which it was invoked.
// That's including when that mode is a shift.
// Our test case dlusbs.png for issue #642 exercises that.
latchTable=shiftTable;// Latch the current mode, so as to return to Upper after U/S B/S
shiftTable=Decoder.getTable(str.charAt(5));if(str.charAt(6)==='L'){latchTable=shiftTable;}}else{result+=str;// Go back to whatever mode we had been in
shiftTable=latchTable;}}}return result;};/**
       * gets the table corresponding to the char passed
       */Decoder.getTable=function(t){switch(t){case'L':return Table.LOWER;case'P':return Table.PUNCT;case'M':return Table.MIXED;case'D':return Table.DIGIT;case'B':return Table.BINARY;case'U':default:return Table.UPPER;}};/**
       * Gets the character (or string) corresponding to the passed code in the given table
       *
       * @param table the table used
       * @param code the code of the character
       */Decoder.getCharacter=function(table,code){switch(table){case Table.UPPER:return Decoder.UPPER_TABLE[code];case Table.LOWER:return Decoder.LOWER_TABLE[code];case Table.MIXED:return Decoder.MIXED_TABLE[code];case Table.PUNCT:return Decoder.PUNCT_TABLE[code];case Table.DIGIT:return Decoder.DIGIT_TABLE[code];default:// Should not reach here.
throw new IllegalStateException('Bad table');}};/**
       * <p>Performs RS error correction on an array of bits.</p>
       *
       * @return the corrected array
       * @throws FormatException if the input contains too many errors
       */Decoder.prototype.correctBits=function(rawbits){var gf;var codewordSize;if(this.ddata.getNbLayers()<=2){codewordSize=6;gf=GenericGF.AZTEC_DATA_6;}else if(this.ddata.getNbLayers()<=8){codewordSize=8;gf=GenericGF.AZTEC_DATA_8;}else if(this.ddata.getNbLayers()<=22){codewordSize=10;gf=GenericGF.AZTEC_DATA_10;}else{codewordSize=12;gf=GenericGF.AZTEC_DATA_12;}var numDataCodewords=this.ddata.getNbDatablocks();var numCodewords=rawbits.length/codewordSize;if(numCodewords<numDataCodewords){throw new FormatException();}var offset=rawbits.length%codewordSize;var dataWords=new Int32Array(numCodewords);for(var i=0;i<numCodewords;i++,offset+=codewordSize){dataWords[i]=Decoder.readCode(rawbits,offset,codewordSize);}try{var rsDecoder=new ReedSolomonDecoder(gf);rsDecoder.decode(dataWords,numCodewords-numDataCodewords);}catch(ex){throw new FormatException(ex);}// Now perform the unstuffing operation.
// First, count how many bits are going to be thrown out as stuffing
var mask=(1<<codewordSize)-1;var stuffedBits=0;for(var i=0;i<numDataCodewords;i++){var dataWord=dataWords[i];if(dataWord===0||dataWord===mask){throw new FormatException();}else if(dataWord===1||dataWord===mask-1){stuffedBits++;}}// Now, actually unpack the bits and remove the stuffing
var correctedBits=new Array(numDataCodewords*codewordSize-stuffedBits);var index=0;for(var i=0;i<numDataCodewords;i++){var dataWord=dataWords[i];if(dataWord===1||dataWord===mask-1){// next codewordSize-1 bits are all zeros or all ones
correctedBits.fill(dataWord>1,index,index+codewordSize-1);// Arrays.fill(correctedBits, index, index + codewordSize - 1, dataWord > 1);
index+=codewordSize-1;}else{for(var bit=codewordSize-1;bit>=0;--bit){correctedBits[index++]=(dataWord&1<<bit)!==0;}}}return correctedBits;};/**
       * Gets the array of bits from an Aztec Code matrix
       *
       * @return the array of bits
       */Decoder.prototype.extractBits=function(matrix){var compact=this.ddata.isCompact();var layers=this.ddata.getNbLayers();var baseMatrixSize=(compact?11:14)+layers*4;// not including alignment lines
var alignmentMap=new Int32Array(baseMatrixSize);var rawbits=new Array(this.totalBitsInLayer(layers,compact));if(compact){for(var i=0;i<alignmentMap.length;i++){alignmentMap[i]=i;}}else{var matrixSize=baseMatrixSize+1+2*Integer.truncDivision(Integer.truncDivision(baseMatrixSize,2)-1,15);var origCenter=baseMatrixSize/2;var center=Integer.truncDivision(matrixSize,2);for(var i=0;i<origCenter;i++){var newOffset=i+Integer.truncDivision(i,15);alignmentMap[origCenter-i-1]=center-newOffset-1;alignmentMap[origCenter+i]=center+newOffset+1;}}for(var i=0,rowOffset=0;i<layers;i++){var rowSize=(layers-i)*4+(compact?9:12);// The top-left most point of this layer is <low, low> (not including alignment lines)
var low=i*2;// The bottom-right most point of this layer is <high, high> (not including alignment lines)
var high=baseMatrixSize-1-low;// We pull bits from the two 2 x rowSize columns and two rowSize x 2 rows
for(var j=0;j<rowSize;j++){var columnOffset=j*2;for(var k=0;k<2;k++){// left column
rawbits[rowOffset+columnOffset+k]=matrix.get(alignmentMap[low+k],alignmentMap[low+j]);// bottom row
rawbits[rowOffset+2*rowSize+columnOffset+k]=matrix.get(alignmentMap[low+j],alignmentMap[high-k]);// right column
rawbits[rowOffset+4*rowSize+columnOffset+k]=matrix.get(alignmentMap[high-k],alignmentMap[high-j]);// top row
rawbits[rowOffset+6*rowSize+columnOffset+k]=matrix.get(alignmentMap[high-j],alignmentMap[low+k]);}}rowOffset+=rowSize*8;}return rawbits;};/**
       * Reads a code of given length and at given index in an array of bits
       */Decoder.readCode=function(rawbits,startIndex,length){var res=0;for(var i=startIndex;i<startIndex+length;i++){res<<=1;if(rawbits[i]){res|=0x01;}}return res;};/**
       * Reads a code of length 8 in an array of bits, padding with zeros
       */Decoder.readByte=function(rawbits,startIndex){var n=rawbits.length-startIndex;if(n>=8){return Decoder.readCode(rawbits,startIndex,8);}return Decoder.readCode(rawbits,startIndex,n)<<8-n;};/**
       * Packs a bit array into bytes, most significant bit first
       */Decoder.convertBoolArrayToByteArray=function(boolArr){var byteArr=new Uint8Array((boolArr.length+7)/8);for(var i=0;i<byteArr.length;i++){byteArr[i]=Decoder.readByte(boolArr,8*i);}return byteArr;};Decoder.prototype.totalBitsInLayer=function(layers,compact){return((compact?88:112)+16*layers)*layers;};Decoder.UPPER_TABLE=['CTRL_PS',' ','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','CTRL_LL','CTRL_ML','CTRL_DL','CTRL_BS'];Decoder.LOWER_TABLE=['CTRL_PS',' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','CTRL_US','CTRL_ML','CTRL_DL','CTRL_BS'];Decoder.MIXED_TABLE=[// Module parse failed: Octal literal in strict mode (50:29)
// so number string were scaped
'CTRL_PS',' ','\\1','\\2','\\3','\\4','\\5','\\6','\\7','\b','\t','\n','\\13','\f','\r','\\33','\\34','\\35','\\36','\\37','@','\\','^','_','`','|','~','\\177','CTRL_LL','CTRL_UL','CTRL_PL','CTRL_BS'];Decoder.PUNCT_TABLE=['','\r','\r\n','. ',', ',': ','!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/',':',';','<','=','>','?','[',']','{','}','CTRL_UL'];Decoder.DIGIT_TABLE=['CTRL_PS',' ','0','1','2','3','4','5','6','7','8','9',',','.','CTRL_UL','CTRL_US'];return Decoder;}();/*
   * Copyright 2012 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /*namespace com.google.zxing.common.detector {*/ /**
   * General math-related and numeric utility functions.
   */var MathUtils=/** @class */function(){function MathUtils(){}/**
       * Ends up being a bit faster than {@link Math#round(float)}. This merely rounds its
       * argument to the nearest int, where x.5 rounds up to x+1. Semantics of this shortcut
       * differ slightly from {@link Math#round(float)} in that half rounds down for negative
       * values. -2.5 rounds to -3, not -2. For purposes here it makes no difference.
       *
       * @param d real value to round
       * @return nearest {@code int}
       */MathUtils.round=function(d/*float*/){if(NaN===d)return 0;if(d<=Number.MIN_SAFE_INTEGER)return Number.MIN_SAFE_INTEGER;if(d>=Number.MAX_SAFE_INTEGER)return Number.MAX_SAFE_INTEGER;return(/*(int) */d+(d<0.0?-0.5:0.5)|0);};// TYPESCRIPTPORT: maybe remove round method and call directly Math.round, it looks like it doesn't make sense for js
/**
       * @param aX point A x coordinate
       * @param aY point A y coordinate
       * @param bX point B x coordinate
       * @param bY point B y coordinate
       * @return Euclidean distance between points A and B
       */MathUtils.distance=function(aX/*float|int*/,aY/*float|int*/,bX/*float|int*/,bY/*float|int*/){var xDiff=aX-bX;var yDiff=aY-bY;return(/*(float) */Math.sqrt(xDiff*xDiff+yDiff*yDiff));};/**
       * @param aX point A x coordinate
       * @param aY point A y coordinate
       * @param bX point B x coordinate
       * @param bY point B y coordinate
       * @return Euclidean distance between points A and B
       */ // public static distance(aX: number /*int*/, aY: number /*int*/, bX: number /*int*/, bY: number /*int*/): float {
//   const xDiff = aX - bX
//   const yDiff = aY - bY
//   return (float) Math.sqrt(xDiff * xDiff + yDiff * yDiff);
// }
/**
       * @param array values to sum
       * @return sum of values in array
       */MathUtils.sum=function(array){var count=0;for(var i=0,length_1=array.length;i!==length_1;i++){var a=array[i];count+=a;}return count;};return MathUtils;}();/**
   * Ponyfill for Java's Float class.
   */var Float=/** @class */function(){function Float(){}/**
       * SincTS has no difference between int and float, there's all numbers,
       * this is used only to polyfill Java code.
       */Float.floatToIntBits=function(f){return f;};/**
       * The float max value in JS is the number max value.
       */Float.MAX_VALUE=Number.MAX_SAFE_INTEGER;return Float;}();/*
   * Copyright 2007 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /**
   * <p>Encapsulates a point of interest in an image containing a barcode. Typically, this
   * would be the location of a finder pattern or the corner of the barcode, for example.</p>
   *
   * @author Sean Owen
   */var ResultPoint=/** @class */function(){function ResultPoint(x,y){this.x=x;this.y=y;}ResultPoint.prototype.getX=function(){return this.x;};ResultPoint.prototype.getY=function(){return this.y;};/*@Override*/ResultPoint.prototype.equals=function(other){if(other instanceof ResultPoint){var otherPoint=other;return this.x===otherPoint.x&&this.y===otherPoint.y;}return false;};/*@Override*/ResultPoint.prototype.hashCode=function(){return 31*Float.floatToIntBits(this.x)+Float.floatToIntBits(this.y);};/*@Override*/ResultPoint.prototype.toString=function(){return'('+this.x+','+this.y+')';};/**
       * Orders an array of three ResultPoints in an order [A,B,C] such that AB is less than AC
       * and BC is less than AC, and the angle between BC and BA is less than 180 degrees.
       *
       * @param patterns array of three {@code ResultPoint} to order
       */ResultPoint.orderBestPatterns=function(patterns){// Find distances between pattern centers
var zeroOneDistance=this.distance(patterns[0],patterns[1]);var oneTwoDistance=this.distance(patterns[1],patterns[2]);var zeroTwoDistance=this.distance(patterns[0],patterns[2]);var pointA;var pointB;var pointC;// Assume one closest to other two is B; A and C will just be guesses at first
if(oneTwoDistance>=zeroOneDistance&&oneTwoDistance>=zeroTwoDistance){pointB=patterns[0];pointA=patterns[1];pointC=patterns[2];}else if(zeroTwoDistance>=oneTwoDistance&&zeroTwoDistance>=zeroOneDistance){pointB=patterns[1];pointA=patterns[0];pointC=patterns[2];}else{pointB=patterns[2];pointA=patterns[0];pointC=patterns[1];}// Use cross product to figure out whether A and C are correct or flipped.
// This asks whether BC x BA has a positive z component, which is the arrangement
// we want for A, B, C. If it's negative, then we've got it flipped around and
// should swap A and C.
if(this.crossProductZ(pointA,pointB,pointC)<0.0){var temp=pointA;pointA=pointC;pointC=temp;}patterns[0]=pointA;patterns[1]=pointB;patterns[2]=pointC;};/**
       * @param pattern1 first pattern
       * @param pattern2 second pattern
       * @return distance between two points
       */ResultPoint.distance=function(pattern1,pattern2){return MathUtils.distance(pattern1.x,pattern1.y,pattern2.x,pattern2.y);};/**
       * Returns the z component of the cross product between vectors BC and BA.
       */ResultPoint.crossProductZ=function(pointA,pointB,pointC){var bX=pointB.x;var bY=pointB.y;return(pointC.x-bX)*(pointA.y-bY)-(pointC.y-bY)*(pointA.x-bX);};return ResultPoint;}();/*
   * Copyright 2007 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /**
   * <p>Encapsulates the result of detecting a barcode in an image. This includes the raw
   * matrix of black/white pixels corresponding to the barcode, and possibly points of interest
   * in the image, like the location of finder patterns or corners of the barcode in the image.</p>
   *
   * @author Sean Owen
   */var DetectorResult=/** @class */function(){function DetectorResult(bits,points){this.bits=bits;this.points=points;}DetectorResult.prototype.getBits=function(){return this.bits;};DetectorResult.prototype.getPoints=function(){return this.points;};return DetectorResult;}();/*
   * Copyright 2010 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __extends$i=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * <p>Extends {@link DetectorResult} with more information specific to the Aztec format,
   * like the number of layers and whether it's compact.</p>
   *
   * @author Sean Owen
   */var AztecDetectorResult=/** @class */function(_super){__extends$i(AztecDetectorResult,_super);function AztecDetectorResult(bits,points,compact,nbDatablocks,nbLayers){var _this=_super.call(this,bits,points)||this;_this.compact=compact;_this.nbDatablocks=nbDatablocks;_this.nbLayers=nbLayers;return _this;}AztecDetectorResult.prototype.getNbLayers=function(){return this.nbLayers;};AztecDetectorResult.prototype.getNbDatablocks=function(){return this.nbDatablocks;};AztecDetectorResult.prototype.isCompact=function(){return this.compact;};return AztecDetectorResult;}(DetectorResult);/*
   * Copyright 2010 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /**
   * <p>
   * Detects a candidate barcode-like rectangular region within an image. It
   * starts around the center of the image, increases the size of the candidate
   * region until it finds a white rectangular region. By keeping track of the
   * last black points it encountered, it determines the corners of the barcode.
   * </p>
   *
   * @author David Olivier
   */var WhiteRectangleDetector=/** @class */function(){// public constructor(private image: BitMatrix) /*throws NotFoundException*/ {
//   this(image, INIT_SIZE, image.getWidth() / 2, image.getHeight() / 2)
// }
/**
       * @param image barcode image to find a rectangle in
       * @param initSize initial size of search area around center
       * @param x x position of search center
       * @param y y position of search center
       * @throws NotFoundException if image is too small to accommodate {@code initSize}
       */function WhiteRectangleDetector(image,initSize/*int*/,x/*int*/,y/*int*/){this.image=image;this.height=image.getHeight();this.width=image.getWidth();if(undefined===initSize||null===initSize){initSize=WhiteRectangleDetector.INIT_SIZE;}if(undefined===x||null===x){x=image.getWidth()/2|0;}if(undefined===y||null===y){y=image.getHeight()/2|0;}var halfsize=initSize/2|0;this.leftInit=x-halfsize;this.rightInit=x+halfsize;this.upInit=y-halfsize;this.downInit=y+halfsize;if(this.upInit<0||this.leftInit<0||this.downInit>=this.height||this.rightInit>=this.width){throw new NotFoundException();}}/**
       * <p>
       * Detects a candidate barcode-like rectangular region within an image. It
       * starts around the center of the image, increases the size of the candidate
       * region until it finds a white rectangular region.
       * </p>
       *
       * @return {@link ResultPoint}[] describing the corners of the rectangular
       *         region. The first and last points are opposed on the diagonal, as
       *         are the second and third. The first point will be the topmost
       *         point and the last, the bottommost. The second point will be
       *         leftmost and the third, the rightmost
       * @throws NotFoundException if no Data Matrix Code can be found
       */WhiteRectangleDetector.prototype.detect=function(){var left=this.leftInit;var right=this.rightInit;var up=this.upInit;var down=this.downInit;var sizeExceeded=false;var aBlackPointFoundOnBorder=true;var atLeastOneBlackPointFoundOnBorder=false;var atLeastOneBlackPointFoundOnRight=false;var atLeastOneBlackPointFoundOnBottom=false;var atLeastOneBlackPointFoundOnLeft=false;var atLeastOneBlackPointFoundOnTop=false;var width=this.width;var height=this.height;while(aBlackPointFoundOnBorder){aBlackPointFoundOnBorder=false;// .....
// .   |
// .....
var rightBorderNotWhite=true;while((rightBorderNotWhite||!atLeastOneBlackPointFoundOnRight)&&right<width){rightBorderNotWhite=this.containsBlackPoint(up,down,right,false);if(rightBorderNotWhite){right++;aBlackPointFoundOnBorder=true;atLeastOneBlackPointFoundOnRight=true;}else if(!atLeastOneBlackPointFoundOnRight){right++;}}if(right>=width){sizeExceeded=true;break;}// .....
// .   .
// .___.
var bottomBorderNotWhite=true;while((bottomBorderNotWhite||!atLeastOneBlackPointFoundOnBottom)&&down<height){bottomBorderNotWhite=this.containsBlackPoint(left,right,down,true);if(bottomBorderNotWhite){down++;aBlackPointFoundOnBorder=true;atLeastOneBlackPointFoundOnBottom=true;}else if(!atLeastOneBlackPointFoundOnBottom){down++;}}if(down>=height){sizeExceeded=true;break;}// .....
// |   .
// .....
var leftBorderNotWhite=true;while((leftBorderNotWhite||!atLeastOneBlackPointFoundOnLeft)&&left>=0){leftBorderNotWhite=this.containsBlackPoint(up,down,left,false);if(leftBorderNotWhite){left--;aBlackPointFoundOnBorder=true;atLeastOneBlackPointFoundOnLeft=true;}else if(!atLeastOneBlackPointFoundOnLeft){left--;}}if(left<0){sizeExceeded=true;break;}// .___.
// .   .
// .....
var topBorderNotWhite=true;while((topBorderNotWhite||!atLeastOneBlackPointFoundOnTop)&&up>=0){topBorderNotWhite=this.containsBlackPoint(left,right,up,true);if(topBorderNotWhite){up--;aBlackPointFoundOnBorder=true;atLeastOneBlackPointFoundOnTop=true;}else if(!atLeastOneBlackPointFoundOnTop){up--;}}if(up<0){sizeExceeded=true;break;}if(aBlackPointFoundOnBorder){atLeastOneBlackPointFoundOnBorder=true;}}if(!sizeExceeded&&atLeastOneBlackPointFoundOnBorder){var maxSize=right-left;var z=null;for(var i=1;z===null&&i<maxSize;i++){z=this.getBlackPointOnSegment(left,down-i,left+i,down);}if(z==null){throw new NotFoundException();}var t=null;// go down right
for(var i=1;t===null&&i<maxSize;i++){t=this.getBlackPointOnSegment(left,up+i,left+i,up);}if(t==null){throw new NotFoundException();}var x=null;// go down left
for(var i=1;x===null&&i<maxSize;i++){x=this.getBlackPointOnSegment(right,up+i,right-i,up);}if(x==null){throw new NotFoundException();}var y=null;// go up left
for(var i=1;y===null&&i<maxSize;i++){y=this.getBlackPointOnSegment(right,down-i,right-i,down);}if(y==null){throw new NotFoundException();}return this.centerEdges(y,z,x,t);}else{throw new NotFoundException();}};WhiteRectangleDetector.prototype.getBlackPointOnSegment=function(aX/*float*/,aY/*float*/,bX/*float*/,bY/*float*/){var dist=MathUtils.round(MathUtils.distance(aX,aY,bX,bY));var xStep=(bX-aX)/dist;var yStep=(bY-aY)/dist;var image=this.image;for(var i=0;i<dist;i++){var x=MathUtils.round(aX+i*xStep);var y=MathUtils.round(aY+i*yStep);if(image.get(x,y)){return new ResultPoint(x,y);}}return null;};/**
       * recenters the points of a constant distance towards the center
       *
       * @param y bottom most point
       * @param z left most point
       * @param x right most point
       * @param t top most point
       * @return {@link ResultPoint}[] describing the corners of the rectangular
       *         region. The first and last points are opposed on the diagonal, as
       *         are the second and third. The first point will be the topmost
       *         point and the last, the bottommost. The second point will be
       *         leftmost and the third, the rightmost
       */WhiteRectangleDetector.prototype.centerEdges=function(y,z,x,t){//
//       t            t
//  z                      x
//        x    OR    z
//   y                    y
//
var yi=y.getX();var yj=y.getY();var zi=z.getX();var zj=z.getY();var xi=x.getX();var xj=x.getY();var ti=t.getX();var tj=t.getY();var CORR=WhiteRectangleDetector.CORR;if(yi<this.width/2.0){return[new ResultPoint(ti-CORR,tj+CORR),new ResultPoint(zi+CORR,zj+CORR),new ResultPoint(xi-CORR,xj-CORR),new ResultPoint(yi+CORR,yj-CORR)];}else{return[new ResultPoint(ti+CORR,tj+CORR),new ResultPoint(zi+CORR,zj-CORR),new ResultPoint(xi-CORR,xj+CORR),new ResultPoint(yi-CORR,yj-CORR)];}};/**
       * Determines whether a segment contains a black point
       *
       * @param a          min value of the scanned coordinate
       * @param b          max value of the scanned coordinate
       * @param fixed      value of fixed coordinate
       * @param horizontal set to true if scan must be horizontal, false if vertical
       * @return true if a black point has been found, else false.
       */WhiteRectangleDetector.prototype.containsBlackPoint=function(a/*int*/,b/*int*/,fixed/*int*/,horizontal){var image=this.image;if(horizontal){for(var x=a;x<=b;x++){if(image.get(x,fixed)){return true;}}}else{for(var y=a;y<=b;y++){if(image.get(fixed,y)){return true;}}}return false;};WhiteRectangleDetector.INIT_SIZE=10;WhiteRectangleDetector.CORR=1;return WhiteRectangleDetector;}();/*
   * Copyright 2007 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /**
   * Implementations of this class can, given locations of finder patterns for a QR code in an
   * image, sample the right points in the image to reconstruct the QR code, accounting for
   * perspective distortion. It is abstracted since it is relatively expensive and should be allowed
   * to take advantage of platform-specific optimized implementations, like Sun's Java Advanced
   * Imaging library, but which may not be available in other environments such as J2ME, and vice
   * versa.
   *
   * The implementation used can be controlled by calling {@link #setGridSampler(GridSampler)}
   * with an instance of a class which implements this interface.
   *
   * @author Sean Owen
   */var GridSampler=/** @class */function(){function GridSampler(){}/**
       * <p>Checks a set of points that have been transformed to sample points on an image against
       * the image's dimensions to see if the point are even within the image.</p>
       *
       * <p>This method will actually "nudge" the endpoints back onto the image if they are found to be
       * barely (less than 1 pixel) off the image. This accounts for imperfect detection of finder
       * patterns in an image where the QR Code runs all the way to the image border.</p>
       *
       * <p>For efficiency, the method will check points from either end of the line until one is found
       * to be within the image. Because the set of points are assumed to be linear, this is valid.</p>
       *
       * @param image image into which the points should map
       * @param points actual points in x1,y1,...,xn,yn form
       * @throws NotFoundException if an endpoint is lies outside the image boundaries
       */GridSampler.checkAndNudgePoints=function(image,points){var width=image.getWidth();var height=image.getHeight();// Check and nudge points from start until we see some that are OK:
var nudged=true;for(var offset=0;offset<points.length&&nudged;offset+=2){var x=Math.floor(points[offset]);var y=Math.floor(points[offset+1]);if(x<-1||x>width||y<-1||y>height){throw new NotFoundException();}nudged=false;if(x===-1){points[offset]=0.0;nudged=true;}else if(x===width){points[offset]=width-1;nudged=true;}if(y===-1){points[offset+1]=0.0;nudged=true;}else if(y===height){points[offset+1]=height-1;nudged=true;}}// Check and nudge points from end:
nudged=true;for(var offset=points.length-2;offset>=0&&nudged;offset-=2){var x=Math.floor(points[offset]);var y=Math.floor(points[offset+1]);if(x<-1||x>width||y<-1||y>height){throw new NotFoundException();}nudged=false;if(x===-1){points[offset]=0.0;nudged=true;}else if(x===width){points[offset]=width-1;nudged=true;}if(y===-1){points[offset+1]=0.0;nudged=true;}else if(y===height){points[offset+1]=height-1;nudged=true;}}};return GridSampler;}();/*
   * Copyright 2007 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /*namespace com.google.zxing.common {*/ /**
   * <p>This class implements a perspective transform in two dimensions. Given four source and four
   * destination points, it will compute the transformation implied between them. The code is based
   * directly upon section 3.4.2 of George Wolberg's "Digital Image Warping"; see pages 54-56.</p>
   *
   * @author Sean Owen
   */var PerspectiveTransform=/** @class */function(){function PerspectiveTransform(a11/*float*/,a21/*float*/,a31/*float*/,a12/*float*/,a22/*float*/,a32/*float*/,a13/*float*/,a23/*float*/,a33/*float*/){this.a11=a11;this.a21=a21;this.a31=a31;this.a12=a12;this.a22=a22;this.a32=a32;this.a13=a13;this.a23=a23;this.a33=a33;}PerspectiveTransform.quadrilateralToQuadrilateral=function(x0/*float*/,y0/*float*/,x1/*float*/,y1/*float*/,x2/*float*/,y2/*float*/,x3/*float*/,y3/*float*/,x0p/*float*/,y0p/*float*/,x1p/*float*/,y1p/*float*/,x2p/*float*/,y2p/*float*/,x3p/*float*/,y3p/*float*/){var qToS=PerspectiveTransform.quadrilateralToSquare(x0,y0,x1,y1,x2,y2,x3,y3);var sToQ=PerspectiveTransform.squareToQuadrilateral(x0p,y0p,x1p,y1p,x2p,y2p,x3p,y3p);return sToQ.times(qToS);};PerspectiveTransform.prototype.transformPoints=function(points){var max=points.length;var a11=this.a11;var a12=this.a12;var a13=this.a13;var a21=this.a21;var a22=this.a22;var a23=this.a23;var a31=this.a31;var a32=this.a32;var a33=this.a33;for(var i=0;i<max;i+=2){var x=points[i];var y=points[i+1];var denominator=a13*x+a23*y+a33;points[i]=(a11*x+a21*y+a31)/denominator;points[i+1]=(a12*x+a22*y+a32)/denominator;}};PerspectiveTransform.prototype.transformPointsWithValues=function(xValues,yValues){var a11=this.a11;var a12=this.a12;var a13=this.a13;var a21=this.a21;var a22=this.a22;var a23=this.a23;var a31=this.a31;var a32=this.a32;var a33=this.a33;var n=xValues.length;for(var i=0;i<n;i++){var x=xValues[i];var y=yValues[i];var denominator=a13*x+a23*y+a33;xValues[i]=(a11*x+a21*y+a31)/denominator;yValues[i]=(a12*x+a22*y+a32)/denominator;}};PerspectiveTransform.squareToQuadrilateral=function(x0/*float*/,y0/*float*/,x1/*float*/,y1/*float*/,x2/*float*/,y2/*float*/,x3/*float*/,y3/*float*/){var dx3=x0-x1+x2-x3;var dy3=y0-y1+y2-y3;if(dx3===0.0&&dy3===0.0){// Affine
return new PerspectiveTransform(x1-x0,x2-x1,x0,y1-y0,y2-y1,y0,0.0,0.0,1.0);}else{var dx1=x1-x2;var dx2=x3-x2;var dy1=y1-y2;var dy2=y3-y2;var denominator=dx1*dy2-dx2*dy1;var a13=(dx3*dy2-dx2*dy3)/denominator;var a23=(dx1*dy3-dx3*dy1)/denominator;return new PerspectiveTransform(x1-x0+a13*x1,x3-x0+a23*x3,x0,y1-y0+a13*y1,y3-y0+a23*y3,y0,a13,a23,1.0);}};PerspectiveTransform.quadrilateralToSquare=function(x0/*float*/,y0/*float*/,x1/*float*/,y1/*float*/,x2/*float*/,y2/*float*/,x3/*float*/,y3/*float*/){// Here, the adjoint serves as the inverse:
return PerspectiveTransform.squareToQuadrilateral(x0,y0,x1,y1,x2,y2,x3,y3).buildAdjoint();};PerspectiveTransform.prototype.buildAdjoint=function(){// Adjoint is the transpose of the cofactor matrix:
return new PerspectiveTransform(this.a22*this.a33-this.a23*this.a32,this.a23*this.a31-this.a21*this.a33,this.a21*this.a32-this.a22*this.a31,this.a13*this.a32-this.a12*this.a33,this.a11*this.a33-this.a13*this.a31,this.a12*this.a31-this.a11*this.a32,this.a12*this.a23-this.a13*this.a22,this.a13*this.a21-this.a11*this.a23,this.a11*this.a22-this.a12*this.a21);};PerspectiveTransform.prototype.times=function(other){return new PerspectiveTransform(this.a11*other.a11+this.a21*other.a12+this.a31*other.a13,this.a11*other.a21+this.a21*other.a22+this.a31*other.a23,this.a11*other.a31+this.a21*other.a32+this.a31*other.a33,this.a12*other.a11+this.a22*other.a12+this.a32*other.a13,this.a12*other.a21+this.a22*other.a22+this.a32*other.a23,this.a12*other.a31+this.a22*other.a32+this.a32*other.a33,this.a13*other.a11+this.a23*other.a12+this.a33*other.a13,this.a13*other.a21+this.a23*other.a22+this.a33*other.a23,this.a13*other.a31+this.a23*other.a32+this.a33*other.a33);};return PerspectiveTransform;}();/*
   * Copyright 2007 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __extends$j=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * @author Sean Owen
   */var DefaultGridSampler=/** @class */function(_super){__extends$j(DefaultGridSampler,_super);function DefaultGridSampler(){return _super!==null&&_super.apply(this,arguments)||this;}/*@Override*/DefaultGridSampler.prototype.sampleGrid=function(image,dimensionX/*int*/,dimensionY/*int*/,p1ToX/*float*/,p1ToY/*float*/,p2ToX/*float*/,p2ToY/*float*/,p3ToX/*float*/,p3ToY/*float*/,p4ToX/*float*/,p4ToY/*float*/,p1FromX/*float*/,p1FromY/*float*/,p2FromX/*float*/,p2FromY/*float*/,p3FromX/*float*/,p3FromY/*float*/,p4FromX/*float*/,p4FromY/*float*/){var transform=PerspectiveTransform.quadrilateralToQuadrilateral(p1ToX,p1ToY,p2ToX,p2ToY,p3ToX,p3ToY,p4ToX,p4ToY,p1FromX,p1FromY,p2FromX,p2FromY,p3FromX,p3FromY,p4FromX,p4FromY);return this.sampleGridWithTransform(image,dimensionX,dimensionY,transform);};/*@Override*/DefaultGridSampler.prototype.sampleGridWithTransform=function(image,dimensionX/*int*/,dimensionY/*int*/,transform){if(dimensionX<=0||dimensionY<=0){throw new NotFoundException();}var bits=new BitMatrix(dimensionX,dimensionY);var points=new Float32Array(2*dimensionX);for(var y=0;y<dimensionY;y++){var max=points.length;var iValue=y+0.5;for(var x=0;x<max;x+=2){points[x]=x/2+0.5;points[x+1]=iValue;}transform.transformPoints(points);// Quick check to see if points transformed to something inside the image
// sufficient to check the endpoints
GridSampler.checkAndNudgePoints(image,points);try{for(var x=0;x<max;x+=2){if(image.get(Math.floor(points[x]),Math.floor(points[x+1]))){// Black(-ish) pixel
bits.set(x/2,y);}}}catch(aioobe/*: ArrayIndexOutOfBoundsException*/){// This feels wrong, but, sometimes if the finder patterns are misidentified, the resulting
// transform gets "twisted" such that it maps a straight line of points to a set of points
// whose endpoints are in bounds, but others are not. There is probably some mathematical
// way to detect this about the transformation that I don't know yet.
// This results in an ugly runtime exception despite our clever checks above -- can't have
// that. We could check each point's coordinates but that feels duplicative. We settle for
// catching and wrapping ArrayIndexOutOfBoundsException.
throw new NotFoundException();}}return bits;};return DefaultGridSampler;}(GridSampler);var GridSamplerInstance=/** @class */function(){function GridSamplerInstance(){}/**
       * Sets the implementation of GridSampler used by the library. One global
       * instance is stored, which may sound problematic. But, the implementation provided
       * ought to be appropriate for the entire platform, and all uses of this library
       * in the whole lifetime of the JVM. For instance, an Android activity can swap in
       * an implementation that takes advantage of native platform libraries.
       *
       * @param newGridSampler The platform-specific object to install.
       */GridSamplerInstance.setGridSampler=function(newGridSampler){GridSamplerInstance.gridSampler=newGridSampler;};/**
       * @return the current implementation of GridSampler
       */GridSamplerInstance.getInstance=function(){return GridSamplerInstance.gridSampler;};GridSamplerInstance.gridSampler=new DefaultGridSampler();return GridSamplerInstance;}();/*
   * Copyright 2010 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var Point=/** @class */function(){function Point(x,y){this.x=x;this.y=y;}Point.prototype.toResultPoint=function(){return new ResultPoint(this.getX(),this.getY());};Point.prototype.getX=function(){return this.x;};Point.prototype.getY=function(){return this.y;};return Point;}();/**
   * Encapsulates logic that can detect an Aztec Code in an image, even if the Aztec Code
   * is rotated or skewed, or partially obscured.
   *
   * @author David Olivier
   * @author Frank Yellin
   */var Detector=/** @class */function(){function Detector(image){this.EXPECTED_CORNER_BITS=new Int32Array([0xee0,0x1dc,0x83b,0x707]);this.image=image;}Detector.prototype.detect=function(){return this.detectMirror(false);};/**
       * Detects an Aztec Code in an image.
       *
       * @param isMirror if true, image is a mirror-image of original
       * @return {@link AztecDetectorResult} encapsulating results of detecting an Aztec Code
       * @throws NotFoundException if no Aztec Code can be found
       */Detector.prototype.detectMirror=function(isMirror){// 1. Get the center of the aztec matrix
var pCenter=this.getMatrixCenter();// 2. Get the center points of the four diagonal points just outside the bull's eye
//  [topRight, bottomRight, bottomLeft, topLeft]
var bullsEyeCorners=this.getBullsEyeCorners(pCenter);if(isMirror){var temp=bullsEyeCorners[0];bullsEyeCorners[0]=bullsEyeCorners[2];bullsEyeCorners[2]=temp;}// 3. Get the size of the matrix and other parameters from the bull's eye
this.extractParameters(bullsEyeCorners);// 4. Sample the grid
var bits=this.sampleGrid(this.image,bullsEyeCorners[this.shift%4],bullsEyeCorners[(this.shift+1)%4],bullsEyeCorners[(this.shift+2)%4],bullsEyeCorners[(this.shift+3)%4]);// 5. Get the corners of the matrix.
var corners=this.getMatrixCornerPoints(bullsEyeCorners);return new AztecDetectorResult(bits,corners,this.compact,this.nbDataBlocks,this.nbLayers);};/**
       * Extracts the number of data layers and data blocks from the layer around the bull's eye.
       *
       * @param bullsEyeCorners the array of bull's eye corners
       * @throws NotFoundException in case of too many errors or invalid parameters
       */Detector.prototype.extractParameters=function(bullsEyeCorners){if(!this.isValidPoint(bullsEyeCorners[0])||!this.isValidPoint(bullsEyeCorners[1])||!this.isValidPoint(bullsEyeCorners[2])||!this.isValidPoint(bullsEyeCorners[3])){throw new NotFoundException();}var length=2*this.nbCenterLayers;// Get the bits around the bull's eye
var sides=new Int32Array([this.sampleLine(bullsEyeCorners[0],bullsEyeCorners[1],length),this.sampleLine(bullsEyeCorners[1],bullsEyeCorners[2],length),this.sampleLine(bullsEyeCorners[2],bullsEyeCorners[3],length),this.sampleLine(bullsEyeCorners[3],bullsEyeCorners[0],length)// Top
]);// bullsEyeCorners[shift] is the corner of the bulls'eye that has three
// orientation marks.
// sides[shift] is the row/column that goes from the corner with three
// orientation marks to the corner with two.
this.shift=this.getRotation(sides,length);// Flatten the parameter bits into a single 28- or 40-bit long
var parameterData=0;for(var i=0;i<4;i++){var side=sides[(this.shift+i)%4];if(this.compact){// Each side of the form ..XXXXXXX. where Xs are parameter data
parameterData<<=7;parameterData+=side>>1&0x7F;}else{// Each side of the form ..XXXXX.XXXXX. where Xs are parameter data
parameterData<<=10;parameterData+=(side>>2&0x1f<<5)+(side>>1&0x1F);}}// Corrects parameter data using RS.  Returns just the data portion
// without the error correction.
var correctedData=this.getCorrectedParameterData(parameterData,this.compact);if(this.compact){// 8 bits:  2 bits layers and 6 bits data blocks
this.nbLayers=(correctedData>>6)+1;this.nbDataBlocks=(correctedData&0x3F)+1;}else{// 16 bits:  5 bits layers and 11 bits data blocks
this.nbLayers=(correctedData>>11)+1;this.nbDataBlocks=(correctedData&0x7FF)+1;}};Detector.prototype.getRotation=function(sides,length){// In a normal pattern, we expect to See
//   **    .*             D       A
//   *      *
//
//   .      *
//   ..    ..             C       B
//
// Grab the 3 bits from each of the sides the form the locator pattern and concatenate
// into a 12-bit integer.  Start with the bit at A
var cornerBits=0;sides.forEach(function(side,idx,arr){// XX......X where X's are orientation marks
var t=(side>>length-2<<1)+(side&1);cornerBits=(cornerBits<<3)+t;});// for (var side in sides) {
//     // XX......X where X's are orientation marks
//     var t = ((side >> (length - 2)) << 1) + (side & 1);
//     cornerBits = (cornerBits << 3) + t;
// }
// Mov the bottom bit to the top, so that the three bits of the locator pattern at A are
// together.  cornerBits is now:
//  3 orientation bits at A || 3 orientation bits at B || ... || 3 orientation bits at D
cornerBits=((cornerBits&1)<<11)+(cornerBits>>1);// The result shift indicates which element of BullsEyeCorners[] goes into the top-left
// corner. Since the four rotation values have a Hamming distance of 8, we
// can easily tolerate two errors.
for(var shift=0;shift<4;shift++){if(Integer.bitCount(cornerBits^this.EXPECTED_CORNER_BITS[shift])<=2){return shift;}}throw new NotFoundException();};/**
       * Corrects the parameter bits using Reed-Solomon algorithm.
       *
       * @param parameterData parameter bits
       * @param compact true if this is a compact Aztec code
       * @throws NotFoundException if the array contains too many errors
       */Detector.prototype.getCorrectedParameterData=function(parameterData,compact){var numCodewords;var numDataCodewords;if(compact){numCodewords=7;numDataCodewords=2;}else{numCodewords=10;numDataCodewords=4;}var numECCodewords=numCodewords-numDataCodewords;var parameterWords=new Int32Array(numCodewords);for(var i=numCodewords-1;i>=0;--i){parameterWords[i]=parameterData&0xF;parameterData>>=4;}try{var rsDecoder=new ReedSolomonDecoder(GenericGF.AZTEC_PARAM);rsDecoder.decode(parameterWords,numECCodewords);}catch(ignored){throw new NotFoundException();}// Toss the error correction.  Just return the data as an integer
var result=0;for(var i=0;i<numDataCodewords;i++){result=(result<<4)+parameterWords[i];}return result;};/**
       * Finds the corners of a bull-eye centered on the passed point.
       * This returns the centers of the diagonal points just outside the bull's eye
       * Returns [topRight, bottomRight, bottomLeft, topLeft]
       *
       * @param pCenter Center point
       * @return The corners of the bull-eye
       * @throws NotFoundException If no valid bull-eye can be found
       */Detector.prototype.getBullsEyeCorners=function(pCenter){var pina=pCenter;var pinb=pCenter;var pinc=pCenter;var pind=pCenter;var color=true;for(this.nbCenterLayers=1;this.nbCenterLayers<9;this.nbCenterLayers++){var pouta=this.getFirstDifferent(pina,color,1,-1);var poutb=this.getFirstDifferent(pinb,color,1,1);var poutc=this.getFirstDifferent(pinc,color,-1,1);var poutd=this.getFirstDifferent(pind,color,-1,-1);// d      a
//
// c      b
if(this.nbCenterLayers>2){var q=this.distancePoint(poutd,pouta)*this.nbCenterLayers/(this.distancePoint(pind,pina)*(this.nbCenterLayers+2));if(q<0.75||q>1.25||!this.isWhiteOrBlackRectangle(pouta,poutb,poutc,poutd)){break;}}pina=pouta;pinb=poutb;pinc=poutc;pind=poutd;color=!color;}if(this.nbCenterLayers!==5&&this.nbCenterLayers!==7){throw new NotFoundException();}this.compact=this.nbCenterLayers===5;// Expand the square by .5 pixel in each direction so that we're on the border
// between the white square and the black square
var pinax=new ResultPoint(pina.getX()+0.5,pina.getY()-0.5);var pinbx=new ResultPoint(pinb.getX()+0.5,pinb.getY()+0.5);var pincx=new ResultPoint(pinc.getX()-0.5,pinc.getY()+0.5);var pindx=new ResultPoint(pind.getX()-0.5,pind.getY()-0.5);// Expand the square so that its corners are the centers of the points
// just outside the bull's eye.
return this.expandSquare([pinax,pinbx,pincx,pindx],2*this.nbCenterLayers-3,2*this.nbCenterLayers);};/**
       * Finds a candidate center point of an Aztec code from an image
       *
       * @return the center point
       */Detector.prototype.getMatrixCenter=function(){var pointA;var pointB;var pointC;var pointD;// Get a white rectangle that can be the border of the matrix in center bull's eye or
try{var cornerPoints=new WhiteRectangleDetector(this.image).detect();pointA=cornerPoints[0];pointB=cornerPoints[1];pointC=cornerPoints[2];pointD=cornerPoints[3];}catch(e){// This exception can be in case the initial rectangle is white
// In that case, surely in the bull's eye, we try to expand the rectangle.
var cx_1=this.image.getWidth()/2;var cy_1=this.image.getHeight()/2;pointA=this.getFirstDifferent(new Point(cx_1+7,cy_1-7),false,1,-1).toResultPoint();pointB=this.getFirstDifferent(new Point(cx_1+7,cy_1+7),false,1,1).toResultPoint();pointC=this.getFirstDifferent(new Point(cx_1-7,cy_1+7),false,-1,1).toResultPoint();pointD=this.getFirstDifferent(new Point(cx_1-7,cy_1-7),false,-1,-1).toResultPoint();}// Compute the center of the rectangle
var cx=MathUtils.round((pointA.getX()+pointD.getX()+pointB.getX()+pointC.getX())/4.0);var cy=MathUtils.round((pointA.getY()+pointD.getY()+pointB.getY()+pointC.getY())/4.0);// Redetermine the white rectangle starting from previously computed center.
// This will ensure that we end up with a white rectangle in center bull's eye
// in order to compute a more accurate center.
try{var cornerPoints=new WhiteRectangleDetector(this.image,15,cx,cy).detect();pointA=cornerPoints[0];pointB=cornerPoints[1];pointC=cornerPoints[2];pointD=cornerPoints[3];}catch(e){// This exception can be in case the initial rectangle is white
// In that case we try to expand the rectangle.
pointA=this.getFirstDifferent(new Point(cx+7,cy-7),false,1,-1).toResultPoint();pointB=this.getFirstDifferent(new Point(cx+7,cy+7),false,1,1).toResultPoint();pointC=this.getFirstDifferent(new Point(cx-7,cy+7),false,-1,1).toResultPoint();pointD=this.getFirstDifferent(new Point(cx-7,cy-7),false,-1,-1).toResultPoint();}// Recompute the center of the rectangle
cx=MathUtils.round((pointA.getX()+pointD.getX()+pointB.getX()+pointC.getX())/4.0);cy=MathUtils.round((pointA.getY()+pointD.getY()+pointB.getY()+pointC.getY())/4.0);return new Point(cx,cy);};/**
       * Gets the Aztec code corners from the bull's eye corners and the parameters.
       *
       * @param bullsEyeCorners the array of bull's eye corners
       * @return the array of aztec code corners
       */Detector.prototype.getMatrixCornerPoints=function(bullsEyeCorners){return this.expandSquare(bullsEyeCorners,2*this.nbCenterLayers,this.getDimension());};/**
       * Creates a BitMatrix by sampling the provided image.
       * topLeft, topRight, bottomRight, and bottomLeft are the centers of the squares on the
       * diagonal just outside the bull's eye.
       */Detector.prototype.sampleGrid=function(image,topLeft,topRight,bottomRight,bottomLeft){var sampler=GridSamplerInstance.getInstance();var dimension=this.getDimension();var low=dimension/2-this.nbCenterLayers;var high=dimension/2+this.nbCenterLayers;return sampler.sampleGrid(image,dimension,dimension,low,low,// topleft
high,low,// topright
high,high,// bottomright
low,high,// bottomleft
topLeft.getX(),topLeft.getY(),topRight.getX(),topRight.getY(),bottomRight.getX(),bottomRight.getY(),bottomLeft.getX(),bottomLeft.getY());};/**
       * Samples a line.
       *
       * @param p1   start point (inclusive)
       * @param p2   end point (exclusive)
       * @param size number of bits
       * @return the array of bits as an int (first bit is high-order bit of result)
       */Detector.prototype.sampleLine=function(p1,p2,size){var result=0;var d=this.distanceResultPoint(p1,p2);var moduleSize=d/size;var px=p1.getX();var py=p1.getY();var dx=moduleSize*(p2.getX()-p1.getX())/d;var dy=moduleSize*(p2.getY()-p1.getY())/d;for(var i=0;i<size;i++){if(this.image.get(MathUtils.round(px+i*dx),MathUtils.round(py+i*dy))){result|=1<<size-i-1;}}return result;};/**
       * @return true if the border of the rectangle passed in parameter is compound of white points only
       *         or black points only
       */Detector.prototype.isWhiteOrBlackRectangle=function(p1,p2,p3,p4){var corr=3;p1=new Point(p1.getX()-corr,p1.getY()+corr);p2=new Point(p2.getX()-corr,p2.getY()-corr);p3=new Point(p3.getX()+corr,p3.getY()-corr);p4=new Point(p4.getX()+corr,p4.getY()+corr);var cInit=this.getColor(p4,p1);if(cInit===0){return false;}var c=this.getColor(p1,p2);if(c!==cInit){return false;}c=this.getColor(p2,p3);if(c!==cInit){return false;}c=this.getColor(p3,p4);return c===cInit;};/**
       * Gets the color of a segment
       *
       * @return 1 if segment more than 90% black, -1 if segment is more than 90% white, 0 else
       */Detector.prototype.getColor=function(p1,p2){var d=this.distancePoint(p1,p2);var dx=(p2.getX()-p1.getX())/d;var dy=(p2.getY()-p1.getY())/d;var error=0;var px=p1.getX();var py=p1.getY();var colorModel=this.image.get(p1.getX(),p1.getY());var iMax=Math.ceil(d);for(var i=0;i<iMax;i++){px+=dx;py+=dy;if(this.image.get(MathUtils.round(px),MathUtils.round(py))!==colorModel){error++;}}var errRatio=error/d;if(errRatio>0.1&&errRatio<0.9){return 0;}return errRatio<=0.1===colorModel?1:-1;};/**
       * Gets the coordinate of the first point with a different color in the given direction
       */Detector.prototype.getFirstDifferent=function(init,color,dx,dy){var x=init.getX()+dx;var y=init.getY()+dy;while(this.isValid(x,y)&&this.image.get(x,y)===color){x+=dx;y+=dy;}x-=dx;y-=dy;while(this.isValid(x,y)&&this.image.get(x,y)===color){x+=dx;}x-=dx;while(this.isValid(x,y)&&this.image.get(x,y)===color){y+=dy;}y-=dy;return new Point(x,y);};/**
       * Expand the square represented by the corner points by pushing out equally in all directions
       *
       * @param cornerPoints the corners of the square, which has the bull's eye at its center
       * @param oldSide the original length of the side of the square in the target bit matrix
       * @param newSide the new length of the size of the square in the target bit matrix
       * @return the corners of the expanded square
       */Detector.prototype.expandSquare=function(cornerPoints,oldSide,newSide){var ratio=newSide/(2.0*oldSide);var dx=cornerPoints[0].getX()-cornerPoints[2].getX();var dy=cornerPoints[0].getY()-cornerPoints[2].getY();var centerx=(cornerPoints[0].getX()+cornerPoints[2].getX())/2.0;var centery=(cornerPoints[0].getY()+cornerPoints[2].getY())/2.0;var result0=new ResultPoint(centerx+ratio*dx,centery+ratio*dy);var result2=new ResultPoint(centerx-ratio*dx,centery-ratio*dy);dx=cornerPoints[1].getX()-cornerPoints[3].getX();dy=cornerPoints[1].getY()-cornerPoints[3].getY();centerx=(cornerPoints[1].getX()+cornerPoints[3].getX())/2.0;centery=(cornerPoints[1].getY()+cornerPoints[3].getY())/2.0;var result1=new ResultPoint(centerx+ratio*dx,centery+ratio*dy);var result3=new ResultPoint(centerx-ratio*dx,centery-ratio*dy);var results=[result0,result1,result2,result3];return results;};Detector.prototype.isValid=function(x,y){return x>=0&&x<this.image.getWidth()&&y>0&&y<this.image.getHeight();};Detector.prototype.isValidPoint=function(point){var x=MathUtils.round(point.getX());var y=MathUtils.round(point.getY());return this.isValid(x,y);};Detector.prototype.distancePoint=function(a,b){return MathUtils.distance(a.getX(),a.getY(),b.getX(),b.getY());};Detector.prototype.distanceResultPoint=function(a,b){return MathUtils.distance(a.getX(),a.getY(),b.getX(),b.getY());};Detector.prototype.getDimension=function(){if(this.compact){return 4*this.nbLayers+11;}if(this.nbLayers<=4){return 4*this.nbLayers+15;}return 4*this.nbLayers+2*(Integer.truncDivision(this.nbLayers-4,8)+1)+15;};return Detector;}();/*
   * Copyright 2010 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ // import java.util.List;
// import java.util.Map;
/**
   * This implementation can detect and decode Aztec codes in an image.
   *
   * @author David Olivier
   */var AztecReader=/** @class */function(){function AztecReader(){}/**
       * Locates and decodes a Data Matrix code in an image.
       *
       * @return a String representing the content encoded by the Data Matrix code
       * @throws NotFoundException if a Data Matrix code cannot be found
       * @throws FormatException if a Data Matrix code cannot be decoded
       */AztecReader.prototype.decode=function(image,hints){if(hints===void 0){hints=null;}var exception=null;var detector=new Detector(image.getBlackMatrix());var points=null;var decoderResult=null;try{var detectorResult=detector.detectMirror(false);points=detectorResult.getPoints();this.reportFoundResultPoints(hints,points);decoderResult=new Decoder().decode(detectorResult);}catch(e){exception=e;}if(decoderResult==null){try{var detectorResult=detector.detectMirror(true);points=detectorResult.getPoints();this.reportFoundResultPoints(hints,points);decoderResult=new Decoder().decode(detectorResult);}catch(e){if(exception!=null){throw exception;}throw e;}}var result=new Result(decoderResult.getText(),decoderResult.getRawBytes(),decoderResult.getNumBits(),points,BarcodeFormat$1.AZTEC,System.currentTimeMillis());var byteSegments=decoderResult.getByteSegments();if(byteSegments!=null){result.putMetadata(ResultMetadataType$1.BYTE_SEGMENTS,byteSegments);}var ecLevel=decoderResult.getECLevel();if(ecLevel!=null){result.putMetadata(ResultMetadataType$1.ERROR_CORRECTION_LEVEL,ecLevel);}return result;};AztecReader.prototype.reportFoundResultPoints=function(hints,points){if(hints!=null){var rpcb_1=hints.get(DecodeHintType$1.NEED_RESULT_POINT_CALLBACK);if(rpcb_1!=null){points.forEach(function(point,idx,arr){rpcb_1.foundPossibleResultPoint(point);});}}};// @Override
AztecReader.prototype.reset=function(){// do nothing
};return AztecReader;}();var __extends$k=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * Aztec Code reader to use from browser.
   *
   * @class BrowserAztecCodeReader
   * @extends {BrowserCodeReader}
   */var BrowserAztecCodeReader=/** @class */function(_super){__extends$k(BrowserAztecCodeReader,_super);/**
       * Creates an instance of BrowserAztecCodeReader.
       * @param {number} [timeBetweenScansMillis=500] the time delay between subsequent decode tries
       *
       * @memberOf BrowserAztecCodeReader
       */function BrowserAztecCodeReader(timeBetweenScansMillis){if(timeBetweenScansMillis===void 0){timeBetweenScansMillis=500;}return _super.call(this,new AztecReader(),timeBetweenScansMillis)||this;}return BrowserAztecCodeReader;}(BrowserCodeReader);/*
   * Copyright 2008 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /**
   * Encapsulates functionality and implementation that is common to all families
   * of one-dimensional barcodes.
   *
   * @author dswitkin@google.com (Daniel Switkin)
   * @author Sean Owen
   */var OneDReader=/** @class */function(){function OneDReader(){}/*
      @Override
      public Result decode(BinaryBitmap image) throws NotFoundException, FormatException {
        return decode(image, null);
      }
      */ // Note that we don't try rotation without the try harder flag, even if rotation was supported.
// @Override
OneDReader.prototype.decode=function(image,hints){try{return this.doDecode(image,hints);}catch(nfe){var tryHarder=hints&&hints.get(DecodeHintType$1.TRY_HARDER)===true;if(tryHarder&&image.isRotateSupported()){var rotatedImage=image.rotateCounterClockwise();var result=this.doDecode(rotatedImage,hints);// Record that we found it rotated 90 degrees CCW / 270 degrees CW
var metadata=result.getResultMetadata();var orientation_1=270;if(metadata!==null&&metadata.get(ResultMetadataType$1.ORIENTATION)===true){// But if we found it reversed in doDecode(), add in that result here:
orientation_1=orientation_1+metadata.get(ResultMetadataType$1.ORIENTATION)%360;}result.putMetadata(ResultMetadataType$1.ORIENTATION,orientation_1);// Update result points
var points=result.getResultPoints();if(points!==null){var height=rotatedImage.getHeight();for(var i=0;i<points.length;i++){points[i]=new ResultPoint(height-points[i].getY()-1,points[i].getX());}}return result;}else{throw new NotFoundException();}}};// @Override
OneDReader.prototype.reset=function(){// do nothing
};/**
       * We're going to examine rows from the middle outward, searching alternately above and below the
       * middle, and farther out each time. rowStep is the number of rows between each successive
       * attempt above and below the middle. So we'd scan row middle, then middle - rowStep, then
       * middle + rowStep, then middle - (2 * rowStep), etc.
       * rowStep is bigger as the image is taller, but is always at least 1. We've somewhat arbitrarily
       * decided that moving up and down by about 1/16 of the image is pretty good; we try more of the
       * image if "trying harder".
       *
       * @param image The image to decode
       * @param hints Any hints that were requested
       * @return The contents of the decoded barcode
       * @throws NotFoundException Any spontaneous errors which occur
       */OneDReader.prototype.doDecode=function(image,hints){var width=image.getWidth();var height=image.getHeight();var row=new BitArray(width);var tryHarder=hints&&hints.get(DecodeHintType$1.TRY_HARDER)===true;var rowStep=Math.max(1,height>>(tryHarder?8:5));var maxLines;if(tryHarder){maxLines=height;// Look at the whole image, not just the center
}else{maxLines=15;// 15 rows spaced 1/32 apart is roughly the middle half of the image
}var middle=Math.trunc(height/2);for(var x=0;x<maxLines;x++){// Scanning from the middle out. Determine which row we're looking at next:
var rowStepsAboveOrBelow=Math.trunc((x+1)/2);var isAbove=(x&0x01)===0;// i.e. is x even?
var rowNumber=middle+rowStep*(isAbove?rowStepsAboveOrBelow:-rowStepsAboveOrBelow);if(rowNumber<0||rowNumber>=height){// Oops, if we run off the top or bottom, stop
break;}// Estimate black point for this row and load it:
try{row=image.getBlackRow(rowNumber,row);}catch(ignored){continue;}var _loop_1=function(attempt){if(attempt===1){// trying again?
row.reverse();// reverse the row and continue
// This means we will only ever draw result points *once* in the life of this method
// since we want to avoid drawing the wrong points after flipping the row, and,
// don't want to clutter with noise from every single row scan -- just the scans
// that start on the center line.
if(hints&&hints.get(DecodeHintType$1.NEED_RESULT_POINT_CALLBACK)===true){var newHints_1=new Map();hints.forEach(function(hint,key){return newHints_1.set(key,hint);});newHints_1.delete(DecodeHintType$1.NEED_RESULT_POINT_CALLBACK);hints=newHints_1;}}try{// Look for a barcode
var result=this_1.decodeRow(rowNumber,row,hints);// We found our barcode
if(attempt===1){// But it was upside down, so note that
result.putMetadata(ResultMetadataType$1.ORIENTATION,180);// And remember to flip the result points horizontally.
var points=result.getResultPoints();if(points!==null){points[0]=new ResultPoint(width-points[0].getX()-1,points[0].getY());points[1]=new ResultPoint(width-points[1].getX()-1,points[1].getY());}}return{value:result};}catch(re){// continue -- just couldn't decode this row
}};var this_1=this;// While we have the image data in a BitArray, it's fairly cheap to reverse it in place to
// handle decoding upside down barcodes.
for(var attempt=0;attempt<2;attempt++){var state_1=_loop_1(attempt);if(typeof state_1==="object")return state_1.value;}}throw new NotFoundException();};/**
       * Records the size of successive runs of white and black pixels in a row, starting at a given point.
       * The values are recorded in the given array, and the number of runs recorded is equal to the size
       * of the array. If the row starts on a white pixel at the given start point, then the first count
       * recorded is the run of white pixels starting from that point; likewise it is the count of a run
       * of black pixels if the row begin on a black pixels at that point.
       *
       * @param row row to count from
       * @param start offset into row to start at
       * @param counters array into which to record counts
       * @throws NotFoundException if counters cannot be filled entirely from row before running out
       *  of pixels
       */OneDReader.recordPattern=function(row,start,counters){var numCounters=counters.length;for(var index=0;index<numCounters;index++)counters[index]=0;var end=row.getSize();if(start>=end){throw new NotFoundException();}var isWhite=!row.get(start);var counterPosition=0;var i=start;while(i<end){if(row.get(i)!==isWhite){counters[counterPosition]++;}else{if(++counterPosition===numCounters){break;}else{counters[counterPosition]=1;isWhite=!isWhite;}}i++;}// If we read fully the last section of pixels and filled up our counters -- or filled
// the last counter but ran off the side of the image, OK. Otherwise, a problem.
if(!(counterPosition===numCounters||counterPosition===numCounters-1&&i===end)){throw new NotFoundException();}};OneDReader.recordPatternInReverse=function(row,start,counters){// This could be more efficient I guess
var numTransitionsLeft=counters.length;var last=row.get(start);while(start>0&&numTransitionsLeft>=0){if(row.get(--start)!==last){numTransitionsLeft--;last=!last;}}if(numTransitionsLeft>=0){throw new NotFoundException();}OneDReader.recordPattern(row,start+1,counters);};/**
       * Determines how closely a set of observed counts of runs of black/white values matches a given
       * target pattern. This is reported as the ratio of the total variance from the expected pattern
       * proportions across all pattern elements, to the length of the pattern.
       *
       * @param counters observed counters
       * @param pattern expected pattern
       * @param maxIndividualVariance The most any counter can differ before we give up
       * @return ratio of total variance between counters and pattern compared to total pattern size
       */OneDReader.patternMatchVariance=function(counters,pattern,maxIndividualVariance){var numCounters=counters.length;var total=0;var patternLength=0;for(var i=0;i<numCounters;i++){total+=counters[i];patternLength+=pattern[i];}if(total<patternLength){// If we don't even have one pixel per unit of bar width, assume this is too small
// to reliably match, so fail:
return Number.POSITIVE_INFINITY;}var unitBarWidth=total/patternLength;maxIndividualVariance*=unitBarWidth;var totalVariance=0.0;for(var x=0;x<numCounters;x++){var counter=counters[x];var scaledPattern=pattern[x]*unitBarWidth;var variance=counter>scaledPattern?counter-scaledPattern:scaledPattern-counter;if(variance>maxIndividualVariance){return Number.POSITIVE_INFINITY;}totalVariance+=variance;}return totalVariance/total;};return OneDReader;}();/*
   * Copyright 2008 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __extends$l=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * <p>Decodes Code 128 barcodes.</p>
   *
   * @author Sean Owen
   */var Code128Reader=/** @class */function(_super){__extends$l(Code128Reader,_super);function Code128Reader(){return _super!==null&&_super.apply(this,arguments)||this;}Code128Reader.findStartPattern=function(row){var width=row.getSize();var rowOffset=row.getNextSet(0);var counterPosition=0;var counters=Int32Array.from([0,0,0,0,0,0]);var patternStart=rowOffset;var isWhite=false;var patternLength=6;for(var i=rowOffset;i<width;i++){if(row.get(i)!==isWhite){counters[counterPosition]++;}else{if(counterPosition===patternLength-1){var bestVariance=Code128Reader.MAX_AVG_VARIANCE;var bestMatch=-1;for(var startCode=Code128Reader.CODE_START_A;startCode<=Code128Reader.CODE_START_C;startCode++){var variance=OneDReader.patternMatchVariance(counters,Code128Reader.CODE_PATTERNS[startCode],Code128Reader.MAX_INDIVIDUAL_VARIANCE);if(variance<bestVariance){bestVariance=variance;bestMatch=startCode;}}// Look for whitespace before start pattern, >= 50% of width of start pattern
if(bestMatch>=0&&row.isRange(Math.max(0,patternStart-(i-patternStart)/2),patternStart,false)){return Int32Array.from([patternStart,i,bestMatch]);}patternStart+=counters[0]+counters[1];counters=counters.slice(2,counters.length-1);counters[counterPosition-1]=0;counters[counterPosition]=0;counterPosition--;}else{counterPosition++;}counters[counterPosition]=1;isWhite=!isWhite;}}throw new NotFoundException();};Code128Reader.decodeCode=function(row,counters,rowOffset){OneDReader.recordPattern(row,rowOffset,counters);var bestVariance=Code128Reader.MAX_AVG_VARIANCE;// worst variance we'll accept
var bestMatch=-1;for(var d=0;d<Code128Reader.CODE_PATTERNS.length;d++){var pattern=Code128Reader.CODE_PATTERNS[d];var variance=this.patternMatchVariance(counters,pattern,Code128Reader.MAX_INDIVIDUAL_VARIANCE);if(variance<bestVariance){bestVariance=variance;bestMatch=d;}}// TODO We're overlooking the fact that the STOP pattern has 7 values, not 6.
if(bestMatch>=0){return bestMatch;}else{throw new NotFoundException();}};Code128Reader.prototype.decodeRow=function(rowNumber,row,hints){var convertFNC1=hints&&hints.get(DecodeHintType$1.ASSUME_GS1)===true;var startPatternInfo=Code128Reader.findStartPattern(row);var startCode=startPatternInfo[2];var currentRawCodesIndex=0;var rawCodes=new Uint8Array(20);rawCodes[currentRawCodesIndex++]=startCode;var codeSet;switch(startCode){case Code128Reader.CODE_START_A:codeSet=Code128Reader.CODE_CODE_A;break;case Code128Reader.CODE_START_B:codeSet=Code128Reader.CODE_CODE_B;break;case Code128Reader.CODE_START_C:codeSet=Code128Reader.CODE_CODE_C;break;default:throw new FormatException();}var done=false;var isNextShifted=false;var result='';var lastStart=startPatternInfo[0];var nextStart=startPatternInfo[1];var counters=Int32Array.from([0,0,0,0,0,0]);var lastCode=0;var code=0;var checksumTotal=startCode;var multiplier=0;var lastCharacterWasPrintable=true;var upperMode=false;var shiftUpperMode=false;while(!done){var unshift=isNextShifted;isNextShifted=false;// Save off last code
lastCode=code;// Decode another code from image
code=Code128Reader.decodeCode(row,counters,nextStart);rawCodes[currentRawCodesIndex++]=code;// Remember whether the last code was printable or not (excluding CODE_STOP)
if(code!==Code128Reader.CODE_STOP){lastCharacterWasPrintable=true;}// Add to checksum computation (if not CODE_STOP of course)
if(code!==Code128Reader.CODE_STOP){multiplier++;checksumTotal+=multiplier*code;}// Advance to where the next code will to start
lastStart=nextStart;nextStart+=counters.reduce(function(previous,current){return previous+current;},0);// Take care of illegal start codes
switch(code){case Code128Reader.CODE_START_A:case Code128Reader.CODE_START_B:case Code128Reader.CODE_START_C:throw new FormatException();}switch(codeSet){case Code128Reader.CODE_CODE_A:if(code<64){if(shiftUpperMode===upperMode){result+=String.fromCharCode(' '.charCodeAt(0)+code);}else{result+=String.fromCharCode(' '.charCodeAt(0)+code+128);}shiftUpperMode=false;}else if(code<96){if(shiftUpperMode===upperMode){result+=String.fromCharCode(code-64);}else{result+=String.fromCharCode(code+64);}shiftUpperMode=false;}else{// Don't let CODE_STOP, which always appears, affect whether whether we think the last
// code was printable or not.
if(code!==Code128Reader.CODE_STOP){lastCharacterWasPrintable=false;}switch(code){case Code128Reader.CODE_FNC_1:if(convertFNC1){if(result.length===0){// GS1 specification 5.4.3.7. and 5.4.6.4. If the first char after the start code
// is FNC1 then this is GS1-128. We add the symbology identifier.
result+=']C1';}else{// GS1 specification 5.4.7.5. Every subsequent FNC1 is returned as ASCII 29 (GS)
result+=String.fromCharCode(29);}}break;case Code128Reader.CODE_FNC_2:case Code128Reader.CODE_FNC_3:// do nothing?
break;case Code128Reader.CODE_FNC_4_A:if(!upperMode&&shiftUpperMode){upperMode=true;shiftUpperMode=false;}else if(upperMode&&shiftUpperMode){upperMode=false;shiftUpperMode=false;}else{shiftUpperMode=true;}break;case Code128Reader.CODE_SHIFT:isNextShifted=true;codeSet=Code128Reader.CODE_CODE_B;break;case Code128Reader.CODE_CODE_B:codeSet=Code128Reader.CODE_CODE_B;break;case Code128Reader.CODE_CODE_C:codeSet=Code128Reader.CODE_CODE_C;break;case Code128Reader.CODE_STOP:done=true;break;}}break;case Code128Reader.CODE_CODE_B:if(code<96){if(shiftUpperMode===upperMode){result+=String.fromCharCode(' '.charCodeAt(0)+code);}else{result+=String.fromCharCode(' '.charCodeAt(0)+code+128);}shiftUpperMode=false;}else{if(code!==Code128Reader.CODE_STOP){lastCharacterWasPrintable=false;}switch(code){case Code128Reader.CODE_FNC_1:if(convertFNC1){if(result.length===0){// GS1 specification 5.4.3.7. and 5.4.6.4. If the first char after the start code
// is FNC1 then this is GS1-128. We add the symbology identifier.
result+=']C1';}else{// GS1 specification 5.4.7.5. Every subsequent FNC1 is returned as ASCII 29 (GS)
result+=String.fromCharCode(29);}}break;case Code128Reader.CODE_FNC_2:case Code128Reader.CODE_FNC_3:// do nothing?
break;case Code128Reader.CODE_FNC_4_B:if(!upperMode&&shiftUpperMode){upperMode=true;shiftUpperMode=false;}else if(upperMode&&shiftUpperMode){upperMode=false;shiftUpperMode=false;}else{shiftUpperMode=true;}break;case Code128Reader.CODE_SHIFT:isNextShifted=true;codeSet=Code128Reader.CODE_CODE_A;break;case Code128Reader.CODE_CODE_A:codeSet=Code128Reader.CODE_CODE_A;break;case Code128Reader.CODE_CODE_C:codeSet=Code128Reader.CODE_CODE_C;break;case Code128Reader.CODE_STOP:done=true;break;}}break;case Code128Reader.CODE_CODE_C:if(code<100){if(code<10){result+='0';}result+=code;}else{if(code!==Code128Reader.CODE_STOP){lastCharacterWasPrintable=false;}switch(code){case Code128Reader.CODE_FNC_1:if(convertFNC1){if(result.length===0){// GS1 specification 5.4.3.7. and 5.4.6.4. If the first char after the start code
// is FNC1 then this is GS1-128. We add the symbology identifier.
result+=']C1';}else{// GS1 specification 5.4.7.5. Every subsequent FNC1 is returned as ASCII 29 (GS)
result+=String.fromCharCode(29);}}break;case Code128Reader.CODE_CODE_A:codeSet=Code128Reader.CODE_CODE_A;break;case Code128Reader.CODE_CODE_B:codeSet=Code128Reader.CODE_CODE_B;break;case Code128Reader.CODE_STOP:done=true;break;}}break;}// Unshift back to another code set if we were shifted
if(unshift){codeSet=codeSet===Code128Reader.CODE_CODE_A?Code128Reader.CODE_CODE_B:Code128Reader.CODE_CODE_A;}}var lastPatternSize=nextStart-lastStart;// Check for ample whitespace following pattern, but, to do this we first need to remember that
// we fudged decoding CODE_STOP since it actually has 7 bars, not 6. There is a black bar left
// to read off. Would be slightly better to properly read. Here we just skip it:
nextStart=row.getNextUnset(nextStart);if(!row.isRange(nextStart,Math.min(row.getSize(),nextStart+(nextStart-lastStart)/2),false)){throw new NotFoundException();}// Pull out from sum the value of the penultimate check code
checksumTotal-=multiplier*lastCode;// lastCode is the checksum then:
if(checksumTotal%103!==lastCode){throw new ChecksumException();}// Need to pull out the check digits from string
var resultLength=result.length;if(resultLength===0){// false positive
throw new NotFoundException();}// Only bother if the result had at least one character, and if the checksum digit happened to
// be a printable character. If it was just interpreted as a control code, nothing to remove.
if(resultLength>0&&lastCharacterWasPrintable){if(codeSet===Code128Reader.CODE_CODE_C){result=result.substring(0,resultLength-2);}else{result=result.substring(0,resultLength-1);}}var left=(startPatternInfo[1]+startPatternInfo[0])/2.0;var right=lastStart+lastPatternSize/2.0;var rawCodesSize=rawCodes.length;var rawBytes=new Uint8Array(rawCodesSize);for(var i=0;i<rawCodesSize;i++){rawBytes[i]=rawCodes[i];}var points=[new ResultPoint(left,rowNumber),new ResultPoint(right,rowNumber)];return new Result(result,rawBytes,0,points,BarcodeFormat$1.CODE_128,new Date().getTime());};Code128Reader.CODE_PATTERNS=[Int32Array.from([2,1,2,2,2,2]),Int32Array.from([2,2,2,1,2,2]),Int32Array.from([2,2,2,2,2,1]),Int32Array.from([1,2,1,2,2,3]),Int32Array.from([1,2,1,3,2,2]),Int32Array.from([1,3,1,2,2,2]),Int32Array.from([1,2,2,2,1,3]),Int32Array.from([1,2,2,3,1,2]),Int32Array.from([1,3,2,2,1,2]),Int32Array.from([2,2,1,2,1,3]),Int32Array.from([2,2,1,3,1,2]),Int32Array.from([2,3,1,2,1,2]),Int32Array.from([1,1,2,2,3,2]),Int32Array.from([1,2,2,1,3,2]),Int32Array.from([1,2,2,2,3,1]),Int32Array.from([1,1,3,2,2,2]),Int32Array.from([1,2,3,1,2,2]),Int32Array.from([1,2,3,2,2,1]),Int32Array.from([2,2,3,2,1,1]),Int32Array.from([2,2,1,1,3,2]),Int32Array.from([2,2,1,2,3,1]),Int32Array.from([2,1,3,2,1,2]),Int32Array.from([2,2,3,1,1,2]),Int32Array.from([3,1,2,1,3,1]),Int32Array.from([3,1,1,2,2,2]),Int32Array.from([3,2,1,1,2,2]),Int32Array.from([3,2,1,2,2,1]),Int32Array.from([3,1,2,2,1,2]),Int32Array.from([3,2,2,1,1,2]),Int32Array.from([3,2,2,2,1,1]),Int32Array.from([2,1,2,1,2,3]),Int32Array.from([2,1,2,3,2,1]),Int32Array.from([2,3,2,1,2,1]),Int32Array.from([1,1,1,3,2,3]),Int32Array.from([1,3,1,1,2,3]),Int32Array.from([1,3,1,3,2,1]),Int32Array.from([1,1,2,3,1,3]),Int32Array.from([1,3,2,1,1,3]),Int32Array.from([1,3,2,3,1,1]),Int32Array.from([2,1,1,3,1,3]),Int32Array.from([2,3,1,1,1,3]),Int32Array.from([2,3,1,3,1,1]),Int32Array.from([1,1,2,1,3,3]),Int32Array.from([1,1,2,3,3,1]),Int32Array.from([1,3,2,1,3,1]),Int32Array.from([1,1,3,1,2,3]),Int32Array.from([1,1,3,3,2,1]),Int32Array.from([1,3,3,1,2,1]),Int32Array.from([3,1,3,1,2,1]),Int32Array.from([2,1,1,3,3,1]),Int32Array.from([2,3,1,1,3,1]),Int32Array.from([2,1,3,1,1,3]),Int32Array.from([2,1,3,3,1,1]),Int32Array.from([2,1,3,1,3,1]),Int32Array.from([3,1,1,1,2,3]),Int32Array.from([3,1,1,3,2,1]),Int32Array.from([3,3,1,1,2,1]),Int32Array.from([3,1,2,1,1,3]),Int32Array.from([3,1,2,3,1,1]),Int32Array.from([3,3,2,1,1,1]),Int32Array.from([3,1,4,1,1,1]),Int32Array.from([2,2,1,4,1,1]),Int32Array.from([4,3,1,1,1,1]),Int32Array.from([1,1,1,2,2,4]),Int32Array.from([1,1,1,4,2,2]),Int32Array.from([1,2,1,1,2,4]),Int32Array.from([1,2,1,4,2,1]),Int32Array.from([1,4,1,1,2,2]),Int32Array.from([1,4,1,2,2,1]),Int32Array.from([1,1,2,2,1,4]),Int32Array.from([1,1,2,4,1,2]),Int32Array.from([1,2,2,1,1,4]),Int32Array.from([1,2,2,4,1,1]),Int32Array.from([1,4,2,1,1,2]),Int32Array.from([1,4,2,2,1,1]),Int32Array.from([2,4,1,2,1,1]),Int32Array.from([2,2,1,1,1,4]),Int32Array.from([4,1,3,1,1,1]),Int32Array.from([2,4,1,1,1,2]),Int32Array.from([1,3,4,1,1,1]),Int32Array.from([1,1,1,2,4,2]),Int32Array.from([1,2,1,1,4,2]),Int32Array.from([1,2,1,2,4,1]),Int32Array.from([1,1,4,2,1,2]),Int32Array.from([1,2,4,1,1,2]),Int32Array.from([1,2,4,2,1,1]),Int32Array.from([4,1,1,2,1,2]),Int32Array.from([4,2,1,1,1,2]),Int32Array.from([4,2,1,2,1,1]),Int32Array.from([2,1,2,1,4,1]),Int32Array.from([2,1,4,1,2,1]),Int32Array.from([4,1,2,1,2,1]),Int32Array.from([1,1,1,1,4,3]),Int32Array.from([1,1,1,3,4,1]),Int32Array.from([1,3,1,1,4,1]),Int32Array.from([1,1,4,1,1,3]),Int32Array.from([1,1,4,3,1,1]),Int32Array.from([4,1,1,1,1,3]),Int32Array.from([4,1,1,3,1,1]),Int32Array.from([1,1,3,1,4,1]),Int32Array.from([1,1,4,1,3,1]),Int32Array.from([3,1,1,1,4,1]),Int32Array.from([4,1,1,1,3,1]),Int32Array.from([2,1,1,4,1,2]),Int32Array.from([2,1,1,2,1,4]),Int32Array.from([2,1,1,2,3,2]),Int32Array.from([2,3,3,1,1,1,2])];Code128Reader.MAX_AVG_VARIANCE=0.25;Code128Reader.MAX_INDIVIDUAL_VARIANCE=0.7;Code128Reader.CODE_SHIFT=98;Code128Reader.CODE_CODE_C=99;Code128Reader.CODE_CODE_B=100;Code128Reader.CODE_CODE_A=101;Code128Reader.CODE_FNC_1=102;Code128Reader.CODE_FNC_2=97;Code128Reader.CODE_FNC_3=96;Code128Reader.CODE_FNC_4_A=101;Code128Reader.CODE_FNC_4_B=100;Code128Reader.CODE_START_A=103;Code128Reader.CODE_START_B=104;Code128Reader.CODE_START_C=105;Code128Reader.CODE_STOP=106;return Code128Reader;}(OneDReader);/*
   * Copyright 2008 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __extends$m=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __values$3=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};/**
   * <p>Decodes Code 39 barcodes. Supports "Full ASCII Code 39" if USE_CODE_39_EXTENDED_MODE is set.</p>
   *
   * @author Sean Owen
   * @see Code93Reader
   */var Code39Reader=/** @class */function(_super){__extends$m(Code39Reader,_super);/**
       * Creates a reader that assumes all encoded data is data, and does not treat the final
       * character as a check digit. It will not decoded "extended Code 39" sequences.
       */ // public Code39Reader() {
//   this(false);
// }
/**
       * Creates a reader that can be configured to check the last character as a check digit.
       * It will not decoded "extended Code 39" sequences.
       *
       * @param usingCheckDigit if true, treat the last data character as a check digit, not
       * data, and verify that the checksum passes.
       */ // public Code39Reader(boolean usingCheckDigit) {
//   this(usingCheckDigit, false);
// }
/**
       * Creates a reader that can be configured to check the last character as a check digit,
       * or optionally attempt to decode "extended Code 39" sequences that are used to encode
       * the full ASCII character set.
       *
       * @param usingCheckDigit if true, treat the last data character as a check digit, not
       * data, and verify that the checksum passes.
       * @param extendedMode if true, will attempt to decode extended Code 39 sequences in the
       * text.
       */function Code39Reader(usingCheckDigit,extendedMode){if(usingCheckDigit===void 0){usingCheckDigit=false;}if(extendedMode===void 0){extendedMode=false;}var _this=_super.call(this)||this;_this.usingCheckDigit=usingCheckDigit;_this.extendedMode=extendedMode;_this.decodeRowResult='';_this.counters=new Int32Array(9);return _this;}Code39Reader.prototype.decodeRow=function(rowNumber,row,hints){var e_1,_a,e_2,_b;var theCounters=this.counters;theCounters.fill(0);this.decodeRowResult='';var start=Code39Reader.findAsteriskPattern(row,theCounters);// Read off white space
var nextStart=row.getNextSet(start[1]);var end=row.getSize();var decodedChar;var lastStart;do{Code39Reader.recordPattern(row,nextStart,theCounters);var pattern=Code39Reader.toNarrowWidePattern(theCounters);if(pattern<0){throw new NotFoundException();}decodedChar=Code39Reader.patternToChar(pattern);this.decodeRowResult+=decodedChar;lastStart=nextStart;try{for(var theCounters_1=(e_1=void 0,__values$3(theCounters)),theCounters_1_1=theCounters_1.next();!theCounters_1_1.done;theCounters_1_1=theCounters_1.next()){var counter=theCounters_1_1.value;nextStart+=counter;}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(theCounters_1_1&&!theCounters_1_1.done&&(_a=theCounters_1.return))_a.call(theCounters_1);}finally{if(e_1)throw e_1.error;}}// Read off white space
nextStart=row.getNextSet(nextStart);}while(decodedChar!=='*');this.decodeRowResult=this.decodeRowResult.substring(0,this.decodeRowResult.length-1);// remove asterisk
// Look for whitespace after pattern:
var lastPatternSize=0;try{for(var theCounters_2=__values$3(theCounters),theCounters_2_1=theCounters_2.next();!theCounters_2_1.done;theCounters_2_1=theCounters_2.next()){var counter=theCounters_2_1.value;lastPatternSize+=counter;}}catch(e_2_1){e_2={error:e_2_1};}finally{try{if(theCounters_2_1&&!theCounters_2_1.done&&(_b=theCounters_2.return))_b.call(theCounters_2);}finally{if(e_2)throw e_2.error;}}var whiteSpaceAfterEnd=nextStart-lastStart-lastPatternSize;// If 50% of last pattern size, following last pattern, is not whitespace, fail
// (but if it's whitespace to the very end of the image, that's OK)
if(nextStart!==end&&whiteSpaceAfterEnd*2<lastPatternSize){throw new NotFoundException();}if(this.usingCheckDigit){var max=this.decodeRowResult.length-1;var total=0;for(var i=0;i<max;i++){total+=Code39Reader.ALPHABET_STRING.indexOf(this.decodeRowResult.charAt(i));}if(this.decodeRowResult.charAt(max)!==Code39Reader.ALPHABET_STRING.charAt(total%43)){throw new ChecksumException();}this.decodeRowResult=this.decodeRowResult.substring(0,max);}if(this.decodeRowResult.length===0){// false positive
throw new NotFoundException();}var resultString;if(this.extendedMode){resultString=Code39Reader.decodeExtended(this.decodeRowResult);}else{resultString=this.decodeRowResult;}var left=(start[1]+start[0])/2.0;var right=lastStart+lastPatternSize/2.0;return new Result(resultString,null,0,[new ResultPoint(left,rowNumber),new ResultPoint(right,rowNumber)],BarcodeFormat$1.CODE_39,new Date().getTime());};Code39Reader.findAsteriskPattern=function(row,counters){var width=row.getSize();var rowOffset=row.getNextSet(0);var counterPosition=0;var patternStart=rowOffset;var isWhite=false;var patternLength=counters.length;for(var i=rowOffset;i<width;i++){if(row.get(i)!==isWhite){counters[counterPosition]++;}else{if(counterPosition===patternLength-1){// Look for whitespace before start pattern, >= 50% of width of start pattern
if(this.toNarrowWidePattern(counters)===Code39Reader.ASTERISK_ENCODING&&row.isRange(Math.max(0,patternStart-Math.floor((i-patternStart)/2)),patternStart,false)){return[patternStart,i];}patternStart+=counters[0]+counters[1];counters.copyWithin(0,2,2+counterPosition-1);counters[counterPosition-1]=0;counters[counterPosition]=0;counterPosition--;}else{counterPosition++;}counters[counterPosition]=1;isWhite=!isWhite;}}throw new NotFoundException();};// For efficiency, returns -1 on failure. Not throwing here saved as many as 700 exceptions
// per image when using some of our blackbox images.
Code39Reader.toNarrowWidePattern=function(counters){var e_3,_a;var numCounters=counters.length;var maxNarrowCounter=0;var wideCounters;do{var minCounter=0x7fffffff;try{for(var counters_1=(e_3=void 0,__values$3(counters)),counters_1_1=counters_1.next();!counters_1_1.done;counters_1_1=counters_1.next()){var counter=counters_1_1.value;if(counter<minCounter&&counter>maxNarrowCounter){minCounter=counter;}}}catch(e_3_1){e_3={error:e_3_1};}finally{try{if(counters_1_1&&!counters_1_1.done&&(_a=counters_1.return))_a.call(counters_1);}finally{if(e_3)throw e_3.error;}}maxNarrowCounter=minCounter;wideCounters=0;var totalWideCountersWidth=0;var pattern=0;for(var i=0;i<numCounters;i++){var counter=counters[i];if(counter>maxNarrowCounter){pattern|=1<<numCounters-1-i;wideCounters++;totalWideCountersWidth+=counter;}}if(wideCounters===3){// Found 3 wide counters, but are they close enough in width?
// We can perform a cheap, conservative check to see if any individual
// counter is more than 1.5 times the average:
for(var i=0;i<numCounters&&wideCounters>0;i++){var counter=counters[i];if(counter>maxNarrowCounter){wideCounters--;// totalWideCountersWidth = 3 * average, so this checks if counter >= 3/2 * average
if(counter*2>=totalWideCountersWidth){return-1;}}}return pattern;}}while(wideCounters>3);return-1;};Code39Reader.patternToChar=function(pattern){for(var i=0;i<Code39Reader.CHARACTER_ENCODINGS.length;i++){if(Code39Reader.CHARACTER_ENCODINGS[i]===pattern){return Code39Reader.ALPHABET_STRING.charAt(i);}}if(pattern===Code39Reader.ASTERISK_ENCODING){return'*';}throw new NotFoundException();};Code39Reader.decodeExtended=function(encoded){var length=encoded.length;var decoded='';for(var i=0;i<length;i++){var c=encoded.charAt(i);if(c==='+'||c==='$'||c==='%'||c==='/'){var next=encoded.charAt(i+1);var decodedChar='\0';switch(c){case'+':// +A to +Z map to a to z
if(next>='A'&&next<='Z'){decodedChar=String.fromCharCode(next.charCodeAt(0)+32);}else{throw new FormatException();}break;case'$':// $A to $Z map to control codes SH to SB
if(next>='A'&&next<='Z'){decodedChar=String.fromCharCode(next.charCodeAt(0)-64);}else{throw new FormatException();}break;case'%':// %A to %E map to control codes ESC to US
if(next>='A'&&next<='E'){decodedChar=String.fromCharCode(next.charCodeAt(0)-38);}else if(next>='F'&&next<='J'){decodedChar=String.fromCharCode(next.charCodeAt(0)-11);}else if(next>='K'&&next<='O'){decodedChar=String.fromCharCode(next.charCodeAt(0)+16);}else if(next>='P'&&next<='T'){decodedChar=String.fromCharCode(next.charCodeAt(0)+43);}else if(next==='U'){decodedChar='\0';}else if(next==='V'){decodedChar='@';}else if(next==='W'){decodedChar='`';}else if(next==='X'||next==='Y'||next==='Z'){decodedChar='\x7f';}else{throw new FormatException();}break;case'/':// /A to /O map to ! to , and /Z maps to :
if(next>='A'&&next<='O'){decodedChar=String.fromCharCode(next.charCodeAt(0)-32);}else if(next==='Z'){decodedChar=':';}else{throw new FormatException();}break;}decoded+=decodedChar;// bump up i again since we read two characters
i++;}else{decoded+=c;}}return decoded;};Code39Reader.ALPHABET_STRING='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%';/**
       * These represent the encodings of characters, as patterns of wide and narrow bars.
       * The 9 least-significant bits of each int correspond to the pattern of wide and narrow,
       * with 1s representing "wide" and 0s representing narrow.
       */Code39Reader.CHARACTER_ENCODINGS=[0x034,0x121,0x061,0x160,0x031,0x130,0x070,0x025,0x124,0x064,0x109,0x049,0x148,0x019,0x118,0x058,0x00D,0x10C,0x04C,0x01C,0x103,0x043,0x142,0x013,0x112,0x052,0x007,0x106,0x046,0x016,0x181,0x0C1,0x1C0,0x091,0x190,0x0D0,0x085,0x184,0x0C4,0x0A8,0x0A2,0x08A,0x02A// /-%
];Code39Reader.ASTERISK_ENCODING=0x094;return Code39Reader;}(OneDReader);/*
   * Copyright 2008 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __extends$n=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __values$4=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};/**
   * <p>Decodes ITF barcodes.</p>
   *
   * @author Tjieco
   */var ITFReader=/** @class */function(_super){__extends$n(ITFReader,_super);function ITFReader(){// private static W = 3; // Pixel width of a 3x wide line
// private static w = 2; // Pixel width of a 2x wide line
// private static N = 1; // Pixed width of a narrow line
var _this=_super!==null&&_super.apply(this,arguments)||this;// Stores the actual narrow line width of the image being decoded.
_this.narrowLineWidth=-1;return _this;}// See ITFWriter.PATTERNS
/*
    
      /!**
       * Patterns of Wide / Narrow lines to indicate each digit
       *!/
      */ITFReader.prototype.decodeRow=function(rowNumber,row,hints){var e_1,_a;// Find out where the Middle section (payload) starts & ends
var startRange=this.decodeStart(row);var endRange=this.decodeEnd(row);var result=new StringBuilder();ITFReader.decodeMiddle(row,startRange[1],endRange[0],result);var resultString=result.toString();var allowedLengths=null;if(hints!=null){allowedLengths=hints.get(DecodeHintType$1.ALLOWED_LENGTHS);}if(allowedLengths==null){allowedLengths=ITFReader.DEFAULT_ALLOWED_LENGTHS;}// To avoid false positives with 2D barcodes (and other patterns), make
// an assumption that the decoded string must be a 'standard' length if it's short
var length=resultString.length;var lengthOK=false;var maxAllowedLength=0;try{for(var allowedLengths_1=__values$4(allowedLengths),allowedLengths_1_1=allowedLengths_1.next();!allowedLengths_1_1.done;allowedLengths_1_1=allowedLengths_1.next()){var value=allowedLengths_1_1.value;if(length===value){lengthOK=true;break;}if(value>maxAllowedLength){maxAllowedLength=value;}}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(allowedLengths_1_1&&!allowedLengths_1_1.done&&(_a=allowedLengths_1.return))_a.call(allowedLengths_1);}finally{if(e_1)throw e_1.error;}}if(!lengthOK&&length>maxAllowedLength){lengthOK=true;}if(!lengthOK){throw new FormatException();}var points=[new ResultPoint(startRange[1],rowNumber),new ResultPoint(endRange[0],rowNumber)];var resultReturn=new Result(resultString,null,// no natural byte representation for these barcodes
0,points,BarcodeFormat$1.ITF,new Date().getTime());return resultReturn;};/*
      /!**
       * @param row          row of black/white values to search
       * @param payloadStart offset of start pattern
       * @param resultString {@link StringBuilder} to append decoded chars to
       * @throws NotFoundException if decoding could not complete successfully
       *!/*/ITFReader.decodeMiddle=function(row,payloadStart,payloadEnd,resultString){// Digits are interleaved in pairs - 5 black lines for one digit, and the
// 5
// interleaved white lines for the second digit.
// Therefore, need to scan 10 lines and then
// split these into two arrays
var counterDigitPair=new Int32Array(10);// 10
var counterBlack=new Int32Array(5);// 5
var counterWhite=new Int32Array(5);// 5
counterDigitPair.fill(0);counterBlack.fill(0);counterWhite.fill(0);while(payloadStart<payloadEnd){// Get 10 runs of black/white.
OneDReader.recordPattern(row,payloadStart,counterDigitPair);// Split them into each array
for(var k=0;k<5;k++){var twoK=2*k;counterBlack[k]=counterDigitPair[twoK];counterWhite[k]=counterDigitPair[twoK+1];}var bestMatch=ITFReader.decodeDigit(counterBlack);resultString.append(bestMatch.toString());bestMatch=this.decodeDigit(counterWhite);resultString.append(bestMatch.toString());counterDigitPair.forEach(function(counterDigit){payloadStart+=counterDigit;});}};/*/!**
       * Identify where the start of the middle / payload section starts.
       *
       * @param row row of black/white values to search
       * @return Array, containing index of start of 'start block' and end of
       *         'start block'
       *!/*/ITFReader.prototype.decodeStart=function(row){var endStart=ITFReader.skipWhiteSpace(row);var startPattern=ITFReader.findGuardPattern(row,endStart,ITFReader.START_PATTERN);// Determine the width of a narrow line in pixels. We can do this by
// getting the width of the start pattern and dividing by 4 because its
// made up of 4 narrow lines.
this.narrowLineWidth=(startPattern[1]-startPattern[0])/4;this.validateQuietZone(row,startPattern[0]);return startPattern;};/*/!**
       * The start & end patterns must be pre/post fixed by a quiet zone. This
       * zone must be at least 10 times the width of a narrow line.  Scan back until
       * we either get to the start of the barcode or match the necessary number of
       * quiet zone pixels.
       *
       * Note: Its assumed the row is reversed when using this method to find
       * quiet zone after the end pattern.
       *
       * ref: http://www.barcode-1.net/i25code.html
       *
       * @param row bit array representing the scanned barcode.
       * @param startPattern index into row of the start or end pattern.
       * @throws NotFoundException if the quiet zone cannot be found
       *!/*/ITFReader.prototype.validateQuietZone=function(row,startPattern){var quietCount=this.narrowLineWidth*10;// expect to find this many pixels of quiet zone
// if there are not so many pixel at all let's try as many as possible
quietCount=quietCount<startPattern?quietCount:startPattern;for(var i=startPattern-1;quietCount>0&&i>=0;i--){if(row.get(i)){break;}quietCount--;}if(quietCount!==0){// Unable to find the necessary number of quiet zone pixels.
throw new NotFoundException();}};/*
      /!**
       * Skip all whitespace until we get to the first black line.
       *
       * @param row row of black/white values to search
       * @return index of the first black line.
       * @throws NotFoundException Throws exception if no black lines are found in the row
       *!/*/ITFReader.skipWhiteSpace=function(row){var width=row.getSize();var endStart=row.getNextSet(0);if(endStart===width){throw new NotFoundException();}return endStart;};/*/!**
       * Identify where the end of the middle / payload section ends.
       *
       * @param row row of black/white values to search
       * @return Array, containing index of start of 'end block' and end of 'end
       *         block'
       *!/*/ITFReader.prototype.decodeEnd=function(row){// For convenience, reverse the row and then
// search from 'the start' for the end block
row.reverse();try{var endStart=ITFReader.skipWhiteSpace(row);var endPattern=void 0;try{endPattern=ITFReader.findGuardPattern(row,endStart,ITFReader.END_PATTERN_REVERSED[0]);}catch(error){if(error instanceof NotFoundException){endPattern=ITFReader.findGuardPattern(row,endStart,ITFReader.END_PATTERN_REVERSED[1]);}}// The start & end patterns must be pre/post fixed by a quiet zone. This
// zone must be at least 10 times the width of a narrow line.
// ref: http://www.barcode-1.net/i25code.html
this.validateQuietZone(row,endPattern[0]);// Now recalculate the indices of where the 'endblock' starts & stops to
// accommodate
// the reversed nature of the search
var temp=endPattern[0];endPattern[0]=row.getSize()-endPattern[1];endPattern[1]=row.getSize()-temp;return endPattern;}finally{// Put the row back the right way.
row.reverse();}};/*
      /!**
       * @param row       row of black/white values to search
       * @param rowOffset position to start search
       * @param pattern   pattern of counts of number of black and white pixels that are
       *                  being searched for as a pattern
       * @return start/end horizontal offset of guard pattern, as an array of two
       *         ints
       * @throws NotFoundException if pattern is not found
       *!/*/ITFReader.findGuardPattern=function(row,rowOffset,pattern){var patternLength=pattern.length;var counters=new Int32Array(patternLength);var width=row.getSize();var isWhite=false;var counterPosition=0;var patternStart=rowOffset;counters.fill(0);for(var x=rowOffset;x<width;x++){if(row.get(x)!==isWhite){counters[counterPosition]++;}else{if(counterPosition===patternLength-1){if(OneDReader.patternMatchVariance(counters,pattern,ITFReader.MAX_INDIVIDUAL_VARIANCE)<ITFReader.MAX_AVG_VARIANCE){return[patternStart,x];}patternStart+=counters[0]+counters[1];System.arraycopy(counters,2,counters,0,counterPosition-1);counters[counterPosition-1]=0;counters[counterPosition]=0;counterPosition--;}else{counterPosition++;}counters[counterPosition]=1;isWhite=!isWhite;}}throw new NotFoundException();};/*/!**
       * Attempts to decode a sequence of ITF black/white lines into single
       * digit.
       *
       * @param counters the counts of runs of observed black/white/black/... values
       * @return The decoded digit
       * @throws NotFoundException if digit cannot be decoded
       *!/*/ITFReader.decodeDigit=function(counters){var bestVariance=ITFReader.MAX_AVG_VARIANCE;// worst variance we'll accept
var bestMatch=-1;var max=ITFReader.PATTERNS.length;for(var i=0;i<max;i++){var pattern=ITFReader.PATTERNS[i];var variance=OneDReader.patternMatchVariance(counters,pattern,ITFReader.MAX_INDIVIDUAL_VARIANCE);if(variance<bestVariance){bestVariance=variance;bestMatch=i;}else if(variance===bestVariance){// if we find a second 'best match' with the same variance, we can not reliably report to have a suitable match
bestMatch=-1;}}if(bestMatch>=0){return bestMatch%10;}else{throw new NotFoundException();}};ITFReader.PATTERNS=[Int32Array.from([1,1,2,2,1]),Int32Array.from([2,1,1,1,2]),Int32Array.from([1,2,1,1,2]),Int32Array.from([2,2,1,1,1]),Int32Array.from([1,1,2,1,2]),Int32Array.from([2,1,2,1,1]),Int32Array.from([1,2,2,1,1]),Int32Array.from([1,1,1,2,2]),Int32Array.from([2,1,1,2,1]),Int32Array.from([1,2,1,2,1]),Int32Array.from([1,1,3,3,1]),Int32Array.from([3,1,1,1,3]),Int32Array.from([1,3,1,1,3]),Int32Array.from([3,3,1,1,1]),Int32Array.from([1,1,3,1,3]),Int32Array.from([3,1,3,1,1]),Int32Array.from([1,3,3,1,1]),Int32Array.from([1,1,1,3,3]),Int32Array.from([3,1,1,3,1]),Int32Array.from([1,3,1,3,1])// 9
];ITFReader.MAX_AVG_VARIANCE=0.38;ITFReader.MAX_INDIVIDUAL_VARIANCE=0.5;/* /!** Valid ITF lengths. Anything longer than the largest value is also allowed. *!/*/ITFReader.DEFAULT_ALLOWED_LENGTHS=[6,8,10,12,14];/*/!**
       * Start/end guard pattern.
       *
       * Note: The end pattern is reversed because the row is reversed before
       * searching for the END_PATTERN
       *!/*/ITFReader.START_PATTERN=Int32Array.from([1,1,1,1]);ITFReader.END_PATTERN_REVERSED=[Int32Array.from([1,1,2]),Int32Array.from([1,1,3])// 3x
];return ITFReader;}(OneDReader);/*
   * Copyright 2008 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __extends$o=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * <p>Encapsulates functionality and implementation that is common to UPC and EAN families
   * of one-dimensional barcodes.</p>
   *
   * @author dswitkin@google.com (Daniel Switkin)
   * @author Sean Owen
   * @author alasdair@google.com (Alasdair Mackintosh)
   */var AbstractUPCEANReader=/** @class */function(_super){__extends$o(AbstractUPCEANReader,_super);function AbstractUPCEANReader(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.decodeRowStringBuffer='';return _this;}// private final UPCEANExtensionSupport extensionReader;
// private final EANManufacturerOrgSupport eanManSupport;
/*
      protected UPCEANReader() {
          decodeRowStringBuffer = new StringBuilder(20);
          extensionReader = new UPCEANExtensionSupport();
          eanManSupport = new EANManufacturerOrgSupport();
      }
      */AbstractUPCEANReader.findStartGuardPattern=function(row){var foundStart=false;var startRange;var nextStart=0;var counters=Int32Array.from([0,0,0]);while(!foundStart){counters=Int32Array.from([0,0,0]);startRange=AbstractUPCEANReader.findGuardPattern(row,nextStart,false,this.START_END_PATTERN,counters);var start=startRange[0];nextStart=startRange[1];var quietStart=start-(nextStart-start);if(quietStart>=0){foundStart=row.isRange(quietStart,start,false);}}return startRange;};AbstractUPCEANReader.checkChecksum=function(s){return AbstractUPCEANReader.checkStandardUPCEANChecksum(s);};AbstractUPCEANReader.checkStandardUPCEANChecksum=function(s){var length=s.length;if(length===0)return false;var check=parseInt(s.charAt(length-1),10);return AbstractUPCEANReader.getStandardUPCEANChecksum(s.substring(0,length-1))===check;};AbstractUPCEANReader.getStandardUPCEANChecksum=function(s){var length=s.length;var sum=0;for(var i=length-1;i>=0;i-=2){var digit=s.charAt(i).charCodeAt(0)-'0'.charCodeAt(0);if(digit<0||digit>9){throw new FormatException();}sum+=digit;}sum*=3;for(var i=length-2;i>=0;i-=2){var digit=s.charAt(i).charCodeAt(0)-'0'.charCodeAt(0);if(digit<0||digit>9){throw new FormatException();}sum+=digit;}return(1000-sum)%10;};AbstractUPCEANReader.decodeEnd=function(row,endStart){return AbstractUPCEANReader.findGuardPattern(row,endStart,false,AbstractUPCEANReader.START_END_PATTERN,new Int32Array(AbstractUPCEANReader.START_END_PATTERN.length).fill(0));};/**
       * @throws NotFoundException
       */AbstractUPCEANReader.findGuardPatternWithoutCounters=function(row,rowOffset,whiteFirst,pattern){return this.findGuardPattern(row,rowOffset,whiteFirst,pattern,new Int32Array(pattern.length));};/**
       * @param row row of black/white values to search
       * @param rowOffset position to start search
       * @param whiteFirst if true, indicates that the pattern specifies white/black/white/...
       * pixel counts, otherwise, it is interpreted as black/white/black/...
       * @param pattern pattern of counts of number of black and white pixels that are being
       * searched for as a pattern
       * @param counters array of counters, as long as pattern, to re-use
       * @return start/end horizontal offset of guard pattern, as an array of two ints
       * @throws NotFoundException if pattern is not found
       */AbstractUPCEANReader.findGuardPattern=function(row,rowOffset,whiteFirst,pattern,counters){var width=row.getSize();rowOffset=whiteFirst?row.getNextUnset(rowOffset):row.getNextSet(rowOffset);var counterPosition=0;var patternStart=rowOffset;var patternLength=pattern.length;var isWhite=whiteFirst;for(var x=rowOffset;x<width;x++){if(row.get(x)!==isWhite){counters[counterPosition]++;}else{if(counterPosition===patternLength-1){if(OneDReader.patternMatchVariance(counters,pattern,AbstractUPCEANReader.MAX_INDIVIDUAL_VARIANCE)<AbstractUPCEANReader.MAX_AVG_VARIANCE){return Int32Array.from([patternStart,x]);}patternStart+=counters[0]+counters[1];var slice=counters.slice(2,counters.length-1);for(var i=0;i<counterPosition-1;i++){counters[i]=slice[i];}counters[counterPosition-1]=0;counters[counterPosition]=0;counterPosition--;}else{counterPosition++;}counters[counterPosition]=1;isWhite=!isWhite;}}throw new NotFoundException();};AbstractUPCEANReader.decodeDigit=function(row,counters,rowOffset,patterns){this.recordPattern(row,rowOffset,counters);var bestVariance=this.MAX_AVG_VARIANCE;var bestMatch=-1;var max=patterns.length;for(var i=0;i<max;i++){var pattern=patterns[i];var variance=OneDReader.patternMatchVariance(counters,pattern,AbstractUPCEANReader.MAX_INDIVIDUAL_VARIANCE);if(variance<bestVariance){bestVariance=variance;bestMatch=i;}}if(bestMatch>=0){return bestMatch;}else{throw new NotFoundException();}};// These two values are critical for determining how permissive the decoding will be.
// We've arrived at these values through a lot of trial and error. Setting them any higher
// lets false positives creep in quickly.
AbstractUPCEANReader.MAX_AVG_VARIANCE=0.48;AbstractUPCEANReader.MAX_INDIVIDUAL_VARIANCE=0.7;/**
       * Start/end guard pattern.
       */AbstractUPCEANReader.START_END_PATTERN=Int32Array.from([1,1,1]);/**
       * Pattern marking the middle of a UPC/EAN pattern, separating the two halves.
       */AbstractUPCEANReader.MIDDLE_PATTERN=Int32Array.from([1,1,1,1,1]);/**
       * end guard pattern.
       */AbstractUPCEANReader.END_PATTERN=Int32Array.from([1,1,1,1,1,1]);/**
       * "Odd", or "L" patterns used to encode UPC/EAN digits.
       */AbstractUPCEANReader.L_PATTERNS=[Int32Array.from([3,2,1,1]),Int32Array.from([2,2,2,1]),Int32Array.from([2,1,2,2]),Int32Array.from([1,4,1,1]),Int32Array.from([1,1,3,2]),Int32Array.from([1,2,3,1]),Int32Array.from([1,1,1,4]),Int32Array.from([1,3,1,2]),Int32Array.from([1,2,1,3]),Int32Array.from([3,1,1,2])];return AbstractUPCEANReader;}(OneDReader);/*
   * Copyright (C) 2010 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __values$5=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};/**
   * @see UPCEANExtension2Support
   */var UPCEANExtension5Support=/** @class */function(){function UPCEANExtension5Support(){this.CHECK_DIGIT_ENCODINGS=[0x18,0x14,0x12,0x11,0x0C,0x06,0x03,0x0A,0x09,0x05];this.decodeMiddleCounters=Int32Array.from([0,0,0,0]);this.decodeRowStringBuffer='';}UPCEANExtension5Support.prototype.decodeRow=function(rowNumber,row,extensionStartRange){var result=this.decodeRowStringBuffer;var end=this.decodeMiddle(row,extensionStartRange,result);var resultString=result.toString();var extensionData=UPCEANExtension5Support.parseExtensionString(resultString);var resultPoints=[new ResultPoint((extensionStartRange[0]+extensionStartRange[1])/2.0,rowNumber),new ResultPoint(end,rowNumber)];var extensionResult=new Result(resultString,null,0,resultPoints,BarcodeFormat$1.UPC_EAN_EXTENSION,new Date().getTime());if(extensionData!=null){extensionResult.putAllMetadata(extensionData);}return extensionResult;};UPCEANExtension5Support.prototype.decodeMiddle=function(row,startRange,resultString){var e_1,_a;var counters=this.decodeMiddleCounters;counters[0]=0;counters[1]=0;counters[2]=0;counters[3]=0;var end=row.getSize();var rowOffset=startRange[1];var lgPatternFound=0;for(var x=0;x<5&&rowOffset<end;x++){var bestMatch=AbstractUPCEANReader.decodeDigit(row,counters,rowOffset,AbstractUPCEANReader.L_AND_G_PATTERNS);resultString+=String.fromCharCode('0'.charCodeAt(0)+bestMatch%10);try{for(var counters_1=(e_1=void 0,__values$5(counters)),counters_1_1=counters_1.next();!counters_1_1.done;counters_1_1=counters_1.next()){var counter=counters_1_1.value;rowOffset+=counter;}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(counters_1_1&&!counters_1_1.done&&(_a=counters_1.return))_a.call(counters_1);}finally{if(e_1)throw e_1.error;}}if(bestMatch>=10){lgPatternFound|=1<<4-x;}if(x!==4){// Read off separator if not last
rowOffset=row.getNextSet(rowOffset);rowOffset=row.getNextUnset(rowOffset);}}if(resultString.length!==5){throw new NotFoundException();}var checkDigit=this.determineCheckDigit(lgPatternFound);if(UPCEANExtension5Support.extensionChecksum(resultString.toString())!==checkDigit){throw new NotFoundException();}return rowOffset;};UPCEANExtension5Support.extensionChecksum=function(s){var length=s.length;var sum=0;for(var i=length-2;i>=0;i-=2){sum+=s.charAt(i).charCodeAt(0)-'0'.charCodeAt(0);}sum*=3;for(var i=length-1;i>=0;i-=2){sum+=s.charAt(i).charCodeAt(0)-'0'.charCodeAt(0);}sum*=3;return sum%10;};UPCEANExtension5Support.prototype.determineCheckDigit=function(lgPatternFound){for(var d=0;d<10;d++){if(lgPatternFound===this.CHECK_DIGIT_ENCODINGS[d]){return d;}}throw new NotFoundException();};UPCEANExtension5Support.parseExtensionString=function(raw){if(raw.length!==5){return null;}var value=UPCEANExtension5Support.parseExtension5String(raw);if(value==null){return null;}return new Map([[ResultMetadataType$1.SUGGESTED_PRICE,value]]);};UPCEANExtension5Support.parseExtension5String=function(raw){var currency;switch(raw.charAt(0)){case'0':currency='£';break;case'5':currency='$';break;case'9':// Reference: http://www.jollytech.com
switch(raw){case'90000':// No suggested retail price
return null;case'99991':// Complementary
return'0.00';case'99990':return'Used';}// Otherwise... unknown currency?
currency='';break;default:currency='';break;}var rawAmount=parseInt(raw.substring(1));var unitsString=(rawAmount/100).toString();var hundredths=rawAmount%100;var hundredthsString=hundredths<10?'0'+hundredths:hundredths.toString();// fixme
return currency+unitsString+'.'+hundredthsString;};return UPCEANExtension5Support;}();/*
   * Copyright (C) 2012 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __values$6=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};/**
   * @see UPCEANExtension5Support
   */var UPCEANExtension2Support=/** @class */function(){function UPCEANExtension2Support(){this.decodeMiddleCounters=Int32Array.from([0,0,0,0]);this.decodeRowStringBuffer='';}UPCEANExtension2Support.prototype.decodeRow=function(rowNumber,row,extensionStartRange){var result=this.decodeRowStringBuffer;var end=this.decodeMiddle(row,extensionStartRange,result);var resultString=result.toString();var extensionData=UPCEANExtension2Support.parseExtensionString(resultString);var resultPoints=[new ResultPoint((extensionStartRange[0]+extensionStartRange[1])/2.0,rowNumber),new ResultPoint(end,rowNumber)];var extensionResult=new Result(resultString,null,0,resultPoints,BarcodeFormat$1.UPC_EAN_EXTENSION,new Date().getTime());if(extensionData!=null){extensionResult.putAllMetadata(extensionData);}return extensionResult;};UPCEANExtension2Support.prototype.decodeMiddle=function(row,startRange,resultString){var e_1,_a;var counters=this.decodeMiddleCounters;counters[0]=0;counters[1]=0;counters[2]=0;counters[3]=0;var end=row.getSize();var rowOffset=startRange[1];var checkParity=0;for(var x=0;x<2&&rowOffset<end;x++){var bestMatch=AbstractUPCEANReader.decodeDigit(row,counters,rowOffset,AbstractUPCEANReader.L_AND_G_PATTERNS);resultString+=String.fromCharCode('0'.charCodeAt(0)+bestMatch%10);try{for(var counters_1=(e_1=void 0,__values$6(counters)),counters_1_1=counters_1.next();!counters_1_1.done;counters_1_1=counters_1.next()){var counter=counters_1_1.value;rowOffset+=counter;}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(counters_1_1&&!counters_1_1.done&&(_a=counters_1.return))_a.call(counters_1);}finally{if(e_1)throw e_1.error;}}if(bestMatch>=10){checkParity|=1<<1-x;}if(x!==1){// Read off separator if not last
rowOffset=row.getNextSet(rowOffset);rowOffset=row.getNextUnset(rowOffset);}}if(resultString.length!==2){throw new NotFoundException();}if(parseInt(resultString.toString())%4!==checkParity){throw new NotFoundException();}return rowOffset;};UPCEANExtension2Support.parseExtensionString=function(raw){if(raw.length!==2){return null;}return new Map([[ResultMetadataType$1.ISSUE_NUMBER,parseInt(raw)]]);};return UPCEANExtension2Support;}();/*
   * Copyright (C) 2010 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var UPCEANExtensionSupport=/** @class */function(){function UPCEANExtensionSupport(){}UPCEANExtensionSupport.decodeRow=function(rowNumber,row,rowOffset){var extensionStartRange=AbstractUPCEANReader.findGuardPattern(row,rowOffset,false,this.EXTENSION_START_PATTERN,new Int32Array(this.EXTENSION_START_PATTERN.length).fill(0));try{// return null;
var fiveSupport=new UPCEANExtension5Support();return fiveSupport.decodeRow(rowNumber,row,extensionStartRange);}catch(err){// return null;
var twoSupport=new UPCEANExtension2Support();return twoSupport.decodeRow(rowNumber,row,extensionStartRange);}};UPCEANExtensionSupport.EXTENSION_START_PATTERN=Int32Array.from([1,1,2]);return UPCEANExtensionSupport;}();/*
   * Copyright 2008 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __extends$p=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * <p>Encapsulates functionality and implementation that is common to UPC and EAN families
   * of one-dimensional barcodes.</p>
   *
   * @author dswitkin@google.com (Daniel Switkin)
   * @author Sean Owen
   * @author alasdair@google.com (Alasdair Mackintosh)
   */var UPCEANReader=/** @class */function(_super){__extends$p(UPCEANReader,_super);function UPCEANReader(){var _this=_super.call(this)||this;_this.decodeRowStringBuffer='';UPCEANReader.L_AND_G_PATTERNS=UPCEANReader.L_PATTERNS.map(function(arr){return Int32Array.from(arr);});for(var i=10;i<20;i++){var widths=UPCEANReader.L_PATTERNS[i-10];var reversedWidths=new Int32Array(widths.length);for(var j=0;j<widths.length;j++){reversedWidths[j]=widths[widths.length-j-1];}UPCEANReader.L_AND_G_PATTERNS[i]=reversedWidths;}return _this;}UPCEANReader.prototype.decodeRow=function(rowNumber,row,hints){var startGuardRange=UPCEANReader.findStartGuardPattern(row);var resultPointCallback=hints==null?null:hints.get(DecodeHintType$1.NEED_RESULT_POINT_CALLBACK);if(resultPointCallback!=null){var resultPoint_1=new ResultPoint((startGuardRange[0]+startGuardRange[1])/2.0,rowNumber);resultPointCallback.foundPossibleResultPoint(resultPoint_1);}var budello=this.decodeMiddle(row,startGuardRange,this.decodeRowStringBuffer);var endStart=budello.rowOffset;var result=budello.resultString;if(resultPointCallback!=null){var resultPoint_2=new ResultPoint(endStart,rowNumber);resultPointCallback.foundPossibleResultPoint(resultPoint_2);}var endRange=UPCEANReader.decodeEnd(row,endStart);if(resultPointCallback!=null){var resultPoint_3=new ResultPoint((endRange[0]+endRange[1])/2.0,rowNumber);resultPointCallback.foundPossibleResultPoint(resultPoint_3);}// Make sure there is a quiet zone at least as big as the end pattern after the barcode. The
// spec might want more whitespace, but in practice this is the maximum we can count on.
var end=endRange[1];var quietEnd=end+(end-endRange[0]);if(quietEnd>=row.getSize()||!row.isRange(end,quietEnd,false)){throw new NotFoundException();}var resultString=result.toString();// UPC/EAN should never be less than 8 chars anyway
if(resultString.length<8){throw new FormatException();}if(!UPCEANReader.checkChecksum(resultString)){throw new ChecksumException();}var left=(startGuardRange[1]+startGuardRange[0])/2.0;var right=(endRange[1]+endRange[0])/2.0;var format=this.getBarcodeFormat();var resultPoint=[new ResultPoint(left,rowNumber),new ResultPoint(right,rowNumber)];var decodeResult=new Result(resultString,null,0,resultPoint,format,new Date().getTime());var extensionLength=0;try{var extensionResult=UPCEANExtensionSupport.decodeRow(rowNumber,row,endRange[1]);decodeResult.putMetadata(ResultMetadataType$1.UPC_EAN_EXTENSION,extensionResult.getText());decodeResult.putAllMetadata(extensionResult.getResultMetadata());decodeResult.addResultPoints(extensionResult.getResultPoints());extensionLength=extensionResult.getText().length;}catch(err){}var allowedExtensions=hints==null?null:hints.get(DecodeHintType$1.ALLOWED_EAN_EXTENSIONS);if(allowedExtensions!=null){var valid=false;for(var length_1 in allowedExtensions){if(extensionLength.toString()===length_1){// check me
valid=true;break;}}if(!valid){throw new NotFoundException();}}if(format===BarcodeFormat$1.EAN_13||format===BarcodeFormat$1.UPC_A);return decodeResult;};UPCEANReader.checkChecksum=function(s){return UPCEANReader.checkStandardUPCEANChecksum(s);};UPCEANReader.checkStandardUPCEANChecksum=function(s){var length=s.length;if(length===0)return false;var check=parseInt(s.charAt(length-1),10);return UPCEANReader.getStandardUPCEANChecksum(s.substring(0,length-1))===check;};UPCEANReader.getStandardUPCEANChecksum=function(s){var length=s.length;var sum=0;for(var i=length-1;i>=0;i-=2){var digit=s.charAt(i).charCodeAt(0)-'0'.charCodeAt(0);if(digit<0||digit>9){throw new FormatException();}sum+=digit;}sum*=3;for(var i=length-2;i>=0;i-=2){var digit=s.charAt(i).charCodeAt(0)-'0'.charCodeAt(0);if(digit<0||digit>9){throw new FormatException();}sum+=digit;}return(1000-sum)%10;};UPCEANReader.decodeEnd=function(row,endStart){return UPCEANReader.findGuardPattern(row,endStart,false,UPCEANReader.START_END_PATTERN,new Int32Array(UPCEANReader.START_END_PATTERN.length).fill(0));};return UPCEANReader;}(AbstractUPCEANReader);/*
   * Copyright 2008 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __extends$q=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __values$7=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};/**
   * <p>Implements decoding of the EAN-13 format.</p>
   *
   * @author dswitkin@google.com (Daniel Switkin)
   * @author Sean Owen
   * @author alasdair@google.com (Alasdair Mackintosh)
   */var EAN13Reader=/** @class */function(_super){__extends$q(EAN13Reader,_super);function EAN13Reader(){var _this=_super.call(this)||this;_this.decodeMiddleCounters=Int32Array.from([0,0,0,0]);return _this;}EAN13Reader.prototype.decodeMiddle=function(row,startRange,resultString){var e_1,_a,e_2,_b;var counters=this.decodeMiddleCounters;counters[0]=0;counters[1]=0;counters[2]=0;counters[3]=0;var end=row.getSize();var rowOffset=startRange[1];var lgPatternFound=0;for(var x=0;x<6&&rowOffset<end;x++){var bestMatch=UPCEANReader.decodeDigit(row,counters,rowOffset,UPCEANReader.L_AND_G_PATTERNS);resultString+=String.fromCharCode('0'.charCodeAt(0)+bestMatch%10);try{for(var counters_1=(e_1=void 0,__values$7(counters)),counters_1_1=counters_1.next();!counters_1_1.done;counters_1_1=counters_1.next()){var counter=counters_1_1.value;rowOffset+=counter;}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(counters_1_1&&!counters_1_1.done&&(_a=counters_1.return))_a.call(counters_1);}finally{if(e_1)throw e_1.error;}}if(bestMatch>=10){lgPatternFound|=1<<5-x;}}resultString=EAN13Reader.determineFirstDigit(resultString,lgPatternFound);var middleRange=UPCEANReader.findGuardPattern(row,rowOffset,true,UPCEANReader.MIDDLE_PATTERN,new Int32Array(UPCEANReader.MIDDLE_PATTERN.length).fill(0));rowOffset=middleRange[1];for(var x=0;x<6&&rowOffset<end;x++){var bestMatch=UPCEANReader.decodeDigit(row,counters,rowOffset,UPCEANReader.L_PATTERNS);resultString+=String.fromCharCode('0'.charCodeAt(0)+bestMatch);try{for(var counters_2=(e_2=void 0,__values$7(counters)),counters_2_1=counters_2.next();!counters_2_1.done;counters_2_1=counters_2.next()){var counter=counters_2_1.value;rowOffset+=counter;}}catch(e_2_1){e_2={error:e_2_1};}finally{try{if(counters_2_1&&!counters_2_1.done&&(_b=counters_2.return))_b.call(counters_2);}finally{if(e_2)throw e_2.error;}}}return{rowOffset:rowOffset,resultString:resultString};};EAN13Reader.prototype.getBarcodeFormat=function(){return BarcodeFormat$1.EAN_13;};EAN13Reader.determineFirstDigit=function(resultString,lgPatternFound){for(var d=0;d<10;d++){if(lgPatternFound===this.FIRST_DIGIT_ENCODINGS[d]){resultString=String.fromCharCode('0'.charCodeAt(0)+d)+resultString;return resultString;}}throw new NotFoundException();};EAN13Reader.FIRST_DIGIT_ENCODINGS=[0x00,0x0B,0x0D,0xE,0x13,0x19,0x1C,0x15,0x16,0x1A];return EAN13Reader;}(UPCEANReader);/*
   * Copyright 2008 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __extends$r=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __values$8=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};/**
   * <p>Implements decoding of the EAN-8 format.</p>
   *
   * @author Sean Owen
   */var EAN8Reader=/** @class */function(_super){__extends$r(EAN8Reader,_super);function EAN8Reader(){var _this=_super.call(this)||this;_this.decodeMiddleCounters=Int32Array.from([0,0,0,0]);return _this;}EAN8Reader.prototype.decodeMiddle=function(row,startRange,resultString){var e_1,_a,e_2,_b;var counters=this.decodeMiddleCounters;counters[0]=0;counters[1]=0;counters[2]=0;counters[3]=0;var end=row.getSize();var rowOffset=startRange[1];for(var x=0;x<4&&rowOffset<end;x++){var bestMatch=UPCEANReader.decodeDigit(row,counters,rowOffset,UPCEANReader.L_PATTERNS);resultString+=String.fromCharCode('0'.charCodeAt(0)+bestMatch);try{for(var counters_1=(e_1=void 0,__values$8(counters)),counters_1_1=counters_1.next();!counters_1_1.done;counters_1_1=counters_1.next()){var counter=counters_1_1.value;rowOffset+=counter;}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(counters_1_1&&!counters_1_1.done&&(_a=counters_1.return))_a.call(counters_1);}finally{if(e_1)throw e_1.error;}}}var middleRange=UPCEANReader.findGuardPattern(row,rowOffset,true,UPCEANReader.MIDDLE_PATTERN,new Int32Array(UPCEANReader.MIDDLE_PATTERN.length).fill(0));rowOffset=middleRange[1];for(var x=0;x<4&&rowOffset<end;x++){var bestMatch=UPCEANReader.decodeDigit(row,counters,rowOffset,UPCEANReader.L_PATTERNS);resultString+=String.fromCharCode('0'.charCodeAt(0)+bestMatch);try{for(var counters_2=(e_2=void 0,__values$8(counters)),counters_2_1=counters_2.next();!counters_2_1.done;counters_2_1=counters_2.next()){var counter=counters_2_1.value;rowOffset+=counter;}}catch(e_2_1){e_2={error:e_2_1};}finally{try{if(counters_2_1&&!counters_2_1.done&&(_b=counters_2.return))_b.call(counters_2);}finally{if(e_2)throw e_2.error;}}}return{rowOffset:rowOffset,resultString:resultString};};EAN8Reader.prototype.getBarcodeFormat=function(){return BarcodeFormat$1.EAN_8;};return EAN8Reader;}(UPCEANReader);/*
   * Copyright 2008 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __extends$s=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * Encapsulates functionality and implementation that is common to all families
   * of one-dimensional barcodes.
   *
   * @author dswitkin@google.com (Daniel Switkin)
   * @author Sean Owen
   * @author sam2332 (Sam Rudloff)
   *
   * @source https://github.com/zxing/zxing/blob/3c96923276dd5785d58eb970b6ba3f80d36a9505/core/src/main/java/com/google/zxing/oned/UPCAReader.java
   *
   * @experimental
   */var UPCAReader=/** @class */function(_super){__extends$s(UPCAReader,_super);function UPCAReader(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.ean13Reader=new EAN13Reader();return _this;}// @Override
UPCAReader.prototype.getBarcodeFormat=function(){return BarcodeFormat$1.UPC_A;};// Note that we don't try rotation without the try harder flag, even if rotation was supported.
// @Override
UPCAReader.prototype.decode=function(image,hints){return this.maybeReturnResult(this.ean13Reader.decode(image));};// @Override
UPCAReader.prototype.decodeRow=function(rowNumber,row,hints){return this.maybeReturnResult(this.ean13Reader.decodeRow(rowNumber,row,hints));};// @Override
UPCAReader.prototype.decodeMiddle=function(row,startRange,resultString){return this.ean13Reader.decodeMiddle(row,startRange,resultString);};UPCAReader.prototype.maybeReturnResult=function(result){var text=result.getText();if(text.charAt(0)==='0'){var upcaResult=new Result(text.substring(1),null,null,result.getResultPoints(),BarcodeFormat$1.UPC_A);if(result.getResultMetadata()!=null){upcaResult.putAllMetadata(result.getResultMetadata());}return upcaResult;}else{throw new NotFoundException();}};UPCAReader.prototype.reset=function(){this.ean13Reader.reset();};return UPCAReader;}(UPCEANReader);/*
   * Copyright 2008 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __extends$t=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __values$9=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};// package com.google.zxing.oned;
// import com.google.zxing.BarcodeFormat;
// import com.google.zxing.FormatException;
// import com.google.zxing.NotFoundException;
// import com.google.zxing.common.BitArray;
/**
   * <p>Implements decoding of the UPC-E format.</p>
   * <p><a href="http://www.barcodeisland.com/upce.phtml">This</a> is a great reference for
   * UPC-E information.</p>
   *
   * @author Sean Owen
   *
   * @source https://github.com/zxing/zxing/blob/3c96923276dd5785d58eb970b6ba3f80d36a9505/core/src/main/java/com/google/zxing/oned/UPCEReader.java
   *
   * @experimental
   */var UPCEReader=/** @class */function(_super){__extends$t(UPCEReader,_super);function UPCEReader(){var _this=_super.call(this)||this;_this.decodeMiddleCounters=new Int32Array(4);return _this;}/**
       * @throws NotFoundException
       */ // @Override
UPCEReader.prototype.decodeMiddle=function(row,startRange,result){var e_1,_a;var counters=this.decodeMiddleCounters.map(function(x){return x;});counters[0]=0;counters[1]=0;counters[2]=0;counters[3]=0;var end=row.getSize();var rowOffset=startRange[1];var lgPatternFound=0;for(var x=0;x<6&&rowOffset<end;x++){var bestMatch=UPCEReader.decodeDigit(row,counters,rowOffset,UPCEReader.L_AND_G_PATTERNS);result+=String.fromCharCode('0'.charCodeAt(0)+bestMatch%10);try{for(var counters_1=(e_1=void 0,__values$9(counters)),counters_1_1=counters_1.next();!counters_1_1.done;counters_1_1=counters_1.next()){var counter=counters_1_1.value;rowOffset+=counter;}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(counters_1_1&&!counters_1_1.done&&(_a=counters_1.return))_a.call(counters_1);}finally{if(e_1)throw e_1.error;}}if(bestMatch>=10){lgPatternFound|=1<<5-x;}}UPCEReader.determineNumSysAndCheckDigit(new StringBuilder(result),lgPatternFound);return rowOffset;};/**
       * @throws NotFoundException
       */ // @Override
UPCEReader.prototype.decodeEnd=function(row,endStart){return UPCEReader.findGuardPatternWithoutCounters(row,endStart,true,UPCEReader.MIDDLE_END_PATTERN);};/**
       * @throws FormatException
       */ // @Override
UPCEReader.prototype.checkChecksum=function(s){return UPCEANReader.checkChecksum(UPCEReader.convertUPCEtoUPCA(s));};/**
       * @throws NotFoundException
       */UPCEReader.determineNumSysAndCheckDigit=function(resultString,lgPatternFound){for(var numSys=0;numSys<=1;numSys++){for(var d=0;d<10;d++){if(lgPatternFound===this.NUMSYS_AND_CHECK_DIGIT_PATTERNS[numSys][d]){resultString.insert(0,/*(char)*/'0'+numSys);resultString.append(/*(char)*/'0'+d);return;}}}throw NotFoundException.getNotFoundInstance();};// @Override
UPCEReader.prototype.getBarcodeFormat=function(){return BarcodeFormat$1.UPC_E;};/**
       * Expands a UPC-E value back into its full, equivalent UPC-A code value.
       *
       * @param upce UPC-E code as string of digits
       * @return equivalent UPC-A code as string of digits
       */UPCEReader.convertUPCEtoUPCA=function(upce){// the following line is equivalent to upce.getChars(1, 7, upceChars, 0);
var upceChars=upce.slice(1,7).split('').map(function(x){return x.charCodeAt(0);});var result=new StringBuilder();result.append(upce.charAt(0));var lastChar=upceChars[5];switch(lastChar){case 0:case 1:case 2:result.appendChars(upceChars,0,2);result.append(lastChar);result.append('0000');result.appendChars(upceChars,2,3);break;case 3:result.appendChars(upceChars,0,3);result.append('00000');result.appendChars(upceChars,3,2);break;case 4:result.appendChars(upceChars,0,4);result.append('00000');result.append(upceChars[4]);break;default:result.appendChars(upceChars,0,5);result.append('0000');result.append(lastChar);break;}// Only append check digit in conversion if supplied
if(upce.length>=8){result.append(upce.charAt(7));}return result.toString();};/**
       * The pattern that marks the middle, and end, of a UPC-E pattern.
       * There is no "second half" to a UPC-E barcode.
       */UPCEReader.MIDDLE_END_PATTERN=Int32Array.from([1,1,1,1,1,1]);// For an UPC-E barcode, the final digit is represented by the parities used
// to encode the middle six digits, according to the table below.
//
//                Parity of next 6 digits
//    Digit   0     1     2     3     4     5
//       0    Even   Even  Even Odd  Odd   Odd
//       1    Even   Even  Odd  Even Odd   Odd
//       2    Even   Even  Odd  Odd  Even  Odd
//       3    Even   Even  Odd  Odd  Odd   Even
//       4    Even   Odd   Even Even Odd   Odd
//       5    Even   Odd   Odd  Even Even  Odd
//       6    Even   Odd   Odd  Odd  Even  Even
//       7    Even   Odd   Even Odd  Even  Odd
//       8    Even   Odd   Even Odd  Odd   Even
//       9    Even   Odd   Odd  Even Odd   Even
//
// The encoding is represented by the following array, which is a bit pattern
// using Odd = 0 and Even = 1. For example, 5 is represented by:
//
//              Odd Even Even Odd Odd Even
// in binary:
//                0    1    1   0   0    1   == 0x19
//
/**
       * See {@link #L_AND_G_PATTERNS}; these values similarly represent patterns of
       * even-odd parity encodings of digits that imply both the number system (0 or 1)
       * used, and the check digit.
       */UPCEReader.NUMSYS_AND_CHECK_DIGIT_PATTERNS=[Int32Array.from([0x38,0x34,0x32,0x31,0x2C,0x26,0x23,0x2A,0x29,0x25]),Int32Array.from([0x07,0x0B,0x0D,0x0E,0x13,0x19,0x1C,0x15,0x16,0x1])];return UPCEReader;}(UPCEANReader);/*
   * Copyright 2008 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __extends$u=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __values$a=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};/**
   * <p>A reader that can read all available UPC/EAN formats. If a caller wants to try to
   * read all such formats, it is most efficient to use this implementation rather than invoke
   * individual readers.</p>
   *
   * @author Sean Owen
   */var MultiFormatUPCEANReader=/** @class */function(_super){__extends$u(MultiFormatUPCEANReader,_super);function MultiFormatUPCEANReader(hints){var _this=_super.call(this)||this;var possibleFormats=hints==null?null:hints.get(DecodeHintType$1.POSSIBLE_FORMATS);var readers=[];if(possibleFormats!=null){if(possibleFormats.indexOf(BarcodeFormat$1.EAN_13)>-1){readers.push(new EAN13Reader());}else if(possibleFormats.indexOf(BarcodeFormat$1.UPC_A)>-1){readers.push(new UPCAReader());}if(possibleFormats.indexOf(BarcodeFormat$1.EAN_8)>-1){readers.push(new EAN8Reader());}if(possibleFormats.indexOf(BarcodeFormat$1.UPC_E)>-1){readers.push(new UPCEReader());}}if(readers.length===0){readers.push(new EAN13Reader());// UPC-A is covered by EAN-13
readers.push(new EAN8Reader());readers.push(new UPCEReader());}_this.readers=readers;return _this;}MultiFormatUPCEANReader.prototype.decodeRow=function(rowNumber,row,hints){var e_1,_a;try{for(var _b=__values$a(this.readers),_c=_b.next();!_c.done;_c=_b.next()){var reader=_c.value;try{// const result: Result = reader.decodeRow(rowNumber, row, startGuardPattern, hints);
var result=reader.decodeRow(rowNumber,row,hints);// Special case: a 12-digit code encoded in UPC-A is identical to a "0"
// followed by those 12 digits encoded as EAN-13. Each will recognize such a code,
// UPC-A as a 12-digit string and EAN-13 as a 13-digit string starting with "0".
// Individually these are correct and their readers will both read such a code
// and correctly call it EAN-13, or UPC-A, respectively.
//
// In this case, if we've been looking for both types, we'd like to call it
// a UPC-A code. But for efficiency we only run the EAN-13 decoder to also read
// UPC-A. So we special case it here, and convert an EAN-13 result to a UPC-A
// result if appropriate.
//
// But, don't return UPC-A if UPC-A was not a requested format!
var ean13MayBeUPCA=result.getBarcodeFormat()===BarcodeFormat$1.EAN_13&&result.getText().charAt(0)==='0';// @SuppressWarnings("unchecked")
var possibleFormats=hints==null?null:hints.get(DecodeHintType$1.POSSIBLE_FORMATS);var canReturnUPCA=possibleFormats==null||possibleFormats.includes(BarcodeFormat$1.UPC_A);if(ean13MayBeUPCA&&canReturnUPCA){var rawBytes=result.getRawBytes();// Transfer the metadata across
var resultUPCA=new Result(result.getText().substring(1),rawBytes,rawBytes.length,result.getResultPoints(),BarcodeFormat$1.UPC_A);resultUPCA.putAllMetadata(result.getResultMetadata());return resultUPCA;}return result;}catch(err){// continue;
}}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(_c&&!_c.done&&(_a=_b.return))_a.call(_b);}finally{if(e_1)throw e_1.error;}}throw new NotFoundException();};MultiFormatUPCEANReader.prototype.reset=function(){var e_2,_a;try{for(var _b=__values$a(this.readers),_c=_b.next();!_c.done;_c=_b.next()){var reader=_c.value;reader.reset();}}catch(e_2_1){e_2={error:e_2_1};}finally{try{if(_c&&!_c.done&&(_a=_b.return))_a.call(_b);}finally{if(e_2)throw e_2.error;}}};return MultiFormatUPCEANReader;}(OneDReader);var __extends$v=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __values$b=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};// import Integer from '../../util/Integer';
// import Float from '../../util/Float';
var AbstractRSSReader=/** @class */function(_super){__extends$v(AbstractRSSReader,_super);function AbstractRSSReader(){var _this=_super.call(this)||this;_this.decodeFinderCounters=new Int32Array(4);_this.dataCharacterCounters=new Int32Array(8);_this.oddRoundingErrors=new Array(4);_this.evenRoundingErrors=new Array(4);_this.oddCounts=new Array(_this.dataCharacterCounters.length/2);_this.evenCounts=new Array(_this.dataCharacterCounters.length/2);return _this;}AbstractRSSReader.prototype.getDecodeFinderCounters=function(){return this.decodeFinderCounters;};AbstractRSSReader.prototype.getDataCharacterCounters=function(){return this.dataCharacterCounters;};AbstractRSSReader.prototype.getOddRoundingErrors=function(){return this.oddRoundingErrors;};AbstractRSSReader.prototype.getEvenRoundingErrors=function(){return this.evenRoundingErrors;};AbstractRSSReader.prototype.getOddCounts=function(){return this.oddCounts;};AbstractRSSReader.prototype.getEvenCounts=function(){return this.evenCounts;};AbstractRSSReader.prototype.parseFinderValue=function(counters,finderPatterns){for(var value=0;value<finderPatterns.length;value++){if(OneDReader.patternMatchVariance(counters,finderPatterns[value],AbstractRSSReader.MAX_INDIVIDUAL_VARIANCE)<AbstractRSSReader.MAX_AVG_VARIANCE){return value;}}throw new NotFoundException();};/**
       * @param array values to sum
       * @return sum of values
       * @deprecated call {@link MathUtils#sum(int[])}
       */AbstractRSSReader.count=function(array){return MathUtils.sum(new Int32Array(array));};AbstractRSSReader.increment=function(array,errors){var index=0;var biggestError=errors[0];for(var i=1;i<array.length;i++){if(errors[i]>biggestError){biggestError=errors[i];index=i;}}array[index]++;};AbstractRSSReader.decrement=function(array,errors){var index=0;var biggestError=errors[0];for(var i=1;i<array.length;i++){if(errors[i]<biggestError){biggestError=errors[i];index=i;}}array[index]--;};AbstractRSSReader.isFinderPattern=function(counters){var e_1,_a;var firstTwoSum=counters[0]+counters[1];var sum=firstTwoSum+counters[2]+counters[3];var ratio=firstTwoSum/sum;if(ratio>=AbstractRSSReader.MIN_FINDER_PATTERN_RATIO&&ratio<=AbstractRSSReader.MAX_FINDER_PATTERN_RATIO){// passes ratio test in spec, but see if the counts are unreasonable
var minCounter=Number.MAX_SAFE_INTEGER;var maxCounter=Number.MIN_SAFE_INTEGER;try{for(var counters_1=__values$b(counters),counters_1_1=counters_1.next();!counters_1_1.done;counters_1_1=counters_1.next()){var counter=counters_1_1.value;if(counter>maxCounter){maxCounter=counter;}if(counter<minCounter){minCounter=counter;}}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(counters_1_1&&!counters_1_1.done&&(_a=counters_1.return))_a.call(counters_1);}finally{if(e_1)throw e_1.error;}}return maxCounter<10*minCounter;}return false;};AbstractRSSReader.MAX_AVG_VARIANCE=0.2;AbstractRSSReader.MAX_INDIVIDUAL_VARIANCE=0.45;AbstractRSSReader.MIN_FINDER_PATTERN_RATIO=9.5/12.0;AbstractRSSReader.MAX_FINDER_PATTERN_RATIO=12.5/14.0;return AbstractRSSReader;}(OneDReader);var DataCharacter=/** @class */function(){function DataCharacter(value,checksumPortion){this.value=value;this.checksumPortion=checksumPortion;}DataCharacter.prototype.getValue=function(){return this.value;};DataCharacter.prototype.getChecksumPortion=function(){return this.checksumPortion;};DataCharacter.prototype.toString=function(){return this.value+'('+this.checksumPortion+')';};DataCharacter.prototype.equals=function(o){if(!(o instanceof DataCharacter)){return false;}var that=o;return this.value===that.value&&this.checksumPortion===that.checksumPortion;};DataCharacter.prototype.hashCode=function(){return this.value^this.checksumPortion;};return DataCharacter;}();var FinderPattern=/** @class */function(){function FinderPattern(value,startEnd,start,end,rowNumber){this.value=value;this.startEnd=startEnd;this.value=value;this.startEnd=startEnd;this.resultPoints=new Array();this.resultPoints.push(new ResultPoint(start,rowNumber));this.resultPoints.push(new ResultPoint(end,rowNumber));}FinderPattern.prototype.getValue=function(){return this.value;};FinderPattern.prototype.getStartEnd=function(){return this.startEnd;};FinderPattern.prototype.getResultPoints=function(){return this.resultPoints;};FinderPattern.prototype.equals=function(o){if(!(o instanceof FinderPattern)){return false;}var that=o;return this.value===that.value;};FinderPattern.prototype.hashCode=function(){return this.value;};return FinderPattern;}();var __values$c=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};/**
   * RSS util functions.
   */var RSSUtils=/** @class */function(){function RSSUtils(){}RSSUtils.getRSSvalue=function(widths,maxWidth,noNarrow){var e_1,_a;var n=0;try{for(var widths_1=__values$c(widths),widths_1_1=widths_1.next();!widths_1_1.done;widths_1_1=widths_1.next()){var width=widths_1_1.value;n+=width;}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(widths_1_1&&!widths_1_1.done&&(_a=widths_1.return))_a.call(widths_1);}finally{if(e_1)throw e_1.error;}}var val=0;var narrowMask=0;var elements=widths.length;for(var bar=0;bar<elements-1;bar++){var elmWidth=void 0;for(elmWidth=1,narrowMask|=1<<bar;elmWidth<widths[bar];elmWidth++,narrowMask&=~(1<<bar)){var subVal=RSSUtils.combins(n-elmWidth-1,elements-bar-2);if(noNarrow&&narrowMask===0&&n-elmWidth-(elements-bar-1)>=elements-bar-1){subVal-=RSSUtils.combins(n-elmWidth-(elements-bar),elements-bar-2);}if(elements-bar-1>1){var lessVal=0;for(var mxwElement=n-elmWidth-(elements-bar-2);mxwElement>maxWidth;mxwElement--){lessVal+=RSSUtils.combins(n-elmWidth-mxwElement-1,elements-bar-3);}subVal-=lessVal*(elements-1-bar);}else if(n-elmWidth>maxWidth){subVal--;}val+=subVal;}n-=elmWidth;}return val;};RSSUtils.combins=function(n,r){var maxDenom;var minDenom;if(n-r>r){minDenom=r;maxDenom=n-r;}else{minDenom=n-r;maxDenom=r;}var val=1;var j=1;for(var i=n;i>maxDenom;i--){val*=i;if(j<=minDenom){val/=j;j++;}}while(j<=minDenom){val/=j;j++;}return val;};return RSSUtils;}();var BitArrayBuilder=/** @class */function(){function BitArrayBuilder(){}BitArrayBuilder.buildBitArray=function(pairs){var charNumber=pairs.length*2-1;if(pairs[pairs.length-1].getRightChar()==null){charNumber-=1;}var size=12*charNumber;var binary=new BitArray(size);var accPos=0;var firstPair=pairs[0];var firstValue=firstPair.getRightChar().getValue();for(var i=11;i>=0;--i){if((firstValue&1<<i)!=0){binary.set(accPos);}accPos++;}for(var i=1;i<pairs.length;++i){var currentPair=pairs[i];var leftValue=currentPair.getLeftChar().getValue();for(var j=11;j>=0;--j){if((leftValue&1<<j)!=0){binary.set(accPos);}accPos++;}if(currentPair.getRightChar()!=null){var rightValue=currentPair.getRightChar().getValue();for(var j=11;j>=0;--j){if((rightValue&1<<j)!=0){binary.set(accPos);}accPos++;}}}return binary;};return BitArrayBuilder;}();var BlockParsedResult=/** @class */function(){function BlockParsedResult(finished,decodedInformation){if(decodedInformation){this.decodedInformation=null;}else{this.finished=finished;this.decodedInformation=decodedInformation;}}BlockParsedResult.prototype.getDecodedInformation=function(){return this.decodedInformation;};BlockParsedResult.prototype.isFinished=function(){return this.finished;};return BlockParsedResult;}();var DecodedObject=/** @class */function(){function DecodedObject(newPosition){this.newPosition=newPosition;}DecodedObject.prototype.getNewPosition=function(){return this.newPosition;};return DecodedObject;}();var __extends$w=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var DecodedChar=/** @class */function(_super){__extends$w(DecodedChar,_super);function DecodedChar(newPosition,value){var _this=_super.call(this,newPosition)||this;_this.value=value;return _this;}DecodedChar.prototype.getValue=function(){return this.value;};DecodedChar.prototype.isFNC1=function(){return this.value===DecodedChar.FNC1;};DecodedChar.FNC1='$';return DecodedChar;}(DecodedObject);var __extends$x=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var DecodedInformation=/** @class */function(_super){__extends$x(DecodedInformation,_super);function DecodedInformation(newPosition,newString,remainingValue){var _this=_super.call(this,newPosition)||this;if(remainingValue){_this.remaining=true;_this.remainingValue=_this.remainingValue;}else{_this.remaining=false;_this.remainingValue=0;}_this.newString=newString;return _this;}DecodedInformation.prototype.getNewString=function(){return this.newString;};DecodedInformation.prototype.isRemaining=function(){return this.remaining;};DecodedInformation.prototype.getRemainingValue=function(){return this.remainingValue;};return DecodedInformation;}(DecodedObject);var __extends$y=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var DecodedNumeric=/** @class */function(_super){__extends$y(DecodedNumeric,_super);function DecodedNumeric(newPosition,firstDigit,secondDigit){var _this=_super.call(this,newPosition)||this;if(firstDigit<0||firstDigit>10||secondDigit<0||secondDigit>10){throw new FormatException();}_this.firstDigit=firstDigit;_this.secondDigit=secondDigit;return _this;}DecodedNumeric.prototype.getFirstDigit=function(){return this.firstDigit;};DecodedNumeric.prototype.getSecondDigit=function(){return this.secondDigit;};DecodedNumeric.prototype.getValue=function(){return this.firstDigit*10+this.secondDigit;};DecodedNumeric.prototype.isFirstDigitFNC1=function(){return this.firstDigit===DecodedNumeric.FNC1;};DecodedNumeric.prototype.isSecondDigitFNC1=function(){return this.secondDigit===DecodedNumeric.FNC1;};DecodedNumeric.prototype.isAnyFNC1=function(){return this.firstDigit===DecodedNumeric.FNC1||this.secondDigit===DecodedNumeric.FNC1;};DecodedNumeric.FNC1=10;return DecodedNumeric;}(DecodedObject);var __values$d=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};var FieldParser=/** @class */function(){function FieldParser(){}FieldParser.parseFieldsInGeneralPurpose=function(rawInformation){var e_1,_a,e_2,_b,e_3,_c,e_4,_d;if(!rawInformation){return null;}// Processing 2-digit AIs
if(rawInformation.length<2){throw new NotFoundException();}var firstTwoDigits=rawInformation.substring(0,2);try{for(var _e=__values$d(FieldParser.TWO_DIGIT_DATA_LENGTH),_f=_e.next();!_f.done;_f=_e.next()){var dataLength=_f.value;if(dataLength[0]===firstTwoDigits){if(dataLength[1]===FieldParser.VARIABLE_LENGTH){return FieldParser.processVariableAI(2,dataLength[2],rawInformation);}return FieldParser.processFixedAI(2,dataLength[1],rawInformation);}}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(_f&&!_f.done&&(_a=_e.return))_a.call(_e);}finally{if(e_1)throw e_1.error;}}if(rawInformation.length<3){throw new NotFoundException();}var firstThreeDigits=rawInformation.substring(0,3);try{for(var _g=__values$d(FieldParser.THREE_DIGIT_DATA_LENGTH),_h=_g.next();!_h.done;_h=_g.next()){var dataLength=_h.value;if(dataLength[0]===firstThreeDigits){if(dataLength[1]===FieldParser.VARIABLE_LENGTH){return FieldParser.processVariableAI(3,dataLength[2],rawInformation);}return FieldParser.processFixedAI(3,dataLength[1],rawInformation);}}}catch(e_2_1){e_2={error:e_2_1};}finally{try{if(_h&&!_h.done&&(_b=_g.return))_b.call(_g);}finally{if(e_2)throw e_2.error;}}try{for(var _j=__values$d(FieldParser.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH),_k=_j.next();!_k.done;_k=_j.next()){var dataLength=_k.value;if(dataLength[0]===firstThreeDigits){if(dataLength[1]===FieldParser.VARIABLE_LENGTH){return FieldParser.processVariableAI(4,dataLength[2],rawInformation);}return FieldParser.processFixedAI(4,dataLength[1],rawInformation);}}}catch(e_3_1){e_3={error:e_3_1};}finally{try{if(_k&&!_k.done&&(_c=_j.return))_c.call(_j);}finally{if(e_3)throw e_3.error;}}if(rawInformation.length<4){throw new NotFoundException();}var firstFourDigits=rawInformation.substring(0,4);try{for(var _l=__values$d(FieldParser.FOUR_DIGIT_DATA_LENGTH),_m=_l.next();!_m.done;_m=_l.next()){var dataLength=_m.value;if(dataLength[0]===firstFourDigits){if(dataLength[1]===FieldParser.VARIABLE_LENGTH){return FieldParser.processVariableAI(4,dataLength[2],rawInformation);}return FieldParser.processFixedAI(4,dataLength[1],rawInformation);}}}catch(e_4_1){e_4={error:e_4_1};}finally{try{if(_m&&!_m.done&&(_d=_l.return))_d.call(_l);}finally{if(e_4)throw e_4.error;}}throw new NotFoundException();};FieldParser.processFixedAI=function(aiSize,fieldSize,rawInformation){if(rawInformation.length<aiSize){throw new NotFoundException();}var ai=rawInformation.substring(0,aiSize);if(rawInformation.length<aiSize+fieldSize){throw new NotFoundException();}var field=rawInformation.substring(aiSize,aiSize+fieldSize);var remaining=rawInformation.substring(aiSize+fieldSize);var result='('+ai+')'+field;var parsedAI=FieldParser.parseFieldsInGeneralPurpose(remaining);return parsedAI==null?result:result+parsedAI;};FieldParser.processVariableAI=function(aiSize,variableFieldSize,rawInformation){var ai=rawInformation.substring(0,aiSize);var maxSize;if(rawInformation.length<aiSize+variableFieldSize){maxSize=rawInformation.length;}else{maxSize=aiSize+variableFieldSize;}var field=rawInformation.substring(aiSize,maxSize);var remaining=rawInformation.substring(maxSize);var result='('+ai+')'+field;var parsedAI=FieldParser.parseFieldsInGeneralPurpose(remaining);return parsedAI==null?result:result+parsedAI;};FieldParser.VARIABLE_LENGTH=[];FieldParser.TWO_DIGIT_DATA_LENGTH=[['00',18],['01',14],['02',14],['10',FieldParser.VARIABLE_LENGTH,20],['11',6],['12',6],['13',6],['15',6],['17',6],['20',2],['21',FieldParser.VARIABLE_LENGTH,20],['22',FieldParser.VARIABLE_LENGTH,29],['30',FieldParser.VARIABLE_LENGTH,8],['37',FieldParser.VARIABLE_LENGTH,8],// internal company codes
['90',FieldParser.VARIABLE_LENGTH,30],['91',FieldParser.VARIABLE_LENGTH,30],['92',FieldParser.VARIABLE_LENGTH,30],['93',FieldParser.VARIABLE_LENGTH,30],['94',FieldParser.VARIABLE_LENGTH,30],['95',FieldParser.VARIABLE_LENGTH,30],['96',FieldParser.VARIABLE_LENGTH,30],['97',FieldParser.VARIABLE_LENGTH,3],['98',FieldParser.VARIABLE_LENGTH,30],['99',FieldParser.VARIABLE_LENGTH,30]];FieldParser.THREE_DIGIT_DATA_LENGTH=[// Same format as above
['240',FieldParser.VARIABLE_LENGTH,30],['241',FieldParser.VARIABLE_LENGTH,30],['242',FieldParser.VARIABLE_LENGTH,6],['250',FieldParser.VARIABLE_LENGTH,30],['251',FieldParser.VARIABLE_LENGTH,30],['253',FieldParser.VARIABLE_LENGTH,17],['254',FieldParser.VARIABLE_LENGTH,20],['400',FieldParser.VARIABLE_LENGTH,30],['401',FieldParser.VARIABLE_LENGTH,30],['402',17],['403',FieldParser.VARIABLE_LENGTH,30],['410',13],['411',13],['412',13],['413',13],['414',13],['420',FieldParser.VARIABLE_LENGTH,20],['421',FieldParser.VARIABLE_LENGTH,15],['422',3],['423',FieldParser.VARIABLE_LENGTH,15],['424',3],['425',3],['426',3]];FieldParser.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH=[// Same format as above
['310',6],['311',6],['312',6],['313',6],['314',6],['315',6],['316',6],['320',6],['321',6],['322',6],['323',6],['324',6],['325',6],['326',6],['327',6],['328',6],['329',6],['330',6],['331',6],['332',6],['333',6],['334',6],['335',6],['336',6],['340',6],['341',6],['342',6],['343',6],['344',6],['345',6],['346',6],['347',6],['348',6],['349',6],['350',6],['351',6],['352',6],['353',6],['354',6],['355',6],['356',6],['357',6],['360',6],['361',6],['362',6],['363',6],['364',6],['365',6],['366',6],['367',6],['368',6],['369',6],['390',FieldParser.VARIABLE_LENGTH,15],['391',FieldParser.VARIABLE_LENGTH,18],['392',FieldParser.VARIABLE_LENGTH,15],['393',FieldParser.VARIABLE_LENGTH,18],['703',FieldParser.VARIABLE_LENGTH,30]];FieldParser.FOUR_DIGIT_DATA_LENGTH=[// Same format as above
['7001',13],['7002',FieldParser.VARIABLE_LENGTH,30],['7003',10],['8001',14],['8002',FieldParser.VARIABLE_LENGTH,20],['8003',FieldParser.VARIABLE_LENGTH,30],['8004',FieldParser.VARIABLE_LENGTH,30],['8005',6],['8006',18],['8007',FieldParser.VARIABLE_LENGTH,30],['8008',FieldParser.VARIABLE_LENGTH,12],['8018',18],['8020',FieldParser.VARIABLE_LENGTH,25],['8100',6],['8101',10],['8102',2],['8110',FieldParser.VARIABLE_LENGTH,70],['8200',FieldParser.VARIABLE_LENGTH,70]];return FieldParser;}();var GeneralAppIdDecoder=/** @class */function(){function GeneralAppIdDecoder(information){this.buffer=new StringBuilder();this.information=information;}GeneralAppIdDecoder.prototype.decodeAllCodes=function(buff,initialPosition){var currentPosition=initialPosition;var remaining=null;do{var info=this.decodeGeneralPurposeField(currentPosition,remaining);var parsedFields=FieldParser.parseFieldsInGeneralPurpose(info.getNewString());if(parsedFields!=null){buff.append(parsedFields);}if(info.isRemaining()){remaining=''+info.getRemainingValue();}else{remaining=null;}if(currentPosition===info.getNewPosition()){// No step forward!
break;}currentPosition=info.getNewPosition();}while(true);return buff.toString();};GeneralAppIdDecoder.prototype.isStillNumeric=function(pos){// It's numeric if it still has 7 positions
// and one of the first 4 bits is "1".
if(pos+7>this.information.getSize()){return pos+4<=this.information.getSize();}for(var i=pos;i<pos+3;++i){if(this.information.get(i)){return true;}}return this.information.get(pos+3);};GeneralAppIdDecoder.prototype.decodeNumeric=function(pos){if(pos+7>this.information.getSize()){var numeric_1=this.extractNumericValueFromBitArray(pos,4);if(numeric_1===0){return new DecodedNumeric(this.information.getSize(),DecodedNumeric.FNC1,DecodedNumeric.FNC1);}return new DecodedNumeric(this.information.getSize(),numeric_1-1,DecodedNumeric.FNC1);}var numeric=this.extractNumericValueFromBitArray(pos,7);var digit1=(numeric-8)/11;var digit2=(numeric-8)%11;return new DecodedNumeric(pos+7,digit1,digit2);};GeneralAppIdDecoder.prototype.extractNumericValueFromBitArray=function(pos,bits){return GeneralAppIdDecoder.extractNumericValueFromBitArray(this.information,pos,bits);};GeneralAppIdDecoder.extractNumericValueFromBitArray=function(information,pos,bits){var value=0;for(var i=0;i<bits;++i){if(information.get(pos+i)){value|=1<<bits-i-1;}}return value;};GeneralAppIdDecoder.prototype.decodeGeneralPurposeField=function(pos,remaining){// this.buffer.setLength(0);
this.buffer.setLengthToZero();if(remaining!=null){this.buffer.append(remaining);}this.current.setPosition(pos);var lastDecoded=this.parseBlocks();if(lastDecoded!=null&&lastDecoded.isRemaining()){return new DecodedInformation(this.current.getPosition(),this.buffer.toString(),lastDecoded.getRemainingValue());}return new DecodedInformation(this.current.getPosition(),this.buffer.toString());};GeneralAppIdDecoder.prototype.parseBlocks=function(){var isFinished;var result;do{var initialPosition=this.current.getPosition();if(this.current.isAlpha()){result=this.parseAlphaBlock();isFinished=result.isFinished();}else if(this.current.isIsoIec646()){result=this.parseIsoIec646Block();isFinished=result.isFinished();}else{// it must be numeric
result=this.parseNumericBlock();isFinished=result.isFinished();}var positionChanged=initialPosition!==this.current.getPosition();if(!positionChanged&&!isFinished){break;}}while(!isFinished);return result.getDecodedInformation();};GeneralAppIdDecoder.prototype.parseNumericBlock=function(){while(this.isStillNumeric(this.current.getPosition())){var numeric=this.decodeNumeric(this.current.getPosition());this.current.setPosition(numeric.getNewPosition());if(numeric.isFirstDigitFNC1()){var information=void 0;if(numeric.isSecondDigitFNC1()){information=new DecodedInformation(this.current.getPosition(),this.buffer.toString());}else{information=new DecodedInformation(this.current.getPosition(),this.buffer.toString(),numeric.getSecondDigit());}return new BlockParsedResult(true,information);}this.buffer.append(numeric.getFirstDigit());if(numeric.isSecondDigitFNC1()){var information=new DecodedInformation(this.current.getPosition(),this.buffer.toString());return new BlockParsedResult(true,information);}this.buffer.append(numeric.getSecondDigit());}if(this.isNumericToAlphaNumericLatch(this.current.getPosition())){this.current.setAlpha();this.current.incrementPosition(4);}return new BlockParsedResult(false);};GeneralAppIdDecoder.prototype.parseIsoIec646Block=function(){while(this.isStillIsoIec646(this.current.getPosition())){var iso=this.decodeIsoIec646(this.current.getPosition());this.current.setPosition(iso.getNewPosition());if(iso.isFNC1()){var information=new DecodedInformation(this.current.getPosition(),this.buffer.toString());return new BlockParsedResult(true,information);}this.buffer.append(iso.getValue());}if(this.isAlphaOr646ToNumericLatch(this.current.getPosition())){this.current.incrementPosition(3);this.current.setNumeric();}else if(this.isAlphaTo646ToAlphaLatch(this.current.getPosition())){if(this.current.getPosition()+5<this.information.getSize()){this.current.incrementPosition(5);}else{this.current.setPosition(this.information.getSize());}this.current.setAlpha();}return new BlockParsedResult(false);};GeneralAppIdDecoder.prototype.parseAlphaBlock=function(){while(this.isStillAlpha(this.current.getPosition())){var alpha=this.decodeAlphanumeric(this.current.getPosition());this.current.setPosition(alpha.getNewPosition());if(alpha.isFNC1()){var information=new DecodedInformation(this.current.getPosition(),this.buffer.toString());return new BlockParsedResult(true,information);// end of the char block
}this.buffer.append(alpha.getValue());}if(this.isAlphaOr646ToNumericLatch(this.current.getPosition())){this.current.incrementPosition(3);this.current.setNumeric();}else if(this.isAlphaTo646ToAlphaLatch(this.current.getPosition())){if(this.current.getPosition()+5<this.information.getSize()){this.current.incrementPosition(5);}else{this.current.setPosition(this.information.getSize());}this.current.setIsoIec646();}return new BlockParsedResult(false);};GeneralAppIdDecoder.prototype.isStillIsoIec646=function(pos){if(pos+5>this.information.getSize()){return false;}var fiveBitValue=this.extractNumericValueFromBitArray(pos,5);if(fiveBitValue>=5&&fiveBitValue<16){return true;}if(pos+7>this.information.getSize()){return false;}var sevenBitValue=this.extractNumericValueFromBitArray(pos,7);if(sevenBitValue>=64&&sevenBitValue<116){return true;}if(pos+8>this.information.getSize()){return false;}var eightBitValue=this.extractNumericValueFromBitArray(pos,8);return eightBitValue>=232&&eightBitValue<253;};GeneralAppIdDecoder.prototype.decodeIsoIec646=function(pos){var fiveBitValue=this.extractNumericValueFromBitArray(pos,5);if(fiveBitValue===15){return new DecodedChar(pos+5,DecodedChar.FNC1);}if(fiveBitValue>=5&&fiveBitValue<15){return new DecodedChar(pos+5,'0'+(fiveBitValue-5));}var sevenBitValue=this.extractNumericValueFromBitArray(pos,7);if(sevenBitValue>=64&&sevenBitValue<90){return new DecodedChar(pos+7,''+(sevenBitValue+1));}if(sevenBitValue>=90&&sevenBitValue<116){return new DecodedChar(pos+7,''+(sevenBitValue+7));}var eightBitValue=this.extractNumericValueFromBitArray(pos,8);var c;switch(eightBitValue){case 232:c='!';break;case 233:c='"';break;case 234:c='%';break;case 235:c='&';break;case 236:c='\'';break;case 237:c='(';break;case 238:c=')';break;case 239:c='*';break;case 240:c='+';break;case 241:c=',';break;case 242:c='-';break;case 243:c='.';break;case 244:c='/';break;case 245:c=':';break;case 246:c=';';break;case 247:c='<';break;case 248:c='=';break;case 249:c='>';break;case 250:c='?';break;case 251:c='_';break;case 252:c=' ';break;default:throw new FormatException();}return new DecodedChar(pos+8,c);};GeneralAppIdDecoder.prototype.isStillAlpha=function(pos){if(pos+5>this.information.getSize()){return false;}// We now check if it's a valid 5-bit value (0..9 and FNC1)
var fiveBitValue=this.extractNumericValueFromBitArray(pos,5);if(fiveBitValue>=5&&fiveBitValue<16){return true;}if(pos+6>this.information.getSize()){return false;}var sixBitValue=this.extractNumericValueFromBitArray(pos,6);return sixBitValue>=16&&sixBitValue<63;// 63 not included
};GeneralAppIdDecoder.prototype.decodeAlphanumeric=function(pos){var fiveBitValue=this.extractNumericValueFromBitArray(pos,5);if(fiveBitValue===15){return new DecodedChar(pos+5,DecodedChar.FNC1);}if(fiveBitValue>=5&&fiveBitValue<15){return new DecodedChar(pos+5,'0'+(fiveBitValue-5));}var sixBitValue=this.extractNumericValueFromBitArray(pos,6);if(sixBitValue>=32&&sixBitValue<58){return new DecodedChar(pos+6,''+(sixBitValue+33));}var c;switch(sixBitValue){case 58:c='*';break;case 59:c=',';break;case 60:c='-';break;case 61:c='.';break;case 62:c='/';break;default:throw new IllegalStateException('Decoding invalid alphanumeric value: '+sixBitValue);}return new DecodedChar(pos+6,c);};GeneralAppIdDecoder.prototype.isAlphaTo646ToAlphaLatch=function(pos){if(pos+1>this.information.getSize()){return false;}for(var i=0;i<5&&i+pos<this.information.getSize();++i){if(i===2){if(!this.information.get(pos+2)){return false;}}else if(this.information.get(pos+i)){return false;}}return true;};GeneralAppIdDecoder.prototype.isAlphaOr646ToNumericLatch=function(pos){// Next is alphanumeric if there are 3 positions and they are all zeros
if(pos+3>this.information.getSize()){return false;}for(var i=pos;i<pos+3;++i){if(this.information.get(i)){return false;}}return true;};GeneralAppIdDecoder.prototype.isNumericToAlphaNumericLatch=function(pos){// Next is alphanumeric if there are 4 positions and they are all zeros, or
// if there is a subset of this just before the end of the symbol
if(pos+1>this.information.getSize()){return false;}for(var i=0;i<4&&i+pos<this.information.getSize();++i){if(this.information.get(pos+i)){return false;}}return true;};return GeneralAppIdDecoder;}();var AbstractExpandedDecoder=/** @class */function(){function AbstractExpandedDecoder(information){this.information=information;this.generalDecoder=new GeneralAppIdDecoder(information);}AbstractExpandedDecoder.prototype.getInformation=function(){return this.information;};AbstractExpandedDecoder.prototype.getGeneralDecoder=function(){return this.generalDecoder;};return AbstractExpandedDecoder;}();var __extends$z=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var AI01decoder=/** @class */function(_super){__extends$z(AI01decoder,_super);function AI01decoder(information){return _super.call(this,information)||this;}AI01decoder.prototype.encodeCompressedGtin=function(buf,currentPos){buf.append('(01)');var initialPosition=buf.length();buf.append('9');this.encodeCompressedGtinWithoutAI(buf,currentPos,initialPosition);};AI01decoder.prototype.encodeCompressedGtinWithoutAI=function(buf,currentPos,initialBufferPosition){for(var i=0;i<4;++i){var currentBlock=this.getGeneralDecoder().extractNumericValueFromBitArray(currentPos+10*i,10);if(currentBlock/100===0){buf.append('0');}if(currentBlock/10===0){buf.append('0');}buf.append(currentBlock);}AI01decoder.appendCheckDigit(buf,initialBufferPosition);};AI01decoder.appendCheckDigit=function(buf,currentPos){var checkDigit=0;for(var i=0;i<13;i++){// let digit = buf.charAt(i + currentPos) - '0';
// To be checked
var digit=buf.charAt(i+currentPos).charCodeAt(0)-'0'.charCodeAt(0);checkDigit+=(i&0x01)===0?3*digit:digit;}checkDigit=10-checkDigit%10;if(checkDigit===10){checkDigit=0;}buf.append(checkDigit);};AI01decoder.GTIN_SIZE=40;return AI01decoder;}(AbstractExpandedDecoder);var __extends$A=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var AI01AndOtherAIs=/** @class */function(_super){__extends$A(AI01AndOtherAIs,_super);// the second one is the encodation method, and the other two are for the variable length
function AI01AndOtherAIs(information){return _super.call(this,information)||this;}AI01AndOtherAIs.prototype.parseInformation=function(){var buff=new StringBuilder();buff.append('(01)');var initialGtinPosition=buff.length();var firstGtinDigit=this.getGeneralDecoder().extractNumericValueFromBitArray(AI01AndOtherAIs.HEADER_SIZE,4);buff.append(firstGtinDigit);this.encodeCompressedGtinWithoutAI(buff,AI01AndOtherAIs.HEADER_SIZE+4,initialGtinPosition);return this.getGeneralDecoder().decodeAllCodes(buff,AI01AndOtherAIs.HEADER_SIZE+44);};AI01AndOtherAIs.HEADER_SIZE=1+1+2;// first bit encodes the linkage flag,
return AI01AndOtherAIs;}(AI01decoder);var __extends$B=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var AnyAIDecoder=/** @class */function(_super){__extends$B(AnyAIDecoder,_super);function AnyAIDecoder(information){return _super.call(this,information)||this;}AnyAIDecoder.prototype.parseInformation=function(){var buf=new StringBuilder();return this.getGeneralDecoder().decodeAllCodes(buf,AnyAIDecoder.HEADER_SIZE);};AnyAIDecoder.HEADER_SIZE=2+1+2;return AnyAIDecoder;}(AbstractExpandedDecoder);var __extends$C=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var AI01weightDecoder=/** @class */function(_super){__extends$C(AI01weightDecoder,_super);function AI01weightDecoder(information){return _super.call(this,information)||this;}AI01weightDecoder.prototype.encodeCompressedWeight=function(buf,currentPos,weightSize){var originalWeightNumeric=this.getGeneralDecoder().extractNumericValueFromBitArray(currentPos,weightSize);this.addWeightCode(buf,originalWeightNumeric);var weightNumeric=this.checkWeight(originalWeightNumeric);var currentDivisor=100000;for(var i=0;i<5;++i){if(weightNumeric/currentDivisor===0){buf.append('0');}currentDivisor/=10;}buf.append(weightNumeric);};return AI01weightDecoder;}(AI01decoder);var __extends$D=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var AI013x0xDecoder=/** @class */function(_super){__extends$D(AI013x0xDecoder,_super);function AI013x0xDecoder(information){return _super.call(this,information)||this;}AI013x0xDecoder.prototype.parseInformation=function(){if(this.getInformation().getSize()!=AI013x0xDecoder.HEADER_SIZE+AI01weightDecoder.GTIN_SIZE+AI013x0xDecoder.WEIGHT_SIZE){throw new NotFoundException();}var buf=new StringBuilder();this.encodeCompressedGtin(buf,AI013x0xDecoder.HEADER_SIZE);this.encodeCompressedWeight(buf,AI013x0xDecoder.HEADER_SIZE+AI01weightDecoder.GTIN_SIZE,AI013x0xDecoder.WEIGHT_SIZE);return buf.toString();};AI013x0xDecoder.HEADER_SIZE=4+1;AI013x0xDecoder.WEIGHT_SIZE=15;return AI013x0xDecoder;}(AI01weightDecoder);var __extends$E=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var AI013103decoder=/** @class */function(_super){__extends$E(AI013103decoder,_super);function AI013103decoder(information){return _super.call(this,information)||this;}AI013103decoder.prototype.addWeightCode=function(buf,weight){buf.append('(3103)');};AI013103decoder.prototype.checkWeight=function(weight){return weight;};return AI013103decoder;}(AI013x0xDecoder);var __extends$F=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var AI01320xDecoder=/** @class */function(_super){__extends$F(AI01320xDecoder,_super);function AI01320xDecoder(information){return _super.call(this,information)||this;}AI01320xDecoder.prototype.addWeightCode=function(buf,weight){if(weight<10000){buf.append('(3202)');}else{buf.append('(3203)');}};AI01320xDecoder.prototype.checkWeight=function(weight){if(weight<10000){return weight;}return weight-10000;};return AI01320xDecoder;}(AI013x0xDecoder);var __extends$G=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var AI01392xDecoder=/** @class */function(_super){__extends$G(AI01392xDecoder,_super);function AI01392xDecoder(information){return _super.call(this,information)||this;}AI01392xDecoder.prototype.parseInformation=function(){if(this.getInformation().getSize()<AI01392xDecoder.HEADER_SIZE+AI01decoder.GTIN_SIZE){throw new NotFoundException();}var buf=new StringBuilder();this.encodeCompressedGtin(buf,AI01392xDecoder.HEADER_SIZE);var lastAIdigit=this.getGeneralDecoder().extractNumericValueFromBitArray(AI01392xDecoder.HEADER_SIZE+AI01decoder.GTIN_SIZE,AI01392xDecoder.LAST_DIGIT_SIZE);buf.append('(392');buf.append(lastAIdigit);buf.append(')');var decodedInformation=this.getGeneralDecoder().decodeGeneralPurposeField(AI01392xDecoder.HEADER_SIZE+AI01decoder.GTIN_SIZE+AI01392xDecoder.LAST_DIGIT_SIZE,null);buf.append(decodedInformation.getNewString());return buf.toString();};AI01392xDecoder.HEADER_SIZE=5+1+2;AI01392xDecoder.LAST_DIGIT_SIZE=2;return AI01392xDecoder;}(AI01decoder);var __extends$H=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var AI01393xDecoder=/** @class */function(_super){__extends$H(AI01393xDecoder,_super);function AI01393xDecoder(information){return _super.call(this,information)||this;}AI01393xDecoder.prototype.parseInformation=function(){if(this.getInformation().getSize()<AI01393xDecoder.HEADER_SIZE+AI01decoder.GTIN_SIZE){throw new NotFoundException();}var buf=new StringBuilder();this.encodeCompressedGtin(buf,AI01393xDecoder.HEADER_SIZE);var lastAIdigit=this.getGeneralDecoder().extractNumericValueFromBitArray(AI01393xDecoder.HEADER_SIZE+AI01decoder.GTIN_SIZE,AI01393xDecoder.LAST_DIGIT_SIZE);buf.append('(393');buf.append(lastAIdigit);buf.append(')');var firstThreeDigits=this.getGeneralDecoder().extractNumericValueFromBitArray(AI01393xDecoder.HEADER_SIZE+AI01decoder.GTIN_SIZE+AI01393xDecoder.LAST_DIGIT_SIZE,AI01393xDecoder.FIRST_THREE_DIGITS_SIZE);if(firstThreeDigits/100==0){buf.append('0');}if(firstThreeDigits/10==0){buf.append('0');}buf.append(firstThreeDigits);var generalInformation=this.getGeneralDecoder().decodeGeneralPurposeField(AI01393xDecoder.HEADER_SIZE+AI01decoder.GTIN_SIZE+AI01393xDecoder.LAST_DIGIT_SIZE+AI01393xDecoder.FIRST_THREE_DIGITS_SIZE,null);buf.append(generalInformation.getNewString());return buf.toString();};AI01393xDecoder.HEADER_SIZE=5+1+2;AI01393xDecoder.LAST_DIGIT_SIZE=2;AI01393xDecoder.FIRST_THREE_DIGITS_SIZE=10;return AI01393xDecoder;}(AI01decoder);var __extends$I=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var AI013x0x1xDecoder=/** @class */function(_super){__extends$I(AI013x0x1xDecoder,_super);function AI013x0x1xDecoder(information,firstAIdigits,dateCode){var _this=_super.call(this,information)||this;_this.dateCode=dateCode;_this.firstAIdigits=firstAIdigits;return _this;}AI013x0x1xDecoder.prototype.parseInformation=function(){if(this.getInformation().getSize()!=AI013x0x1xDecoder.HEADER_SIZE+AI013x0x1xDecoder.GTIN_SIZE+AI013x0x1xDecoder.WEIGHT_SIZE+AI013x0x1xDecoder.DATE_SIZE){throw new NotFoundException();}var buf=new StringBuilder();this.encodeCompressedGtin(buf,AI013x0x1xDecoder.HEADER_SIZE);this.encodeCompressedWeight(buf,AI013x0x1xDecoder.HEADER_SIZE+AI013x0x1xDecoder.GTIN_SIZE,AI013x0x1xDecoder.WEIGHT_SIZE);this.encodeCompressedDate(buf,AI013x0x1xDecoder.HEADER_SIZE+AI013x0x1xDecoder.GTIN_SIZE+AI013x0x1xDecoder.WEIGHT_SIZE);return buf.toString();};AI013x0x1xDecoder.prototype.encodeCompressedDate=function(buf,currentPos){var numericDate=this.getGeneralDecoder().extractNumericValueFromBitArray(currentPos,AI013x0x1xDecoder.DATE_SIZE);if(numericDate==38400){return;}buf.append('(');buf.append(this.dateCode);buf.append(')');var day=numericDate%32;numericDate/=32;var month=numericDate%12+1;numericDate/=12;var year=numericDate;if(year/10==0){buf.append('0');}buf.append(year);if(month/10==0){buf.append('0');}buf.append(month);if(day/10==0){buf.append('0');}buf.append(day);};AI013x0x1xDecoder.prototype.addWeightCode=function(buf,weight){buf.append('(');buf.append(this.firstAIdigits);buf.append(weight/100000);buf.append(')');};AI013x0x1xDecoder.prototype.checkWeight=function(weight){return weight%100000;};AI013x0x1xDecoder.HEADER_SIZE=7+1;AI013x0x1xDecoder.WEIGHT_SIZE=20;AI013x0x1xDecoder.DATE_SIZE=16;return AI013x0x1xDecoder;}(AI01weightDecoder);function createDecoder(information){try{if(information.get(1)){return new AI01AndOtherAIs(information);}if(!information.get(2)){return new AnyAIDecoder(information);}var fourBitEncodationMethod=GeneralAppIdDecoder.extractNumericValueFromBitArray(information,1,4);switch(fourBitEncodationMethod){case 4:return new AI013103decoder(information);case 5:return new AI01320xDecoder(information);}var fiveBitEncodationMethod=GeneralAppIdDecoder.extractNumericValueFromBitArray(information,1,5);switch(fiveBitEncodationMethod){case 12:return new AI01392xDecoder(information);case 13:return new AI01393xDecoder(information);}var sevenBitEncodationMethod=GeneralAppIdDecoder.extractNumericValueFromBitArray(information,1,7);switch(sevenBitEncodationMethod){case 56:return new AI013x0x1xDecoder(information,'310','11');case 57:return new AI013x0x1xDecoder(information,'320','11');case 58:return new AI013x0x1xDecoder(information,'310','13');case 59:return new AI013x0x1xDecoder(information,'320','13');case 60:return new AI013x0x1xDecoder(information,'310','15');case 61:return new AI013x0x1xDecoder(information,'320','15');case 62:return new AI013x0x1xDecoder(information,'310','17');case 63:return new AI013x0x1xDecoder(information,'320','17');}}catch(e){console.log(e);throw new IllegalStateException('unknown decoder: '+information);}}var ExpandedPair=/** @class */function(){function ExpandedPair(leftChar,rightChar,finderPatter,mayBeLast){this.leftchar=leftChar;this.rightchar=rightChar;this.finderpattern=finderPatter;this.maybeLast=mayBeLast;}ExpandedPair.prototype.mayBeLast=function(){return this.maybeLast;};ExpandedPair.prototype.getLeftChar=function(){return this.leftchar;};ExpandedPair.prototype.getRightChar=function(){return this.rightchar;};ExpandedPair.prototype.getFinderPattern=function(){return this.finderpattern;};ExpandedPair.prototype.mustBeLast=function(){return this.rightchar==null;};ExpandedPair.prototype.toString=function(){return'[ '+this.leftchar+', '+this.rightchar+' : '+(this.finderpattern==null?'null':this.finderpattern.getValue())+' ]';};ExpandedPair.equals=function(o1,o2){if(!(o1 instanceof ExpandedPair)){return false;}return ExpandedPair.equalsOrNull(o1.leftchar,o2.leftchar)&&ExpandedPair.equalsOrNull(o1.rightchar,o2.rightchar)&&ExpandedPair.equalsOrNull(o1.finderpattern,o2.finderpattern);};ExpandedPair.equalsOrNull=function(o1,o2){return o1===null?o2===null:ExpandedPair.equals(o1,o2);};ExpandedPair.prototype.hashCode=function(){// return ExpandedPair.hashNotNull(leftChar) ^ hashNotNull(rightChar) ^ hashNotNull(finderPattern);
var value=this.leftchar.getValue()^this.rightchar.getValue()^this.finderpattern.getValue();return value;};return ExpandedPair;}();var ExpandedRow=/** @class */function(){function ExpandedRow(pairs,rowNumber,wasReversed){this.pairs=pairs;this.rowNumber=rowNumber;this.wasReversed=wasReversed;}ExpandedRow.prototype.getPairs=function(){return this.pairs;};ExpandedRow.prototype.getRowNumber=function(){return this.rowNumber;};ExpandedRow.prototype.isReversed=function(){return this.wasReversed;};// check implementation
ExpandedRow.prototype.isEquivalent=function(otherPairs){return this.checkEqualitity(this,otherPairs);};// @Override
ExpandedRow.prototype.toString=function(){return'{ '+this.pairs+' }';};/**
       * Two rows are equal if they contain the same pairs in the same order.
       */ // @Override
// check implementation
ExpandedRow.prototype.equals=function(o1,o2){if(!(o1 instanceof ExpandedRow)){return false;}return this.checkEqualitity(o1,o2)&&o1.wasReversed===o2.wasReversed;};ExpandedRow.prototype.checkEqualitity=function(pair1,pair2){if(!pair1||!pair2)return;var result;pair1.forEach(function(e1,i){pair2.forEach(function(e2){if(e1.getLeftChar().getValue()===e2.getLeftChar().getValue()&&e1.getRightChar().getValue()===e2.getRightChar().getValue()&&e1.getFinderPatter().getValue()===e2.getFinderPatter().getValue()){result=true;}});});return result;};return ExpandedRow;}();var __extends$J=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __values$e=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};// import java.util.ArrayList;
// import java.util.Iterator;
// import java.util.List;
// import java.util.Map;
// import java.util.Collections;
var RSSExpandedReader=/** @class */function(_super){__extends$J(RSSExpandedReader,_super);function RSSExpandedReader(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.pairs=new Array(RSSExpandedReader.MAX_PAIRS);_this.rows=new Array();_this.startEnd=[2];return _this;}RSSExpandedReader.prototype.decodeRow=function(rowNumber,row,hints){// Rows can start with even pattern in case in prev rows there where odd number of patters.
// So lets try twice
// this.pairs.clear();
this.pairs.length=0;this.startFromEven=false;try{return RSSExpandedReader.constructResult(this.decodeRow2pairs(rowNumber,row));}catch(e){// OK
console.log(e);}this.pairs.length=0;this.startFromEven=true;return RSSExpandedReader.constructResult(this.decodeRow2pairs(rowNumber,row));};RSSExpandedReader.prototype.reset=function(){this.pairs.length=0;this.rows.length=0;};// Not private for testing
RSSExpandedReader.prototype.decodeRow2pairs=function(rowNumber,row){var done=false;while(!done){try{this.pairs.push(this.retrieveNextPair(row,this.pairs,rowNumber));}catch(error){if(error instanceof NotFoundException){if(!this.pairs.length){throw new NotFoundException();}// exit this loop when retrieveNextPair() fails and throws
done=true;}}}// TODO: verify sequence of finder patterns as in checkPairSequence()
if(this.checkChecksum()){return this.pairs;}var tryStackedDecode;if(this.rows.length){tryStackedDecode=true;}else{tryStackedDecode=false;}// let tryStackedDecode = !this.rows.isEmpty();
this.storeRow(rowNumber,false);// TODO: deal with reversed rows
if(tryStackedDecode){// When the image is 180-rotated, then rows are sorted in wrong direction.
// Try twice with both the directions.
var ps=this.checkRowsBoolean(false);if(ps!=null){return ps;}ps=this.checkRowsBoolean(true);if(ps!=null){return ps;}}throw new NotFoundException();};// Need to Verify
RSSExpandedReader.prototype.checkRowsBoolean=function(reverse){// Limit number of rows we are checking
// We use recursive algorithm with pure complexity and don't want it to take forever
// Stacked barcode can have up to 11 rows, so 25 seems reasonable enough
if(this.rows.length>25){this.rows.length=0;// We will never have a chance to get result, so clear it
return null;}this.pairs.length=0;if(reverse){this.rows=this.rows.reverse();// Collections.reverse(this.rows);
}var ps=null;try{ps=this.checkRows(new Array(),0);}catch(e){// OK
console.log(e);}if(reverse){this.rows=this.rows.reverse();// Collections.reverse(this.rows);
}return ps;};// Try to construct a valid rows sequence
// Recursion is used to implement backtracking
RSSExpandedReader.prototype.checkRows=function(collectedRows,currentRow){var e_1,_a;for(var i=currentRow;i<this.rows.length;i++){var row=this.rows[i];this.pairs.length=0;try{for(var collectedRows_1=(e_1=void 0,__values$e(collectedRows)),collectedRows_1_1=collectedRows_1.next();!collectedRows_1_1.done;collectedRows_1_1=collectedRows_1.next()){var collectedRow=collectedRows_1_1.value;this.pairs.push(collectedRow.getPairs());}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(collectedRows_1_1&&!collectedRows_1_1.done&&(_a=collectedRows_1.return))_a.call(collectedRows_1);}finally{if(e_1)throw e_1.error;}}this.pairs.push(row.getPairs());if(!RSSExpandedReader.isValidSequence(this.pairs)){continue;}if(this.checkChecksum()){return this.pairs;}var rs=new Array(collectedRows);rs.push(row);try{// Recursion: try to add more rows
return this.checkRows(rs,i+1);}catch(e){// We failed, try the next candidate
console.log(e);}}throw new NotFoundException();};// Whether the pairs form a valid find pattern sequence,
// either complete or a prefix
RSSExpandedReader.isValidSequence=function(pairs){var e_2,_a;try{for(var _b=__values$e(RSSExpandedReader.FINDER_PATTERN_SEQUENCES),_c=_b.next();!_c.done;_c=_b.next()){var sequence=_c.value;if(pairs.length>sequence.length){continue;}var stop_1=true;for(var j=0;j<pairs.length;j++){if(pairs[j].getFinderPattern().getValue()!=sequence[j]){stop_1=false;break;}}if(stop_1){return true;}}}catch(e_2_1){e_2={error:e_2_1};}finally{try{if(_c&&!_c.done&&(_a=_b.return))_a.call(_b);}finally{if(e_2)throw e_2.error;}}return false;};RSSExpandedReader.prototype.storeRow=function(rowNumber,wasReversed){// Discard if duplicate above or below; otherwise insert in order by row number.
var insertPos=0;var prevIsSame=false;var nextIsSame=false;while(insertPos<this.rows.length){var erow=this.rows[insertPos];if(erow.getRowNumber()>rowNumber){nextIsSame=erow.isEquivalent(this.pairs);break;}prevIsSame=erow.isEquivalent(this.pairs);insertPos++;}if(nextIsSame||prevIsSame){return;}// When the row was partially decoded (e.g. 2 pairs found instead of 3),
// it will prevent us from detecting the barcode.
// Try to merge partial rows
// Check whether the row is part of an allready detected row
if(RSSExpandedReader.isPartialRow(this.pairs,this.rows)){return;}this.rows.push(insertPos,new ExpandedRow(this.pairs,rowNumber,wasReversed));this.removePartialRows(this.pairs,this.rows);};// Remove all the rows that contains only specified pairs
RSSExpandedReader.prototype.removePartialRows=function(pairs,rows){var e_3,_a,e_4,_b,e_5,_c;try{// for (Iterator<ExpandedRow> iterator = rows.iterator(); iterator.hasNext();) {
//   ExpandedRow r = iterator.next();
//   if (r.getPairs().size() == pairs.size()) {
//     continue;
//   }
//   boolean allFound = true;
//   for (ExpandedPair p : r.getPairs()) {
//     boolean found = false;
//     for (ExpandedPair pp : pairs) {
//       if (p.equals(pp)) {
//         found = true;
//         break;
//       }
//     }
//     if (!found) {
//       allFound = false;
//       break;
//     }
//   }
//   if (allFound) {
//     // 'pairs' contains all the pairs from the row 'r'
//     iterator.remove();
//   }
// }
for(var rows_1=__values$e(rows),rows_1_1=rows_1.next();!rows_1_1.done;rows_1_1=rows_1.next()){var row=rows_1_1.value;if(row.getPairs().length===pairs.length){continue;}var allFound=true;try{for(var _d=(e_4=void 0,__values$e(row.getPairs())),_e=_d.next();!_e.done;_e=_d.next()){var p=_e.value;var found=false;try{for(var pairs_1=(e_5=void 0,__values$e(pairs)),pairs_1_1=pairs_1.next();!pairs_1_1.done;pairs_1_1=pairs_1.next()){var pp=pairs_1_1.value;if(ExpandedPair.equals(p,pp)){found=true;break;}}}catch(e_5_1){e_5={error:e_5_1};}finally{try{if(pairs_1_1&&!pairs_1_1.done&&(_c=pairs_1.return))_c.call(pairs_1);}finally{if(e_5)throw e_5.error;}}if(!found){allFound=false;}}}catch(e_4_1){e_4={error:e_4_1};}finally{try{if(_e&&!_e.done&&(_b=_d.return))_b.call(_d);}finally{if(e_4)throw e_4.error;}}}}catch(e_3_1){e_3={error:e_3_1};}finally{try{if(rows_1_1&&!rows_1_1.done&&(_a=rows_1.return))_a.call(rows_1);}finally{if(e_3)throw e_3.error;}}};// Returns true when one of the rows already contains all the pairs
RSSExpandedReader.isPartialRow=function(pairs,rows){var e_6,_a,e_7,_b,e_8,_c;try{for(var rows_2=__values$e(rows),rows_2_1=rows_2.next();!rows_2_1.done;rows_2_1=rows_2.next()){var r=rows_2_1.value;var allFound=true;try{for(var pairs_2=(e_7=void 0,__values$e(pairs)),pairs_2_1=pairs_2.next();!pairs_2_1.done;pairs_2_1=pairs_2.next()){var p=pairs_2_1.value;var found=false;try{for(var _d=(e_8=void 0,__values$e(r.getPairs())),_e=_d.next();!_e.done;_e=_d.next()){var pp=_e.value;if(p.equals(pp)){found=true;break;}}}catch(e_8_1){e_8={error:e_8_1};}finally{try{if(_e&&!_e.done&&(_c=_d.return))_c.call(_d);}finally{if(e_8)throw e_8.error;}}if(!found){allFound=false;break;}}}catch(e_7_1){e_7={error:e_7_1};}finally{try{if(pairs_2_1&&!pairs_2_1.done&&(_b=pairs_2.return))_b.call(pairs_2);}finally{if(e_7)throw e_7.error;}}if(allFound){// the row 'r' contain all the pairs from 'pairs'
return true;}}}catch(e_6_1){e_6={error:e_6_1};}finally{try{if(rows_2_1&&!rows_2_1.done&&(_a=rows_2.return))_a.call(rows_2);}finally{if(e_6)throw e_6.error;}}return false;};// Only used for unit testing
RSSExpandedReader.prototype.getRows=function(){return this.rows;};// Not private for unit testing
RSSExpandedReader.constructResult=function(pairs){var binary=BitArrayBuilder.buildBitArray(pairs);var decoder=createDecoder(binary);var resultingString=decoder.parseInformation();var firstPoints=pairs[0].getFinderPattern().getResultPoints();var lastPoints=pairs[pairs.length-1].getFinderPattern().getResultPoints();var points=[firstPoints[0],firstPoints[1],lastPoints[0],lastPoints[1]];return new Result(resultingString,null,null,points,BarcodeFormat$1.RSS_EXPANDED,null);};RSSExpandedReader.prototype.checkChecksum=function(){var firstPair=this.pairs.get(0);var checkCharacter=firstPair.getLeftChar();var firstCharacter=firstPair.getRightChar();if(firstCharacter==null){return false;}var checksum=firstCharacter.getChecksumPortion();var s=2;for(var i=1;i<this.pairs.size();++i){var currentPair=this.pairs.get(i);checksum+=currentPair.getLeftChar().getChecksumPortion();s++;var currentRightChar=currentPair.getRightChar();if(currentRightChar!=null){checksum+=currentRightChar.getChecksumPortion();s++;}}checksum%=211;var checkCharacterValue=211*(s-4)+checksum;return checkCharacterValue==checkCharacter.getValue();};RSSExpandedReader.getNextSecondBar=function(row,initialPos){var currentPos;if(row.get(initialPos)){currentPos=row.getNextUnset(initialPos);currentPos=row.getNextSet(currentPos);}else{currentPos=row.getNextSet(initialPos);currentPos=row.getNextUnset(currentPos);}return currentPos;};// not private for testing
RSSExpandedReader.prototype.retrieveNextPair=function(row,previousPairs,rowNumber){var isOddPattern=previousPairs.length%2==0;if(this.startFromEven){isOddPattern=!isOddPattern;}var pattern;var keepFinding=true;var forcedOffset=-1;do{this.findNextPair(row,previousPairs,forcedOffset);pattern=this.parseFoundFinderPattern(row,rowNumber,isOddPattern);if(pattern==null){forcedOffset=RSSExpandedReader.getNextSecondBar(row,this.startEnd[0]);}else{keepFinding=false;}}while(keepFinding);// When stacked symbol is split over multiple rows, there's no way to guess if this pair can be last or not.
// boolean mayBeLast = checkPairSequence(previousPairs, pattern);
var leftChar=this.decodeDataCharacter(row,pattern,isOddPattern,true);if(!this.isEmptyPair(previousPairs)&&previousPairs[previousPairs.length-1].mustBeLast()){throw new NotFoundException();}var rightChar;try{rightChar=this.decodeDataCharacter(row,pattern,isOddPattern,false);}catch(e){rightChar=null;console.log(e);}return new ExpandedPair(leftChar,rightChar,pattern,true);};RSSExpandedReader.prototype.isEmptyPair=function(pairs){if(pairs.length===0){return true;}return false;};RSSExpandedReader.prototype.findNextPair=function(row,previousPairs,forcedOffset){var counters=this.getDecodeFinderCounters();counters[0]=0;counters[1]=0;counters[2]=0;counters[3]=0;var width=row.getSize();var rowOffset;if(forcedOffset>=0){rowOffset=forcedOffset;}else if(this.isEmptyPair(previousPairs)){rowOffset=0;}else{var lastPair=previousPairs[previousPairs.length-1];rowOffset=lastPair.getFinderPattern().getStartEnd()[1];}var searchingEvenPair=previousPairs.length%2!=0;if(this.startFromEven){searchingEvenPair=!searchingEvenPair;}var isWhite=false;while(rowOffset<width){isWhite=!row.get(rowOffset);if(!isWhite){break;}rowOffset++;}var counterPosition=0;var patternStart=rowOffset;for(var x=rowOffset;x<width;x++){if(row.get(x)!=isWhite){counters[counterPosition]++;}else{if(counterPosition==3){if(searchingEvenPair){RSSExpandedReader.reverseCounters(counters);}if(RSSExpandedReader.isFinderPattern(counters)){this.startEnd[0]=patternStart;this.startEnd[1]=x;return;}if(searchingEvenPair){RSSExpandedReader.reverseCounters(counters);}patternStart+=counters[0]+counters[1];counters[0]=counters[2];counters[1]=counters[3];counters[2]=0;counters[3]=0;counterPosition--;}else{counterPosition++;}counters[counterPosition]=1;isWhite=!isWhite;}}throw new NotFoundException();};RSSExpandedReader.reverseCounters=function(counters){var length=counters.length;for(var i=0;i<length/2;++i){var tmp=counters[i];counters[i]=counters[length-i-1];counters[length-i-1]=tmp;}};RSSExpandedReader.prototype.parseFoundFinderPattern=function(row,rowNumber,oddPattern){// Actually we found elements 2-5.
var firstCounter;var start;var end;if(oddPattern){// If pattern number is odd, we need to locate element 1 *before* the current block.
var firstElementStart=this.startEnd[0]-1;// Locate element 1
while(firstElementStart>=0&&!row.get(firstElementStart)){firstElementStart--;}firstElementStart++;firstCounter=this.startEnd[0]-firstElementStart;start=firstElementStart;end=this.startEnd[1];}else{// If pattern number is even, the pattern is reversed, so we need to locate element 1 *after* the current block.
start=this.startEnd[0];end=row.getNextUnset(this.startEnd[1]+1);firstCounter=end-this.startEnd[1];}// Make 'counters' hold 1-4
var counters=this.getDecodeFinderCounters();System.arraycopy(counters,0,counters,1,counters.length-1);counters[0]=firstCounter;var value;try{value=this.parseFinderValue(counters,RSSExpandedReader.FINDER_PATTERNS);}catch(e){return null;}// return new FinderPattern(value, new int[] { start, end }, start, end, rowNumber});
return new FinderPattern(value,[start,end],start,end,rowNumber);};RSSExpandedReader.prototype.decodeDataCharacter=function(row,pattern,isOddPattern,leftChar){var counters=this.getDataCharacterCounters();for(var x=0;x<counters.length;x++){counters[x]=0;}if(leftChar){RSSExpandedReader.recordPatternInReverse(row,pattern.getStartEnd()[0],counters);}else{RSSExpandedReader.recordPattern(row,pattern.getStartEnd()[1],counters);// reverse it
for(var i=0,j=counters.length-1;i<j;i++,j--){var temp=counters[i];counters[i]=counters[j];counters[j]=temp;}}// counters[] has the pixels of the module
var numModules=17;// left and right data characters have all the same length
var elementWidth=MathUtils.sum(new Int32Array(counters))/numModules;// Sanity check: element width for pattern and the character should match
var expectedElementWidth=(pattern.getStartEnd()[1]-pattern.getStartEnd()[0])/15.0;if(Math.abs(elementWidth-expectedElementWidth)/expectedElementWidth>0.3){throw new NotFoundException();}var oddCounts=this.getOddCounts();var evenCounts=this.getEvenCounts();var oddRoundingErrors=this.getOddRoundingErrors();var evenRoundingErrors=this.getEvenRoundingErrors();for(var i=0;i<counters.length;i++){var value_1=1.0*counters[i]/elementWidth;var count=value_1+0.5;// Round
if(count<1){if(value_1<0.3){throw new NotFoundException();}count=1;}else if(count>8){if(value_1>8.7){throw new NotFoundException();}count=8;}var offset=i/2;if((i&0x01)==0){oddCounts[offset]=count;oddRoundingErrors[offset]=value_1-count;}else{evenCounts[offset]=count;evenRoundingErrors[offset]=value_1-count;}}this.adjustOddEvenCounts(numModules);var weightRowNumber=4*pattern.getValue()+(isOddPattern?0:2)+(leftChar?0:1)-1;var oddSum=0;var oddChecksumPortion=0;for(var i=oddCounts.length-1;i>=0;i--){if(RSSExpandedReader.isNotA1left(pattern,isOddPattern,leftChar)){var weight=RSSExpandedReader.WEIGHTS[weightRowNumber][2*i];oddChecksumPortion+=oddCounts[i]*weight;}oddSum+=oddCounts[i];}var evenChecksumPortion=0;// int evenSum = 0;
for(var i=evenCounts.length-1;i>=0;i--){if(RSSExpandedReader.isNotA1left(pattern,isOddPattern,leftChar)){var weight=RSSExpandedReader.WEIGHTS[weightRowNumber][2*i+1];evenChecksumPortion+=evenCounts[i]*weight;}// evenSum += evenCounts[i];
}var checksumPortion=oddChecksumPortion+evenChecksumPortion;if((oddSum&0x01)!=0||oddSum>13||oddSum<4){throw new NotFoundException();}var group=(13-oddSum)/2;var oddWidest=RSSExpandedReader.SYMBOL_WIDEST[group];var evenWidest=9-oddWidest;var vOdd=RSSUtils.getRSSvalue(oddCounts,oddWidest,true);var vEven=RSSUtils.getRSSvalue(evenCounts,evenWidest,false);var tEven=RSSExpandedReader.EVEN_TOTAL_SUBSET[group];var gSum=RSSExpandedReader.GSUM[group];var value=vOdd*tEven+vEven+gSum;return new DataCharacter(value,checksumPortion);};RSSExpandedReader.isNotA1left=function(pattern,isOddPattern,leftChar){// A1: pattern.getValue is 0 (A), and it's an oddPattern, and it is a left char
return!(pattern.getValue()==0&&isOddPattern&&leftChar);};RSSExpandedReader.prototype.adjustOddEvenCounts=function(numModules){var oddSum=MathUtils.sum(new Int32Array(this.getOddCounts()));var evenSum=MathUtils.sum(new Int32Array(this.getEvenCounts()));var incrementOdd=false;var decrementOdd=false;if(oddSum>13){decrementOdd=true;}else if(oddSum<4){incrementOdd=true;}var incrementEven=false;var decrementEven=false;if(evenSum>13){decrementEven=true;}else if(evenSum<4){incrementEven=true;}var mismatch=oddSum+evenSum-numModules;var oddParityBad=(oddSum&0x01)==1;var evenParityBad=(evenSum&0x01)==0;if(mismatch==1){if(oddParityBad){if(evenParityBad){throw new NotFoundException();}decrementOdd=true;}else{if(!evenParityBad){throw new NotFoundException();}decrementEven=true;}}else if(mismatch==-1){if(oddParityBad){if(evenParityBad){throw new NotFoundException();}incrementOdd=true;}else{if(!evenParityBad){throw new NotFoundException();}incrementEven=true;}}else if(mismatch==0){if(oddParityBad){if(!evenParityBad){throw new NotFoundException();}// Both bad
if(oddSum<evenSum){incrementOdd=true;decrementEven=true;}else{decrementOdd=true;incrementEven=true;}}else{if(evenParityBad){throw new NotFoundException();}// Nothing to do!
}}else{throw new NotFoundException();}if(incrementOdd){if(decrementOdd){throw new NotFoundException();}RSSExpandedReader.increment(this.getOddCounts(),this.getOddRoundingErrors());}if(decrementOdd){RSSExpandedReader.decrement(this.getOddCounts(),this.getOddRoundingErrors());}if(incrementEven){if(decrementEven){throw new NotFoundException();}RSSExpandedReader.increment(this.getEvenCounts(),this.getOddRoundingErrors());}if(decrementEven){RSSExpandedReader.decrement(this.getEvenCounts(),this.getEvenRoundingErrors());}};RSSExpandedReader.SYMBOL_WIDEST=[7,5,4,3,1];RSSExpandedReader.EVEN_TOTAL_SUBSET=[4,20,52,104,204];RSSExpandedReader.GSUM=[0,348,1388,2948,3988];RSSExpandedReader.FINDER_PATTERNS=[Int32Array.from([1,8,4,1]),Int32Array.from([3,6,4,1]),Int32Array.from([3,4,6,1]),Int32Array.from([3,2,8,1]),Int32Array.from([2,6,5,1]),Int32Array.from([2,2,9,1])// F
];RSSExpandedReader.WEIGHTS=[[1,3,9,27,81,32,96,77],[20,60,180,118,143,7,21,63],[189,145,13,39,117,140,209,205],[193,157,49,147,19,57,171,91],[62,186,136,197,169,85,44,132],[185,133,188,142,4,12,36,108],[113,128,173,97,80,29,87,50],[150,28,84,41,123,158,52,156],[46,138,203,187,139,206,196,166],[76,17,51,153,37,111,122,155],[43,129,176,106,107,110,119,146],[16,48,144,10,30,90,59,177],[109,116,137,200,178,112,125,164],[70,210,208,202,184,130,179,115],[134,191,151,31,93,68,204,190],[148,22,66,198,172,94,71,2],[6,18,54,162,64,192,154,40],[120,149,25,75,14,42,126,167],[79,26,78,23,69,207,199,175],[103,98,83,38,114,131,182,124],[161,61,183,127,170,88,53,159],[55,165,73,8,24,72,5,15],[45,135,194,160,58,174,100,89]];RSSExpandedReader.FINDER_PAT_A=0;RSSExpandedReader.FINDER_PAT_B=1;RSSExpandedReader.FINDER_PAT_C=2;RSSExpandedReader.FINDER_PAT_D=3;RSSExpandedReader.FINDER_PAT_E=4;RSSExpandedReader.FINDER_PAT_F=5;RSSExpandedReader.FINDER_PATTERN_SEQUENCES=[[RSSExpandedReader.FINDER_PAT_A,RSSExpandedReader.FINDER_PAT_A],[RSSExpandedReader.FINDER_PAT_A,RSSExpandedReader.FINDER_PAT_B,RSSExpandedReader.FINDER_PAT_B],[RSSExpandedReader.FINDER_PAT_A,RSSExpandedReader.FINDER_PAT_C,RSSExpandedReader.FINDER_PAT_B,RSSExpandedReader.FINDER_PAT_D],[RSSExpandedReader.FINDER_PAT_A,RSSExpandedReader.FINDER_PAT_E,RSSExpandedReader.FINDER_PAT_B,RSSExpandedReader.FINDER_PAT_D,RSSExpandedReader.FINDER_PAT_C],[RSSExpandedReader.FINDER_PAT_A,RSSExpandedReader.FINDER_PAT_E,RSSExpandedReader.FINDER_PAT_B,RSSExpandedReader.FINDER_PAT_D,RSSExpandedReader.FINDER_PAT_D,RSSExpandedReader.FINDER_PAT_F],[RSSExpandedReader.FINDER_PAT_A,RSSExpandedReader.FINDER_PAT_E,RSSExpandedReader.FINDER_PAT_B,RSSExpandedReader.FINDER_PAT_D,RSSExpandedReader.FINDER_PAT_E,RSSExpandedReader.FINDER_PAT_F,RSSExpandedReader.FINDER_PAT_F],[RSSExpandedReader.FINDER_PAT_A,RSSExpandedReader.FINDER_PAT_A,RSSExpandedReader.FINDER_PAT_B,RSSExpandedReader.FINDER_PAT_B,RSSExpandedReader.FINDER_PAT_C,RSSExpandedReader.FINDER_PAT_C,RSSExpandedReader.FINDER_PAT_D,RSSExpandedReader.FINDER_PAT_D],[RSSExpandedReader.FINDER_PAT_A,RSSExpandedReader.FINDER_PAT_A,RSSExpandedReader.FINDER_PAT_B,RSSExpandedReader.FINDER_PAT_B,RSSExpandedReader.FINDER_PAT_C,RSSExpandedReader.FINDER_PAT_C,RSSExpandedReader.FINDER_PAT_D,RSSExpandedReader.FINDER_PAT_E,RSSExpandedReader.FINDER_PAT_E],[RSSExpandedReader.FINDER_PAT_A,RSSExpandedReader.FINDER_PAT_A,RSSExpandedReader.FINDER_PAT_B,RSSExpandedReader.FINDER_PAT_B,RSSExpandedReader.FINDER_PAT_C,RSSExpandedReader.FINDER_PAT_C,RSSExpandedReader.FINDER_PAT_D,RSSExpandedReader.FINDER_PAT_E,RSSExpandedReader.FINDER_PAT_F,RSSExpandedReader.FINDER_PAT_F],[RSSExpandedReader.FINDER_PAT_A,RSSExpandedReader.FINDER_PAT_A,RSSExpandedReader.FINDER_PAT_B,RSSExpandedReader.FINDER_PAT_B,RSSExpandedReader.FINDER_PAT_C,RSSExpandedReader.FINDER_PAT_D,RSSExpandedReader.FINDER_PAT_D,RSSExpandedReader.FINDER_PAT_E,RSSExpandedReader.FINDER_PAT_E,RSSExpandedReader.FINDER_PAT_F,RSSExpandedReader.FINDER_PAT_F]];RSSExpandedReader.MAX_PAIRS=11;return RSSExpandedReader;}(AbstractRSSReader);var __extends$K=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var Pair=/** @class */function(_super){__extends$K(Pair,_super);function Pair(value,checksumPortion,finderPattern){var _this=_super.call(this,value,checksumPortion)||this;_this.count=0;_this.finderPattern=finderPattern;return _this;}Pair.prototype.getFinderPattern=function(){return this.finderPattern;};Pair.prototype.getCount=function(){return this.count;};Pair.prototype.incrementCount=function(){this.count++;};return Pair;}(DataCharacter);var __extends$L=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __values$f=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};var RSS14Reader=/** @class */function(_super){__extends$L(RSS14Reader,_super);function RSS14Reader(){var _this=_super!==null&&_super.apply(this,arguments)||this;_this.possibleLeftPairs=[];_this.possibleRightPairs=[];return _this;}RSS14Reader.prototype.decodeRow=function(rowNumber,row,hints){var e_1,_a,e_2,_b;var leftPair=this.decodePair(row,false,rowNumber,hints);RSS14Reader.addOrTally(this.possibleLeftPairs,leftPair);row.reverse();var rightPair=this.decodePair(row,true,rowNumber,hints);RSS14Reader.addOrTally(this.possibleRightPairs,rightPair);row.reverse();try{for(var _c=__values$f(this.possibleLeftPairs),_d=_c.next();!_d.done;_d=_c.next()){var left=_d.value;if(left.getCount()>1){try{for(var _e=(e_2=void 0,__values$f(this.possibleRightPairs)),_f=_e.next();!_f.done;_f=_e.next()){var right=_f.value;if(right.getCount()>1&&RSS14Reader.checkChecksum(left,right)){return RSS14Reader.constructResult(left,right);}}}catch(e_2_1){e_2={error:e_2_1};}finally{try{if(_f&&!_f.done&&(_b=_e.return))_b.call(_e);}finally{if(e_2)throw e_2.error;}}}}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(_d&&!_d.done&&(_a=_c.return))_a.call(_c);}finally{if(e_1)throw e_1.error;}}throw new NotFoundException();};RSS14Reader.addOrTally=function(possiblePairs,pair){var e_3,_a;if(pair==null){return;}var found=false;try{for(var possiblePairs_1=__values$f(possiblePairs),possiblePairs_1_1=possiblePairs_1.next();!possiblePairs_1_1.done;possiblePairs_1_1=possiblePairs_1.next()){var other=possiblePairs_1_1.value;if(other.getValue()===pair.getValue()){other.incrementCount();found=true;break;}}}catch(e_3_1){e_3={error:e_3_1};}finally{try{if(possiblePairs_1_1&&!possiblePairs_1_1.done&&(_a=possiblePairs_1.return))_a.call(possiblePairs_1);}finally{if(e_3)throw e_3.error;}}if(!found){possiblePairs.push(pair);}};RSS14Reader.prototype.reset=function(){this.possibleLeftPairs.length=0;this.possibleRightPairs.length=0;};RSS14Reader.constructResult=function(leftPair,rightPair){var symbolValue=4537077*leftPair.getValue()+rightPair.getValue();var text=new String(symbolValue).toString();var buffer=new StringBuilder();for(var i=13-text.length;i>0;i--){buffer.append('0');}buffer.append(text);var checkDigit=0;for(var i=0;i<13;i++){var digit=buffer.charAt(i).charCodeAt(0)-'0'.charCodeAt(0);checkDigit+=(i&0x01)===0?3*digit:digit;}checkDigit=10-checkDigit%10;if(checkDigit===10){checkDigit=0;}buffer.append(checkDigit.toString());var leftPoints=leftPair.getFinderPattern().getResultPoints();var rightPoints=rightPair.getFinderPattern().getResultPoints();return new Result(buffer.toString(),null,0,[leftPoints[0],leftPoints[1],rightPoints[0],rightPoints[1]],BarcodeFormat$1.RSS_14,new Date().getTime());};RSS14Reader.checkChecksum=function(leftPair,rightPair){var checkValue=(leftPair.getChecksumPortion()+16*rightPair.getChecksumPortion())%79;var targetCheckValue=9*leftPair.getFinderPattern().getValue()+rightPair.getFinderPattern().getValue();if(targetCheckValue>72){targetCheckValue--;}if(targetCheckValue>8){targetCheckValue--;}return checkValue===targetCheckValue;};RSS14Reader.prototype.decodePair=function(row,right,rowNumber,hints){try{var startEnd=this.findFinderPattern(row,right);var pattern=this.parseFoundFinderPattern(row,rowNumber,right,startEnd);var resultPointCallback=hints==null?null:hints.get(DecodeHintType$1.NEED_RESULT_POINT_CALLBACK);if(resultPointCallback!=null){var center=(startEnd[0]+startEnd[1])/2.0;if(right){// row is actually reversed
center=row.getSize()-1-center;}resultPointCallback.foundPossibleResultPoint(new ResultPoint(center,rowNumber));}var outside=this.decodeDataCharacter(row,pattern,true);var inside=this.decodeDataCharacter(row,pattern,false);return new Pair(1597*outside.getValue()+inside.getValue(),outside.getChecksumPortion()+4*inside.getChecksumPortion(),pattern);}catch(err){return null;}};RSS14Reader.prototype.decodeDataCharacter=function(row,pattern,outsideChar){var counters=this.getDataCharacterCounters();for(var x=0;x<counters.length;x++){counters[x]=0;}if(outsideChar){OneDReader.recordPatternInReverse(row,pattern.getStartEnd()[0],counters);}else{OneDReader.recordPattern(row,pattern.getStartEnd()[1]+1,counters);// reverse it
for(var i=0,j=counters.length-1;i<j;i++,j--){var temp=counters[i];counters[i]=counters[j];counters[j]=temp;}}var numModules=outsideChar?16:15;var elementWidth=MathUtils.sum(new Int32Array(counters))/numModules;var oddCounts=this.getOddCounts();var evenCounts=this.getEvenCounts();var oddRoundingErrors=this.getOddRoundingErrors();var evenRoundingErrors=this.getEvenRoundingErrors();for(var i=0;i<counters.length;i++){var value=counters[i]/elementWidth;var count=Math.floor(value+0.5);if(count<1){count=1;}else if(count>8){count=8;}var offset=Math.floor(i/2);if((i&0x01)===0){oddCounts[offset]=count;oddRoundingErrors[offset]=value-count;}else{evenCounts[offset]=count;evenRoundingErrors[offset]=value-count;}}this.adjustOddEvenCounts(outsideChar,numModules);var oddSum=0;var oddChecksumPortion=0;for(var i=oddCounts.length-1;i>=0;i--){oddChecksumPortion*=9;oddChecksumPortion+=oddCounts[i];oddSum+=oddCounts[i];}var evenChecksumPortion=0;var evenSum=0;for(var i=evenCounts.length-1;i>=0;i--){evenChecksumPortion*=9;evenChecksumPortion+=evenCounts[i];evenSum+=evenCounts[i];}var checksumPortion=oddChecksumPortion+3*evenChecksumPortion;if(outsideChar){if((oddSum&0x01)!==0||oddSum>12||oddSum<4){throw new NotFoundException();}var group=(12-oddSum)/2;var oddWidest=RSS14Reader.OUTSIDE_ODD_WIDEST[group];var evenWidest=9-oddWidest;var vOdd=RSSUtils.getRSSvalue(oddCounts,oddWidest,false);var vEven=RSSUtils.getRSSvalue(evenCounts,evenWidest,true);var tEven=RSS14Reader.OUTSIDE_EVEN_TOTAL_SUBSET[group];var gSum=RSS14Reader.OUTSIDE_GSUM[group];return new DataCharacter(vOdd*tEven+vEven+gSum,checksumPortion);}else{if((evenSum&0x01)!==0||evenSum>10||evenSum<4){throw new NotFoundException();}var group=(10-evenSum)/2;var oddWidest=RSS14Reader.INSIDE_ODD_WIDEST[group];var evenWidest=9-oddWidest;var vOdd=RSSUtils.getRSSvalue(oddCounts,oddWidest,true);var vEven=RSSUtils.getRSSvalue(evenCounts,evenWidest,false);var tOdd=RSS14Reader.INSIDE_ODD_TOTAL_SUBSET[group];var gSum=RSS14Reader.INSIDE_GSUM[group];return new DataCharacter(vEven*tOdd+vOdd+gSum,checksumPortion);}};RSS14Reader.prototype.findFinderPattern=function(row,rightFinderPattern){var counters=this.getDecodeFinderCounters();counters[0]=0;counters[1]=0;counters[2]=0;counters[3]=0;var width=row.getSize();var isWhite=false;var rowOffset=0;while(rowOffset<width){isWhite=!row.get(rowOffset);if(rightFinderPattern===isWhite){// Will encounter white first when searching for right finder pattern
break;}rowOffset++;}var counterPosition=0;var patternStart=rowOffset;for(var x=rowOffset;x<width;x++){if(row.get(x)!==isWhite){counters[counterPosition]++;}else{if(counterPosition===3){if(AbstractRSSReader.isFinderPattern(counters)){return[patternStart,x];}patternStart+=counters[0]+counters[1];counters[0]=counters[2];counters[1]=counters[3];counters[2]=0;counters[3]=0;counterPosition--;}else{counterPosition++;}counters[counterPosition]=1;isWhite=!isWhite;}}throw new NotFoundException();};RSS14Reader.prototype.parseFoundFinderPattern=function(row,rowNumber,right,startEnd){// Actually we found elements 2-5
var firstIsBlack=row.get(startEnd[0]);var firstElementStart=startEnd[0]-1;// Locate element 1
while(firstElementStart>=0&&firstIsBlack!==row.get(firstElementStart)){firstElementStart--;}firstElementStart++;var firstCounter=startEnd[0]-firstElementStart;// Make 'counters' hold 1-4
var counters=this.getDecodeFinderCounters();var copy=new Int32Array(counters.length);System.arraycopy(counters,0,copy,1,counters.length-1);copy[0]=firstCounter;var value=this.parseFinderValue(copy,RSS14Reader.FINDER_PATTERNS);var start=firstElementStart;var end=startEnd[1];if(right){// row is actually reversed
start=row.getSize()-1-start;end=row.getSize()-1-end;}return new FinderPattern(value,[firstElementStart,startEnd[1]],start,end,rowNumber);};RSS14Reader.prototype.adjustOddEvenCounts=function(outsideChar,numModules){var oddSum=MathUtils.sum(new Int32Array(this.getOddCounts()));var evenSum=MathUtils.sum(new Int32Array(this.getEvenCounts()));var incrementOdd=false;var decrementOdd=false;var incrementEven=false;var decrementEven=false;if(outsideChar){if(oddSum>12){decrementOdd=true;}else if(oddSum<4){incrementOdd=true;}if(evenSum>12){decrementEven=true;}else if(evenSum<4){incrementEven=true;}}else{if(oddSum>11){decrementOdd=true;}else if(oddSum<5){incrementOdd=true;}if(evenSum>10){decrementEven=true;}else if(evenSum<4){incrementEven=true;}}var mismatch=oddSum+evenSum-numModules;var oddParityBad=(oddSum&0x01)===(outsideChar?1:0);var evenParityBad=(evenSum&0x01)===1;if(mismatch===1){if(oddParityBad){if(evenParityBad){throw new NotFoundException();}decrementOdd=true;}else{if(!evenParityBad){throw new NotFoundException();}decrementEven=true;}}else if(mismatch===-1){if(oddParityBad){if(evenParityBad){throw new NotFoundException();}incrementOdd=true;}else{if(!evenParityBad){throw new NotFoundException();}incrementEven=true;}}else if(mismatch===0){if(oddParityBad){if(!evenParityBad){throw new NotFoundException();}// Both bad
if(oddSum<evenSum){incrementOdd=true;decrementEven=true;}else{decrementOdd=true;incrementEven=true;}}else{if(evenParityBad){throw new NotFoundException();}// Nothing to do!
}}else{throw new NotFoundException();}if(incrementOdd){if(decrementOdd){throw new NotFoundException();}AbstractRSSReader.increment(this.getOddCounts(),this.getOddRoundingErrors());}if(decrementOdd){AbstractRSSReader.decrement(this.getOddCounts(),this.getOddRoundingErrors());}if(incrementEven){if(decrementEven){throw new NotFoundException();}AbstractRSSReader.increment(this.getEvenCounts(),this.getOddRoundingErrors());}if(decrementEven){AbstractRSSReader.decrement(this.getEvenCounts(),this.getEvenRoundingErrors());}};RSS14Reader.OUTSIDE_EVEN_TOTAL_SUBSET=[1,10,34,70,126];RSS14Reader.INSIDE_ODD_TOTAL_SUBSET=[4,20,48,81];RSS14Reader.OUTSIDE_GSUM=[0,161,961,2015,2715];RSS14Reader.INSIDE_GSUM=[0,336,1036,1516];RSS14Reader.OUTSIDE_ODD_WIDEST=[8,6,4,3,1];RSS14Reader.INSIDE_ODD_WIDEST=[2,4,6,8];RSS14Reader.FINDER_PATTERNS=[Int32Array.from([3,8,2,1]),Int32Array.from([3,5,5,1]),Int32Array.from([3,3,7,1]),Int32Array.from([3,1,9,1]),Int32Array.from([2,7,4,1]),Int32Array.from([2,5,6,1]),Int32Array.from([2,3,8,1]),Int32Array.from([1,5,7,1]),Int32Array.from([1,3,9,1])];return RSS14Reader;}(AbstractRSSReader);/*
   * Copyright 2008 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __extends$M=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * @author Daniel Switkin <dswitkin@google.com>
   * @author Sean Owen
   */var MultiFormatOneDReader=/** @class */function(_super){__extends$M(MultiFormatOneDReader,_super);function MultiFormatOneDReader(hints){var _this=_super.call(this)||this;_this.readers=[];var possibleFormats=!hints?null:hints.get(DecodeHintType$1.POSSIBLE_FORMATS);var useCode39CheckDigit=hints&&hints.get(DecodeHintType$1.ASSUME_CODE_39_CHECK_DIGIT)!==undefined;if(possibleFormats){if(possibleFormats.includes(BarcodeFormat$1.EAN_13)||possibleFormats.includes(BarcodeFormat$1.UPC_A)||possibleFormats.includes(BarcodeFormat$1.EAN_8)||possibleFormats.includes(BarcodeFormat$1.UPC_E)){_this.readers.push(new MultiFormatUPCEANReader(hints));}if(possibleFormats.includes(BarcodeFormat$1.CODE_39)){_this.readers.push(new Code39Reader(useCode39CheckDigit));}// if (possibleFormats.includes(BarcodeFormat.CODE_93)) {
//    this.readers.push(new Code93Reader());
// }
if(possibleFormats.includes(BarcodeFormat$1.CODE_128)){_this.readers.push(new Code128Reader());}if(possibleFormats.includes(BarcodeFormat$1.ITF)){_this.readers.push(new ITFReader());}// if (possibleFormats.includes(BarcodeFormat.CODABAR)) {
//    this.readers.push(new CodaBarReader());
// }
if(possibleFormats.includes(BarcodeFormat$1.RSS_14)){_this.readers.push(new RSS14Reader());}if(possibleFormats.includes(BarcodeFormat$1.RSS_EXPANDED)){_this.readers.push(new RSSExpandedReader());}}if(_this.readers.length===0){_this.readers.push(new MultiFormatUPCEANReader(hints));_this.readers.push(new Code39Reader());// this.readers.push(new CodaBarReader());
// this.readers.push(new Code93Reader());
_this.readers.push(new MultiFormatUPCEANReader(hints));_this.readers.push(new Code128Reader());_this.readers.push(new ITFReader());_this.readers.push(new RSS14Reader());_this.readers.push(new RSSExpandedReader());}return _this;}// @Override
MultiFormatOneDReader.prototype.decodeRow=function(rowNumber,row,hints){for(var i=0;i<this.readers.length;i++){try{return this.readers[i].decodeRow(rowNumber,row,hints);}catch(re){// continue
}}throw new NotFoundException();};// @Override
MultiFormatOneDReader.prototype.reset=function(){this.readers.forEach(function(reader){return reader.reset();});};return MultiFormatOneDReader;}(OneDReader);var __extends$N=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * @deprecated Moving to @zxing/browser
   *
   * Barcode reader reader to use from browser.
   */var BrowserBarcodeReader=/** @class */function(_super){__extends$N(BrowserBarcodeReader,_super);/**
       * Creates an instance of BrowserBarcodeReader.
       * @param {number} [timeBetweenScansMillis=500] the time delay between subsequent decode tries
       * @param {Map<DecodeHintType, any>} hints
       */function BrowserBarcodeReader(timeBetweenScansMillis,hints){if(timeBetweenScansMillis===void 0){timeBetweenScansMillis=500;}return _super.call(this,new MultiFormatOneDReader(hints),timeBetweenScansMillis,hints)||this;}return BrowserBarcodeReader;}(BrowserCodeReader);var __values$g=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};/*
   * Copyright 2007 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /**
   * <p>Encapsulates a set of error-correction blocks in one symbol version. Most versions will
   * use blocks of differing sizes within one version, so, this encapsulates the parameters for
   * each set of blocks. It also holds the number of error-correction codewords per block since it
   * will be the same across all blocks within one version.</p>
   */var ECBlocks=/** @class */function(){function ECBlocks(ecCodewords,ecBlocks1,ecBlocks2){this.ecCodewords=ecCodewords;this.ecBlocks=[ecBlocks1];ecBlocks2&&this.ecBlocks.push(ecBlocks2);}ECBlocks.prototype.getECCodewords=function(){return this.ecCodewords;};ECBlocks.prototype.getECBlocks=function(){return this.ecBlocks;};return ECBlocks;}();/**
   * <p>Encapsulates the parameters for one error-correction block in one symbol version.
   * This includes the number of data codewords, and the number of times a block with these
   * parameters is used consecutively in the Data Matrix code version's format.</p>
   */var ECB=/** @class */function(){function ECB(count,dataCodewords){this.count=count;this.dataCodewords=dataCodewords;}ECB.prototype.getCount=function(){return this.count;};ECB.prototype.getDataCodewords=function(){return this.dataCodewords;};return ECB;}();/**
   * The Version object encapsulates attributes about a particular
   * size Data Matrix Code.
   *
   * @author bbrown@google.com (Brian Brown)
   */var Version=/** @class */function(){function Version(versionNumber,symbolSizeRows,symbolSizeColumns,dataRegionSizeRows,dataRegionSizeColumns,ecBlocks){var e_1,_a;this.versionNumber=versionNumber;this.symbolSizeRows=symbolSizeRows;this.symbolSizeColumns=symbolSizeColumns;this.dataRegionSizeRows=dataRegionSizeRows;this.dataRegionSizeColumns=dataRegionSizeColumns;this.ecBlocks=ecBlocks;// Calculate the total number of codewords
var total=0;var ecCodewords=ecBlocks.getECCodewords();var ecbArray=ecBlocks.getECBlocks();try{for(var ecbArray_1=__values$g(ecbArray),ecbArray_1_1=ecbArray_1.next();!ecbArray_1_1.done;ecbArray_1_1=ecbArray_1.next()){var ecBlock=ecbArray_1_1.value;total+=ecBlock.getCount()*(ecBlock.getDataCodewords()+ecCodewords);}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(ecbArray_1_1&&!ecbArray_1_1.done&&(_a=ecbArray_1.return))_a.call(ecbArray_1);}finally{if(e_1)throw e_1.error;}}this.totalCodewords=total;}Version.prototype.getVersionNumber=function(){return this.versionNumber;};Version.prototype.getSymbolSizeRows=function(){return this.symbolSizeRows;};Version.prototype.getSymbolSizeColumns=function(){return this.symbolSizeColumns;};Version.prototype.getDataRegionSizeRows=function(){return this.dataRegionSizeRows;};Version.prototype.getDataRegionSizeColumns=function(){return this.dataRegionSizeColumns;};Version.prototype.getTotalCodewords=function(){return this.totalCodewords;};Version.prototype.getECBlocks=function(){return this.ecBlocks;};/**
       * <p>Deduces version information from Data Matrix dimensions.</p>
       *
       * @param numRows Number of rows in modules
       * @param numColumns Number of columns in modules
       * @return Version for a Data Matrix Code of those dimensions
       * @throws FormatException if dimensions do correspond to a valid Data Matrix size
       */Version.getVersionForDimensions=function(numRows,numColumns){var e_2,_a;if((numRows&0x01)!==0||(numColumns&0x01)!==0){throw new FormatException();}try{for(var _b=__values$g(Version.VERSIONS),_c=_b.next();!_c.done;_c=_b.next()){var version=_c.value;if(version.symbolSizeRows===numRows&&version.symbolSizeColumns===numColumns){return version;}}}catch(e_2_1){e_2={error:e_2_1};}finally{try{if(_c&&!_c.done&&(_a=_b.return))_a.call(_b);}finally{if(e_2)throw e_2.error;}}throw new FormatException();};//  @Override
Version.prototype.toString=function(){return''+this.versionNumber;};/**
       * See ISO 16022:2006 5.5.1 Table 7
       */Version.buildVersions=function(){return[new Version(1,10,10,8,8,new ECBlocks(5,new ECB(1,3))),new Version(2,12,12,10,10,new ECBlocks(7,new ECB(1,5))),new Version(3,14,14,12,12,new ECBlocks(10,new ECB(1,8))),new Version(4,16,16,14,14,new ECBlocks(12,new ECB(1,12))),new Version(5,18,18,16,16,new ECBlocks(14,new ECB(1,18))),new Version(6,20,20,18,18,new ECBlocks(18,new ECB(1,22))),new Version(7,22,22,20,20,new ECBlocks(20,new ECB(1,30))),new Version(8,24,24,22,22,new ECBlocks(24,new ECB(1,36))),new Version(9,26,26,24,24,new ECBlocks(28,new ECB(1,44))),new Version(10,32,32,14,14,new ECBlocks(36,new ECB(1,62))),new Version(11,36,36,16,16,new ECBlocks(42,new ECB(1,86))),new Version(12,40,40,18,18,new ECBlocks(48,new ECB(1,114))),new Version(13,44,44,20,20,new ECBlocks(56,new ECB(1,144))),new Version(14,48,48,22,22,new ECBlocks(68,new ECB(1,174))),new Version(15,52,52,24,24,new ECBlocks(42,new ECB(2,102))),new Version(16,64,64,14,14,new ECBlocks(56,new ECB(2,140))),new Version(17,72,72,16,16,new ECBlocks(36,new ECB(4,92))),new Version(18,80,80,18,18,new ECBlocks(48,new ECB(4,114))),new Version(19,88,88,20,20,new ECBlocks(56,new ECB(4,144))),new Version(20,96,96,22,22,new ECBlocks(68,new ECB(4,174))),new Version(21,104,104,24,24,new ECBlocks(56,new ECB(6,136))),new Version(22,120,120,18,18,new ECBlocks(68,new ECB(6,175))),new Version(23,132,132,20,20,new ECBlocks(62,new ECB(8,163))),new Version(24,144,144,22,22,new ECBlocks(62,new ECB(8,156),new ECB(2,155))),new Version(25,8,18,6,16,new ECBlocks(7,new ECB(1,5))),new Version(26,8,32,6,14,new ECBlocks(11,new ECB(1,10))),new Version(27,12,26,10,24,new ECBlocks(14,new ECB(1,16))),new Version(28,12,36,10,16,new ECBlocks(18,new ECB(1,22))),new Version(29,16,36,14,16,new ECBlocks(24,new ECB(1,32))),new Version(30,16,48,14,22,new ECBlocks(28,new ECB(1,49)))];};Version.VERSIONS=Version.buildVersions();return Version;}();/*
   * Copyright 2007 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /**
   * @author bbrown@google.com (Brian Brown)
   */var BitMatrixParser=/** @class */function(){/**
       * @param bitMatrix {@link BitMatrix} to parse
       * @throws FormatException if dimension is < 8 or > 144 or not 0 mod 2
       */function BitMatrixParser(bitMatrix){var dimension=bitMatrix.getHeight();if(dimension<8||dimension>144||(dimension&0x01)!==0){throw new FormatException();}this.version=BitMatrixParser.readVersion(bitMatrix);this.mappingBitMatrix=this.extractDataRegion(bitMatrix);this.readMappingMatrix=new BitMatrix(this.mappingBitMatrix.getWidth(),this.mappingBitMatrix.getHeight());}BitMatrixParser.prototype.getVersion=function(){return this.version;};/**
       * <p>Creates the version object based on the dimension of the original bit matrix from
       * the datamatrix code.</p>
       *
       * <p>See ISO 16022:2006 Table 7 - ECC 200 symbol attributes</p>
       *
       * @param bitMatrix Original {@link BitMatrix} including alignment patterns
       * @return {@link Version} encapsulating the Data Matrix Code's "version"
       * @throws FormatException if the dimensions of the mapping matrix are not valid
       * Data Matrix dimensions.
       */BitMatrixParser.readVersion=function(bitMatrix){var numRows=bitMatrix.getHeight();var numColumns=bitMatrix.getWidth();return Version.getVersionForDimensions(numRows,numColumns);};/**
       * <p>Reads the bits in the {@link BitMatrix} representing the mapping matrix (No alignment patterns)
       * in the correct order in order to reconstitute the codewords bytes contained within the
       * Data Matrix Code.</p>
       *
       * @return bytes encoded within the Data Matrix Code
       * @throws FormatException if the exact number of bytes expected is not read
       */BitMatrixParser.prototype.readCodewords=function(){var result=new Int8Array(this.version.getTotalCodewords());var resultOffset=0;var row=4;var column=0;var numRows=this.mappingBitMatrix.getHeight();var numColumns=this.mappingBitMatrix.getWidth();var corner1Read=false;var corner2Read=false;var corner3Read=false;var corner4Read=false;// Read all of the codewords
do{// Check the four corner cases
if(row===numRows&&column===0&&!corner1Read){result[resultOffset++]=this.readCorner1(numRows,numColumns)&0xff;row-=2;column+=2;corner1Read=true;}else if(row===numRows-2&&column===0&&(numColumns&0x03)!==0&&!corner2Read){result[resultOffset++]=this.readCorner2(numRows,numColumns)&0xff;row-=2;column+=2;corner2Read=true;}else if(row===numRows+4&&column===2&&(numColumns&0x07)===0&&!corner3Read){result[resultOffset++]=this.readCorner3(numRows,numColumns)&0xff;row-=2;column+=2;corner3Read=true;}else if(row===numRows-2&&column===0&&(numColumns&0x07)===4&&!corner4Read){result[resultOffset++]=this.readCorner4(numRows,numColumns)&0xff;row-=2;column+=2;corner4Read=true;}else{// Sweep upward diagonally to the right
do{if(row<numRows&&column>=0&&!this.readMappingMatrix.get(column,row)){result[resultOffset++]=this.readUtah(row,column,numRows,numColumns)&0xff;}row-=2;column+=2;}while(row>=0&&column<numColumns);row+=1;column+=3;// Sweep downward diagonally to the left
do{if(row>=0&&column<numColumns&&!this.readMappingMatrix.get(column,row)){result[resultOffset++]=this.readUtah(row,column,numRows,numColumns)&0xff;}row+=2;column-=2;}while(row<numRows&&column>=0);row+=3;column+=1;}}while(row<numRows||column<numColumns);if(resultOffset!==this.version.getTotalCodewords()){throw new FormatException();}return result;};/**
       * <p>Reads a bit of the mapping matrix accounting for boundary wrapping.</p>
       *
       * @param row Row to read in the mapping matrix
       * @param column Column to read in the mapping matrix
       * @param numRows Number of rows in the mapping matrix
       * @param numColumns Number of columns in the mapping matrix
       * @return value of the given bit in the mapping matrix
       */BitMatrixParser.prototype.readModule=function(row,column,numRows,numColumns){// Adjust the row and column indices based on boundary wrapping
if(row<0){row+=numRows;column+=4-(numRows+4&0x07);}if(column<0){column+=numColumns;row+=4-(numColumns+4&0x07);}this.readMappingMatrix.set(column,row);return this.mappingBitMatrix.get(column,row);};/**
       * <p>Reads the 8 bits of the standard Utah-shaped pattern.</p>
       *
       * <p>See ISO 16022:2006, 5.8.1 Figure 6</p>
       *
       * @param row Current row in the mapping matrix, anchored at the 8th bit (LSB) of the pattern
       * @param column Current column in the mapping matrix, anchored at the 8th bit (LSB) of the pattern
       * @param numRows Number of rows in the mapping matrix
       * @param numColumns Number of columns in the mapping matrix
       * @return byte from the utah shape
       */BitMatrixParser.prototype.readUtah=function(row,column,numRows,numColumns){var currentByte=0;if(this.readModule(row-2,column-2,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(row-2,column-1,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(row-1,column-2,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(row-1,column-1,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(row-1,column,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(row,column-2,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(row,column-1,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(row,column,numRows,numColumns)){currentByte|=1;}return currentByte;};/**
       * <p>Reads the 8 bits of the special corner condition 1.</p>
       *
       * <p>See ISO 16022:2006, Figure F.3</p>
       *
       * @param numRows Number of rows in the mapping matrix
       * @param numColumns Number of columns in the mapping matrix
       * @return byte from the Corner condition 1
       */BitMatrixParser.prototype.readCorner1=function(numRows,numColumns){var currentByte=0;if(this.readModule(numRows-1,0,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(numRows-1,1,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(numRows-1,2,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(0,numColumns-2,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(0,numColumns-1,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(1,numColumns-1,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(2,numColumns-1,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(3,numColumns-1,numRows,numColumns)){currentByte|=1;}return currentByte;};/**
       * <p>Reads the 8 bits of the special corner condition 2.</p>
       *
       * <p>See ISO 16022:2006, Figure F.4</p>
       *
       * @param numRows Number of rows in the mapping matrix
       * @param numColumns Number of columns in the mapping matrix
       * @return byte from the Corner condition 2
       */BitMatrixParser.prototype.readCorner2=function(numRows,numColumns){var currentByte=0;if(this.readModule(numRows-3,0,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(numRows-2,0,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(numRows-1,0,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(0,numColumns-4,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(0,numColumns-3,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(0,numColumns-2,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(0,numColumns-1,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(1,numColumns-1,numRows,numColumns)){currentByte|=1;}return currentByte;};/**
       * <p>Reads the 8 bits of the special corner condition 3.</p>
       *
       * <p>See ISO 16022:2006, Figure F.5</p>
       *
       * @param numRows Number of rows in the mapping matrix
       * @param numColumns Number of columns in the mapping matrix
       * @return byte from the Corner condition 3
       */BitMatrixParser.prototype.readCorner3=function(numRows,numColumns){var currentByte=0;if(this.readModule(numRows-1,0,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(numRows-1,numColumns-1,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(0,numColumns-3,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(0,numColumns-2,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(0,numColumns-1,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(1,numColumns-3,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(1,numColumns-2,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(1,numColumns-1,numRows,numColumns)){currentByte|=1;}return currentByte;};/**
       * <p>Reads the 8 bits of the special corner condition 4.</p>
       *
       * <p>See ISO 16022:2006, Figure F.6</p>
       *
       * @param numRows Number of rows in the mapping matrix
       * @param numColumns Number of columns in the mapping matrix
       * @return byte from the Corner condition 4
       */BitMatrixParser.prototype.readCorner4=function(numRows,numColumns){var currentByte=0;if(this.readModule(numRows-3,0,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(numRows-2,0,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(numRows-1,0,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(0,numColumns-2,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(0,numColumns-1,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(1,numColumns-1,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(2,numColumns-1,numRows,numColumns)){currentByte|=1;}currentByte<<=1;if(this.readModule(3,numColumns-1,numRows,numColumns)){currentByte|=1;}return currentByte;};/**
       * <p>Extracts the data region from a {@link BitMatrix} that contains
       * alignment patterns.</p>
       *
       * @param bitMatrix Original {@link BitMatrix} with alignment patterns
       * @return BitMatrix that has the alignment patterns removed
       */BitMatrixParser.prototype.extractDataRegion=function(bitMatrix){var symbolSizeRows=this.version.getSymbolSizeRows();var symbolSizeColumns=this.version.getSymbolSizeColumns();if(bitMatrix.getHeight()!==symbolSizeRows){throw new IllegalArgumentException('Dimension of bitMatrix must match the version size');}var dataRegionSizeRows=this.version.getDataRegionSizeRows();var dataRegionSizeColumns=this.version.getDataRegionSizeColumns();var numDataRegionsRow=symbolSizeRows/dataRegionSizeRows|0;var numDataRegionsColumn=symbolSizeColumns/dataRegionSizeColumns|0;var sizeDataRegionRow=numDataRegionsRow*dataRegionSizeRows;var sizeDataRegionColumn=numDataRegionsColumn*dataRegionSizeColumns;var bitMatrixWithoutAlignment=new BitMatrix(sizeDataRegionColumn,sizeDataRegionRow);for(var dataRegionRow=0;dataRegionRow<numDataRegionsRow;++dataRegionRow){var dataRegionRowOffset=dataRegionRow*dataRegionSizeRows;for(var dataRegionColumn=0;dataRegionColumn<numDataRegionsColumn;++dataRegionColumn){var dataRegionColumnOffset=dataRegionColumn*dataRegionSizeColumns;for(var i=0;i<dataRegionSizeRows;++i){var readRowOffset=dataRegionRow*(dataRegionSizeRows+2)+1+i;var writeRowOffset=dataRegionRowOffset+i;for(var j=0;j<dataRegionSizeColumns;++j){var readColumnOffset=dataRegionColumn*(dataRegionSizeColumns+2)+1+j;if(bitMatrix.get(readColumnOffset,readRowOffset)){var writeColumnOffset=dataRegionColumnOffset+j;bitMatrixWithoutAlignment.set(writeColumnOffset,writeRowOffset);}}}}}return bitMatrixWithoutAlignment;};return BitMatrixParser;}();var __values$h=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};/*
   * Copyright 2008 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /**
   * <p>Encapsulates a block of data within a Data Matrix Code. Data Matrix Codes may split their data into
   * multiple blocks, each of which is a unit of data and error-correction codewords. Each
   * is represented by an instance of this class.</p>
   *
   * @author bbrown@google.com (Brian Brown)
   */var DataBlock=/** @class */function(){function DataBlock(numDataCodewords,codewords){this.numDataCodewords=numDataCodewords;this.codewords=codewords;}/**
       * <p>When Data Matrix Codes use multiple data blocks, they actually interleave the bytes of each of them.
       * That is, the first byte of data block 1 to n is written, then the second bytes, and so on. This
       * method will separate the data into original blocks.</p>
       *
       * @param rawCodewords bytes as read directly from the Data Matrix Code
       * @param version version of the Data Matrix Code
       * @return DataBlocks containing original bytes, "de-interleaved" from representation in the
       *         Data Matrix Code
       */DataBlock.getDataBlocks=function(rawCodewords,version){var e_1,_a,e_2,_b;// Figure out the number and size of data blocks used by this version
var ecBlocks=version.getECBlocks();// First count the total number of data blocks
var totalBlocks=0;var ecBlockArray=ecBlocks.getECBlocks();try{for(var ecBlockArray_1=__values$h(ecBlockArray),ecBlockArray_1_1=ecBlockArray_1.next();!ecBlockArray_1_1.done;ecBlockArray_1_1=ecBlockArray_1.next()){var ecBlock=ecBlockArray_1_1.value;totalBlocks+=ecBlock.getCount();}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(ecBlockArray_1_1&&!ecBlockArray_1_1.done&&(_a=ecBlockArray_1.return))_a.call(ecBlockArray_1);}finally{if(e_1)throw e_1.error;}}// Now establish DataBlocks of the appropriate size and number of data codewords
var result=new Array(totalBlocks);var numResultBlocks=0;try{for(var ecBlockArray_2=__values$h(ecBlockArray),ecBlockArray_2_1=ecBlockArray_2.next();!ecBlockArray_2_1.done;ecBlockArray_2_1=ecBlockArray_2.next()){var ecBlock=ecBlockArray_2_1.value;for(var i=0;i<ecBlock.getCount();i++){var numDataCodewords=ecBlock.getDataCodewords();var numBlockCodewords=ecBlocks.getECCodewords()+numDataCodewords;result[numResultBlocks++]=new DataBlock(numDataCodewords,new Uint8Array(numBlockCodewords));}}}catch(e_2_1){e_2={error:e_2_1};}finally{try{if(ecBlockArray_2_1&&!ecBlockArray_2_1.done&&(_b=ecBlockArray_2.return))_b.call(ecBlockArray_2);}finally{if(e_2)throw e_2.error;}}// All blocks have the same amount of data, except that the last n
// (where n may be 0) have 1 less byte. Figure out where these start.
// TODO(bbrown): There is only one case where there is a difference for Data Matrix for size 144
var longerBlocksTotalCodewords=result[0].codewords.length;// int shorterBlocksTotalCodewords = longerBlocksTotalCodewords - 1;
var longerBlocksNumDataCodewords=longerBlocksTotalCodewords-ecBlocks.getECCodewords();var shorterBlocksNumDataCodewords=longerBlocksNumDataCodewords-1;// The last elements of result may be 1 element shorter for 144 matrix
// first fill out as many elements as all of them have minus 1
var rawCodewordsOffset=0;for(var i=0;i<shorterBlocksNumDataCodewords;i++){for(var j=0;j<numResultBlocks;j++){result[j].codewords[i]=rawCodewords[rawCodewordsOffset++];}}// Fill out the last data block in the longer ones
var specialVersion=version.getVersionNumber()===24;var numLongerBlocks=specialVersion?8:numResultBlocks;for(var j=0;j<numLongerBlocks;j++){result[j].codewords[longerBlocksNumDataCodewords-1]=rawCodewords[rawCodewordsOffset++];}// Now add in error correction blocks
var max=result[0].codewords.length;for(var i=longerBlocksNumDataCodewords;i<max;i++){for(var j=0;j<numResultBlocks;j++){var jOffset=specialVersion?(j+8)%numResultBlocks:j;var iOffset=specialVersion&&jOffset>7?i-1:i;result[jOffset].codewords[iOffset]=rawCodewords[rawCodewordsOffset++];}}if(rawCodewordsOffset!==rawCodewords.length){throw new IllegalArgumentException();}return result;};DataBlock.prototype.getNumDataCodewords=function(){return this.numDataCodewords;};DataBlock.prototype.getCodewords=function(){return this.codewords;};return DataBlock;}();/*
   * Copyright 2007 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /**
   * <p>This provides an easy abstraction to read bits at a time from a sequence of bytes, where the
   * number of bits read is not often a multiple of 8.</p>
   *
   * <p>This class is thread-safe but not reentrant -- unless the caller modifies the bytes array
   * it passed in, in which case all bets are off.</p>
   *
   * @author Sean Owen
   */var BitSource=/** @class */function(){/**
       * @param bytes bytes from which this will read bits. Bits will be read from the first byte first.
       * Bits are read within a byte from most-significant to least-significant bit.
       */function BitSource(bytes){this.bytes=bytes;this.byteOffset=0;this.bitOffset=0;}/**
       * @return index of next bit in current byte which would be read by the next call to {@link #readBits(int)}.
       */BitSource.prototype.getBitOffset=function(){return this.bitOffset;};/**
       * @return index of next byte in input byte array which would be read by the next call to {@link #readBits(int)}.
       */BitSource.prototype.getByteOffset=function(){return this.byteOffset;};/**
       * @param numBits number of bits to read
       * @return int representing the bits read. The bits will appear as the least-significant
       *         bits of the int
       * @throws IllegalArgumentException if numBits isn't in [1,32] or more than is available
       */BitSource.prototype.readBits=function(numBits/*int*/){if(numBits<1||numBits>32||numBits>this.available()){throw new IllegalArgumentException(''+numBits);}var result=0;var bitOffset=this.bitOffset;var byteOffset=this.byteOffset;var bytes=this.bytes;// First, read remainder from current byte
if(bitOffset>0){var bitsLeft=8-bitOffset;var toRead=numBits<bitsLeft?numBits:bitsLeft;var bitsToNotRead=bitsLeft-toRead;var mask=0xFF>>8-toRead<<bitsToNotRead;result=(bytes[byteOffset]&mask)>>bitsToNotRead;numBits-=toRead;bitOffset+=toRead;if(bitOffset===8){bitOffset=0;byteOffset++;}}// Next read whole bytes
if(numBits>0){while(numBits>=8){result=result<<8|bytes[byteOffset]&0xFF;byteOffset++;numBits-=8;}// Finally read a partial byte
if(numBits>0){var bitsToNotRead=8-numBits;var mask=0xFF>>bitsToNotRead<<bitsToNotRead;result=result<<numBits|(bytes[byteOffset]&mask)>>bitsToNotRead;bitOffset+=numBits;}}this.bitOffset=bitOffset;this.byteOffset=byteOffset;return result;};/**
       * @return number of bits that can be read successfully
       */BitSource.prototype.available=function(){return 8*(this.bytes.length-this.byteOffset)-this.bitOffset;};return BitSource;}();/*
   * Copyright 2008 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var Mode;(function(Mode){Mode[Mode["PAD_ENCODE"]=0]="PAD_ENCODE";Mode[Mode["ASCII_ENCODE"]=1]="ASCII_ENCODE";Mode[Mode["C40_ENCODE"]=2]="C40_ENCODE";Mode[Mode["TEXT_ENCODE"]=3]="TEXT_ENCODE";Mode[Mode["ANSIX12_ENCODE"]=4]="ANSIX12_ENCODE";Mode[Mode["EDIFACT_ENCODE"]=5]="EDIFACT_ENCODE";Mode[Mode["BASE256_ENCODE"]=6]="BASE256_ENCODE";})(Mode||(Mode={}));/**
   * <p>Data Matrix Codes can encode text as bits in one of several modes, and can use multiple modes
   * in one Data Matrix Code. This class decodes the bits back into text.</p>
   *
   * <p>See ISO 16022:2006, 5.2.1 - 5.2.9.2</p>
   *
   * @author bbrown@google.com (Brian Brown)
   * @author Sean Owen
   */var DecodedBitStreamParser=/** @class */function(){function DecodedBitStreamParser(){}DecodedBitStreamParser.decode=function(bytes){var bits=new BitSource(bytes);var result=new StringBuilder();var resultTrailer=new StringBuilder();var byteSegments=new Array();var mode=Mode.ASCII_ENCODE;do{if(mode===Mode.ASCII_ENCODE){mode=this.decodeAsciiSegment(bits,result,resultTrailer);}else{switch(mode){case Mode.C40_ENCODE:this.decodeC40Segment(bits,result);break;case Mode.TEXT_ENCODE:this.decodeTextSegment(bits,result);break;case Mode.ANSIX12_ENCODE:this.decodeAnsiX12Segment(bits,result);break;case Mode.EDIFACT_ENCODE:this.decodeEdifactSegment(bits,result);break;case Mode.BASE256_ENCODE:this.decodeBase256Segment(bits,result,byteSegments);break;default:throw new FormatException();}mode=Mode.ASCII_ENCODE;}}while(mode!==Mode.PAD_ENCODE&&bits.available()>0);if(resultTrailer.length()>0){result.append(resultTrailer.toString());}return new DecoderResult(bytes,result.toString(),byteSegments.length===0?null:byteSegments,null);};/**
       * See ISO 16022:2006, 5.2.3 and Annex C, Table C.2
       */DecodedBitStreamParser.decodeAsciiSegment=function(bits,result,resultTrailer){var upperShift=false;do{var oneByte=bits.readBits(8);if(oneByte===0){throw new FormatException();}else if(oneByte<=128){// ASCII data (ASCII value + 1)
if(upperShift){oneByte+=128;// upperShift = false;
}result.append(String.fromCharCode(oneByte-1));return Mode.ASCII_ENCODE;}else if(oneByte===129){// Pad
return Mode.PAD_ENCODE;}else if(oneByte<=229){// 2-digit data 00-99 (Numeric Value + 130)
var value=oneByte-130;if(value<10){// pad with '0' for single digit values
result.append('0');}result.append(''+value);}else{switch(oneByte){case 230:// Latch to C40 encodation
return Mode.C40_ENCODE;case 231:// Latch to Base 256 encodation
return Mode.BASE256_ENCODE;case 232:// FNC1
result.append(String.fromCharCode(29));// translate as ASCII 29
break;case 233:// Structured Append
case 234:// Reader Programming
// Ignore these symbols for now
// throw ReaderException.getInstance();
break;case 235:// Upper Shift (shift to Extended ASCII)
upperShift=true;break;case 236:// 05 Macro
result.append('[)>\u001E05\u001D');resultTrailer.insert(0,'\u001E\u0004');break;case 237:// 06 Macro
result.append('[)>\u001E06\u001D');resultTrailer.insert(0,'\u001E\u0004');break;case 238:// Latch to ANSI X12 encodation
return Mode.ANSIX12_ENCODE;case 239:// Latch to Text encodation
return Mode.TEXT_ENCODE;case 240:// Latch to EDIFACT encodation
return Mode.EDIFACT_ENCODE;case 241:// ECI Character
// TODO(bbrown): I think we need to support ECI
// throw ReaderException.getInstance();
// Ignore this symbol for now
break;default:// Not to be used in ASCII encodation
// but work around encoders that end with 254, latch back to ASCII
if(oneByte!==254||bits.available()!==0){throw new FormatException();}break;}}}while(bits.available()>0);return Mode.ASCII_ENCODE;};/**
       * See ISO 16022:2006, 5.2.5 and Annex C, Table C.1
       */DecodedBitStreamParser.decodeC40Segment=function(bits,result){// Three C40 values are encoded in a 16-bit value as
// (1600 * C1) + (40 * C2) + C3 + 1
// TODO(bbrown): The Upper Shift with C40 doesn't work in the 4 value scenario all the time
var upperShift=false;var cValues=[];var shift=0;do{// If there is only one byte left then it will be encoded as ASCII
if(bits.available()===8){return;}var firstByte=bits.readBits(8);if(firstByte===254){// Unlatch codeword
return;}this.parseTwoBytes(firstByte,bits.readBits(8),cValues);for(var i=0;i<3;i++){var cValue=cValues[i];switch(shift){case 0:if(cValue<3){shift=cValue+1;}else if(cValue<this.C40_BASIC_SET_CHARS.length){var c40char=this.C40_BASIC_SET_CHARS[cValue];if(upperShift){result.append(String.fromCharCode(c40char.charCodeAt(0)+128));upperShift=false;}else{result.append(c40char);}}else{throw new FormatException();}break;case 1:if(upperShift){result.append(String.fromCharCode(cValue+128));upperShift=false;}else{result.append(String.fromCharCode(cValue));}shift=0;break;case 2:if(cValue<this.C40_SHIFT2_SET_CHARS.length){var c40char=this.C40_SHIFT2_SET_CHARS[cValue];if(upperShift){result.append(String.fromCharCode(c40char.charCodeAt(0)+128));upperShift=false;}else{result.append(c40char);}}else{switch(cValue){case 27:// FNC1
result.append(String.fromCharCode(29));// translate as ASCII 29
break;case 30:// Upper Shift
upperShift=true;break;default:throw new FormatException();}}shift=0;break;case 3:if(upperShift){result.append(String.fromCharCode(cValue+224));upperShift=false;}else{result.append(String.fromCharCode(cValue+96));}shift=0;break;default:throw new FormatException();}}}while(bits.available()>0);};/**
       * See ISO 16022:2006, 5.2.6 and Annex C, Table C.2
       */DecodedBitStreamParser.decodeTextSegment=function(bits,result){// Three Text values are encoded in a 16-bit value as
// (1600 * C1) + (40 * C2) + C3 + 1
// TODO(bbrown): The Upper Shift with Text doesn't work in the 4 value scenario all the time
var upperShift=false;var cValues=[];var shift=0;do{// If there is only one byte left then it will be encoded as ASCII
if(bits.available()===8){return;}var firstByte=bits.readBits(8);if(firstByte===254){// Unlatch codeword
return;}this.parseTwoBytes(firstByte,bits.readBits(8),cValues);for(var i=0;i<3;i++){var cValue=cValues[i];switch(shift){case 0:if(cValue<3){shift=cValue+1;}else if(cValue<this.TEXT_BASIC_SET_CHARS.length){var textChar=this.TEXT_BASIC_SET_CHARS[cValue];if(upperShift){result.append(String.fromCharCode(textChar.charCodeAt(0)+128));upperShift=false;}else{result.append(textChar);}}else{throw new FormatException();}break;case 1:if(upperShift){result.append(String.fromCharCode(cValue+128));upperShift=false;}else{result.append(String.fromCharCode(cValue));}shift=0;break;case 2:// Shift 2 for Text is the same encoding as C40
if(cValue<this.TEXT_SHIFT2_SET_CHARS.length){var textChar=this.TEXT_SHIFT2_SET_CHARS[cValue];if(upperShift){result.append(String.fromCharCode(textChar.charCodeAt(0)+128));upperShift=false;}else{result.append(textChar);}}else{switch(cValue){case 27:// FNC1
result.append(String.fromCharCode(29));// translate as ASCII 29
break;case 30:// Upper Shift
upperShift=true;break;default:throw new FormatException();}}shift=0;break;case 3:if(cValue<this.TEXT_SHIFT3_SET_CHARS.length){var textChar=this.TEXT_SHIFT3_SET_CHARS[cValue];if(upperShift){result.append(String.fromCharCode(textChar.charCodeAt(0)+128));upperShift=false;}else{result.append(textChar);}shift=0;}else{throw new FormatException();}break;default:throw new FormatException();}}}while(bits.available()>0);};/**
       * See ISO 16022:2006, 5.2.7
       */DecodedBitStreamParser.decodeAnsiX12Segment=function(bits,result){// Three ANSI X12 values are encoded in a 16-bit value as
// (1600 * C1) + (40 * C2) + C3 + 1
var cValues=[];do{// If there is only one byte left then it will be encoded as ASCII
if(bits.available()===8){return;}var firstByte=bits.readBits(8);if(firstByte===254){// Unlatch codeword
return;}this.parseTwoBytes(firstByte,bits.readBits(8),cValues);for(var i=0;i<3;i++){var cValue=cValues[i];switch(cValue){case 0:// X12 segment terminator <CR>
result.append('\r');break;case 1:// X12 segment separator *
result.append('*');break;case 2:// X12 sub-element separator >
result.append('>');break;case 3:// space
result.append(' ');break;default:if(cValue<14){// 0 - 9
result.append(String.fromCharCode(cValue+44));}else if(cValue<40){// A - Z
result.append(String.fromCharCode(cValue+51));}else{throw new FormatException();}break;}}}while(bits.available()>0);};DecodedBitStreamParser.parseTwoBytes=function(firstByte,secondByte,result){var fullBitValue=(firstByte<<8)+secondByte-1;var temp=Math.floor(fullBitValue/1600);result[0]=temp;fullBitValue-=temp*1600;temp=Math.floor(fullBitValue/40);result[1]=temp;result[2]=fullBitValue-temp*40;};/**
       * See ISO 16022:2006, 5.2.8 and Annex C Table C.3
       */DecodedBitStreamParser.decodeEdifactSegment=function(bits,result){do{// If there is only two or less bytes left then it will be encoded as ASCII
if(bits.available()<=16){return;}for(var i=0;i<4;i++){var edifactValue=bits.readBits(6);// Check for the unlatch character
if(edifactValue===0x1F){// 011111
// Read rest of byte, which should be 0, and stop
var bitsLeft=8-bits.getBitOffset();if(bitsLeft!==8){bits.readBits(bitsLeft);}return;}if((edifactValue&0x20)===0){// no 1 in the leading (6th) bit
edifactValue|=0x40;// Add a leading 01 to the 6 bit binary value
}result.append(String.fromCharCode(edifactValue));}}while(bits.available()>0);};/**
       * See ISO 16022:2006, 5.2.9 and Annex B, B.2
       */DecodedBitStreamParser.decodeBase256Segment=function(bits,result,byteSegments){// Figure out how long the Base 256 Segment is.
var codewordPosition=1+bits.getByteOffset();// position is 1-indexed
var d1=this.unrandomize255State(bits.readBits(8),codewordPosition++);var count;if(d1===0){// Read the remainder of the symbol
count=bits.available()/8|0;}else if(d1<250){count=d1;}else{count=250*(d1-249)+this.unrandomize255State(bits.readBits(8),codewordPosition++);}// We're seeing NegativeArraySizeException errors from users.
if(count<0){throw new FormatException();}var bytes=new Uint8Array(count);for(var i=0;i<count;i++){// Have seen this particular error in the wild, such as at
// http://www.bcgen.com/demo/IDAutomationStreamingDataMatrix.aspx?MODE=3&D=Fred&PFMT=3&PT=F&X=0.3&O=0&LM=0.2
if(bits.available()<8){throw new FormatException();}bytes[i]=this.unrandomize255State(bits.readBits(8),codewordPosition++);}byteSegments.push(bytes);try{result.append(StringEncoding.decode(bytes,StringUtils.ISO88591));}catch(uee){throw new IllegalStateException('Platform does not support required encoding: '+uee.message);}};/**
       * See ISO 16022:2006, Annex B, B.2
       */DecodedBitStreamParser.unrandomize255State=function(randomizedBase256Codeword,base256CodewordPosition){var pseudoRandomNumber=149*base256CodewordPosition%255+1;var tempVariable=randomizedBase256Codeword-pseudoRandomNumber;return tempVariable>=0?tempVariable:tempVariable+256;};/**
       * See ISO 16022:2006, Annex C Table C.1
       * The C40 Basic Character Set (*'s used for placeholders for the shift values)
       */DecodedBitStreamParser.C40_BASIC_SET_CHARS=['*','*','*',' ','0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];DecodedBitStreamParser.C40_SHIFT2_SET_CHARS=['!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_'];/**
       * See ISO 16022:2006, Annex C Table C.2
       * The Text Basic Character Set (*'s used for placeholders for the shift values)
       */DecodedBitStreamParser.TEXT_BASIC_SET_CHARS=['*','*','*',' ','0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];// Shift 2 for Text is the same encoding as C40
DecodedBitStreamParser.TEXT_SHIFT2_SET_CHARS=DecodedBitStreamParser.C40_SHIFT2_SET_CHARS;DecodedBitStreamParser.TEXT_SHIFT3_SET_CHARS=['`','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','{','|','}','~',String.fromCharCode(127)];return DecodedBitStreamParser;}();var __values$i=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};/*
   * Copyright 2007 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /**
   * <p>The main class which implements Data Matrix Code decoding -- as opposed to locating and extracting
   * the Data Matrix Code from an image.</p>
   *
   * @author bbrown@google.com (Brian Brown)
   */var Decoder$1=/** @class */function(){function Decoder(){this.rsDecoder=new ReedSolomonDecoder(GenericGF.DATA_MATRIX_FIELD_256);}/**
       * <p>Decodes a Data Matrix Code represented as a {@link BitMatrix}. A 1 or "true" is taken
       * to mean a black module.</p>
       *
       * @param bits booleans representing white/black Data Matrix Code modules
       * @return text and bytes encoded within the Data Matrix Code
       * @throws FormatException if the Data Matrix Code cannot be decoded
       * @throws ChecksumException if error correction fails
       */Decoder.prototype.decode=function(bits){var e_1,_a;// Construct a parser and read version, error-correction level
var parser=new BitMatrixParser(bits);var version=parser.getVersion();// Read codewords
var codewords=parser.readCodewords();// Separate into data blocks
var dataBlocks=DataBlock.getDataBlocks(codewords,version);// Count total number of data bytes
var totalBytes=0;try{for(var dataBlocks_1=__values$i(dataBlocks),dataBlocks_1_1=dataBlocks_1.next();!dataBlocks_1_1.done;dataBlocks_1_1=dataBlocks_1.next()){var db=dataBlocks_1_1.value;totalBytes+=db.getNumDataCodewords();}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(dataBlocks_1_1&&!dataBlocks_1_1.done&&(_a=dataBlocks_1.return))_a.call(dataBlocks_1);}finally{if(e_1)throw e_1.error;}}var resultBytes=new Uint8Array(totalBytes);var dataBlocksCount=dataBlocks.length;// Error-correct and copy data blocks together into a stream of bytes
for(var j=0;j<dataBlocksCount;j++){var dataBlock=dataBlocks[j];var codewordBytes=dataBlock.getCodewords();var numDataCodewords=dataBlock.getNumDataCodewords();this.correctErrors(codewordBytes,numDataCodewords);for(var i=0;i<numDataCodewords;i++){// De-interlace data blocks.
resultBytes[i*dataBlocksCount+j]=codewordBytes[i];}}// Decode the contents of that stream of bytes
return DecodedBitStreamParser.decode(resultBytes);};/**
       * <p>Given data and error-correction codewords received, possibly corrupted by errors, attempts to
       * correct the errors in-place using Reed-Solomon error correction.</p>
       *
       * @param codewordBytes data and error correction codewords
       * @param numDataCodewords number of codewords that are data bytes
       * @throws ChecksumException if error correction fails
       */Decoder.prototype.correctErrors=function(codewordBytes,numDataCodewords){// const numCodewords = codewordBytes.length;
// First read into an array of ints
var codewordsInts=new Int32Array(codewordBytes);// for (let i = 0; i < numCodewords; i++) {
//   codewordsInts[i] = codewordBytes[i] & 0xFF;
// }
try{this.rsDecoder.decode(codewordsInts,codewordBytes.length-numDataCodewords);}catch(ignored/* ReedSolomonException */){throw new ChecksumException();}// Copy back into array of bytes -- only need to worry about the bytes that were data
// We don't care about errors in the error-correction codewords
for(var i=0;i<numDataCodewords;i++){codewordBytes[i]=codewordsInts[i];}};return Decoder;}();/*
   * Copyright 2008 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /**
   * <p>Encapsulates logic that can detect a Data Matrix Code in an image, even if the Data Matrix Code
   * is rotated or skewed, or partially obscured.</p>
   *
   * @author Sean Owen
   */var Detector$1=/** @class */function(){function Detector(image){this.image=image;this.rectangleDetector=new WhiteRectangleDetector(this.image);}/**
       * <p>Detects a Data Matrix Code in an image.</p>
       *
       * @return {@link DetectorResult} encapsulating results of detecting a Data Matrix Code
       * @throws NotFoundException if no Data Matrix Code can be found
       */Detector.prototype.detect=function(){var cornerPoints=this.rectangleDetector.detect();var points=this.detectSolid1(cornerPoints);points=this.detectSolid2(points);points[3]=this.correctTopRight(points);if(!points[3]){throw new NotFoundException();}points=this.shiftToModuleCenter(points);var topLeft=points[0];var bottomLeft=points[1];var bottomRight=points[2];var topRight=points[3];var dimensionTop=this.transitionsBetween(topLeft,topRight)+1;var dimensionRight=this.transitionsBetween(bottomRight,topRight)+1;if((dimensionTop&0x01)===1){dimensionTop+=1;}if((dimensionRight&0x01)===1){dimensionRight+=1;}if(4*dimensionTop<7*dimensionRight&&4*dimensionRight<7*dimensionTop){// The matrix is square
dimensionTop=dimensionRight=Math.max(dimensionTop,dimensionRight);}var bits=Detector.sampleGrid(this.image,topLeft,bottomLeft,bottomRight,topRight,dimensionTop,dimensionRight);return new DetectorResult(bits,[topLeft,bottomLeft,bottomRight,topRight]);};Detector.shiftPoint=function(point,to,div){var x=(to.getX()-point.getX())/(div+1);var y=(to.getY()-point.getY())/(div+1);return new ResultPoint(point.getX()+x,point.getY()+y);};Detector.moveAway=function(point,fromX,fromY){var x=point.getX();var y=point.getY();if(x<fromX){x-=1;}else{x+=1;}if(y<fromY){y-=1;}else{y+=1;}return new ResultPoint(x,y);};/**
       * Detect a solid side which has minimum transition.
       */Detector.prototype.detectSolid1=function(cornerPoints){// 0  2
// 1  3
var pointA=cornerPoints[0];var pointB=cornerPoints[1];var pointC=cornerPoints[3];var pointD=cornerPoints[2];var trAB=this.transitionsBetween(pointA,pointB);var trBC=this.transitionsBetween(pointB,pointC);var trCD=this.transitionsBetween(pointC,pointD);var trDA=this.transitionsBetween(pointD,pointA);// 0..3
// :  :
// 1--2
var min=trAB;var points=[pointD,pointA,pointB,pointC];if(min>trBC){min=trBC;points[0]=pointA;points[1]=pointB;points[2]=pointC;points[3]=pointD;}if(min>trCD){min=trCD;points[0]=pointB;points[1]=pointC;points[2]=pointD;points[3]=pointA;}if(min>trDA){points[0]=pointC;points[1]=pointD;points[2]=pointA;points[3]=pointB;}return points;};/**
       * Detect a second solid side next to first solid side.
       */Detector.prototype.detectSolid2=function(points){// A..D
// :  :
// B--C
var pointA=points[0];var pointB=points[1];var pointC=points[2];var pointD=points[3];// Transition detection on the edge is not stable.
// To safely detect, shift the points to the module center.
var tr=this.transitionsBetween(pointA,pointD);var pointBs=Detector.shiftPoint(pointB,pointC,(tr+1)*4);var pointCs=Detector.shiftPoint(pointC,pointB,(tr+1)*4);var trBA=this.transitionsBetween(pointBs,pointA);var trCD=this.transitionsBetween(pointCs,pointD);// 0..3
// |  :
// 1--2
if(trBA<trCD){// solid sides: A-B-C
points[0]=pointA;points[1]=pointB;points[2]=pointC;points[3]=pointD;}else{// solid sides: B-C-D
points[0]=pointB;points[1]=pointC;points[2]=pointD;points[3]=pointA;}return points;};/**
       * Calculates the corner position of the white top right module.
       */Detector.prototype.correctTopRight=function(points){// A..D
// |  :
// B--C
var pointA=points[0];var pointB=points[1];var pointC=points[2];var pointD=points[3];// shift points for safe transition detection.
var trTop=this.transitionsBetween(pointA,pointD);var trRight=this.transitionsBetween(pointB,pointD);var pointAs=Detector.shiftPoint(pointA,pointB,(trRight+1)*4);var pointCs=Detector.shiftPoint(pointC,pointB,(trTop+1)*4);trTop=this.transitionsBetween(pointAs,pointD);trRight=this.transitionsBetween(pointCs,pointD);var candidate1=new ResultPoint(pointD.getX()+(pointC.getX()-pointB.getX())/(trTop+1),pointD.getY()+(pointC.getY()-pointB.getY())/(trTop+1));var candidate2=new ResultPoint(pointD.getX()+(pointA.getX()-pointB.getX())/(trRight+1),pointD.getY()+(pointA.getY()-pointB.getY())/(trRight+1));if(!this.isValid(candidate1)){if(this.isValid(candidate2)){return candidate2;}return null;}if(!this.isValid(candidate2)){return candidate1;}var sumc1=this.transitionsBetween(pointAs,candidate1)+this.transitionsBetween(pointCs,candidate1);var sumc2=this.transitionsBetween(pointAs,candidate2)+this.transitionsBetween(pointCs,candidate2);if(sumc1>sumc2){return candidate1;}else{return candidate2;}};/**
       * Shift the edge points to the module center.
       */Detector.prototype.shiftToModuleCenter=function(points){// A..D
// |  :
// B--C
var pointA=points[0];var pointB=points[1];var pointC=points[2];var pointD=points[3];// calculate pseudo dimensions
var dimH=this.transitionsBetween(pointA,pointD)+1;var dimV=this.transitionsBetween(pointC,pointD)+1;// shift points for safe dimension detection
var pointAs=Detector.shiftPoint(pointA,pointB,dimV*4);var pointCs=Detector.shiftPoint(pointC,pointB,dimH*4);//  calculate more precise dimensions
dimH=this.transitionsBetween(pointAs,pointD)+1;dimV=this.transitionsBetween(pointCs,pointD)+1;if((dimH&0x01)===1){dimH+=1;}if((dimV&0x01)===1){dimV+=1;}// WhiteRectangleDetector returns points inside of the rectangle.
// I want points on the edges.
var centerX=(pointA.getX()+pointB.getX()+pointC.getX()+pointD.getX())/4;var centerY=(pointA.getY()+pointB.getY()+pointC.getY()+pointD.getY())/4;pointA=Detector.moveAway(pointA,centerX,centerY);pointB=Detector.moveAway(pointB,centerX,centerY);pointC=Detector.moveAway(pointC,centerX,centerY);pointD=Detector.moveAway(pointD,centerX,centerY);var pointBs;var pointDs;// shift points to the center of each modules
pointAs=Detector.shiftPoint(pointA,pointB,dimV*4);pointAs=Detector.shiftPoint(pointAs,pointD,dimH*4);pointBs=Detector.shiftPoint(pointB,pointA,dimV*4);pointBs=Detector.shiftPoint(pointBs,pointC,dimH*4);pointCs=Detector.shiftPoint(pointC,pointD,dimV*4);pointCs=Detector.shiftPoint(pointCs,pointB,dimH*4);pointDs=Detector.shiftPoint(pointD,pointC,dimV*4);pointDs=Detector.shiftPoint(pointDs,pointA,dimH*4);return[pointAs,pointBs,pointCs,pointDs];};Detector.prototype.isValid=function(p){return p.getX()>=0&&p.getX()<this.image.getWidth()&&p.getY()>0&&p.getY()<this.image.getHeight();};Detector.sampleGrid=function(image,topLeft,bottomLeft,bottomRight,topRight,dimensionX,dimensionY){var sampler=GridSamplerInstance.getInstance();return sampler.sampleGrid(image,dimensionX,dimensionY,0.5,0.5,dimensionX-0.5,0.5,dimensionX-0.5,dimensionY-0.5,0.5,dimensionY-0.5,topLeft.getX(),topLeft.getY(),topRight.getX(),topRight.getY(),bottomRight.getX(),bottomRight.getY(),bottomLeft.getX(),bottomLeft.getY());};/**
       * Counts the number of black/white transitions between two points, using something like Bresenham's algorithm.
       */Detector.prototype.transitionsBetween=function(from,to){// See QR Code Detector, sizeOfBlackWhiteBlackRun()
var fromX=Math.trunc(from.getX());var fromY=Math.trunc(from.getY());var toX=Math.trunc(to.getX());var toY=Math.trunc(to.getY());var steep=Math.abs(toY-fromY)>Math.abs(toX-fromX);if(steep){var temp=fromX;fromX=fromY;fromY=temp;temp=toX;toX=toY;toY=temp;}var dx=Math.abs(toX-fromX);var dy=Math.abs(toY-fromY);var error=-dx/2;var ystep=fromY<toY?1:-1;var xstep=fromX<toX?1:-1;var transitions=0;var inBlack=this.image.get(steep?fromY:fromX,steep?fromX:fromY);for(var x=fromX,y=fromY;x!==toX;x+=xstep){var isBlack=this.image.get(steep?y:x,steep?x:y);if(isBlack!==inBlack){transitions++;inBlack=isBlack;}error+=dy;if(error>0){if(y===toY){break;}y+=ystep;error-=dx;}}return transitions;};return Detector;}();/*
   * Copyright 2007 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /**
   * This implementation can detect and decode Data Matrix codes in an image.
   *
   * @author bbrown@google.com (Brian Brown)
   */var DataMatrixReader=/** @class */function(){function DataMatrixReader(){this.decoder=new Decoder$1();}/**
       * Locates and decodes a Data Matrix code in an image.
       *
       * @return a String representing the content encoded by the Data Matrix code
       * @throws NotFoundException if a Data Matrix code cannot be found
       * @throws FormatException if a Data Matrix code cannot be decoded
       * @throws ChecksumException if error correction fails
       */ // @Override
// public Result decode(BinaryBitmap image) throws NotFoundException, ChecksumException, FormatException {
//   return decode(image, null);
// }
// @Override
DataMatrixReader.prototype.decode=function(image,hints){if(hints===void 0){hints=null;}var decoderResult;var points;if(hints!=null&&hints.has(DecodeHintType$1.PURE_BARCODE)){var bits=DataMatrixReader.extractPureBits(image.getBlackMatrix());decoderResult=this.decoder.decode(bits);points=DataMatrixReader.NO_POINTS;}else{var detectorResult=new Detector$1(image.getBlackMatrix()).detect();decoderResult=this.decoder.decode(detectorResult.getBits());points=detectorResult.getPoints();}var rawBytes=decoderResult.getRawBytes();var result=new Result(decoderResult.getText(),rawBytes,8*rawBytes.length,points,BarcodeFormat$1.DATA_MATRIX,System.currentTimeMillis());var byteSegments=decoderResult.getByteSegments();if(byteSegments!=null){result.putMetadata(ResultMetadataType$1.BYTE_SEGMENTS,byteSegments);}var ecLevel=decoderResult.getECLevel();if(ecLevel!=null){result.putMetadata(ResultMetadataType$1.ERROR_CORRECTION_LEVEL,ecLevel);}return result;};// @Override
DataMatrixReader.prototype.reset=function(){// do nothing
};/**
       * This method detects a code in a "pure" image -- that is, pure monochrome image
       * which contains only an unrotated, unskewed, image of a code, with some white border
       * around it. This is a specialized method that works exceptionally fast in this special
       * case.
       *
       * @see com.google.zxing.qrcode.QRCodeReader#extractPureBits(BitMatrix)
       */DataMatrixReader.extractPureBits=function(image){var leftTopBlack=image.getTopLeftOnBit();var rightBottomBlack=image.getBottomRightOnBit();if(leftTopBlack==null||rightBottomBlack==null){throw new NotFoundException();}var moduleSize=this.moduleSize(leftTopBlack,image);var top=leftTopBlack[1];var bottom=rightBottomBlack[1];var left=leftTopBlack[0];var right=rightBottomBlack[0];var matrixWidth=(right-left+1)/moduleSize;var matrixHeight=(bottom-top+1)/moduleSize;if(matrixWidth<=0||matrixHeight<=0){throw new NotFoundException();}// Push in the "border" by half the module width so that we start
// sampling in the middle of the module. Just in case the image is a
// little off, this will help recover.
var nudge=moduleSize/2;top+=nudge;left+=nudge;// Now just read off the bits
var bits=new BitMatrix(matrixWidth,matrixHeight);for(var y=0;y<matrixHeight;y++){var iOffset=top+y*moduleSize;for(var x=0;x<matrixWidth;x++){if(image.get(left+x*moduleSize,iOffset)){bits.set(x,y);}}}return bits;};DataMatrixReader.moduleSize=function(leftTopBlack,image){var width=image.getWidth();var x=leftTopBlack[0];var y=leftTopBlack[1];while(x<width&&image.get(x,y)){x++;}if(x===width){throw new NotFoundException();}var moduleSize=x-leftTopBlack[0];if(moduleSize===0){throw new NotFoundException();}return moduleSize;};DataMatrixReader.NO_POINTS=[];return DataMatrixReader;}();var __extends$O=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * @deprecated Moving to @zxing/browser
   *
   * QR Code reader to use from browser.
   */var BrowserDatamatrixCodeReader=/** @class */function(_super){__extends$O(BrowserDatamatrixCodeReader,_super);/**
       * Creates an instance of BrowserQRCodeReader.
       * @param {number} [timeBetweenScansMillis=500] the time delay between subsequent decode tries
       */function BrowserDatamatrixCodeReader(timeBetweenScansMillis){if(timeBetweenScansMillis===void 0){timeBetweenScansMillis=500;}return _super.call(this,new DataMatrixReader(),timeBetweenScansMillis)||this;}return BrowserDatamatrixCodeReader;}(BrowserCodeReader);/*
   * Copyright 2007 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var ErrorCorrectionLevelValues;(function(ErrorCorrectionLevelValues){ErrorCorrectionLevelValues[ErrorCorrectionLevelValues["L"]=0]="L";ErrorCorrectionLevelValues[ErrorCorrectionLevelValues["M"]=1]="M";ErrorCorrectionLevelValues[ErrorCorrectionLevelValues["Q"]=2]="Q";ErrorCorrectionLevelValues[ErrorCorrectionLevelValues["H"]=3]="H";})(ErrorCorrectionLevelValues||(ErrorCorrectionLevelValues={}));/**
   * <p>See ISO 18004:2006, 6.5.1. This enum encapsulates the four error correction levels
   * defined by the QR code standard.</p>
   *
   * @author Sean Owen
   */var ErrorCorrectionLevel=/** @class */function(){function ErrorCorrectionLevel(value,stringValue,bits/*int*/){this.value=value;this.stringValue=stringValue;this.bits=bits;ErrorCorrectionLevel.FOR_BITS.set(bits,this);ErrorCorrectionLevel.FOR_VALUE.set(value,this);}ErrorCorrectionLevel.prototype.getValue=function(){return this.value;};ErrorCorrectionLevel.prototype.getBits=function(){return this.bits;};ErrorCorrectionLevel.fromString=function(s){switch(s){case'L':return ErrorCorrectionLevel.L;case'M':return ErrorCorrectionLevel.M;case'Q':return ErrorCorrectionLevel.Q;case'H':return ErrorCorrectionLevel.H;default:throw new ArgumentException(s+'not available');}};ErrorCorrectionLevel.prototype.toString=function(){return this.stringValue;};ErrorCorrectionLevel.prototype.equals=function(o){if(!(o instanceof ErrorCorrectionLevel)){return false;}var other=o;return this.value===other.value;};/**
       * @param bits int containing the two bits encoding a QR Code's error correction level
       * @return ErrorCorrectionLevel representing the encoded error correction level
       */ErrorCorrectionLevel.forBits=function(bits/*int*/){if(bits<0||bits>=ErrorCorrectionLevel.FOR_BITS.size){throw new IllegalArgumentException();}return ErrorCorrectionLevel.FOR_BITS.get(bits);};ErrorCorrectionLevel.FOR_BITS=new Map();ErrorCorrectionLevel.FOR_VALUE=new Map();/** L = ~7% correction */ErrorCorrectionLevel.L=new ErrorCorrectionLevel(ErrorCorrectionLevelValues.L,'L',0x01);/** M = ~15% correction */ErrorCorrectionLevel.M=new ErrorCorrectionLevel(ErrorCorrectionLevelValues.M,'M',0x00);/** Q = ~25% correction */ErrorCorrectionLevel.Q=new ErrorCorrectionLevel(ErrorCorrectionLevelValues.Q,'Q',0x03);/** H = ~30% correction */ErrorCorrectionLevel.H=new ErrorCorrectionLevel(ErrorCorrectionLevelValues.H,'H',0x02);return ErrorCorrectionLevel;}();/*
   * Copyright 2007 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __values$j=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};/**
   * <p>Encapsulates a QR Code's format information, including the data mask used and
   * error correction level.</p>
   *
   * @author Sean Owen
   * @see DataMask
   * @see ErrorCorrectionLevel
   */var FormatInformation=/** @class */function(){function FormatInformation(formatInfo/*int*/){// Bits 3,4
this.errorCorrectionLevel=ErrorCorrectionLevel.forBits(formatInfo>>3&0x03);// Bottom 3 bits
this.dataMask=/*(byte) */formatInfo&0x07;}FormatInformation.numBitsDiffering=function(a/*int*/,b/*int*/){return Integer.bitCount(a^b);};/**
       * @param maskedFormatInfo1 format info indicator, with mask still applied
       * @param maskedFormatInfo2 second copy of same info; both are checked at the same time
       *  to establish best match
       * @return information about the format it specifies, or {@code null}
       *  if doesn't seem to match any known pattern
       */FormatInformation.decodeFormatInformation=function(maskedFormatInfo1/*int*/,maskedFormatInfo2/*int*/){var formatInfo=FormatInformation.doDecodeFormatInformation(maskedFormatInfo1,maskedFormatInfo2);if(formatInfo!==null){return formatInfo;}// Should return null, but, some QR codes apparently
// do not mask this info. Try again by actually masking the pattern
// first
return FormatInformation.doDecodeFormatInformation(maskedFormatInfo1^FormatInformation.FORMAT_INFO_MASK_QR,maskedFormatInfo2^FormatInformation.FORMAT_INFO_MASK_QR);};FormatInformation.doDecodeFormatInformation=function(maskedFormatInfo1/*int*/,maskedFormatInfo2/*int*/){var e_1,_a;// Find the int in FORMAT_INFO_DECODE_LOOKUP with fewest bits differing
var bestDifference=Number.MAX_SAFE_INTEGER;var bestFormatInfo=0;try{for(var _b=__values$j(FormatInformation.FORMAT_INFO_DECODE_LOOKUP),_c=_b.next();!_c.done;_c=_b.next()){var decodeInfo=_c.value;var targetInfo=decodeInfo[0];if(targetInfo===maskedFormatInfo1||targetInfo===maskedFormatInfo2){// Found an exact match
return new FormatInformation(decodeInfo[1]);}var bitsDifference=FormatInformation.numBitsDiffering(maskedFormatInfo1,targetInfo);if(bitsDifference<bestDifference){bestFormatInfo=decodeInfo[1];bestDifference=bitsDifference;}if(maskedFormatInfo1!==maskedFormatInfo2){// also try the other option
bitsDifference=FormatInformation.numBitsDiffering(maskedFormatInfo2,targetInfo);if(bitsDifference<bestDifference){bestFormatInfo=decodeInfo[1];bestDifference=bitsDifference;}}}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(_c&&!_c.done&&(_a=_b.return))_a.call(_b);}finally{if(e_1)throw e_1.error;}}// Hamming distance of the 32 masked codes is 7, by construction, so <= 3 bits
// differing means we found a match
if(bestDifference<=3){return new FormatInformation(bestFormatInfo);}return null;};FormatInformation.prototype.getErrorCorrectionLevel=function(){return this.errorCorrectionLevel;};FormatInformation.prototype.getDataMask=function(){return this.dataMask;};/*@Override*/FormatInformation.prototype.hashCode=function(){return this.errorCorrectionLevel.getBits()<<3|this.dataMask;};/*@Override*/FormatInformation.prototype.equals=function(o){if(!(o instanceof FormatInformation)){return false;}var other=o;return this.errorCorrectionLevel===other.errorCorrectionLevel&&this.dataMask===other.dataMask;};FormatInformation.FORMAT_INFO_MASK_QR=0x5412;/**
       * See ISO 18004:2006, Annex C, Table C.1
       */FormatInformation.FORMAT_INFO_DECODE_LOOKUP=[Int32Array.from([0x5412,0x00]),Int32Array.from([0x5125,0x01]),Int32Array.from([0x5E7C,0x02]),Int32Array.from([0x5B4B,0x03]),Int32Array.from([0x45F9,0x04]),Int32Array.from([0x40CE,0x05]),Int32Array.from([0x4F97,0x06]),Int32Array.from([0x4AA0,0x07]),Int32Array.from([0x77C4,0x08]),Int32Array.from([0x72F3,0x09]),Int32Array.from([0x7DAA,0x0A]),Int32Array.from([0x789D,0x0B]),Int32Array.from([0x662F,0x0C]),Int32Array.from([0x6318,0x0D]),Int32Array.from([0x6C41,0x0E]),Int32Array.from([0x6976,0x0F]),Int32Array.from([0x1689,0x10]),Int32Array.from([0x13BE,0x11]),Int32Array.from([0x1CE7,0x12]),Int32Array.from([0x19D0,0x13]),Int32Array.from([0x0762,0x14]),Int32Array.from([0x0255,0x15]),Int32Array.from([0x0D0C,0x16]),Int32Array.from([0x083B,0x17]),Int32Array.from([0x355F,0x18]),Int32Array.from([0x3068,0x19]),Int32Array.from([0x3F31,0x1A]),Int32Array.from([0x3A06,0x1B]),Int32Array.from([0x24B4,0x1C]),Int32Array.from([0x2183,0x1D]),Int32Array.from([0x2EDA,0x1E]),Int32Array.from([0x2BED,0x1F])];return FormatInformation;}();var __values$k=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};/**
   * <p>Encapsulates a set of error-correction blocks in one symbol version. Most versions will
   * use blocks of differing sizes within one version, so, this encapsulates the parameters for
   * each set of blocks. It also holds the number of error-correction codewords per block since it
   * will be the same across all blocks within one version.</p>
   */var ECBlocks$1=/** @class */function(){function ECBlocks(ecCodewordsPerBlock/*int*/){var ecBlocks=[];for(var _i=1;_i<arguments.length;_i++){ecBlocks[_i-1]=arguments[_i];}this.ecCodewordsPerBlock=ecCodewordsPerBlock;this.ecBlocks=ecBlocks;}ECBlocks.prototype.getECCodewordsPerBlock=function(){return this.ecCodewordsPerBlock;};ECBlocks.prototype.getNumBlocks=function(){var e_1,_a;var total=0;var ecBlocks=this.ecBlocks;try{for(var ecBlocks_1=__values$k(ecBlocks),ecBlocks_1_1=ecBlocks_1.next();!ecBlocks_1_1.done;ecBlocks_1_1=ecBlocks_1.next()){var ecBlock=ecBlocks_1_1.value;total+=ecBlock.getCount();}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(ecBlocks_1_1&&!ecBlocks_1_1.done&&(_a=ecBlocks_1.return))_a.call(ecBlocks_1);}finally{if(e_1)throw e_1.error;}}return total;};ECBlocks.prototype.getTotalECCodewords=function(){return this.ecCodewordsPerBlock*this.getNumBlocks();};ECBlocks.prototype.getECBlocks=function(){return this.ecBlocks;};return ECBlocks;}();/**
   * <p>Encapsulates the parameters for one error-correction block in one symbol version.
   * This includes the number of data codewords, and the number of times a block with these
   * parameters is used consecutively in the QR code version's format.</p>
   */var ECB$1=/** @class */function(){function ECB(count/*int*/,dataCodewords/*int*/){this.count=count;this.dataCodewords=dataCodewords;}ECB.prototype.getCount=function(){return this.count;};ECB.prototype.getDataCodewords=function(){return this.dataCodewords;};return ECB;}();/*
   * Copyright 2007 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __values$l=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};/**
   * See ISO 18004:2006 Annex D
   *
   * @author Sean Owen
   */var Version$1=/** @class */function(){function Version(versionNumber/*int*/,alignmentPatternCenters){var e_1,_a;var ecBlocks=[];for(var _i=2;_i<arguments.length;_i++){ecBlocks[_i-2]=arguments[_i];}this.versionNumber=versionNumber;this.alignmentPatternCenters=alignmentPatternCenters;this.ecBlocks=ecBlocks;var total=0;var ecCodewords=ecBlocks[0].getECCodewordsPerBlock();var ecbArray=ecBlocks[0].getECBlocks();try{for(var ecbArray_1=__values$l(ecbArray),ecbArray_1_1=ecbArray_1.next();!ecbArray_1_1.done;ecbArray_1_1=ecbArray_1.next()){var ecBlock=ecbArray_1_1.value;total+=ecBlock.getCount()*(ecBlock.getDataCodewords()+ecCodewords);}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(ecbArray_1_1&&!ecbArray_1_1.done&&(_a=ecbArray_1.return))_a.call(ecbArray_1);}finally{if(e_1)throw e_1.error;}}this.totalCodewords=total;}Version.prototype.getVersionNumber=function(){return this.versionNumber;};Version.prototype.getAlignmentPatternCenters=function(){return this.alignmentPatternCenters;};Version.prototype.getTotalCodewords=function(){return this.totalCodewords;};Version.prototype.getDimensionForVersion=function(){return 17+4*this.versionNumber;};Version.prototype.getECBlocksForLevel=function(ecLevel){return this.ecBlocks[ecLevel.getValue()];// TYPESCRIPTPORT: original was using ordinal, and using the order of levels as defined in ErrorCorrectionLevel enum (LMQH)
// I will use the direct value from ErrorCorrectionLevelValues enum which in typescript goes to a number
};/**
       * <p>Deduces version information purely from QR Code dimensions.</p>
       *
       * @param dimension dimension in modules
       * @return Version for a QR Code of that dimension
       * @throws FormatException if dimension is not 1 mod 4
       */Version.getProvisionalVersionForDimension=function(dimension/*int*/){if(dimension%4!==1){throw new FormatException();}try{return this.getVersionForNumber((dimension-17)/4);}catch(ignored/*: IllegalArgumentException*/){throw new FormatException();}};Version.getVersionForNumber=function(versionNumber/*int*/){if(versionNumber<1||versionNumber>40){throw new IllegalArgumentException();}return Version.VERSIONS[versionNumber-1];};Version.decodeVersionInformation=function(versionBits/*int*/){var bestDifference=Number.MAX_SAFE_INTEGER;var bestVersion=0;for(var i=0;i<Version.VERSION_DECODE_INFO.length;i++){var targetVersion=Version.VERSION_DECODE_INFO[i];// Do the version info bits match exactly? done.
if(targetVersion===versionBits){return Version.getVersionForNumber(i+7);}// Otherwise see if this is the closest to a real version info bit string
// we have seen so far
var bitsDifference=FormatInformation.numBitsDiffering(versionBits,targetVersion);if(bitsDifference<bestDifference){bestVersion=i+7;bestDifference=bitsDifference;}}// We can tolerate up to 3 bits of error since no two version info codewords will
// differ in less than 8 bits.
if(bestDifference<=3){return Version.getVersionForNumber(bestVersion);}// If we didn't find a close enough match, fail
return null;};/**
       * See ISO 18004:2006 Annex E
       */Version.prototype.buildFunctionPattern=function(){var dimension=this.getDimensionForVersion();var bitMatrix=new BitMatrix(dimension);// Top left finder pattern + separator + format
bitMatrix.setRegion(0,0,9,9);// Top right finder pattern + separator + format
bitMatrix.setRegion(dimension-8,0,8,9);// Bottom left finder pattern + separator + format
bitMatrix.setRegion(0,dimension-8,9,8);// Alignment patterns
var max=this.alignmentPatternCenters.length;for(var x=0;x<max;x++){var i=this.alignmentPatternCenters[x]-2;for(var y=0;y<max;y++){if(x===0&&(y===0||y===max-1)||x===max-1&&y===0){// No alignment patterns near the three finder patterns
continue;}bitMatrix.setRegion(this.alignmentPatternCenters[y]-2,i,5,5);}}// Vertical timing pattern
bitMatrix.setRegion(6,9,1,dimension-17);// Horizontal timing pattern
bitMatrix.setRegion(9,6,dimension-17,1);if(this.versionNumber>6){// Version info, top right
bitMatrix.setRegion(dimension-11,0,3,6);// Version info, bottom left
bitMatrix.setRegion(0,dimension-11,6,3);}return bitMatrix;};/*@Override*/Version.prototype.toString=function(){return''+this.versionNumber;};/**
         * See ISO 18004:2006 Annex D.
         * Element i represents the raw version bits that specify version i + 7
         */Version.VERSION_DECODE_INFO=Int32Array.from([0x07C94,0x085BC,0x09A99,0x0A4D3,0x0BBF6,0x0C762,0x0D847,0x0E60D,0x0F928,0x10B78,0x1145D,0x12A17,0x13532,0x149A6,0x15683,0x168C9,0x177EC,0x18EC4,0x191E1,0x1AFAB,0x1B08E,0x1CC1A,0x1D33F,0x1ED75,0x1F250,0x209D5,0x216F0,0x228BA,0x2379F,0x24B0B,0x2542E,0x26A64,0x27541,0x28C69]);/**
         * See ISO 18004:2006 6.5.1 Table 9
         */Version.VERSIONS=[new Version(1,new Int32Array(0),new ECBlocks$1(7,new ECB$1(1,19)),new ECBlocks$1(10,new ECB$1(1,16)),new ECBlocks$1(13,new ECB$1(1,13)),new ECBlocks$1(17,new ECB$1(1,9))),new Version(2,Int32Array.from([6,18]),new ECBlocks$1(10,new ECB$1(1,34)),new ECBlocks$1(16,new ECB$1(1,28)),new ECBlocks$1(22,new ECB$1(1,22)),new ECBlocks$1(28,new ECB$1(1,16))),new Version(3,Int32Array.from([6,22]),new ECBlocks$1(15,new ECB$1(1,55)),new ECBlocks$1(26,new ECB$1(1,44)),new ECBlocks$1(18,new ECB$1(2,17)),new ECBlocks$1(22,new ECB$1(2,13))),new Version(4,Int32Array.from([6,26]),new ECBlocks$1(20,new ECB$1(1,80)),new ECBlocks$1(18,new ECB$1(2,32)),new ECBlocks$1(26,new ECB$1(2,24)),new ECBlocks$1(16,new ECB$1(4,9))),new Version(5,Int32Array.from([6,30]),new ECBlocks$1(26,new ECB$1(1,108)),new ECBlocks$1(24,new ECB$1(2,43)),new ECBlocks$1(18,new ECB$1(2,15),new ECB$1(2,16)),new ECBlocks$1(22,new ECB$1(2,11),new ECB$1(2,12))),new Version(6,Int32Array.from([6,34]),new ECBlocks$1(18,new ECB$1(2,68)),new ECBlocks$1(16,new ECB$1(4,27)),new ECBlocks$1(24,new ECB$1(4,19)),new ECBlocks$1(28,new ECB$1(4,15))),new Version(7,Int32Array.from([6,22,38]),new ECBlocks$1(20,new ECB$1(2,78)),new ECBlocks$1(18,new ECB$1(4,31)),new ECBlocks$1(18,new ECB$1(2,14),new ECB$1(4,15)),new ECBlocks$1(26,new ECB$1(4,13),new ECB$1(1,14))),new Version(8,Int32Array.from([6,24,42]),new ECBlocks$1(24,new ECB$1(2,97)),new ECBlocks$1(22,new ECB$1(2,38),new ECB$1(2,39)),new ECBlocks$1(22,new ECB$1(4,18),new ECB$1(2,19)),new ECBlocks$1(26,new ECB$1(4,14),new ECB$1(2,15))),new Version(9,Int32Array.from([6,26,46]),new ECBlocks$1(30,new ECB$1(2,116)),new ECBlocks$1(22,new ECB$1(3,36),new ECB$1(2,37)),new ECBlocks$1(20,new ECB$1(4,16),new ECB$1(4,17)),new ECBlocks$1(24,new ECB$1(4,12),new ECB$1(4,13))),new Version(10,Int32Array.from([6,28,50]),new ECBlocks$1(18,new ECB$1(2,68),new ECB$1(2,69)),new ECBlocks$1(26,new ECB$1(4,43),new ECB$1(1,44)),new ECBlocks$1(24,new ECB$1(6,19),new ECB$1(2,20)),new ECBlocks$1(28,new ECB$1(6,15),new ECB$1(2,16))),new Version(11,Int32Array.from([6,30,54]),new ECBlocks$1(20,new ECB$1(4,81)),new ECBlocks$1(30,new ECB$1(1,50),new ECB$1(4,51)),new ECBlocks$1(28,new ECB$1(4,22),new ECB$1(4,23)),new ECBlocks$1(24,new ECB$1(3,12),new ECB$1(8,13))),new Version(12,Int32Array.from([6,32,58]),new ECBlocks$1(24,new ECB$1(2,92),new ECB$1(2,93)),new ECBlocks$1(22,new ECB$1(6,36),new ECB$1(2,37)),new ECBlocks$1(26,new ECB$1(4,20),new ECB$1(6,21)),new ECBlocks$1(28,new ECB$1(7,14),new ECB$1(4,15))),new Version(13,Int32Array.from([6,34,62]),new ECBlocks$1(26,new ECB$1(4,107)),new ECBlocks$1(22,new ECB$1(8,37),new ECB$1(1,38)),new ECBlocks$1(24,new ECB$1(8,20),new ECB$1(4,21)),new ECBlocks$1(22,new ECB$1(12,11),new ECB$1(4,12))),new Version(14,Int32Array.from([6,26,46,66]),new ECBlocks$1(30,new ECB$1(3,115),new ECB$1(1,116)),new ECBlocks$1(24,new ECB$1(4,40),new ECB$1(5,41)),new ECBlocks$1(20,new ECB$1(11,16),new ECB$1(5,17)),new ECBlocks$1(24,new ECB$1(11,12),new ECB$1(5,13))),new Version(15,Int32Array.from([6,26,48,70]),new ECBlocks$1(22,new ECB$1(5,87),new ECB$1(1,88)),new ECBlocks$1(24,new ECB$1(5,41),new ECB$1(5,42)),new ECBlocks$1(30,new ECB$1(5,24),new ECB$1(7,25)),new ECBlocks$1(24,new ECB$1(11,12),new ECB$1(7,13))),new Version(16,Int32Array.from([6,26,50,74]),new ECBlocks$1(24,new ECB$1(5,98),new ECB$1(1,99)),new ECBlocks$1(28,new ECB$1(7,45),new ECB$1(3,46)),new ECBlocks$1(24,new ECB$1(15,19),new ECB$1(2,20)),new ECBlocks$1(30,new ECB$1(3,15),new ECB$1(13,16))),new Version(17,Int32Array.from([6,30,54,78]),new ECBlocks$1(28,new ECB$1(1,107),new ECB$1(5,108)),new ECBlocks$1(28,new ECB$1(10,46),new ECB$1(1,47)),new ECBlocks$1(28,new ECB$1(1,22),new ECB$1(15,23)),new ECBlocks$1(28,new ECB$1(2,14),new ECB$1(17,15))),new Version(18,Int32Array.from([6,30,56,82]),new ECBlocks$1(30,new ECB$1(5,120),new ECB$1(1,121)),new ECBlocks$1(26,new ECB$1(9,43),new ECB$1(4,44)),new ECBlocks$1(28,new ECB$1(17,22),new ECB$1(1,23)),new ECBlocks$1(28,new ECB$1(2,14),new ECB$1(19,15))),new Version(19,Int32Array.from([6,30,58,86]),new ECBlocks$1(28,new ECB$1(3,113),new ECB$1(4,114)),new ECBlocks$1(26,new ECB$1(3,44),new ECB$1(11,45)),new ECBlocks$1(26,new ECB$1(17,21),new ECB$1(4,22)),new ECBlocks$1(26,new ECB$1(9,13),new ECB$1(16,14))),new Version(20,Int32Array.from([6,34,62,90]),new ECBlocks$1(28,new ECB$1(3,107),new ECB$1(5,108)),new ECBlocks$1(26,new ECB$1(3,41),new ECB$1(13,42)),new ECBlocks$1(30,new ECB$1(15,24),new ECB$1(5,25)),new ECBlocks$1(28,new ECB$1(15,15),new ECB$1(10,16))),new Version(21,Int32Array.from([6,28,50,72,94]),new ECBlocks$1(28,new ECB$1(4,116),new ECB$1(4,117)),new ECBlocks$1(26,new ECB$1(17,42)),new ECBlocks$1(28,new ECB$1(17,22),new ECB$1(6,23)),new ECBlocks$1(30,new ECB$1(19,16),new ECB$1(6,17))),new Version(22,Int32Array.from([6,26,50,74,98]),new ECBlocks$1(28,new ECB$1(2,111),new ECB$1(7,112)),new ECBlocks$1(28,new ECB$1(17,46)),new ECBlocks$1(30,new ECB$1(7,24),new ECB$1(16,25)),new ECBlocks$1(24,new ECB$1(34,13))),new Version(23,Int32Array.from([6,30,54,78,102]),new ECBlocks$1(30,new ECB$1(4,121),new ECB$1(5,122)),new ECBlocks$1(28,new ECB$1(4,47),new ECB$1(14,48)),new ECBlocks$1(30,new ECB$1(11,24),new ECB$1(14,25)),new ECBlocks$1(30,new ECB$1(16,15),new ECB$1(14,16))),new Version(24,Int32Array.from([6,28,54,80,106]),new ECBlocks$1(30,new ECB$1(6,117),new ECB$1(4,118)),new ECBlocks$1(28,new ECB$1(6,45),new ECB$1(14,46)),new ECBlocks$1(30,new ECB$1(11,24),new ECB$1(16,25)),new ECBlocks$1(30,new ECB$1(30,16),new ECB$1(2,17))),new Version(25,Int32Array.from([6,32,58,84,110]),new ECBlocks$1(26,new ECB$1(8,106),new ECB$1(4,107)),new ECBlocks$1(28,new ECB$1(8,47),new ECB$1(13,48)),new ECBlocks$1(30,new ECB$1(7,24),new ECB$1(22,25)),new ECBlocks$1(30,new ECB$1(22,15),new ECB$1(13,16))),new Version(26,Int32Array.from([6,30,58,86,114]),new ECBlocks$1(28,new ECB$1(10,114),new ECB$1(2,115)),new ECBlocks$1(28,new ECB$1(19,46),new ECB$1(4,47)),new ECBlocks$1(28,new ECB$1(28,22),new ECB$1(6,23)),new ECBlocks$1(30,new ECB$1(33,16),new ECB$1(4,17))),new Version(27,Int32Array.from([6,34,62,90,118]),new ECBlocks$1(30,new ECB$1(8,122),new ECB$1(4,123)),new ECBlocks$1(28,new ECB$1(22,45),new ECB$1(3,46)),new ECBlocks$1(30,new ECB$1(8,23),new ECB$1(26,24)),new ECBlocks$1(30,new ECB$1(12,15),new ECB$1(28,16))),new Version(28,Int32Array.from([6,26,50,74,98,122]),new ECBlocks$1(30,new ECB$1(3,117),new ECB$1(10,118)),new ECBlocks$1(28,new ECB$1(3,45),new ECB$1(23,46)),new ECBlocks$1(30,new ECB$1(4,24),new ECB$1(31,25)),new ECBlocks$1(30,new ECB$1(11,15),new ECB$1(31,16))),new Version(29,Int32Array.from([6,30,54,78,102,126]),new ECBlocks$1(30,new ECB$1(7,116),new ECB$1(7,117)),new ECBlocks$1(28,new ECB$1(21,45),new ECB$1(7,46)),new ECBlocks$1(30,new ECB$1(1,23),new ECB$1(37,24)),new ECBlocks$1(30,new ECB$1(19,15),new ECB$1(26,16))),new Version(30,Int32Array.from([6,26,52,78,104,130]),new ECBlocks$1(30,new ECB$1(5,115),new ECB$1(10,116)),new ECBlocks$1(28,new ECB$1(19,47),new ECB$1(10,48)),new ECBlocks$1(30,new ECB$1(15,24),new ECB$1(25,25)),new ECBlocks$1(30,new ECB$1(23,15),new ECB$1(25,16))),new Version(31,Int32Array.from([6,30,56,82,108,134]),new ECBlocks$1(30,new ECB$1(13,115),new ECB$1(3,116)),new ECBlocks$1(28,new ECB$1(2,46),new ECB$1(29,47)),new ECBlocks$1(30,new ECB$1(42,24),new ECB$1(1,25)),new ECBlocks$1(30,new ECB$1(23,15),new ECB$1(28,16))),new Version(32,Int32Array.from([6,34,60,86,112,138]),new ECBlocks$1(30,new ECB$1(17,115)),new ECBlocks$1(28,new ECB$1(10,46),new ECB$1(23,47)),new ECBlocks$1(30,new ECB$1(10,24),new ECB$1(35,25)),new ECBlocks$1(30,new ECB$1(19,15),new ECB$1(35,16))),new Version(33,Int32Array.from([6,30,58,86,114,142]),new ECBlocks$1(30,new ECB$1(17,115),new ECB$1(1,116)),new ECBlocks$1(28,new ECB$1(14,46),new ECB$1(21,47)),new ECBlocks$1(30,new ECB$1(29,24),new ECB$1(19,25)),new ECBlocks$1(30,new ECB$1(11,15),new ECB$1(46,16))),new Version(34,Int32Array.from([6,34,62,90,118,146]),new ECBlocks$1(30,new ECB$1(13,115),new ECB$1(6,116)),new ECBlocks$1(28,new ECB$1(14,46),new ECB$1(23,47)),new ECBlocks$1(30,new ECB$1(44,24),new ECB$1(7,25)),new ECBlocks$1(30,new ECB$1(59,16),new ECB$1(1,17))),new Version(35,Int32Array.from([6,30,54,78,102,126,150]),new ECBlocks$1(30,new ECB$1(12,121),new ECB$1(7,122)),new ECBlocks$1(28,new ECB$1(12,47),new ECB$1(26,48)),new ECBlocks$1(30,new ECB$1(39,24),new ECB$1(14,25)),new ECBlocks$1(30,new ECB$1(22,15),new ECB$1(41,16))),new Version(36,Int32Array.from([6,24,50,76,102,128,154]),new ECBlocks$1(30,new ECB$1(6,121),new ECB$1(14,122)),new ECBlocks$1(28,new ECB$1(6,47),new ECB$1(34,48)),new ECBlocks$1(30,new ECB$1(46,24),new ECB$1(10,25)),new ECBlocks$1(30,new ECB$1(2,15),new ECB$1(64,16))),new Version(37,Int32Array.from([6,28,54,80,106,132,158]),new ECBlocks$1(30,new ECB$1(17,122),new ECB$1(4,123)),new ECBlocks$1(28,new ECB$1(29,46),new ECB$1(14,47)),new ECBlocks$1(30,new ECB$1(49,24),new ECB$1(10,25)),new ECBlocks$1(30,new ECB$1(24,15),new ECB$1(46,16))),new Version(38,Int32Array.from([6,32,58,84,110,136,162]),new ECBlocks$1(30,new ECB$1(4,122),new ECB$1(18,123)),new ECBlocks$1(28,new ECB$1(13,46),new ECB$1(32,47)),new ECBlocks$1(30,new ECB$1(48,24),new ECB$1(14,25)),new ECBlocks$1(30,new ECB$1(42,15),new ECB$1(32,16))),new Version(39,Int32Array.from([6,26,54,82,110,138,166]),new ECBlocks$1(30,new ECB$1(20,117),new ECB$1(4,118)),new ECBlocks$1(28,new ECB$1(40,47),new ECB$1(7,48)),new ECBlocks$1(30,new ECB$1(43,24),new ECB$1(22,25)),new ECBlocks$1(30,new ECB$1(10,15),new ECB$1(67,16))),new Version(40,Int32Array.from([6,30,58,86,114,142,170]),new ECBlocks$1(30,new ECB$1(19,118),new ECB$1(6,119)),new ECBlocks$1(28,new ECB$1(18,47),new ECB$1(31,48)),new ECBlocks$1(30,new ECB$1(34,24),new ECB$1(34,25)),new ECBlocks$1(30,new ECB$1(20,15),new ECB$1(61,16)))];return Version;}();/*
   * Copyright 2007 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var DataMaskValues;(function(DataMaskValues){DataMaskValues[DataMaskValues["DATA_MASK_000"]=0]="DATA_MASK_000";DataMaskValues[DataMaskValues["DATA_MASK_001"]=1]="DATA_MASK_001";DataMaskValues[DataMaskValues["DATA_MASK_010"]=2]="DATA_MASK_010";DataMaskValues[DataMaskValues["DATA_MASK_011"]=3]="DATA_MASK_011";DataMaskValues[DataMaskValues["DATA_MASK_100"]=4]="DATA_MASK_100";DataMaskValues[DataMaskValues["DATA_MASK_101"]=5]="DATA_MASK_101";DataMaskValues[DataMaskValues["DATA_MASK_110"]=6]="DATA_MASK_110";DataMaskValues[DataMaskValues["DATA_MASK_111"]=7]="DATA_MASK_111";})(DataMaskValues||(DataMaskValues={}));/**
   * <p>Encapsulates data masks for the data bits in a QR code, per ISO 18004:2006 6.8. Implementations
   * of this class can un-mask a raw BitMatrix. For simplicity, they will unmask the entire BitMatrix,
   * including areas used for finder patterns, timing patterns, etc. These areas should be unused
   * after the point they are unmasked anyway.</p>
   *
   * <p>Note that the diagram in section 6.8.1 is misleading since it indicates that i is column position
   * and j is row position. In fact, as the text says, i is row position and j is column position.</p>
   *
   * @author Sean Owen
   */var DataMask=/** @class */function(){// See ISO 18004:2006 6.8.1
function DataMask(value,isMasked){this.value=value;this.isMasked=isMasked;}// End of enum constants.
/**
       * <p>Implementations of this method reverse the data masking process applied to a QR Code and
       * make its bits ready to read.</p>
       *
       * @param bits representation of QR Code bits
       * @param dimension dimension of QR Code, represented by bits, being unmasked
       */DataMask.prototype.unmaskBitMatrix=function(bits,dimension/*int*/){for(var i=0;i<dimension;i++){for(var j=0;j<dimension;j++){if(this.isMasked(i,j)){bits.flip(j,i);}}}};DataMask.values=new Map([/**
           * 000: mask bits for which (x + y) mod 2 == 0
           */[DataMaskValues.DATA_MASK_000,new DataMask(DataMaskValues.DATA_MASK_000,function(i/*int*/,j/*int*/){return(i+j&0x01)===0;})],/**
           * 001: mask bits for which x mod 2 == 0
           */[DataMaskValues.DATA_MASK_001,new DataMask(DataMaskValues.DATA_MASK_001,function(i/*int*/,j/*int*/){return(i&0x01)===0;})],/**
           * 010: mask bits for which y mod 3 == 0
           */[DataMaskValues.DATA_MASK_010,new DataMask(DataMaskValues.DATA_MASK_010,function(i/*int*/,j/*int*/){return j%3===0;})],/**
           * 011: mask bits for which (x + y) mod 3 == 0
           */[DataMaskValues.DATA_MASK_011,new DataMask(DataMaskValues.DATA_MASK_011,function(i/*int*/,j/*int*/){return(i+j)%3===0;})],/**
           * 100: mask bits for which (x/2 + y/3) mod 2 == 0
           */[DataMaskValues.DATA_MASK_100,new DataMask(DataMaskValues.DATA_MASK_100,function(i/*int*/,j/*int*/){return(Math.floor(i/2)+Math.floor(j/3)&0x01)===0;})],/**
           * 101: mask bits for which xy mod 2 + xy mod 3 == 0
           * equivalently, such that xy mod 6 == 0
           */[DataMaskValues.DATA_MASK_101,new DataMask(DataMaskValues.DATA_MASK_101,function(i/*int*/,j/*int*/){return i*j%6===0;})],/**
           * 110: mask bits for which (xy mod 2 + xy mod 3) mod 2 == 0
           * equivalently, such that xy mod 6 < 3
           */[DataMaskValues.DATA_MASK_110,new DataMask(DataMaskValues.DATA_MASK_110,function(i/*int*/,j/*int*/){return i*j%6<3;})],/**
           * 111: mask bits for which ((x+y)mod 2 + xy mod 3) mod 2 == 0
           * equivalently, such that (x + y + xy mod 3) mod 2 == 0
           */[DataMaskValues.DATA_MASK_111,new DataMask(DataMaskValues.DATA_MASK_111,function(i/*int*/,j/*int*/){return(i+j+i*j%3&0x01)===0;})]]);return DataMask;}();/*
   * Copyright 2007 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /**
   * @author Sean Owen
   */var BitMatrixParser$1=/** @class */function(){/**
       * @param bitMatrix {@link BitMatrix} to parse
       * @throws FormatException if dimension is not >= 21 and 1 mod 4
       */function BitMatrixParser(bitMatrix){var dimension=bitMatrix.getHeight();if(dimension<21||(dimension&0x03)!==1){throw new FormatException();}this.bitMatrix=bitMatrix;}/**
       * <p>Reads format information from one of its two locations within the QR Code.</p>
       *
       * @return {@link FormatInformation} encapsulating the QR Code's format info
       * @throws FormatException if both format information locations cannot be parsed as
       * the valid encoding of format information
       */BitMatrixParser.prototype.readFormatInformation=function(){if(this.parsedFormatInfo!==null&&this.parsedFormatInfo!==undefined){return this.parsedFormatInfo;}// Read top-left format info bits
var formatInfoBits1=0;for(var i=0;i<6;i++){formatInfoBits1=this.copyBit(i,8,formatInfoBits1);}// .. and skip a bit in the timing pattern ...
formatInfoBits1=this.copyBit(7,8,formatInfoBits1);formatInfoBits1=this.copyBit(8,8,formatInfoBits1);formatInfoBits1=this.copyBit(8,7,formatInfoBits1);// .. and skip a bit in the timing pattern ...
for(var j=5;j>=0;j--){formatInfoBits1=this.copyBit(8,j,formatInfoBits1);}// Read the top-right/bottom-left pattern too
var dimension=this.bitMatrix.getHeight();var formatInfoBits2=0;var jMin=dimension-7;for(var j=dimension-1;j>=jMin;j--){formatInfoBits2=this.copyBit(8,j,formatInfoBits2);}for(var i=dimension-8;i<dimension;i++){formatInfoBits2=this.copyBit(i,8,formatInfoBits2);}this.parsedFormatInfo=FormatInformation.decodeFormatInformation(formatInfoBits1,formatInfoBits2);if(this.parsedFormatInfo!==null){return this.parsedFormatInfo;}throw new FormatException();};/**
       * <p>Reads version information from one of its two locations within the QR Code.</p>
       *
       * @return {@link Version} encapsulating the QR Code's version
       * @throws FormatException if both version information locations cannot be parsed as
       * the valid encoding of version information
       */BitMatrixParser.prototype.readVersion=function(){if(this.parsedVersion!==null&&this.parsedVersion!==undefined){return this.parsedVersion;}var dimension=this.bitMatrix.getHeight();var provisionalVersion=Math.floor((dimension-17)/4);if(provisionalVersion<=6){return Version$1.getVersionForNumber(provisionalVersion);}// Read top-right version info: 3 wide by 6 tall
var versionBits=0;var ijMin=dimension-11;for(var j=5;j>=0;j--){for(var i=dimension-9;i>=ijMin;i--){versionBits=this.copyBit(i,j,versionBits);}}var theParsedVersion=Version$1.decodeVersionInformation(versionBits);if(theParsedVersion!==null&&theParsedVersion.getDimensionForVersion()===dimension){this.parsedVersion=theParsedVersion;return theParsedVersion;}// Hmm, failed. Try bottom left: 6 wide by 3 tall
versionBits=0;for(var i=5;i>=0;i--){for(var j=dimension-9;j>=ijMin;j--){versionBits=this.copyBit(i,j,versionBits);}}theParsedVersion=Version$1.decodeVersionInformation(versionBits);if(theParsedVersion!==null&&theParsedVersion.getDimensionForVersion()===dimension){this.parsedVersion=theParsedVersion;return theParsedVersion;}throw new FormatException();};BitMatrixParser.prototype.copyBit=function(i/*int*/,j/*int*/,versionBits/*int*/){var bit=this.isMirror?this.bitMatrix.get(j,i):this.bitMatrix.get(i,j);return bit?versionBits<<1|0x1:versionBits<<1;};/**
       * <p>Reads the bits in the {@link BitMatrix} representing the finder pattern in the
       * correct order in order to reconstruct the codewords bytes contained within the
       * QR Code.</p>
       *
       * @return bytes encoded within the QR Code
       * @throws FormatException if the exact number of bytes expected is not read
       */BitMatrixParser.prototype.readCodewords=function(){var formatInfo=this.readFormatInformation();var version=this.readVersion();// Get the data mask for the format used in this QR Code. This will exclude
// some bits from reading as we wind through the bit matrix.
var dataMask=DataMask.values.get(formatInfo.getDataMask());var dimension=this.bitMatrix.getHeight();dataMask.unmaskBitMatrix(this.bitMatrix,dimension);var functionPattern=version.buildFunctionPattern();var readingUp=true;var result=new Uint8Array(version.getTotalCodewords());var resultOffset=0;var currentByte=0;var bitsRead=0;// Read columns in pairs, from right to left
for(var j=dimension-1;j>0;j-=2){if(j===6){// Skip whole column with vertical alignment pattern
// saves time and makes the other code proceed more cleanly
j--;}// Read alternatingly from bottom to top then top to bottom
for(var count=0;count<dimension;count++){var i=readingUp?dimension-1-count:count;for(var col=0;col<2;col++){// Ignore bits covered by the function pattern
if(!functionPattern.get(j-col,i)){// Read a bit
bitsRead++;currentByte<<=1;if(this.bitMatrix.get(j-col,i)){currentByte|=1;}// If we've made a whole byte, save it off
if(bitsRead===8){result[resultOffset++]=/*(byte) */currentByte;bitsRead=0;currentByte=0;}}}}readingUp=!readingUp;// readingUp ^= true; // readingUp = !readingUp; // switch directions
}if(resultOffset!==version.getTotalCodewords()){throw new FormatException();}return result;};/**
       * Revert the mask removal done while reading the code words. The bit matrix should revert to its original state.
       */BitMatrixParser.prototype.remask=function(){if(this.parsedFormatInfo===null){return;// We have no format information, and have no data mask
}var dataMask=DataMask.values[this.parsedFormatInfo.getDataMask()];var dimension=this.bitMatrix.getHeight();dataMask.unmaskBitMatrix(this.bitMatrix,dimension);};/**
       * Prepare the parser for a mirrored operation.
       * This flag has effect only on the {@link #readFormatInformation()} and the
       * {@link #readVersion()}. Before proceeding with {@link #readCodewords()} the
       * {@link #mirror()} method should be called.
       *
       * @param mirror Whether to read version and format information mirrored.
       */BitMatrixParser.prototype.setMirror=function(isMirror){this.parsedVersion=null;this.parsedFormatInfo=null;this.isMirror=isMirror;};/** Mirror the bit matrix in order to attempt a second reading. */BitMatrixParser.prototype.mirror=function(){var bitMatrix=this.bitMatrix;for(var x=0,width=bitMatrix.getWidth();x<width;x++){for(var y=x+1,height=bitMatrix.getHeight();y<height;y++){if(bitMatrix.get(x,y)!==bitMatrix.get(y,x)){bitMatrix.flip(y,x);bitMatrix.flip(x,y);}}}};return BitMatrixParser;}();/*
   * Copyright 2007 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __values$m=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};/**
   * <p>Encapsulates a block of data within a QR Code. QR Codes may split their data into
   * multiple blocks, each of which is a unit of data and error-correction codewords. Each
   * is represented by an instance of this class.</p>
   *
   * @author Sean Owen
   */var DataBlock$1=/** @class */function(){function DataBlock(numDataCodewords/*int*/,codewords){this.numDataCodewords=numDataCodewords;this.codewords=codewords;}/**
       * <p>When QR Codes use multiple data blocks, they are actually interleaved.
       * That is, the first byte of data block 1 to n is written, then the second bytes, and so on. This
       * method will separate the data into original blocks.</p>
       *
       * @param rawCodewords bytes as read directly from the QR Code
       * @param version version of the QR Code
       * @param ecLevel error-correction level of the QR Code
       * @return DataBlocks containing original bytes, "de-interleaved" from representation in the
       *         QR Code
       */DataBlock.getDataBlocks=function(rawCodewords,version,ecLevel){var e_1,_a,e_2,_b;if(rawCodewords.length!==version.getTotalCodewords()){throw new IllegalArgumentException();}// Figure out the number and size of data blocks used by this version and
// error correction level
var ecBlocks=version.getECBlocksForLevel(ecLevel);// First count the total number of data blocks
var totalBlocks=0;var ecBlockArray=ecBlocks.getECBlocks();try{for(var ecBlockArray_1=__values$m(ecBlockArray),ecBlockArray_1_1=ecBlockArray_1.next();!ecBlockArray_1_1.done;ecBlockArray_1_1=ecBlockArray_1.next()){var ecBlock=ecBlockArray_1_1.value;totalBlocks+=ecBlock.getCount();}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(ecBlockArray_1_1&&!ecBlockArray_1_1.done&&(_a=ecBlockArray_1.return))_a.call(ecBlockArray_1);}finally{if(e_1)throw e_1.error;}}// Now establish DataBlocks of the appropriate size and number of data codewords
var result=new Array(totalBlocks);var numResultBlocks=0;try{for(var ecBlockArray_2=__values$m(ecBlockArray),ecBlockArray_2_1=ecBlockArray_2.next();!ecBlockArray_2_1.done;ecBlockArray_2_1=ecBlockArray_2.next()){var ecBlock=ecBlockArray_2_1.value;for(var i=0;i<ecBlock.getCount();i++){var numDataCodewords=ecBlock.getDataCodewords();var numBlockCodewords=ecBlocks.getECCodewordsPerBlock()+numDataCodewords;result[numResultBlocks++]=new DataBlock(numDataCodewords,new Uint8Array(numBlockCodewords));}}}catch(e_2_1){e_2={error:e_2_1};}finally{try{if(ecBlockArray_2_1&&!ecBlockArray_2_1.done&&(_b=ecBlockArray_2.return))_b.call(ecBlockArray_2);}finally{if(e_2)throw e_2.error;}}// All blocks have the same amount of data, except that the last n
// (where n may be 0) have 1 more byte. Figure out where these start.
var shorterBlocksTotalCodewords=result[0].codewords.length;var longerBlocksStartAt=result.length-1;// TYPESCRIPTPORT: check length is correct here
while(longerBlocksStartAt>=0){var numCodewords=result[longerBlocksStartAt].codewords.length;if(numCodewords===shorterBlocksTotalCodewords){break;}longerBlocksStartAt--;}longerBlocksStartAt++;var shorterBlocksNumDataCodewords=shorterBlocksTotalCodewords-ecBlocks.getECCodewordsPerBlock();// The last elements of result may be 1 element longer
// first fill out as many elements as all of them have
var rawCodewordsOffset=0;for(var i=0;i<shorterBlocksNumDataCodewords;i++){for(var j=0;j<numResultBlocks;j++){result[j].codewords[i]=rawCodewords[rawCodewordsOffset++];}}// Fill out the last data block in the longer ones
for(var j=longerBlocksStartAt;j<numResultBlocks;j++){result[j].codewords[shorterBlocksNumDataCodewords]=rawCodewords[rawCodewordsOffset++];}// Now add in error correction blocks
var max=result[0].codewords.length;for(var i=shorterBlocksNumDataCodewords;i<max;i++){for(var j=0;j<numResultBlocks;j++){var iOffset=j<longerBlocksStartAt?i:i+1;result[j].codewords[iOffset]=rawCodewords[rawCodewordsOffset++];}}return result;};DataBlock.prototype.getNumDataCodewords=function(){return this.numDataCodewords;};DataBlock.prototype.getCodewords=function(){return this.codewords;};return DataBlock;}();/*
   * Copyright 2007 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var ModeValues;(function(ModeValues){ModeValues[ModeValues["TERMINATOR"]=0]="TERMINATOR";ModeValues[ModeValues["NUMERIC"]=1]="NUMERIC";ModeValues[ModeValues["ALPHANUMERIC"]=2]="ALPHANUMERIC";ModeValues[ModeValues["STRUCTURED_APPEND"]=3]="STRUCTURED_APPEND";ModeValues[ModeValues["BYTE"]=4]="BYTE";ModeValues[ModeValues["ECI"]=5]="ECI";ModeValues[ModeValues["KANJI"]=6]="KANJI";ModeValues[ModeValues["FNC1_FIRST_POSITION"]=7]="FNC1_FIRST_POSITION";ModeValues[ModeValues["FNC1_SECOND_POSITION"]=8]="FNC1_SECOND_POSITION";/** See GBT 18284-2000; "Hanzi" is a transliteration of this mode name. */ModeValues[ModeValues["HANZI"]=9]="HANZI";})(ModeValues||(ModeValues={}));/**
   * <p>See ISO 18004:2006, 6.4.1, Tables 2 and 3. This enum encapsulates the various modes in which
   * data can be encoded to bits in the QR code standard.</p>
   *
   * @author Sean Owen
   */var Mode$1=/** @class */function(){function Mode(value,stringValue,characterCountBitsForVersions,bits/*int*/){this.value=value;this.stringValue=stringValue;this.characterCountBitsForVersions=characterCountBitsForVersions;this.bits=bits;Mode.FOR_BITS.set(bits,this);Mode.FOR_VALUE.set(value,this);}/**
       * @param bits four bits encoding a QR Code data mode
       * @return Mode encoded by these bits
       * @throws IllegalArgumentException if bits do not correspond to a known mode
       */Mode.forBits=function(bits/*int*/){var mode=Mode.FOR_BITS.get(bits);if(undefined===mode){throw new IllegalArgumentException();}return mode;};/**
       * @param version version in question
       * @return number of bits used, in this QR Code symbol {@link Version}, to encode the
       *         count of characters that will follow encoded in this Mode
       */Mode.prototype.getCharacterCountBits=function(version){var versionNumber=version.getVersionNumber();var offset;if(versionNumber<=9){offset=0;}else if(versionNumber<=26){offset=1;}else{offset=2;}return this.characterCountBitsForVersions[offset];};Mode.prototype.getValue=function(){return this.value;};Mode.prototype.getBits=function(){return this.bits;};Mode.prototype.equals=function(o){if(!(o instanceof Mode)){return false;}var other=o;return this.value===other.value;};Mode.prototype.toString=function(){return this.stringValue;};Mode.FOR_BITS=new Map();Mode.FOR_VALUE=new Map();Mode.TERMINATOR=new Mode(ModeValues.TERMINATOR,'TERMINATOR',Int32Array.from([0,0,0]),0x00);// Not really a mode...
Mode.NUMERIC=new Mode(ModeValues.NUMERIC,'NUMERIC',Int32Array.from([10,12,14]),0x01);Mode.ALPHANUMERIC=new Mode(ModeValues.ALPHANUMERIC,'ALPHANUMERIC',Int32Array.from([9,11,13]),0x02);Mode.STRUCTURED_APPEND=new Mode(ModeValues.STRUCTURED_APPEND,'STRUCTURED_APPEND',Int32Array.from([0,0,0]),0x03);// Not supported
Mode.BYTE=new Mode(ModeValues.BYTE,'BYTE',Int32Array.from([8,16,16]),0x04);Mode.ECI=new Mode(ModeValues.ECI,'ECI',Int32Array.from([0,0,0]),0x07);// character counts don't apply
Mode.KANJI=new Mode(ModeValues.KANJI,'KANJI',Int32Array.from([8,10,12]),0x08);Mode.FNC1_FIRST_POSITION=new Mode(ModeValues.FNC1_FIRST_POSITION,'FNC1_FIRST_POSITION',Int32Array.from([0,0,0]),0x05);Mode.FNC1_SECOND_POSITION=new Mode(ModeValues.FNC1_SECOND_POSITION,'FNC1_SECOND_POSITION',Int32Array.from([0,0,0]),0x09);/** See GBT 18284-2000; "Hanzi" is a transliteration of this mode name. */Mode.HANZI=new Mode(ModeValues.HANZI,'HANZI',Int32Array.from([8,10,12]),0x0D);return Mode;}();/*
   * Copyright 2007 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /*import java.io.UnsupportedEncodingException;*/ /*import java.util.ArrayList;*/ /*import java.util.Collection;*/ /*import java.util.List;*/ /*import java.util.Map;*/ /**
   * <p>QR Codes can encode text as bits in one of several modes, and can use multiple modes
   * in one QR Code. This class decodes the bits back into text.</p>
   *
   * <p>See ISO 18004:2006, 6.4.3 - 6.4.7</p>
   *
   * @author Sean Owen
   */var DecodedBitStreamParser$1=/** @class */function(){function DecodedBitStreamParser(){}DecodedBitStreamParser.decode=function(bytes,version,ecLevel,hints){var bits=new BitSource(bytes);var result=new StringBuilder();var byteSegments=new Array();// 1
// TYPESCRIPTPORT: I do not use constructor with size 1 as in original Java means capacity and the array length is checked below
var symbolSequence=-1;var parityData=-1;try{var currentCharacterSetECI=null;var fc1InEffect=false;var mode=void 0;do{// While still another segment to read...
if(bits.available()<4){// OK, assume we're done. Really, a TERMINATOR mode should have been recorded here
mode=Mode$1.TERMINATOR;}else{var modeBits=bits.readBits(4);mode=Mode$1.forBits(modeBits);// mode is encoded by 4 bits
}switch(mode){case Mode$1.TERMINATOR:break;case Mode$1.FNC1_FIRST_POSITION:case Mode$1.FNC1_SECOND_POSITION:// We do little with FNC1 except alter the parsed result a bit according to the spec
fc1InEffect=true;break;case Mode$1.STRUCTURED_APPEND:if(bits.available()<16){throw new FormatException();}// sequence number and parity is added later to the result metadata
// Read next 8 bits (symbol sequence #) and 8 bits (data: parity), then continue
symbolSequence=bits.readBits(8);parityData=bits.readBits(8);break;case Mode$1.ECI:// Count doesn't apply to ECI
var value=DecodedBitStreamParser.parseECIValue(bits);currentCharacterSetECI=CharacterSetECI.getCharacterSetECIByValue(value);if(currentCharacterSetECI===null){throw new FormatException();}break;case Mode$1.HANZI:// First handle Hanzi mode which does not start with character count
// Chinese mode contains a sub set indicator right after mode indicator
var subset=bits.readBits(4);var countHanzi=bits.readBits(mode.getCharacterCountBits(version));if(subset===DecodedBitStreamParser.GB2312_SUBSET){DecodedBitStreamParser.decodeHanziSegment(bits,result,countHanzi);}break;default:// "Normal" QR code modes:
// How many characters will follow, encoded in this mode?
var count=bits.readBits(mode.getCharacterCountBits(version));switch(mode){case Mode$1.NUMERIC:DecodedBitStreamParser.decodeNumericSegment(bits,result,count);break;case Mode$1.ALPHANUMERIC:DecodedBitStreamParser.decodeAlphanumericSegment(bits,result,count,fc1InEffect);break;case Mode$1.BYTE:DecodedBitStreamParser.decodeByteSegment(bits,result,count,currentCharacterSetECI,byteSegments,hints);break;case Mode$1.KANJI:DecodedBitStreamParser.decodeKanjiSegment(bits,result,count);break;default:throw new FormatException();}break;}}while(mode!==Mode$1.TERMINATOR);}catch(iae/*: IllegalArgumentException*/){// from readBits() calls
throw new FormatException();}return new DecoderResult(bytes,result.toString(),byteSegments.length===0?null:byteSegments,ecLevel===null?null:ecLevel.toString(),symbolSequence,parityData);};/**
       * See specification GBT 18284-2000
       */DecodedBitStreamParser.decodeHanziSegment=function(bits,result,count/*int*/){// Don't crash trying to read more bits than we have available.
if(count*13>bits.available()){throw new FormatException();}// Each character will require 2 bytes. Read the characters as 2-byte pairs
// and decode as GB2312 afterwards
var buffer=new Uint8Array(2*count);var offset=0;while(count>0){// Each 13 bits encodes a 2-byte character
var twoBytes=bits.readBits(13);var assembledTwoBytes=twoBytes/0x060<<8&0xFFFFFFFF|twoBytes%0x060;if(assembledTwoBytes<0x003BF){// In the 0xA1A1 to 0xAAFE range
assembledTwoBytes+=0x0A1A1;}else{// In the 0xB0A1 to 0xFAFE range
assembledTwoBytes+=0x0A6A1;}buffer[offset]=/*(byte) */assembledTwoBytes>>8&0xFF;buffer[offset+1]=/*(byte) */assembledTwoBytes&0xFF;offset+=2;count--;}try{result.append(StringEncoding.decode(buffer,StringUtils.GB2312));// TYPESCRIPTPORT: TODO: implement GB2312 decode. StringView from MDN could be a starting point
}catch(ignored/*: UnsupportedEncodingException*/){throw new FormatException(ignored);}};DecodedBitStreamParser.decodeKanjiSegment=function(bits,result,count/*int*/){// Don't crash trying to read more bits than we have available.
if(count*13>bits.available()){throw new FormatException();}// Each character will require 2 bytes. Read the characters as 2-byte pairs
// and decode as Shift_JIS afterwards
var buffer=new Uint8Array(2*count);var offset=0;while(count>0){// Each 13 bits encodes a 2-byte character
var twoBytes=bits.readBits(13);var assembledTwoBytes=twoBytes/0x0C0<<8&0xFFFFFFFF|twoBytes%0x0C0;if(assembledTwoBytes<0x01F00){// In the 0x8140 to 0x9FFC range
assembledTwoBytes+=0x08140;}else{// In the 0xE040 to 0xEBBF range
assembledTwoBytes+=0x0C140;}buffer[offset]=/*(byte) */assembledTwoBytes>>8;buffer[offset+1]=/*(byte) */assembledTwoBytes;offset+=2;count--;}// Shift_JIS may not be supported in some environments:
try{result.append(StringEncoding.decode(buffer,StringUtils.SHIFT_JIS));// TYPESCRIPTPORT: TODO: implement SHIFT_JIS decode. StringView from MDN could be a starting point
}catch(ignored/*: UnsupportedEncodingException*/){throw new FormatException(ignored);}};DecodedBitStreamParser.decodeByteSegment=function(bits,result,count/*int*/,currentCharacterSetECI,byteSegments,hints){// Don't crash trying to read more bits than we have available.
if(8*count>bits.available()){throw new FormatException();}var readBytes=new Uint8Array(count);for(var i=0;i<count;i++){readBytes[i]=/*(byte) */bits.readBits(8);}var encoding;if(currentCharacterSetECI===null){// The spec isn't clear on this mode; see
// section 6.4.5: t does not say which encoding to assuming
// upon decoding. I have seen ISO-8859-1 used as well as
// Shift_JIS -- without anything like an ECI designator to
// give a hint.
encoding=StringUtils.guessEncoding(readBytes,hints);}else{encoding=currentCharacterSetECI.getName();}try{result.append(StringEncoding.decode(readBytes,encoding));}catch(ignored/*: UnsupportedEncodingException*/){throw new FormatException(ignored);}byteSegments.push(readBytes);};DecodedBitStreamParser.toAlphaNumericChar=function(value/*int*/){if(value>=DecodedBitStreamParser.ALPHANUMERIC_CHARS.length){throw new FormatException();}return DecodedBitStreamParser.ALPHANUMERIC_CHARS[value];};DecodedBitStreamParser.decodeAlphanumericSegment=function(bits,result,count/*int*/,fc1InEffect){// Read two characters at a time
var start=result.length();while(count>1){if(bits.available()<11){throw new FormatException();}var nextTwoCharsBits=bits.readBits(11);result.append(DecodedBitStreamParser.toAlphaNumericChar(Math.floor(nextTwoCharsBits/45)));result.append(DecodedBitStreamParser.toAlphaNumericChar(nextTwoCharsBits%45));count-=2;}if(count===1){// special case: one character left
if(bits.available()<6){throw new FormatException();}result.append(DecodedBitStreamParser.toAlphaNumericChar(bits.readBits(6)));}// See section 6.4.8.1, 6.4.8.2
if(fc1InEffect){// We need to massage the result a bit if in an FNC1 mode:
for(var i=start;i<result.length();i++){if(result.charAt(i)==='%'){if(i<result.length()-1&&result.charAt(i+1)==='%'){// %% is rendered as %
result.deleteCharAt(i+1);}else{// In alpha mode, % should be converted to FNC1 separator 0x1D
result.setCharAt(i,String.fromCharCode(0x1D));}}}}};DecodedBitStreamParser.decodeNumericSegment=function(bits,result,count/*int*/){// Read three digits at a time
while(count>=3){// Each 10 bits encodes three digits
if(bits.available()<10){throw new FormatException();}var threeDigitsBits=bits.readBits(10);if(threeDigitsBits>=1000){throw new FormatException();}result.append(DecodedBitStreamParser.toAlphaNumericChar(Math.floor(threeDigitsBits/100)));result.append(DecodedBitStreamParser.toAlphaNumericChar(Math.floor(threeDigitsBits/10)%10));result.append(DecodedBitStreamParser.toAlphaNumericChar(threeDigitsBits%10));count-=3;}if(count===2){// Two digits left over to read, encoded in 7 bits
if(bits.available()<7){throw new FormatException();}var twoDigitsBits=bits.readBits(7);if(twoDigitsBits>=100){throw new FormatException();}result.append(DecodedBitStreamParser.toAlphaNumericChar(Math.floor(twoDigitsBits/10)));result.append(DecodedBitStreamParser.toAlphaNumericChar(twoDigitsBits%10));}else if(count===1){// One digit left over to read
if(bits.available()<4){throw new FormatException();}var digitBits=bits.readBits(4);if(digitBits>=10){throw new FormatException();}result.append(DecodedBitStreamParser.toAlphaNumericChar(digitBits));}};DecodedBitStreamParser.parseECIValue=function(bits){var firstByte=bits.readBits(8);if((firstByte&0x80)===0){// just one byte
return firstByte&0x7F;}if((firstByte&0xC0)===0x80){// two bytes
var secondByte=bits.readBits(8);return(firstByte&0x3F)<<8&0xFFFFFFFF|secondByte;}if((firstByte&0xE0)===0xC0){// three bytes
var secondThirdBytes=bits.readBits(16);return(firstByte&0x1F)<<16&0xFFFFFFFF|secondThirdBytes;}throw new FormatException();};/**
       * See ISO 18004:2006, 6.4.4 Table 5
       */DecodedBitStreamParser.ALPHANUMERIC_CHARS='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:';DecodedBitStreamParser.GB2312_SUBSET=1;return DecodedBitStreamParser;}();// function Uint8ArrayToString(a: Uint8Array): string {
//     const CHUNK_SZ = 0x8000;
//     const c = new StringBuilder();
//     for (let i = 0, length = a.length; i < length; i += CHUNK_SZ) {
//         c.append(String.fromCharCode.apply(null, a.subarray(i, i + CHUNK_SZ)));
//     }
//     return c.toString();
// }
/*
   * Copyright 2013 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /**
   * Meta-data container for QR Code decoding. Instances of this class may be used to convey information back to the
   * decoding caller. Callers are expected to process this.
   *
   * @see com.google.zxing.common.DecoderResult#getOther()
   */var QRCodeDecoderMetaData=/** @class */function(){function QRCodeDecoderMetaData(mirrored){this.mirrored=mirrored;}/**
       * @return true if the QR Code was mirrored.
       */QRCodeDecoderMetaData.prototype.isMirrored=function(){return this.mirrored;};/**
       * Apply the result points' order correction due to mirroring.
       *
       * @param points Array of points to apply mirror correction to.
       */QRCodeDecoderMetaData.prototype.applyMirroredCorrection=function(points){if(!this.mirrored||points===null||points.length<3){return;}var bottomLeft=points[0];points[0]=points[2];points[2]=bottomLeft;// No need to 'fix' top-left and alignment pattern.
};return QRCodeDecoderMetaData;}();/*
   * Copyright 2007 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __values$n=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};/*import java.util.Map;*/ /**
   * <p>The main class which implements QR Code decoding -- as opposed to locating and extracting
   * the QR Code from an image.</p>
   *
   * @author Sean Owen
   */var Decoder$2=/** @class */function(){function Decoder(){this.rsDecoder=new ReedSolomonDecoder(GenericGF.QR_CODE_FIELD_256);}// public decode(image: boolean[][]): DecoderResult /*throws ChecksumException, FormatException*/ {
//   return decode(image, null)
// }
/**
       * <p>Convenience method that can decode a QR Code represented as a 2D array of booleans.
       * "true" is taken to mean a black module.</p>
       *
       * @param image booleans representing white/black QR Code modules
       * @param hints decoding hints that should be used to influence decoding
       * @return text and bytes encoded within the QR Code
       * @throws FormatException if the QR Code cannot be decoded
       * @throws ChecksumException if error correction fails
       */Decoder.prototype.decodeBooleanArray=function(image,hints){return this.decodeBitMatrix(BitMatrix.parseFromBooleanArray(image),hints);};// public decodeBitMatrix(bits: BitMatrix): DecoderResult /*throws ChecksumException, FormatException*/ {
//   return decode(bits, null)
// }
/**
       * <p>Decodes a QR Code represented as a {@link BitMatrix}. A 1 or "true" is taken to mean a black module.</p>
       *
       * @param bits booleans representing white/black QR Code modules
       * @param hints decoding hints that should be used to influence decoding
       * @return text and bytes encoded within the QR Code
       * @throws FormatException if the QR Code cannot be decoded
       * @throws ChecksumException if error correction fails
       */Decoder.prototype.decodeBitMatrix=function(bits,hints){// Construct a parser and read version, error-correction level
var parser=new BitMatrixParser$1(bits);var ex=null;try{return this.decodeBitMatrixParser(parser,hints);}catch(e/*: FormatException, ChecksumException*/){ex=e;}try{// Revert the bit matrix
parser.remask();// Will be attempting a mirrored reading of the version and format info.
parser.setMirror(true);// Preemptively read the version.
parser.readVersion();// Preemptively read the format information.
parser.readFormatInformation();/*
               * Since we're here, this means we have successfully detected some kind
               * of version and format information when mirrored. This is a good sign,
               * that the QR code may be mirrored, and we should try once more with a
               * mirrored content.
               */ // Prepare for a mirrored reading.
parser.mirror();var result=this.decodeBitMatrixParser(parser,hints);// Success! Notify the caller that the code was mirrored.
result.setOther(new QRCodeDecoderMetaData(true));return result;}catch(e/*FormatException | ChecksumException*/){// Throw the exception from the original reading
if(ex!==null){throw ex;}throw e;}};Decoder.prototype.decodeBitMatrixParser=function(parser,hints){var e_1,_a,e_2,_b;var version=parser.readVersion();var ecLevel=parser.readFormatInformation().getErrorCorrectionLevel();// Read codewords
var codewords=parser.readCodewords();// Separate into data blocks
var dataBlocks=DataBlock$1.getDataBlocks(codewords,version,ecLevel);// Count total number of data bytes
var totalBytes=0;try{for(var dataBlocks_1=__values$n(dataBlocks),dataBlocks_1_1=dataBlocks_1.next();!dataBlocks_1_1.done;dataBlocks_1_1=dataBlocks_1.next()){var dataBlock=dataBlocks_1_1.value;totalBytes+=dataBlock.getNumDataCodewords();}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(dataBlocks_1_1&&!dataBlocks_1_1.done&&(_a=dataBlocks_1.return))_a.call(dataBlocks_1);}finally{if(e_1)throw e_1.error;}}var resultBytes=new Uint8Array(totalBytes);var resultOffset=0;try{// Error-correct and copy data blocks together into a stream of bytes
for(var dataBlocks_2=__values$n(dataBlocks),dataBlocks_2_1=dataBlocks_2.next();!dataBlocks_2_1.done;dataBlocks_2_1=dataBlocks_2.next()){var dataBlock=dataBlocks_2_1.value;var codewordBytes=dataBlock.getCodewords();var numDataCodewords=dataBlock.getNumDataCodewords();this.correctErrors(codewordBytes,numDataCodewords);for(var i=0;i<numDataCodewords;i++){resultBytes[resultOffset++]=codewordBytes[i];}}}catch(e_2_1){e_2={error:e_2_1};}finally{try{if(dataBlocks_2_1&&!dataBlocks_2_1.done&&(_b=dataBlocks_2.return))_b.call(dataBlocks_2);}finally{if(e_2)throw e_2.error;}}// Decode the contents of that stream of bytes
return DecodedBitStreamParser$1.decode(resultBytes,version,ecLevel,hints);};/**
       * <p>Given data and error-correction codewords received, possibly corrupted by errors, attempts to
       * correct the errors in-place using Reed-Solomon error correction.</p>
       *
       * @param codewordBytes data and error correction codewords
       * @param numDataCodewords number of codewords that are data bytes
       * @throws ChecksumException if error correction fails
       */Decoder.prototype.correctErrors=function(codewordBytes,numDataCodewords/*int*/){// const numCodewords = codewordBytes.length;
// First read into an array of ints
var codewordsInts=new Int32Array(codewordBytes);// TYPESCRIPTPORT: not realy necessary to transform to ints? could redesign everything to work with unsigned bytes?
// const codewordsInts = new Int32Array(numCodewords)
// for (let i = 0; i < numCodewords; i++) {
//   codewordsInts[i] = codewordBytes[i] & 0xFF
// }
try{this.rsDecoder.decode(codewordsInts,codewordBytes.length-numDataCodewords);}catch(ignored/*: ReedSolomonException*/){throw new ChecksumException();}// Copy back into array of bytes -- only need to worry about the bytes that were data
// We don't care about errors in the error-correction codewords
for(var i=0;i<numDataCodewords;i++){codewordBytes[i]=/*(byte) */codewordsInts[i];}};return Decoder;}();/*
   * Copyright 2007 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __extends$P=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * <p>Encapsulates an alignment pattern, which are the smaller square patterns found in
   * all but the simplest QR Codes.</p>
   *
   * @author Sean Owen
   */var AlignmentPattern=/** @class */function(_super){__extends$P(AlignmentPattern,_super);function AlignmentPattern(posX/*float*/,posY/*float*/,estimatedModuleSize/*float*/){var _this=_super.call(this,posX,posY)||this;_this.estimatedModuleSize=estimatedModuleSize;return _this;}/**
       * <p>Determines if this alignment pattern "about equals" an alignment pattern at the stated
       * position and size -- meaning, it is at nearly the same center with nearly the same size.</p>
       */AlignmentPattern.prototype.aboutEquals=function(moduleSize/*float*/,i/*float*/,j/*float*/){if(Math.abs(i-this.getY())<=moduleSize&&Math.abs(j-this.getX())<=moduleSize){var moduleSizeDiff=Math.abs(moduleSize-this.estimatedModuleSize);return moduleSizeDiff<=1.0||moduleSizeDiff<=this.estimatedModuleSize;}return false;};/**
       * Combines this object's current estimate of a finder pattern position and module size
       * with a new estimate. It returns a new {@code FinderPattern} containing an average of the two.
       */AlignmentPattern.prototype.combineEstimate=function(i/*float*/,j/*float*/,newModuleSize/*float*/){var combinedX=(this.getX()+j)/2.0;var combinedY=(this.getY()+i)/2.0;var combinedModuleSize=(this.estimatedModuleSize+newModuleSize)/2.0;return new AlignmentPattern(combinedX,combinedY,combinedModuleSize);};return AlignmentPattern;}(ResultPoint);/*
   * Copyright 2007 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __values$o=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};/*import java.util.ArrayList;*/ /*import java.util.List;*/ /**
   * <p>This class attempts to find alignment patterns in a QR Code. Alignment patterns look like finder
   * patterns but are smaller and appear at regular intervals throughout the image.</p>
   *
   * <p>At the moment this only looks for the bottom-right alignment pattern.</p>
   *
   * <p>This is mostly a simplified copy of {@link FinderPatternFinder}. It is copied,
   * pasted and stripped down here for maximum performance but does unfortunately duplicate
   * some code.</p>
   *
   * <p>This class is thread-safe but not reentrant. Each thread must allocate its own object.</p>
   *
   * @author Sean Owen
   */var AlignmentPatternFinder=/** @class */function(){/**
       * <p>Creates a finder that will look in a portion of the whole image.</p>
       *
       * @param image image to search
       * @param startX left column from which to start searching
       * @param startY top row from which to start searching
       * @param width width of region to search
       * @param height height of region to search
       * @param moduleSize estimated module size so far
       */function AlignmentPatternFinder(image,startX/*int*/,startY/*int*/,width/*int*/,height/*int*/,moduleSize/*float*/,resultPointCallback){this.image=image;this.startX=startX;this.startY=startY;this.width=width;this.height=height;this.moduleSize=moduleSize;this.resultPointCallback=resultPointCallback;this.possibleCenters=[];// new Array<any>(5))
// TYPESCRIPTPORT: array initialization without size as the length is checked below
this.crossCheckStateCount=new Int32Array(3);}/**
       * <p>This method attempts to find the bottom-right alignment pattern in the image. It is a bit messy since
       * it's pretty performance-critical and so is written to be fast foremost.</p>
       *
       * @return {@link AlignmentPattern} if found
       * @throws NotFoundException if not found
       */AlignmentPatternFinder.prototype.find=function(){var startX=this.startX;var height=this.height;var width=this.width;var maxJ=startX+width;var middleI=this.startY+height/2;// We are looking for black/white/black modules in 1:1:1 ratio
// this tracks the number of black/white/black modules seen so far
var stateCount=new Int32Array(3);var image=this.image;for(var iGen=0;iGen<height;iGen++){// Search from middle outwards
var i=middleI+((iGen&0x01)===0?Math.floor((iGen+1)/2):-Math.floor((iGen+1)/2));stateCount[0]=0;stateCount[1]=0;stateCount[2]=0;var j=startX;// Burn off leading white pixels before anything else; if we start in the middle of
// a white run, it doesn't make sense to count its length, since we don't know if the
// white run continued to the left of the start point
while(j<maxJ&&!image.get(j,i)){j++;}var currentState=0;while(j<maxJ){if(image.get(j,i)){// Black pixel
if(currentState===1){// Counting black pixels
stateCount[1]++;}else{// Counting white pixels
if(currentState===2){// A winner?
if(this.foundPatternCross(stateCount)){// Yes
var confirmed=this.handlePossibleCenter(stateCount,i,j);if(confirmed!==null){return confirmed;}}stateCount[0]=stateCount[2];stateCount[1]=1;stateCount[2]=0;currentState=1;}else{stateCount[++currentState]++;}}}else{// White pixel
if(currentState===1){// Counting black pixels
currentState++;}stateCount[currentState]++;}j++;}if(this.foundPatternCross(stateCount)){var confirmed=this.handlePossibleCenter(stateCount,i,maxJ);if(confirmed!==null){return confirmed;}}}// Hmm, nothing we saw was observed and confirmed twice. If we had
// any guess at all, return it.
if(this.possibleCenters.length!==0){return this.possibleCenters[0];}throw new NotFoundException();};/**
       * Given a count of black/white/black pixels just seen and an end position,
       * figures the location of the center of this black/white/black run.
       */AlignmentPatternFinder.centerFromEnd=function(stateCount,end/*int*/){return end-stateCount[2]-stateCount[1]/2.0;};/**
       * @param stateCount count of black/white/black pixels just read
       * @return true iff the proportions of the counts is close enough to the 1/1/1 ratios
       *         used by alignment patterns to be considered a match
       */AlignmentPatternFinder.prototype.foundPatternCross=function(stateCount){var moduleSize=this.moduleSize;var maxVariance=moduleSize/2.0;for(var i=0;i<3;i++){if(Math.abs(moduleSize-stateCount[i])>=maxVariance){return false;}}return true;};/**
       * <p>After a horizontal scan finds a potential alignment pattern, this method
       * "cross-checks" by scanning down vertically through the center of the possible
       * alignment pattern to see if the same proportion is detected.</p>
       *
       * @param startI row where an alignment pattern was detected
       * @param centerJ center of the section that appears to cross an alignment pattern
       * @param maxCount maximum reasonable number of modules that should be
       * observed in any reading state, based on the results of the horizontal scan
       * @return vertical center of alignment pattern, or {@link Float#NaN} if not found
       */AlignmentPatternFinder.prototype.crossCheckVertical=function(startI/*int*/,centerJ/*int*/,maxCount/*int*/,originalStateCountTotal/*int*/){var image=this.image;var maxI=image.getHeight();var stateCount=this.crossCheckStateCount;stateCount[0]=0;stateCount[1]=0;stateCount[2]=0;// Start counting up from center
var i=startI;while(i>=0&&image.get(centerJ,i)&&stateCount[1]<=maxCount){stateCount[1]++;i--;}// If already too many modules in this state or ran off the edge:
if(i<0||stateCount[1]>maxCount){return NaN;}while(i>=0&&!image.get(centerJ,i)&&stateCount[0]<=maxCount){stateCount[0]++;i--;}if(stateCount[0]>maxCount){return NaN;}// Now also count down from center
i=startI+1;while(i<maxI&&image.get(centerJ,i)&&stateCount[1]<=maxCount){stateCount[1]++;i++;}if(i===maxI||stateCount[1]>maxCount){return NaN;}while(i<maxI&&!image.get(centerJ,i)&&stateCount[2]<=maxCount){stateCount[2]++;i++;}if(stateCount[2]>maxCount){return NaN;}var stateCountTotal=stateCount[0]+stateCount[1]+stateCount[2];if(5*Math.abs(stateCountTotal-originalStateCountTotal)>=2*originalStateCountTotal){return NaN;}return this.foundPatternCross(stateCount)?AlignmentPatternFinder.centerFromEnd(stateCount,i):NaN;};/**
       * <p>This is called when a horizontal scan finds a possible alignment pattern. It will
       * cross check with a vertical scan, and if successful, will see if this pattern had been
       * found on a previous horizontal scan. If so, we consider it confirmed and conclude we have
       * found the alignment pattern.</p>
       *
       * @param stateCount reading state module counts from horizontal scan
       * @param i row where alignment pattern may be found
       * @param j end of possible alignment pattern in row
       * @return {@link AlignmentPattern} if we have found the same pattern twice, or null if not
       */AlignmentPatternFinder.prototype.handlePossibleCenter=function(stateCount,i/*int*/,j/*int*/){var e_1,_a;var stateCountTotal=stateCount[0]+stateCount[1]+stateCount[2];var centerJ=AlignmentPatternFinder.centerFromEnd(stateCount,j);var centerI=this.crossCheckVertical(i,/*(int) */centerJ,2*stateCount[1],stateCountTotal);if(!isNaN(centerI)){var estimatedModuleSize=(stateCount[0]+stateCount[1]+stateCount[2])/3.0;try{for(var _b=__values$o(this.possibleCenters),_c=_b.next();!_c.done;_c=_b.next()){var center=_c.value;// Look for about the same center and module size:
if(center.aboutEquals(estimatedModuleSize,centerI,centerJ)){return center.combineEstimate(centerI,centerJ,estimatedModuleSize);}}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(_c&&!_c.done&&(_a=_b.return))_a.call(_b);}finally{if(e_1)throw e_1.error;}}// Hadn't found this before; save it
var point=new AlignmentPattern(centerJ,centerI,estimatedModuleSize);this.possibleCenters.push(point);if(this.resultPointCallback!==null&&this.resultPointCallback!==undefined){this.resultPointCallback.foundPossibleResultPoint(point);}}return null;};return AlignmentPatternFinder;}();/*
   * Copyright 2007 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __extends$Q=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * <p>Encapsulates a finder pattern, which are the three square patterns found in
   * the corners of QR Codes. It also encapsulates a count of similar finder patterns,
   * as a convenience to the finder's bookkeeping.</p>
   *
   * @author Sean Owen
   */var FinderPattern$1=/** @class */function(_super){__extends$Q(FinderPattern,_super);// FinderPattern(posX: number/*float*/, posY: number/*float*/, estimatedModuleSize: number/*float*/) {
//   this(posX, posY, estimatedModuleSize, 1)
// }
function FinderPattern(posX/*float*/,posY/*float*/,estimatedModuleSize/*float*/,count/*int*/){var _this=_super.call(this,posX,posY)||this;_this.estimatedModuleSize=estimatedModuleSize;_this.count=count;if(undefined===count){_this.count=1;}return _this;}FinderPattern.prototype.getEstimatedModuleSize=function(){return this.estimatedModuleSize;};FinderPattern.prototype.getCount=function(){return this.count;};/*
      void incrementCount() {
        this.count++
      }
       */ /**
       * <p>Determines if this finder pattern "about equals" a finder pattern at the stated
       * position and size -- meaning, it is at nearly the same center with nearly the same size.</p>
       */FinderPattern.prototype.aboutEquals=function(moduleSize/*float*/,i/*float*/,j/*float*/){if(Math.abs(i-this.getY())<=moduleSize&&Math.abs(j-this.getX())<=moduleSize){var moduleSizeDiff=Math.abs(moduleSize-this.estimatedModuleSize);return moduleSizeDiff<=1.0||moduleSizeDiff<=this.estimatedModuleSize;}return false;};/**
       * Combines this object's current estimate of a finder pattern position and module size
       * with a new estimate. It returns a new {@code FinderPattern} containing a weighted average
       * based on count.
       */FinderPattern.prototype.combineEstimate=function(i/*float*/,j/*float*/,newModuleSize/*float*/){var combinedCount=this.count+1;var combinedX=(this.count*this.getX()+j)/combinedCount;var combinedY=(this.count*this.getY()+i)/combinedCount;var combinedModuleSize=(this.count*this.estimatedModuleSize+newModuleSize)/combinedCount;return new FinderPattern(combinedX,combinedY,combinedModuleSize,combinedCount);};return FinderPattern;}(ResultPoint);/*
   * Copyright 2007 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /**
   * <p>Encapsulates information about finder patterns in an image, including the location of
   * the three finder patterns, and their estimated module size.</p>
   *
   * @author Sean Owen
   */var FinderPatternInfo=/** @class */function(){function FinderPatternInfo(patternCenters){this.bottomLeft=patternCenters[0];this.topLeft=patternCenters[1];this.topRight=patternCenters[2];}FinderPatternInfo.prototype.getBottomLeft=function(){return this.bottomLeft;};FinderPatternInfo.prototype.getTopLeft=function(){return this.topLeft;};FinderPatternInfo.prototype.getTopRight=function(){return this.topRight;};return FinderPatternInfo;}();/*
   * Copyright 2007 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __values$p=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};/*import java.io.Serializable;*/ /*import java.util.ArrayList;*/ /*import java.util.Collections;*/ /*import java.util.Comparator;*/ /*import java.util.List;*/ /*import java.util.Map;*/ /**
   * <p>This class attempts to find finder patterns in a QR Code. Finder patterns are the square
   * markers at three corners of a QR Code.</p>
   *
   * <p>This class is thread-safe but not reentrant. Each thread must allocate its own object.
   *
   * @author Sean Owen
   */var FinderPatternFinder=/** @class */function(){/**
       * <p>Creates a finder that will search the image for three finder patterns.</p>
       *
       * @param image image to search
       */ // public constructor(image: BitMatrix) {
//   this(image, null)
// }
function FinderPatternFinder(image,resultPointCallback){this.image=image;this.resultPointCallback=resultPointCallback;this.possibleCenters=[];this.crossCheckStateCount=new Int32Array(5);this.resultPointCallback=resultPointCallback;}FinderPatternFinder.prototype.getImage=function(){return this.image;};FinderPatternFinder.prototype.getPossibleCenters=function(){return this.possibleCenters;};FinderPatternFinder.prototype.find=function(hints){var tryHarder=hints!==null&&hints!==undefined&&undefined!==hints.get(DecodeHintType$1.TRY_HARDER);var pureBarcode=hints!==null&&hints!==undefined&&undefined!==hints.get(DecodeHintType$1.PURE_BARCODE);var image=this.image;var maxI=image.getHeight();var maxJ=image.getWidth();// We are looking for black/white/black/white/black modules in
// 1:1:3:1:1 ratio; this tracks the number of such modules seen so far
// Let's assume that the maximum version QR Code we support takes up 1/4 the height of the
// image, and then account for the center being 3 modules in size. This gives the smallest
// number of pixels the center could be, so skip this often. When trying harder, look for all
// QR versions regardless of how dense they are.
var iSkip=Math.floor(3*maxI/(4*FinderPatternFinder.MAX_MODULES));if(iSkip<FinderPatternFinder.MIN_SKIP||tryHarder){iSkip=FinderPatternFinder.MIN_SKIP;}var done=false;var stateCount=new Int32Array(5);for(var i=iSkip-1;i<maxI&&!done;i+=iSkip){// Get a row of black/white values
stateCount[0]=0;stateCount[1]=0;stateCount[2]=0;stateCount[3]=0;stateCount[4]=0;var currentState=0;for(var j=0;j<maxJ;j++){if(image.get(j,i)){// Black pixel
if((currentState&1)===1){// Counting white pixels
currentState++;}stateCount[currentState]++;}else{// White pixel
if((currentState&1)===0){// Counting black pixels
if(currentState===4){// A winner?
if(FinderPatternFinder.foundPatternCross(stateCount)){// Yes
var confirmed=this.handlePossibleCenter(stateCount,i,j,pureBarcode);if(confirmed===true){// Start examining every other line. Checking each line turned out to be too
// expensive and didn't improve performance.
iSkip=2;if(this.hasSkipped===true){done=this.haveMultiplyConfirmedCenters();}else{var rowSkip=this.findRowSkip();if(rowSkip>stateCount[2]){// Skip rows between row of lower confirmed center
// and top of presumed third confirmed center
// but back up a bit to get a full chance of detecting
// it, entire width of center of finder pattern
// Skip by rowSkip, but back off by stateCount[2] (size of last center
// of pattern we saw) to be conservative, and also back off by iSkip which
// is about to be re-added
i+=rowSkip-stateCount[2]-iSkip;j=maxJ-1;}}}else{stateCount[0]=stateCount[2];stateCount[1]=stateCount[3];stateCount[2]=stateCount[4];stateCount[3]=1;stateCount[4]=0;currentState=3;continue;}// Clear state to start looking again
currentState=0;stateCount[0]=0;stateCount[1]=0;stateCount[2]=0;stateCount[3]=0;stateCount[4]=0;}else{// No, shift counts back by two
stateCount[0]=stateCount[2];stateCount[1]=stateCount[3];stateCount[2]=stateCount[4];stateCount[3]=1;stateCount[4]=0;currentState=3;}}else{stateCount[++currentState]++;}}else{// Counting white pixels
stateCount[currentState]++;}}}if(FinderPatternFinder.foundPatternCross(stateCount)){var confirmed=this.handlePossibleCenter(stateCount,i,maxJ,pureBarcode);if(confirmed===true){iSkip=stateCount[0];if(this.hasSkipped){// Found a third one
done=this.haveMultiplyConfirmedCenters();}}}}var patternInfo=this.selectBestPatterns();ResultPoint.orderBestPatterns(patternInfo);return new FinderPatternInfo(patternInfo);};/**
       * Given a count of black/white/black/white/black pixels just seen and an end position,
       * figures the location of the center of this run.
       */FinderPatternFinder.centerFromEnd=function(stateCount,end/*int*/){return end-stateCount[4]-stateCount[3]-stateCount[2]/2.0;};/**
       * @param stateCount count of black/white/black/white/black pixels just read
       * @return true iff the proportions of the counts is close enough to the 1/1/3/1/1 ratios
       *         used by finder patterns to be considered a match
       */FinderPatternFinder.foundPatternCross=function(stateCount){var totalModuleSize=0;for(var i=0;i<5;i++){var count=stateCount[i];if(count===0){return false;}totalModuleSize+=count;}if(totalModuleSize<7){return false;}var moduleSize=totalModuleSize/7.0;var maxVariance=moduleSize/2.0;// Allow less than 50% variance from 1-1-3-1-1 proportions
return Math.abs(moduleSize-stateCount[0])<maxVariance&&Math.abs(moduleSize-stateCount[1])<maxVariance&&Math.abs(3.0*moduleSize-stateCount[2])<3*maxVariance&&Math.abs(moduleSize-stateCount[3])<maxVariance&&Math.abs(moduleSize-stateCount[4])<maxVariance;};FinderPatternFinder.prototype.getCrossCheckStateCount=function(){var crossCheckStateCount=this.crossCheckStateCount;crossCheckStateCount[0]=0;crossCheckStateCount[1]=0;crossCheckStateCount[2]=0;crossCheckStateCount[3]=0;crossCheckStateCount[4]=0;return crossCheckStateCount;};/**
       * After a vertical and horizontal scan finds a potential finder pattern, this method
       * "cross-cross-cross-checks" by scanning down diagonally through the center of the possible
       * finder pattern to see if the same proportion is detected.
       *
       * @param startI row where a finder pattern was detected
       * @param centerJ center of the section that appears to cross a finder pattern
       * @param maxCount maximum reasonable number of modules that should be
       *  observed in any reading state, based on the results of the horizontal scan
       * @param originalStateCountTotal The original state count total.
       * @return true if proportions are withing expected limits
       */FinderPatternFinder.prototype.crossCheckDiagonal=function(startI/*int*/,centerJ/*int*/,maxCount/*int*/,originalStateCountTotal/*int*/){var stateCount=this.getCrossCheckStateCount();// Start counting up, left from center finding black center mass
var i=0;var image=this.image;while(startI>=i&&centerJ>=i&&image.get(centerJ-i,startI-i)){stateCount[2]++;i++;}if(startI<i||centerJ<i){return false;}// Continue up, left finding white space
while(startI>=i&&centerJ>=i&&!image.get(centerJ-i,startI-i)&&stateCount[1]<=maxCount){stateCount[1]++;i++;}// If already too many modules in this state or ran off the edge:
if(startI<i||centerJ<i||stateCount[1]>maxCount){return false;}// Continue up, left finding black border
while(startI>=i&&centerJ>=i&&image.get(centerJ-i,startI-i)&&stateCount[0]<=maxCount){stateCount[0]++;i++;}if(stateCount[0]>maxCount){return false;}var maxI=image.getHeight();var maxJ=image.getWidth();// Now also count down, right from center
i=1;while(startI+i<maxI&&centerJ+i<maxJ&&image.get(centerJ+i,startI+i)){stateCount[2]++;i++;}// Ran off the edge?
if(startI+i>=maxI||centerJ+i>=maxJ){return false;}while(startI+i<maxI&&centerJ+i<maxJ&&!image.get(centerJ+i,startI+i)&&stateCount[3]<maxCount){stateCount[3]++;i++;}if(startI+i>=maxI||centerJ+i>=maxJ||stateCount[3]>=maxCount){return false;}while(startI+i<maxI&&centerJ+i<maxJ&&image.get(centerJ+i,startI+i)&&stateCount[4]<maxCount){stateCount[4]++;i++;}if(stateCount[4]>=maxCount){return false;}// If we found a finder-pattern-like section, but its size is more than 100% different than
// the original, assume it's a false positive
var stateCountTotal=stateCount[0]+stateCount[1]+stateCount[2]+stateCount[3]+stateCount[4];return Math.abs(stateCountTotal-originalStateCountTotal)<2*originalStateCountTotal&&FinderPatternFinder.foundPatternCross(stateCount);};/**
       * <p>After a horizontal scan finds a potential finder pattern, this method
       * "cross-checks" by scanning down vertically through the center of the possible
       * finder pattern to see if the same proportion is detected.</p>
       *
       * @param startI row where a finder pattern was detected
       * @param centerJ center of the section that appears to cross a finder pattern
       * @param maxCount maximum reasonable number of modules that should be
       * observed in any reading state, based on the results of the horizontal scan
       * @return vertical center of finder pattern, or {@link Float#NaN} if not found
       */FinderPatternFinder.prototype.crossCheckVertical=function(startI/*int*/,centerJ/*int*/,maxCount/*int*/,originalStateCountTotal/*int*/){var image=this.image;var maxI=image.getHeight();var stateCount=this.getCrossCheckStateCount();// Start counting up from center
var i=startI;while(i>=0&&image.get(centerJ,i)){stateCount[2]++;i--;}if(i<0){return NaN;}while(i>=0&&!image.get(centerJ,i)&&stateCount[1]<=maxCount){stateCount[1]++;i--;}// If already too many modules in this state or ran off the edge:
if(i<0||stateCount[1]>maxCount){return NaN;}while(i>=0&&image.get(centerJ,i)&&stateCount[0]<=maxCount){stateCount[0]++;i--;}if(stateCount[0]>maxCount){return NaN;}// Now also count down from center
i=startI+1;while(i<maxI&&image.get(centerJ,i)){stateCount[2]++;i++;}if(i===maxI){return NaN;}while(i<maxI&&!image.get(centerJ,i)&&stateCount[3]<maxCount){stateCount[3]++;i++;}if(i===maxI||stateCount[3]>=maxCount){return NaN;}while(i<maxI&&image.get(centerJ,i)&&stateCount[4]<maxCount){stateCount[4]++;i++;}if(stateCount[4]>=maxCount){return NaN;}// If we found a finder-pattern-like section, but its size is more than 40% different than
// the original, assume it's a false positive
var stateCountTotal=stateCount[0]+stateCount[1]+stateCount[2]+stateCount[3]+stateCount[4];if(5*Math.abs(stateCountTotal-originalStateCountTotal)>=2*originalStateCountTotal){return NaN;}return FinderPatternFinder.foundPatternCross(stateCount)?FinderPatternFinder.centerFromEnd(stateCount,i):NaN;};/**
       * <p>Like {@link #crossCheckVertical(int, int, int, int)}, and in fact is basically identical,
       * except it reads horizontally instead of vertically. This is used to cross-cross
       * check a vertical cross check and locate the real center of the alignment pattern.</p>
       */FinderPatternFinder.prototype.crossCheckHorizontal=function(startJ/*int*/,centerI/*int*/,maxCount/*int*/,originalStateCountTotal/*int*/){var image=this.image;var maxJ=image.getWidth();var stateCount=this.getCrossCheckStateCount();var j=startJ;while(j>=0&&image.get(j,centerI)){stateCount[2]++;j--;}if(j<0){return NaN;}while(j>=0&&!image.get(j,centerI)&&stateCount[1]<=maxCount){stateCount[1]++;j--;}if(j<0||stateCount[1]>maxCount){return NaN;}while(j>=0&&image.get(j,centerI)&&stateCount[0]<=maxCount){stateCount[0]++;j--;}if(stateCount[0]>maxCount){return NaN;}j=startJ+1;while(j<maxJ&&image.get(j,centerI)){stateCount[2]++;j++;}if(j===maxJ){return NaN;}while(j<maxJ&&!image.get(j,centerI)&&stateCount[3]<maxCount){stateCount[3]++;j++;}if(j===maxJ||stateCount[3]>=maxCount){return NaN;}while(j<maxJ&&image.get(j,centerI)&&stateCount[4]<maxCount){stateCount[4]++;j++;}if(stateCount[4]>=maxCount){return NaN;}// If we found a finder-pattern-like section, but its size is significantly different than
// the original, assume it's a false positive
var stateCountTotal=stateCount[0]+stateCount[1]+stateCount[2]+stateCount[3]+stateCount[4];if(5*Math.abs(stateCountTotal-originalStateCountTotal)>=originalStateCountTotal){return NaN;}return FinderPatternFinder.foundPatternCross(stateCount)?FinderPatternFinder.centerFromEnd(stateCount,j):NaN;};/**
       * <p>This is called when a horizontal scan finds a possible alignment pattern. It will
       * cross check with a vertical scan, and if successful, will, ah, cross-cross-check
       * with another horizontal scan. This is needed primarily to locate the real horizontal
       * center of the pattern in cases of extreme skew.
       * And then we cross-cross-cross check with another diagonal scan.</p>
       *
       * <p>If that succeeds the finder pattern location is added to a list that tracks
       * the number of times each location has been nearly-matched as a finder pattern.
       * Each additional find is more evidence that the location is in fact a finder
       * pattern center
       *
       * @param stateCount reading state module counts from horizontal scan
       * @param i row where finder pattern may be found
       * @param j end of possible finder pattern in row
       * @param pureBarcode true if in "pure barcode" mode
       * @return true if a finder pattern candidate was found this time
       */FinderPatternFinder.prototype.handlePossibleCenter=function(stateCount,i/*int*/,j/*int*/,pureBarcode){var stateCountTotal=stateCount[0]+stateCount[1]+stateCount[2]+stateCount[3]+stateCount[4];var centerJ=FinderPatternFinder.centerFromEnd(stateCount,j);var centerI=this.crossCheckVertical(i,/*(int) */Math.floor(centerJ),stateCount[2],stateCountTotal);if(!isNaN(centerI)){// Re-cross check
centerJ=this.crossCheckHorizontal(/*(int) */Math.floor(centerJ),/*(int) */Math.floor(centerI),stateCount[2],stateCountTotal);if(!isNaN(centerJ)&&(!pureBarcode||this.crossCheckDiagonal(/*(int) */Math.floor(centerI),/*(int) */Math.floor(centerJ),stateCount[2],stateCountTotal))){var estimatedModuleSize=stateCountTotal/7.0;var found=false;var possibleCenters=this.possibleCenters;for(var index=0,length_1=possibleCenters.length;index<length_1;index++){var center=possibleCenters[index];// Look for about the same center and module size:
if(center.aboutEquals(estimatedModuleSize,centerI,centerJ)){possibleCenters[index]=center.combineEstimate(centerI,centerJ,estimatedModuleSize);found=true;break;}}if(!found){var point=new FinderPattern$1(centerJ,centerI,estimatedModuleSize);possibleCenters.push(point);if(this.resultPointCallback!==null&&this.resultPointCallback!==undefined){this.resultPointCallback.foundPossibleResultPoint(point);}}return true;}}return false;};/**
       * @return number of rows we could safely skip during scanning, based on the first
       *         two finder patterns that have been located. In some cases their position will
       *         allow us to infer that the third pattern must lie below a certain point farther
       *         down in the image.
       */FinderPatternFinder.prototype.findRowSkip=function(){var e_1,_a;var max=this.possibleCenters.length;if(max<=1){return 0;}var firstConfirmedCenter=null;try{for(var _b=__values$p(this.possibleCenters),_c=_b.next();!_c.done;_c=_b.next()){var center=_c.value;if(center.getCount()>=FinderPatternFinder.CENTER_QUORUM){if(firstConfirmedCenter==null){firstConfirmedCenter=center;}else{// We have two confirmed centers
// How far down can we skip before resuming looking for the next
// pattern? In the worst case, only the difference between the
// difference in the x / y coordinates of the two centers.
// This is the case where you find top left last.
this.hasSkipped=true;return(/*(int) */Math.floor((Math.abs(firstConfirmedCenter.getX()-center.getX())-Math.abs(firstConfirmedCenter.getY()-center.getY()))/2));}}}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(_c&&!_c.done&&(_a=_b.return))_a.call(_b);}finally{if(e_1)throw e_1.error;}}return 0;};/**
       * @return true iff we have found at least 3 finder patterns that have been detected
       *         at least {@link #CENTER_QUORUM} times each, and, the estimated module size of the
       *         candidates is "pretty similar"
       */FinderPatternFinder.prototype.haveMultiplyConfirmedCenters=function(){var e_2,_a,e_3,_b;var confirmedCount=0;var totalModuleSize=0.0;var max=this.possibleCenters.length;try{for(var _c=__values$p(this.possibleCenters),_d=_c.next();!_d.done;_d=_c.next()){var pattern=_d.value;if(pattern.getCount()>=FinderPatternFinder.CENTER_QUORUM){confirmedCount++;totalModuleSize+=pattern.getEstimatedModuleSize();}}}catch(e_2_1){e_2={error:e_2_1};}finally{try{if(_d&&!_d.done&&(_a=_c.return))_a.call(_c);}finally{if(e_2)throw e_2.error;}}if(confirmedCount<3){return false;}// OK, we have at least 3 confirmed centers, but, it's possible that one is a "false positive"
// and that we need to keep looking. We detect this by asking if the estimated module sizes
// vary too much. We arbitrarily say that when the total deviation from average exceeds
// 5% of the total module size estimates, it's too much.
var average=totalModuleSize/max;var totalDeviation=0.0;try{for(var _e=__values$p(this.possibleCenters),_f=_e.next();!_f.done;_f=_e.next()){var pattern=_f.value;totalDeviation+=Math.abs(pattern.getEstimatedModuleSize()-average);}}catch(e_3_1){e_3={error:e_3_1};}finally{try{if(_f&&!_f.done&&(_b=_e.return))_b.call(_e);}finally{if(e_3)throw e_3.error;}}return totalDeviation<=0.05*totalModuleSize;};/**
       * @return the 3 best {@link FinderPattern}s from our list of candidates. The "best" are
       *         those that have been detected at least {@link #CENTER_QUORUM} times, and whose module
       *         size differs from the average among those patterns the least
       * @throws NotFoundException if 3 such finder patterns do not exist
       */FinderPatternFinder.prototype.selectBestPatterns=function(){var e_4,_a,e_5,_b;var startSize=this.possibleCenters.length;if(startSize<3){// Couldn't find enough finder patterns
throw new NotFoundException();}var possibleCenters=this.possibleCenters;var average;// Filter outlier possibilities whose module size is too different
if(startSize>3){// But we can only afford to do so if we have at least 4 possibilities to choose from
var totalModuleSize=0.0;var square=0.0;try{for(var _c=__values$p(this.possibleCenters),_d=_c.next();!_d.done;_d=_c.next()){var center=_d.value;var size=center.getEstimatedModuleSize();totalModuleSize+=size;square+=size*size;}}catch(e_4_1){e_4={error:e_4_1};}finally{try{if(_d&&!_d.done&&(_a=_c.return))_a.call(_c);}finally{if(e_4)throw e_4.error;}}average=totalModuleSize/startSize;var stdDev=Math.sqrt(square/startSize-average*average);possibleCenters.sort(/**
               * <p>Orders by furthest from average</p>
               */ // FurthestFromAverageComparator implements Comparator<FinderPattern>
function(center1,center2){var dA=Math.abs(center2.getEstimatedModuleSize()-average);var dB=Math.abs(center1.getEstimatedModuleSize()-average);return dA<dB?-1:dA>dB?1:0;});var limit=Math.max(0.2*average,stdDev);for(var i=0;i<possibleCenters.length&&possibleCenters.length>3;i++){var pattern=possibleCenters[i];if(Math.abs(pattern.getEstimatedModuleSize()-average)>limit){possibleCenters.splice(i,1);i--;}}}if(possibleCenters.length>3){// Throw away all but those first size candidate points we found.
var totalModuleSize=0.0;try{for(var possibleCenters_1=__values$p(possibleCenters),possibleCenters_1_1=possibleCenters_1.next();!possibleCenters_1_1.done;possibleCenters_1_1=possibleCenters_1.next()){var possibleCenter=possibleCenters_1_1.value;totalModuleSize+=possibleCenter.getEstimatedModuleSize();}}catch(e_5_1){e_5={error:e_5_1};}finally{try{if(possibleCenters_1_1&&!possibleCenters_1_1.done&&(_b=possibleCenters_1.return))_b.call(possibleCenters_1);}finally{if(e_5)throw e_5.error;}}average=totalModuleSize/possibleCenters.length;possibleCenters.sort(/**
               * <p>Orders by {@link FinderPattern#getCount()}, descending.</p>
               */ // CenterComparator implements Comparator<FinderPattern>
function(center1,center2){if(center2.getCount()===center1.getCount()){var dA=Math.abs(center2.getEstimatedModuleSize()-average);var dB=Math.abs(center1.getEstimatedModuleSize()-average);return dA<dB?1:dA>dB?-1:0;}else{return center2.getCount()-center1.getCount();}});possibleCenters.splice(3);// this is not realy necessary as we only return first 3 anyway
}return[possibleCenters[0],possibleCenters[1],possibleCenters[2]];};FinderPatternFinder.CENTER_QUORUM=2;FinderPatternFinder.MIN_SKIP=3;// 1 pixel/module times 3 modules/center
FinderPatternFinder.MAX_MODULES=57;// support up to version 10 for mobile clients
return FinderPatternFinder;}();/*
   * Copyright 2007 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /*import java.util.Map;*/ /**
   * <p>Encapsulates logic that can detect a QR Code in an image, even if the QR Code
   * is rotated or skewed, or partially obscured.</p>
   *
   * @author Sean Owen
   */var Detector$2=/** @class */function(){function Detector(image){this.image=image;}Detector.prototype.getImage=function(){return this.image;};Detector.prototype.getResultPointCallback=function(){return this.resultPointCallback;};/**
       * <p>Detects a QR Code in an image.</p>
       *
       * @return {@link DetectorResult} encapsulating results of detecting a QR Code
       * @throws NotFoundException if QR Code cannot be found
       * @throws FormatException if a QR Code cannot be decoded
       */ // public detect(): DetectorResult /*throws NotFoundException, FormatException*/ {
//   return detect(null)
// }
/**
       * <p>Detects a QR Code in an image.</p>
       *
       * @param hints optional hints to detector
       * @return {@link DetectorResult} encapsulating results of detecting a QR Code
       * @throws NotFoundException if QR Code cannot be found
       * @throws FormatException if a QR Code cannot be decoded
       */Detector.prototype.detect=function(hints){this.resultPointCallback=hints===null||hints===undefined?null:/*(ResultPointCallback) */hints.get(DecodeHintType$1.NEED_RESULT_POINT_CALLBACK);var finder=new FinderPatternFinder(this.image,this.resultPointCallback);var info=finder.find(hints);return this.processFinderPatternInfo(info);};Detector.prototype.processFinderPatternInfo=function(info){var topLeft=info.getTopLeft();var topRight=info.getTopRight();var bottomLeft=info.getBottomLeft();var moduleSize=this.calculateModuleSize(topLeft,topRight,bottomLeft);if(moduleSize<1.0){throw new NotFoundException('No pattern found in proccess finder.');}var dimension=Detector.computeDimension(topLeft,topRight,bottomLeft,moduleSize);var provisionalVersion=Version$1.getProvisionalVersionForDimension(dimension);var modulesBetweenFPCenters=provisionalVersion.getDimensionForVersion()-7;var alignmentPattern=null;// Anything above version 1 has an alignment pattern
if(provisionalVersion.getAlignmentPatternCenters().length>0){// Guess where a "bottom right" finder pattern would have been
var bottomRightX=topRight.getX()-topLeft.getX()+bottomLeft.getX();var bottomRightY=topRight.getY()-topLeft.getY()+bottomLeft.getY();// Estimate that alignment pattern is closer by 3 modules
// from "bottom right" to known top left location
var correctionToTopLeft=1.0-3.0/modulesBetweenFPCenters;var estAlignmentX=/*(int) */Math.floor(topLeft.getX()+correctionToTopLeft*(bottomRightX-topLeft.getX()));var estAlignmentY=/*(int) */Math.floor(topLeft.getY()+correctionToTopLeft*(bottomRightY-topLeft.getY()));// Kind of arbitrary -- expand search radius before giving up
for(var i=4;i<=16;i<<=1){try{alignmentPattern=this.findAlignmentInRegion(moduleSize,estAlignmentX,estAlignmentY,i);break;}catch(re/*NotFoundException*/){if(!(re instanceof NotFoundException)){throw re;}// try next round
}}// If we didn't find alignment pattern... well try anyway without it
}var transform=Detector.createTransform(topLeft,topRight,bottomLeft,alignmentPattern,dimension);var bits=Detector.sampleGrid(this.image,transform,dimension);var points;if(alignmentPattern===null){points=[bottomLeft,topLeft,topRight];}else{points=[bottomLeft,topLeft,topRight,alignmentPattern];}return new DetectorResult(bits,points);};Detector.createTransform=function(topLeft,topRight,bottomLeft,alignmentPattern,dimension/*int*/){var dimMinusThree=dimension-3.5;var bottomRightX;/*float*/var bottomRightY;/*float*/var sourceBottomRightX;/*float*/var sourceBottomRightY;/*float*/if(alignmentPattern!==null){bottomRightX=alignmentPattern.getX();bottomRightY=alignmentPattern.getY();sourceBottomRightX=dimMinusThree-3.0;sourceBottomRightY=sourceBottomRightX;}else{// Don't have an alignment pattern, just make up the bottom-right point
bottomRightX=topRight.getX()-topLeft.getX()+bottomLeft.getX();bottomRightY=topRight.getY()-topLeft.getY()+bottomLeft.getY();sourceBottomRightX=dimMinusThree;sourceBottomRightY=dimMinusThree;}return PerspectiveTransform.quadrilateralToQuadrilateral(3.5,3.5,dimMinusThree,3.5,sourceBottomRightX,sourceBottomRightY,3.5,dimMinusThree,topLeft.getX(),topLeft.getY(),topRight.getX(),topRight.getY(),bottomRightX,bottomRightY,bottomLeft.getX(),bottomLeft.getY());};Detector.sampleGrid=function(image,transform,dimension/*int*/){var sampler=GridSamplerInstance.getInstance();return sampler.sampleGridWithTransform(image,dimension,dimension,transform);};/**
       * <p>Computes the dimension (number of modules on a size) of the QR Code based on the position
       * of the finder patterns and estimated module size.</p>
       */Detector.computeDimension=function(topLeft,topRight,bottomLeft,moduleSize/*float*/){var tltrCentersDimension=MathUtils.round(ResultPoint.distance(topLeft,topRight)/moduleSize);var tlblCentersDimension=MathUtils.round(ResultPoint.distance(topLeft,bottomLeft)/moduleSize);var dimension=Math.floor((tltrCentersDimension+tlblCentersDimension)/2)+7;switch(dimension&0x03){// mod 4
case 0:dimension++;break;// 1? do nothing
case 2:dimension--;break;case 3:throw new NotFoundException('Dimensions could be not found.');}return dimension;};/**
       * <p>Computes an average estimated module size based on estimated derived from the positions
       * of the three finder patterns.</p>
       *
       * @param topLeft detected top-left finder pattern center
       * @param topRight detected top-right finder pattern center
       * @param bottomLeft detected bottom-left finder pattern center
       * @return estimated module size
       */Detector.prototype.calculateModuleSize=function(topLeft,topRight,bottomLeft){// Take the average
return(this.calculateModuleSizeOneWay(topLeft,topRight)+this.calculateModuleSizeOneWay(topLeft,bottomLeft))/2.0;};/**
       * <p>Estimates module size based on two finder patterns -- it uses
       * {@link #sizeOfBlackWhiteBlackRunBothWays(int, int, int, int)} to figure the
       * width of each, measuring along the axis between their centers.</p>
       */Detector.prototype.calculateModuleSizeOneWay=function(pattern,otherPattern){var moduleSizeEst1=this.sizeOfBlackWhiteBlackRunBothWays(/*(int) */Math.floor(pattern.getX()),/*(int) */Math.floor(pattern.getY()),/*(int) */Math.floor(otherPattern.getX()),/*(int) */Math.floor(otherPattern.getY()));var moduleSizeEst2=this.sizeOfBlackWhiteBlackRunBothWays(/*(int) */Math.floor(otherPattern.getX()),/*(int) */Math.floor(otherPattern.getY()),/*(int) */Math.floor(pattern.getX()),/*(int) */Math.floor(pattern.getY()));if(isNaN(moduleSizeEst1)){return moduleSizeEst2/7.0;}if(isNaN(moduleSizeEst2)){return moduleSizeEst1/7.0;}// Average them, and divide by 7 since we've counted the width of 3 black modules,
// and 1 white and 1 black module on either side. Ergo, divide sum by 14.
return(moduleSizeEst1+moduleSizeEst2)/14.0;};/**
       * See {@link #sizeOfBlackWhiteBlackRun(int, int, int, int)}; computes the total width of
       * a finder pattern by looking for a black-white-black run from the center in the direction
       * of another point (another finder pattern center), and in the opposite direction too.
       */Detector.prototype.sizeOfBlackWhiteBlackRunBothWays=function(fromX/*int*/,fromY/*int*/,toX/*int*/,toY/*int*/){var result=this.sizeOfBlackWhiteBlackRun(fromX,fromY,toX,toY);// Now count other way -- don't run off image though of course
var scale=1.0;var otherToX=fromX-(toX-fromX);if(otherToX<0){scale=fromX/(/*(float) */fromX-otherToX);otherToX=0;}else if(otherToX>=this.image.getWidth()){scale=(this.image.getWidth()-1-fromX)/(/*(float) */otherToX-fromX);otherToX=this.image.getWidth()-1;}var otherToY=/*(int) */Math.floor(fromY-(toY-fromY)*scale);scale=1.0;if(otherToY<0){scale=fromY/(/*(float) */fromY-otherToY);otherToY=0;}else if(otherToY>=this.image.getHeight()){scale=(this.image.getHeight()-1-fromY)/(/*(float) */otherToY-fromY);otherToY=this.image.getHeight()-1;}otherToX=/*(int) */Math.floor(fromX+(otherToX-fromX)*scale);result+=this.sizeOfBlackWhiteBlackRun(fromX,fromY,otherToX,otherToY);// Middle pixel is double-counted this way; subtract 1
return result-1.0;};/**
       * <p>This method traces a line from a point in the image, in the direction towards another point.
       * It begins in a black region, and keeps going until it finds white, then black, then white again.
       * It reports the distance from the start to this point.</p>
       *
       * <p>This is used when figuring out how wide a finder pattern is, when the finder pattern
       * may be skewed or rotated.</p>
       */Detector.prototype.sizeOfBlackWhiteBlackRun=function(fromX/*int*/,fromY/*int*/,toX/*int*/,toY/*int*/){// Mild variant of Bresenham's algorithm
// see http://en.wikipedia.org/wiki/Bresenham's_line_algorithm
var steep=Math.abs(toY-fromY)>Math.abs(toX-fromX);if(steep){var temp=fromX;fromX=fromY;fromY=temp;temp=toX;toX=toY;toY=temp;}var dx=Math.abs(toX-fromX);var dy=Math.abs(toY-fromY);var error=-dx/2;var xstep=fromX<toX?1:-1;var ystep=fromY<toY?1:-1;// In black pixels, looking for white, first or second time.
var state=0;// Loop up until x == toX, but not beyond
var xLimit=toX+xstep;for(var x=fromX,y=fromY;x!==xLimit;x+=xstep){var realX=steep?y:x;var realY=steep?x:y;// Does current pixel mean we have moved white to black or vice versa?
// Scanning black in state 0,2 and white in state 1, so if we find the wrong
// color, advance to next state or end if we are in state 2 already
if(state===1===this.image.get(realX,realY)){if(state===2){return MathUtils.distance(x,y,fromX,fromY);}state++;}error+=dy;if(error>0){if(y===toY){break;}y+=ystep;error-=dx;}}// Found black-white-black; give the benefit of the doubt that the next pixel outside the image
// is "white" so this last point at (toX+xStep,toY) is the right ending. This is really a
// small approximation; (toX+xStep,toY+yStep) might be really correct. Ignore this.
if(state===2){return MathUtils.distance(toX+xstep,toY,fromX,fromY);}// else we didn't find even black-white-black; no estimate is really possible
return NaN;};/**
       * <p>Attempts to locate an alignment pattern in a limited region of the image, which is
       * guessed to contain it. This method uses {@link AlignmentPattern}.</p>
       *
       * @param overallEstModuleSize estimated module size so far
       * @param estAlignmentX x coordinate of center of area probably containing alignment pattern
       * @param estAlignmentY y coordinate of above
       * @param allowanceFactor number of pixels in all directions to search from the center
       * @return {@link AlignmentPattern} if found, or null otherwise
       * @throws NotFoundException if an unexpected error occurs during detection
       */Detector.prototype.findAlignmentInRegion=function(overallEstModuleSize/*float*/,estAlignmentX/*int*/,estAlignmentY/*int*/,allowanceFactor/*float*/){// Look for an alignment pattern (3 modules in size) around where it
// should be
var allowance=/*(int) */Math.floor(allowanceFactor*overallEstModuleSize);var alignmentAreaLeftX=Math.max(0,estAlignmentX-allowance);var alignmentAreaRightX=Math.min(this.image.getWidth()-1,estAlignmentX+allowance);if(alignmentAreaRightX-alignmentAreaLeftX<overallEstModuleSize*3){throw new NotFoundException('Alignment top exceeds estimated module size.');}var alignmentAreaTopY=Math.max(0,estAlignmentY-allowance);var alignmentAreaBottomY=Math.min(this.image.getHeight()-1,estAlignmentY+allowance);if(alignmentAreaBottomY-alignmentAreaTopY<overallEstModuleSize*3){throw new NotFoundException('Alignment bottom exceeds estimated module size.');}var alignmentFinder=new AlignmentPatternFinder(this.image,alignmentAreaLeftX,alignmentAreaTopY,alignmentAreaRightX-alignmentAreaLeftX,alignmentAreaBottomY-alignmentAreaTopY,overallEstModuleSize,this.resultPointCallback);return alignmentFinder.find();};return Detector;}();/*
   * Copyright 2007 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /*import java.util.List;*/ /*import java.util.Map;*/ /**
   * This implementation can detect and decode QR Codes in an image.
   *
   * @author Sean Owen
   */var QRCodeReader=/** @class */function(){function QRCodeReader(){this.decoder=new Decoder$2();}QRCodeReader.prototype.getDecoder=function(){return this.decoder;};/**
       * Locates and decodes a QR code in an image.
       *
       * @return a representing: string the content encoded by the QR code
       * @throws NotFoundException if a QR code cannot be found
       * @throws FormatException if a QR code cannot be decoded
       * @throws ChecksumException if error correction fails
       */ /*@Override*/ // public decode(image: BinaryBitmap): Result /*throws NotFoundException, ChecksumException, FormatException */ {
//   return this.decode(image, null)
// }
/*@Override*/QRCodeReader.prototype.decode=function(image,hints){var decoderResult;var points;if(hints!==undefined&&hints!==null&&undefined!==hints.get(DecodeHintType$1.PURE_BARCODE)){var bits=QRCodeReader.extractPureBits(image.getBlackMatrix());decoderResult=this.decoder.decodeBitMatrix(bits,hints);points=QRCodeReader.NO_POINTS;}else{var detectorResult=new Detector$2(image.getBlackMatrix()).detect(hints);decoderResult=this.decoder.decodeBitMatrix(detectorResult.getBits(),hints);points=detectorResult.getPoints();}// If the code was mirrored: swap the bottom-left and the top-right points.
if(decoderResult.getOther()instanceof QRCodeDecoderMetaData){decoderResult.getOther().applyMirroredCorrection(points);}var result=new Result(decoderResult.getText(),decoderResult.getRawBytes(),undefined,points,BarcodeFormat$1.QR_CODE,undefined);var byteSegments=decoderResult.getByteSegments();if(byteSegments!==null){result.putMetadata(ResultMetadataType$1.BYTE_SEGMENTS,byteSegments);}var ecLevel=decoderResult.getECLevel();if(ecLevel!==null){result.putMetadata(ResultMetadataType$1.ERROR_CORRECTION_LEVEL,ecLevel);}if(decoderResult.hasStructuredAppend()){result.putMetadata(ResultMetadataType$1.STRUCTURED_APPEND_SEQUENCE,decoderResult.getStructuredAppendSequenceNumber());result.putMetadata(ResultMetadataType$1.STRUCTURED_APPEND_PARITY,decoderResult.getStructuredAppendParity());}return result;};/*@Override*/QRCodeReader.prototype.reset=function(){// do nothing
};/**
       * This method detects a code in a "pure" image -- that is, pure monochrome image
       * which contains only an unrotated, unskewed, image of a code, with some white border
       * around it. This is a specialized method that works exceptionally fast in this special
       * case.
       *
       * @see com.google.zxing.datamatrix.DataMatrixReader#extractPureBits(BitMatrix)
       */QRCodeReader.extractPureBits=function(image){var leftTopBlack=image.getTopLeftOnBit();var rightBottomBlack=image.getBottomRightOnBit();if(leftTopBlack===null||rightBottomBlack===null){throw new NotFoundException();}var moduleSize=this.moduleSize(leftTopBlack,image);var top=leftTopBlack[1];var bottom=rightBottomBlack[1];var left=leftTopBlack[0];var right=rightBottomBlack[0];// Sanity check!
if(left>=right||top>=bottom){throw new NotFoundException();}if(bottom-top!==right-left){// Special case, where bottom-right module wasn't black so we found something else in the last row
// Assume it's a square, so use height as the width
right=left+(bottom-top);if(right>=image.getWidth()){// Abort if that would not make sense -- off image
throw new NotFoundException();}}var matrixWidth=Math.round((right-left+1)/moduleSize);var matrixHeight=Math.round((bottom-top+1)/moduleSize);if(matrixWidth<=0||matrixHeight<=0){throw new NotFoundException();}if(matrixHeight!==matrixWidth){// Only possibly decode square regions
throw new NotFoundException();}// Push in the "border" by half the module width so that we start
// sampling in the middle of the module. Just in case the image is a
// little off, this will help recover.
var nudge=/*(int) */Math.floor(moduleSize/2.0);top+=nudge;left+=nudge;// But careful that this does not sample off the edge
// "right" is the farthest-right valid pixel location -- right+1 is not necessarily
// This is positive by how much the inner x loop below would be too large
var nudgedTooFarRight=left+/*(int) */Math.floor((matrixWidth-1)*moduleSize)-right;if(nudgedTooFarRight>0){if(nudgedTooFarRight>nudge){// Neither way fits; abort
throw new NotFoundException();}left-=nudgedTooFarRight;}// See logic above
var nudgedTooFarDown=top+/*(int) */Math.floor((matrixHeight-1)*moduleSize)-bottom;if(nudgedTooFarDown>0){if(nudgedTooFarDown>nudge){// Neither way fits; abort
throw new NotFoundException();}top-=nudgedTooFarDown;}// Now just read off the bits
var bits=new BitMatrix(matrixWidth,matrixHeight);for(var y=0;y<matrixHeight;y++){var iOffset=top+/*(int) */Math.floor(y*moduleSize);for(var x=0;x<matrixWidth;x++){if(image.get(left+/*(int) */Math.floor(x*moduleSize),iOffset)){bits.set(x,y);}}}return bits;};QRCodeReader.moduleSize=function(leftTopBlack,image){var height=image.getHeight();var width=image.getWidth();var x=leftTopBlack[0];var y=leftTopBlack[1];var inBlack=true;var transitions=0;while(x<width&&y<height){if(inBlack!==image.get(x,y)){if(++transitions===5){break;}inBlack=!inBlack;}x++;y++;}if(x===width||y===height){throw new NotFoundException();}return(x-leftTopBlack[0])/7.0;};QRCodeReader.NO_POINTS=new Array();return QRCodeReader;}();/*
  * Copyright 2009 ZXing authors
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */ // package com.google.zxing.pdf417;
var __values$q=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};/**
   * @author SITA Lab (kevin.osullivan@sita.aero)
   * @author Guenther Grau
   */var PDF417Common=/** @class */function(){function PDF417Common(){}PDF417Common.prototype.PDF417Common=function(){};/**
       * @param moduleBitCount values to sum
       * @return sum of values
       * @deprecated call {@link MathUtils#sum(int[])}
       */ // @Deprecated
PDF417Common.getBitCountSum=function(moduleBitCount){return MathUtils.sum(moduleBitCount);};PDF417Common.toIntArray=function(list){var e_1,_a;if(list==null||!list.length){return PDF417Common.EMPTY_INT_ARRAY;}var result=new Int32Array(list.length);var i=0;try{for(var list_1=__values$q(list),list_1_1=list_1.next();!list_1_1.done;list_1_1=list_1.next()){var integer=list_1_1.value;result[i++]=integer;}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(list_1_1&&!list_1_1.done&&(_a=list_1.return))_a.call(list_1);}finally{if(e_1)throw e_1.error;}}return result;};/**
       * @param symbol encoded symbol to translate to a codeword
       * @return the codeword corresponding to the symbol.
       */PDF417Common.getCodeword=function(symbol/*int*/){var i=Arrays.binarySearch(PDF417Common.SYMBOL_TABLE,symbol&0x3FFFF);if(i<0){return-1;}return(PDF417Common.CODEWORD_TABLE[i]-1)%PDF417Common.NUMBER_OF_CODEWORDS;};PDF417Common.NUMBER_OF_CODEWORDS=929;// Maximum Codewords (Data + Error).
PDF417Common.MAX_CODEWORDS_IN_BARCODE=PDF417Common.NUMBER_OF_CODEWORDS-1;PDF417Common.MIN_ROWS_IN_BARCODE=3;PDF417Common.MAX_ROWS_IN_BARCODE=90;// One left row indication column + max 30 data columns + one right row indicator column
// public static /*final*/ MAX_CODEWORDS_IN_ROW: /*int*/ number = 32;
PDF417Common.MODULES_IN_CODEWORD=17;PDF417Common.MODULES_IN_STOP_PATTERN=18;PDF417Common.BARS_IN_MODULE=8;PDF417Common.EMPTY_INT_ARRAY=new Int32Array([]);/**
       * The sorted table of all possible symbols. Extracted from the PDF417
       * specification. The index of a symbol in this table corresponds to the
       * index into the codeword table.
       */PDF417Common.SYMBOL_TABLE=Int32Array.from([0x1025e,0x1027a,0x1029e,0x102bc,0x102f2,0x102f4,0x1032e,0x1034e,0x1035c,0x10396,0x103a6,0x103ac,0x10422,0x10428,0x10436,0x10442,0x10444,0x10448,0x10450,0x1045e,0x10466,0x1046c,0x1047a,0x10482,0x1049e,0x104a0,0x104bc,0x104c6,0x104d8,0x104ee,0x104f2,0x104f4,0x10504,0x10508,0x10510,0x1051e,0x10520,0x1053c,0x10540,0x10578,0x10586,0x1058c,0x10598,0x105b0,0x105be,0x105ce,0x105dc,0x105e2,0x105e4,0x105e8,0x105f6,0x1062e,0x1064e,0x1065c,0x1068e,0x1069c,0x106b8,0x106de,0x106fa,0x10716,0x10726,0x1072c,0x10746,0x1074c,0x10758,0x1076e,0x10792,0x10794,0x107a2,0x107a4,0x107a8,0x107b6,0x10822,0x10828,0x10842,0x10848,0x10850,0x1085e,0x10866,0x1086c,0x1087a,0x10882,0x10884,0x10890,0x1089e,0x108a0,0x108bc,0x108c6,0x108cc,0x108d8,0x108ee,0x108f2,0x108f4,0x10902,0x10908,0x1091e,0x10920,0x1093c,0x10940,0x10978,0x10986,0x10998,0x109b0,0x109be,0x109ce,0x109dc,0x109e2,0x109e4,0x109e8,0x109f6,0x10a08,0x10a10,0x10a1e,0x10a20,0x10a3c,0x10a40,0x10a78,0x10af0,0x10b06,0x10b0c,0x10b18,0x10b30,0x10b3e,0x10b60,0x10b7c,0x10b8e,0x10b9c,0x10bb8,0x10bc2,0x10bc4,0x10bc8,0x10bd0,0x10bde,0x10be6,0x10bec,0x10c2e,0x10c4e,0x10c5c,0x10c62,0x10c64,0x10c68,0x10c76,0x10c8e,0x10c9c,0x10cb8,0x10cc2,0x10cc4,0x10cc8,0x10cd0,0x10cde,0x10ce6,0x10cec,0x10cfa,0x10d0e,0x10d1c,0x10d38,0x10d70,0x10d7e,0x10d82,0x10d84,0x10d88,0x10d90,0x10d9e,0x10da0,0x10dbc,0x10dc6,0x10dcc,0x10dd8,0x10dee,0x10df2,0x10df4,0x10e16,0x10e26,0x10e2c,0x10e46,0x10e58,0x10e6e,0x10e86,0x10e8c,0x10e98,0x10eb0,0x10ebe,0x10ece,0x10edc,0x10f0a,0x10f12,0x10f14,0x10f22,0x10f28,0x10f36,0x10f42,0x10f44,0x10f48,0x10f50,0x10f5e,0x10f66,0x10f6c,0x10fb2,0x10fb4,0x11022,0x11028,0x11042,0x11048,0x11050,0x1105e,0x1107a,0x11082,0x11084,0x11090,0x1109e,0x110a0,0x110bc,0x110c6,0x110cc,0x110d8,0x110ee,0x110f2,0x110f4,0x11102,0x1111e,0x11120,0x1113c,0x11140,0x11178,0x11186,0x11198,0x111b0,0x111be,0x111ce,0x111dc,0x111e2,0x111e4,0x111e8,0x111f6,0x11208,0x1121e,0x11220,0x11278,0x112f0,0x1130c,0x11330,0x1133e,0x11360,0x1137c,0x1138e,0x1139c,0x113b8,0x113c2,0x113c8,0x113d0,0x113de,0x113e6,0x113ec,0x11408,0x11410,0x1141e,0x11420,0x1143c,0x11440,0x11478,0x114f0,0x115e0,0x1160c,0x11618,0x11630,0x1163e,0x11660,0x1167c,0x116c0,0x116f8,0x1171c,0x11738,0x11770,0x1177e,0x11782,0x11784,0x11788,0x11790,0x1179e,0x117a0,0x117bc,0x117c6,0x117cc,0x117d8,0x117ee,0x1182e,0x11834,0x1184e,0x1185c,0x11862,0x11864,0x11868,0x11876,0x1188e,0x1189c,0x118b8,0x118c2,0x118c8,0x118d0,0x118de,0x118e6,0x118ec,0x118fa,0x1190e,0x1191c,0x11938,0x11970,0x1197e,0x11982,0x11984,0x11990,0x1199e,0x119a0,0x119bc,0x119c6,0x119cc,0x119d8,0x119ee,0x119f2,0x119f4,0x11a0e,0x11a1c,0x11a38,0x11a70,0x11a7e,0x11ae0,0x11afc,0x11b08,0x11b10,0x11b1e,0x11b20,0x11b3c,0x11b40,0x11b78,0x11b8c,0x11b98,0x11bb0,0x11bbe,0x11bce,0x11bdc,0x11be2,0x11be4,0x11be8,0x11bf6,0x11c16,0x11c26,0x11c2c,0x11c46,0x11c4c,0x11c58,0x11c6e,0x11c86,0x11c98,0x11cb0,0x11cbe,0x11cce,0x11cdc,0x11ce2,0x11ce4,0x11ce8,0x11cf6,0x11d06,0x11d0c,0x11d18,0x11d30,0x11d3e,0x11d60,0x11d7c,0x11d8e,0x11d9c,0x11db8,0x11dc4,0x11dc8,0x11dd0,0x11dde,0x11de6,0x11dec,0x11dfa,0x11e0a,0x11e12,0x11e14,0x11e22,0x11e24,0x11e28,0x11e36,0x11e42,0x11e44,0x11e50,0x11e5e,0x11e66,0x11e6c,0x11e82,0x11e84,0x11e88,0x11e90,0x11e9e,0x11ea0,0x11ebc,0x11ec6,0x11ecc,0x11ed8,0x11eee,0x11f1a,0x11f2e,0x11f32,0x11f34,0x11f4e,0x11f5c,0x11f62,0x11f64,0x11f68,0x11f76,0x12048,0x1205e,0x12082,0x12084,0x12090,0x1209e,0x120a0,0x120bc,0x120d8,0x120f2,0x120f4,0x12108,0x1211e,0x12120,0x1213c,0x12140,0x12178,0x12186,0x12198,0x121b0,0x121be,0x121e2,0x121e4,0x121e8,0x121f6,0x12204,0x12210,0x1221e,0x12220,0x12278,0x122f0,0x12306,0x1230c,0x12330,0x1233e,0x12360,0x1237c,0x1238e,0x1239c,0x123b8,0x123c2,0x123c8,0x123d0,0x123e6,0x123ec,0x1241e,0x12420,0x1243c,0x124f0,0x125e0,0x12618,0x1263e,0x12660,0x1267c,0x126c0,0x126f8,0x12738,0x12770,0x1277e,0x12782,0x12784,0x12790,0x1279e,0x127a0,0x127bc,0x127c6,0x127cc,0x127d8,0x127ee,0x12820,0x1283c,0x12840,0x12878,0x128f0,0x129e0,0x12bc0,0x12c18,0x12c30,0x12c3e,0x12c60,0x12c7c,0x12cc0,0x12cf8,0x12df0,0x12e1c,0x12e38,0x12e70,0x12e7e,0x12ee0,0x12efc,0x12f04,0x12f08,0x12f10,0x12f20,0x12f3c,0x12f40,0x12f78,0x12f86,0x12f8c,0x12f98,0x12fb0,0x12fbe,0x12fce,0x12fdc,0x1302e,0x1304e,0x1305c,0x13062,0x13068,0x1308e,0x1309c,0x130b8,0x130c2,0x130c8,0x130d0,0x130de,0x130ec,0x130fa,0x1310e,0x13138,0x13170,0x1317e,0x13182,0x13184,0x13190,0x1319e,0x131a0,0x131bc,0x131c6,0x131cc,0x131d8,0x131f2,0x131f4,0x1320e,0x1321c,0x13270,0x1327e,0x132e0,0x132fc,0x13308,0x1331e,0x13320,0x1333c,0x13340,0x13378,0x13386,0x13398,0x133b0,0x133be,0x133ce,0x133dc,0x133e2,0x133e4,0x133e8,0x133f6,0x1340e,0x1341c,0x13438,0x13470,0x1347e,0x134e0,0x134fc,0x135c0,0x135f8,0x13608,0x13610,0x1361e,0x13620,0x1363c,0x13640,0x13678,0x136f0,0x1370c,0x13718,0x13730,0x1373e,0x13760,0x1377c,0x1379c,0x137b8,0x137c2,0x137c4,0x137c8,0x137d0,0x137de,0x137e6,0x137ec,0x13816,0x13826,0x1382c,0x13846,0x1384c,0x13858,0x1386e,0x13874,0x13886,0x13898,0x138b0,0x138be,0x138ce,0x138dc,0x138e2,0x138e4,0x138e8,0x13906,0x1390c,0x13930,0x1393e,0x13960,0x1397c,0x1398e,0x1399c,0x139b8,0x139c8,0x139d0,0x139de,0x139e6,0x139ec,0x139fa,0x13a06,0x13a0c,0x13a18,0x13a30,0x13a3e,0x13a60,0x13a7c,0x13ac0,0x13af8,0x13b0e,0x13b1c,0x13b38,0x13b70,0x13b7e,0x13b88,0x13b90,0x13b9e,0x13ba0,0x13bbc,0x13bcc,0x13bd8,0x13bee,0x13bf2,0x13bf4,0x13c12,0x13c14,0x13c22,0x13c24,0x13c28,0x13c36,0x13c42,0x13c48,0x13c50,0x13c5e,0x13c66,0x13c6c,0x13c82,0x13c84,0x13c90,0x13c9e,0x13ca0,0x13cbc,0x13cc6,0x13ccc,0x13cd8,0x13cee,0x13d02,0x13d04,0x13d08,0x13d10,0x13d1e,0x13d20,0x13d3c,0x13d40,0x13d78,0x13d86,0x13d8c,0x13d98,0x13db0,0x13dbe,0x13dce,0x13ddc,0x13de4,0x13de8,0x13df6,0x13e1a,0x13e2e,0x13e32,0x13e34,0x13e4e,0x13e5c,0x13e62,0x13e64,0x13e68,0x13e76,0x13e8e,0x13e9c,0x13eb8,0x13ec2,0x13ec4,0x13ec8,0x13ed0,0x13ede,0x13ee6,0x13eec,0x13f26,0x13f2c,0x13f3a,0x13f46,0x13f4c,0x13f58,0x13f6e,0x13f72,0x13f74,0x14082,0x1409e,0x140a0,0x140bc,0x14104,0x14108,0x14110,0x1411e,0x14120,0x1413c,0x14140,0x14178,0x1418c,0x14198,0x141b0,0x141be,0x141e2,0x141e4,0x141e8,0x14208,0x14210,0x1421e,0x14220,0x1423c,0x14240,0x14278,0x142f0,0x14306,0x1430c,0x14318,0x14330,0x1433e,0x14360,0x1437c,0x1438e,0x143c2,0x143c4,0x143c8,0x143d0,0x143e6,0x143ec,0x14408,0x14410,0x1441e,0x14420,0x1443c,0x14440,0x14478,0x144f0,0x145e0,0x1460c,0x14618,0x14630,0x1463e,0x14660,0x1467c,0x146c0,0x146f8,0x1471c,0x14738,0x14770,0x1477e,0x14782,0x14784,0x14788,0x14790,0x147a0,0x147bc,0x147c6,0x147cc,0x147d8,0x147ee,0x14810,0x14820,0x1483c,0x14840,0x14878,0x148f0,0x149e0,0x14bc0,0x14c30,0x14c3e,0x14c60,0x14c7c,0x14cc0,0x14cf8,0x14df0,0x14e38,0x14e70,0x14e7e,0x14ee0,0x14efc,0x14f04,0x14f08,0x14f10,0x14f1e,0x14f20,0x14f3c,0x14f40,0x14f78,0x14f86,0x14f8c,0x14f98,0x14fb0,0x14fce,0x14fdc,0x15020,0x15040,0x15078,0x150f0,0x151e0,0x153c0,0x15860,0x1587c,0x158c0,0x158f8,0x159f0,0x15be0,0x15c70,0x15c7e,0x15ce0,0x15cfc,0x15dc0,0x15df8,0x15e08,0x15e10,0x15e20,0x15e40,0x15e78,0x15ef0,0x15f0c,0x15f18,0x15f30,0x15f60,0x15f7c,0x15f8e,0x15f9c,0x15fb8,0x1604e,0x1605c,0x1608e,0x1609c,0x160b8,0x160c2,0x160c4,0x160c8,0x160de,0x1610e,0x1611c,0x16138,0x16170,0x1617e,0x16184,0x16188,0x16190,0x1619e,0x161a0,0x161bc,0x161c6,0x161cc,0x161d8,0x161f2,0x161f4,0x1620e,0x1621c,0x16238,0x16270,0x1627e,0x162e0,0x162fc,0x16304,0x16308,0x16310,0x1631e,0x16320,0x1633c,0x16340,0x16378,0x16386,0x1638c,0x16398,0x163b0,0x163be,0x163ce,0x163dc,0x163e2,0x163e4,0x163e8,0x163f6,0x1640e,0x1641c,0x16438,0x16470,0x1647e,0x164e0,0x164fc,0x165c0,0x165f8,0x16610,0x1661e,0x16620,0x1663c,0x16640,0x16678,0x166f0,0x16718,0x16730,0x1673e,0x16760,0x1677c,0x1678e,0x1679c,0x167b8,0x167c2,0x167c4,0x167c8,0x167d0,0x167de,0x167e6,0x167ec,0x1681c,0x16838,0x16870,0x168e0,0x168fc,0x169c0,0x169f8,0x16bf0,0x16c10,0x16c1e,0x16c20,0x16c3c,0x16c40,0x16c78,0x16cf0,0x16de0,0x16e18,0x16e30,0x16e3e,0x16e60,0x16e7c,0x16ec0,0x16ef8,0x16f1c,0x16f38,0x16f70,0x16f7e,0x16f84,0x16f88,0x16f90,0x16f9e,0x16fa0,0x16fbc,0x16fc6,0x16fcc,0x16fd8,0x17026,0x1702c,0x17046,0x1704c,0x17058,0x1706e,0x17086,0x1708c,0x17098,0x170b0,0x170be,0x170ce,0x170dc,0x170e8,0x17106,0x1710c,0x17118,0x17130,0x1713e,0x17160,0x1717c,0x1718e,0x1719c,0x171b8,0x171c2,0x171c4,0x171c8,0x171d0,0x171de,0x171e6,0x171ec,0x171fa,0x17206,0x1720c,0x17218,0x17230,0x1723e,0x17260,0x1727c,0x172c0,0x172f8,0x1730e,0x1731c,0x17338,0x17370,0x1737e,0x17388,0x17390,0x1739e,0x173a0,0x173bc,0x173cc,0x173d8,0x173ee,0x173f2,0x173f4,0x1740c,0x17418,0x17430,0x1743e,0x17460,0x1747c,0x174c0,0x174f8,0x175f0,0x1760e,0x1761c,0x17638,0x17670,0x1767e,0x176e0,0x176fc,0x17708,0x17710,0x1771e,0x17720,0x1773c,0x17740,0x17778,0x17798,0x177b0,0x177be,0x177dc,0x177e2,0x177e4,0x177e8,0x17822,0x17824,0x17828,0x17836,0x17842,0x17844,0x17848,0x17850,0x1785e,0x17866,0x1786c,0x17882,0x17884,0x17888,0x17890,0x1789e,0x178a0,0x178bc,0x178c6,0x178cc,0x178d8,0x178ee,0x178f2,0x178f4,0x17902,0x17904,0x17908,0x17910,0x1791e,0x17920,0x1793c,0x17940,0x17978,0x17986,0x1798c,0x17998,0x179b0,0x179be,0x179ce,0x179dc,0x179e2,0x179e4,0x179e8,0x179f6,0x17a04,0x17a08,0x17a10,0x17a1e,0x17a20,0x17a3c,0x17a40,0x17a78,0x17af0,0x17b06,0x17b0c,0x17b18,0x17b30,0x17b3e,0x17b60,0x17b7c,0x17b8e,0x17b9c,0x17bb8,0x17bc4,0x17bc8,0x17bd0,0x17bde,0x17be6,0x17bec,0x17c2e,0x17c32,0x17c34,0x17c4e,0x17c5c,0x17c62,0x17c64,0x17c68,0x17c76,0x17c8e,0x17c9c,0x17cb8,0x17cc2,0x17cc4,0x17cc8,0x17cd0,0x17cde,0x17ce6,0x17cec,0x17d0e,0x17d1c,0x17d38,0x17d70,0x17d82,0x17d84,0x17d88,0x17d90,0x17d9e,0x17da0,0x17dbc,0x17dc6,0x17dcc,0x17dd8,0x17dee,0x17e26,0x17e2c,0x17e3a,0x17e46,0x17e4c,0x17e58,0x17e6e,0x17e72,0x17e74,0x17e86,0x17e8c,0x17e98,0x17eb0,0x17ece,0x17edc,0x17ee2,0x17ee4,0x17ee8,0x17ef6,0x1813a,0x18172,0x18174,0x18216,0x18226,0x1823a,0x1824c,0x18258,0x1826e,0x18272,0x18274,0x18298,0x182be,0x182e2,0x182e4,0x182e8,0x182f6,0x1835e,0x1837a,0x183ae,0x183d6,0x18416,0x18426,0x1842c,0x1843a,0x18446,0x18458,0x1846e,0x18472,0x18474,0x18486,0x184b0,0x184be,0x184ce,0x184dc,0x184e2,0x184e4,0x184e8,0x184f6,0x18506,0x1850c,0x18518,0x18530,0x1853e,0x18560,0x1857c,0x1858e,0x1859c,0x185b8,0x185c2,0x185c4,0x185c8,0x185d0,0x185de,0x185e6,0x185ec,0x185fa,0x18612,0x18614,0x18622,0x18628,0x18636,0x18642,0x18650,0x1865e,0x1867a,0x18682,0x18684,0x18688,0x18690,0x1869e,0x186a0,0x186bc,0x186c6,0x186cc,0x186d8,0x186ee,0x186f2,0x186f4,0x1872e,0x1874e,0x1875c,0x18796,0x187a6,0x187ac,0x187d2,0x187d4,0x18826,0x1882c,0x1883a,0x18846,0x1884c,0x18858,0x1886e,0x18872,0x18874,0x18886,0x18898,0x188b0,0x188be,0x188ce,0x188dc,0x188e2,0x188e4,0x188e8,0x188f6,0x1890c,0x18930,0x1893e,0x18960,0x1897c,0x1898e,0x189b8,0x189c2,0x189c8,0x189d0,0x189de,0x189e6,0x189ec,0x189fa,0x18a18,0x18a30,0x18a3e,0x18a60,0x18a7c,0x18ac0,0x18af8,0x18b1c,0x18b38,0x18b70,0x18b7e,0x18b82,0x18b84,0x18b88,0x18b90,0x18b9e,0x18ba0,0x18bbc,0x18bc6,0x18bcc,0x18bd8,0x18bee,0x18bf2,0x18bf4,0x18c22,0x18c24,0x18c28,0x18c36,0x18c42,0x18c48,0x18c50,0x18c5e,0x18c66,0x18c7a,0x18c82,0x18c84,0x18c90,0x18c9e,0x18ca0,0x18cbc,0x18ccc,0x18cf2,0x18cf4,0x18d04,0x18d08,0x18d10,0x18d1e,0x18d20,0x18d3c,0x18d40,0x18d78,0x18d86,0x18d98,0x18dce,0x18de2,0x18de4,0x18de8,0x18e2e,0x18e32,0x18e34,0x18e4e,0x18e5c,0x18e62,0x18e64,0x18e68,0x18e8e,0x18e9c,0x18eb8,0x18ec2,0x18ec4,0x18ec8,0x18ed0,0x18efa,0x18f16,0x18f26,0x18f2c,0x18f46,0x18f4c,0x18f58,0x18f6e,0x18f8a,0x18f92,0x18f94,0x18fa2,0x18fa4,0x18fa8,0x18fb6,0x1902c,0x1903a,0x19046,0x1904c,0x19058,0x19072,0x19074,0x19086,0x19098,0x190b0,0x190be,0x190ce,0x190dc,0x190e2,0x190e8,0x190f6,0x19106,0x1910c,0x19130,0x1913e,0x19160,0x1917c,0x1918e,0x1919c,0x191b8,0x191c2,0x191c8,0x191d0,0x191de,0x191e6,0x191ec,0x191fa,0x19218,0x1923e,0x19260,0x1927c,0x192c0,0x192f8,0x19338,0x19370,0x1937e,0x19382,0x19384,0x19390,0x1939e,0x193a0,0x193bc,0x193c6,0x193cc,0x193d8,0x193ee,0x193f2,0x193f4,0x19430,0x1943e,0x19460,0x1947c,0x194c0,0x194f8,0x195f0,0x19638,0x19670,0x1967e,0x196e0,0x196fc,0x19702,0x19704,0x19708,0x19710,0x19720,0x1973c,0x19740,0x19778,0x19786,0x1978c,0x19798,0x197b0,0x197be,0x197ce,0x197dc,0x197e2,0x197e4,0x197e8,0x19822,0x19824,0x19842,0x19848,0x19850,0x1985e,0x19866,0x1987a,0x19882,0x19884,0x19890,0x1989e,0x198a0,0x198bc,0x198cc,0x198f2,0x198f4,0x19902,0x19908,0x1991e,0x19920,0x1993c,0x19940,0x19978,0x19986,0x19998,0x199ce,0x199e2,0x199e4,0x199e8,0x19a08,0x19a10,0x19a1e,0x19a20,0x19a3c,0x19a40,0x19a78,0x19af0,0x19b18,0x19b3e,0x19b60,0x19b9c,0x19bc2,0x19bc4,0x19bc8,0x19bd0,0x19be6,0x19c2e,0x19c34,0x19c4e,0x19c5c,0x19c62,0x19c64,0x19c68,0x19c8e,0x19c9c,0x19cb8,0x19cc2,0x19cc8,0x19cd0,0x19ce6,0x19cfa,0x19d0e,0x19d1c,0x19d38,0x19d70,0x19d7e,0x19d82,0x19d84,0x19d88,0x19d90,0x19da0,0x19dcc,0x19df2,0x19df4,0x19e16,0x19e26,0x19e2c,0x19e46,0x19e4c,0x19e58,0x19e74,0x19e86,0x19e8c,0x19e98,0x19eb0,0x19ebe,0x19ece,0x19ee2,0x19ee4,0x19ee8,0x19f0a,0x19f12,0x19f14,0x19f22,0x19f24,0x19f28,0x19f42,0x19f44,0x19f48,0x19f50,0x19f5e,0x19f6c,0x19f9a,0x19fae,0x19fb2,0x19fb4,0x1a046,0x1a04c,0x1a072,0x1a074,0x1a086,0x1a08c,0x1a098,0x1a0b0,0x1a0be,0x1a0e2,0x1a0e4,0x1a0e8,0x1a0f6,0x1a106,0x1a10c,0x1a118,0x1a130,0x1a13e,0x1a160,0x1a17c,0x1a18e,0x1a19c,0x1a1b8,0x1a1c2,0x1a1c4,0x1a1c8,0x1a1d0,0x1a1de,0x1a1e6,0x1a1ec,0x1a218,0x1a230,0x1a23e,0x1a260,0x1a27c,0x1a2c0,0x1a2f8,0x1a31c,0x1a338,0x1a370,0x1a37e,0x1a382,0x1a384,0x1a388,0x1a390,0x1a39e,0x1a3a0,0x1a3bc,0x1a3c6,0x1a3cc,0x1a3d8,0x1a3ee,0x1a3f2,0x1a3f4,0x1a418,0x1a430,0x1a43e,0x1a460,0x1a47c,0x1a4c0,0x1a4f8,0x1a5f0,0x1a61c,0x1a638,0x1a670,0x1a67e,0x1a6e0,0x1a6fc,0x1a702,0x1a704,0x1a708,0x1a710,0x1a71e,0x1a720,0x1a73c,0x1a740,0x1a778,0x1a786,0x1a78c,0x1a798,0x1a7b0,0x1a7be,0x1a7ce,0x1a7dc,0x1a7e2,0x1a7e4,0x1a7e8,0x1a830,0x1a860,0x1a87c,0x1a8c0,0x1a8f8,0x1a9f0,0x1abe0,0x1ac70,0x1ac7e,0x1ace0,0x1acfc,0x1adc0,0x1adf8,0x1ae04,0x1ae08,0x1ae10,0x1ae20,0x1ae3c,0x1ae40,0x1ae78,0x1aef0,0x1af06,0x1af0c,0x1af18,0x1af30,0x1af3e,0x1af60,0x1af7c,0x1af8e,0x1af9c,0x1afb8,0x1afc4,0x1afc8,0x1afd0,0x1afde,0x1b042,0x1b05e,0x1b07a,0x1b082,0x1b084,0x1b088,0x1b090,0x1b09e,0x1b0a0,0x1b0bc,0x1b0cc,0x1b0f2,0x1b0f4,0x1b102,0x1b104,0x1b108,0x1b110,0x1b11e,0x1b120,0x1b13c,0x1b140,0x1b178,0x1b186,0x1b198,0x1b1ce,0x1b1e2,0x1b1e4,0x1b1e8,0x1b204,0x1b208,0x1b210,0x1b21e,0x1b220,0x1b23c,0x1b240,0x1b278,0x1b2f0,0x1b30c,0x1b33e,0x1b360,0x1b39c,0x1b3c2,0x1b3c4,0x1b3c8,0x1b3d0,0x1b3e6,0x1b410,0x1b41e,0x1b420,0x1b43c,0x1b440,0x1b478,0x1b4f0,0x1b5e0,0x1b618,0x1b660,0x1b67c,0x1b6c0,0x1b738,0x1b782,0x1b784,0x1b788,0x1b790,0x1b79e,0x1b7a0,0x1b7cc,0x1b82e,0x1b84e,0x1b85c,0x1b88e,0x1b89c,0x1b8b8,0x1b8c2,0x1b8c4,0x1b8c8,0x1b8d0,0x1b8e6,0x1b8fa,0x1b90e,0x1b91c,0x1b938,0x1b970,0x1b97e,0x1b982,0x1b984,0x1b988,0x1b990,0x1b99e,0x1b9a0,0x1b9cc,0x1b9f2,0x1b9f4,0x1ba0e,0x1ba1c,0x1ba38,0x1ba70,0x1ba7e,0x1bae0,0x1bafc,0x1bb08,0x1bb10,0x1bb20,0x1bb3c,0x1bb40,0x1bb98,0x1bbce,0x1bbe2,0x1bbe4,0x1bbe8,0x1bc16,0x1bc26,0x1bc2c,0x1bc46,0x1bc4c,0x1bc58,0x1bc72,0x1bc74,0x1bc86,0x1bc8c,0x1bc98,0x1bcb0,0x1bcbe,0x1bcce,0x1bce2,0x1bce4,0x1bce8,0x1bd06,0x1bd0c,0x1bd18,0x1bd30,0x1bd3e,0x1bd60,0x1bd7c,0x1bd9c,0x1bdc2,0x1bdc4,0x1bdc8,0x1bdd0,0x1bde6,0x1bdfa,0x1be12,0x1be14,0x1be22,0x1be24,0x1be28,0x1be42,0x1be44,0x1be48,0x1be50,0x1be5e,0x1be66,0x1be82,0x1be84,0x1be88,0x1be90,0x1be9e,0x1bea0,0x1bebc,0x1becc,0x1bef4,0x1bf1a,0x1bf2e,0x1bf32,0x1bf34,0x1bf4e,0x1bf5c,0x1bf62,0x1bf64,0x1bf68,0x1c09a,0x1c0b2,0x1c0b4,0x1c11a,0x1c132,0x1c134,0x1c162,0x1c164,0x1c168,0x1c176,0x1c1ba,0x1c21a,0x1c232,0x1c234,0x1c24e,0x1c25c,0x1c262,0x1c264,0x1c268,0x1c276,0x1c28e,0x1c2c2,0x1c2c4,0x1c2c8,0x1c2d0,0x1c2de,0x1c2e6,0x1c2ec,0x1c2fa,0x1c316,0x1c326,0x1c33a,0x1c346,0x1c34c,0x1c372,0x1c374,0x1c41a,0x1c42e,0x1c432,0x1c434,0x1c44e,0x1c45c,0x1c462,0x1c464,0x1c468,0x1c476,0x1c48e,0x1c49c,0x1c4b8,0x1c4c2,0x1c4c8,0x1c4d0,0x1c4de,0x1c4e6,0x1c4ec,0x1c4fa,0x1c51c,0x1c538,0x1c570,0x1c57e,0x1c582,0x1c584,0x1c588,0x1c590,0x1c59e,0x1c5a0,0x1c5bc,0x1c5c6,0x1c5cc,0x1c5d8,0x1c5ee,0x1c5f2,0x1c5f4,0x1c616,0x1c626,0x1c62c,0x1c63a,0x1c646,0x1c64c,0x1c658,0x1c66e,0x1c672,0x1c674,0x1c686,0x1c68c,0x1c698,0x1c6b0,0x1c6be,0x1c6ce,0x1c6dc,0x1c6e2,0x1c6e4,0x1c6e8,0x1c712,0x1c714,0x1c722,0x1c728,0x1c736,0x1c742,0x1c744,0x1c748,0x1c750,0x1c75e,0x1c766,0x1c76c,0x1c77a,0x1c7ae,0x1c7d6,0x1c7ea,0x1c81a,0x1c82e,0x1c832,0x1c834,0x1c84e,0x1c85c,0x1c862,0x1c864,0x1c868,0x1c876,0x1c88e,0x1c89c,0x1c8b8,0x1c8c2,0x1c8c8,0x1c8d0,0x1c8de,0x1c8e6,0x1c8ec,0x1c8fa,0x1c90e,0x1c938,0x1c970,0x1c97e,0x1c982,0x1c984,0x1c990,0x1c99e,0x1c9a0,0x1c9bc,0x1c9c6,0x1c9cc,0x1c9d8,0x1c9ee,0x1c9f2,0x1c9f4,0x1ca38,0x1ca70,0x1ca7e,0x1cae0,0x1cafc,0x1cb02,0x1cb04,0x1cb08,0x1cb10,0x1cb20,0x1cb3c,0x1cb40,0x1cb78,0x1cb86,0x1cb8c,0x1cb98,0x1cbb0,0x1cbbe,0x1cbce,0x1cbdc,0x1cbe2,0x1cbe4,0x1cbe8,0x1cbf6,0x1cc16,0x1cc26,0x1cc2c,0x1cc3a,0x1cc46,0x1cc58,0x1cc72,0x1cc74,0x1cc86,0x1ccb0,0x1ccbe,0x1ccce,0x1cce2,0x1cce4,0x1cce8,0x1cd06,0x1cd0c,0x1cd18,0x1cd30,0x1cd3e,0x1cd60,0x1cd7c,0x1cd9c,0x1cdc2,0x1cdc4,0x1cdc8,0x1cdd0,0x1cdde,0x1cde6,0x1cdfa,0x1ce22,0x1ce28,0x1ce42,0x1ce50,0x1ce5e,0x1ce66,0x1ce7a,0x1ce82,0x1ce84,0x1ce88,0x1ce90,0x1ce9e,0x1cea0,0x1cebc,0x1cecc,0x1cef2,0x1cef4,0x1cf2e,0x1cf32,0x1cf34,0x1cf4e,0x1cf5c,0x1cf62,0x1cf64,0x1cf68,0x1cf96,0x1cfa6,0x1cfac,0x1cfca,0x1cfd2,0x1cfd4,0x1d02e,0x1d032,0x1d034,0x1d04e,0x1d05c,0x1d062,0x1d064,0x1d068,0x1d076,0x1d08e,0x1d09c,0x1d0b8,0x1d0c2,0x1d0c4,0x1d0c8,0x1d0d0,0x1d0de,0x1d0e6,0x1d0ec,0x1d0fa,0x1d11c,0x1d138,0x1d170,0x1d17e,0x1d182,0x1d184,0x1d188,0x1d190,0x1d19e,0x1d1a0,0x1d1bc,0x1d1c6,0x1d1cc,0x1d1d8,0x1d1ee,0x1d1f2,0x1d1f4,0x1d21c,0x1d238,0x1d270,0x1d27e,0x1d2e0,0x1d2fc,0x1d302,0x1d304,0x1d308,0x1d310,0x1d31e,0x1d320,0x1d33c,0x1d340,0x1d378,0x1d386,0x1d38c,0x1d398,0x1d3b0,0x1d3be,0x1d3ce,0x1d3dc,0x1d3e2,0x1d3e4,0x1d3e8,0x1d3f6,0x1d470,0x1d47e,0x1d4e0,0x1d4fc,0x1d5c0,0x1d5f8,0x1d604,0x1d608,0x1d610,0x1d620,0x1d640,0x1d678,0x1d6f0,0x1d706,0x1d70c,0x1d718,0x1d730,0x1d73e,0x1d760,0x1d77c,0x1d78e,0x1d79c,0x1d7b8,0x1d7c2,0x1d7c4,0x1d7c8,0x1d7d0,0x1d7de,0x1d7e6,0x1d7ec,0x1d826,0x1d82c,0x1d83a,0x1d846,0x1d84c,0x1d858,0x1d872,0x1d874,0x1d886,0x1d88c,0x1d898,0x1d8b0,0x1d8be,0x1d8ce,0x1d8e2,0x1d8e4,0x1d8e8,0x1d8f6,0x1d90c,0x1d918,0x1d930,0x1d93e,0x1d960,0x1d97c,0x1d99c,0x1d9c2,0x1d9c4,0x1d9c8,0x1d9d0,0x1d9e6,0x1d9fa,0x1da0c,0x1da18,0x1da30,0x1da3e,0x1da60,0x1da7c,0x1dac0,0x1daf8,0x1db38,0x1db82,0x1db84,0x1db88,0x1db90,0x1db9e,0x1dba0,0x1dbcc,0x1dbf2,0x1dbf4,0x1dc22,0x1dc42,0x1dc44,0x1dc48,0x1dc50,0x1dc5e,0x1dc66,0x1dc7a,0x1dc82,0x1dc84,0x1dc88,0x1dc90,0x1dc9e,0x1dca0,0x1dcbc,0x1dccc,0x1dcf2,0x1dcf4,0x1dd04,0x1dd08,0x1dd10,0x1dd1e,0x1dd20,0x1dd3c,0x1dd40,0x1dd78,0x1dd86,0x1dd98,0x1ddce,0x1dde2,0x1dde4,0x1dde8,0x1de2e,0x1de32,0x1de34,0x1de4e,0x1de5c,0x1de62,0x1de64,0x1de68,0x1de8e,0x1de9c,0x1deb8,0x1dec2,0x1dec4,0x1dec8,0x1ded0,0x1dee6,0x1defa,0x1df16,0x1df26,0x1df2c,0x1df46,0x1df4c,0x1df58,0x1df72,0x1df74,0x1df8a,0x1df92,0x1df94,0x1dfa2,0x1dfa4,0x1dfa8,0x1e08a,0x1e092,0x1e094,0x1e0a2,0x1e0a4,0x1e0a8,0x1e0b6,0x1e0da,0x1e10a,0x1e112,0x1e114,0x1e122,0x1e124,0x1e128,0x1e136,0x1e142,0x1e144,0x1e148,0x1e150,0x1e166,0x1e16c,0x1e17a,0x1e19a,0x1e1b2,0x1e1b4,0x1e20a,0x1e212,0x1e214,0x1e222,0x1e224,0x1e228,0x1e236,0x1e242,0x1e248,0x1e250,0x1e25e,0x1e266,0x1e26c,0x1e27a,0x1e282,0x1e284,0x1e288,0x1e290,0x1e2a0,0x1e2bc,0x1e2c6,0x1e2cc,0x1e2d8,0x1e2ee,0x1e2f2,0x1e2f4,0x1e31a,0x1e332,0x1e334,0x1e35c,0x1e362,0x1e364,0x1e368,0x1e3ba,0x1e40a,0x1e412,0x1e414,0x1e422,0x1e428,0x1e436,0x1e442,0x1e448,0x1e450,0x1e45e,0x1e466,0x1e46c,0x1e47a,0x1e482,0x1e484,0x1e490,0x1e49e,0x1e4a0,0x1e4bc,0x1e4c6,0x1e4cc,0x1e4d8,0x1e4ee,0x1e4f2,0x1e4f4,0x1e502,0x1e504,0x1e508,0x1e510,0x1e51e,0x1e520,0x1e53c,0x1e540,0x1e578,0x1e586,0x1e58c,0x1e598,0x1e5b0,0x1e5be,0x1e5ce,0x1e5dc,0x1e5e2,0x1e5e4,0x1e5e8,0x1e5f6,0x1e61a,0x1e62e,0x1e632,0x1e634,0x1e64e,0x1e65c,0x1e662,0x1e668,0x1e68e,0x1e69c,0x1e6b8,0x1e6c2,0x1e6c4,0x1e6c8,0x1e6d0,0x1e6e6,0x1e6fa,0x1e716,0x1e726,0x1e72c,0x1e73a,0x1e746,0x1e74c,0x1e758,0x1e772,0x1e774,0x1e792,0x1e794,0x1e7a2,0x1e7a4,0x1e7a8,0x1e7b6,0x1e812,0x1e814,0x1e822,0x1e824,0x1e828,0x1e836,0x1e842,0x1e844,0x1e848,0x1e850,0x1e85e,0x1e866,0x1e86c,0x1e87a,0x1e882,0x1e884,0x1e888,0x1e890,0x1e89e,0x1e8a0,0x1e8bc,0x1e8c6,0x1e8cc,0x1e8d8,0x1e8ee,0x1e8f2,0x1e8f4,0x1e902,0x1e904,0x1e908,0x1e910,0x1e920,0x1e93c,0x1e940,0x1e978,0x1e986,0x1e98c,0x1e998,0x1e9b0,0x1e9be,0x1e9ce,0x1e9dc,0x1e9e2,0x1e9e4,0x1e9e8,0x1e9f6,0x1ea04,0x1ea08,0x1ea10,0x1ea20,0x1ea40,0x1ea78,0x1eaf0,0x1eb06,0x1eb0c,0x1eb18,0x1eb30,0x1eb3e,0x1eb60,0x1eb7c,0x1eb8e,0x1eb9c,0x1ebb8,0x1ebc2,0x1ebc4,0x1ebc8,0x1ebd0,0x1ebde,0x1ebe6,0x1ebec,0x1ec1a,0x1ec2e,0x1ec32,0x1ec34,0x1ec4e,0x1ec5c,0x1ec62,0x1ec64,0x1ec68,0x1ec8e,0x1ec9c,0x1ecb8,0x1ecc2,0x1ecc4,0x1ecc8,0x1ecd0,0x1ece6,0x1ecfa,0x1ed0e,0x1ed1c,0x1ed38,0x1ed70,0x1ed7e,0x1ed82,0x1ed84,0x1ed88,0x1ed90,0x1ed9e,0x1eda0,0x1edcc,0x1edf2,0x1edf4,0x1ee16,0x1ee26,0x1ee2c,0x1ee3a,0x1ee46,0x1ee4c,0x1ee58,0x1ee6e,0x1ee72,0x1ee74,0x1ee86,0x1ee8c,0x1ee98,0x1eeb0,0x1eebe,0x1eece,0x1eedc,0x1eee2,0x1eee4,0x1eee8,0x1ef12,0x1ef22,0x1ef24,0x1ef28,0x1ef36,0x1ef42,0x1ef44,0x1ef48,0x1ef50,0x1ef5e,0x1ef66,0x1ef6c,0x1ef7a,0x1efae,0x1efb2,0x1efb4,0x1efd6,0x1f096,0x1f0a6,0x1f0ac,0x1f0ba,0x1f0ca,0x1f0d2,0x1f0d4,0x1f116,0x1f126,0x1f12c,0x1f13a,0x1f146,0x1f14c,0x1f158,0x1f16e,0x1f172,0x1f174,0x1f18a,0x1f192,0x1f194,0x1f1a2,0x1f1a4,0x1f1a8,0x1f1da,0x1f216,0x1f226,0x1f22c,0x1f23a,0x1f246,0x1f258,0x1f26e,0x1f272,0x1f274,0x1f286,0x1f28c,0x1f298,0x1f2b0,0x1f2be,0x1f2ce,0x1f2dc,0x1f2e2,0x1f2e4,0x1f2e8,0x1f2f6,0x1f30a,0x1f312,0x1f314,0x1f322,0x1f328,0x1f342,0x1f344,0x1f348,0x1f350,0x1f35e,0x1f366,0x1f37a,0x1f39a,0x1f3ae,0x1f3b2,0x1f3b4,0x1f416,0x1f426,0x1f42c,0x1f43a,0x1f446,0x1f44c,0x1f458,0x1f46e,0x1f472,0x1f474,0x1f486,0x1f48c,0x1f498,0x1f4b0,0x1f4be,0x1f4ce,0x1f4dc,0x1f4e2,0x1f4e4,0x1f4e8,0x1f4f6,0x1f506,0x1f50c,0x1f518,0x1f530,0x1f53e,0x1f560,0x1f57c,0x1f58e,0x1f59c,0x1f5b8,0x1f5c2,0x1f5c4,0x1f5c8,0x1f5d0,0x1f5de,0x1f5e6,0x1f5ec,0x1f5fa,0x1f60a,0x1f612,0x1f614,0x1f622,0x1f624,0x1f628,0x1f636,0x1f642,0x1f644,0x1f648,0x1f650,0x1f65e,0x1f666,0x1f67a,0x1f682,0x1f684,0x1f688,0x1f690,0x1f69e,0x1f6a0,0x1f6bc,0x1f6cc,0x1f6f2,0x1f6f4,0x1f71a,0x1f72e,0x1f732,0x1f734,0x1f74e,0x1f75c,0x1f762,0x1f764,0x1f768,0x1f776,0x1f796,0x1f7a6,0x1f7ac,0x1f7ba,0x1f7d2,0x1f7d4,0x1f89a,0x1f8ae,0x1f8b2,0x1f8b4,0x1f8d6,0x1f8ea,0x1f91a,0x1f92e,0x1f932,0x1f934,0x1f94e,0x1f95c,0x1f962,0x1f964,0x1f968,0x1f976,0x1f996,0x1f9a6,0x1f9ac,0x1f9ba,0x1f9ca,0x1f9d2,0x1f9d4,0x1fa1a,0x1fa2e,0x1fa32,0x1fa34,0x1fa4e,0x1fa5c,0x1fa62,0x1fa64,0x1fa68,0x1fa76,0x1fa8e,0x1fa9c,0x1fab8,0x1fac2,0x1fac4,0x1fac8,0x1fad0,0x1fade,0x1fae6,0x1faec,0x1fb16,0x1fb26,0x1fb2c,0x1fb3a,0x1fb46,0x1fb4c,0x1fb58,0x1fb6e,0x1fb72,0x1fb74,0x1fb8a,0x1fb92,0x1fb94,0x1fba2,0x1fba4,0x1fba8,0x1fbb6,0x1fbda]);/**
       * This table contains to codewords for all symbols.
       */PDF417Common.CODEWORD_TABLE=Int32Array.from([2627,1819,2622,2621,1813,1812,2729,2724,2723,2779,2774,2773,902,896,908,868,865,861,859,2511,873,871,1780,835,2493,825,2491,842,837,844,1764,1762,811,810,809,2483,807,2482,806,2480,815,814,813,812,2484,817,816,1745,1744,1742,1746,2655,2637,2635,2626,2625,2623,2628,1820,2752,2739,2737,2728,2727,2725,2730,2785,2783,2778,2777,2775,2780,787,781,747,739,736,2413,754,752,1719,692,689,681,2371,678,2369,700,697,694,703,1688,1686,642,638,2343,631,2341,627,2338,651,646,643,2345,654,652,1652,1650,1647,1654,601,599,2322,596,2321,594,2319,2317,611,610,608,606,2324,603,2323,615,614,612,1617,1616,1614,1612,616,1619,1618,2575,2538,2536,905,901,898,909,2509,2507,2504,870,867,864,860,2512,875,872,1781,2490,2489,2487,2485,1748,836,834,832,830,2494,827,2492,843,841,839,845,1765,1763,2701,2676,2674,2653,2648,2656,2634,2633,2631,2629,1821,2638,2636,2770,2763,2761,2750,2745,2753,2736,2735,2733,2731,1848,2740,2738,2786,2784,591,588,576,569,566,2296,1590,537,534,526,2276,522,2274,545,542,539,548,1572,1570,481,2245,466,2242,462,2239,492,485,482,2249,496,494,1534,1531,1528,1538,413,2196,406,2191,2188,425,419,2202,415,2199,432,430,427,1472,1467,1464,433,1476,1474,368,367,2160,365,2159,362,2157,2155,2152,378,377,375,2166,372,2165,369,2162,383,381,379,2168,1419,1418,1416,1414,385,1411,384,1423,1422,1420,1424,2461,802,2441,2439,790,786,783,794,2409,2406,2403,750,742,738,2414,756,753,1720,2367,2365,2362,2359,1663,693,691,684,2373,680,2370,702,699,696,704,1690,1687,2337,2336,2334,2332,1624,2329,1622,640,637,2344,634,2342,630,2340,650,648,645,2346,655,653,1653,1651,1649,1655,2612,2597,2595,2571,2568,2565,2576,2534,2529,2526,1787,2540,2537,907,904,900,910,2503,2502,2500,2498,1768,2495,1767,2510,2508,2506,869,866,863,2513,876,874,1782,2720,2713,2711,2697,2694,2691,2702,2672,2670,2664,1828,2678,2675,2647,2646,2644,2642,1823,2639,1822,2654,2652,2650,2657,2771,1855,2765,2762,1850,1849,2751,2749,2747,2754,353,2148,344,342,336,2142,332,2140,345,1375,1373,306,2130,299,2128,295,2125,319,314,311,2132,1354,1352,1349,1356,262,257,2101,253,2096,2093,274,273,267,2107,263,2104,280,278,275,1316,1311,1308,1320,1318,2052,202,2050,2044,2040,219,2063,212,2060,208,2055,224,221,2066,1260,1258,1252,231,1248,229,1266,1264,1261,1268,155,1998,153,1996,1994,1991,1988,165,164,2007,162,2006,159,2003,2000,172,171,169,2012,166,2010,1186,1184,1182,1179,175,1176,173,1192,1191,1189,1187,176,1194,1193,2313,2307,2305,592,589,2294,2292,2289,578,572,568,2297,580,1591,2272,2267,2264,1547,538,536,529,2278,525,2275,547,544,541,1574,1571,2237,2235,2229,1493,2225,1489,478,2247,470,2244,465,2241,493,488,484,2250,498,495,1536,1533,1530,1539,2187,2186,2184,2182,1432,2179,1430,2176,1427,414,412,2197,409,2195,405,2193,2190,426,424,421,2203,418,2201,431,429,1473,1471,1469,1466,434,1477,1475,2478,2472,2470,2459,2457,2454,2462,803,2437,2432,2429,1726,2443,2440,792,789,785,2401,2399,2393,1702,2389,1699,2411,2408,2405,745,741,2415,758,755,1721,2358,2357,2355,2353,1661,2350,1660,2347,1657,2368,2366,2364,2361,1666,690,687,2374,683,2372,701,698,705,1691,1689,2619,2617,2610,2608,2605,2613,2593,2588,2585,1803,2599,2596,2563,2561,2555,1797,2551,1795,2573,2570,2567,2577,2525,2524,2522,2520,1786,2517,1785,2514,1783,2535,2533,2531,2528,1788,2541,2539,906,903,911,2721,1844,2715,2712,1838,1836,2699,2696,2693,2703,1827,1826,1824,2673,2671,2669,2666,1829,2679,2677,1858,1857,2772,1854,1853,1851,1856,2766,2764,143,1987,139,1986,135,133,131,1984,128,1983,125,1981,138,137,136,1985,1133,1132,1130,112,110,1974,107,1973,104,1971,1969,122,121,119,117,1977,114,1976,124,1115,1114,1112,1110,1117,1116,84,83,1953,81,1952,78,1950,1948,1945,94,93,91,1959,88,1958,85,1955,99,97,95,1961,1086,1085,1083,1081,1078,100,1090,1089,1087,1091,49,47,1917,44,1915,1913,1910,1907,59,1926,56,1925,53,1922,1919,66,64,1931,61,1929,1042,1040,1038,71,1035,70,1032,68,1048,1047,1045,1043,1050,1049,12,10,1869,1867,1864,1861,21,1880,19,1877,1874,1871,28,1888,25,1886,22,1883,982,980,977,974,32,30,991,989,987,984,34,995,994,992,2151,2150,2147,2146,2144,356,355,354,2149,2139,2138,2136,2134,1359,343,341,338,2143,335,2141,348,347,346,1376,1374,2124,2123,2121,2119,1326,2116,1324,310,308,305,2131,302,2129,298,2127,320,318,316,313,2133,322,321,1355,1353,1351,1357,2092,2091,2089,2087,1276,2084,1274,2081,1271,259,2102,256,2100,252,2098,2095,272,269,2108,266,2106,281,279,277,1317,1315,1313,1310,282,1321,1319,2039,2037,2035,2032,1203,2029,1200,1197,207,2053,205,2051,201,2049,2046,2043,220,218,2064,215,2062,211,2059,228,226,223,2069,1259,1257,1254,232,1251,230,1267,1265,1263,2316,2315,2312,2311,2309,2314,2304,2303,2301,2299,1593,2308,2306,590,2288,2287,2285,2283,1578,2280,1577,2295,2293,2291,579,577,574,571,2298,582,581,1592,2263,2262,2260,2258,1545,2255,1544,2252,1541,2273,2271,2269,2266,1550,535,532,2279,528,2277,546,543,549,1575,1573,2224,2222,2220,1486,2217,1485,2214,1482,1479,2238,2236,2234,2231,1496,2228,1492,480,477,2248,473,2246,469,2243,490,487,2251,497,1537,1535,1532,2477,2476,2474,2479,2469,2468,2466,2464,1730,2473,2471,2453,2452,2450,2448,1729,2445,1728,2460,2458,2456,2463,805,804,2428,2427,2425,2423,1725,2420,1724,2417,1722,2438,2436,2434,2431,1727,2444,2442,793,791,788,795,2388,2386,2384,1697,2381,1696,2378,1694,1692,2402,2400,2398,2395,1703,2392,1701,2412,2410,2407,751,748,744,2416,759,757,1807,2620,2618,1806,1805,2611,2609,2607,2614,1802,1801,1799,2594,2592,2590,2587,1804,2600,2598,1794,1793,1791,1789,2564,2562,2560,2557,1798,2554,1796,2574,2572,2569,2578,1847,1846,2722,1843,1842,1840,1845,2716,2714,1835,1834,1832,1830,1839,1837,2700,2698,2695,2704,1817,1811,1810,897,862,1777,829,826,838,1760,1758,808,2481,1741,1740,1738,1743,2624,1818,2726,2776,782,740,737,1715,686,679,695,1682,1680,639,628,2339,647,644,1645,1643,1640,1648,602,600,597,595,2320,593,2318,609,607,604,1611,1610,1608,1606,613,1615,1613,2328,926,924,892,886,899,857,850,2505,1778,824,823,821,819,2488,818,2486,833,831,828,840,1761,1759,2649,2632,2630,2746,2734,2732,2782,2781,570,567,1587,531,527,523,540,1566,1564,476,467,463,2240,486,483,1524,1521,1518,1529,411,403,2192,399,2189,423,416,1462,1457,1454,428,1468,1465,2210,366,363,2158,360,2156,357,2153,376,373,370,2163,1410,1409,1407,1405,382,1402,380,1417,1415,1412,1421,2175,2174,777,774,771,784,732,725,722,2404,743,1716,676,674,668,2363,665,2360,685,1684,1681,626,624,622,2335,620,2333,617,2330,641,635,649,1646,1644,1642,2566,928,925,2530,2527,894,891,888,2501,2499,2496,858,856,854,851,1779,2692,2668,2665,2645,2643,2640,2651,2768,2759,2757,2744,2743,2741,2748,352,1382,340,337,333,1371,1369,307,300,296,2126,315,312,1347,1342,1350,261,258,250,2097,246,2094,271,268,264,1306,1301,1298,276,1312,1309,2115,203,2048,195,2045,191,2041,213,209,2056,1246,1244,1238,225,1234,222,1256,1253,1249,1262,2080,2079,154,1997,150,1995,147,1992,1989,163,160,2004,156,2001,1175,1174,1172,1170,1167,170,1164,167,1185,1183,1180,1177,174,1190,1188,2025,2024,2022,587,586,564,559,556,2290,573,1588,520,518,512,2268,508,2265,530,1568,1565,461,457,2233,450,2230,446,2226,479,471,489,1526,1523,1520,397,395,2185,392,2183,389,2180,2177,410,2194,402,422,1463,1461,1459,1456,1470,2455,799,2433,2430,779,776,773,2397,2394,2390,734,728,724,746,1717,2356,2354,2351,2348,1658,677,675,673,670,667,688,1685,1683,2606,2589,2586,2559,2556,2552,927,2523,2521,2518,2515,1784,2532,895,893,890,2718,2709,2707,2689,2687,2684,2663,2662,2660,2658,1825,2667,2769,1852,2760,2758,142,141,1139,1138,134,132,129,126,1982,1129,1128,1126,1131,113,111,108,105,1972,101,1970,120,118,115,1109,1108,1106,1104,123,1113,1111,82,79,1951,75,1949,72,1946,92,89,86,1956,1077,1076,1074,1072,98,1069,96,1084,1082,1079,1088,1968,1967,48,45,1916,42,1914,39,1911,1908,60,57,54,1923,50,1920,1031,1030,1028,1026,67,1023,65,1020,62,1041,1039,1036,1033,69,1046,1044,1944,1943,1941,11,9,1868,7,1865,1862,1859,20,1878,16,1875,13,1872,970,968,966,963,29,960,26,23,983,981,978,975,33,971,31,990,988,985,1906,1904,1902,993,351,2145,1383,331,330,328,326,2137,323,2135,339,1372,1370,294,293,291,289,2122,286,2120,283,2117,309,303,317,1348,1346,1344,245,244,242,2090,239,2088,236,2085,2082,260,2099,249,270,1307,1305,1303,1300,1314,189,2038,186,2036,183,2033,2030,2026,206,198,2047,194,216,1247,1245,1243,1240,227,1237,1255,2310,2302,2300,2286,2284,2281,565,563,561,558,575,1589,2261,2259,2256,2253,1542,521,519,517,514,2270,511,533,1569,1567,2223,2221,2218,2215,1483,2211,1480,459,456,453,2232,449,474,491,1527,1525,1522,2475,2467,2465,2451,2449,2446,801,800,2426,2424,2421,2418,1723,2435,780,778,775,2387,2385,2382,2379,1695,2375,1693,2396,735,733,730,727,749,1718,2616,2615,2604,2603,2601,2584,2583,2581,2579,1800,2591,2550,2549,2547,2545,1792,2542,1790,2558,929,2719,1841,2710,2708,1833,1831,2690,2688,2686,1815,1809,1808,1774,1756,1754,1737,1736,1734,1739,1816,1711,1676,1674,633,629,1638,1636,1633,1641,598,1605,1604,1602,1600,605,1609,1607,2327,887,853,1775,822,820,1757,1755,1584,524,1560,1558,468,464,1514,1511,1508,1519,408,404,400,1452,1447,1444,417,1458,1455,2208,364,361,358,2154,1401,1400,1398,1396,374,1393,371,1408,1406,1403,1413,2173,2172,772,726,723,1712,672,669,666,682,1678,1675,625,623,621,618,2331,636,632,1639,1637,1635,920,918,884,880,889,849,848,847,846,2497,855,852,1776,2641,2742,2787,1380,334,1367,1365,301,297,1340,1338,1335,1343,255,251,247,1296,1291,1288,265,1302,1299,2113,204,196,192,2042,1232,1230,1224,214,1220,210,1242,1239,1235,1250,2077,2075,151,148,1993,144,1990,1163,1162,1160,1158,1155,161,1152,157,1173,1171,1168,1165,168,1181,1178,2021,2020,2018,2023,585,560,557,1585,516,509,1562,1559,458,447,2227,472,1516,1513,1510,398,396,393,390,2181,386,2178,407,1453,1451,1449,1446,420,1460,2209,769,764,720,712,2391,729,1713,664,663,661,659,2352,656,2349,671,1679,1677,2553,922,919,2519,2516,885,883,881,2685,2661,2659,2767,2756,2755,140,1137,1136,130,127,1125,1124,1122,1127,109,106,102,1103,1102,1100,1098,116,1107,1105,1980,80,76,73,1947,1068,1067,1065,1063,90,1060,87,1075,1073,1070,1080,1966,1965,46,43,40,1912,36,1909,1019,1018,1016,1014,58,1011,55,1008,51,1029,1027,1024,1021,63,1037,1034,1940,1939,1937,1942,8,1866,4,1863,1,1860,956,954,952,949,946,17,14,969,967,964,961,27,957,24,979,976,972,1901,1900,1898,1896,986,1905,1903,350,349,1381,329,327,324,1368,1366,292,290,287,284,2118,304,1341,1339,1337,1345,243,240,237,2086,233,2083,254,1297,1295,1293,1290,1304,2114,190,187,184,2034,180,2031,177,2027,199,1233,1231,1229,1226,217,1223,1241,2078,2076,584,555,554,552,550,2282,562,1586,507,506,504,502,2257,499,2254,515,1563,1561,445,443,441,2219,438,2216,435,2212,460,454,475,1517,1515,1512,2447,798,797,2422,2419,770,768,766,2383,2380,2376,721,719,717,714,731,1714,2602,2582,2580,2548,2546,2543,923,921,2717,2706,2705,2683,2682,2680,1771,1752,1750,1733,1732,1731,1735,1814,1707,1670,1668,1631,1629,1626,1634,1599,1598,1596,1594,1603,1601,2326,1772,1753,1751,1581,1554,1552,1504,1501,1498,1509,1442,1437,1434,401,1448,1445,2206,1392,1391,1389,1387,1384,359,1399,1397,1394,1404,2171,2170,1708,1672,1669,619,1632,1630,1628,1773,1378,1363,1361,1333,1328,1336,1286,1281,1278,248,1292,1289,2111,1218,1216,1210,197,1206,193,1228,1225,1221,1236,2073,2071,1151,1150,1148,1146,152,1143,149,1140,145,1161,1159,1156,1153,158,1169,1166,2017,2016,2014,2019,1582,510,1556,1553,452,448,1506,1500,394,391,387,1443,1441,1439,1436,1450,2207,765,716,713,1709,662,660,657,1673,1671,916,914,879,878,877,882,1135,1134,1121,1120,1118,1123,1097,1096,1094,1092,103,1101,1099,1979,1059,1058,1056,1054,77,1051,74,1066,1064,1061,1071,1964,1963,1007,1006,1004,1002,999,41,996,37,1017,1015,1012,1009,52,1025,1022,1936,1935,1933,1938,942,940,938,935,932,5,2,955,953,950,947,18,943,15,965,962,958,1895,1894,1892,1890,973,1899,1897,1379,325,1364,1362,288,285,1334,1332,1330,241,238,234,1287,1285,1283,1280,1294,2112,188,185,181,178,2028,1219,1217,1215,1212,200,1209,1227,2074,2072,583,553,551,1583,505,503,500,513,1557,1555,444,442,439,436,2213,455,451,1507,1505,1502,796,763,762,760,767,711,710,708,706,2377,718,715,1710,2544,917,915,2681,1627,1597,1595,2325,1769,1749,1747,1499,1438,1435,2204,1390,1388,1385,1395,2169,2167,1704,1665,1662,1625,1623,1620,1770,1329,1282,1279,2109,1214,1207,1222,2068,2065,1149,1147,1144,1141,146,1157,1154,2013,2011,2008,2015,1579,1549,1546,1495,1487,1433,1431,1428,1425,388,1440,2205,1705,658,1667,1664,1119,1095,1093,1978,1057,1055,1052,1062,1962,1960,1005,1003,1000,997,38,1013,1010,1932,1930,1927,1934,941,939,936,933,6,930,3,951,948,944,1889,1887,1884,1881,959,1893,1891,35,1377,1360,1358,1327,1325,1322,1331,1277,1275,1272,1269,235,1284,2110,1205,1204,1201,1198,182,1195,179,1213,2070,2067,1580,501,1551,1548,440,437,1497,1494,1490,1503,761,709,707,1706,913,912,2198,1386,2164,2161,1621,1766,2103,1208,2058,2054,1145,1142,2005,2002,1999,2009,1488,1429,1426,2200,1698,1659,1656,1975,1053,1957,1954,1001,998,1924,1921,1918,1928,937,934,931,1879,1876,1873,1870,945,1885,1882,1323,1273,1270,2105,1202,1199,1196,1211,2061,2057,1576,1543,1540,1484,1481,1478,1491,1700]);return PDF417Common;}();/*
  * Copyright 2007 ZXing authors
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */ // import java.util.List;
/**
   * @author Guenther Grau
   */var PDF417DetectorResult=/** @class */function(){function PDF417DetectorResult(bits,points){this.bits=bits;this.points=points;}PDF417DetectorResult.prototype.getBits=function(){return this.bits;};PDF417DetectorResult.prototype.getPoints=function(){return this.points;};return PDF417DetectorResult;}();/*
  * Copyright 2009 ZXing authors
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */var __values$r=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};// import java.util.ArrayList;
// import java.util.Arrays;
// import java.util.List;
// import java.util.Map;
/**
   * <p>Encapsulates logic that can detect a PDF417 Code in an image, even if the
   * PDF417 Code is rotated or skewed, or partially obscured.</p>
   *
   * @author SITA Lab (kevin.osullivan@sita.aero)
   * @author dswitkin@google.com (Daniel Switkin)
   * @author Guenther Grau
   */var Detector$3=/** @class */function(){function Detector(){}/**
       * <p>Detects a PDF417 Code in an image. Only checks 0 and 180 degree rotations.</p>
       *
       * @param image barcode image to decode
       * @param hints optional hints to detector
       * @param multiple if true, then the image is searched for multiple codes. If false, then at most one code will
       * be found and returned
       * @return {@link PDF417DetectorResult} encapsulating results of detecting a PDF417 code
       * @throws NotFoundException if no PDF417 Code can be found
       */Detector.detectMultiple=function(image,hints,multiple){// TODO detection improvement, tryHarder could try several different luminance thresholds/blackpoints or even
// different binarizers
// boolean tryHarder = hints != null && hints.containsKey(DecodeHintType.TRY_HARDER);
var bitMatrix=image.getBlackMatrix();var barcodeCoordinates=Detector.detect(multiple,bitMatrix);if(!barcodeCoordinates.length){bitMatrix=bitMatrix.clone();bitMatrix.rotate180();barcodeCoordinates=Detector.detect(multiple,bitMatrix);}return new PDF417DetectorResult(bitMatrix,barcodeCoordinates);};/**
       * Detects PDF417 codes in an image. Only checks 0 degree rotation
       * @param multiple if true, then the image is searched for multiple codes. If false, then at most one code will
       * be found and returned
       * @param bitMatrix bit matrix to detect barcodes in
       * @return List of ResultPoint arrays containing the coordinates of found barcodes
       */Detector.detect=function(multiple,bitMatrix){var e_1,_a;var barcodeCoordinates=new Array();var row=0;var column=0;var foundBarcodeInRow=false;while(row<bitMatrix.getHeight()){var vertices=Detector.findVertices(bitMatrix,row,column);if(vertices[0]==null&&vertices[3]==null){if(!foundBarcodeInRow){// we didn't find any barcode so that's the end of searching
break;}// we didn't find a barcode starting at the given column and row. Try again from the first column and slightly
// below the lowest barcode we found so far.
foundBarcodeInRow=false;column=0;try{for(var barcodeCoordinates_1=(e_1=void 0,__values$r(barcodeCoordinates)),barcodeCoordinates_1_1=barcodeCoordinates_1.next();!barcodeCoordinates_1_1.done;barcodeCoordinates_1_1=barcodeCoordinates_1.next()){var barcodeCoordinate=barcodeCoordinates_1_1.value;if(barcodeCoordinate[1]!=null){row=Math.trunc(Math.max(row,barcodeCoordinate[1].getY()));}if(barcodeCoordinate[3]!=null){row=Math.max(row,Math.trunc(barcodeCoordinate[3].getY()));}}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(barcodeCoordinates_1_1&&!barcodeCoordinates_1_1.done&&(_a=barcodeCoordinates_1.return))_a.call(barcodeCoordinates_1);}finally{if(e_1)throw e_1.error;}}row+=Detector.ROW_STEP;continue;}foundBarcodeInRow=true;barcodeCoordinates.push(vertices);if(!multiple){break;}// if we didn't find a right row indicator column, then continue the search for the next barcode after the
// start pattern of the barcode just found.
if(vertices[2]!=null){column=Math.trunc(vertices[2].getX());row=Math.trunc(vertices[2].getY());}else{column=Math.trunc(vertices[4].getX());row=Math.trunc(vertices[4].getY());}}return barcodeCoordinates;};/**
       * Locate the vertices and the codewords area of a black blob using the Start
       * and Stop patterns as locators.
       *
       * @param matrix the scanned barcode image.
       * @return an array containing the vertices:
       *           vertices[0] x, y top left barcode
       *           vertices[1] x, y bottom left barcode
       *           vertices[2] x, y top right barcode
       *           vertices[3] x, y bottom right barcode
       *           vertices[4] x, y top left codeword area
       *           vertices[5] x, y bottom left codeword area
       *           vertices[6] x, y top right codeword area
       *           vertices[7] x, y bottom right codeword area
       */Detector.findVertices=function(matrix,startRow,startColumn){var height=matrix.getHeight();var width=matrix.getWidth();// const result = new ResultPoint[8];
var result=new Array(8);Detector.copyToResult(result,Detector.findRowsWithPattern(matrix,height,width,startRow,startColumn,Detector.START_PATTERN),Detector.INDEXES_START_PATTERN);if(result[4]!=null){startColumn=Math.trunc(result[4].getX());startRow=Math.trunc(result[4].getY());}Detector.copyToResult(result,Detector.findRowsWithPattern(matrix,height,width,startRow,startColumn,Detector.STOP_PATTERN),Detector.INDEXES_STOP_PATTERN);return result;};Detector.copyToResult=function(result,tmpResult,destinationIndexes){for(var i=0;i<destinationIndexes.length;i++){result[destinationIndexes[i]]=tmpResult[i];}};Detector.findRowsWithPattern=function(matrix,height,width,startRow,startColumn,pattern){// const result = new ResultPoint[4];
var result=new Array(4);var found=false;var counters=new Int32Array(pattern.length);for(;startRow<height;startRow+=Detector.ROW_STEP){var loc=Detector.findGuardPattern(matrix,startColumn,startRow,width,false,pattern,counters);if(loc!=null){while(startRow>0){var previousRowLoc=Detector.findGuardPattern(matrix,startColumn,--startRow,width,false,pattern,counters);if(previousRowLoc!=null){loc=previousRowLoc;}else{startRow++;break;}}result[0]=new ResultPoint(loc[0],startRow);result[1]=new ResultPoint(loc[1],startRow);found=true;break;}}var stopRow=startRow+1;// Last row of the current symbol that contains pattern
if(found){var skippedRowCount=0;var previousRowLoc=Int32Array.from([Math.trunc(result[0].getX()),Math.trunc(result[1].getX())]);for(;stopRow<height;stopRow++){var loc=Detector.findGuardPattern(matrix,previousRowLoc[0],stopRow,width,false,pattern,counters);// a found pattern is only considered to belong to the same barcode if the start and end positions
// don't differ too much. Pattern drift should be not bigger than two for consecutive rows. With
// a higher number of skipped rows drift could be larger. To keep it simple for now, we allow a slightly
// larger drift and don't check for skipped rows.
if(loc!=null&&Math.abs(previousRowLoc[0]-loc[0])<Detector.MAX_PATTERN_DRIFT&&Math.abs(previousRowLoc[1]-loc[1])<Detector.MAX_PATTERN_DRIFT){previousRowLoc=loc;skippedRowCount=0;}else{if(skippedRowCount>Detector.SKIPPED_ROW_COUNT_MAX){break;}else{skippedRowCount++;}}}stopRow-=skippedRowCount+1;result[2]=new ResultPoint(previousRowLoc[0],stopRow);result[3]=new ResultPoint(previousRowLoc[1],stopRow);}if(stopRow-startRow<Detector.BARCODE_MIN_HEIGHT){Arrays.fill(result,null);}return result;};/**
       * @param matrix row of black/white values to search
       * @param column x position to start search
       * @param row y position to start search
       * @param width the number of pixels to search on this row
       * @param pattern pattern of counts of number of black and white pixels that are
       *                 being searched for as a pattern
       * @param counters array of counters, as long as pattern, to re-use
       * @return start/end horizontal offset of guard pattern, as an array of two ints.
       */Detector.findGuardPattern=function(matrix,column,row,width,whiteFirst,pattern,counters){Arrays.fillWithin(counters,0,counters.length,0);var patternStart=column;var pixelDrift=0;// if there are black pixels left of the current pixel shift to the left, but only for MAX_PIXEL_DRIFT pixels
while(matrix.get(patternStart,row)&&patternStart>0&&pixelDrift++<Detector.MAX_PIXEL_DRIFT){patternStart--;}var x=patternStart;var counterPosition=0;var patternLength=pattern.length;for(var isWhite=whiteFirst;x<width;x++){var pixel=matrix.get(x,row);if(pixel!==isWhite){counters[counterPosition]++;}else{if(counterPosition===patternLength-1){if(Detector.patternMatchVariance(counters,pattern,Detector.MAX_INDIVIDUAL_VARIANCE)<Detector.MAX_AVG_VARIANCE){return new Int32Array([patternStart,x]);}patternStart+=counters[0]+counters[1];System.arraycopy(counters,2,counters,0,counterPosition-1);counters[counterPosition-1]=0;counters[counterPosition]=0;counterPosition--;}else{counterPosition++;}counters[counterPosition]=1;isWhite=!isWhite;}}if(counterPosition===patternLength-1&&Detector.patternMatchVariance(counters,pattern,Detector.MAX_INDIVIDUAL_VARIANCE)<Detector.MAX_AVG_VARIANCE){return new Int32Array([patternStart,x-1]);}return null;};/**
       * Determines how closely a set of observed counts of runs of black/white
       * values matches a given target pattern. This is reported as the ratio of
       * the total variance from the expected pattern proportions across all
       * pattern elements, to the length of the pattern.
       *
       * @param counters observed counters
       * @param pattern expected pattern
       * @param maxIndividualVariance The most any counter can differ before we give up
       * @return ratio of total variance between counters and pattern compared to total pattern size
       */Detector.patternMatchVariance=function(counters,pattern,maxIndividualVariance){var numCounters=counters.length;var total=0;var patternLength=0;for(var i=0;i<numCounters;i++){total+=counters[i];patternLength+=pattern[i];}if(total<patternLength){// If we don't even have one pixel per unit of bar width, assume this
// is too small to reliably match, so fail:
return(/*Float.POSITIVE_INFINITY*/Infinity);}// We're going to fake floating-point math in integers. We just need to use more bits.
// Scale up patternLength so that intermediate values below like scaledCounter will have
// more "significant digits".
var unitBarWidth=total/patternLength;maxIndividualVariance*=unitBarWidth;var totalVariance=0.0;for(var x=0;x<numCounters;x++){var counter=counters[x];var scaledPattern=pattern[x]*unitBarWidth;var variance=counter>scaledPattern?counter-scaledPattern:scaledPattern-counter;if(variance>maxIndividualVariance){return(/*Float.POSITIVE_INFINITY*/Infinity);}totalVariance+=variance;}return totalVariance/total;};Detector.INDEXES_START_PATTERN=Int32Array.from([0,4,1,5]);Detector.INDEXES_STOP_PATTERN=Int32Array.from([6,2,7,3]);Detector.MAX_AVG_VARIANCE=0.42;Detector.MAX_INDIVIDUAL_VARIANCE=0.8;// B S B S B S B S Bar/Space pattern
// 11111111 0 1 0 1 0 1 000
Detector.START_PATTERN=Int32Array.from([8,1,1,1,1,1,1,3]);// 1111111 0 1 000 1 0 1 00 1
Detector.STOP_PATTERN=Int32Array.from([7,1,1,3,1,1,1,2,1]);Detector.MAX_PIXEL_DRIFT=3;Detector.MAX_PATTERN_DRIFT=5;// if we set the value too low, then we don't detect the correct height of the bar if the start patterns are damaged.
// if we set the value too high, then we might detect the start pattern from a neighbor barcode.
Detector.SKIPPED_ROW_COUNT_MAX=25;// A PDF471 barcode should have at least 3 rows, with each row being >= 3 times the module width. Therefore it should be at least
// 9 pixels tall. To be conservative, we use about half the size to ensure we don't miss it.
Detector.ROW_STEP=5;Detector.BARCODE_MIN_HEIGHT=10;return Detector;}();/*
  * Copyright 2012 ZXing authors
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */var __values$s=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};/**
   * @author Sean Owen
   * @see com.google.zxing.common.reedsolomon.GenericGFPoly
   */var ModulusPoly=/** @class */function(){function ModulusPoly(field,coefficients){if(coefficients.length===0){throw new IllegalArgumentException();}this.field=field;var coefficientsLength=/*int*/coefficients.length;if(coefficientsLength>1&&coefficients[0]===0){// Leading term must be non-zero for anything except the constant polynomial "0"
var firstNonZero=/*int*/1;while(firstNonZero<coefficientsLength&&coefficients[firstNonZero]===0){firstNonZero++;}if(firstNonZero===coefficientsLength){this.coefficients=new Int32Array([0]);}else{this.coefficients=new Int32Array(coefficientsLength-firstNonZero);System.arraycopy(coefficients,firstNonZero,this.coefficients,0,this.coefficients.length);}}else{this.coefficients=coefficients;}}ModulusPoly.prototype.getCoefficients=function(){return this.coefficients;};/**
       * @return degree of this polynomial
       */ModulusPoly.prototype.getDegree=function(){return this.coefficients.length-1;};/**
       * @return true iff this polynomial is the monomial "0"
       */ModulusPoly.prototype.isZero=function(){return this.coefficients[0]===0;};/**
       * @return coefficient of x^degree term in this polynomial
       */ModulusPoly.prototype.getCoefficient=function(degree){return this.coefficients[this.coefficients.length-1-degree];};/**
       * @return evaluation of this polynomial at a given point
       */ModulusPoly.prototype.evaluateAt=function(a){var e_1,_a;if(a===0){// Just return the x^0 coefficient
return this.getCoefficient(0);}if(a===1){// Just the sum of the coefficients
var sum=/*int*/0;try{for(var _b=__values$s(this.coefficients),_c=_b.next();!_c.done;_c=_b.next()){var coefficient=_c.value/*int*/;sum=this.field.add(sum,coefficient);}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(_c&&!_c.done&&(_a=_b.return))_a.call(_b);}finally{if(e_1)throw e_1.error;}}return sum;}var result=/*int*/this.coefficients[0];var size=/*int*/this.coefficients.length;for(var i/*int*/=1;i<size;i++){result=this.field.add(this.field.multiply(a,result),this.coefficients[i]);}return result;};ModulusPoly.prototype.add=function(other){if(!this.field.equals(other.field)){throw new IllegalArgumentException('ModulusPolys do not have same ModulusGF field');}if(this.isZero()){return other;}if(other.isZero()){return this;}var smallerCoefficients=this.coefficients;var largerCoefficients=other.coefficients;if(smallerCoefficients.length>largerCoefficients.length){var temp=smallerCoefficients;smallerCoefficients=largerCoefficients;largerCoefficients=temp;}var sumDiff=new Int32Array(largerCoefficients.length);var lengthDiff=/*int*/largerCoefficients.length-smallerCoefficients.length;// Copy high-order terms only found in higher-degree polynomial's coefficients
System.arraycopy(largerCoefficients,0,sumDiff,0,lengthDiff);for(var i/*int*/=lengthDiff;i<largerCoefficients.length;i++){sumDiff[i]=this.field.add(smallerCoefficients[i-lengthDiff],largerCoefficients[i]);}return new ModulusPoly(this.field,sumDiff);};ModulusPoly.prototype.subtract=function(other){if(!this.field.equals(other.field)){throw new IllegalArgumentException('ModulusPolys do not have same ModulusGF field');}if(other.isZero()){return this;}return this.add(other.negative());};ModulusPoly.prototype.multiply=function(other){if(other instanceof ModulusPoly){return this.multiplyOther(other);}return this.multiplyScalar(other);};ModulusPoly.prototype.multiplyOther=function(other){if(!this.field.equals(other.field)){throw new IllegalArgumentException('ModulusPolys do not have same ModulusGF field');}if(this.isZero()||other.isZero()){// return this.field.getZero();
return new ModulusPoly(this.field,new Int32Array([0]));}var aCoefficients=this.coefficients;var aLength=/*int*/aCoefficients.length;var bCoefficients=other.coefficients;var bLength=/*int*/bCoefficients.length;var product=new Int32Array(aLength+bLength-1);for(var i/*int*/=0;i<aLength;i++){var aCoeff=/*int*/aCoefficients[i];for(var j/*int*/=0;j<bLength;j++){product[i+j]=this.field.add(product[i+j],this.field.multiply(aCoeff,bCoefficients[j]));}}return new ModulusPoly(this.field,product);};ModulusPoly.prototype.negative=function(){var size=/*int*/this.coefficients.length;var negativeCoefficients=new Int32Array(size);for(var i/*int*/=0;i<size;i++){negativeCoefficients[i]=this.field.subtract(0,this.coefficients[i]);}return new ModulusPoly(this.field,negativeCoefficients);};ModulusPoly.prototype.multiplyScalar=function(scalar){if(scalar===0){return new ModulusPoly(this.field,new Int32Array([0]));}if(scalar===1){return this;}var size=/*int*/this.coefficients.length;var product=new Int32Array(size);for(var i/*int*/=0;i<size;i++){product[i]=this.field.multiply(this.coefficients[i],scalar);}return new ModulusPoly(this.field,product);};ModulusPoly.prototype.multiplyByMonomial=function(degree,coefficient){if(degree<0){throw new IllegalArgumentException();}if(coefficient===0){return new ModulusPoly(this.field,new Int32Array([0]));}var size=/*int*/this.coefficients.length;var product=new Int32Array(size+degree);for(var i/*int*/=0;i<size;i++){product[i]=this.field.multiply(this.coefficients[i],coefficient);}return new ModulusPoly(this.field,product);};/*
      ModulusPoly[] divide(other: ModulusPoly) {
        if (!field.equals(other.field)) {
          throw new IllegalArgumentException("ModulusPolys do not have same ModulusGF field");
        }
        if (other.isZero()) {
          throw new IllegalArgumentException("Divide by 0");
        }
    
        let quotient: ModulusPoly = field.getZero();
        let remainder: ModulusPoly = this;
    
        let denominatorLeadingTerm: /*int/ number = other.getCoefficient(other.getDegree());
        let inverseDenominatorLeadingTerm: /*int/ number = field.inverse(denominatorLeadingTerm);
    
        while (remainder.getDegree() >= other.getDegree() && !remainder.isZero()) {
          let degreeDifference: /*int/ number = remainder.getDegree() - other.getDegree();
          let scale: /*int/ number = field.multiply(remainder.getCoefficient(remainder.getDegree()), inverseDenominatorLeadingTerm);
          let term: ModulusPoly = other.multiplyByMonomial(degreeDifference, scale);
          let iterationQuotient: ModulusPoly = field.buildMonomial(degreeDifference, scale);
          quotient = quotient.add(iterationQuotient);
          remainder = remainder.subtract(term);
        }
    
        return new ModulusPoly[] { quotient, remainder };
      }
      */ // @Override
ModulusPoly.prototype.toString=function(){var result=new StringBuilder();// dynamic string size in JS
/*8 * this.getDegree()*/for(var degree/*int*/=this.getDegree();degree>=0;degree--){var coefficient=/*int*/this.getCoefficient(degree);if(coefficient!==0){if(coefficient<0){result.append(' - ');coefficient=-coefficient;}else{if(result.length()>0){result.append(' + ');}}if(degree===0||coefficient!==1){result.append(coefficient);}if(degree!==0){if(degree===1){result.append('x');}else{result.append('x^');result.append(degree);}}}}return result.toString();};return ModulusPoly;}();var ModulusBase=/** @class */function(){function ModulusBase(){}ModulusBase.prototype.add=function(a,b){return(a+b)%this.modulus;};ModulusBase.prototype.subtract=function(a,b){return(this.modulus+a-b)%this.modulus;};ModulusBase.prototype.exp=function(a){return this.expTable[a];};ModulusBase.prototype.log=function(a){if(a===0){throw new IllegalArgumentException();}return this.logTable[a];};ModulusBase.prototype.inverse=function(a){if(a===0){throw new ArithmeticException();}return this.expTable[this.modulus-this.logTable[a]-1];};ModulusBase.prototype.multiply=function(a,b){if(a===0||b===0){return 0;}return this.expTable[(this.logTable[a]+this.logTable[b])%(this.modulus-1)];};ModulusBase.prototype.getSize=function(){return this.modulus;};ModulusBase.prototype.equals=function(o){return o===this;};return ModulusBase;}();/*
   * Copyright 2012 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __extends$R=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * <p>A field based on powers of a generator integer, modulo some modulus.</p>
   *
   * @author Sean Owen
   * @see com.google.zxing.common.reedsolomon.GenericGF
   */var ModulusGF=/** @class */function(_super){__extends$R(ModulusGF,_super);// private /*final*/ modulus: /*int*/ number;
function ModulusGF(modulus,generator){var _this=_super.call(this)||this;_this.modulus=modulus;_this.expTable=new Int32Array(modulus);_this.logTable=new Int32Array(modulus);var x=/*int*/1;for(var i/*int*/=0;i<modulus;i++){_this.expTable[i]=x;x=x*generator%modulus;}for(var i/*int*/=0;i<modulus-1;i++){_this.logTable[_this.expTable[i]]=i;}// logTable[0] == 0 but this should never be used
_this.zero=new ModulusPoly(_this,new Int32Array([0]));_this.one=new ModulusPoly(_this,new Int32Array([1]));return _this;}ModulusGF.prototype.getZero=function(){return this.zero;};ModulusGF.prototype.getOne=function(){return this.one;};ModulusGF.prototype.buildMonomial=function(degree,coefficient){if(degree<0){throw new IllegalArgumentException();}if(coefficient===0){return this.zero;}var coefficients=new Int32Array(degree+1);coefficients[0]=coefficient;return new ModulusPoly(this,coefficients);};ModulusGF.PDF417_GF=new ModulusGF(PDF417Common.NUMBER_OF_CODEWORDS,3);return ModulusGF;}(ModulusBase);/*
  * Copyright 2012 ZXing authors
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */var __values$t=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};/**
   * <p>PDF417 error correction implementation.</p>
   *
   * <p>This <a href="http://en.wikipedia.org/wiki/Reed%E2%80%93Solomon_error_correction#Example">example</a>
   * is quite useful in understanding the algorithm.</p>
   *
   * @author Sean Owen
   * @see com.google.zxing.common.reedsolomon.ReedSolomonDecoder
   */var ErrorCorrection=/** @class */function(){function ErrorCorrection(){this.field=ModulusGF.PDF417_GF;}/**
       * @param received received codewords
       * @param numECCodewords number of those codewords used for EC
       * @param erasures location of erasures
       * @return number of errors
       * @throws ChecksumException if errors cannot be corrected, maybe because of too many errors
       */ErrorCorrection.prototype.decode=function(received,numECCodewords,erasures){var e_1,_a;var poly=new ModulusPoly(this.field,received);var S=new Int32Array(numECCodewords);var error=false;for(var i/*int*/=numECCodewords;i>0;i--){var evaluation=poly.evaluateAt(this.field.exp(i));S[numECCodewords-i]=evaluation;if(evaluation!==0){error=true;}}if(!error){return 0;}var knownErrors=this.field.getOne();if(erasures!=null){try{for(var erasures_1=__values$t(erasures),erasures_1_1=erasures_1.next();!erasures_1_1.done;erasures_1_1=erasures_1.next()){var erasure=erasures_1_1.value;var b=this.field.exp(received.length-1-erasure);// Add (1 - bx) term:
var term=new ModulusPoly(this.field,new Int32Array([this.field.subtract(0,b),1]));knownErrors=knownErrors.multiply(term);}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(erasures_1_1&&!erasures_1_1.done&&(_a=erasures_1.return))_a.call(erasures_1);}finally{if(e_1)throw e_1.error;}}}var syndrome=new ModulusPoly(this.field,S);// syndrome = syndrome.multiply(knownErrors);
var sigmaOmega=this.runEuclideanAlgorithm(this.field.buildMonomial(numECCodewords,1),syndrome,numECCodewords);var sigma=sigmaOmega[0];var omega=sigmaOmega[1];// sigma = sigma.multiply(knownErrors);
var errorLocations=this.findErrorLocations(sigma);var errorMagnitudes=this.findErrorMagnitudes(omega,sigma,errorLocations);for(var i/*int*/=0;i<errorLocations.length;i++){var position=received.length-1-this.field.log(errorLocations[i]);if(position<0){throw ChecksumException.getChecksumInstance();}received[position]=this.field.subtract(received[position],errorMagnitudes[i]);}return errorLocations.length;};/**
       *
       * @param ModulusPoly
       * @param a
       * @param ModulusPoly
       * @param b
       * @param int
       * @param R
       * @throws ChecksumException
       */ErrorCorrection.prototype.runEuclideanAlgorithm=function(a,b,R){// Assume a's degree is >= b's
if(a.getDegree()<b.getDegree()){var temp=a;a=b;b=temp;}var rLast=a;var r=b;var tLast=this.field.getZero();var t=this.field.getOne();// Run Euclidean algorithm until r's degree is less than R/2
while(r.getDegree()>=Math.round(R/2)){var rLastLast=rLast;var tLastLast=tLast;rLast=r;tLast=t;// Divide rLastLast by rLast, with quotient in q and remainder in r
if(rLast.isZero()){// Oops, Euclidean algorithm already terminated?
throw ChecksumException.getChecksumInstance();}r=rLastLast;var q=this.field.getZero();var denominatorLeadingTerm=rLast.getCoefficient(rLast.getDegree());var dltInverse=this.field.inverse(denominatorLeadingTerm);while(r.getDegree()>=rLast.getDegree()&&!r.isZero()){var degreeDiff=r.getDegree()-rLast.getDegree();var scale=this.field.multiply(r.getCoefficient(r.getDegree()),dltInverse);q=q.add(this.field.buildMonomial(degreeDiff,scale));r=r.subtract(rLast.multiplyByMonomial(degreeDiff,scale));}t=q.multiply(tLast).subtract(tLastLast).negative();}var sigmaTildeAtZero=t.getCoefficient(0);if(sigmaTildeAtZero===0){throw ChecksumException.getChecksumInstance();}var inverse=this.field.inverse(sigmaTildeAtZero);var sigma=t.multiply(inverse);var omega=r.multiply(inverse);return[sigma,omega];};/**
       *
       * @param errorLocator
       * @throws ChecksumException
       */ErrorCorrection.prototype.findErrorLocations=function(errorLocator){// This is a direct application of Chien's search
var numErrors=errorLocator.getDegree();var result=new Int32Array(numErrors);var e=0;for(var i/*int*/=1;i<this.field.getSize()&&e<numErrors;i++){if(errorLocator.evaluateAt(i)===0){result[e]=this.field.inverse(i);e++;}}if(e!==numErrors){throw ChecksumException.getChecksumInstance();}return result;};ErrorCorrection.prototype.findErrorMagnitudes=function(errorEvaluator,errorLocator,errorLocations){var errorLocatorDegree=errorLocator.getDegree();var formalDerivativeCoefficients=new Int32Array(errorLocatorDegree);for(var i/*int*/=1;i<=errorLocatorDegree;i++){formalDerivativeCoefficients[errorLocatorDegree-i]=this.field.multiply(i,errorLocator.getCoefficient(i));}var formalDerivative=new ModulusPoly(this.field,formalDerivativeCoefficients);// This is directly applying Forney's Formula
var s=errorLocations.length;var result=new Int32Array(s);for(var i/*int*/=0;i<s;i++){var xiInverse=this.field.inverse(errorLocations[i]);var numerator=this.field.subtract(0,errorEvaluator.evaluateAt(xiInverse));var denominator=this.field.inverse(formalDerivative.evaluateAt(xiInverse));result[i]=this.field.multiply(numerator,denominator);}return result;};return ErrorCorrection;}();/*
  * Copyright 2013 ZXing authors
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */ /**
   * @author Guenther Grau
   */var BoundingBox=/** @class */function(){function BoundingBox(image,topLeft,bottomLeft,topRight,bottomRight){if(image instanceof BoundingBox){this.constructor_2(image);}else{this.constructor_1(image,topLeft,bottomLeft,topRight,bottomRight);}}/**
       *
       * @param image
       * @param topLeft
       * @param bottomLeft
       * @param topRight
       * @param bottomRight
       *
       * @throws NotFoundException
       */BoundingBox.prototype.constructor_1=function(image,topLeft,bottomLeft,topRight,bottomRight){var leftUnspecified=topLeft==null||bottomLeft==null;var rightUnspecified=topRight==null||bottomRight==null;if(leftUnspecified&&rightUnspecified){throw new NotFoundException();}if(leftUnspecified){topLeft=new ResultPoint(0,topRight.getY());bottomLeft=new ResultPoint(0,bottomRight.getY());}else if(rightUnspecified){topRight=new ResultPoint(image.getWidth()-1,topLeft.getY());bottomRight=new ResultPoint(image.getWidth()-1,bottomLeft.getY());}this.image=image;this.topLeft=topLeft;this.bottomLeft=bottomLeft;this.topRight=topRight;this.bottomRight=bottomRight;this.minX=Math.trunc(Math.min(topLeft.getX(),bottomLeft.getX()));this.maxX=Math.trunc(Math.max(topRight.getX(),bottomRight.getX()));this.minY=Math.trunc(Math.min(topLeft.getY(),topRight.getY()));this.maxY=Math.trunc(Math.max(bottomLeft.getY(),bottomRight.getY()));};BoundingBox.prototype.constructor_2=function(boundingBox){this.image=boundingBox.image;this.topLeft=boundingBox.getTopLeft();this.bottomLeft=boundingBox.getBottomLeft();this.topRight=boundingBox.getTopRight();this.bottomRight=boundingBox.getBottomRight();this.minX=boundingBox.getMinX();this.maxX=boundingBox.getMaxX();this.minY=boundingBox.getMinY();this.maxY=boundingBox.getMaxY();};/**
       * @throws NotFoundException
       */BoundingBox.merge=function(leftBox,rightBox){if(leftBox==null){return rightBox;}if(rightBox==null){return leftBox;}return new BoundingBox(leftBox.image,leftBox.topLeft,leftBox.bottomLeft,rightBox.topRight,rightBox.bottomRight);};/**
       * @throws NotFoundException
       */BoundingBox.prototype.addMissingRows=function(missingStartRows,missingEndRows,isLeft){var newTopLeft=this.topLeft;var newBottomLeft=this.bottomLeft;var newTopRight=this.topRight;var newBottomRight=this.bottomRight;if(missingStartRows>0){var top_1=isLeft?this.topLeft:this.topRight;var newMinY=Math.trunc(top_1.getY()-missingStartRows);if(newMinY<0){newMinY=0;}var newTop=new ResultPoint(top_1.getX(),newMinY);if(isLeft){newTopLeft=newTop;}else{newTopRight=newTop;}}if(missingEndRows>0){var bottom=isLeft?this.bottomLeft:this.bottomRight;var newMaxY=Math.trunc(bottom.getY()+missingEndRows);if(newMaxY>=this.image.getHeight()){newMaxY=this.image.getHeight()-1;}var newBottom=new ResultPoint(bottom.getX(),newMaxY);if(isLeft){newBottomLeft=newBottom;}else{newBottomRight=newBottom;}}return new BoundingBox(this.image,newTopLeft,newBottomLeft,newTopRight,newBottomRight);};BoundingBox.prototype.getMinX=function(){return this.minX;};BoundingBox.prototype.getMaxX=function(){return this.maxX;};BoundingBox.prototype.getMinY=function(){return this.minY;};BoundingBox.prototype.getMaxY=function(){return this.maxY;};BoundingBox.prototype.getTopLeft=function(){return this.topLeft;};BoundingBox.prototype.getTopRight=function(){return this.topRight;};BoundingBox.prototype.getBottomLeft=function(){return this.bottomLeft;};BoundingBox.prototype.getBottomRight=function(){return this.bottomRight;};return BoundingBox;}();/*
   * Copyright 2013 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ // package com.google.zxing.pdf417.decoder;
/**
   * @author Guenther Grau
   */var BarcodeMetadata=/** @class */function(){function BarcodeMetadata(columnCount,rowCountUpperPart,rowCountLowerPart,errorCorrectionLevel){this.columnCount=columnCount;this.errorCorrectionLevel=errorCorrectionLevel;this.rowCountUpperPart=rowCountUpperPart;this.rowCountLowerPart=rowCountLowerPart;this.rowCount=rowCountUpperPart+rowCountLowerPart;}BarcodeMetadata.prototype.getColumnCount=function(){return this.columnCount;};BarcodeMetadata.prototype.getErrorCorrectionLevel=function(){return this.errorCorrectionLevel;};BarcodeMetadata.prototype.getRowCount=function(){return this.rowCount;};BarcodeMetadata.prototype.getRowCountUpperPart=function(){return this.rowCountUpperPart;};BarcodeMetadata.prototype.getRowCountLowerPart=function(){return this.rowCountLowerPart;};return BarcodeMetadata;}();/**
   * Java Formatter class polyfill that works in the JS way.
   */var Formatter=/** @class */function(){function Formatter(){this.buffer='';}/**
       *
       * @see https://stackoverflow.com/a/13439711/4367683
       *
       * @param str
       * @param arr
       */Formatter.form=function(str,arr){var i=-1;function callback(exp,p0,p1,p2,p3,p4){if(exp==='%%')return'%';if(arr[++i]===undefined)return undefined;exp=p2?parseInt(p2.substr(1)):undefined;var base=p3?parseInt(p3.substr(1)):undefined;var val;switch(p4){case's':val=arr[i];break;case'c':val=arr[i][0];break;case'f':val=parseFloat(arr[i]).toFixed(exp);break;case'p':val=parseFloat(arr[i]).toPrecision(exp);break;case'e':val=parseFloat(arr[i]).toExponential(exp);break;case'x':val=parseInt(arr[i]).toString(base?base:16);break;case'd':val=parseFloat(parseInt(arr[i],base?base:10).toPrecision(exp)).toFixed(0);break;}val=typeof val==='object'?JSON.stringify(val):(+val).toString(base);var size=parseInt(p1);/* padding size */var ch=p1&&p1[0]+''==='0'?'0':' ';/* isnull? */while(val.length<size)val=p0!==undefined?val+ch:ch+val;/* isminus? */return val;}var regex=/%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g;return str.replace(regex,callback);};/**
       *
       * @param append The new string to append.
       * @param args Argumets values to be formated.
       */Formatter.prototype.format=function(append){var args=[];for(var _i=1;_i<arguments.length;_i++){args[_i-1]=arguments[_i];}this.buffer+=Formatter.form(append,args);};/**
       * Returns the Formatter string value.
       */Formatter.prototype.toString=function(){return this.buffer;};return Formatter;}();/*
   * Copyright 2013 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __values$u=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};/**
   * @author Guenther Grau
   */var DetectionResultColumn=/** @class */function(){function DetectionResultColumn(boundingBox){this.boundingBox=new BoundingBox(boundingBox);// this.codewords = new Codeword[boundingBox.getMaxY() - boundingBox.getMinY() + 1];
this.codewords=new Array(boundingBox.getMaxY()-boundingBox.getMinY()+1);}/*final*/DetectionResultColumn.prototype.getCodewordNearby=function(imageRow){var codeword=this.getCodeword(imageRow);if(codeword!=null){return codeword;}for(var i=1;i<DetectionResultColumn.MAX_NEARBY_DISTANCE;i++){var nearImageRow=this.imageRowToCodewordIndex(imageRow)-i;if(nearImageRow>=0){codeword=this.codewords[nearImageRow];if(codeword!=null){return codeword;}}nearImageRow=this.imageRowToCodewordIndex(imageRow)+i;if(nearImageRow<this.codewords.length){codeword=this.codewords[nearImageRow];if(codeword!=null){return codeword;}}}return null;};/*final int*/DetectionResultColumn.prototype.imageRowToCodewordIndex=function(imageRow){return imageRow-this.boundingBox.getMinY();};/*final void*/DetectionResultColumn.prototype.setCodeword=function(imageRow,codeword){this.codewords[this.imageRowToCodewordIndex(imageRow)]=codeword;};/*final*/DetectionResultColumn.prototype.getCodeword=function(imageRow){return this.codewords[this.imageRowToCodewordIndex(imageRow)];};/*final*/DetectionResultColumn.prototype.getBoundingBox=function(){return this.boundingBox;};/*final*/DetectionResultColumn.prototype.getCodewords=function(){return this.codewords;};// @Override
DetectionResultColumn.prototype.toString=function(){var e_1,_a;var formatter=new Formatter();var row=0;try{for(var _b=__values$u(this.codewords),_c=_b.next();!_c.done;_c=_b.next()){var codeword=_c.value;if(codeword==null){formatter.format('%3d:    |   %n',row++);continue;}formatter.format('%3d: %3d|%3d%n',row++,codeword.getRowNumber(),codeword.getValue());}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(_c&&!_c.done&&(_a=_b.return))_a.call(_b);}finally{if(e_1)throw e_1.error;}}return formatter.toString();};DetectionResultColumn.MAX_NEARBY_DISTANCE=5;return DetectionResultColumn;}();/*
   * Copyright 2013 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __values$v=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};var __read=undefined&&undefined.__read||function(o,n){var m=typeof Symbol==="function"&&o[Symbol.iterator];if(!m)return o;var i=m.call(o),r,ar=[],e;try{while((n===void 0||n-->0)&&!(r=i.next()).done)ar.push(r.value);}catch(error){e={error:error};}finally{try{if(r&&!r.done&&(m=i["return"]))m.call(i);}finally{if(e)throw e.error;}}return ar;};// import java.util.ArrayList;
// import java.util.Collection;
// import java.util.HashMap;
// import java.util.Map;
// import java.util.Map.Entry;
/**
   * @author Guenther Grau
   */var BarcodeValue=/** @class */function(){function BarcodeValue(){this.values=new Map();}/**
       * Add an occurrence of a value
       */BarcodeValue.prototype.setValue=function(value){value=Math.trunc(value);var confidence=this.values.get(value);if(confidence==null){confidence=0;}confidence++;this.values.set(value,confidence);};/**
       * Determines the maximum occurrence of a set value and returns all values which were set with this occurrence.
       * @return an array of int, containing the values with the highest occurrence, or null, if no value was set
       */BarcodeValue.prototype.getValue=function(){var e_1,_a;var maxConfidence=-1;var result=new Array();var _loop_1=function(key,value){var entry={getKey:function(){return key;},getValue:function(){return value;}};if(entry.getValue()>maxConfidence){maxConfidence=entry.getValue();result=[];result.push(entry.getKey());}else if(entry.getValue()===maxConfidence){result.push(entry.getKey());}};try{for(var _b=__values$v(this.values.entries()),_c=_b.next();!_c.done;_c=_b.next()){var _d=__read(_c.value,2),key=_d[0],value=_d[1];_loop_1(key,value);}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(_c&&!_c.done&&(_a=_b.return))_a.call(_b);}finally{if(e_1)throw e_1.error;}}return PDF417Common.toIntArray(result);};BarcodeValue.prototype.getConfidence=function(value){return this.values.get(value);};return BarcodeValue;}();/*
   * Copyright 2013 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __extends$S=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __values$w=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};/**
   * @author Guenther Grau
   */var DetectionResultRowIndicatorColumn=/** @class */function(_super){__extends$S(DetectionResultRowIndicatorColumn,_super);function DetectionResultRowIndicatorColumn(boundingBox,isLeft){var _this=_super.call(this,boundingBox)||this;_this._isLeft=isLeft;return _this;}DetectionResultRowIndicatorColumn.prototype.setRowNumbers=function(){var e_1,_a;try{for(var _b=__values$w(this.getCodewords()),_c=_b.next();!_c.done;_c=_b.next()){var codeword=_c.value/*Codeword*/;if(codeword!=null){codeword.setRowNumberAsRowIndicatorColumn();}}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(_c&&!_c.done&&(_a=_b.return))_a.call(_b);}finally{if(e_1)throw e_1.error;}}};// TODO implement properly
// TODO maybe we should add missing codewords to store the correct row number to make
// finding row numbers for other columns easier
// use row height count to make detection of invalid row numbers more reliable
DetectionResultRowIndicatorColumn.prototype.adjustCompleteIndicatorColumnRowNumbers=function(barcodeMetadata){var codewords=this.getCodewords();this.setRowNumbers();this.removeIncorrectCodewords(codewords,barcodeMetadata);var boundingBox=this.getBoundingBox();var top=this._isLeft?boundingBox.getTopLeft():boundingBox.getTopRight();var bottom=this._isLeft?boundingBox.getBottomLeft():boundingBox.getBottomRight();var firstRow=this.imageRowToCodewordIndex(Math.trunc(top.getY()));var lastRow=this.imageRowToCodewordIndex(Math.trunc(bottom.getY()));// We need to be careful using the average row height. Barcode could be skewed so that we have smaller and
// taller rows
// float averageRowHeight = (lastRow - firstRow) / /*(float)*/ barcodeMetadata.getRowCount();
var barcodeRow=-1;var maxRowHeight=1;var currentRowHeight=0;for(var codewordsRow/*int*/=firstRow;codewordsRow<lastRow;codewordsRow++){if(codewords[codewordsRow]==null){continue;}var codeword=codewords[codewordsRow];//      float expectedRowNumber = (codewordsRow - firstRow) / averageRowHeight;
//      if (Math.abs(codeword.getRowNumber() - expectedRowNumber) > 2) {
//        SimpleLog.log(LEVEL.WARNING,
//            "Removing codeword, rowNumberSkew too high, codeword[" + codewordsRow + "]: Expected Row: " +
//                expectedRowNumber + ", RealRow: " + codeword.getRowNumber() + ", value: " + codeword.getValue());
//        codewords[codewordsRow] = null;
//      }
var rowDifference=codeword.getRowNumber()-barcodeRow;// TODO improve handling with case where first row indicator doesn't start with 0
if(rowDifference===0){currentRowHeight++;}else if(rowDifference===1){maxRowHeight=Math.max(maxRowHeight,currentRowHeight);currentRowHeight=1;barcodeRow=codeword.getRowNumber();}else if(rowDifference<0||codeword.getRowNumber()>=barcodeMetadata.getRowCount()||rowDifference>codewordsRow){codewords[codewordsRow]=null;}else{var checkedRows=void 0;if(maxRowHeight>2){checkedRows=(maxRowHeight-2)*rowDifference;}else{checkedRows=rowDifference;}var closePreviousCodewordFound=checkedRows>=codewordsRow;for(var i/*int*/=1;i<=checkedRows&&!closePreviousCodewordFound;i++){// there must be (height * rowDifference) number of codewords missing. For now we assume height = 1.
// This should hopefully get rid of most problems already.
closePreviousCodewordFound=codewords[codewordsRow-i]!=null;}if(closePreviousCodewordFound){codewords[codewordsRow]=null;}else{barcodeRow=codeword.getRowNumber();currentRowHeight=1;}}}// return (int) (averageRowHeight + 0.5);
};DetectionResultRowIndicatorColumn.prototype.getRowHeights=function(){var e_2,_a;var barcodeMetadata=this.getBarcodeMetadata();if(barcodeMetadata==null){return null;}this.adjustIncompleteIndicatorColumnRowNumbers(barcodeMetadata);var result=new Int32Array(barcodeMetadata.getRowCount());try{for(var _b=__values$w(this.getCodewords()),_c=_b.next();!_c.done;_c=_b.next()){var codeword=_c.value/*Codeword*/;if(codeword!=null){var rowNumber=codeword.getRowNumber();if(rowNumber>=result.length){// We have more rows than the barcode metadata allows for, ignore them.
continue;}result[rowNumber]++;}// else throw exception?
}}catch(e_2_1){e_2={error:e_2_1};}finally{try{if(_c&&!_c.done&&(_a=_b.return))_a.call(_b);}finally{if(e_2)throw e_2.error;}}return result;};// TODO maybe we should add missing codewords to store the correct row number to make
// finding row numbers for other columns easier
// use row height count to make detection of invalid row numbers more reliable
DetectionResultRowIndicatorColumn.prototype.adjustIncompleteIndicatorColumnRowNumbers=function(barcodeMetadata){var boundingBox=this.getBoundingBox();var top=this._isLeft?boundingBox.getTopLeft():boundingBox.getTopRight();var bottom=this._isLeft?boundingBox.getBottomLeft():boundingBox.getBottomRight();var firstRow=this.imageRowToCodewordIndex(Math.trunc(top.getY()));var lastRow=this.imageRowToCodewordIndex(Math.trunc(bottom.getY()));// float averageRowHeight = (lastRow - firstRow) / /*(float)*/ barcodeMetadata.getRowCount();
var codewords=this.getCodewords();var barcodeRow=-1;for(var codewordsRow/*int*/=firstRow;codewordsRow<lastRow;codewordsRow++){if(codewords[codewordsRow]==null){continue;}var codeword=codewords[codewordsRow];codeword.setRowNumberAsRowIndicatorColumn();var rowDifference=codeword.getRowNumber()-barcodeRow;// TODO improve handling with case where first row indicator doesn't start with 0
if(rowDifference===0);else if(rowDifference===1){barcodeRow=codeword.getRowNumber();}else if(codeword.getRowNumber()>=barcodeMetadata.getRowCount()){codewords[codewordsRow]=null;}else{barcodeRow=codeword.getRowNumber();}}// return (int) (averageRowHeight + 0.5);
};DetectionResultRowIndicatorColumn.prototype.getBarcodeMetadata=function(){var e_3,_a;var codewords=this.getCodewords();var barcodeColumnCount=new BarcodeValue();var barcodeRowCountUpperPart=new BarcodeValue();var barcodeRowCountLowerPart=new BarcodeValue();var barcodeECLevel=new BarcodeValue();try{for(var codewords_1=__values$w(codewords),codewords_1_1=codewords_1.next();!codewords_1_1.done;codewords_1_1=codewords_1.next()){var codeword=codewords_1_1.value/*Codeword*/;if(codeword==null){continue;}codeword.setRowNumberAsRowIndicatorColumn();var rowIndicatorValue=codeword.getValue()%30;var codewordRowNumber=codeword.getRowNumber();if(!this._isLeft){codewordRowNumber+=2;}switch(codewordRowNumber%3){case 0:barcodeRowCountUpperPart.setValue(rowIndicatorValue*3+1);break;case 1:barcodeECLevel.setValue(rowIndicatorValue/3);barcodeRowCountLowerPart.setValue(rowIndicatorValue%3);break;case 2:barcodeColumnCount.setValue(rowIndicatorValue+1);break;}}}catch(e_3_1){e_3={error:e_3_1};}finally{try{if(codewords_1_1&&!codewords_1_1.done&&(_a=codewords_1.return))_a.call(codewords_1);}finally{if(e_3)throw e_3.error;}}// Maybe we should check if we have ambiguous values?
if(barcodeColumnCount.getValue().length===0||barcodeRowCountUpperPart.getValue().length===0||barcodeRowCountLowerPart.getValue().length===0||barcodeECLevel.getValue().length===0||barcodeColumnCount.getValue()[0]<1||barcodeRowCountUpperPart.getValue()[0]+barcodeRowCountLowerPart.getValue()[0]<PDF417Common.MIN_ROWS_IN_BARCODE||barcodeRowCountUpperPart.getValue()[0]+barcodeRowCountLowerPart.getValue()[0]>PDF417Common.MAX_ROWS_IN_BARCODE){return null;}var barcodeMetadata=new BarcodeMetadata(barcodeColumnCount.getValue()[0],barcodeRowCountUpperPart.getValue()[0],barcodeRowCountLowerPart.getValue()[0],barcodeECLevel.getValue()[0]);this.removeIncorrectCodewords(codewords,barcodeMetadata);return barcodeMetadata;};DetectionResultRowIndicatorColumn.prototype.removeIncorrectCodewords=function(codewords,barcodeMetadata){// Remove codewords which do not match the metadata
// TODO Maybe we should keep the incorrect codewords for the start and end positions?
for(var codewordRow/*int*/=0;codewordRow<codewords.length;codewordRow++){var codeword=codewords[codewordRow];if(codewords[codewordRow]==null){continue;}var rowIndicatorValue=codeword.getValue()%30;var codewordRowNumber=codeword.getRowNumber();if(codewordRowNumber>barcodeMetadata.getRowCount()){codewords[codewordRow]=null;continue;}if(!this._isLeft){codewordRowNumber+=2;}switch(codewordRowNumber%3){case 0:if(rowIndicatorValue*3+1!==barcodeMetadata.getRowCountUpperPart()){codewords[codewordRow]=null;}break;case 1:if(Math.trunc(rowIndicatorValue/3)!==barcodeMetadata.getErrorCorrectionLevel()||rowIndicatorValue%3!==barcodeMetadata.getRowCountLowerPart()){codewords[codewordRow]=null;}break;case 2:if(rowIndicatorValue+1!==barcodeMetadata.getColumnCount()){codewords[codewordRow]=null;}break;}}};DetectionResultRowIndicatorColumn.prototype.isLeft=function(){return this._isLeft;};// @Override
DetectionResultRowIndicatorColumn.prototype.toString=function(){return'IsLeft: '+this._isLeft+'\n'+_super.prototype.toString.call(this);};return DetectionResultRowIndicatorColumn;}(DetectionResultColumn);/*
   * Copyright 2013 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __values$x=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};/**
   * @author Guenther Grau
   */var DetectionResult=/** @class */function(){function DetectionResult(barcodeMetadata,boundingBox){/*final*/this.ADJUST_ROW_NUMBER_SKIP=2;this.barcodeMetadata=barcodeMetadata;this.barcodeColumnCount=barcodeMetadata.getColumnCount();this.boundingBox=boundingBox;// this.detectionResultColumns = new DetectionResultColumn[this.barcodeColumnCount + 2];
this.detectionResultColumns=new Array(this.barcodeColumnCount+2);}DetectionResult.prototype.getDetectionResultColumns=function(){this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[0]);this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[this.barcodeColumnCount+1]);var unadjustedCodewordCount=PDF417Common.MAX_CODEWORDS_IN_BARCODE;var previousUnadjustedCount;do{previousUnadjustedCount=unadjustedCodewordCount;unadjustedCodewordCount=this.adjustRowNumbersAndGetCount();}while(unadjustedCodewordCount>0&&unadjustedCodewordCount<previousUnadjustedCount);return this.detectionResultColumns;};DetectionResult.prototype.adjustIndicatorColumnRowNumbers=function(detectionResultColumn){if(detectionResultColumn!=null){detectionResultColumn.adjustCompleteIndicatorColumnRowNumbers(this.barcodeMetadata);}};// TODO ensure that no detected codewords with unknown row number are left
// we should be able to estimate the row height and use it as a hint for the row number
// we should also fill the rows top to bottom and bottom to top
/**
       * @return number of codewords which don't have a valid row number. Note that the count is not accurate as codewords
       * will be counted several times. It just serves as an indicator to see when we can stop adjusting row numbers
       */DetectionResult.prototype.adjustRowNumbersAndGetCount=function(){var unadjustedCount=this.adjustRowNumbersByRow();if(unadjustedCount===0){return 0;}for(var barcodeColumn/*int*/=1;barcodeColumn<this.barcodeColumnCount+1;barcodeColumn++){var codewords=this.detectionResultColumns[barcodeColumn].getCodewords();for(var codewordsRow/*int*/=0;codewordsRow<codewords.length;codewordsRow++){if(codewords[codewordsRow]==null){continue;}if(!codewords[codewordsRow].hasValidRowNumber()){this.adjustRowNumbers(barcodeColumn,codewordsRow,codewords);}}}return unadjustedCount;};DetectionResult.prototype.adjustRowNumbersByRow=function(){this.adjustRowNumbersFromBothRI();// TODO we should only do full row adjustments if row numbers of left and right row indicator column match.
// Maybe it's even better to calculated the height (rows: d) and divide it by the number of barcode
// rows. This, together with the LRI and RRI row numbers should allow us to get a good estimate where a row
// number starts and ends.
var unadjustedCount=this.adjustRowNumbersFromLRI();return unadjustedCount+this.adjustRowNumbersFromRRI();};DetectionResult.prototype.adjustRowNumbersFromBothRI=function(){if(this.detectionResultColumns[0]==null||this.detectionResultColumns[this.barcodeColumnCount+1]==null){return;}var LRIcodewords=this.detectionResultColumns[0].getCodewords();var RRIcodewords=this.detectionResultColumns[this.barcodeColumnCount+1].getCodewords();for(var codewordsRow/*int*/=0;codewordsRow<LRIcodewords.length;codewordsRow++){if(LRIcodewords[codewordsRow]!=null&&RRIcodewords[codewordsRow]!=null&&LRIcodewords[codewordsRow].getRowNumber()===RRIcodewords[codewordsRow].getRowNumber()){for(var barcodeColumn/*int*/=1;barcodeColumn<=this.barcodeColumnCount;barcodeColumn++){var codeword=this.detectionResultColumns[barcodeColumn].getCodewords()[codewordsRow];if(codeword==null){continue;}codeword.setRowNumber(LRIcodewords[codewordsRow].getRowNumber());if(!codeword.hasValidRowNumber()){this.detectionResultColumns[barcodeColumn].getCodewords()[codewordsRow]=null;}}}}};DetectionResult.prototype.adjustRowNumbersFromRRI=function(){if(this.detectionResultColumns[this.barcodeColumnCount+1]==null){return 0;}var unadjustedCount=0;var codewords=this.detectionResultColumns[this.barcodeColumnCount+1].getCodewords();for(var codewordsRow/*int*/=0;codewordsRow<codewords.length;codewordsRow++){if(codewords[codewordsRow]==null){continue;}var rowIndicatorRowNumber=codewords[codewordsRow].getRowNumber();var invalidRowCounts=0;for(var barcodeColumn/*int*/=this.barcodeColumnCount+1;barcodeColumn>0&&invalidRowCounts<this.ADJUST_ROW_NUMBER_SKIP;barcodeColumn--){var codeword=this.detectionResultColumns[barcodeColumn].getCodewords()[codewordsRow];if(codeword!=null){invalidRowCounts=DetectionResult.adjustRowNumberIfValid(rowIndicatorRowNumber,invalidRowCounts,codeword);if(!codeword.hasValidRowNumber()){unadjustedCount++;}}}}return unadjustedCount;};DetectionResult.prototype.adjustRowNumbersFromLRI=function(){if(this.detectionResultColumns[0]==null){return 0;}var unadjustedCount=0;var codewords=this.detectionResultColumns[0].getCodewords();for(var codewordsRow/*int*/=0;codewordsRow<codewords.length;codewordsRow++){if(codewords[codewordsRow]==null){continue;}var rowIndicatorRowNumber=codewords[codewordsRow].getRowNumber();var invalidRowCounts=0;for(var barcodeColumn/*int*/=1;barcodeColumn<this.barcodeColumnCount+1&&invalidRowCounts<this.ADJUST_ROW_NUMBER_SKIP;barcodeColumn++){var codeword=this.detectionResultColumns[barcodeColumn].getCodewords()[codewordsRow];if(codeword!=null){invalidRowCounts=DetectionResult.adjustRowNumberIfValid(rowIndicatorRowNumber,invalidRowCounts,codeword);if(!codeword.hasValidRowNumber()){unadjustedCount++;}}}}return unadjustedCount;};DetectionResult.adjustRowNumberIfValid=function(rowIndicatorRowNumber,invalidRowCounts,codeword){if(codeword==null){return invalidRowCounts;}if(!codeword.hasValidRowNumber()){if(codeword.isValidRowNumber(rowIndicatorRowNumber)){codeword.setRowNumber(rowIndicatorRowNumber);invalidRowCounts=0;}else{++invalidRowCounts;}}return invalidRowCounts;};DetectionResult.prototype.adjustRowNumbers=function(barcodeColumn,codewordsRow,codewords){var e_1,_a;var codeword=codewords[codewordsRow];var previousColumnCodewords=this.detectionResultColumns[barcodeColumn-1].getCodewords();var nextColumnCodewords=previousColumnCodewords;if(this.detectionResultColumns[barcodeColumn+1]!=null){nextColumnCodewords=this.detectionResultColumns[barcodeColumn+1].getCodewords();}// let otherCodewords: Codeword[] = new Codeword[14];
var otherCodewords=new Array(14);otherCodewords[2]=previousColumnCodewords[codewordsRow];otherCodewords[3]=nextColumnCodewords[codewordsRow];if(codewordsRow>0){otherCodewords[0]=codewords[codewordsRow-1];otherCodewords[4]=previousColumnCodewords[codewordsRow-1];otherCodewords[5]=nextColumnCodewords[codewordsRow-1];}if(codewordsRow>1){otherCodewords[8]=codewords[codewordsRow-2];otherCodewords[10]=previousColumnCodewords[codewordsRow-2];otherCodewords[11]=nextColumnCodewords[codewordsRow-2];}if(codewordsRow<codewords.length-1){otherCodewords[1]=codewords[codewordsRow+1];otherCodewords[6]=previousColumnCodewords[codewordsRow+1];otherCodewords[7]=nextColumnCodewords[codewordsRow+1];}if(codewordsRow<codewords.length-2){otherCodewords[9]=codewords[codewordsRow+2];otherCodewords[12]=previousColumnCodewords[codewordsRow+2];otherCodewords[13]=nextColumnCodewords[codewordsRow+2];}try{for(var otherCodewords_1=__values$x(otherCodewords),otherCodewords_1_1=otherCodewords_1.next();!otherCodewords_1_1.done;otherCodewords_1_1=otherCodewords_1.next()){var otherCodeword=otherCodewords_1_1.value;if(DetectionResult.adjustRowNumber(codeword,otherCodeword)){return;}}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(otherCodewords_1_1&&!otherCodewords_1_1.done&&(_a=otherCodewords_1.return))_a.call(otherCodewords_1);}finally{if(e_1)throw e_1.error;}}};/**
       * @return true, if row number was adjusted, false otherwise
       */DetectionResult.adjustRowNumber=function(codeword,otherCodeword){if(otherCodeword==null){return false;}if(otherCodeword.hasValidRowNumber()&&otherCodeword.getBucket()===codeword.getBucket()){codeword.setRowNumber(otherCodeword.getRowNumber());return true;}return false;};DetectionResult.prototype.getBarcodeColumnCount=function(){return this.barcodeColumnCount;};DetectionResult.prototype.getBarcodeRowCount=function(){return this.barcodeMetadata.getRowCount();};DetectionResult.prototype.getBarcodeECLevel=function(){return this.barcodeMetadata.getErrorCorrectionLevel();};DetectionResult.prototype.setBoundingBox=function(boundingBox){this.boundingBox=boundingBox;};DetectionResult.prototype.getBoundingBox=function(){return this.boundingBox;};DetectionResult.prototype.setDetectionResultColumn=function(barcodeColumn,detectionResultColumn){this.detectionResultColumns[barcodeColumn]=detectionResultColumn;};DetectionResult.prototype.getDetectionResultColumn=function(barcodeColumn){return this.detectionResultColumns[barcodeColumn];};// @Override
DetectionResult.prototype.toString=function(){var rowIndicatorColumn=this.detectionResultColumns[0];if(rowIndicatorColumn==null){rowIndicatorColumn=this.detectionResultColumns[this.barcodeColumnCount+1];}// try (
var formatter=new Formatter();// ) {
for(var codewordsRow/*int*/=0;codewordsRow<rowIndicatorColumn.getCodewords().length;codewordsRow++){formatter.format('CW %3d:',codewordsRow);for(var barcodeColumn/*int*/=0;barcodeColumn<this.barcodeColumnCount+2;barcodeColumn++){if(this.detectionResultColumns[barcodeColumn]==null){formatter.format('    |   ');continue;}var codeword=this.detectionResultColumns[barcodeColumn].getCodewords()[codewordsRow];if(codeword==null){formatter.format('    |   ');continue;}formatter.format(' %3d|%3d',codeword.getRowNumber(),codeword.getValue());}formatter.format('%n');}return formatter.toString();// }
};return DetectionResult;}();/*
   * Copyright 2013 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ // package com.google.zxing.pdf417.decoder;
/**
   * @author Guenther Grau
   */var Codeword=/** @class */function(){function Codeword(startX,endX,bucket,value){this.rowNumber=Codeword.BARCODE_ROW_UNKNOWN;this.startX=Math.trunc(startX);this.endX=Math.trunc(endX);this.bucket=Math.trunc(bucket);this.value=Math.trunc(value);}Codeword.prototype.hasValidRowNumber=function(){return this.isValidRowNumber(this.rowNumber);};Codeword.prototype.isValidRowNumber=function(rowNumber){return rowNumber!==Codeword.BARCODE_ROW_UNKNOWN&&this.bucket===rowNumber%3*3;};Codeword.prototype.setRowNumberAsRowIndicatorColumn=function(){this.rowNumber=Math.trunc(Math.trunc(this.value/30)*3+Math.trunc(this.bucket/3));};Codeword.prototype.getWidth=function(){return this.endX-this.startX;};Codeword.prototype.getStartX=function(){return this.startX;};Codeword.prototype.getEndX=function(){return this.endX;};Codeword.prototype.getBucket=function(){return this.bucket;};Codeword.prototype.getValue=function(){return this.value;};Codeword.prototype.getRowNumber=function(){return this.rowNumber;};Codeword.prototype.setRowNumber=function(rowNumber){this.rowNumber=rowNumber;};//   @Override
Codeword.prototype.toString=function(){return this.rowNumber+'|'+this.value;};Codeword.BARCODE_ROW_UNKNOWN=-1;return Codeword;}();/*
  * Copyright 2013 ZXing authors
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */ /**
   * @author Guenther Grau
   * @author creatale GmbH (christoph.schulz@creatale.de)
   */var PDF417CodewordDecoder=/** @class */function(){function PDF417CodewordDecoder(){}/* @note
       * this action have to be performed before first use of class
       * - static constructor
       * working with 32bit float (based from Java logic)
      */PDF417CodewordDecoder.initialize=function(){// Pre-computes the symbol ratio table.
for(/*int*/var i=0;i<PDF417Common.SYMBOL_TABLE.length;i++){var currentSymbol=PDF417Common.SYMBOL_TABLE[i];var currentBit=currentSymbol&0x1;for(/*int*/var j=0;j<PDF417Common.BARS_IN_MODULE;j++){var size=0.0;while((currentSymbol&0x1)===currentBit){size+=1.0;currentSymbol>>=1;}currentBit=currentSymbol&0x1;if(!PDF417CodewordDecoder.RATIOS_TABLE[i]){PDF417CodewordDecoder.RATIOS_TABLE[i]=new Array(PDF417Common.BARS_IN_MODULE);}PDF417CodewordDecoder.RATIOS_TABLE[i][PDF417Common.BARS_IN_MODULE-j-1]=Math.fround(size/PDF417Common.MODULES_IN_CODEWORD);}}this.bSymbolTableReady=true;};PDF417CodewordDecoder.getDecodedValue=function(moduleBitCount){var decodedValue=PDF417CodewordDecoder.getDecodedCodewordValue(PDF417CodewordDecoder.sampleBitCounts(moduleBitCount));if(decodedValue!==-1){return decodedValue;}return PDF417CodewordDecoder.getClosestDecodedValue(moduleBitCount);};PDF417CodewordDecoder.sampleBitCounts=function(moduleBitCount){var bitCountSum=MathUtils.sum(moduleBitCount);var result=new Int32Array(PDF417Common.BARS_IN_MODULE);var bitCountIndex=0;var sumPreviousBits=0;for(/*int*/var i=0;i<PDF417Common.MODULES_IN_CODEWORD;i++){var sampleIndex=bitCountSum/(2*PDF417Common.MODULES_IN_CODEWORD)+i*bitCountSum/PDF417Common.MODULES_IN_CODEWORD;if(sumPreviousBits+moduleBitCount[bitCountIndex]<=sampleIndex){sumPreviousBits+=moduleBitCount[bitCountIndex];bitCountIndex++;}result[bitCountIndex]++;}return result;};PDF417CodewordDecoder.getDecodedCodewordValue=function(moduleBitCount){var decodedValue=PDF417CodewordDecoder.getBitValue(moduleBitCount);return PDF417Common.getCodeword(decodedValue)===-1?-1:decodedValue;};PDF417CodewordDecoder.getBitValue=function(moduleBitCount){var result=/*long*/0;for(var/*int*/i=0;i<moduleBitCount.length;i++){for(/*int*/var bit=0;bit<moduleBitCount[i];bit++){result=result<<1|(i%2===0?1:0);}}return Math.trunc(result);};// working with 32bit float (as in Java)
PDF417CodewordDecoder.getClosestDecodedValue=function(moduleBitCount){var bitCountSum=MathUtils.sum(moduleBitCount);var bitCountRatios=new Array(PDF417Common.BARS_IN_MODULE);if(bitCountSum>1){for(var/*int*/i=0;i<bitCountRatios.length;i++){bitCountRatios[i]=Math.fround(moduleBitCount[i]/bitCountSum);}}var bestMatchError=Float.MAX_VALUE;var bestMatch=-1;if(!this.bSymbolTableReady){PDF417CodewordDecoder.initialize();}for(/*int*/var j=0;j<PDF417CodewordDecoder.RATIOS_TABLE.length;j++){var error=0.0;var ratioTableRow=PDF417CodewordDecoder.RATIOS_TABLE[j];for(/*int*/var k=0;k<PDF417Common.BARS_IN_MODULE;k++){var diff=Math.fround(ratioTableRow[k]-bitCountRatios[k]);error+=Math.fround(diff*diff);if(error>=bestMatchError){break;}}if(error<bestMatchError){bestMatchError=error;bestMatch=PDF417Common.SYMBOL_TABLE[j];}}return bestMatch;};// flag that the table is ready for use
PDF417CodewordDecoder.bSymbolTableReady=false;PDF417CodewordDecoder.RATIOS_TABLE=new Array(PDF417Common.SYMBOL_TABLE.length).map(function(x){return x=new Array(PDF417Common.BARS_IN_MODULE);});return PDF417CodewordDecoder;}();/*
   * Copyright 2013 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ // package com.google.zxing.pdf417;
/**
   * @author Guenther Grau
   */var PDF417ResultMetadata=/** @class */function(){function PDF417ResultMetadata(){this.segmentCount=-1;this.fileSize=-1;this.timestamp=-1;this.checksum=-1;}/**
       * The Segment ID represents the segment of the whole file distributed over different symbols.
       *
       * @return File segment index
       */PDF417ResultMetadata.prototype.getSegmentIndex=function(){return this.segmentIndex;};PDF417ResultMetadata.prototype.setSegmentIndex=function(segmentIndex){this.segmentIndex=segmentIndex;};/**
       * Is the same for each related PDF417 symbol
       *
       * @return File ID
       */PDF417ResultMetadata.prototype.getFileId=function(){return this.fileId;};PDF417ResultMetadata.prototype.setFileId=function(fileId){this.fileId=fileId;};/**
       * @return always null
       * @deprecated use dedicated already parsed fields
       */ //   @Deprecated
PDF417ResultMetadata.prototype.getOptionalData=function(){return this.optionalData;};/**
       * @param optionalData old optional data format as int array
       * @deprecated parse and use new fields
       */ //   @Deprecated
PDF417ResultMetadata.prototype.setOptionalData=function(optionalData){this.optionalData=optionalData;};/**
       * @return true if it is the last segment
       */PDF417ResultMetadata.prototype.isLastSegment=function(){return this.lastSegment;};PDF417ResultMetadata.prototype.setLastSegment=function(lastSegment){this.lastSegment=lastSegment;};/**
       * @return count of segments, -1 if not set
       */PDF417ResultMetadata.prototype.getSegmentCount=function(){return this.segmentCount;};PDF417ResultMetadata.prototype.setSegmentCount=function(segmentCount/*int*/){this.segmentCount=segmentCount;};PDF417ResultMetadata.prototype.getSender=function(){return this.sender||null;};PDF417ResultMetadata.prototype.setSender=function(sender){this.sender=sender;};PDF417ResultMetadata.prototype.getAddressee=function(){return this.addressee||null;};PDF417ResultMetadata.prototype.setAddressee=function(addressee){this.addressee=addressee;};/**
       * Filename of the encoded file
       *
       * @return filename
       */PDF417ResultMetadata.prototype.getFileName=function(){return this.fileName;};PDF417ResultMetadata.prototype.setFileName=function(fileName){this.fileName=fileName;};/**
       * filesize in bytes of the encoded file
       *
       * @return filesize in bytes, -1 if not set
       */PDF417ResultMetadata.prototype.getFileSize=function(){return this.fileSize;};PDF417ResultMetadata.prototype.setFileSize=function(fileSize/*long*/){this.fileSize=fileSize;};/**
       * 16-bit CRC checksum using CCITT-16
       *
       * @return crc checksum, -1 if not set
       */PDF417ResultMetadata.prototype.getChecksum=function(){return this.checksum;};PDF417ResultMetadata.prototype.setChecksum=function(checksum/*int*/){this.checksum=checksum;};/**
       * unix epock timestamp, elapsed seconds since 1970-01-01
       *
       * @return elapsed seconds, -1 if not set
       */PDF417ResultMetadata.prototype.getTimestamp=function(){return this.timestamp;};PDF417ResultMetadata.prototype.setTimestamp=function(timestamp/*long*/){this.timestamp=timestamp;};return PDF417ResultMetadata;}();/**
   * Ponyfill for Java's Long class.
   */var Long=/** @class */function(){function Long(){}/**
       * Parses a string to a number, since JS has no really Int64.
       *
       * @param num Numeric string.
       * @param radix Destination radix.
       */Long.parseLong=function(num,radix){if(radix===void 0){radix=undefined;}return parseInt(num,radix);};return Long;}();var __extends$T=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * Custom Error class of type Exception.
   */var NullPointerException=/** @class */function(_super){__extends$T(NullPointerException,_super);function NullPointerException(){return _super!==null&&_super.apply(this,arguments)||this;}NullPointerException.kind='NullPointerException';return NullPointerException;}(Exception);/*
   * Copyright (c) 1994, 2004, Oracle and/or its affiliates. All rights reserved.
   * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
   *
   * This code is free software; you can redistribute it and/or modify it
   * under the terms of the GNU General Public License version 2 only, as
   * published by the Free Software Foundation.  Oracle designates this
   * particular file as subject to the "Classpath" exception as provided
   * by Oracle in the LICENSE file that accompanied this code.
   *
   * This code is distributed in the hope that it will be useful, but WITHOUT
   * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
   * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
   * version 2 for more details (a copy is included in the LICENSE file that
   * accompanied this code).
   *
   * You should have received a copy of the GNU General Public License version
   * 2 along with this work; if not, write to the Free Software Foundation,
   * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
   *
   * Please contact Oracle, 500 Oracle Parkway, Redwood Shores, CA 94065 USA
   * or visit www.oracle.com if you need additional information or have any
   * questions.
   */ // package java.io;
/**
   * This abstract class is the superclass of all classes representing
   * an output stream of bytes. An output stream accepts output bytes
   * and sends them to some sink.
   * <p>
   * Applications that need to define a subclass of
   * <code>OutputStream</code> must always provide at least a method
   * that writes one byte of output.
   *
   * @author  Arthur van Hoff
   * @see     java.io.BufferedOutputStream
   * @see     java.io.ByteArrayOutputStream
   * @see     java.io.DataOutputStream
   * @see     java.io.FilterOutputStream
   * @see     java.io.InputStream
   * @see     java.io.OutputStream#write(int)
   * @since   JDK1.0
   */var OutputStream/*implements Closeable, Flushable*/=/** @class */function(){function OutputStream(){}/**
       * Writes <code>b.length</code> bytes from the specified byte array
       * to this output stream. The general contract for <code>write(b)</code>
       * is that it should have exactly the same effect as the call
       * <code>write(b, 0, b.length)</code>.
       *
       * @param      b   the data.
       * @exception  IOException  if an I/O error occurs.
       * @see        java.io.OutputStream#write(byte[], int, int)
       */OutputStream.prototype.writeBytes=function(b){this.writeBytesOffset(b,0,b.length);};/**
       * Writes <code>len</code> bytes from the specified byte array
       * starting at offset <code>off</code> to this output stream.
       * The general contract for <code>write(b, off, len)</code> is that
       * some of the bytes in the array <code>b</code> are written to the
       * output stream in order; element <code>b[off]</code> is the first
       * byte written and <code>b[off+len-1]</code> is the last byte written
       * by this operation.
       * <p>
       * The <code>write</code> method of <code>OutputStream</code> calls
       * the write method of one argument on each of the bytes to be
       * written out. Subclasses are encouraged to override this method and
       * provide a more efficient implementation.
       * <p>
       * If <code>b</code> is <code>null</code>, a
       * <code>NullPointerException</code> is thrown.
       * <p>
       * If <code>off</code> is negative, or <code>len</code> is negative, or
       * <code>off+len</code> is greater than the length of the array
       * <code>b</code>, then an <tt>IndexOutOfBoundsException</tt> is thrown.
       *
       * @param      b     the data.
       * @param      off   the start offset in the data.
       * @param      len   the number of bytes to write.
       * @exception  IOException  if an I/O error occurs. In particular,
       *             an <code>IOException</code> is thrown if the output
       *             stream is closed.
       */OutputStream.prototype.writeBytesOffset=function(b,off,len){if(b==null){throw new NullPointerException();}else if(off<0||off>b.length||len<0||off+len>b.length||off+len<0){throw new IndexOutOfBoundsException();}else if(len===0){return;}for(var i=0;i<len;i++){this.write(b[off+i]);}};/**
       * Flushes this output stream and forces any buffered output bytes
       * to be written out. The general contract of <code>flush</code> is
       * that calling it is an indication that, if any bytes previously
       * written have been buffered by the implementation of the output
       * stream, such bytes should immediately be written to their
       * intended destination.
       * <p>
       * If the intended destination of this stream is an abstraction provided by
       * the underlying operating system, for example a file, then flushing the
       * stream guarantees only that bytes previously written to the stream are
       * passed to the operating system for writing; it does not guarantee that
       * they are actually written to a physical device such as a disk drive.
       * <p>
       * The <code>flush</code> method of <code>OutputStream</code> does nothing.
       *
       * @exception  IOException  if an I/O error occurs.
       */OutputStream.prototype.flush=function(){};/**
       * Closes this output stream and releases any system resources
       * associated with this stream. The general contract of <code>close</code>
       * is that it closes the output stream. A closed stream cannot perform
       * output operations and cannot be reopened.
       * <p>
       * The <code>close</code> method of <code>OutputStream</code> does nothing.
       *
       * @exception  IOException  if an I/O error occurs.
       */OutputStream.prototype.close=function(){};return OutputStream;}();var __extends$U=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * Custom Error class of type Exception.
   */var OutOfMemoryError=/** @class */function(_super){__extends$U(OutOfMemoryError,_super);function OutOfMemoryError(){return _super!==null&&_super.apply(this,arguments)||this;}return OutOfMemoryError;}(Exception);/*
   * Copyright (c) 1994, 2010, Oracle and/or its affiliates. All rights reserved.
   * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
   *
   * This code is free software; you can redistribute it and/or modify it
   * under the terms of the GNU General Public License version 2 only, as
   * published by the Free Software Foundation.  Oracle designates this
   * particular file as subject to the "Classpath" exception as provided
   * by Oracle in the LICENSE file that accompanied this code.
   *
   * This code is distributed in the hope that it will be useful, but WITHOUT
   * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
   * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
   * version 2 for more details (a copy is included in the LICENSE file that
   * accompanied this code).
   *
   * You should have received a copy of the GNU General Public License version
   * 2 along with this work; if not, write to the Free Software Foundation,
   * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
   *
   * Please contact Oracle, 500 Oracle Parkway, Redwood Shores, CA 94065 USA
   * or visit www.oracle.com if you need additional information or have any
   * questions.
   */var __extends$V=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * This class implements an output stream in which the data is
   * written into a byte array. The buffer automatically grows as data
   * is written to it.
   * The data can be retrieved using <code>toByteArray()</code> and
   * <code>toString()</code>.
   * <p>
   * Closing a <tt>ByteArrayOutputStream</tt> has no effect. The methods in
   * this class can be called after the stream has been closed without
   * generating an <tt>IOException</tt>.
   *
   * @author  Arthur van Hoff
   * @since   JDK1.0
   */var ByteArrayOutputStream=/** @class */function(_super){__extends$V(ByteArrayOutputStream,_super);/**
       * Creates a new byte array output stream. The buffer capacity is
       * initially 32 bytes, though its size increases if necessary.
       */ // public constructor() {
//     this(32);
// }
/**
       * Creates a new byte array output stream, with a buffer capacity of
       * the specified size, in bytes.
       *
       * @param   size   the initial size.
       * @exception  IllegalArgumentException if size is negative.
       */function ByteArrayOutputStream(size){if(size===void 0){size=32;}var _this=_super.call(this)||this;/**
           * The number of valid bytes in the buffer.
           */_this.count=0;if(size<0){throw new IllegalArgumentException('Negative initial size: '+size);}_this.buf=new Uint8Array(size);return _this;}/**
       * Increases the capacity if necessary to ensure that it can hold
       * at least the number of elements specified by the minimum
       * capacity argument.
       *
       * @param minCapacity the desired minimum capacity
       * @throws OutOfMemoryError if {@code minCapacity < 0}.  This is
       * interpreted as a request for the unsatisfiably large capacity
       * {@code (long) Integer.MAX_VALUE + (minCapacity - Integer.MAX_VALUE)}.
       */ByteArrayOutputStream.prototype.ensureCapacity=function(minCapacity){// overflow-conscious code
if(minCapacity-this.buf.length>0)this.grow(minCapacity);};/**
       * Increases the capacity to ensure that it can hold at least the
       * number of elements specified by the minimum capacity argument.
       *
       * @param minCapacity the desired minimum capacity
       */ByteArrayOutputStream.prototype.grow=function(minCapacity){// overflow-conscious code
var oldCapacity=this.buf.length;var newCapacity=oldCapacity<<1;if(newCapacity-minCapacity<0)newCapacity=minCapacity;if(newCapacity<0){if(minCapacity<0)// overflow
throw new OutOfMemoryError();newCapacity=Integer.MAX_VALUE;}this.buf=Arrays.copyOfUint8Array(this.buf,newCapacity);};/**
       * Writes the specified byte to this byte array output stream.
       *
       * @param   b   the byte to be written.
       */ByteArrayOutputStream.prototype.write=function(b){this.ensureCapacity(this.count+1);this.buf[this.count]=/*(byte)*/b;this.count+=1;};/**
       * Writes <code>len</code> bytes from the specified byte array
       * starting at offset <code>off</code> to this byte array output stream.
       *
       * @param   b     the data.
       * @param   off   the start offset in the data.
       * @param   len   the number of bytes to write.
       */ByteArrayOutputStream.prototype.writeBytesOffset=function(b,off,len){if(off<0||off>b.length||len<0||off+len-b.length>0){throw new IndexOutOfBoundsException();}this.ensureCapacity(this.count+len);System.arraycopy(b,off,this.buf,this.count,len);this.count+=len;};/**
       * Writes the complete contents of this byte array output stream to
       * the specified output stream argument, as if by calling the output
       * stream's write method using <code>out.write(buf, 0, count)</code>.
       *
       * @param      out   the output stream to which to write the data.
       * @exception  IOException  if an I/O error occurs.
       */ByteArrayOutputStream.prototype.writeTo=function(out){out.writeBytesOffset(this.buf,0,this.count);};/**
       * Resets the <code>count</code> field of this byte array output
       * stream to zero, so that all currently accumulated output in the
       * output stream is discarded. The output stream can be used again,
       * reusing the already allocated buffer space.
       *
       * @see     java.io.ByteArrayInputStream#count
       */ByteArrayOutputStream.prototype.reset=function(){this.count=0;};/**
       * Creates a newly allocated byte array. Its size is the current
       * size of this output stream and the valid contents of the buffer
       * have been copied into it.
       *
       * @return  the current contents of this output stream, as a byte array.
       * @see     java.io.ByteArrayOutputStream#size()
       */ByteArrayOutputStream.prototype.toByteArray=function(){return Arrays.copyOfUint8Array(this.buf,this.count);};/**
       * Returns the current size of the buffer.
       *
       * @return  the value of the <code>count</code> field, which is the number
       *          of valid bytes in this output stream.
       * @see     java.io.ByteArrayOutputStream#count
       */ByteArrayOutputStream.prototype.size=function(){return this.count;};ByteArrayOutputStream.prototype.toString=function(param){if(!param){return this.toString_void();}if(typeof param==='string'){return this.toString_string(param);}return this.toString_number(param);};/**
       * Converts the buffer's contents into a string decoding bytes using the
       * platform's default character set. The length of the new <tt>String</tt>
       * is a function of the character set, and hence may not be equal to the
       * size of the buffer.
       *
       * <p> This method always replaces malformed-input and unmappable-character
       * sequences with the default replacement string for the platform's
       * default character set. The {@linkplain java.nio.charset.CharsetDecoder}
       * class should be used when more control over the decoding process is
       * required.
       *
       * @return String decoded from the buffer's contents.
       * @since  JDK1.1
       */ByteArrayOutputStream.prototype.toString_void=function(){return new String(this.buf/*, 0, this.count*/).toString();};/**
       * Converts the buffer's contents into a string by decoding the bytes using
       * the specified {@link java.nio.charset.Charset charsetName}. The length of
       * the new <tt>String</tt> is a function of the charset, and hence may not be
       * equal to the length of the byte array.
       *
       * <p> This method always replaces malformed-input and unmappable-character
       * sequences with this charset's default replacement string. The {@link
       * java.nio.charset.CharsetDecoder} class should be used when more control
       * over the decoding process is required.
       *
       * @param  charsetName  the name of a supported
       *              {@linkplain java.nio.charset.Charset </code>charset<code>}
       * @return String decoded from the buffer's contents.
       * @exception  UnsupportedEncodingException
       *             If the named charset is not supported
       * @since   JDK1.1
       */ByteArrayOutputStream.prototype.toString_string=function(charsetName){return new String(this.buf/*, 0, this.count, charsetName*/).toString();};/**
       * Creates a newly allocated string. Its size is the current size of
       * the output stream and the valid contents of the buffer have been
       * copied into it. Each character <i>c</i> in the resulting string is
       * constructed from the corresponding element <i>b</i> in the byte
       * array such that:
       * <blockquote><pre>
       *     c == (char)(((hibyte &amp; 0xff) &lt;&lt; 8) | (b &amp; 0xff))
       * </pre></blockquote>
       *
       * @deprecated This method does not properly convert bytes into characters.
       * As of JDK&nbsp;1.1, the preferred way to do this is via the
       * <code>toString(String enc)</code> method, which takes an encoding-name
       * argument, or the <code>toString()</code> method, which uses the
       * platform's default character encoding.
       *
       * @param      hibyte    the high byte of each resulting Unicode character.
       * @return     the current contents of the output stream, as a string.
       * @see        java.io.ByteArrayOutputStream#size()
       * @see        java.io.ByteArrayOutputStream#toString(String)
       * @see        java.io.ByteArrayOutputStream#toString()
       */ // @Deprecated
ByteArrayOutputStream.prototype.toString_number=function(hibyte){return new String(this.buf/*, hibyte, 0, this.count*/).toString();};/**
       * Closing a <tt>ByteArrayOutputStream</tt> has no effect. The methods in
       * this class can be called after the stream has been closed without
       * generating an <tt>IOException</tt>.
       * <p>
       *
       * @throws IOException
       */ByteArrayOutputStream.prototype.close=function(){};return ByteArrayOutputStream;}(OutputStream);/*
   * Copyright 2009 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /*private*/var Mode$2;(function(Mode){Mode[Mode["ALPHA"]=0]="ALPHA";Mode[Mode["LOWER"]=1]="LOWER";Mode[Mode["MIXED"]=2]="MIXED";Mode[Mode["PUNCT"]=3]="PUNCT";Mode[Mode["ALPHA_SHIFT"]=4]="ALPHA_SHIFT";Mode[Mode["PUNCT_SHIFT"]=5]="PUNCT_SHIFT";})(Mode$2||(Mode$2={}));/**
   * Indirectly access the global BigInt constructor, it
   * allows browsers that doesn't support BigInt to run
   * the library without breaking due to "undefined BigInt"
   * errors.
   */function getBigIntConstructor(){if(typeof window!=='undefined'){return window['BigInt']||null;}if(typeof __webpack_require__.g!=='undefined'){return __webpack_require__.g['BigInt']||null;}if(typeof self!=='undefined'){return self['BigInt']||null;}throw new Error('Can\'t search globals for BigInt!');}/**
   * Used to store the BigInt constructor.
   */var BigInteger;/**
   * This function creates a bigint value. It allows browsers
   * that doesn't support BigInt to run the rest of the library
   * by not directly accessing the BigInt constructor.
   */function createBigInt(num){if(typeof BigInteger==='undefined'){BigInteger=getBigIntConstructor();}if(BigInteger===null){throw new Error('BigInt is not supported!');}return BigInteger(num);}function getEXP900(){// in Java - array with length = 16
var EXP900=[];EXP900[0]=createBigInt(1);var nineHundred=createBigInt(900);EXP900[1]=nineHundred;// in Java - array with length = 16
for(var i/*int*/=2;i<16;i++){EXP900[i]=EXP900[i-1]*nineHundred;}return EXP900;}/**
   * <p>This class contains the methods for decoding the PDF417 codewords.</p>
   *
   * @author SITA Lab (kevin.osullivan@sita.aero)
   * @author Guenther Grau
   */var DecodedBitStreamParser$2=/** @class */function(){function DecodedBitStreamParser(){}//   private DecodedBitStreamParser() {
// }
/**
       *
       * @param codewords
       * @param ecLevel
       *
       * @throws FormatException
       */DecodedBitStreamParser.decode=function(codewords,ecLevel){// pass encoding to result (will be used for decode symbols in byte mode)
var result=new StringBuilder('');// let encoding: Charset = StandardCharsets.ISO_8859_1;
var encoding=CharacterSetECI.ISO8859_1;/**
           * @note the next command is specific from this TypeScript library
           * because TS can't properly cast some values to char and
           * convert it to string later correctly due to encoding
           * differences from Java version. As reported here:
           * https://github.com/zxing-js/library/pull/264/files#r382831593
           */result.enableDecoding(encoding);// Get compaction mode
var codeIndex=1;var code=codewords[codeIndex++];var resultMetadata=new PDF417ResultMetadata();while(codeIndex<codewords[0]){switch(code){case DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH:codeIndex=DecodedBitStreamParser.textCompaction(codewords,codeIndex,result);break;case DecodedBitStreamParser.BYTE_COMPACTION_MODE_LATCH:case DecodedBitStreamParser.BYTE_COMPACTION_MODE_LATCH_6:codeIndex=DecodedBitStreamParser.byteCompaction(code,codewords,encoding,codeIndex,result);break;case DecodedBitStreamParser.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:result.append(/*(char)*/codewords[codeIndex++]);break;case DecodedBitStreamParser.NUMERIC_COMPACTION_MODE_LATCH:codeIndex=DecodedBitStreamParser.numericCompaction(codewords,codeIndex,result);break;case DecodedBitStreamParser.ECI_CHARSET:var charsetECI=CharacterSetECI.getCharacterSetECIByValue(codewords[codeIndex++]);// encoding = Charset.forName(charsetECI.getName());
break;case DecodedBitStreamParser.ECI_GENERAL_PURPOSE:// Can't do anything with generic ECI; skip its 2 characters
codeIndex+=2;break;case DecodedBitStreamParser.ECI_USER_DEFINED:// Can't do anything with user ECI; skip its 1 character
codeIndex++;break;case DecodedBitStreamParser.BEGIN_MACRO_PDF417_CONTROL_BLOCK:codeIndex=DecodedBitStreamParser.decodeMacroBlock(codewords,codeIndex,resultMetadata);break;case DecodedBitStreamParser.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:case DecodedBitStreamParser.MACRO_PDF417_TERMINATOR:// Should not see these outside a macro block
throw new FormatException();default:// Default to text compaction. During testing numerous barcodes
// appeared to be missing the starting mode. In these cases defaulting
// to text compaction seems to work.
codeIndex--;codeIndex=DecodedBitStreamParser.textCompaction(codewords,codeIndex,result);break;}if(codeIndex<codewords.length){code=codewords[codeIndex++];}else{throw FormatException.getFormatInstance();}}if(result.length()===0){throw FormatException.getFormatInstance();}var decoderResult=new DecoderResult(null,result.toString(),null,ecLevel);decoderResult.setOther(resultMetadata);return decoderResult;};/**
       *
       * @param int
       * @param param1
       * @param codewords
       * @param int
       * @param codeIndex
       * @param PDF417ResultMetadata
       * @param resultMetadata
       *
       * @throws FormatException
       */ // @SuppressWarnings("deprecation")
DecodedBitStreamParser.decodeMacroBlock=function(codewords,codeIndex,resultMetadata){if(codeIndex+DecodedBitStreamParser.NUMBER_OF_SEQUENCE_CODEWORDS>codewords[0]){// we must have at least two bytes left for the segment index
throw FormatException.getFormatInstance();}var segmentIndexArray=new Int32Array(DecodedBitStreamParser.NUMBER_OF_SEQUENCE_CODEWORDS);for(var i/*int*/=0;i<DecodedBitStreamParser.NUMBER_OF_SEQUENCE_CODEWORDS;i++,codeIndex++){segmentIndexArray[i]=codewords[codeIndex];}resultMetadata.setSegmentIndex(Integer.parseInt(DecodedBitStreamParser.decodeBase900toBase10(segmentIndexArray,DecodedBitStreamParser.NUMBER_OF_SEQUENCE_CODEWORDS)));var fileId=new StringBuilder();codeIndex=DecodedBitStreamParser.textCompaction(codewords,codeIndex,fileId);resultMetadata.setFileId(fileId.toString());var optionalFieldsStart=-1;if(codewords[codeIndex]===DecodedBitStreamParser.BEGIN_MACRO_PDF417_OPTIONAL_FIELD){optionalFieldsStart=codeIndex+1;}while(codeIndex<codewords[0]){switch(codewords[codeIndex]){case DecodedBitStreamParser.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:codeIndex++;switch(codewords[codeIndex]){case DecodedBitStreamParser.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME:var fileName=new StringBuilder();codeIndex=DecodedBitStreamParser.textCompaction(codewords,codeIndex+1,fileName);resultMetadata.setFileName(fileName.toString());break;case DecodedBitStreamParser.MACRO_PDF417_OPTIONAL_FIELD_SENDER:var sender=new StringBuilder();codeIndex=DecodedBitStreamParser.textCompaction(codewords,codeIndex+1,sender);resultMetadata.setSender(sender.toString());break;case DecodedBitStreamParser.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE:var addressee=new StringBuilder();codeIndex=DecodedBitStreamParser.textCompaction(codewords,codeIndex+1,addressee);resultMetadata.setAddressee(addressee.toString());break;case DecodedBitStreamParser.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT:var segmentCount=new StringBuilder();codeIndex=DecodedBitStreamParser.numericCompaction(codewords,codeIndex+1,segmentCount);resultMetadata.setSegmentCount(Integer.parseInt(segmentCount.toString()));break;case DecodedBitStreamParser.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP:var timestamp=new StringBuilder();codeIndex=DecodedBitStreamParser.numericCompaction(codewords,codeIndex+1,timestamp);resultMetadata.setTimestamp(Long.parseLong(timestamp.toString()));break;case DecodedBitStreamParser.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM:var checksum=new StringBuilder();codeIndex=DecodedBitStreamParser.numericCompaction(codewords,codeIndex+1,checksum);resultMetadata.setChecksum(Integer.parseInt(checksum.toString()));break;case DecodedBitStreamParser.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE:var fileSize=new StringBuilder();codeIndex=DecodedBitStreamParser.numericCompaction(codewords,codeIndex+1,fileSize);resultMetadata.setFileSize(Long.parseLong(fileSize.toString()));break;default:throw FormatException.getFormatInstance();}break;case DecodedBitStreamParser.MACRO_PDF417_TERMINATOR:codeIndex++;resultMetadata.setLastSegment(true);break;default:throw FormatException.getFormatInstance();}}// copy optional fields to additional options
if(optionalFieldsStart!==-1){var optionalFieldsLength=codeIndex-optionalFieldsStart;if(resultMetadata.isLastSegment()){// do not include terminator
optionalFieldsLength--;}resultMetadata.setOptionalData(Arrays.copyOfRange(codewords,optionalFieldsStart,optionalFieldsStart+optionalFieldsLength));}return codeIndex;};/**
       * Text Compaction mode (see 5.4.1.5) permits all printable ASCII characters to be
       * encoded, i.e. values 32 - 126 inclusive in accordance with ISO/IEC 646 (IRV), as
       * well as selected control characters.
       *
       * @param codewords The array of codewords (data + error)
       * @param codeIndex The current index into the codeword array.
       * @param result    The decoded data is appended to the result.
       * @return The next index into the codeword array.
       */DecodedBitStreamParser.textCompaction=function(codewords,codeIndex,result){// 2 character per codeword
var textCompactionData=new Int32Array((codewords[0]-codeIndex)*2);// Used to hold the byte compaction value if there is a mode shift
var byteCompactionData=new Int32Array((codewords[0]-codeIndex)*2);var index=0;var end=false;while(codeIndex<codewords[0]&&!end){var code=codewords[codeIndex++];if(code<DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH){textCompactionData[index]=code/30;textCompactionData[index+1]=code%30;index+=2;}else{switch(code){case DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH:// reinitialize text compaction mode to alpha sub mode
textCompactionData[index++]=DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH;break;case DecodedBitStreamParser.BYTE_COMPACTION_MODE_LATCH:case DecodedBitStreamParser.BYTE_COMPACTION_MODE_LATCH_6:case DecodedBitStreamParser.NUMERIC_COMPACTION_MODE_LATCH:case DecodedBitStreamParser.BEGIN_MACRO_PDF417_CONTROL_BLOCK:case DecodedBitStreamParser.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:case DecodedBitStreamParser.MACRO_PDF417_TERMINATOR:codeIndex--;end=true;break;case DecodedBitStreamParser.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:// The Mode Shift codeword 913 shall cause a temporary
// switch from Text Compaction mode to Byte Compaction mode.
// This switch shall be in effect for only the next codeword,
// after which the mode shall revert to the prevailing sub-mode
// of the Text Compaction mode. Codeword 913 is only available
// in Text Compaction mode; its use is described in 5.4.2.4.
textCompactionData[index]=DecodedBitStreamParser.MODE_SHIFT_TO_BYTE_COMPACTION_MODE;code=codewords[codeIndex++];byteCompactionData[index]=code;index++;break;}}}DecodedBitStreamParser.decodeTextCompaction(textCompactionData,byteCompactionData,index,result);return codeIndex;};/**
       * The Text Compaction mode includes all the printable ASCII characters
       * (i.e. values from 32 to 126) and three ASCII control characters: HT or tab
       * (9: e), LF or line feed (10: e), and CR or carriage
       * return (13: e). The Text Compaction mode also includes various latch
       * and shift characters which are used exclusively within the mode. The Text
       * Compaction mode encodes up to 2 characters per codeword. The compaction rules
       * for converting data into PDF417 codewords are defined in 5.4.2.2. The sub-mode
       * switches are defined in 5.4.2.3.
       *
       * @param textCompactionData The text compaction data.
       * @param byteCompactionData The byte compaction data if there
       *                           was a mode shift.
       * @param length             The size of the text compaction and byte compaction data.
       * @param result             The decoded data is appended to the result.
       */DecodedBitStreamParser.decodeTextCompaction=function(textCompactionData,byteCompactionData,length,result){// Beginning from an initial state of the Alpha sub-mode
// The default compaction mode for PDF417 in effect at the start of each symbol shall always be Text
// Compaction mode Alpha sub-mode (alphabetic: uppercase). A latch codeword from another mode to the Text
// Compaction mode shall always switch to the Text Compaction Alpha sub-mode.
var subMode=Mode$2.ALPHA;var priorToShiftMode=Mode$2.ALPHA;var i=0;while(i<length){var subModeCh=textCompactionData[i];var ch=/*char*/'';switch(subMode){case Mode$2.ALPHA:// Alpha (alphabetic: uppercase)
if(subModeCh<26){// Upper case Alpha Character
// Note: 65 = 'A' ASCII -> there is byte code of symbol
ch=/*(char)('A' + subModeCh) */String.fromCharCode(65+subModeCh);}else{switch(subModeCh){case 26:ch=' ';break;case DecodedBitStreamParser.LL:subMode=Mode$2.LOWER;break;case DecodedBitStreamParser.ML:subMode=Mode$2.MIXED;break;case DecodedBitStreamParser.PS:// Shift to punctuation
priorToShiftMode=subMode;subMode=Mode$2.PUNCT_SHIFT;break;case DecodedBitStreamParser.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:result.append(/*(char)*/byteCompactionData[i]);break;case DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH:subMode=Mode$2.ALPHA;break;}}break;case Mode$2.LOWER:// Lower (alphabetic: lowercase)
if(subModeCh<26){ch=/*(char)('a' + subModeCh)*/String.fromCharCode(97+subModeCh);}else{switch(subModeCh){case 26:ch=' ';break;case DecodedBitStreamParser.AS:// Shift to alpha
priorToShiftMode=subMode;subMode=Mode$2.ALPHA_SHIFT;break;case DecodedBitStreamParser.ML:subMode=Mode$2.MIXED;break;case DecodedBitStreamParser.PS:// Shift to punctuation
priorToShiftMode=subMode;subMode=Mode$2.PUNCT_SHIFT;break;case DecodedBitStreamParser.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:// TODO Does this need to use the current character encoding? See other occurrences below
result.append(/*(char)*/byteCompactionData[i]);break;case DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH:subMode=Mode$2.ALPHA;break;}}break;case Mode$2.MIXED:// Mixed (punctuation: e)
if(subModeCh<DecodedBitStreamParser.PL){ch=DecodedBitStreamParser.MIXED_CHARS[subModeCh];}else{switch(subModeCh){case DecodedBitStreamParser.PL:subMode=Mode$2.PUNCT;break;case 26:ch=' ';break;case DecodedBitStreamParser.LL:subMode=Mode$2.LOWER;break;case DecodedBitStreamParser.AL:subMode=Mode$2.ALPHA;break;case DecodedBitStreamParser.PS:// Shift to punctuation
priorToShiftMode=subMode;subMode=Mode$2.PUNCT_SHIFT;break;case DecodedBitStreamParser.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:result.append(/*(char)*/byteCompactionData[i]);break;case DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH:subMode=Mode$2.ALPHA;break;}}break;case Mode$2.PUNCT:// Punctuation
if(subModeCh<DecodedBitStreamParser.PAL){ch=DecodedBitStreamParser.PUNCT_CHARS[subModeCh];}else{switch(subModeCh){case DecodedBitStreamParser.PAL:subMode=Mode$2.ALPHA;break;case DecodedBitStreamParser.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:result.append(/*(char)*/byteCompactionData[i]);break;case DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH:subMode=Mode$2.ALPHA;break;}}break;case Mode$2.ALPHA_SHIFT:// Restore sub-mode
subMode=priorToShiftMode;if(subModeCh<26){ch=/*(char)('A' + subModeCh)*/String.fromCharCode(65+subModeCh);}else{switch(subModeCh){case 26:ch=' ';break;case DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH:subMode=Mode$2.ALPHA;break;}}break;case Mode$2.PUNCT_SHIFT:// Restore sub-mode
subMode=priorToShiftMode;if(subModeCh<DecodedBitStreamParser.PAL){ch=DecodedBitStreamParser.PUNCT_CHARS[subModeCh];}else{switch(subModeCh){case DecodedBitStreamParser.PAL:subMode=Mode$2.ALPHA;break;case DecodedBitStreamParser.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:// PS before Shift-to-Byte is used as a padding character,
// see 5.4.2.4 of the specification
result.append(/*(char)*/byteCompactionData[i]);break;case DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH:subMode=Mode$2.ALPHA;break;}}break;}// if (ch !== 0) {
if(ch!==''){// Append decoded character to result
result.append(ch);}i++;}};/**
       * Byte Compaction mode (see 5.4.3) permits all 256 possible 8-bit byte values to be encoded.
       * This includes all ASCII characters value 0 to 127 inclusive and provides for international
       * character set support.
       *
       * @param mode      The byte compaction mode i.e. 901 or 924
       * @param codewords The array of codewords (data + error)
       * @param encoding  Currently active character encoding
       * @param codeIndex The current index into the codeword array.
       * @param result    The decoded data is appended to the result.
       * @return The next index into the codeword array.
       */DecodedBitStreamParser.byteCompaction=function(mode,codewords,encoding,codeIndex,result){var decodedBytes=new ByteArrayOutputStream();var count=0;var value=/*long*/0;var end=false;switch(mode){case DecodedBitStreamParser.BYTE_COMPACTION_MODE_LATCH:// Total number of Byte Compaction characters to be encoded
// is not a multiple of 6
var byteCompactedCodewords=new Int32Array(6);var nextCode=codewords[codeIndex++];while(codeIndex<codewords[0]&&!end){byteCompactedCodewords[count++]=nextCode;// Base 900
value=900*value+nextCode;nextCode=codewords[codeIndex++];// perhaps it should be ok to check only nextCode >= TEXT_COMPACTION_MODE_LATCH
switch(nextCode){case DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH:case DecodedBitStreamParser.BYTE_COMPACTION_MODE_LATCH:case DecodedBitStreamParser.NUMERIC_COMPACTION_MODE_LATCH:case DecodedBitStreamParser.BYTE_COMPACTION_MODE_LATCH_6:case DecodedBitStreamParser.BEGIN_MACRO_PDF417_CONTROL_BLOCK:case DecodedBitStreamParser.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:case DecodedBitStreamParser.MACRO_PDF417_TERMINATOR:codeIndex--;end=true;break;default:if(count%5===0&&count>0){// Decode every 5 codewords
// Convert to Base 256
for(var j/*int*/=0;j<6;++j){/* @note
                                       * JavaScript stores numbers as 64 bits floating point numbers, but all bitwise operations are performed on 32 bits binary numbers.
                                       * So the next bitwise operation could not be done with simple numbers
                                       */decodedBytes.write(/*(byte)*/Number(createBigInt(value)>>createBigInt(8*(5-j))));}value=0;count=0;}break;}}// if the end of all codewords is reached the last codeword needs to be added
if(codeIndex===codewords[0]&&nextCode<DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH){byteCompactedCodewords[count++]=nextCode;}// If Byte Compaction mode is invoked with codeword 901,
// the last group of codewords is interpreted directly
// as one byte per codeword, without compaction.
for(var i/*int*/=0;i<count;i++){decodedBytes.write(/*(byte)*/byteCompactedCodewords[i]);}break;case DecodedBitStreamParser.BYTE_COMPACTION_MODE_LATCH_6:// Total number of Byte Compaction characters to be encoded
// is an integer multiple of 6
while(codeIndex<codewords[0]&&!end){var code=codewords[codeIndex++];if(code<DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH){count++;// Base 900
value=900*value+code;}else{switch(code){case DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH:case DecodedBitStreamParser.BYTE_COMPACTION_MODE_LATCH:case DecodedBitStreamParser.NUMERIC_COMPACTION_MODE_LATCH:case DecodedBitStreamParser.BYTE_COMPACTION_MODE_LATCH_6:case DecodedBitStreamParser.BEGIN_MACRO_PDF417_CONTROL_BLOCK:case DecodedBitStreamParser.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:case DecodedBitStreamParser.MACRO_PDF417_TERMINATOR:codeIndex--;end=true;break;}}if(count%5===0&&count>0){// Decode every 5 codewords
// Convert to Base 256
/* @note
                           * JavaScript stores numbers as 64 bits floating point numbers, but all bitwise operations are performed on 32 bits binary numbers.
                           * So the next bitwise operation could not be done with simple numbers
                          */for(var j/*int*/=0;j<6;++j){decodedBytes.write(/*(byte)*/Number(createBigInt(value)>>createBigInt(8*(5-j))));}value=0;count=0;}}break;}result.append(StringEncoding.decode(decodedBytes.toByteArray(),encoding));return codeIndex;};/**
       * Numeric Compaction mode (see 5.4.4) permits efficient encoding of numeric data strings.
       *
       * @param codewords The array of codewords (data + error)
       * @param codeIndex The current index into the codeword array.
       * @param result    The decoded data is appended to the result.
       * @return The next index into the codeword array.
       *
       * @throws FormatException
       */DecodedBitStreamParser.numericCompaction=function(codewords,codeIndex/*int*/,result){var count=0;var end=false;var numericCodewords=new Int32Array(DecodedBitStreamParser.MAX_NUMERIC_CODEWORDS);while(codeIndex<codewords[0]&&!end){var code=codewords[codeIndex++];if(codeIndex===codewords[0]){end=true;}if(code<DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH){numericCodewords[count]=code;count++;}else{switch(code){case DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH:case DecodedBitStreamParser.BYTE_COMPACTION_MODE_LATCH:case DecodedBitStreamParser.BYTE_COMPACTION_MODE_LATCH_6:case DecodedBitStreamParser.BEGIN_MACRO_PDF417_CONTROL_BLOCK:case DecodedBitStreamParser.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:case DecodedBitStreamParser.MACRO_PDF417_TERMINATOR:codeIndex--;end=true;break;}}if((count%DecodedBitStreamParser.MAX_NUMERIC_CODEWORDS===0||code===DecodedBitStreamParser.NUMERIC_COMPACTION_MODE_LATCH||end)&&count>0){// Re-invoking Numeric Compaction mode (by using codeword 902
// while in Numeric Compaction mode) serves  to terminate the
// current Numeric Compaction mode grouping as described in 5.4.4.2,
// and then to start a new one grouping.
result.append(DecodedBitStreamParser.decodeBase900toBase10(numericCodewords,count));count=0;}}return codeIndex;};/**
       * Convert a list of Numeric Compacted codewords from Base 900 to Base 10.
       *
       * @param codewords The array of codewords
       * @param count     The number of codewords
       * @return The decoded string representing the Numeric data.
       *
       * EXAMPLE
       * Encode the fifteen digit numeric string 000213298174000
       * Prefix the numeric string with a 1 and set the initial value of
       * t = 1 000 213 298 174 000
       * Calculate codeword 0
       * d0 = 1 000 213 298 174 000 mod 900 = 200
       *
       * t = 1 000 213 298 174 000 div 900 = 1 111 348 109 082
       * Calculate codeword 1
       * d1 = 1 111 348 109 082 mod 900 = 282
       *
       * t = 1 111 348 109 082 div 900 = 1 234 831 232
       * Calculate codeword 2
       * d2 = 1 234 831 232 mod 900 = 632
       *
       * t = 1 234 831 232 div 900 = 1 372 034
       * Calculate codeword 3
       * d3 = 1 372 034 mod 900 = 434
       *
       * t = 1 372 034 div 900 = 1 524
       * Calculate codeword 4
       * d4 = 1 524 mod 900 = 624
       *
       * t = 1 524 div 900 = 1
       * Calculate codeword 5
       * d5 = 1 mod 900 = 1
       * t = 1 div 900 = 0
       * Codeword sequence is: 1, 624, 434, 632, 282, 200
       *
       * Decode the above codewords involves
       *   1 x 900 power of 5 + 624 x 900 power of 4 + 434 x 900 power of 3 +
       * 632 x 900 power of 2 + 282 x 900 power of 1 + 200 x 900 power of 0 = 1000213298174000
       *
       * Remove leading 1 =>  Result is 000213298174000
       *
       * @throws FormatException
       */DecodedBitStreamParser.decodeBase900toBase10=function(codewords,count){var result=createBigInt(0);for(var i/*int*/=0;i<count;i++){result+=DecodedBitStreamParser.EXP900[count-i-1]*createBigInt(codewords[i]);}var resultString=result.toString();if(resultString.charAt(0)!=='1'){throw new FormatException();}return resultString.substring(1);};DecodedBitStreamParser.TEXT_COMPACTION_MODE_LATCH=900;DecodedBitStreamParser.BYTE_COMPACTION_MODE_LATCH=901;DecodedBitStreamParser.NUMERIC_COMPACTION_MODE_LATCH=902;DecodedBitStreamParser.BYTE_COMPACTION_MODE_LATCH_6=924;DecodedBitStreamParser.ECI_USER_DEFINED=925;DecodedBitStreamParser.ECI_GENERAL_PURPOSE=926;DecodedBitStreamParser.ECI_CHARSET=927;DecodedBitStreamParser.BEGIN_MACRO_PDF417_CONTROL_BLOCK=928;DecodedBitStreamParser.BEGIN_MACRO_PDF417_OPTIONAL_FIELD=923;DecodedBitStreamParser.MACRO_PDF417_TERMINATOR=922;DecodedBitStreamParser.MODE_SHIFT_TO_BYTE_COMPACTION_MODE=913;DecodedBitStreamParser.MAX_NUMERIC_CODEWORDS=15;DecodedBitStreamParser.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME=0;DecodedBitStreamParser.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT=1;DecodedBitStreamParser.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP=2;DecodedBitStreamParser.MACRO_PDF417_OPTIONAL_FIELD_SENDER=3;DecodedBitStreamParser.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE=4;DecodedBitStreamParser.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE=5;DecodedBitStreamParser.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM=6;DecodedBitStreamParser.PL=25;DecodedBitStreamParser.LL=27;DecodedBitStreamParser.AS=27;DecodedBitStreamParser.ML=28;DecodedBitStreamParser.AL=28;DecodedBitStreamParser.PS=29;DecodedBitStreamParser.PAL=29;DecodedBitStreamParser.PUNCT_CHARS=';<>@[\\]_`~!\r\t,:\n-.$/"|*()?{}\'';DecodedBitStreamParser.MIXED_CHARS='0123456789&\r\t,:#-.$/+%*=^';/**
       * Table containing values for the exponent of 900.
       * This is used in the numeric compaction decode algorithm.
       */DecodedBitStreamParser.EXP900=getBigIntConstructor()?getEXP900():[];DecodedBitStreamParser.NUMBER_OF_SEQUENCE_CODEWORDS=2;return DecodedBitStreamParser;}();/*
  * Copyright 2013 ZXing authors
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */var __values$y=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};// import java.util.ArrayList;
// import java.util.Collection;
// import java.util.Formatter;
// import java.util.List;
/**
   * @author Guenther Grau
   */var PDF417ScanningDecoder=/** @class */function(){function PDF417ScanningDecoder(){}/**
       * @TODO don't pass in minCodewordWidth and maxCodewordWidth, pass in barcode columns for start and stop pattern
       *
       * columns. That way width can be deducted from the pattern column.
       * This approach also allows to detect more details about the barcode, e.g. if a bar type (white or black) is wider
       * than it should be. This can happen if the scanner used a bad blackpoint.
       *
       * @param BitMatrix
       * @param image
       * @param ResultPoint
       * @param imageTopLeft
       * @param ResultPoint
       * @param imageBottomLeft
       * @param ResultPoint
       * @param imageTopRight
       * @param ResultPoint
       * @param imageBottomRight
       * @param int
       * @param minCodewordWidth
       * @param int
       * @param maxCodewordWidth
       *
       * @throws NotFoundException
       * @throws FormatException
       * @throws ChecksumException
       */PDF417ScanningDecoder.decode=function(image,imageTopLeft,imageBottomLeft,imageTopRight,imageBottomRight,minCodewordWidth,maxCodewordWidth){var boundingBox=new BoundingBox(image,imageTopLeft,imageBottomLeft,imageTopRight,imageBottomRight);var leftRowIndicatorColumn=null;var rightRowIndicatorColumn=null;var detectionResult;for(var firstPass/*boolean*/=true;;firstPass=false){if(imageTopLeft!=null){leftRowIndicatorColumn=PDF417ScanningDecoder.getRowIndicatorColumn(image,boundingBox,imageTopLeft,true,minCodewordWidth,maxCodewordWidth);}if(imageTopRight!=null){rightRowIndicatorColumn=PDF417ScanningDecoder.getRowIndicatorColumn(image,boundingBox,imageTopRight,false,minCodewordWidth,maxCodewordWidth);}detectionResult=PDF417ScanningDecoder.merge(leftRowIndicatorColumn,rightRowIndicatorColumn);if(detectionResult==null){throw NotFoundException.getNotFoundInstance();}var resultBox=detectionResult.getBoundingBox();if(firstPass&&resultBox!=null&&(resultBox.getMinY()<boundingBox.getMinY()||resultBox.getMaxY()>boundingBox.getMaxY())){boundingBox=resultBox;}else{break;}}detectionResult.setBoundingBox(boundingBox);var maxBarcodeColumn=detectionResult.getBarcodeColumnCount()+1;detectionResult.setDetectionResultColumn(0,leftRowIndicatorColumn);detectionResult.setDetectionResultColumn(maxBarcodeColumn,rightRowIndicatorColumn);var leftToRight=leftRowIndicatorColumn!=null;for(var barcodeColumnCount/*int*/=1;barcodeColumnCount<=maxBarcodeColumn;barcodeColumnCount++){var barcodeColumn=leftToRight?barcodeColumnCount:maxBarcodeColumn-barcodeColumnCount;if(detectionResult.getDetectionResultColumn(barcodeColumn)!==/* null */undefined){// This will be the case for the opposite row indicator column, which doesn't need to be decoded again.
continue;}var detectionResultColumn=void 0;if(barcodeColumn===0||barcodeColumn===maxBarcodeColumn){detectionResultColumn=new DetectionResultRowIndicatorColumn(boundingBox,barcodeColumn===0);}else{detectionResultColumn=new DetectionResultColumn(boundingBox);}detectionResult.setDetectionResultColumn(barcodeColumn,detectionResultColumn);var startColumn=-1;var previousStartColumn=startColumn;// TODO start at a row for which we know the start position, then detect upwards and downwards from there.
for(var imageRow/*int*/=boundingBox.getMinY();imageRow<=boundingBox.getMaxY();imageRow++){startColumn=PDF417ScanningDecoder.getStartColumn(detectionResult,barcodeColumn,imageRow,leftToRight);if(startColumn<0||startColumn>boundingBox.getMaxX()){if(previousStartColumn===-1){continue;}startColumn=previousStartColumn;}var codeword=PDF417ScanningDecoder.detectCodeword(image,boundingBox.getMinX(),boundingBox.getMaxX(),leftToRight,startColumn,imageRow,minCodewordWidth,maxCodewordWidth);if(codeword!=null){detectionResultColumn.setCodeword(imageRow,codeword);previousStartColumn=startColumn;minCodewordWidth=Math.min(minCodewordWidth,codeword.getWidth());maxCodewordWidth=Math.max(maxCodewordWidth,codeword.getWidth());}}}return PDF417ScanningDecoder.createDecoderResult(detectionResult);};/**
       *
       * @param leftRowIndicatorColumn
       * @param rightRowIndicatorColumn
       *
       * @throws NotFoundException
       */PDF417ScanningDecoder.merge=function(leftRowIndicatorColumn,rightRowIndicatorColumn){if(leftRowIndicatorColumn==null&&rightRowIndicatorColumn==null){return null;}var barcodeMetadata=PDF417ScanningDecoder.getBarcodeMetadata(leftRowIndicatorColumn,rightRowIndicatorColumn);if(barcodeMetadata==null){return null;}var boundingBox=BoundingBox.merge(PDF417ScanningDecoder.adjustBoundingBox(leftRowIndicatorColumn),PDF417ScanningDecoder.adjustBoundingBox(rightRowIndicatorColumn));return new DetectionResult(barcodeMetadata,boundingBox);};/**
       *
       * @param rowIndicatorColumn
       *
       * @throws NotFoundException
       */PDF417ScanningDecoder.adjustBoundingBox=function(rowIndicatorColumn){var e_1,_a;if(rowIndicatorColumn==null){return null;}var rowHeights=rowIndicatorColumn.getRowHeights();if(rowHeights==null){return null;}var maxRowHeight=PDF417ScanningDecoder.getMax(rowHeights);var missingStartRows=0;try{for(var rowHeights_1=__values$y(rowHeights),rowHeights_1_1=rowHeights_1.next();!rowHeights_1_1.done;rowHeights_1_1=rowHeights_1.next()){var rowHeight=rowHeights_1_1.value/*int*/;missingStartRows+=maxRowHeight-rowHeight;if(rowHeight>0){break;}}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(rowHeights_1_1&&!rowHeights_1_1.done&&(_a=rowHeights_1.return))_a.call(rowHeights_1);}finally{if(e_1)throw e_1.error;}}var codewords=rowIndicatorColumn.getCodewords();for(var row/*int*/=0;missingStartRows>0&&codewords[row]==null;row++){missingStartRows--;}var missingEndRows=0;for(var row/*int*/=rowHeights.length-1;row>=0;row--){missingEndRows+=maxRowHeight-rowHeights[row];if(rowHeights[row]>0){break;}}for(var row/*int*/=codewords.length-1;missingEndRows>0&&codewords[row]==null;row--){missingEndRows--;}return rowIndicatorColumn.getBoundingBox().addMissingRows(missingStartRows,missingEndRows,rowIndicatorColumn.isLeft());};PDF417ScanningDecoder.getMax=function(values){var e_2,_a;var maxValue=-1;try{for(var values_1=__values$y(values),values_1_1=values_1.next();!values_1_1.done;values_1_1=values_1.next()){var value=values_1_1.value/*int*/;maxValue=Math.max(maxValue,value);}}catch(e_2_1){e_2={error:e_2_1};}finally{try{if(values_1_1&&!values_1_1.done&&(_a=values_1.return))_a.call(values_1);}finally{if(e_2)throw e_2.error;}}return maxValue;};PDF417ScanningDecoder.getBarcodeMetadata=function(leftRowIndicatorColumn,rightRowIndicatorColumn){var leftBarcodeMetadata;if(leftRowIndicatorColumn==null||(leftBarcodeMetadata=leftRowIndicatorColumn.getBarcodeMetadata())==null){return rightRowIndicatorColumn==null?null:rightRowIndicatorColumn.getBarcodeMetadata();}var rightBarcodeMetadata;if(rightRowIndicatorColumn==null||(rightBarcodeMetadata=rightRowIndicatorColumn.getBarcodeMetadata())==null){return leftBarcodeMetadata;}if(leftBarcodeMetadata.getColumnCount()!==rightBarcodeMetadata.getColumnCount()&&leftBarcodeMetadata.getErrorCorrectionLevel()!==rightBarcodeMetadata.getErrorCorrectionLevel()&&leftBarcodeMetadata.getRowCount()!==rightBarcodeMetadata.getRowCount()){return null;}return leftBarcodeMetadata;};PDF417ScanningDecoder.getRowIndicatorColumn=function(image,boundingBox,startPoint,leftToRight,minCodewordWidth,maxCodewordWidth){var rowIndicatorColumn=new DetectionResultRowIndicatorColumn(boundingBox,leftToRight);for(var i/*int*/=0;i<2;i++){var increment=i===0?1:-1;var startColumn=Math.trunc(Math.trunc(startPoint.getX()));for(var imageRow/*int*/=Math.trunc(Math.trunc(startPoint.getY()));imageRow<=boundingBox.getMaxY()&&imageRow>=boundingBox.getMinY();imageRow+=increment){var codeword=PDF417ScanningDecoder.detectCodeword(image,0,image.getWidth(),leftToRight,startColumn,imageRow,minCodewordWidth,maxCodewordWidth);if(codeword!=null){rowIndicatorColumn.setCodeword(imageRow,codeword);if(leftToRight){startColumn=codeword.getStartX();}else{startColumn=codeword.getEndX();}}}}return rowIndicatorColumn;};/**
       *
       * @param detectionResult
       * @param BarcodeValue
       * @param param2
       * @param param3
       * @param barcodeMatrix
       *
       * @throws NotFoundException
       */PDF417ScanningDecoder.adjustCodewordCount=function(detectionResult,barcodeMatrix){var barcodeMatrix01=barcodeMatrix[0][1];var numberOfCodewords=barcodeMatrix01.getValue();var calculatedNumberOfCodewords=detectionResult.getBarcodeColumnCount()*detectionResult.getBarcodeRowCount()-PDF417ScanningDecoder.getNumberOfECCodeWords(detectionResult.getBarcodeECLevel());if(numberOfCodewords.length===0){if(calculatedNumberOfCodewords<1||calculatedNumberOfCodewords>PDF417Common.MAX_CODEWORDS_IN_BARCODE){throw NotFoundException.getNotFoundInstance();}barcodeMatrix01.setValue(calculatedNumberOfCodewords);}else if(numberOfCodewords[0]!==calculatedNumberOfCodewords){// The calculated one is more reliable as it is derived from the row indicator columns
barcodeMatrix01.setValue(calculatedNumberOfCodewords);}};/**
       *
       * @param detectionResult
       *
       * @throws FormatException
       * @throws ChecksumException
       * @throws NotFoundException
       */PDF417ScanningDecoder.createDecoderResult=function(detectionResult){var barcodeMatrix=PDF417ScanningDecoder.createBarcodeMatrix(detectionResult);PDF417ScanningDecoder.adjustCodewordCount(detectionResult,barcodeMatrix);var erasures/*Collection<Integer>*/=new Array();var codewords=new Int32Array(detectionResult.getBarcodeRowCount()*detectionResult.getBarcodeColumnCount());var ambiguousIndexValuesList=/*List<int[]>*/[];var ambiguousIndexesList=/*Collection<Integer>*/new Array();for(var row/*int*/=0;row<detectionResult.getBarcodeRowCount();row++){for(var column/*int*/=0;column<detectionResult.getBarcodeColumnCount();column++){var values=barcodeMatrix[row][column+1].getValue();var codewordIndex=row*detectionResult.getBarcodeColumnCount()+column;if(values.length===0){erasures.push(codewordIndex);}else if(values.length===1){codewords[codewordIndex]=values[0];}else{ambiguousIndexesList.push(codewordIndex);ambiguousIndexValuesList.push(values);}}}var ambiguousIndexValues=new Array(ambiguousIndexValuesList.length);for(var i/*int*/=0;i<ambiguousIndexValues.length;i++){ambiguousIndexValues[i]=ambiguousIndexValuesList[i];}return PDF417ScanningDecoder.createDecoderResultFromAmbiguousValues(detectionResult.getBarcodeECLevel(),codewords,PDF417Common.toIntArray(erasures),PDF417Common.toIntArray(ambiguousIndexesList),ambiguousIndexValues);};/**
       * This method deals with the fact, that the decoding process doesn't always yield a single most likely value. The
       * current error correction implementation doesn't deal with erasures very well, so it's better to provide a value
       * for these ambiguous codewords instead of treating it as an erasure. The problem is that we don't know which of
       * the ambiguous values to choose. We try decode using the first value, and if that fails, we use another of the
       * ambiguous values and try to decode again. This usually only happens on very hard to read and decode barcodes,
       * so decoding the normal barcodes is not affected by this.
       *
       * @param erasureArray contains the indexes of erasures
       * @param ambiguousIndexes array with the indexes that have more than one most likely value
       * @param ambiguousIndexValues two dimensional array that contains the ambiguous values. The first dimension must
       * be the same length as the ambiguousIndexes array
       *
       * @throws FormatException
       * @throws ChecksumException
       */PDF417ScanningDecoder.createDecoderResultFromAmbiguousValues=function(ecLevel,codewords,erasureArray,ambiguousIndexes,ambiguousIndexValues){var ambiguousIndexCount=new Int32Array(ambiguousIndexes.length);var tries=100;while(tries-->0){for(var i/*int*/=0;i<ambiguousIndexCount.length;i++){codewords[ambiguousIndexes[i]]=ambiguousIndexValues[i][ambiguousIndexCount[i]];}try{return PDF417ScanningDecoder.decodeCodewords(codewords,ecLevel,erasureArray);}catch(err){var ignored=err instanceof ChecksumException;if(!ignored){throw err;}}if(ambiguousIndexCount.length===0){throw ChecksumException.getChecksumInstance();}for(var i/*int*/=0;i<ambiguousIndexCount.length;i++){if(ambiguousIndexCount[i]<ambiguousIndexValues[i].length-1){ambiguousIndexCount[i]++;break;}else{ambiguousIndexCount[i]=0;if(i===ambiguousIndexCount.length-1){throw ChecksumException.getChecksumInstance();}}}}throw ChecksumException.getChecksumInstance();};PDF417ScanningDecoder.createBarcodeMatrix=function(detectionResult){var e_3,_a,e_4,_b;// let barcodeMatrix: BarcodeValue[][] =
// new BarcodeValue[detectionResult.getBarcodeRowCount()][detectionResult.getBarcodeColumnCount() + 2];
var barcodeMatrix=Array.from({length:detectionResult.getBarcodeRowCount()},function(){return new Array(detectionResult.getBarcodeColumnCount()+2);});for(var row/*int*/=0;row<barcodeMatrix.length;row++){for(var column_1/*int*/=0;column_1<barcodeMatrix[row].length;column_1++){barcodeMatrix[row][column_1]=new BarcodeValue();}}var column=0;try{for(var _c=__values$y(detectionResult.getDetectionResultColumns()),_d=_c.next();!_d.done;_d=_c.next()){var detectionResultColumn=_d.value/*DetectionResultColumn*/;if(detectionResultColumn!=null){try{for(var _e=(e_4=void 0,__values$y(detectionResultColumn.getCodewords())),_f=_e.next();!_f.done;_f=_e.next()){var codeword=_f.value/*Codeword*/;if(codeword!=null){var rowNumber=codeword.getRowNumber();if(rowNumber>=0){if(rowNumber>=barcodeMatrix.length){// We have more rows than the barcode metadata allows for, ignore them.
continue;}barcodeMatrix[rowNumber][column].setValue(codeword.getValue());}}}}catch(e_4_1){e_4={error:e_4_1};}finally{try{if(_f&&!_f.done&&(_b=_e.return))_b.call(_e);}finally{if(e_4)throw e_4.error;}}}column++;}}catch(e_3_1){e_3={error:e_3_1};}finally{try{if(_d&&!_d.done&&(_a=_c.return))_a.call(_c);}finally{if(e_3)throw e_3.error;}}return barcodeMatrix;};PDF417ScanningDecoder.isValidBarcodeColumn=function(detectionResult,barcodeColumn){return barcodeColumn>=0&&barcodeColumn<=detectionResult.getBarcodeColumnCount()+1;};PDF417ScanningDecoder.getStartColumn=function(detectionResult,barcodeColumn,imageRow,leftToRight){var e_5,_a;var offset=leftToRight?1:-1;var codeword=null;if(PDF417ScanningDecoder.isValidBarcodeColumn(detectionResult,barcodeColumn-offset)){codeword=detectionResult.getDetectionResultColumn(barcodeColumn-offset).getCodeword(imageRow);}if(codeword!=null){return leftToRight?codeword.getEndX():codeword.getStartX();}codeword=detectionResult.getDetectionResultColumn(barcodeColumn).getCodewordNearby(imageRow);if(codeword!=null){return leftToRight?codeword.getStartX():codeword.getEndX();}if(PDF417ScanningDecoder.isValidBarcodeColumn(detectionResult,barcodeColumn-offset)){codeword=detectionResult.getDetectionResultColumn(barcodeColumn-offset).getCodewordNearby(imageRow);}if(codeword!=null){return leftToRight?codeword.getEndX():codeword.getStartX();}var skippedColumns=0;while(PDF417ScanningDecoder.isValidBarcodeColumn(detectionResult,barcodeColumn-offset)){barcodeColumn-=offset;try{for(var _b=(e_5=void 0,__values$y(detectionResult.getDetectionResultColumn(barcodeColumn).getCodewords())),_c=_b.next();!_c.done;_c=_b.next()){var previousRowCodeword=_c.value/*Codeword*/;if(previousRowCodeword!=null){return(leftToRight?previousRowCodeword.getEndX():previousRowCodeword.getStartX())+offset*skippedColumns*(previousRowCodeword.getEndX()-previousRowCodeword.getStartX());}}}catch(e_5_1){e_5={error:e_5_1};}finally{try{if(_c&&!_c.done&&(_a=_b.return))_a.call(_b);}finally{if(e_5)throw e_5.error;}}skippedColumns++;}return leftToRight?detectionResult.getBoundingBox().getMinX():detectionResult.getBoundingBox().getMaxX();};PDF417ScanningDecoder.detectCodeword=function(image,minColumn,maxColumn,leftToRight,startColumn,imageRow,minCodewordWidth,maxCodewordWidth){startColumn=PDF417ScanningDecoder.adjustCodewordStartColumn(image,minColumn,maxColumn,leftToRight,startColumn,imageRow);// we usually know fairly exact now how long a codeword is. We should provide minimum and maximum expected length
// and try to adjust the read pixels, e.g. remove single pixel errors or try to cut off exceeding pixels.
// min and maxCodewordWidth should not be used as they are calculated for the whole barcode an can be inaccurate
// for the current position
var moduleBitCount=PDF417ScanningDecoder.getModuleBitCount(image,minColumn,maxColumn,leftToRight,startColumn,imageRow);if(moduleBitCount==null){return null;}var endColumn;var codewordBitCount=MathUtils.sum(moduleBitCount);if(leftToRight){endColumn=startColumn+codewordBitCount;}else{for(var i/*int*/=0;i<moduleBitCount.length/2;i++){var tmpCount=moduleBitCount[i];moduleBitCount[i]=moduleBitCount[moduleBitCount.length-1-i];moduleBitCount[moduleBitCount.length-1-i]=tmpCount;}endColumn=startColumn;startColumn=endColumn-codewordBitCount;}// TODO implement check for width and correction of black and white bars
// use start (and maybe stop pattern) to determine if black bars are wider than white bars. If so, adjust.
// should probably done only for codewords with a lot more than 17 bits.
// The following fixes 10-1.png, which has wide black bars and small white bars
//    for (let i /*int*/ = 0; i < moduleBitCount.length; i++) {
//      if (i % 2 === 0) {
//        moduleBitCount[i]--;
//      } else {
//        moduleBitCount[i]++;
//      }
//    }
// We could also use the width of surrounding codewords for more accurate results, but this seems
// sufficient for now
if(!PDF417ScanningDecoder.checkCodewordSkew(codewordBitCount,minCodewordWidth,maxCodewordWidth)){// We could try to use the startX and endX position of the codeword in the same column in the previous row,
// create the bit count from it and normalize it to 8. This would help with single pixel errors.
return null;}var decodedValue=PDF417CodewordDecoder.getDecodedValue(moduleBitCount);var codeword=PDF417Common.getCodeword(decodedValue);if(codeword===-1){return null;}return new Codeword(startColumn,endColumn,PDF417ScanningDecoder.getCodewordBucketNumber(decodedValue),codeword);};PDF417ScanningDecoder.getModuleBitCount=function(image,minColumn,maxColumn,leftToRight,startColumn,imageRow){var imageColumn=startColumn;var moduleBitCount=new Int32Array(8);var moduleNumber=0;var increment=leftToRight?1:-1;var previousPixelValue=leftToRight;while((leftToRight?imageColumn<maxColumn:imageColumn>=minColumn)&&moduleNumber<moduleBitCount.length){if(image.get(imageColumn,imageRow)===previousPixelValue){moduleBitCount[moduleNumber]++;imageColumn+=increment;}else{moduleNumber++;previousPixelValue=!previousPixelValue;}}if(moduleNumber===moduleBitCount.length||imageColumn===(leftToRight?maxColumn:minColumn)&&moduleNumber===moduleBitCount.length-1){return moduleBitCount;}return null;};PDF417ScanningDecoder.getNumberOfECCodeWords=function(barcodeECLevel){return 2<<barcodeECLevel;};PDF417ScanningDecoder.adjustCodewordStartColumn=function(image,minColumn,maxColumn,leftToRight,codewordStartColumn,imageRow){var correctedStartColumn=codewordStartColumn;var increment=leftToRight?-1:1;// there should be no black pixels before the start column. If there are, then we need to start earlier.
for(var i/*int*/=0;i<2;i++){while((leftToRight?correctedStartColumn>=minColumn:correctedStartColumn<maxColumn)&&leftToRight===image.get(correctedStartColumn,imageRow)){if(Math.abs(codewordStartColumn-correctedStartColumn)>PDF417ScanningDecoder.CODEWORD_SKEW_SIZE){return codewordStartColumn;}correctedStartColumn+=increment;}increment=-increment;leftToRight=!leftToRight;}return correctedStartColumn;};PDF417ScanningDecoder.checkCodewordSkew=function(codewordSize,minCodewordWidth,maxCodewordWidth){return minCodewordWidth-PDF417ScanningDecoder.CODEWORD_SKEW_SIZE<=codewordSize&&codewordSize<=maxCodewordWidth+PDF417ScanningDecoder.CODEWORD_SKEW_SIZE;};/**
       * @throws FormatException,
       * @throws ChecksumException
       */PDF417ScanningDecoder.decodeCodewords=function(codewords,ecLevel,erasures){if(codewords.length===0){throw FormatException.getFormatInstance();}var numECCodewords=1<<ecLevel+1;var correctedErrorsCount=PDF417ScanningDecoder.correctErrors(codewords,erasures,numECCodewords);PDF417ScanningDecoder.verifyCodewordCount(codewords,numECCodewords);// Decode the codewords
var decoderResult=DecodedBitStreamParser$2.decode(codewords,''+ecLevel);decoderResult.setErrorsCorrected(correctedErrorsCount);decoderResult.setErasures(erasures.length);return decoderResult;};/**
       * <p>Given data and error-correction codewords received, possibly corrupted by errors, attempts to
       * correct the errors in-place.</p>
       *
       * @param codewords   data and error correction codewords
       * @param erasures positions of any known erasures
       * @param numECCodewords number of error correction codewords that are available in codewords
       * @throws ChecksumException if error correction fails
       */PDF417ScanningDecoder.correctErrors=function(codewords,erasures,numECCodewords){if(erasures!=null&&erasures.length>numECCodewords/2+PDF417ScanningDecoder.MAX_ERRORS||numECCodewords<0||numECCodewords>PDF417ScanningDecoder.MAX_EC_CODEWORDS){// Too many errors or EC Codewords is corrupted
throw ChecksumException.getChecksumInstance();}return PDF417ScanningDecoder.errorCorrection.decode(codewords,numECCodewords,erasures);};/**
       * Verify that all is OK with the codeword array.
       * @throws FormatException
       */PDF417ScanningDecoder.verifyCodewordCount=function(codewords,numECCodewords){if(codewords.length<4){// Codeword array size should be at least 4 allowing for
// Count CW, At least one Data CW, Error Correction CW, Error Correction CW
throw FormatException.getFormatInstance();}// The first codeword, the Symbol Length Descriptor, shall always encode the total number of data
// codewords in the symbol, including the Symbol Length Descriptor itself, data codewords and pad
// codewords, but excluding the number of error correction codewords.
var numberOfCodewords=codewords[0];if(numberOfCodewords>codewords.length){throw FormatException.getFormatInstance();}if(numberOfCodewords===0){// Reset to the length of the array - 8 (Allow for at least level 3 Error Correction (8 Error Codewords)
if(numECCodewords<codewords.length){codewords[0]=codewords.length-numECCodewords;}else{throw FormatException.getFormatInstance();}}};PDF417ScanningDecoder.getBitCountForCodeword=function(codeword){var result=new Int32Array(8);var previousValue=0;var i=result.length-1;while(true){if((codeword&0x1)!==previousValue){previousValue=codeword&0x1;i--;if(i<0){break;}}result[i]++;codeword>>=1;}return result;};PDF417ScanningDecoder.getCodewordBucketNumber=function(codeword){if(codeword instanceof Int32Array){return this.getCodewordBucketNumber_Int32Array(codeword);}return this.getCodewordBucketNumber_number(codeword);};PDF417ScanningDecoder.getCodewordBucketNumber_number=function(codeword){return PDF417ScanningDecoder.getCodewordBucketNumber(PDF417ScanningDecoder.getBitCountForCodeword(codeword));};PDF417ScanningDecoder.getCodewordBucketNumber_Int32Array=function(moduleBitCount){return(moduleBitCount[0]-moduleBitCount[2]+moduleBitCount[4]-moduleBitCount[6]+9)%9;};PDF417ScanningDecoder.toString=function(barcodeMatrix){var formatter=new Formatter();// try (let formatter = new Formatter()) {
for(var row/*int*/=0;row<barcodeMatrix.length;row++){formatter.format('Row %2d: ',row);for(var column/*int*/=0;column<barcodeMatrix[row].length;column++){var barcodeValue=barcodeMatrix[row][column];if(barcodeValue.getValue().length===0){formatter.format('        ',null);}else{formatter.format('%4d(%2d)',barcodeValue.getValue()[0],barcodeValue.getConfidence(barcodeValue.getValue()[0]));}}formatter.format('%n');}return formatter.toString();// }
};/*final*/PDF417ScanningDecoder.CODEWORD_SKEW_SIZE=2;/*final*/PDF417ScanningDecoder.MAX_ERRORS=3;/*final*/PDF417ScanningDecoder.MAX_EC_CODEWORDS=512;/*final*/PDF417ScanningDecoder.errorCorrection=new ErrorCorrection();return PDF417ScanningDecoder;}();/*
   * Copyright 2009 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __values$z=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};// import java.util.ArrayList;
// import java.util.List;
// import java.util.Map;
/**
   * This implementation can detect and decode PDF417 codes in an image.
   *
   * @author Guenther Grau
   */var PDF417Reader=/** @class */function(){function PDF417Reader(){}// private static /*final Result[]*/ EMPTY_RESULT_ARRAY: Result[] = new Result([0]);
/**
       * Locates and decodes a PDF417 code in an image.
       *
       * @return a String representing the content encoded by the PDF417 code
       * @throws NotFoundException if a PDF417 code cannot be found,
       * @throws FormatException if a PDF417 cannot be decoded
       * @throws ChecksumException
       */ // @Override
PDF417Reader.prototype.decode=function(image,hints){if(hints===void 0){hints=null;}var result=PDF417Reader.decode(image,hints,false);if(result==null||result.length===0||result[0]==null){throw NotFoundException.getNotFoundInstance();}return result[0];};/**
       *
       * @param BinaryBitmap
       * @param image
       * @throws NotFoundException
       */ //   @Override
PDF417Reader.prototype.decodeMultiple=function(image,hints){if(hints===void 0){hints=null;}try{return PDF417Reader.decode(image,hints,true);}catch(ignored){if(ignored instanceof FormatException||ignored instanceof ChecksumException){throw NotFoundException.getNotFoundInstance();}throw ignored;}};/**
       *
       * @param image
       * @param hints
       * @param multiple
       *
       * @throws NotFoundException
       * @throws FormatExceptionß
       * @throws ChecksumException
       */PDF417Reader.decode=function(image,hints,multiple){var e_1,_a;var results=new Array();var detectorResult=Detector$3.detectMultiple(image,hints,multiple);try{for(var _b=__values$z(detectorResult.getPoints()),_c=_b.next();!_c.done;_c=_b.next()){var points=_c.value;var decoderResult=PDF417ScanningDecoder.decode(detectorResult.getBits(),points[4],points[5],points[6],points[7],PDF417Reader.getMinCodewordWidth(points),PDF417Reader.getMaxCodewordWidth(points));var result=new Result(decoderResult.getText(),decoderResult.getRawBytes(),undefined,points,BarcodeFormat$1.PDF_417);result.putMetadata(ResultMetadataType$1.ERROR_CORRECTION_LEVEL,decoderResult.getECLevel());var pdf417ResultMetadata=decoderResult.getOther();if(pdf417ResultMetadata!=null){result.putMetadata(ResultMetadataType$1.PDF417_EXTRA_METADATA,pdf417ResultMetadata);}results.push(result);}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(_c&&!_c.done&&(_a=_b.return))_a.call(_b);}finally{if(e_1)throw e_1.error;}}return results.map(function(x){return x;});};PDF417Reader.getMaxWidth=function(p1,p2){if(p1==null||p2==null){return 0;}return Math.trunc(Math.abs(p1.getX()-p2.getX()));};PDF417Reader.getMinWidth=function(p1,p2){if(p1==null||p2==null){return Integer.MAX_VALUE;}return Math.trunc(Math.abs(p1.getX()-p2.getX()));};PDF417Reader.getMaxCodewordWidth=function(p){return Math.floor(Math.max(Math.max(PDF417Reader.getMaxWidth(p[0],p[4]),PDF417Reader.getMaxWidth(p[6],p[2])*PDF417Common.MODULES_IN_CODEWORD/PDF417Common.MODULES_IN_STOP_PATTERN),Math.max(PDF417Reader.getMaxWidth(p[1],p[5]),PDF417Reader.getMaxWidth(p[7],p[3])*PDF417Common.MODULES_IN_CODEWORD/PDF417Common.MODULES_IN_STOP_PATTERN)));};PDF417Reader.getMinCodewordWidth=function(p){return Math.floor(Math.min(Math.min(PDF417Reader.getMinWidth(p[0],p[4]),PDF417Reader.getMinWidth(p[6],p[2])*PDF417Common.MODULES_IN_CODEWORD/PDF417Common.MODULES_IN_STOP_PATTERN),Math.min(PDF417Reader.getMinWidth(p[1],p[5]),PDF417Reader.getMinWidth(p[7],p[3])*PDF417Common.MODULES_IN_CODEWORD/PDF417Common.MODULES_IN_STOP_PATTERN)));};// @Override
PDF417Reader.prototype.reset=function(){// nothing needs to be reset
};return PDF417Reader;}();var __extends$W=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * Custom Error class of type Exception.
   */var ReaderException=/** @class */function(_super){__extends$W(ReaderException,_super);function ReaderException(){return _super!==null&&_super.apply(this,arguments)||this;}ReaderException.kind='ReaderException';return ReaderException;}(Exception);/*
   * Copyright 2009 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __values$A=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};/*namespace com.google.zxing {*/ /**
   * MultiFormatReader is a convenience class and the main entry point into the library for most uses.
   * By default it attempts to decode all barcode formats that the library supports. Optionally, you
   * can provide a hints object to request different behavior, for example only decoding QR codes.
   *
   * @author Sean Owen
   * @author dswitkin@google.com (Daniel Switkin)
   */var MultiFormatReader=/** @class */function(){function MultiFormatReader(){}/**
       * This version of decode honors the intent of Reader.decode(BinaryBitmap) in that it
       * passes null as a hint to the decoders. However, that makes it inefficient to call repeatedly.
       * Use setHints() followed by decodeWithState() for continuous scan applications.
       *
       * @param image The pixel data to decode
       * @return The contents of the image
       *
       * @throws NotFoundException Any errors which occurred
       */ /*@Override*/ // public decode(image: BinaryBitmap): Result {
//   setHints(null)
//   return decodeInternal(image)
// }
/**
       * Decode an image using the hints provided. Does not honor existing state.
       *
       * @param image The pixel data to decode
       * @param hints The hints to use, clearing the previous state.
       * @return The contents of the image
       *
       * @throws NotFoundException Any errors which occurred
       */ /*@Override*/MultiFormatReader.prototype.decode=function(image,hints){this.setHints(hints);return this.decodeInternal(image);};/**
       * Decode an image using the state set up by calling setHints() previously. Continuous scan
       * clients will get a <b>large</b> speed increase by using this instead of decode().
       *
       * @param image The pixel data to decode
       * @return The contents of the image
       *
       * @throws NotFoundException Any errors which occurred
       */MultiFormatReader.prototype.decodeWithState=function(image){// Make sure to set up the default state so we don't crash
if(this.readers===null||this.readers===undefined){this.setHints(null);}return this.decodeInternal(image);};/**
       * This method adds state to the MultiFormatReader. By setting the hints once, subsequent calls
       * to decodeWithState(image) can reuse the same set of readers without reallocating memory. This
       * is important for performance in continuous scan clients.
       *
       * @param hints The set of hints to use for subsequent calls to decode(image)
       */MultiFormatReader.prototype.setHints=function(hints){this.hints=hints;var tryHarder=hints!==null&&hints!==undefined&&undefined!==hints.get(DecodeHintType$1.TRY_HARDER);/*@SuppressWarnings("unchecked")*/var formats=hints===null||hints===undefined?null:hints.get(DecodeHintType$1.POSSIBLE_FORMATS);var readers=new Array();if(formats!==null&&formats!==undefined){var addOneDReader=formats.some(function(f){return f===BarcodeFormat$1.UPC_A||f===BarcodeFormat$1.UPC_E||f===BarcodeFormat$1.EAN_13||f===BarcodeFormat$1.EAN_8||f===BarcodeFormat$1.CODABAR||f===BarcodeFormat$1.CODE_39||f===BarcodeFormat$1.CODE_93||f===BarcodeFormat$1.CODE_128||f===BarcodeFormat$1.ITF||f===BarcodeFormat$1.RSS_14||f===BarcodeFormat$1.RSS_EXPANDED;});// Put 1D readers upfront in "normal" mode
// TYPESCRIPTPORT: TODO: uncomment below as they are ported
if(addOneDReader&&!tryHarder){readers.push(new MultiFormatOneDReader(hints));}if(formats.includes(BarcodeFormat$1.QR_CODE)){readers.push(new QRCodeReader());}if(formats.includes(BarcodeFormat$1.DATA_MATRIX)){readers.push(new DataMatrixReader());}if(formats.includes(BarcodeFormat$1.AZTEC)){readers.push(new AztecReader());}if(formats.includes(BarcodeFormat$1.PDF_417)){readers.push(new PDF417Reader());}// if (formats.includes(BarcodeFormat.MAXICODE)) {
//    readers.push(new MaxiCodeReader())
// }
// At end in "try harder" mode
if(addOneDReader&&tryHarder){readers.push(new MultiFormatOneDReader(hints));}}if(readers.length===0){if(!tryHarder){readers.push(new MultiFormatOneDReader(hints));}readers.push(new QRCodeReader());readers.push(new DataMatrixReader());readers.push(new AztecReader());readers.push(new PDF417Reader());// readers.push(new MaxiCodeReader())
if(tryHarder){readers.push(new MultiFormatOneDReader(hints));}}this.readers=readers;// .toArray(new Reader[readers.size()])
};/*@Override*/MultiFormatReader.prototype.reset=function(){var e_1,_a;if(this.readers!==null){try{for(var _b=__values$A(this.readers),_c=_b.next();!_c.done;_c=_b.next()){var reader=_c.value;reader.reset();}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(_c&&!_c.done&&(_a=_b.return))_a.call(_b);}finally{if(e_1)throw e_1.error;}}}};/**
       * @throws NotFoundException
       */MultiFormatReader.prototype.decodeInternal=function(image){var e_2,_a;if(this.readers===null){throw new ReaderException('No readers where selected, nothing can be read.');}try{for(var _b=__values$A(this.readers),_c=_b.next();!_c.done;_c=_b.next()){var reader=_c.value;// Trying to decode with ${reader} reader.
try{return reader.decode(image,this.hints);}catch(ex){if(ex instanceof ReaderException){continue;}// Bad Exception.
}}}catch(e_2_1){e_2={error:e_2_1};}finally{try{if(_c&&!_c.done&&(_a=_b.return))_a.call(_b);}finally{if(e_2)throw e_2.error;}}throw new NotFoundException('No MultiFormat Readers were able to detect the code.');};return MultiFormatReader;}();var __extends$X=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var BrowserMultiFormatReader=/** @class */function(_super){__extends$X(BrowserMultiFormatReader,_super);function BrowserMultiFormatReader(hints,timeBetweenScansMillis){if(hints===void 0){hints=null;}if(timeBetweenScansMillis===void 0){timeBetweenScansMillis=500;}var _this=this;var reader=new MultiFormatReader();reader.setHints(hints);_this=_super.call(this,reader,timeBetweenScansMillis)||this;return _this;}/**
       * Overwrite decodeBitmap to call decodeWithState, which will pay
       * attention to the hints set in the constructor function
       */BrowserMultiFormatReader.prototype.decodeBitmap=function(binaryBitmap){return this.reader.decodeWithState(binaryBitmap);};return BrowserMultiFormatReader;}(BrowserCodeReader);var __extends$Y=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * @deprecated Moving to @zxing/browser
   *
   * QR Code reader to use from browser.
   */var BrowserPDF417Reader=/** @class */function(_super){__extends$Y(BrowserPDF417Reader,_super);/**
       * Creates an instance of BrowserPDF417Reader.
       * @param {number} [timeBetweenScansMillis=500] the time delay between subsequent decode tries
       */function BrowserPDF417Reader(timeBetweenScansMillis){if(timeBetweenScansMillis===void 0){timeBetweenScansMillis=500;}return _super.call(this,new PDF417Reader(),timeBetweenScansMillis)||this;}return BrowserPDF417Reader;}(BrowserCodeReader);var __extends$Z=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * @deprecated Moving to @zxing/browser
   *
   * QR Code reader to use from browser.
   */var BrowserQRCodeReader=/** @class */function(_super){__extends$Z(BrowserQRCodeReader,_super);/**
       * Creates an instance of BrowserQRCodeReader.
       * @param {number} [timeBetweenScansMillis=500] the time delay between subsequent decode tries
       */function BrowserQRCodeReader(timeBetweenScansMillis){if(timeBetweenScansMillis===void 0){timeBetweenScansMillis=500;}return _super.call(this,new QRCodeReader(),timeBetweenScansMillis)||this;}return BrowserQRCodeReader;}(BrowserCodeReader);/*
   * Copyright 2009 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /*namespace com.google.zxing {*/ /**
   * These are a set of hints that you may pass to Writers to specify their behavior.
   *
   * @author dswitkin@google.com (Daniel Switkin)
   */var EncodeHintType;(function(EncodeHintType){/**
       * Specifies what degree of error correction to use, for example in QR Codes.
       * Type depends on the encoder. For example for QR codes it's type
       * {@link com.google.zxing.qrcode.decoder.ErrorCorrectionLevel ErrorCorrectionLevel}.
       * For Aztec it is of type {@link Integer}, representing the minimal percentage of error correction words.
       * For PDF417 it is of type {@link Integer}, valid values being 0 to 8.
       * In all cases, it can also be a {@link String} representation of the desired value as well.
       * Note: an Aztec symbol should have a minimum of 25% EC words.
       */EncodeHintType[EncodeHintType["ERROR_CORRECTION"]=0]="ERROR_CORRECTION";/**
       * Specifies what character encoding to use where applicable (type {@link String})
       */EncodeHintType[EncodeHintType["CHARACTER_SET"]=1]="CHARACTER_SET";/**
       * Specifies the matrix shape for Data Matrix (type {@link com.google.zxing.datamatrix.encoder.SymbolShapeHint})
       */EncodeHintType[EncodeHintType["DATA_MATRIX_SHAPE"]=2]="DATA_MATRIX_SHAPE";/**
       * Specifies a minimum barcode size (type {@link Dimension}). Only applicable to Data Matrix now.
       *
       * @deprecated use width/height params in
       * {@link com.google.zxing.datamatrix.DataMatrixWriter#encode(String, BarcodeFormat, int, int)}
       */ /*@Deprecated*/EncodeHintType[EncodeHintType["MIN_SIZE"]=3]="MIN_SIZE";/**
       * Specifies a maximum barcode size (type {@link Dimension}). Only applicable to Data Matrix now.
       *
       * @deprecated without replacement
       */ /*@Deprecated*/EncodeHintType[EncodeHintType["MAX_SIZE"]=4]="MAX_SIZE";/**
       * Specifies margin, in pixels, to use when generating the barcode. The meaning can vary
       * by format; for example it controls margin before and after the barcode horizontally for
       * most 1D formats. (Type {@link Integer}, or {@link String} representation of the integer value).
       */EncodeHintType[EncodeHintType["MARGIN"]=5]="MARGIN";/**
       * Specifies whether to use compact mode for PDF417 (type {@link Boolean}, or "true" or "false"
       * {@link String} value).
       */EncodeHintType[EncodeHintType["PDF417_COMPACT"]=6]="PDF417_COMPACT";/**
       * Specifies what compaction mode to use for PDF417 (type
       * {@link com.google.zxing.pdf417.encoder.Compaction Compaction} or {@link String} value of one of its
       * enum values).
       */EncodeHintType[EncodeHintType["PDF417_COMPACTION"]=7]="PDF417_COMPACTION";/**
       * Specifies the minimum and maximum number of rows and columns for PDF417 (type
       * {@link com.google.zxing.pdf417.encoder.Dimensions Dimensions}).
       */EncodeHintType[EncodeHintType["PDF417_DIMENSIONS"]=8]="PDF417_DIMENSIONS";/**
       * Specifies the required number of layers for an Aztec code.
       * A negative number (-1, -2, -3, -4) specifies a compact Aztec code.
       * 0 indicates to use the minimum number of layers (the default).
       * A positive number (1, 2, .. 32) specifies a normal (non-compact) Aztec code.
       * (Type {@link Integer}, or {@link String} representation of the integer value).
       */EncodeHintType[EncodeHintType["AZTEC_LAYERS"]=9]="AZTEC_LAYERS";/**
       * Specifies the exact version of QR code to be encoded.
       * (Type {@link Integer}, or {@link String} representation of the integer value).
       */EncodeHintType[EncodeHintType["QR_VERSION"]=10]="QR_VERSION";})(EncodeHintType||(EncodeHintType={}));var EncodeHintType$1=EncodeHintType;/*
   * Copyright 2008 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /**
   * <p>Implements Reed-Solomon encoding, as the name implies.</p>
   *
   * @author Sean Owen
   * @author William Rucklidge
   */var ReedSolomonEncoder=/** @class */function(){/**
       * A reed solomon error-correcting encoding constructor is created by
       * passing as Galois Field with of size equal to the number of code
       * words (symbols) in the alphabet (the number of values in each
       * element of arrays that are encoded/decoded).
       * @param field A galois field with a number of elements equal to the size
       * of the alphabet of symbols to encode.
       */function ReedSolomonEncoder(field){this.field=field;this.cachedGenerators=[];this.cachedGenerators.push(new GenericGFPoly(field,Int32Array.from([1])));}ReedSolomonEncoder.prototype.buildGenerator=function(degree/*int*/){var cachedGenerators=this.cachedGenerators;if(degree>=cachedGenerators.length){var lastGenerator=cachedGenerators[cachedGenerators.length-1];var field=this.field;for(var d=cachedGenerators.length;d<=degree;d++){var nextGenerator=lastGenerator.multiply(new GenericGFPoly(field,Int32Array.from([1,field.exp(d-1+field.getGeneratorBase())])));cachedGenerators.push(nextGenerator);lastGenerator=nextGenerator;}}return cachedGenerators[degree];};/**
       * <p>Encode a sequence of code words (symbols) using Reed-Solomon to allow decoders
       * to detect and correct errors that may have been introduced when the resulting
       * data is stored or transmitted.</p>
       *
       * @param toEncode array used for both and output. Caller initializes the array with
       * the code words (symbols) to be encoded followed by empty elements allocated to make
       * space for error-correction code words in the encoded output. The array contains
       * the encdoded output when encode returns. Code words are encoded as numbers from
       * 0 to n-1, where n is the number of possible code words (symbols), as determined
       * by the size of the Galois Field passed in the constructor of this object.
       * @param ecBytes the number of elements reserved in the array (first parameter)
       * to store error-correction code words. Thus, the number of code words (symbols)
       * to encode in the first parameter is thus toEncode.length - ecBytes.
       * Note, the use of "bytes" in the name of this parameter is misleading, as there may
       * be more or fewer than 256 symbols being encoded, as determined by the number of
       * elements in the Galois Field passed as a constructor to this object.
       * @throws IllegalArgumentException thrown in response to validation errros.
       */ReedSolomonEncoder.prototype.encode=function(toEncode,ecBytes/*int*/){if(ecBytes===0){throw new IllegalArgumentException('No error correction bytes');}var dataBytes=toEncode.length-ecBytes;if(dataBytes<=0){throw new IllegalArgumentException('No data bytes provided');}var generator=this.buildGenerator(ecBytes);var infoCoefficients=new Int32Array(dataBytes);System.arraycopy(toEncode,0,infoCoefficients,0,dataBytes);var info=new GenericGFPoly(this.field,infoCoefficients);info=info.multiplyByMonomial(ecBytes,1);var remainder=info.divide(generator)[1];var coefficients=remainder.getCoefficients();var numZeroCoefficients=ecBytes-coefficients.length;for(var i=0;i<numZeroCoefficients;i++){toEncode[dataBytes+i]=0;}System.arraycopy(coefficients,0,toEncode,dataBytes+numZeroCoefficients,coefficients.length);};return ReedSolomonEncoder;}();/*
   * Copyright 2008 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /**
   * @author Satoru Takabayashi
   * @author Daniel Switkin
   * @author Sean Owen
   */var MaskUtil=/** @class */function(){function MaskUtil(){// do nothing
}/**
       * Apply mask penalty rule 1 and return the penalty. Find repetitive cells with the same color and
       * give penalty to them. Example: 00000 or 11111.
       */MaskUtil.applyMaskPenaltyRule1=function(matrix){return MaskUtil.applyMaskPenaltyRule1Internal(matrix,true)+MaskUtil.applyMaskPenaltyRule1Internal(matrix,false);};/**
       * Apply mask penalty rule 2 and return the penalty. Find 2x2 blocks with the same color and give
       * penalty to them. This is actually equivalent to the spec's rule, which is to find MxN blocks and give a
       * penalty proportional to (M-1)x(N-1), because this is the number of 2x2 blocks inside such a block.
       */MaskUtil.applyMaskPenaltyRule2=function(matrix){var penalty=0;var array=matrix.getArray();var width=matrix.getWidth();var height=matrix.getHeight();for(var y=0;y<height-1;y++){var arrayY=array[y];for(var x=0;x<width-1;x++){var value=arrayY[x];if(value===arrayY[x+1]&&value===array[y+1][x]&&value===array[y+1][x+1]){penalty++;}}}return MaskUtil.N2*penalty;};/**
       * Apply mask penalty rule 3 and return the penalty. Find consecutive runs of 1:1:3:1:1:4
       * starting with black, or 4:1:1:3:1:1 starting with white, and give penalty to them.  If we
       * find patterns like 000010111010000, we give penalty once.
       */MaskUtil.applyMaskPenaltyRule3=function(matrix){var numPenalties=0;var array=matrix.getArray();var width=matrix.getWidth();var height=matrix.getHeight();for(var y=0;y<height;y++){for(var x=0;x<width;x++){var arrayY=array[y];// We can at least optimize this access
if(x+6<width&&arrayY[x]===1&&arrayY[x+1]===0&&arrayY[x+2]===1&&arrayY[x+3]===1&&arrayY[x+4]===1&&arrayY[x+5]===0&&arrayY[x+6]===1&&(MaskUtil.isWhiteHorizontal(arrayY,x-4,x)||MaskUtil.isWhiteHorizontal(arrayY,x+7,x+11))){numPenalties++;}if(y+6<height&&array[y][x]===1&&array[y+1][x]===0&&array[y+2][x]===1&&array[y+3][x]===1&&array[y+4][x]===1&&array[y+5][x]===0&&array[y+6][x]===1&&(MaskUtil.isWhiteVertical(array,x,y-4,y)||MaskUtil.isWhiteVertical(array,x,y+7,y+11))){numPenalties++;}}}return numPenalties*MaskUtil.N3;};MaskUtil.isWhiteHorizontal=function(rowArray,from/*int*/,to/*int*/){from=Math.max(from,0);to=Math.min(to,rowArray.length);for(var i=from;i<to;i++){if(rowArray[i]===1){return false;}}return true;};MaskUtil.isWhiteVertical=function(array,col/*int*/,from/*int*/,to/*int*/){from=Math.max(from,0);to=Math.min(to,array.length);for(var i=from;i<to;i++){if(array[i][col]===1){return false;}}return true;};/**
       * Apply mask penalty rule 4 and return the penalty. Calculate the ratio of dark cells and give
       * penalty if the ratio is far from 50%. It gives 10 penalty for 5% distance.
       */MaskUtil.applyMaskPenaltyRule4=function(matrix){var numDarkCells=0;var array=matrix.getArray();var width=matrix.getWidth();var height=matrix.getHeight();for(var y=0;y<height;y++){var arrayY=array[y];for(var x=0;x<width;x++){if(arrayY[x]===1){numDarkCells++;}}}var numTotalCells=matrix.getHeight()*matrix.getWidth();var fivePercentVariances=Math.floor(Math.abs(numDarkCells*2-numTotalCells)*10/numTotalCells);return fivePercentVariances*MaskUtil.N4;};/**
       * Return the mask bit for "getMaskPattern" at "x" and "y". See 8.8 of JISX0510:2004 for mask
       * pattern conditions.
       */MaskUtil.getDataMaskBit=function(maskPattern/*int*/,x/*int*/,y/*int*/){var intermediate;/*int*/var temp;/*int*/switch(maskPattern){case 0:intermediate=y+x&0x1;break;case 1:intermediate=y&0x1;break;case 2:intermediate=x%3;break;case 3:intermediate=(y+x)%3;break;case 4:intermediate=Math.floor(y/2)+Math.floor(x/3)&0x1;break;case 5:temp=y*x;intermediate=(temp&0x1)+temp%3;break;case 6:temp=y*x;intermediate=(temp&0x1)+temp%3&0x1;break;case 7:temp=y*x;intermediate=temp%3+(y+x&0x1)&0x1;break;default:throw new IllegalArgumentException('Invalid mask pattern: '+maskPattern);}return intermediate===0;};/**
       * Helper function for applyMaskPenaltyRule1. We need this for doing this calculation in both
       * vertical and horizontal orders respectively.
       */MaskUtil.applyMaskPenaltyRule1Internal=function(matrix,isHorizontal){var penalty=0;var iLimit=isHorizontal?matrix.getHeight():matrix.getWidth();var jLimit=isHorizontal?matrix.getWidth():matrix.getHeight();var array=matrix.getArray();for(var i=0;i<iLimit;i++){var numSameBitCells=0;var prevBit=-1;for(var j=0;j<jLimit;j++){var bit=isHorizontal?array[i][j]:array[j][i];if(bit===prevBit){numSameBitCells++;}else{if(numSameBitCells>=5){penalty+=MaskUtil.N1+(numSameBitCells-5);}numSameBitCells=1;// Include the cell itself.
prevBit=bit;}}if(numSameBitCells>=5){penalty+=MaskUtil.N1+(numSameBitCells-5);}}return penalty;};// Penalty weights from section 6.8.2.1
MaskUtil.N1=3;MaskUtil.N2=3;MaskUtil.N3=40;MaskUtil.N4=10;return MaskUtil;}();/*
   * Copyright 2008 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __values$B=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};/**
   * JAVAPORT: The original code was a 2D array of ints, but since it only ever gets assigned
   * -1, 0, and 1, I'm going to use less memory and go with bytes.
   *
   * @author dswitkin@google.com (Daniel Switkin)
   */var ByteMatrix=/** @class */function(){function ByteMatrix(width/*int*/,height/*int*/){this.width=width;this.height=height;var bytes=new Array(height);// [height][width]
for(var i=0;i!==height;i++){bytes[i]=new Uint8Array(width);}this.bytes=bytes;}ByteMatrix.prototype.getHeight=function(){return this.height;};ByteMatrix.prototype.getWidth=function(){return this.width;};ByteMatrix.prototype.get=function(x/*int*/,y/*int*/){return this.bytes[y][x];};/**
       * @return an internal representation as bytes, in row-major order. array[y][x] represents point (x,y)
       */ByteMatrix.prototype.getArray=function(){return this.bytes;};// TYPESCRIPTPORT: preffer to let two methods instead of override to avoid type comparison inside
ByteMatrix.prototype.setNumber=function(x/*int*/,y/*int*/,value/*byte|int*/){this.bytes[y][x]=value;};// public set(x: number /*int*/, y: number /*int*/, value: number /*int*/): void {
//   bytes[y][x] = (byte) value
// }
ByteMatrix.prototype.setBoolean=function(x/*int*/,y/*int*/,value){this.bytes[y][x]=/*(byte) */value?1:0;};ByteMatrix.prototype.clear=function(value/*byte*/){var e_1,_a;try{for(var _b=__values$B(this.bytes),_c=_b.next();!_c.done;_c=_b.next()){var aByte=_c.value;Arrays.fill(aByte,value);}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(_c&&!_c.done&&(_a=_b.return))_a.call(_b);}finally{if(e_1)throw e_1.error;}}};ByteMatrix.prototype.equals=function(o){if(!(o instanceof ByteMatrix)){return false;}var other=o;if(this.width!==other.width){return false;}if(this.height!==other.height){return false;}for(var y=0,height=this.height;y<height;++y){var bytesY=this.bytes[y];var otherBytesY=other.bytes[y];for(var x=0,width=this.width;x<width;++x){if(bytesY[x]!==otherBytesY[x]){return false;}}}return true;};/*@Override*/ByteMatrix.prototype.toString=function(){var result=new StringBuilder();// (2 * width * height + 2)
for(var y=0,height=this.height;y<height;++y){var bytesY=this.bytes[y];for(var x=0,width=this.width;x<width;++x){switch(bytesY[x]){case 0:result.append(' 0');break;case 1:result.append(' 1');break;default:result.append('  ');break;}}result.append('\n');}return result.toString();};return ByteMatrix;}();/*
   * Copyright 2008 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /**
   * @author satorux@google.com (Satoru Takabayashi) - creator
   * @author dswitkin@google.com (Daniel Switkin) - ported from C++
   */var QRCode=/** @class */function(){function QRCode(){this.maskPattern=-1;}QRCode.prototype.getMode=function(){return this.mode;};QRCode.prototype.getECLevel=function(){return this.ecLevel;};QRCode.prototype.getVersion=function(){return this.version;};QRCode.prototype.getMaskPattern=function(){return this.maskPattern;};QRCode.prototype.getMatrix=function(){return this.matrix;};/*@Override*/QRCode.prototype.toString=function(){var result=new StringBuilder();// (200)
result.append('<<\n');result.append(' mode: ');result.append(this.mode?this.mode.toString():'null');result.append('\n ecLevel: ');result.append(this.ecLevel?this.ecLevel.toString():'null');result.append('\n version: ');result.append(this.version?this.version.toString():'null');result.append('\n maskPattern: ');result.append(this.maskPattern.toString());if(this.matrix){result.append('\n matrix:\n');result.append(this.matrix.toString());}else{result.append('\n matrix: null\n');}result.append('>>\n');return result.toString();};QRCode.prototype.setMode=function(value){this.mode=value;};QRCode.prototype.setECLevel=function(value){this.ecLevel=value;};QRCode.prototype.setVersion=function(version){this.version=version;};QRCode.prototype.setMaskPattern=function(value/*int*/){this.maskPattern=value;};QRCode.prototype.setMatrix=function(value){this.matrix=value;};// Check if "mask_pattern" is valid.
QRCode.isValidMaskPattern=function(maskPattern/*int*/){return maskPattern>=0&&maskPattern<QRCode.NUM_MASK_PATTERNS;};QRCode.NUM_MASK_PATTERNS=8;return QRCode;}();var __extends$_=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * Custom Error class of type Exception.
   */var WriterException=/** @class */function(_super){__extends$_(WriterException,_super);function WriterException(){return _super!==null&&_super.apply(this,arguments)||this;}WriterException.kind='WriterException';return WriterException;}(Exception);/*
   * Copyright 2008 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /**
   * @author satorux@google.com (Satoru Takabayashi) - creator
   * @author dswitkin@google.com (Daniel Switkin) - ported from C++
   */var MatrixUtil=/** @class */function(){function MatrixUtil(){// do nothing
}// Set all cells to -1 (TYPESCRIPTPORT: 255).  -1 (TYPESCRIPTPORT: 255) means that the cell is empty (not set yet).
//
// JAVAPORT: We shouldn't need to do this at all. The code should be rewritten to begin encoding
// with the ByteMatrix initialized all to zero.
MatrixUtil.clearMatrix=function(matrix){// TYPESCRIPTPORT: we use UintArray se changed here from -1 to 255
matrix.clear(/*(byte) */ /*-1*/255);};// Build 2D matrix of QR Code from "dataBits" with "ecLevel", "version" and "getMaskPattern". On
// success, store the result in "matrix" and return true.
MatrixUtil.buildMatrix=function(dataBits,ecLevel,version,maskPattern/*int*/,matrix){MatrixUtil.clearMatrix(matrix);MatrixUtil.embedBasicPatterns(version,matrix);// Type information appear with any version.
MatrixUtil.embedTypeInfo(ecLevel,maskPattern,matrix);// Version info appear if version >= 7.
MatrixUtil.maybeEmbedVersionInfo(version,matrix);// Data should be embedded at end.
MatrixUtil.embedDataBits(dataBits,maskPattern,matrix);};// Embed basic patterns. On success, modify the matrix and return true.
// The basic patterns are:
// - Position detection patterns
// - Timing patterns
// - Dark dot at the left bottom corner
// - Position adjustment patterns, if need be
MatrixUtil.embedBasicPatterns=function(version,matrix){// Let's get started with embedding big squares at corners.
MatrixUtil.embedPositionDetectionPatternsAndSeparators(matrix);// Then, embed the dark dot at the left bottom corner.
MatrixUtil.embedDarkDotAtLeftBottomCorner(matrix);// Position adjustment patterns appear if version >= 2.
MatrixUtil.maybeEmbedPositionAdjustmentPatterns(version,matrix);// Timing patterns should be embedded after position adj. patterns.
MatrixUtil.embedTimingPatterns(matrix);};// Embed type information. On success, modify the matrix.
MatrixUtil.embedTypeInfo=function(ecLevel,maskPattern/*int*/,matrix){var typeInfoBits=new BitArray();MatrixUtil.makeTypeInfoBits(ecLevel,maskPattern,typeInfoBits);for(var i=0,size=typeInfoBits.getSize();i<size;++i){// Place bits in LSB to MSB order.  LSB (least significant bit) is the last value in
// "typeInfoBits".
var bit=typeInfoBits.get(typeInfoBits.getSize()-1-i);// Type info bits at the left top corner. See 8.9 of JISX0510:2004 (p.46).
var coordinates=MatrixUtil.TYPE_INFO_COORDINATES[i];var x1=coordinates[0];var y1=coordinates[1];matrix.setBoolean(x1,y1,bit);if(i<8){// Right top corner.
var x2=matrix.getWidth()-i-1;var y2=8;matrix.setBoolean(x2,y2,bit);}else{// Left bottom corner.
var x2=8;var y2=matrix.getHeight()-7+(i-8);matrix.setBoolean(x2,y2,bit);}}};// Embed version information if need be. On success, modify the matrix and return true.
// See 8.10 of JISX0510:2004 (p.47) for how to embed version information.
MatrixUtil.maybeEmbedVersionInfo=function(version,matrix){if(version.getVersionNumber()<7){// Version info is necessary if version >= 7.
return;// Don't need version info.
}var versionInfoBits=new BitArray();MatrixUtil.makeVersionInfoBits(version,versionInfoBits);var bitIndex=6*3-1;// It will decrease from 17 to 0.
for(var i=0;i<6;++i){for(var j=0;j<3;++j){// Place bits in LSB (least significant bit) to MSB order.
var bit=versionInfoBits.get(bitIndex);bitIndex--;// Left bottom corner.
matrix.setBoolean(i,matrix.getHeight()-11+j,bit);// Right bottom corner.
matrix.setBoolean(matrix.getHeight()-11+j,i,bit);}}};// Embed "dataBits" using "getMaskPattern". On success, modify the matrix and return true.
// For debugging purposes, it skips masking process if "getMaskPattern" is -1(TYPESCRIPTPORT: 255).
// See 8.7 of JISX0510:2004 (p.38) for how to embed data bits.
MatrixUtil.embedDataBits=function(dataBits,maskPattern/*int*/,matrix){var bitIndex=0;var direction=-1;// Start from the right bottom cell.
var x=matrix.getWidth()-1;var y=matrix.getHeight()-1;while(x>0){// Skip the vertical timing pattern.
if(x===6){x-=1;}while(y>=0&&y<matrix.getHeight()){for(var i=0;i<2;++i){var xx=x-i;// Skip the cell if it's not empty.
if(!MatrixUtil.isEmpty(matrix.get(xx,y))){continue;}var bit=void 0;if(bitIndex<dataBits.getSize()){bit=dataBits.get(bitIndex);++bitIndex;}else{// Padding bit. If there is no bit left, we'll fill the left cells with 0, as described
// in 8.4.9 of JISX0510:2004 (p. 24).
bit=false;}// Skip masking if mask_pattern is -1 (TYPESCRIPTPORT: 255).
if(maskPattern!==255&&MaskUtil.getDataMaskBit(maskPattern,xx,y)){bit=!bit;}matrix.setBoolean(xx,y,bit);}y+=direction;}direction=-direction;// Reverse the direction.
y+=direction;x-=2;// Move to the left.
}// All bits should be consumed.
if(bitIndex!==dataBits.getSize()){throw new WriterException('Not all bits consumed: '+bitIndex+'/'+dataBits.getSize());}};// Return the position of the most significant bit set (one: to) in the "value". The most
// significant bit is position 32. If there is no bit set, return 0. Examples:
// - findMSBSet(0) => 0
// - findMSBSet(1) => 1
// - findMSBSet(255) => 8
MatrixUtil.findMSBSet=function(value/*int*/){return 32-Integer.numberOfLeadingZeros(value);};// Calculate BCH (Bose-Chaudhuri-Hocquenghem) code for "value" using polynomial "poly". The BCH
// code is used for encoding type information and version information.
// Example: Calculation of version information of 7.
// f(x) is created from 7.
//   - 7 = 000111 in 6 bits
//   - f(x) = x^2 + x^1 + x^0
// g(x) is given by the standard (p. 67)
//   - g(x) = x^12 + x^11 + x^10 + x^9 + x^8 + x^5 + x^2 + 1
// Multiply f(x) by x^(18 - 6)
//   - f'(x) = f(x) * x^(18 - 6)
//   - f'(x) = x^14 + x^13 + x^12
// Calculate the remainder of f'(x) / g(x)
//         x^2
//         __________________________________________________
//   g(x) )x^14 + x^13 + x^12
//         x^14 + x^13 + x^12 + x^11 + x^10 + x^7 + x^4 + x^2
//         --------------------------------------------------
//                              x^11 + x^10 + x^7 + x^4 + x^2
//
// The remainder is x^11 + x^10 + x^7 + x^4 + x^2
// Encode it in binary: 110010010100
// The return value is 0xc94 (1100 1001 0100)
//
// Since all coefficients in the polynomials are 1 or 0, we can do the calculation by bit
// operations. We don't care if coefficients are positive or negative.
MatrixUtil.calculateBCHCode=function(value/*int*/,poly/*int*/){if(poly===0){throw new IllegalArgumentException('0 polynomial');}// If poly is "1 1111 0010 0101" (version info poly), msbSetInPoly is 13. We'll subtract 1
// from 13 to make it 12.
var msbSetInPoly=MatrixUtil.findMSBSet(poly);value<<=msbSetInPoly-1;// Do the division business using exclusive-or operations.
while(MatrixUtil.findMSBSet(value)>=msbSetInPoly){value^=poly<<MatrixUtil.findMSBSet(value)-msbSetInPoly;}// Now the "value" is the remainder (i.e. the BCH code)
return value;};// Make bit vector of type information. On success, store the result in "bits" and return true.
// Encode error correction level and mask pattern. See 8.9 of
// JISX0510:2004 (p.45) for details.
MatrixUtil.makeTypeInfoBits=function(ecLevel,maskPattern/*int*/,bits){if(!QRCode.isValidMaskPattern(maskPattern)){throw new WriterException('Invalid mask pattern');}var typeInfo=ecLevel.getBits()<<3|maskPattern;bits.appendBits(typeInfo,5);var bchCode=MatrixUtil.calculateBCHCode(typeInfo,MatrixUtil.TYPE_INFO_POLY);bits.appendBits(bchCode,10);var maskBits=new BitArray();maskBits.appendBits(MatrixUtil.TYPE_INFO_MASK_PATTERN,15);bits.xor(maskBits);if(bits.getSize()!==15){// Just in case.
throw new WriterException('should not happen but we got: '+bits.getSize());}};// Make bit vector of version information. On success, store the result in "bits" and return true.
// See 8.10 of JISX0510:2004 (p.45) for details.
MatrixUtil.makeVersionInfoBits=function(version,bits){bits.appendBits(version.getVersionNumber(),6);var bchCode=MatrixUtil.calculateBCHCode(version.getVersionNumber(),MatrixUtil.VERSION_INFO_POLY);bits.appendBits(bchCode,12);if(bits.getSize()!==18){// Just in case.
throw new WriterException('should not happen but we got: '+bits.getSize());}};// Check if "value" is empty.
MatrixUtil.isEmpty=function(value/*int*/){return value===255;// -1
};MatrixUtil.embedTimingPatterns=function(matrix){// -8 is for skipping position detection patterns (7: size), and two horizontal/vertical
// separation patterns (1: size). Thus, 8 = 7 + 1.
for(var i=8;i<matrix.getWidth()-8;++i){var bit=(i+1)%2;// Horizontal line.
if(MatrixUtil.isEmpty(matrix.get(i,6))){matrix.setNumber(i,6,bit);}// Vertical line.
if(MatrixUtil.isEmpty(matrix.get(6,i))){matrix.setNumber(6,i,bit);}}};// Embed the lonely dark dot at left bottom corner. JISX0510:2004 (p.46)
MatrixUtil.embedDarkDotAtLeftBottomCorner=function(matrix){if(matrix.get(8,matrix.getHeight()-8)===0){throw new WriterException();}matrix.setNumber(8,matrix.getHeight()-8,1);};MatrixUtil.embedHorizontalSeparationPattern=function(xStart/*int*/,yStart/*int*/,matrix){for(var x=0;x<8;++x){if(!MatrixUtil.isEmpty(matrix.get(xStart+x,yStart))){throw new WriterException();}matrix.setNumber(xStart+x,yStart,0);}};MatrixUtil.embedVerticalSeparationPattern=function(xStart/*int*/,yStart/*int*/,matrix){for(var y=0;y<7;++y){if(!MatrixUtil.isEmpty(matrix.get(xStart,yStart+y))){throw new WriterException();}matrix.setNumber(xStart,yStart+y,0);}};MatrixUtil.embedPositionAdjustmentPattern=function(xStart/*int*/,yStart/*int*/,matrix){for(var y=0;y<5;++y){var patternY=MatrixUtil.POSITION_ADJUSTMENT_PATTERN[y];for(var x=0;x<5;++x){matrix.setNumber(xStart+x,yStart+y,patternY[x]);}}};MatrixUtil.embedPositionDetectionPattern=function(xStart/*int*/,yStart/*int*/,matrix){for(var y=0;y<7;++y){var patternY=MatrixUtil.POSITION_DETECTION_PATTERN[y];for(var x=0;x<7;++x){matrix.setNumber(xStart+x,yStart+y,patternY[x]);}}};// Embed position detection patterns and surrounding vertical/horizontal separators.
MatrixUtil.embedPositionDetectionPatternsAndSeparators=function(matrix){// Embed three big squares at corners.
var pdpWidth=MatrixUtil.POSITION_DETECTION_PATTERN[0].length;// Left top corner.
MatrixUtil.embedPositionDetectionPattern(0,0,matrix);// Right top corner.
MatrixUtil.embedPositionDetectionPattern(matrix.getWidth()-pdpWidth,0,matrix);// Left bottom corner.
MatrixUtil.embedPositionDetectionPattern(0,matrix.getWidth()-pdpWidth,matrix);// Embed horizontal separation patterns around the squares.
var hspWidth=8;// Left top corner.
MatrixUtil.embedHorizontalSeparationPattern(0,hspWidth-1,matrix);// Right top corner.
MatrixUtil.embedHorizontalSeparationPattern(matrix.getWidth()-hspWidth,hspWidth-1,matrix);// Left bottom corner.
MatrixUtil.embedHorizontalSeparationPattern(0,matrix.getWidth()-hspWidth,matrix);// Embed vertical separation patterns around the squares.
var vspSize=7;// Left top corner.
MatrixUtil.embedVerticalSeparationPattern(vspSize,0,matrix);// Right top corner.
MatrixUtil.embedVerticalSeparationPattern(matrix.getHeight()-vspSize-1,0,matrix);// Left bottom corner.
MatrixUtil.embedVerticalSeparationPattern(vspSize,matrix.getHeight()-vspSize,matrix);};// Embed position adjustment patterns if need be.
MatrixUtil.maybeEmbedPositionAdjustmentPatterns=function(version,matrix){if(version.getVersionNumber()<2){// The patterns appear if version >= 2
return;}var index=version.getVersionNumber()-1;var coordinates=MatrixUtil.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE[index];for(var i=0,length_1=coordinates.length;i!==length_1;i++){var y=coordinates[i];if(y>=0){for(var j=0;j!==length_1;j++){var x=coordinates[j];if(x>=0&&MatrixUtil.isEmpty(matrix.get(x,y))){// If the cell is unset, we embed the position adjustment pattern here.
// -2 is necessary since the x/y coordinates point to the center of the pattern, not the
// left top corner.
MatrixUtil.embedPositionAdjustmentPattern(x-2,y-2,matrix);}}}}};MatrixUtil.POSITION_DETECTION_PATTERN=Array.from([Int32Array.from([1,1,1,1,1,1,1]),Int32Array.from([1,0,0,0,0,0,1]),Int32Array.from([1,0,1,1,1,0,1]),Int32Array.from([1,0,1,1,1,0,1]),Int32Array.from([1,0,1,1,1,0,1]),Int32Array.from([1,0,0,0,0,0,1]),Int32Array.from([1,1,1,1,1,1,1])]);MatrixUtil.POSITION_ADJUSTMENT_PATTERN=Array.from([Int32Array.from([1,1,1,1,1]),Int32Array.from([1,0,0,0,1]),Int32Array.from([1,0,1,0,1]),Int32Array.from([1,0,0,0,1]),Int32Array.from([1,1,1,1,1])]);// From Appendix E. Table 1, JIS0510X:2004 (71: p). The table was double-checked by komatsu.
MatrixUtil.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE=Array.from([Int32Array.from([-1,-1,-1,-1,-1,-1,-1]),Int32Array.from([6,18,-1,-1,-1,-1,-1]),Int32Array.from([6,22,-1,-1,-1,-1,-1]),Int32Array.from([6,26,-1,-1,-1,-1,-1]),Int32Array.from([6,30,-1,-1,-1,-1,-1]),Int32Array.from([6,34,-1,-1,-1,-1,-1]),Int32Array.from([6,22,38,-1,-1,-1,-1]),Int32Array.from([6,24,42,-1,-1,-1,-1]),Int32Array.from([6,26,46,-1,-1,-1,-1]),Int32Array.from([6,28,50,-1,-1,-1,-1]),Int32Array.from([6,30,54,-1,-1,-1,-1]),Int32Array.from([6,32,58,-1,-1,-1,-1]),Int32Array.from([6,34,62,-1,-1,-1,-1]),Int32Array.from([6,26,46,66,-1,-1,-1]),Int32Array.from([6,26,48,70,-1,-1,-1]),Int32Array.from([6,26,50,74,-1,-1,-1]),Int32Array.from([6,30,54,78,-1,-1,-1]),Int32Array.from([6,30,56,82,-1,-1,-1]),Int32Array.from([6,30,58,86,-1,-1,-1]),Int32Array.from([6,34,62,90,-1,-1,-1]),Int32Array.from([6,28,50,72,94,-1,-1]),Int32Array.from([6,26,50,74,98,-1,-1]),Int32Array.from([6,30,54,78,102,-1,-1]),Int32Array.from([6,28,54,80,106,-1,-1]),Int32Array.from([6,32,58,84,110,-1,-1]),Int32Array.from([6,30,58,86,114,-1,-1]),Int32Array.from([6,34,62,90,118,-1,-1]),Int32Array.from([6,26,50,74,98,122,-1]),Int32Array.from([6,30,54,78,102,126,-1]),Int32Array.from([6,26,52,78,104,130,-1]),Int32Array.from([6,30,56,82,108,134,-1]),Int32Array.from([6,34,60,86,112,138,-1]),Int32Array.from([6,30,58,86,114,142,-1]),Int32Array.from([6,34,62,90,118,146,-1]),Int32Array.from([6,30,54,78,102,126,150]),Int32Array.from([6,24,50,76,102,128,154]),Int32Array.from([6,28,54,80,106,132,158]),Int32Array.from([6,32,58,84,110,136,162]),Int32Array.from([6,26,54,82,110,138,166]),Int32Array.from([6,30,58,86,114,142,170])]);// Type info cells at the left top corner.
MatrixUtil.TYPE_INFO_COORDINATES=Array.from([Int32Array.from([8,0]),Int32Array.from([8,1]),Int32Array.from([8,2]),Int32Array.from([8,3]),Int32Array.from([8,4]),Int32Array.from([8,5]),Int32Array.from([8,7]),Int32Array.from([8,8]),Int32Array.from([7,8]),Int32Array.from([5,8]),Int32Array.from([4,8]),Int32Array.from([3,8]),Int32Array.from([2,8]),Int32Array.from([1,8]),Int32Array.from([0,8])]);// From Appendix D in JISX0510:2004 (p. 67)
MatrixUtil.VERSION_INFO_POLY=0x1f25;// 1 1111 0010 0101
// From Appendix C in JISX0510:2004 (p.65).
MatrixUtil.TYPE_INFO_POLY=0x537;MatrixUtil.TYPE_INFO_MASK_PATTERN=0x5412;return MatrixUtil;}();/*
   * Copyright 2008 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /*namespace com.google.zxing.qrcode.encoder {*/var BlockPair=/** @class */function(){function BlockPair(dataBytes,errorCorrectionBytes){this.dataBytes=dataBytes;this.errorCorrectionBytes=errorCorrectionBytes;}BlockPair.prototype.getDataBytes=function(){return this.dataBytes;};BlockPair.prototype.getErrorCorrectionBytes=function(){return this.errorCorrectionBytes;};return BlockPair;}();/*
   * Copyright 2008 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __values$C=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};/*import java.io.UnsupportedEncodingException;*/ /*import java.util.ArrayList;*/ /*import java.util.Collection;*/ /*import java.util.Map;*/ /**
   * @author satorux@google.com (Satoru Takabayashi) - creator
   * @author dswitkin@google.com (Daniel Switkin) - ported from C++
   */var Encoder=/** @class */function(){// TYPESCRIPTPORT: changed to UTF8, the default for js
function Encoder(){}// The mask penalty calculation is complicated.  See Table 21 of JISX0510:2004 (p.45) for details.
// Basically it applies four rules and summate all penalties.
Encoder.calculateMaskPenalty=function(matrix){return MaskUtil.applyMaskPenaltyRule1(matrix)+MaskUtil.applyMaskPenaltyRule2(matrix)+MaskUtil.applyMaskPenaltyRule3(matrix)+MaskUtil.applyMaskPenaltyRule4(matrix);};/**
       * @param content text to encode
       * @param ecLevel error correction level to use
       * @return {@link QRCode} representing the encoded QR code
       * @throws WriterException if encoding can't succeed, because of for example invalid content
       *   or configuration
       */ // public static encode(content: string, ecLevel: ErrorCorrectionLevel): QRCode /*throws WriterException*/ {
//   return encode(content, ecLevel, null)
// }
Encoder.encode=function(content,ecLevel,hints){if(hints===void 0){hints=null;}// Determine what character encoding has been specified by the caller, if any
var encoding=Encoder.DEFAULT_BYTE_MODE_ENCODING;var hasEncodingHint=hints!==null&&undefined!==hints.get(EncodeHintType$1.CHARACTER_SET);if(hasEncodingHint){encoding=hints.get(EncodeHintType$1.CHARACTER_SET).toString();}// Pick an encoding mode appropriate for the content. Note that this will not attempt to use
// multiple modes / segments even if that were more efficient. Twould be nice.
var mode=this.chooseMode(content,encoding);// This will store the header information, like mode and
// length, as well as "header" segments like an ECI segment.
var headerBits=new BitArray();// Append ECI segment if applicable
if(mode===Mode$1.BYTE&&(hasEncodingHint||Encoder.DEFAULT_BYTE_MODE_ENCODING!==encoding)){var eci=CharacterSetECI.getCharacterSetECIByName(encoding);if(eci!==undefined){this.appendECI(eci,headerBits);}}// (With ECI in place,) Write the mode marker
this.appendModeInfo(mode,headerBits);// Collect data within the main segment, separately, to count its size if needed. Don't add it to
// main payload yet.
var dataBits=new BitArray();this.appendBytes(content,mode,dataBits,encoding);var version;if(hints!==null&&undefined!==hints.get(EncodeHintType$1.QR_VERSION)){var versionNumber=Number.parseInt(hints.get(EncodeHintType$1.QR_VERSION).toString(),10);version=Version$1.getVersionForNumber(versionNumber);var bitsNeeded=this.calculateBitsNeeded(mode,headerBits,dataBits,version);if(!this.willFit(bitsNeeded,version,ecLevel)){throw new WriterException('Data too big for requested version');}}else{version=this.recommendVersion(ecLevel,mode,headerBits,dataBits);}var headerAndDataBits=new BitArray();headerAndDataBits.appendBitArray(headerBits);// Find "length" of main segment and write it
var numLetters=mode===Mode$1.BYTE?dataBits.getSizeInBytes():content.length;this.appendLengthInfo(numLetters,version,mode,headerAndDataBits);// Put data together into the overall payload
headerAndDataBits.appendBitArray(dataBits);var ecBlocks=version.getECBlocksForLevel(ecLevel);var numDataBytes=version.getTotalCodewords()-ecBlocks.getTotalECCodewords();// Terminate the bits properly.
this.terminateBits(numDataBytes,headerAndDataBits);// Interleave data bits with error correction code.
var finalBits=this.interleaveWithECBytes(headerAndDataBits,version.getTotalCodewords(),numDataBytes,ecBlocks.getNumBlocks());var qrCode=new QRCode();qrCode.setECLevel(ecLevel);qrCode.setMode(mode);qrCode.setVersion(version);//  Choose the mask pattern and set to "qrCode".
var dimension=version.getDimensionForVersion();var matrix=new ByteMatrix(dimension,dimension);var maskPattern=this.chooseMaskPattern(finalBits,ecLevel,version,matrix);qrCode.setMaskPattern(maskPattern);// Build the matrix and set it to "qrCode".
MatrixUtil.buildMatrix(finalBits,ecLevel,version,maskPattern,matrix);qrCode.setMatrix(matrix);return qrCode;};/**
       * Decides the smallest version of QR code that will contain all of the provided data.
       *
       * @throws WriterException if the data cannot fit in any version
       */Encoder.recommendVersion=function(ecLevel,mode,headerBits,dataBits){// Hard part: need to know version to know how many bits length takes. But need to know how many
// bits it takes to know version. First we take a guess at version by assuming version will be
// the minimum, 1:
var provisionalBitsNeeded=this.calculateBitsNeeded(mode,headerBits,dataBits,Version$1.getVersionForNumber(1));var provisionalVersion=this.chooseVersion(provisionalBitsNeeded,ecLevel);// Use that guess to calculate the right version. I am still not sure this works in 100% of cases.
var bitsNeeded=this.calculateBitsNeeded(mode,headerBits,dataBits,provisionalVersion);return this.chooseVersion(bitsNeeded,ecLevel);};Encoder.calculateBitsNeeded=function(mode,headerBits,dataBits,version){return headerBits.getSize()+mode.getCharacterCountBits(version)+dataBits.getSize();};/**
       * @return the code point of the table used in alphanumeric mode or
       *  -1 if there is no corresponding code in the table.
       */Encoder.getAlphanumericCode=function(code/*int*/){if(code<Encoder.ALPHANUMERIC_TABLE.length){return Encoder.ALPHANUMERIC_TABLE[code];}return-1;};// public static chooseMode(content: string): Mode {
//   return chooseMode(content, null);
// }
/**
       * Choose the best mode by examining the content. Note that 'encoding' is used as a hint;
       * if it is Shift_JIS, and the input is only double-byte Kanji, then we return {@link Mode#KANJI}.
       */Encoder.chooseMode=function(content,encoding){if(encoding===void 0){encoding=null;}if(CharacterSetECI.SJIS.getName()===encoding&&this.isOnlyDoubleByteKanji(content)){// Choose Kanji mode if all input are double-byte characters
return Mode$1.KANJI;}var hasNumeric=false;var hasAlphanumeric=false;for(var i=0,length_1=content.length;i<length_1;++i){var c=content.charAt(i);if(Encoder.isDigit(c)){hasNumeric=true;}else if(this.getAlphanumericCode(c.charCodeAt(0))!==-1){hasAlphanumeric=true;}else{return Mode$1.BYTE;}}if(hasAlphanumeric){return Mode$1.ALPHANUMERIC;}if(hasNumeric){return Mode$1.NUMERIC;}return Mode$1.BYTE;};Encoder.isOnlyDoubleByteKanji=function(content){var bytes;try{bytes=StringEncoding.encode(content,CharacterSetECI.SJIS);// content.getBytes("Shift_JIS"))
}catch(ignored/*: UnsupportedEncodingException*/){return false;}var length=bytes.length;if(length%2!==0){return false;}for(var i=0;i<length;i+=2){var byte1=bytes[i]&0xFF;if((byte1<0x81||byte1>0x9F)&&(byte1<0xE0||byte1>0xEB)){return false;}}return true;};Encoder.chooseMaskPattern=function(bits,ecLevel,version,matrix){var minPenalty=Number.MAX_SAFE_INTEGER;// Lower penalty is better.
var bestMaskPattern=-1;// We try all mask patterns to choose the best one.
for(var maskPattern=0;maskPattern<QRCode.NUM_MASK_PATTERNS;maskPattern++){MatrixUtil.buildMatrix(bits,ecLevel,version,maskPattern,matrix);var penalty=this.calculateMaskPenalty(matrix);if(penalty<minPenalty){minPenalty=penalty;bestMaskPattern=maskPattern;}}return bestMaskPattern;};Encoder.chooseVersion=function(numInputBits/*int*/,ecLevel){for(var versionNum=1;versionNum<=40;versionNum++){var version=Version$1.getVersionForNumber(versionNum);if(Encoder.willFit(numInputBits,version,ecLevel)){return version;}}throw new WriterException('Data too big');};/**
       * @return true if the number of input bits will fit in a code with the specified version and
       * error correction level.
       */Encoder.willFit=function(numInputBits/*int*/,version,ecLevel){// In the following comments, we use numbers of Version 7-H.
// numBytes = 196
var numBytes=version.getTotalCodewords();// getNumECBytes = 130
var ecBlocks=version.getECBlocksForLevel(ecLevel);var numEcBytes=ecBlocks.getTotalECCodewords();// getNumDataBytes = 196 - 130 = 66
var numDataBytes=numBytes-numEcBytes;var totalInputBytes=(numInputBits+7)/8;return numDataBytes>=totalInputBytes;};/**
       * Terminate bits as described in 8.4.8 and 8.4.9 of JISX0510:2004 (p.24).
       */Encoder.terminateBits=function(numDataBytes/*int*/,bits){var capacity=numDataBytes*8;if(bits.getSize()>capacity){throw new WriterException('data bits cannot fit in the QR Code'+bits.getSize()+' > '+capacity);}for(var i=0;i<4&&bits.getSize()<capacity;++i){bits.appendBit(false);}// Append termination bits. See 8.4.8 of JISX0510:2004 (p.24) for details.
// If the last byte isn't 8-bit aligned, we'll add padding bits.
var numBitsInLastByte=bits.getSize()&0x07;if(numBitsInLastByte>0){for(var i=numBitsInLastByte;i<8;i++){bits.appendBit(false);}}// If we have more space, we'll fill the space with padding patterns defined in 8.4.9 (p.24).
var numPaddingBytes=numDataBytes-bits.getSizeInBytes();for(var i=0;i<numPaddingBytes;++i){bits.appendBits((i&0x01)===0?0xEC:0x11,8);}if(bits.getSize()!==capacity){throw new WriterException('Bits size does not equal capacity');}};/**
       * Get number of data bytes and number of error correction bytes for block id "blockID". Store
       * the result in "numDataBytesInBlock", and "numECBytesInBlock". See table 12 in 8.5.1 of
       * JISX0510:2004 (p.30)
       */Encoder.getNumDataBytesAndNumECBytesForBlockID=function(numTotalBytes/*int*/,numDataBytes/*int*/,numRSBlocks/*int*/,blockID/*int*/,numDataBytesInBlock,numECBytesInBlock){if(blockID>=numRSBlocks){throw new WriterException('Block ID too large');}// numRsBlocksInGroup2 = 196 % 5 = 1
var numRsBlocksInGroup2=numTotalBytes%numRSBlocks;// numRsBlocksInGroup1 = 5 - 1 = 4
var numRsBlocksInGroup1=numRSBlocks-numRsBlocksInGroup2;// numTotalBytesInGroup1 = 196 / 5 = 39
var numTotalBytesInGroup1=Math.floor(numTotalBytes/numRSBlocks);// numTotalBytesInGroup2 = 39 + 1 = 40
var numTotalBytesInGroup2=numTotalBytesInGroup1+1;// numDataBytesInGroup1 = 66 / 5 = 13
var numDataBytesInGroup1=Math.floor(numDataBytes/numRSBlocks);// numDataBytesInGroup2 = 13 + 1 = 14
var numDataBytesInGroup2=numDataBytesInGroup1+1;// numEcBytesInGroup1 = 39 - 13 = 26
var numEcBytesInGroup1=numTotalBytesInGroup1-numDataBytesInGroup1;// numEcBytesInGroup2 = 40 - 14 = 26
var numEcBytesInGroup2=numTotalBytesInGroup2-numDataBytesInGroup2;// Sanity checks.
// 26 = 26
if(numEcBytesInGroup1!==numEcBytesInGroup2){throw new WriterException('EC bytes mismatch');}// 5 = 4 + 1.
if(numRSBlocks!==numRsBlocksInGroup1+numRsBlocksInGroup2){throw new WriterException('RS blocks mismatch');}// 196 = (13 + 26) * 4 + (14 + 26) * 1
if(numTotalBytes!==(numDataBytesInGroup1+numEcBytesInGroup1)*numRsBlocksInGroup1+(numDataBytesInGroup2+numEcBytesInGroup2)*numRsBlocksInGroup2){throw new WriterException('Total bytes mismatch');}if(blockID<numRsBlocksInGroup1){numDataBytesInBlock[0]=numDataBytesInGroup1;numECBytesInBlock[0]=numEcBytesInGroup1;}else{numDataBytesInBlock[0]=numDataBytesInGroup2;numECBytesInBlock[0]=numEcBytesInGroup2;}};/**
       * Interleave "bits" with corresponding error correction bytes. On success, store the result in
       * "result". The interleave rule is complicated. See 8.6 of JISX0510:2004 (p.37) for details.
       */Encoder.interleaveWithECBytes=function(bits,numTotalBytes/*int*/,numDataBytes/*int*/,numRSBlocks/*int*/){var e_1,_a,e_2,_b;// "bits" must have "getNumDataBytes" bytes of data.
if(bits.getSizeInBytes()!==numDataBytes){throw new WriterException('Number of bits and data bytes does not match');}// Step 1.  Divide data bytes into blocks and generate error correction bytes for them. We'll
// store the divided data bytes blocks and error correction bytes blocks into "blocks".
var dataBytesOffset=0;var maxNumDataBytes=0;var maxNumEcBytes=0;// Since, we know the number of reedsolmon blocks, we can initialize the vector with the number.
var blocks=new Array();// new Array<BlockPair>(numRSBlocks)
for(var i=0;i<numRSBlocks;++i){var numDataBytesInBlock=new Int32Array(1);var numEcBytesInBlock=new Int32Array(1);Encoder.getNumDataBytesAndNumECBytesForBlockID(numTotalBytes,numDataBytes,numRSBlocks,i,numDataBytesInBlock,numEcBytesInBlock);var size=numDataBytesInBlock[0];var dataBytes=new Uint8Array(size);bits.toBytes(8*dataBytesOffset,dataBytes,0,size);var ecBytes=Encoder.generateECBytes(dataBytes,numEcBytesInBlock[0]);blocks.push(new BlockPair(dataBytes,ecBytes));maxNumDataBytes=Math.max(maxNumDataBytes,size);maxNumEcBytes=Math.max(maxNumEcBytes,ecBytes.length);dataBytesOffset+=numDataBytesInBlock[0];}if(numDataBytes!==dataBytesOffset){throw new WriterException('Data bytes does not match offset');}var result=new BitArray();// First, place data blocks.
for(var i=0;i<maxNumDataBytes;++i){try{for(var blocks_1=(e_1=void 0,__values$C(blocks)),blocks_1_1=blocks_1.next();!blocks_1_1.done;blocks_1_1=blocks_1.next()){var block=blocks_1_1.value;var dataBytes=block.getDataBytes();if(i<dataBytes.length){result.appendBits(dataBytes[i],8);}}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(blocks_1_1&&!blocks_1_1.done&&(_a=blocks_1.return))_a.call(blocks_1);}finally{if(e_1)throw e_1.error;}}}// Then, place error correction blocks.
for(var i=0;i<maxNumEcBytes;++i){try{for(var blocks_2=(e_2=void 0,__values$C(blocks)),blocks_2_1=blocks_2.next();!blocks_2_1.done;blocks_2_1=blocks_2.next()){var block=blocks_2_1.value;var ecBytes=block.getErrorCorrectionBytes();if(i<ecBytes.length){result.appendBits(ecBytes[i],8);}}}catch(e_2_1){e_2={error:e_2_1};}finally{try{if(blocks_2_1&&!blocks_2_1.done&&(_b=blocks_2.return))_b.call(blocks_2);}finally{if(e_2)throw e_2.error;}}}if(numTotalBytes!==result.getSizeInBytes()){// Should be same.
throw new WriterException('Interleaving error: '+numTotalBytes+' and '+result.getSizeInBytes()+' differ.');}return result;};Encoder.generateECBytes=function(dataBytes,numEcBytesInBlock/*int*/){var numDataBytes=dataBytes.length;var toEncode=new Int32Array(numDataBytes+numEcBytesInBlock);// int[numDataBytes + numEcBytesInBlock]
for(var i=0;i<numDataBytes;i++){toEncode[i]=dataBytes[i]&0xFF;}new ReedSolomonEncoder(GenericGF.QR_CODE_FIELD_256).encode(toEncode,numEcBytesInBlock);var ecBytes=new Uint8Array(numEcBytesInBlock);for(var i=0;i<numEcBytesInBlock;i++){ecBytes[i]=/*(byte) */toEncode[numDataBytes+i];}return ecBytes;};/**
       * Append mode info. On success, store the result in "bits".
       */Encoder.appendModeInfo=function(mode,bits){bits.appendBits(mode.getBits(),4);};/**
       * Append length info. On success, store the result in "bits".
       */Encoder.appendLengthInfo=function(numLetters/*int*/,version,mode,bits){var numBits=mode.getCharacterCountBits(version);if(numLetters>=1<<numBits){throw new WriterException(numLetters+' is bigger than '+((1<<numBits)-1));}bits.appendBits(numLetters,numBits);};/**
       * Append "bytes" in "mode" mode (encoding) into "bits". On success, store the result in "bits".
       */Encoder.appendBytes=function(content,mode,bits,encoding){switch(mode){case Mode$1.NUMERIC:Encoder.appendNumericBytes(content,bits);break;case Mode$1.ALPHANUMERIC:Encoder.appendAlphanumericBytes(content,bits);break;case Mode$1.BYTE:Encoder.append8BitBytes(content,bits,encoding);break;case Mode$1.KANJI:Encoder.appendKanjiBytes(content,bits);break;default:throw new WriterException('Invalid mode: '+mode);}};Encoder.getDigit=function(singleCharacter){return singleCharacter.charCodeAt(0)-48;};Encoder.isDigit=function(singleCharacter){var cn=Encoder.getDigit(singleCharacter);return cn>=0&&cn<=9;};Encoder.appendNumericBytes=function(content,bits){var length=content.length;var i=0;while(i<length){var num1=Encoder.getDigit(content.charAt(i));if(i+2<length){// Encode three numeric letters in ten bits.
var num2=Encoder.getDigit(content.charAt(i+1));var num3=Encoder.getDigit(content.charAt(i+2));bits.appendBits(num1*100+num2*10+num3,10);i+=3;}else if(i+1<length){// Encode two numeric letters in seven bits.
var num2=Encoder.getDigit(content.charAt(i+1));bits.appendBits(num1*10+num2,7);i+=2;}else{// Encode one numeric letter in four bits.
bits.appendBits(num1,4);i++;}}};Encoder.appendAlphanumericBytes=function(content,bits){var length=content.length;var i=0;while(i<length){var code1=Encoder.getAlphanumericCode(content.charCodeAt(i));if(code1===-1){throw new WriterException();}if(i+1<length){var code2=Encoder.getAlphanumericCode(content.charCodeAt(i+1));if(code2===-1){throw new WriterException();}// Encode two alphanumeric letters in 11 bits.
bits.appendBits(code1*45+code2,11);i+=2;}else{// Encode one alphanumeric letter in six bits.
bits.appendBits(code1,6);i++;}}};Encoder.append8BitBytes=function(content,bits,encoding){var bytes;try{bytes=StringEncoding.encode(content,encoding);}catch(uee/*: UnsupportedEncodingException*/){throw new WriterException(uee);}for(var i=0,length_2=bytes.length;i!==length_2;i++){var b=bytes[i];bits.appendBits(b,8);}};/**
       * @throws WriterException
       */Encoder.appendKanjiBytes=function(content,bits){var bytes;try{bytes=StringEncoding.encode(content,CharacterSetECI.SJIS);}catch(uee/*: UnsupportedEncodingException*/){throw new WriterException(uee);}var length=bytes.length;for(var i=0;i<length;i+=2){var byte1=bytes[i]&0xFF;var byte2=bytes[i+1]&0xFF;var code=byte1<<8&0xFFFFFFFF|byte2;var subtracted=-1;if(code>=0x8140&&code<=0x9ffc){subtracted=code-0x8140;}else if(code>=0xe040&&code<=0xebbf){subtracted=code-0xc140;}if(subtracted===-1){throw new WriterException('Invalid byte sequence');}var encoded=(subtracted>>8)*0xc0+(subtracted&0xff);bits.appendBits(encoded,13);}};Encoder.appendECI=function(eci,bits){bits.appendBits(Mode$1.ECI.getBits(),4);// This is correct for values up to 127, which is all we need now.
bits.appendBits(eci.getValue(),8);};// The original table is defined in the table 5 of JISX0510:2004 (p.19).
Encoder.ALPHANUMERIC_TABLE=Int32Array.from([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,36,-1,-1,-1,37,38,-1,-1,-1,-1,39,40,-1,41,42,43,0,1,2,3,4,5,6,7,8,9,44,-1,-1,-1,-1,-1,-1,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,-1,-1,-1,-1,-1]);Encoder.DEFAULT_BYTE_MODE_ENCODING=CharacterSetECI.UTF8.getName();// "ISO-8859-1"
return Encoder;}();/*
   * Copyright 2008 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /*import java.util.Map;*/ /**
   * This object renders a QR Code as a BitMatrix 2D array of greyscale values.
   *
   * @author dswitkin@google.com (Daniel Switkin)
   */var QRCodeWriter=/** @class */function(){function QRCodeWriter(){}/*@Override*/ // public encode(contents: string, format: BarcodeFormat, width: number /*int*/, height: number /*int*/): BitMatrix
//     /*throws WriterException */ {
//   return encode(contents, format, width, height, null)
// }
/*@Override*/QRCodeWriter.prototype.encode=function(contents,format,width/*int*/,height/*int*/,hints){if(contents.length===0){throw new IllegalArgumentException('Found empty contents');}if(format!==BarcodeFormat$1.QR_CODE){throw new IllegalArgumentException('Can only encode QR_CODE, but got '+format);}if(width<0||height<0){throw new IllegalArgumentException("Requested dimensions are too small: "+width+"x"+height);}var errorCorrectionLevel=ErrorCorrectionLevel.L;var quietZone=QRCodeWriter.QUIET_ZONE_SIZE;if(hints!==null){if(undefined!==hints.get(EncodeHintType$1.ERROR_CORRECTION)){errorCorrectionLevel=ErrorCorrectionLevel.fromString(hints.get(EncodeHintType$1.ERROR_CORRECTION).toString());}if(undefined!==hints.get(EncodeHintType$1.MARGIN)){quietZone=Number.parseInt(hints.get(EncodeHintType$1.MARGIN).toString(),10);}}var code=Encoder.encode(contents,errorCorrectionLevel,hints);return QRCodeWriter.renderResult(code,width,height,quietZone);};// Note that the input matrix uses 0 == white, 1 == black, while the output matrix uses
// 0 == black, 255 == white (i.e. an 8 bit greyscale bitmap).
QRCodeWriter.renderResult=function(code,width/*int*/,height/*int*/,quietZone/*int*/){var input=code.getMatrix();if(input===null){throw new IllegalStateException();}var inputWidth=input.getWidth();var inputHeight=input.getHeight();var qrWidth=inputWidth+quietZone*2;var qrHeight=inputHeight+quietZone*2;var outputWidth=Math.max(width,qrWidth);var outputHeight=Math.max(height,qrHeight);var multiple=Math.min(Math.floor(outputWidth/qrWidth),Math.floor(outputHeight/qrHeight));// Padding includes both the quiet zone and the extra white pixels to accommodate the requested
// dimensions. For example, if input is 25x25 the QR will be 33x33 including the quiet zone.
// If the requested size is 200x160, the multiple will be 4, for a QR of 132x132. These will
// handle all the padding from 100x100 (the actual QR) up to 200x160.
var leftPadding=Math.floor((outputWidth-inputWidth*multiple)/2);var topPadding=Math.floor((outputHeight-inputHeight*multiple)/2);var output=new BitMatrix(outputWidth,outputHeight);for(var inputY=0,outputY=topPadding;inputY<inputHeight;inputY++,outputY+=multiple){// Write the contents of this row of the barcode
for(var inputX=0,outputX=leftPadding;inputX<inputWidth;inputX++,outputX+=multiple){if(input.get(inputX,inputY)===1){output.setRegion(outputX,outputY,multiple,multiple);}}}return output;};QRCodeWriter.QUIET_ZONE_SIZE=4;return QRCodeWriter;}();/*
   * Copyright 2009 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __extends$$=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * This object extends LuminanceSource around an array of YUV data returned from the camera driver,
   * with the option to crop to a rectangle within the full data. This can be used to exclude
   * superfluous pixels around the perimeter and speed up decoding.
   *
   * It works for any pixel format where the Y channel is planar and appears first, including
   * YCbCr_420_SP and YCbCr_422_SP.
   *
   * @author dswitkin@google.com (Daniel Switkin)
   */var PlanarYUVLuminanceSource=/** @class */function(_super){__extends$$(PlanarYUVLuminanceSource,_super);function PlanarYUVLuminanceSource(yuvData,dataWidth/*int*/,dataHeight/*int*/,left/*int*/,top/*int*/,width/*int*/,height/*int*/,reverseHorizontal){var _this=_super.call(this,width,height)||this;_this.yuvData=yuvData;_this.dataWidth=dataWidth;_this.dataHeight=dataHeight;_this.left=left;_this.top=top;if(left+width>dataWidth||top+height>dataHeight){throw new IllegalArgumentException('Crop rectangle does not fit within image data.');}if(reverseHorizontal){_this.reverseHorizontal(width,height);}return _this;}/*@Override*/PlanarYUVLuminanceSource.prototype.getRow=function(y/*int*/,row){if(y<0||y>=this.getHeight()){throw new IllegalArgumentException('Requested row is outside the image: '+y);}var width=this.getWidth();if(row===null||row===undefined||row.length<width){row=new Uint8ClampedArray(width);}var offset=(y+this.top)*this.dataWidth+this.left;System.arraycopy(this.yuvData,offset,row,0,width);return row;};/*@Override*/PlanarYUVLuminanceSource.prototype.getMatrix=function(){var width=this.getWidth();var height=this.getHeight();// If the caller asks for the entire underlying image, save the copy and give them the
// original data. The docs specifically warn that result.length must be ignored.
if(width===this.dataWidth&&height===this.dataHeight){return this.yuvData;}var area=width*height;var matrix=new Uint8ClampedArray(area);var inputOffset=this.top*this.dataWidth+this.left;// If the width matches the full width of the underlying data, perform a single copy.
if(width===this.dataWidth){System.arraycopy(this.yuvData,inputOffset,matrix,0,area);return matrix;}// Otherwise copy one cropped row at a time.
for(var y=0;y<height;y++){var outputOffset=y*width;System.arraycopy(this.yuvData,inputOffset,matrix,outputOffset,width);inputOffset+=this.dataWidth;}return matrix;};/*@Override*/PlanarYUVLuminanceSource.prototype.isCropSupported=function(){return true;};/*@Override*/PlanarYUVLuminanceSource.prototype.crop=function(left/*int*/,top/*int*/,width/*int*/,height/*int*/){return new PlanarYUVLuminanceSource(this.yuvData,this.dataWidth,this.dataHeight,this.left+left,this.top+top,width,height,false);};PlanarYUVLuminanceSource.prototype.renderThumbnail=function(){var width=this.getWidth()/PlanarYUVLuminanceSource.THUMBNAIL_SCALE_FACTOR;var height=this.getHeight()/PlanarYUVLuminanceSource.THUMBNAIL_SCALE_FACTOR;var pixels=new Int32Array(width*height);var yuv=this.yuvData;var inputOffset=this.top*this.dataWidth+this.left;for(var y=0;y<height;y++){var outputOffset=y*width;for(var x=0;x<width;x++){var grey=yuv[inputOffset+x*PlanarYUVLuminanceSource.THUMBNAIL_SCALE_FACTOR]&0xff;pixels[outputOffset+x]=0xFF000000|grey*0x00010101;}inputOffset+=this.dataWidth*PlanarYUVLuminanceSource.THUMBNAIL_SCALE_FACTOR;}return pixels;};/**
       * @return width of image from {@link #renderThumbnail()}
       */PlanarYUVLuminanceSource.prototype.getThumbnailWidth=function(){return this.getWidth()/PlanarYUVLuminanceSource.THUMBNAIL_SCALE_FACTOR;};/**
       * @return height of image from {@link #renderThumbnail()}
       */PlanarYUVLuminanceSource.prototype.getThumbnailHeight=function(){return this.getHeight()/PlanarYUVLuminanceSource.THUMBNAIL_SCALE_FACTOR;};PlanarYUVLuminanceSource.prototype.reverseHorizontal=function(width/*int*/,height/*int*/){var yuvData=this.yuvData;for(var y=0,rowStart=this.top*this.dataWidth+this.left;y<height;y++,rowStart+=this.dataWidth){var middle=rowStart+width/2;for(var x1=rowStart,x2=rowStart+width-1;x1<middle;x1++,x2--){var temp=yuvData[x1];yuvData[x1]=yuvData[x2];yuvData[x2]=temp;}}};PlanarYUVLuminanceSource.prototype.invert=function(){return new InvertedLuminanceSource(this);};PlanarYUVLuminanceSource.THUMBNAIL_SCALE_FACTOR=2;return PlanarYUVLuminanceSource;}(LuminanceSource);/*
   * Copyright 2009 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __extends$10=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * This class is used to help decode images from files which arrive as RGB data from
   * an ARGB pixel array. It does not support rotation.
   *
   * @author dswitkin@google.com (Daniel Switkin)
   * @author Betaminos
   */var RGBLuminanceSource=/** @class */function(_super){__extends$10(RGBLuminanceSource,_super);function RGBLuminanceSource(luminances,width/*int*/,height/*int*/,dataWidth/*int*/,dataHeight/*int*/,left/*int*/,top/*int*/){var _this=_super.call(this,width,height)||this;_this.dataWidth=dataWidth;_this.dataHeight=dataHeight;_this.left=left;_this.top=top;if(luminances.BYTES_PER_ELEMENT===4){// Int32Array
var size=width*height;var luminancesUint8Array=new Uint8ClampedArray(size);for(var offset=0;offset<size;offset++){var pixel=luminances[offset];var r=pixel>>16&0xff;// red
var g2=pixel>>7&0x1fe;// 2 * green
var b=pixel&0xff;// blue
// Calculate green-favouring average cheaply
luminancesUint8Array[offset]=/*(byte) */(r+g2+b)/4&0xFF;}_this.luminances=luminancesUint8Array;}else{_this.luminances=luminances;}if(undefined===dataWidth){_this.dataWidth=width;}if(undefined===dataHeight){_this.dataHeight=height;}if(undefined===left){_this.left=0;}if(undefined===top){_this.top=0;}if(_this.left+width>_this.dataWidth||_this.top+height>_this.dataHeight){throw new IllegalArgumentException('Crop rectangle does not fit within image data.');}return _this;}/*@Override*/RGBLuminanceSource.prototype.getRow=function(y/*int*/,row){if(y<0||y>=this.getHeight()){throw new IllegalArgumentException('Requested row is outside the image: '+y);}var width=this.getWidth();if(row===null||row===undefined||row.length<width){row=new Uint8ClampedArray(width);}var offset=(y+this.top)*this.dataWidth+this.left;System.arraycopy(this.luminances,offset,row,0,width);return row;};/*@Override*/RGBLuminanceSource.prototype.getMatrix=function(){var width=this.getWidth();var height=this.getHeight();// If the caller asks for the entire underlying image, save the copy and give them the
// original data. The docs specifically warn that result.length must be ignored.
if(width===this.dataWidth&&height===this.dataHeight){return this.luminances;}var area=width*height;var matrix=new Uint8ClampedArray(area);var inputOffset=this.top*this.dataWidth+this.left;// If the width matches the full width of the underlying data, perform a single copy.
if(width===this.dataWidth){System.arraycopy(this.luminances,inputOffset,matrix,0,area);return matrix;}// Otherwise copy one cropped row at a time.
for(var y=0;y<height;y++){var outputOffset=y*width;System.arraycopy(this.luminances,inputOffset,matrix,outputOffset,width);inputOffset+=this.dataWidth;}return matrix;};/*@Override*/RGBLuminanceSource.prototype.isCropSupported=function(){return true;};/*@Override*/RGBLuminanceSource.prototype.crop=function(left/*int*/,top/*int*/,width/*int*/,height/*int*/){return new RGBLuminanceSource(this.luminances,width,height,this.dataWidth,this.dataHeight,this.left+left,this.top+top);};RGBLuminanceSource.prototype.invert=function(){return new InvertedLuminanceSource(this);};return RGBLuminanceSource;}(LuminanceSource);var __extends$11=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();/**
   * Just to make a shortcut between Java code and TS code.
   */var Charset=/** @class */function(_super){__extends$11(Charset,_super);function Charset(){return _super!==null&&_super.apply(this,arguments)||this;}Charset.forName=function(name){return this.getCharacterSetECIByName(name);};return Charset;}(CharacterSetECI);/**
   * Just to make a shortcut between Java code and TS code.
   */var StandardCharsets=/** @class */function(){function StandardCharsets(){}StandardCharsets.ISO_8859_1=CharacterSetECI.ISO8859_1;return StandardCharsets;}();/*
  * Copyright 2013 ZXing authors
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */ /**
   * Aztec 2D code representation
   *
   * @author Rustam Abdullaev
   */var AztecCode=/** @class */function(){function AztecCode(){}/**
       * @return {@code true} if compact instead of full mode
       */AztecCode.prototype.isCompact=function(){return this.compact;};AztecCode.prototype.setCompact=function(compact){this.compact=compact;};/**
       * @return size in pixels (width and height)
       */AztecCode.prototype.getSize=function(){return this.size;};AztecCode.prototype.setSize=function(size){this.size=size;};/**
       * @return number of levels
       */AztecCode.prototype.getLayers=function(){return this.layers;};AztecCode.prototype.setLayers=function(layers){this.layers=layers;};/**
       * @return number of data codewords
       */AztecCode.prototype.getCodeWords=function(){return this.codeWords;};AztecCode.prototype.setCodeWords=function(codeWords){this.codeWords=codeWords;};/**
       * @return the symbol image
       */AztecCode.prototype.getMatrix=function(){return this.matrix;};AztecCode.prototype.setMatrix=function(matrix){this.matrix=matrix;};return AztecCode;}();var Collections=/** @class */function(){function Collections(){}/**
       * The singletonList(T) method is used to return an immutable list containing only the specified object.
       */Collections.singletonList=function(item){return[item];};/**
       * The min(Collection<? extends T>, Comparator<? super T>) method is used to return the minimum element of the given collection, according to the order induced by the specified comparator.
       */Collections.min=function(collection,comparator){return collection.sort(comparator)[0];};return Collections;}();/*
  * Copyright 2013 ZXing authors
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */var Token=/** @class */function(){function Token(previous){this.previous=previous;}Token.prototype.getPrevious=function(){return this.previous;};return Token;}();/*
  * Copyright 2013 ZXing authors
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */var __extends$12=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var SimpleToken=/** @class */function(_super){__extends$12(SimpleToken,_super);function SimpleToken(previous,value,bitCount){var _this=_super.call(this,previous)||this;_this.value=value;_this.bitCount=bitCount;return _this;}/**
       * @Override
       */SimpleToken.prototype.appendTo=function(bitArray,text){bitArray.appendBits(this.value,this.bitCount);};SimpleToken.prototype.add=function(value,bitCount){return new SimpleToken(this,value,bitCount);};SimpleToken.prototype.addBinaryShift=function(start,byteCount){// no-op can't binary shift a simple token
console.warn('addBinaryShift on SimpleToken, this simply returns a copy of this token');return new SimpleToken(this,start,byteCount);};/**
       * @Override
       */SimpleToken.prototype.toString=function(){var value=this.value&(1<<this.bitCount)-1;value|=1<<this.bitCount;return'<'+Integer.toBinaryString(value|1<<this.bitCount).substring(1)+'>';};return SimpleToken;}(Token);/*
  * Copyright 2013 ZXing authors
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */var __extends$13=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var BinaryShiftToken=/** @class */function(_super){__extends$13(BinaryShiftToken,_super);function BinaryShiftToken(previous,binaryShiftStart,binaryShiftByteCount){var _this=_super.call(this,previous,0,0)||this;_this.binaryShiftStart=binaryShiftStart;_this.binaryShiftByteCount=binaryShiftByteCount;return _this;}/**
       * @Override
       */BinaryShiftToken.prototype.appendTo=function(bitArray,text){for(var i=0;i<this.binaryShiftByteCount;i++){if(i===0||i===31&&this.binaryShiftByteCount<=62){// We need a header before the first character, and before
// character 31 when the total byte code is <= 62
bitArray.appendBits(31,5);// BINARY_SHIFT
if(this.binaryShiftByteCount>62){bitArray.appendBits(this.binaryShiftByteCount-31,16);}else if(i===0){// 1 <= binaryShiftByteCode <= 62
bitArray.appendBits(Math.min(this.binaryShiftByteCount,31),5);}else{// 32 <= binaryShiftCount <= 62 and i == 31
bitArray.appendBits(this.binaryShiftByteCount-31,5);}}bitArray.appendBits(text[this.binaryShiftStart+i],8);}};BinaryShiftToken.prototype.addBinaryShift=function(start,byteCount){// int bitCount = (byteCount * 8) + (byteCount <= 31 ? 10 : byteCount <= 62 ? 20 : 21);
return new BinaryShiftToken(this,start,byteCount);};/**
       * @Override
       */BinaryShiftToken.prototype.toString=function(){return'<'+this.binaryShiftStart+'::'+(this.binaryShiftStart+this.binaryShiftByteCount-1)+'>';};return BinaryShiftToken;}(SimpleToken);function addBinaryShift(token,start,byteCount){// int bitCount = (byteCount * 8) + (byteCount <= 31 ? 10 : byteCount <= 62 ? 20 : 21);
return new BinaryShiftToken(token,start,byteCount);}function add(token,value,bitCount){return new SimpleToken(token,value,bitCount);}var/*final*/MODE_NAMES=['UPPER','LOWER','DIGIT','MIXED','PUNCT'];var/*final*/MODE_UPPER=0;// 5 bits
var/*final*/MODE_LOWER=1;// 5 bits
var/*final*/MODE_DIGIT=2;// 4 bits
var/*final*/MODE_MIXED=3;// 5 bits
var/*final*/MODE_PUNCT=4;// 5 bits
var EMPTY_TOKEN=new SimpleToken(null,0,0);// The Latch Table shows, for each pair of Modes, the optimal method for
// getting from one mode to another.  In the worst possible case, this can
// be up to 14 bits.  In the best possible case, we are already there!
// The high half-word of each entry gives the number of bits.
// The low half-word of each entry are the actual bits necessary to change
var LATCH_TABLE=[Int32Array.from([0,(5<<16)+28,(5<<16)+30,(5<<16)+29,(10<<16)+(29<<5)+30// UPPER -> MIXED -> PUNCT
]),Int32Array.from([(9<<16)+(30<<4)+14,0,(5<<16)+30,(5<<16)+29,(10<<16)+(29<<5)+30// LOWER -> MIXED -> PUNCT
]),Int32Array.from([(4<<16)+14,(9<<16)+(14<<5)+28,0,(9<<16)+(14<<5)+29,(14<<16)+(14<<10)+(29<<5)+30// DIGIT -> UPPER -> MIXED -> PUNCT
]),Int32Array.from([(5<<16)+29,(5<<16)+28,(10<<16)+(29<<5)+30,0,(5<<16)+30// MIXED -> PUNCT
]),Int32Array.from([(5<<16)+31,(10<<16)+(31<<5)+28,(10<<16)+(31<<5)+30,(10<<16)+(31<<5)+29,0])];var __values$D=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};function static_SHIFT_TABLE(SHIFT_TABLE){var e_1,_a;try{for(var SHIFT_TABLE_1=__values$D(SHIFT_TABLE),SHIFT_TABLE_1_1=SHIFT_TABLE_1.next();!SHIFT_TABLE_1_1.done;SHIFT_TABLE_1_1=SHIFT_TABLE_1.next()){var table=SHIFT_TABLE_1_1.value/*Int32Array*/;Arrays.fill(table,-1);}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(SHIFT_TABLE_1_1&&!SHIFT_TABLE_1_1.done&&(_a=SHIFT_TABLE_1.return))_a.call(SHIFT_TABLE_1);}finally{if(e_1)throw e_1.error;}}SHIFT_TABLE[MODE_UPPER][MODE_PUNCT]=0;SHIFT_TABLE[MODE_LOWER][MODE_PUNCT]=0;SHIFT_TABLE[MODE_LOWER][MODE_UPPER]=28;SHIFT_TABLE[MODE_MIXED][MODE_PUNCT]=0;SHIFT_TABLE[MODE_DIGIT][MODE_PUNCT]=0;SHIFT_TABLE[MODE_DIGIT][MODE_UPPER]=15;return SHIFT_TABLE;}var/*final*/SHIFT_TABLE=static_SHIFT_TABLE(Arrays.createInt32Array(6,6));// mode shift codes, per table
/*
   * Copyright 2013 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __values$E=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};/**
   * State represents all information about a sequence necessary to generate the current output.
   * Note that a state is immutable.
   */var State=/** @class */function(){function State(token,mode,binaryBytes,bitCount){this.token=token;this.mode=mode;this.binaryShiftByteCount=binaryBytes;this.bitCount=bitCount;// Make sure we match the token
// int binaryShiftBitCount = (binaryShiftByteCount * 8) +
//    (binaryShiftByteCount === 0 ? 0 :
//     binaryShiftByteCount <= 31 ? 10 :
//     binaryShiftByteCount <= 62 ? 20 : 21);
// assert this.bitCount === token.getTotalBitCount() + binaryShiftBitCount;
}State.prototype.getMode=function(){return this.mode;};State.prototype.getToken=function(){return this.token;};State.prototype.getBinaryShiftByteCount=function(){return this.binaryShiftByteCount;};State.prototype.getBitCount=function(){return this.bitCount;};// Create a new state representing this state with a latch to a (not
// necessary different) mode, and then a code.
State.prototype.latchAndAppend=function(mode,value){// assert binaryShiftByteCount === 0;
var bitCount=this.bitCount;var token=this.token;if(mode!==this.mode){var latch=LATCH_TABLE[this.mode][mode];token=add(token,latch&0xffff,latch>>16);bitCount+=latch>>16;}var latchModeBitCount=mode===MODE_DIGIT?4:5;token=add(token,value,latchModeBitCount);return new State(token,mode,0,bitCount+latchModeBitCount);};// Create a new state representing this state, with a temporary shift
// to a different mode to output a single value.
State.prototype.shiftAndAppend=function(mode,value){// assert binaryShiftByteCount === 0 && this.mode !== mode;
var token=this.token;var thisModeBitCount=this.mode===MODE_DIGIT?4:5;// Shifts exist only to UPPER and PUNCT, both with tokens size 5.
token=add(token,SHIFT_TABLE[this.mode][mode],thisModeBitCount);token=add(token,value,5);return new State(token,this.mode,0,this.bitCount+thisModeBitCount+5);};// Create a new state representing this state, but an additional character
// output in Binary Shift mode.
State.prototype.addBinaryShiftChar=function(index){var token=this.token;var mode=this.mode;var bitCount=this.bitCount;if(this.mode===MODE_PUNCT||this.mode===MODE_DIGIT){// assert binaryShiftByteCount === 0;
var latch=LATCH_TABLE[mode][MODE_UPPER];token=add(token,latch&0xffff,latch>>16);bitCount+=latch>>16;mode=MODE_UPPER;}var deltaBitCount=this.binaryShiftByteCount===0||this.binaryShiftByteCount===31?18:this.binaryShiftByteCount===62?9:8;var result=new State(token,mode,this.binaryShiftByteCount+1,bitCount+deltaBitCount);if(result.binaryShiftByteCount===2047+31){// The string is as long as it's allowed to be.  We should end it.
result=result.endBinaryShift(index+1);}return result;};// Create the state identical to this one, but we are no longer in
// Binary Shift mode.
State.prototype.endBinaryShift=function(index){if(this.binaryShiftByteCount===0){return this;}var token=this.token;token=addBinaryShift(token,index-this.binaryShiftByteCount,this.binaryShiftByteCount);// assert token.getTotalBitCount() === this.bitCount;
return new State(token,this.mode,0,this.bitCount);};// Returns true if "this" state is better (equal: or) to be in than "that"
// state under all possible circumstances.
State.prototype.isBetterThanOrEqualTo=function(other){var newModeBitCount=this.bitCount+(LATCH_TABLE[this.mode][other.mode]>>16);if(this.binaryShiftByteCount<other.binaryShiftByteCount){// add additional B/S encoding cost of other, if any
newModeBitCount+=State.calculateBinaryShiftCost(other)-State.calculateBinaryShiftCost(this);}else if(this.binaryShiftByteCount>other.binaryShiftByteCount&&other.binaryShiftByteCount>0){// maximum possible additional cost (it: h)
newModeBitCount+=10;}return newModeBitCount<=other.bitCount;};State.prototype.toBitArray=function(text){var e_1,_a;// Reverse the tokens, so that they are in the order that they should
// be output
var symbols=[];for(var token=this.endBinaryShift(text.length).token;token!==null;token=token.getPrevious()){symbols.unshift(token);}var bitArray=new BitArray();try{// Add each token to the result.
for(var symbols_1=__values$E(symbols),symbols_1_1=symbols_1.next();!symbols_1_1.done;symbols_1_1=symbols_1.next()){var symbol=symbols_1_1.value;symbol.appendTo(bitArray,text);}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(symbols_1_1&&!symbols_1_1.done&&(_a=symbols_1.return))_a.call(symbols_1);}finally{if(e_1)throw e_1.error;}}// assert bitArray.getSize() === this.bitCount;
return bitArray;};/**
       * @Override
       */State.prototype.toString=function(){return StringUtils.format('%s bits=%d bytes=%d',MODE_NAMES[this.mode],this.bitCount,this.binaryShiftByteCount);};State.calculateBinaryShiftCost=function(state){if(state.binaryShiftByteCount>62){return 21;// B/S with extended length
}if(state.binaryShiftByteCount>31){return 20;// two B/S
}if(state.binaryShiftByteCount>0){return 10;// one B/S
}return 0;};State.INITIAL_STATE=new State(EMPTY_TOKEN,MODE_UPPER,0,0);return State;}();function static_CHAR_MAP(CHAR_MAP){var spaceCharCode=StringUtils.getCharCode(' ');var pointCharCode=StringUtils.getCharCode('.');var commaCharCode=StringUtils.getCharCode(',');CHAR_MAP[MODE_UPPER][spaceCharCode]=1;var zUpperCharCode=StringUtils.getCharCode('Z');var aUpperCharCode=StringUtils.getCharCode('A');for(var c=aUpperCharCode;c<=zUpperCharCode;c++){CHAR_MAP[MODE_UPPER][c]=c-aUpperCharCode+2;}CHAR_MAP[MODE_LOWER][spaceCharCode]=1;var zLowerCharCode=StringUtils.getCharCode('z');var aLowerCharCode=StringUtils.getCharCode('a');for(var c=aLowerCharCode;c<=zLowerCharCode;c++){CHAR_MAP[MODE_LOWER][c]=c-aLowerCharCode+2;}CHAR_MAP[MODE_DIGIT][spaceCharCode]=1;var nineCharCode=StringUtils.getCharCode('9');var zeroCharCode=StringUtils.getCharCode('0');for(var c=zeroCharCode;c<=nineCharCode;c++){CHAR_MAP[MODE_DIGIT][c]=c-zeroCharCode+2;}CHAR_MAP[MODE_DIGIT][commaCharCode]=12;CHAR_MAP[MODE_DIGIT][pointCharCode]=13;var mixedTable=['\x00',' ','\x01','\x02','\x03','\x04','\x05','\x06','\x07','\b','\t','\n','\x0b','\f','\r','\x1b','\x1c','\x1d','\x1e','\x1f','@','\\','^','_','`','|','~','\x7f'];for(var i=0;i<mixedTable.length;i++){CHAR_MAP[MODE_MIXED][StringUtils.getCharCode(mixedTable[i])]=i;}var punctTable=['\x00','\r','\x00','\x00','\x00','\x00','!','\'','#','$','%','&','\'','(',')','*','+',',','-','.','/',':',';','<','=','>','?','[',']','{','}'];for(var i=0;i<punctTable.length;i++){if(StringUtils.getCharCode(punctTable[i])>0){CHAR_MAP[MODE_PUNCT][StringUtils.getCharCode(punctTable[i])]=i;}}return CHAR_MAP;}var CHAR_MAP=static_CHAR_MAP(Arrays.createInt32Array(5,256));/*
   * Copyright 2013 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */var __values$F=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};/**
   * This produces nearly optimal encodings of text into the first-level of
   * encoding used by Aztec code.
   *
   * It uses a dynamic algorithm.  For each prefix of the string, it determines
   * a set of encodings that could lead to this prefix.  We repeatedly add a
   * character and generate a new set of optimal encodings until we have read
   * through the entire input.
   *
   * @author Frank Yellin
   * @author Rustam Abdullaev
   */var HighLevelEncoder=/** @class */function(){function HighLevelEncoder(text){this.text=text;}/**
       * @return text represented by this encoder encoded as a {@link BitArray}
       */HighLevelEncoder.prototype.encode=function(){var spaceCharCode=StringUtils.getCharCode(' ');var lineBreakCharCode=StringUtils.getCharCode('\n');var states=Collections.singletonList(State.INITIAL_STATE);for(var index=0;index<this.text.length;index++){var pairCode=void 0;var nextChar=index+1<this.text.length?this.text[index+1]:0;switch(this.text[index]){case StringUtils.getCharCode('\r'):pairCode=nextChar===lineBreakCharCode?2:0;break;case StringUtils.getCharCode('.'):pairCode=nextChar===spaceCharCode?3:0;break;case StringUtils.getCharCode(','):pairCode=nextChar===spaceCharCode?4:0;break;case StringUtils.getCharCode(':'):pairCode=nextChar===spaceCharCode?5:0;break;default:pairCode=0;}if(pairCode>0){// We have one of the four special PUNCT pairs.  Treat them specially.
// Get a new set of states for the two new characters.
states=HighLevelEncoder.updateStateListForPair(states,index,pairCode);index++;}else{// Get a new set of states for the new character.
states=this.updateStateListForChar(states,index);}}// We are left with a set of states.  Find the shortest one.
var minState=Collections.min(states,function(a,b){return a.getBitCount()-b.getBitCount();});// Convert it to a bit array, and return.
return minState.toBitArray(this.text);};// We update a set of states for a new character by updating each state
// for the new character, merging the results, and then removing the
// non-optimal states.
HighLevelEncoder.prototype.updateStateListForChar=function(states,index){var e_1,_a;var result=[];try{for(var states_1=__values$F(states),states_1_1=states_1.next();!states_1_1.done;states_1_1=states_1.next()){var state=states_1_1.value/*State*/;this.updateStateForChar(state,index,result);}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(states_1_1&&!states_1_1.done&&(_a=states_1.return))_a.call(states_1);}finally{if(e_1)throw e_1.error;}}return HighLevelEncoder.simplifyStates(result);};// Return a set of states that represent the possible ways of updating this
// state for the next character.  The resulting set of states are added to
// the "result" list.
HighLevelEncoder.prototype.updateStateForChar=function(state,index,result){var ch=this.text[index]&0xff;var charInCurrentTable=CHAR_MAP[state.getMode()][ch]>0;var stateNoBinary=null;for(var mode/*int*/=0;mode<=MODE_PUNCT;mode++){var charInMode=CHAR_MAP[mode][ch];if(charInMode>0){if(stateNoBinary==null){// Only create stateNoBinary the first time it's required.
stateNoBinary=state.endBinaryShift(index);}// Try generating the character by latching to its mode
if(!charInCurrentTable||mode===state.getMode()||mode===MODE_DIGIT){// If the character is in the current table, we don't want to latch to
// any other mode except possibly digit (which uses only 4 bits).  Any
// other latch would be equally successful *after* this character, and
// so wouldn't save any bits.
var latchState=stateNoBinary.latchAndAppend(mode,charInMode);result.push(latchState);}// Try generating the character by switching to its mode.
if(!charInCurrentTable&&SHIFT_TABLE[state.getMode()][mode]>=0){// It never makes sense to temporarily shift to another mode if the
// character exists in the current mode.  That can never save bits.
var shiftState=stateNoBinary.shiftAndAppend(mode,charInMode);result.push(shiftState);}}}if(state.getBinaryShiftByteCount()>0||CHAR_MAP[state.getMode()][ch]===0){// It's never worthwhile to go into binary shift mode if you're not already
// in binary shift mode, and the character exists in your current mode.
// That can never save bits over just outputting the char in the current mode.
var binaryState=state.addBinaryShiftChar(index);result.push(binaryState);}};HighLevelEncoder.updateStateListForPair=function(states,index,pairCode){var e_2,_a;var result=[];try{for(var states_2=__values$F(states),states_2_1=states_2.next();!states_2_1.done;states_2_1=states_2.next()){var state=states_2_1.value/*State*/;this.updateStateForPair(state,index,pairCode,result);}}catch(e_2_1){e_2={error:e_2_1};}finally{try{if(states_2_1&&!states_2_1.done&&(_a=states_2.return))_a.call(states_2);}finally{if(e_2)throw e_2.error;}}return this.simplifyStates(result);};HighLevelEncoder.updateStateForPair=function(state,index,pairCode,result){var stateNoBinary=state.endBinaryShift(index);// Possibility 1.  Latch to C.MODE_PUNCT, and then append this code
result.push(stateNoBinary.latchAndAppend(MODE_PUNCT,pairCode));if(state.getMode()!==MODE_PUNCT){// Possibility 2.  Shift to C.MODE_PUNCT, and then append this code.
// Every state except C.MODE_PUNCT (handled above) can shift
result.push(stateNoBinary.shiftAndAppend(MODE_PUNCT,pairCode));}if(pairCode===3||pairCode===4){// both characters are in DIGITS.  Sometimes better to just add two digits
var digitState=stateNoBinary.latchAndAppend(MODE_DIGIT,16-pairCode)// period or comma in DIGIT
.latchAndAppend(MODE_DIGIT,1);// space in DIGIT
result.push(digitState);}if(state.getBinaryShiftByteCount()>0){// It only makes sense to do the characters as binary if we're already
// in binary mode.
var binaryState=state.addBinaryShiftChar(index).addBinaryShiftChar(index+1);result.push(binaryState);}};HighLevelEncoder.simplifyStates=function(states){var e_3,_a,e_4,_b;var result=[];try{for(var states_3=__values$F(states),states_3_1=states_3.next();!states_3_1.done;states_3_1=states_3.next()){var newState=states_3_1.value;var add=true;var _loop_1=function(oldState){if(oldState.isBetterThanOrEqualTo(newState)){add=false;return"break";}if(newState.isBetterThanOrEqualTo(oldState)){// iterator.remove();
result=result.filter(function(x){return x!==oldState;});// remove old state
}};try{for(var result_1=(e_4=void 0,__values$F(result)),result_1_1=result_1.next();!result_1_1.done;result_1_1=result_1.next()){var oldState=result_1_1.value;var state_1=_loop_1(oldState);if(state_1==="break")break;}}catch(e_4_1){e_4={error:e_4_1};}finally{try{if(result_1_1&&!result_1_1.done&&(_b=result_1.return))_b.call(result_1);}finally{if(e_4)throw e_4.error;}}if(add){result.push(newState);}}}catch(e_3_1){e_3={error:e_3_1};}finally{try{if(states_3_1&&!states_3_1.done&&(_a=states_3.return))_a.call(states_3);}finally{if(e_3)throw e_3.error;}}return result;};return HighLevelEncoder;}();var __values$G=undefined&&undefined.__values||function(o){var s=typeof Symbol==="function"&&Symbol.iterator,m=s&&o[s],i=0;if(m)return m.call(o);if(o&&typeof o.length==="number")return{next:function(){if(o&&i>=o.length)o=void 0;return{value:o&&o[i++],done:!o};}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.");};/*
   * Copyright 2013 ZXing authors
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ // package com.google.zxing.aztec.encoder;
// import com.google.zxing.common.BitArray;
// import com.google.zxing.common.BitMatrix;
// import com.google.zxing.common.reedsolomon.GenericGF;
// import com.google.zxing.common.reedsolomon.ReedSolomonEncoder;
/**
   * Generates Aztec 2D barcodes.
   *
   * @author Rustam Abdullaev
   */var Encoder$1=/** @class */function(){function Encoder(){}/**
       * Encodes the given binary content as an Aztec symbol
       *
       * @param data input data string
       * @return Aztec symbol matrix with metadata
       */Encoder.encodeBytes=function(data){return Encoder.encode(data,Encoder.DEFAULT_EC_PERCENT,Encoder.DEFAULT_AZTEC_LAYERS);};/**
       * Encodes the given binary content as an Aztec symbol
       *
       * @param data input data string
       * @param minECCPercent minimal percentage of error check words (According to ISO/IEC 24778:2008,
       *                      a minimum of 23% + 3 words is recommended)
       * @param userSpecifiedLayers if non-zero, a user-specified value for the number of layers
       * @return Aztec symbol matrix with metadata
       */Encoder.encode=function(data,minECCPercent,userSpecifiedLayers){// High-level encode
var bits=new HighLevelEncoder(data).encode();// stuff bits and choose symbol size
var eccBits=Integer.truncDivision(bits.getSize()*minECCPercent,100)+11;var totalSizeBits=bits.getSize()+eccBits;var compact;var layers;var totalBitsInLayer;var wordSize;var stuffedBits;if(userSpecifiedLayers!==Encoder.DEFAULT_AZTEC_LAYERS){compact=userSpecifiedLayers<0;layers=Math.abs(userSpecifiedLayers);if(layers>(compact?Encoder.MAX_NB_BITS_COMPACT:Encoder.MAX_NB_BITS)){throw new IllegalArgumentException(StringUtils.format('Illegal value %s for layers',userSpecifiedLayers));}totalBitsInLayer=Encoder.totalBitsInLayer(layers,compact);wordSize=Encoder.WORD_SIZE[layers];var usableBitsInLayers=totalBitsInLayer-totalBitsInLayer%wordSize;stuffedBits=Encoder.stuffBits(bits,wordSize);if(stuffedBits.getSize()+eccBits>usableBitsInLayers){throw new IllegalArgumentException('Data to large for user specified layer');}if(compact&&stuffedBits.getSize()>wordSize*64){// Compact format only allows 64 data words, though C4 can hold more words than that
throw new IllegalArgumentException('Data to large for user specified layer');}}else{wordSize=0;stuffedBits=null;// We look at the possible table sizes in the order Compact1, Compact2, Compact3,
// Compact4, Normal4,...  Normal(i) for i < 4 isn't typically used since Compact(i+1)
// is the same size, but has more data.
for(var i/*int*/=0;;i++){if(i>Encoder.MAX_NB_BITS){throw new IllegalArgumentException('Data too large for an Aztec code');}compact=i<=3;layers=compact?i+1:i;totalBitsInLayer=Encoder.totalBitsInLayer(layers,compact);if(totalSizeBits>totalBitsInLayer){continue;}// [Re]stuff the bits if this is the first opportunity, or if the
// wordSize has changed
if(stuffedBits==null||wordSize!==Encoder.WORD_SIZE[layers]){wordSize=Encoder.WORD_SIZE[layers];stuffedBits=Encoder.stuffBits(bits,wordSize);}var usableBitsInLayers=totalBitsInLayer-totalBitsInLayer%wordSize;if(compact&&stuffedBits.getSize()>wordSize*64){// Compact format only allows 64 data words, though C4 can hold more words than that
continue;}if(stuffedBits.getSize()+eccBits<=usableBitsInLayers){break;}}}var messageBits=Encoder.generateCheckWords(stuffedBits,totalBitsInLayer,wordSize);// generate mode message
var messageSizeInWords=stuffedBits.getSize()/wordSize;var modeMessage=Encoder.generateModeMessage(compact,layers,messageSizeInWords);// allocate symbol
var baseMatrixSize=(compact?11:14)+layers*4;// not including alignment lines
var alignmentMap=new Int32Array(baseMatrixSize);var matrixSize;if(compact){// no alignment marks in compact mode, alignmentMap is a no-op
matrixSize=baseMatrixSize;for(var i/*int*/=0;i<alignmentMap.length;i++){alignmentMap[i]=i;}}else{matrixSize=baseMatrixSize+1+2*Integer.truncDivision(Integer.truncDivision(baseMatrixSize,2)-1,15);var origCenter=Integer.truncDivision(baseMatrixSize,2);var center=Integer.truncDivision(matrixSize,2);for(var i/*int*/=0;i<origCenter;i++){var newOffset=i+Integer.truncDivision(i,15);alignmentMap[origCenter-i-1]=center-newOffset-1;alignmentMap[origCenter+i]=center+newOffset+1;}}var matrix=new BitMatrix(matrixSize);// draw data bits
for(var i/*int*/=0,rowOffset=0;i<layers;i++){var rowSize=(layers-i)*4+(compact?9:12);for(var j/*int*/=0;j<rowSize;j++){var columnOffset=j*2;for(var k/*int*/=0;k<2;k++){if(messageBits.get(rowOffset+columnOffset+k)){matrix.set(alignmentMap[i*2+k],alignmentMap[i*2+j]);}if(messageBits.get(rowOffset+rowSize*2+columnOffset+k)){matrix.set(alignmentMap[i*2+j],alignmentMap[baseMatrixSize-1-i*2-k]);}if(messageBits.get(rowOffset+rowSize*4+columnOffset+k)){matrix.set(alignmentMap[baseMatrixSize-1-i*2-k],alignmentMap[baseMatrixSize-1-i*2-j]);}if(messageBits.get(rowOffset+rowSize*6+columnOffset+k)){matrix.set(alignmentMap[baseMatrixSize-1-i*2-j],alignmentMap[i*2+k]);}}}rowOffset+=rowSize*8;}// draw mode message
Encoder.drawModeMessage(matrix,compact,matrixSize,modeMessage);// draw alignment marks
if(compact){Encoder.drawBullsEye(matrix,Integer.truncDivision(matrixSize,2),5);}else{Encoder.drawBullsEye(matrix,Integer.truncDivision(matrixSize,2),7);for(var i/*int*/=0,j=0;i<Integer.truncDivision(baseMatrixSize,2)-1;i+=15,j+=16){for(var k/*int*/=Integer.truncDivision(matrixSize,2)&1;k<matrixSize;k+=2){matrix.set(Integer.truncDivision(matrixSize,2)-j,k);matrix.set(Integer.truncDivision(matrixSize,2)+j,k);matrix.set(k,Integer.truncDivision(matrixSize,2)-j);matrix.set(k,Integer.truncDivision(matrixSize,2)+j);}}}var aztec=new AztecCode();aztec.setCompact(compact);aztec.setSize(matrixSize);aztec.setLayers(layers);aztec.setCodeWords(messageSizeInWords);aztec.setMatrix(matrix);return aztec;};Encoder.drawBullsEye=function(matrix,center,size){for(var i/*int*/=0;i<size;i+=2){for(var j/*int*/=center-i;j<=center+i;j++){matrix.set(j,center-i);matrix.set(j,center+i);matrix.set(center-i,j);matrix.set(center+i,j);}}matrix.set(center-size,center-size);matrix.set(center-size+1,center-size);matrix.set(center-size,center-size+1);matrix.set(center+size,center-size);matrix.set(center+size,center-size+1);matrix.set(center+size,center+size-1);};Encoder.generateModeMessage=function(compact,layers,messageSizeInWords){var modeMessage=new BitArray();if(compact){modeMessage.appendBits(layers-1,2);modeMessage.appendBits(messageSizeInWords-1,6);modeMessage=Encoder.generateCheckWords(modeMessage,28,4);}else{modeMessage.appendBits(layers-1,5);modeMessage.appendBits(messageSizeInWords-1,11);modeMessage=Encoder.generateCheckWords(modeMessage,40,4);}return modeMessage;};Encoder.drawModeMessage=function(matrix,compact,matrixSize,modeMessage){var center=Integer.truncDivision(matrixSize,2);if(compact){for(var i/*int*/=0;i<7;i++){var offset=center-3+i;if(modeMessage.get(i)){matrix.set(offset,center-5);}if(modeMessage.get(i+7)){matrix.set(center+5,offset);}if(modeMessage.get(20-i)){matrix.set(offset,center+5);}if(modeMessage.get(27-i)){matrix.set(center-5,offset);}}}else{for(var i/*int*/=0;i<10;i++){var offset=center-5+i+Integer.truncDivision(i,5);if(modeMessage.get(i)){matrix.set(offset,center-7);}if(modeMessage.get(i+10)){matrix.set(center+7,offset);}if(modeMessage.get(29-i)){matrix.set(offset,center+7);}if(modeMessage.get(39-i)){matrix.set(center-7,offset);}}}};Encoder.generateCheckWords=function(bitArray,totalBits,wordSize){var e_1,_a;// bitArray is guaranteed to be a multiple of the wordSize, so no padding needed
var messageSizeInWords=bitArray.getSize()/wordSize;var rs=new ReedSolomonEncoder(Encoder.getGF(wordSize));var totalWords=Integer.truncDivision(totalBits,wordSize);var messageWords=Encoder.bitsToWords(bitArray,wordSize,totalWords);rs.encode(messageWords,totalWords-messageSizeInWords);var startPad=totalBits%wordSize;var messageBits=new BitArray();messageBits.appendBits(0,startPad);try{for(var _b=__values$G(Array.from(messageWords)),_c=_b.next();!_c.done;_c=_b.next()){var messageWord=_c.value/*: int*/;messageBits.appendBits(messageWord,wordSize);}}catch(e_1_1){e_1={error:e_1_1};}finally{try{if(_c&&!_c.done&&(_a=_b.return))_a.call(_b);}finally{if(e_1)throw e_1.error;}}return messageBits;};Encoder.bitsToWords=function(stuffedBits,wordSize,totalWords){var message=new Int32Array(totalWords);var i;var n;for(i=0,n=stuffedBits.getSize()/wordSize;i<n;i++){var value=0;for(var j/*int*/=0;j<wordSize;j++){value|=stuffedBits.get(i*wordSize+j)?1<<wordSize-j-1:0;}message[i]=value;}return message;};Encoder.getGF=function(wordSize){switch(wordSize){case 4:return GenericGF.AZTEC_PARAM;case 6:return GenericGF.AZTEC_DATA_6;case 8:return GenericGF.AZTEC_DATA_8;case 10:return GenericGF.AZTEC_DATA_10;case 12:return GenericGF.AZTEC_DATA_12;default:throw new IllegalArgumentException('Unsupported word size '+wordSize);}};Encoder.stuffBits=function(bits,wordSize){var out=new BitArray();var n=bits.getSize();var mask=(1<<wordSize)-2;for(var i/*int*/=0;i<n;i+=wordSize){var word=0;for(var j/*int*/=0;j<wordSize;j++){if(i+j>=n||bits.get(i+j)){word|=1<<wordSize-1-j;}}if((word&mask)===mask){out.appendBits(word&mask,wordSize);i--;}else if((word&mask)===0){out.appendBits(word|1,wordSize);i--;}else{out.appendBits(word,wordSize);}}return out;};Encoder.totalBitsInLayer=function(layers,compact){return((compact?88:112)+16*layers)*layers;};Encoder.DEFAULT_EC_PERCENT=33;// default minimal percentage of error check words
Encoder.DEFAULT_AZTEC_LAYERS=0;Encoder.MAX_NB_BITS=32;Encoder.MAX_NB_BITS_COMPACT=4;Encoder.WORD_SIZE=Int32Array.from([4,6,6,8,8,8,8,8,8,10,10,10,10,10,10,10,10,10,10,10,10,10,10,12,12,12,12,12,12,12,12,12,12]);return Encoder;}();/*
  * Copyright 2013 ZXing authors
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *      http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */ /**
   * Renders an Aztec code as a {@link BitMatrix}.
   */var AztecWriter=/** @class */function(){function AztecWriter(){}// @Override
AztecWriter.prototype.encode=function(contents,format,width,height){return this.encodeWithHints(contents,format,width,height,null);};// @Override
AztecWriter.prototype.encodeWithHints=function(contents,format,width,height,hints){var charset=StandardCharsets.ISO_8859_1;var eccPercent=Encoder$1.DEFAULT_EC_PERCENT;var layers=Encoder$1.DEFAULT_AZTEC_LAYERS;if(hints!=null){if(hints.has(EncodeHintType$1.CHARACTER_SET)){charset=Charset.forName(hints.get(EncodeHintType$1.CHARACTER_SET).toString());}if(hints.has(EncodeHintType$1.ERROR_CORRECTION)){eccPercent=Integer.parseInt(hints.get(EncodeHintType$1.ERROR_CORRECTION).toString());}if(hints.has(EncodeHintType$1.AZTEC_LAYERS)){layers=Integer.parseInt(hints.get(EncodeHintType$1.AZTEC_LAYERS).toString());}}return AztecWriter.encodeLayers(contents,format,width,height,charset,eccPercent,layers);};AztecWriter.encodeLayers=function(contents,format,width,height,charset,eccPercent,layers){if(format!==BarcodeFormat$1.AZTEC){throw new IllegalArgumentException('Can only encode AZTEC, but got '+format);}var aztec=Encoder$1.encode(StringUtils.getBytes(contents,charset),eccPercent,layers);return AztecWriter.renderResult(aztec,width,height);};AztecWriter.renderResult=function(code,width,height){var input=code.getMatrix();if(input==null){throw new IllegalStateException();}var inputWidth=input.getWidth();var inputHeight=input.getHeight();var outputWidth=Math.max(width,inputWidth);var outputHeight=Math.max(height,inputHeight);var multiple=Math.min(outputWidth/inputWidth,outputHeight/inputHeight);var leftPadding=(outputWidth-inputWidth*multiple)/2;var topPadding=(outputHeight-inputHeight*multiple)/2;var output=new BitMatrix(outputWidth,outputHeight);for(var inputY/*int*/=0,outputY=topPadding;inputY<inputHeight;inputY++,outputY+=multiple){// Write the contents of this row of the barcode
for(var inputX/*int*/=0,outputX=leftPadding;inputX<inputWidth;inputX++,outputX+=multiple){if(input.get(inputX,inputY)){output.setRegion(outputX,outputY,multiple,multiple);}}}return output;};return AztecWriter;}();/**/class HTMLCanvasElementLuminanceSource$1 extends LuminanceSource{constructor(canvas){super(canvas.width,canvas.height);this.canvas=canvas;this.buffer=HTMLCanvasElementLuminanceSource$1.makeBufferFromCanvasImageData(canvas);}static makeBufferFromCanvasImageData(canvas){const canvasCtx=canvas.getContext('2d');if(!canvasCtx){throw new Error('Couldn\'t get canvas context.');}const imageData=canvasCtx.getImageData(0,0,canvas.width,canvas.height);return HTMLCanvasElementLuminanceSource$1.toGrayscaleBuffer(imageData.data,canvas.width,canvas.height);}static toGrayscaleBuffer(imageBuffer,width,height){const grayscaleBuffer=new Uint8ClampedArray(width*height);for(let i=0,j=0,length=imageBuffer.length;i<length;i+=4,j++){let gray;const alpha=imageBuffer[i+3];// The color of fully-transparent pixels is irrelevant. They are often, technically, fully-transparent
// black (0 alpha, and then 0 RGB). They are often used, of course as the "white" area in a
// barcode image. Force any such pixel to be white:
if(alpha===0){gray=0xFF;}else{const pixelR=imageBuffer[i];const pixelG=imageBuffer[i+1];const pixelB=imageBuffer[i+2];// .299R + 0.587G + 0.114B (YUV/YIQ for PAL and NTSC),
// (306*R) >> 10 is approximately equal to R*0.299, and so on.
// 0x200 >> 10 is 0.5, it implements rounding.
gray=306*pixelR+601*pixelG+117*pixelB+0x200>>10;}grayscaleBuffer[j]=gray;}return grayscaleBuffer;}getRow(y/*int*/,row){if(y<0||y>=this.getHeight()){throw new IllegalArgumentException('Requested row is outside the image: '+y);}const width=this.getWidth();const start=y*width;if(row===null){row=this.buffer.slice(start,start+width);}else{if(row.length<width){row=new Uint8ClampedArray(width);}// The underlying raster of image consists of bytes with the luminance values
// TODO: can avoid set/slice?
row.set(this.buffer.slice(start,start+width));}return row;}getMatrix(){return this.buffer;}isCropSupported(){return true;}crop(left/*int*/,top/*int*/,width/*int*/,height/*int*/){super.crop(left,top,width,height);return this;}/**
       * This is always true, since the image is a gray-scale image.
       *
       * @return true
       */isRotateSupported(){return true;}rotateCounterClockwise(){this.rotate(-90);return this;}rotateCounterClockwise45(){this.rotate(-45);return this;}invert(){return new InvertedLuminanceSource(this);}getTempCanvasElement(){if(null===this.tempCanvasElement){const tempCanvasElement=this.canvas.ownerDocument.createElement('canvas');tempCanvasElement.width=this.canvas.width;tempCanvasElement.height=this.canvas.height;this.tempCanvasElement=tempCanvasElement;}return this.tempCanvasElement;}rotate(angle){const tempCanvasElement=this.getTempCanvasElement();if(!tempCanvasElement){throw new Error('Could not create a Canvas element.');}const angleRadians=angle*HTMLCanvasElementLuminanceSource$1.DEGREE_TO_RADIANS;// Calculate and set new dimensions for temp canvas
const width=this.canvas.width;const height=this.canvas.height;const newWidth=Math.ceil(Math.abs(Math.cos(angleRadians))*width+Math.abs(Math.sin(angleRadians))*height);const newHeight=Math.ceil(Math.abs(Math.sin(angleRadians))*width+Math.abs(Math.cos(angleRadians))*height);tempCanvasElement.width=newWidth;tempCanvasElement.height=newHeight;const tempContext=tempCanvasElement.getContext('2d');if(!tempContext){throw new Error('Could not create a Convas Context element.');}// Draw at center of temp canvas to prevent clipping of image data
tempContext.translate(newWidth/2,newHeight/2);tempContext.rotate(angleRadians);tempContext.drawImage(this.canvas,width/-2,height/-2);this.buffer=HTMLCanvasElementLuminanceSource$1.makeBufferFromCanvasImageData(tempCanvasElement);return this;}}HTMLCanvasElementLuminanceSource$1.DEGREE_TO_RADIANS=Math.PI/180;/**
   * If navigator is present.
   */function hasNavigator(){return typeof navigator!=='undefined';}/**
   * If mediaDevices under navigator is supported.
   */function isMediaDevicesSuported(){return hasNavigator()&&!!navigator.mediaDevices;}/**
   * If enumerateDevices under navigator is supported.
   */function canEnumerateDevices(){return!!(isMediaDevicesSuported()&&navigator.mediaDevices.enumerateDevices);}var __awaiter$1=undefined&&undefined.__awaiter||function(thisArg,_arguments,P,generator){function adopt(value){return value instanceof P?value:new P(function(resolve){resolve(value);});}return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):adopt(result.value).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});};const defaultOptions={delayBetweenScanAttempts:500,delayBetweenScanSuccess:500,tryPlayVideoTimeout:5000};/**
   * Base class for browser code reader.
   */class BrowserCodeReader$1{/**
       * Creates an instance of BrowserCodeReader.
       * @param {Reader} reader The reader instance to decode the barcode
       * @param hints Holds the hints the user sets for the Reader.
       */constructor(reader,hints=new Map(),options={}){this.reader=reader;this.hints=hints;this.options=Object.assign(Object.assign({},defaultOptions),options);}/**
       * Allows to change the possible formats the decoder should
       * search for while scanning some image. Useful for changing
       * the possible formats during BrowserCodeReader::scan.
       */set possibleFormats(formats){this.hints.set(DecodeHintType$1.POSSIBLE_FORMATS,formats);}/**
       * Defines what the videoElement src will be.
       *
       * @param videoElement
       * @param stream The stream to be added as a source.
       */static addVideoSource(videoElement,stream){// Older browsers may not have `srcObject`
try{// @note Throws Exception if interrupted by a new loaded request
videoElement.srcObject=stream;}catch(err){// @note Avoid using this in new browsers, as it is going away.
videoElement.src=URL.createObjectURL(stream);}}/**
       * Enables or disables the torch in a media stream.
       *
       * @experimental This doesn't work accross all browsers and is still a Draft.
       */static mediaStreamSetTorch(track,onOff){return __awaiter$1(this,void 0,void 0,function*(){yield track.applyConstraints({advanced:[{fillLightMode:onOff?'flash':'off',torch:onOff?true:false}]});});}/**
       * Checks if the stream has torch support.
       */static mediaStreamIsTorchCompatible(params){const tracks=params.getVideoTracks();for(const track of tracks){if(BrowserCodeReader$1.mediaStreamIsTorchCompatibleTrack(track)){return true;}}return false;}/**
       *
       * @param track The media stream track that will be checked for compatibility.
       */static mediaStreamIsTorchCompatibleTrack(track){try{const capabilities=track.getCapabilities();return'torch'in capabilities;}catch(err){// some browsers may not be compatible with ImageCapture
// so we are ignoring this for now.
console.error(err);console.warn('Your browser may be not fully compatible with WebRTC and/or ImageCapture specs. Torch will not be available.');return false;}}/**
       * Checks if the given video element is currently playing.
       */static isVideoPlaying(video){return video.currentTime>0&&!video.paused&&video.readyState>2;}/**
       * Searches and validates a media element.
       */static getMediaElement(mediaElementId,type){const mediaElement=document.getElementById(mediaElementId);if(!mediaElement){throw new ArgumentException(`element with id '${mediaElementId}' not found`);}if(mediaElement.nodeName.toLowerCase()!==type.toLowerCase()){throw new ArgumentException(`element with id '${mediaElementId}' must be an ${type} element`);}return mediaElement;}/**
       * Receives a source and makes sure to return a Video Element from it or fail.
       */static createVideoElement(videoThingy){if(videoThingy instanceof HTMLVideoElement){return videoThingy;}if(typeof videoThingy==='string'){return BrowserCodeReader$1.getMediaElement(videoThingy,'video');}if(!videoThingy&&typeof document!=='undefined'){const videoElement=document.createElement('video');videoElement.width=200;videoElement.height=200;return videoElement;}throw new Error('Couldn\'t get videoElement from videoSource!');}/**
       * Receives a source and makes sure to return an Image Element from it or fail.
       */static prepareImageElement(imageSource){if(imageSource instanceof HTMLImageElement){return imageSource;}if(typeof imageSource==='string'){return BrowserCodeReader$1.getMediaElement(imageSource,'img');}if(typeof imageSource==='undefined'){const imageElement=document.createElement('img');imageElement.width=200;imageElement.height=200;return imageElement;}throw new Error('Couldn\'t get imageElement from imageSource!');}/**
       * Sets a HTMLVideoElement for scanning or creates a new one.
       *
       * @param videoElem The HTMLVideoElement to be set.
       */static prepareVideoElement(videoElem){const videoElement=BrowserCodeReader$1.createVideoElement(videoElem);// @todo the following lines should not always be done this way, should conditionally
// change according were we created the element or not
// Needed for iOS 11
videoElement.setAttribute('autoplay','true');videoElement.setAttribute('muted','true');videoElement.setAttribute('playsinline','true');return videoElement;}/**
       * Checks if and HTML image is loaded.
       */static isImageLoaded(img){// During the onload event, IE correctly identifies any images that
// weren’t downloaded as not complete. Others should too. Gecko-based
// browsers act like NS4 in that they report this incorrectly.
if(!img.complete){return false;}// However, they do have two very useful properties: naturalWidth and
// naturalHeight. These give the true size of the image. If it failed
// to load, either of these should be zero.
if(img.naturalWidth===0){return false;}// No other way of checking: assume it’s ok.
return true;}/**
       * Creates a binaryBitmap based in a canvas.
       *
       * @param canvas HTML canvas element containing the image source draw.
       */static createBinaryBitmapFromCanvas(canvas){const luminanceSource=new HTMLCanvasElementLuminanceSource$1(canvas);const hybridBinarizer=new HybridBinarizer(luminanceSource);return new BinaryBitmap(hybridBinarizer);}/**
       * Ovewriting this allows you to manipulate the snapshot image in anyway you want before decode.
       */static drawImageOnCanvas(canvasElementContext,srcElement){canvasElementContext.drawImage(srcElement,0,0);}static getMediaElementDimensions(mediaElement){if(mediaElement instanceof HTMLVideoElement){return{height:mediaElement.videoHeight,width:mediaElement.videoWidth};}if(mediaElement instanceof HTMLImageElement){return{height:mediaElement.naturalHeight||mediaElement.height,width:mediaElement.naturalWidth||mediaElement.width};}throw new Error('Couldn\'t find the Source\'s dimentions!');}/**
       * 🖌 Prepares the canvas for capture and scan frames.
       */static createCaptureCanvas(mediaElement){if(!mediaElement){throw new ArgumentException('Cannot create a capture canvas without a media element.');}if(typeof document==='undefined'){throw new Error('The page "Document" is undefined, make sure you\'re running in a browser.');}const canvasElement=document.createElement('canvas');const{width,height}=BrowserCodeReader$1.getMediaElementDimensions(mediaElement);canvasElement.style.width=width+'px';canvasElement.style.height=height+'px';canvasElement.width=width;canvasElement.height=height;return canvasElement;}/**
       * Just tries to play the video and logs any errors.
       * The play call is only made is the video is not already playing.
       */static tryPlayVideo(videoElement){return __awaiter$1(this,void 0,void 0,function*(){if(videoElement===null||videoElement===void 0?void 0:videoElement.ended){console.error('Trying to play video that has ended.');return false;}if(BrowserCodeReader$1.isVideoPlaying(videoElement)){console.warn('Trying to play video that is already playing.');return true;}try{yield videoElement.play();return true;}catch(error){console.warn('It was not possible to play the video.',error);return false;}});}/**
       * Creates a canvas and draws the current image frame from the media element on it.
       *
       * @param mediaElement HTML media element to extract an image frame from.
       */static createCanvasFromMediaElement(mediaElement){const canvas=BrowserCodeReader$1.createCaptureCanvas(mediaElement);const ctx=canvas.getContext('2d');if(!ctx){throw new Error('Couldn\'t find Canvas 2D Context.');}BrowserCodeReader$1.drawImageOnCanvas(ctx,mediaElement);return canvas;}/**
       * Creates a binaryBitmap based in some image source.
       *
       * @param mediaElement HTML element containing drawable image source.
       */static createBinaryBitmapFromMediaElem(mediaElement){const canvas=BrowserCodeReader$1.createCanvasFromMediaElement(mediaElement);return BrowserCodeReader$1.createBinaryBitmapFromCanvas(canvas);}static destroyImageElement(imageElement){imageElement.src='';imageElement.removeAttribute('src');imageElement=undefined;}/**
       * Lists all the available video input devices.
       */static listVideoInputDevices(){return __awaiter$1(this,void 0,void 0,function*(){if(!hasNavigator()){throw new Error('Can\'t enumerate devices, navigator is not present.');}if(!canEnumerateDevices()){throw new Error('Can\'t enumerate devices, method not supported.');}const devices=yield navigator.mediaDevices.enumerateDevices();const videoDevices=[];for(const device of devices){const kind=device.kind==='video'?'videoinput':device.kind;if(kind!=='videoinput'){continue;}const deviceId=device.deviceId||device.id;const label=device.label||`Video device ${videoDevices.length+1}`;const groupId=device.groupId;const videoDevice={deviceId,label,kind,groupId};videoDevices.push(videoDevice);}return videoDevices;});}/**
       * Let's you find a device using it's Id.
       */static findDeviceById(deviceId){return __awaiter$1(this,void 0,void 0,function*(){const devices=yield BrowserCodeReader$1.listVideoInputDevices();if(!devices){return;}return devices.find(x=>x.deviceId===deviceId);});}/**
       * Unbinds a HTML video src property.
       */static cleanVideoSource(videoElement){if(!videoElement){return;}// forgets about that element 😢
try{videoElement.srcObject=null;}catch(err){videoElement.src='';}if(videoElement){videoElement.removeAttribute('src');}}/**
       * Waits for a video to load and then hits play on it.
       * To accomplish that, it binds listeners and callbacks to the video element.
       *
       * @param element The video element.
       * @param callbackFn Callback invoked when the video is played.
       */static playVideoOnLoadAsync(element,timeout){return __awaiter$1(this,void 0,void 0,function*(){// if canplay was already fired, we won't know when to play, so just give it a try
const isPlaying=yield BrowserCodeReader$1.tryPlayVideo(element);if(isPlaying){return true;}return new Promise((resolve,reject)=>{// waits 3 seconds or rejects.
const timeoutId=setTimeout(()=>{if(BrowserCodeReader$1.isVideoPlaying(element)){// if video is playing then we had success, just ignore
return;}reject(false);element.removeEventListener('canplay',videoCanPlayListener);},timeout);/**
                   * Should contain the current registered listener for video loaded-metadata,
                   * used to unregister that listener when needed.
                   */const videoCanPlayListener=()=>{BrowserCodeReader$1.tryPlayVideo(element).then(hasPlayed=>{clearTimeout(timeoutId);element.removeEventListener('canplay',videoCanPlayListener);resolve(hasPlayed);});};// both should be unregistered after called
element.addEventListener('canplay',videoCanPlayListener);});});}/**
       * Sets the new stream and request a new decoding-with-delay.
       *
       * @param stream The stream to be shown in the video element.
       * @param decodeFn A callback for the decode method.
       */static attachStreamToVideo(stream,preview,previewPlayTimeout=5000){return __awaiter$1(this,void 0,void 0,function*(){const videoElement=BrowserCodeReader$1.prepareVideoElement(preview);BrowserCodeReader$1.addVideoSource(videoElement,stream);yield BrowserCodeReader$1.playVideoOnLoadAsync(videoElement,previewPlayTimeout);return videoElement;});}/**
       * Returns a Promise that resolves when the given image element loads.
       */static _waitImageLoad(element){return new Promise((resolve,reject)=>{const timeout=10000;// waits 10 seconds or rejects.
const timeoutId=setTimeout(()=>{if(BrowserCodeReader$1.isImageLoaded(element)){// if video is playing then we had success, just ignore
return;}// removes the listener
element.removeEventListener('load',imageLoadedListener);// rejects the load
reject();},timeout);const imageLoadedListener=()=>{clearTimeout(timeoutId);// removes the listener
element.removeEventListener('load',imageLoadedListener);// resolves the load
resolve();};element.addEventListener('load',imageLoadedListener);});}/**
       * Checks if the `callbackFn` is defined, otherwise throws.
       */static checkCallbackFnOrThrow(callbackFn){if(!callbackFn){throw new ArgumentException('`callbackFn` is a required parameter, you cannot capture results without it.');}}/**
       * Standard method to dispose a media stream object.
       */static disposeMediaStream(stream){stream.getVideoTracks().forEach(x=>x.stop());stream=undefined;}/**
       * Gets the BinaryBitmap for ya! (and decodes it)
       */decode(element){// get binary bitmap for decode function
const canvas=BrowserCodeReader$1.createCanvasFromMediaElement(element);return this.decodeFromCanvas(canvas);}/**
       * Call the encapsulated readers decode
       */decodeBitmap(binaryBitmap){return this.reader.decode(binaryBitmap,this.hints);}/**
       * Decodes some barcode from a canvas!
       */decodeFromCanvas(canvas){const binaryBitmap=BrowserCodeReader$1.createBinaryBitmapFromCanvas(canvas);return this.decodeBitmap(binaryBitmap);}/**
       * Decodes something from an image HTML element.
       */decodeFromImageElement(source){return __awaiter$1(this,void 0,void 0,function*(){if(!source){throw new ArgumentException('An image element must be provided.');}const element=BrowserCodeReader$1.prepareImageElement(source);// onLoad will remove it's callback once done
// we do not need to dispose or destroy the image
// since it came from the user
return yield this._decodeOnLoadImage(element);});}/**
       * Decodes an image from a URL.
       */decodeFromImageUrl(url){return __awaiter$1(this,void 0,void 0,function*(){if(!url){throw new ArgumentException('An URL must be provided.');}const element=BrowserCodeReader$1.prepareImageElement();// loads the image.
element.src=url;try{// it waits the task so we can destroy the created image after
return yield this.decodeFromImageElement(element);}finally{// we created this element, so we destroy it
BrowserCodeReader$1.destroyImageElement(element);}});}/**
       * Continuously tries to decode the barcode from a stream obtained from the given constraints
       * while showing the video in the specified video element.
       *
       * @param {MediaStream} [constraints] the media stream constraints to get s valid media stream to decode from
       * @param {string|HTMLVideoElement} [previewElem] the video element in page where to show the video while
       *  decoding. Can be either an element id or directly an HTMLVideoElement. Can be undefined, in
       *  which case no video will be shown.
       */decodeFromConstraints(constraints,previewElem,callbackFn){return __awaiter$1(this,void 0,void 0,function*(){BrowserCodeReader$1.checkCallbackFnOrThrow(callbackFn);const stream=yield navigator.mediaDevices.getUserMedia(constraints);try{return yield this.decodeFromStream(stream,previewElem,callbackFn);}catch(error){BrowserCodeReader$1.disposeMediaStream(stream);throw error;}});}/**
       * In one attempt, tries to decode the barcode from a stream obtained from the given constraints
       * while showing the video in the specified video element.
       *
       * @param {MediaStream} [constraints] the media stream constraints to get s valid media stream to decode from
       * @param {string|HTMLVideoElement} [preview] the video element in page where to show the video
       *  while decoding. Can be either an element id or directly an HTMLVideoElement. Can be undefined,
       *  in which case no video will be shown.
       */decodeFromStream(stream,preview,callbackFn){return __awaiter$1(this,void 0,void 0,function*(){BrowserCodeReader$1.checkCallbackFnOrThrow(callbackFn);const timeout=this.options.tryPlayVideoTimeout;const video=yield BrowserCodeReader$1.attachStreamToVideo(stream,preview,timeout);// we receive a stream from the user, it's not our job to dispose it
const stopStream=()=>{// stops video tracks and releases the stream reference
for(const track of stream.getVideoTracks()){track.stop();}stream=undefined;};const finalizeCallback=()=>{stopStream();// this video was just a preview, so in order
// to release the stream we gotta stop sowing
// it (the stream) in the video element
BrowserCodeReader$1.cleanVideoSource(video);};const originalControls=this.scan(video,callbackFn,finalizeCallback);const videoTracks=stream.getVideoTracks();const controls=Object.assign(Object.assign({},originalControls),{stop(){originalControls.stop();},streamVideoConstraintsApply(constraints,trackFilter){return __awaiter$1(this,void 0,void 0,function*(){const tracks=trackFilter?videoTracks.filter(trackFilter):videoTracks;for(const track of tracks){yield track.applyConstraints(constraints);}});},streamVideoConstraintsGet(trackFilter){return videoTracks.find(trackFilter).getConstraints();},streamVideoSettingsGet(trackFilter){return videoTracks.find(trackFilter).getSettings();},streamVideoCapabilitiesGet(trackFilter){return videoTracks.find(trackFilter).getCapabilities();}});const isTorchAvailable=BrowserCodeReader$1.mediaStreamIsTorchCompatible(stream);if(isTorchAvailable){const torchTrack=videoTracks===null||videoTracks===void 0?void 0:videoTracks.find(t=>BrowserCodeReader$1.mediaStreamIsTorchCompatibleTrack(t));const switchTorch=onOff=>__awaiter$1(this,void 0,void 0,function*(){yield BrowserCodeReader$1.mediaStreamSetTorch(torchTrack,onOff);});controls.switchTorch=switchTorch;const stop=()=>{originalControls.stop();switchTorch(false);};controls.stop=stop;}return controls;});}/**
       * Continuously tries to decode the barcode from the device specified by device while showing
       * the video in the specified video element.
       *
       * @param {string|null} [deviceId] the id of one of the devices obtained after calling
       *  getVideoInputDevices. Can be undefined, in this case it will decode from one of the
       *  available devices, preffering the main camera (environment facing) if available.
       * @param {string|HTMLVideoElement|null} [video] the video element in page where to show the video
       *  while decoding. Can be either an element id or directly an HTMLVideoElement. Can be undefined,
       *  in which case no video will be shown.
       */decodeFromVideoDevice(deviceId,previewElem,callbackFn){return __awaiter$1(this,void 0,void 0,function*(){BrowserCodeReader$1.checkCallbackFnOrThrow(callbackFn);let videoConstraints;if(!deviceId){videoConstraints={facingMode:'environment'};}else{videoConstraints={deviceId:{exact:deviceId}};}const constraints={video:videoConstraints};return yield this.decodeFromConstraints(constraints,previewElem,callbackFn);});}/**
       * Decodes something from an image HTML element.
       */decodeFromVideoElement(source,callbackFn){return __awaiter$1(this,void 0,void 0,function*(){BrowserCodeReader$1.checkCallbackFnOrThrow(callbackFn);if(!source){throw new ArgumentException('A video element must be provided.');}// we do not create a video element
const element=BrowserCodeReader$1.prepareVideoElement(source);const timeout=this.options.tryPlayVideoTimeout;// plays the video
yield BrowserCodeReader$1.playVideoOnLoadAsync(element,timeout);// starts decoding after played the video
return this.scan(element,callbackFn);});}/**
       * Decodes a video from a URL until it ends.
       */decodeFromVideoUrl(url,callbackFn){return __awaiter$1(this,void 0,void 0,function*(){BrowserCodeReader$1.checkCallbackFnOrThrow(callbackFn);if(!url){throw new ArgumentException('An URL must be provided.');}// creates a new element
const element=BrowserCodeReader$1.prepareVideoElement();// starts loading the video
element.src=url;const finalizeCallback=()=>{// dispose created video element
BrowserCodeReader$1.cleanVideoSource(element);};const timeout=this.options.tryPlayVideoTimeout;// plays the video
yield BrowserCodeReader$1.playVideoOnLoadAsync(element,timeout);// starts decoding after played the video
const controls=this.scan(element,callbackFn,finalizeCallback);return controls;});}/**
       * In one attempt, tries to decode the barcode from a stream obtained from the given
       * constraints while showing the video in the specified video element.
       *
       * @param constraints the media stream constraints to get s valid media stream to decode from
       * @param videoSource the video element in page where to show the video while decoding.
       *  Can be either an element id or directly an HTMLVideoElement. Can be undefined,
       *  in which case no video will be shown.
       *  The decoding result.
       */decodeOnceFromConstraints(constraints,videoSource){return __awaiter$1(this,void 0,void 0,function*(){const stream=yield navigator.mediaDevices.getUserMedia(constraints);return yield this.decodeOnceFromStream(stream,videoSource);});}/**
       * In one attempt, tries to decode the barcode from a stream obtained from the given
       * constraints while showing the video in the specified video element.
       *
       * @param {MediaStream} [constraints] the media stream constraints to get s valid media stream to decode from
       * @param {string|HTMLVideoElement} [video] the video element in page where to show the video while decoding.
       *  Can be either an element id or directly an HTMLVideoElement. Can be undefined,
       *  in which case no video will be shown.
       */decodeOnceFromStream(stream,preview){return __awaiter$1(this,void 0,void 0,function*(){const receivedPreview=Boolean(preview);const video=yield BrowserCodeReader$1.attachStreamToVideo(stream,preview);try{const result=yield this.scanOneResult(video);return result;}finally{if(!receivedPreview){BrowserCodeReader$1.cleanVideoSource(video);}}});}/**
       * In one attempt, tries to decode the barcode from the device specified by deviceId
       * while showing the video in the specified video element.
       *
       * @param deviceId the id of one of the devices obtained after calling getVideoInputDevices.
       *  Can be undefined, in this case it will decode from one of the available devices,
       *  preffering the main camera (environment facing) if available.
       * @param videoSource the video element in page where to show the video while decoding.
       *  Can be either an element id or directly an HTMLVideoElement. Can be undefined,
       *  in which case no video will be shown.
       */decodeOnceFromVideoDevice(deviceId,videoSource){return __awaiter$1(this,void 0,void 0,function*(){let videoConstraints;if(!deviceId){videoConstraints={facingMode:'environment'};}else{videoConstraints={deviceId:{exact:deviceId}};}const constraints={video:videoConstraints};return yield this.decodeOnceFromConstraints(constraints,videoSource);});}/**
       * Decodes something from an image HTML element.
       */decodeOnceFromVideoElement(source){return __awaiter$1(this,void 0,void 0,function*(){if(!source){throw new ArgumentException('A video element must be provided.');}// we do not create a video element
const element=BrowserCodeReader$1.prepareVideoElement(source);const timeout=this.options.tryPlayVideoTimeout;// plays the video
yield BrowserCodeReader$1.playVideoOnLoadAsync(element,timeout);// starts decoding after played the video
return yield this.scanOneResult(element);});}/**
       * Decodes a video from a URL.
       */decodeOnceFromVideoUrl(url){return __awaiter$1(this,void 0,void 0,function*(){if(!url){throw new ArgumentException('An URL must be provided.');}// creates a new element
const element=BrowserCodeReader$1.prepareVideoElement();// starts loading the video
element.src=url;const task=this.decodeOnceFromVideoElement(element);try{// it waits the task so we can destroy the created image after
return yield task;}finally{// we created this element, so we destroy it
BrowserCodeReader$1.cleanVideoSource(element);}});}/**
       * Tries to decode from the video input until it finds some value.
       */scanOneResult(element,retryIfNotFound=true,retryIfChecksumError=true,retryIfFormatError=true){return new Promise((resolve,reject)=>{// reuses the scan API, but returns at the first successful result
this.scan(element,(result,error,controls)=>{if(result){// good result, returning
resolve(result);controls.stop();return;}if(error){// checks if it should retry
if(error instanceof NotFoundException&&retryIfNotFound){return;}if(error instanceof ChecksumException&&retryIfChecksumError){return;}if(error instanceof FormatException&&retryIfFormatError){return;}// not re-trying
controls.stop();// stops scan loop
reject(error);// returns the error
}});});}/**
       * Continuously decodes from video input.
       *
       * @param element HTML element to scan/decode from. It will not be disposed or destroyed.
       * @param callbackFn Called after every scan attempt, being it successful or errored.
       * @param finalizeCallback Called after scan proccess reaches the end or stop is called.
       */scan(element,callbackFn,finalizeCallback){BrowserCodeReader$1.checkCallbackFnOrThrow(callbackFn);/**
           * The HTML canvas element, used to draw the video or image's frame for decoding.
           */let captureCanvas=BrowserCodeReader$1.createCaptureCanvas(element);/**
           * The HTML canvas element context.
           */let captureCanvasContext=captureCanvas.getContext('2d');// cannot proceed w/o this
if(!captureCanvasContext){throw new Error('Couldn\'t create canvas for visual element scan.');}const disposeCanvas=()=>{captureCanvasContext=undefined;captureCanvas=undefined;};let stopScan=false;let lastTimeoutId;// can be called to break the scan loop
const stop=()=>{stopScan=true;clearTimeout(lastTimeoutId);disposeCanvas();if(finalizeCallback){finalizeCallback();}};// created for extensibility
const controls={stop};// this async loop allows infinite (or almost? maybe) scans
const loop=()=>{if(stopScan){// no need to clear timeouts as none was create yet in this scope.
return;}try{BrowserCodeReader$1.drawImageOnCanvas(captureCanvasContext,element);const result=this.decodeFromCanvas(captureCanvas);callbackFn(result,undefined,controls);lastTimeoutId=setTimeout(loop,this.options.delayBetweenScanSuccess);}catch(error){callbackFn(undefined,error,controls);const isChecksumError=error instanceof ChecksumException;const isFormatError=error instanceof FormatException;const isNotFound=error instanceof NotFoundException;if(isChecksumError||isFormatError||isNotFound){// trying again
lastTimeoutId=setTimeout(loop,this.options.delayBetweenScanAttempts);return;}// not trying again
disposeCanvas();if(finalizeCallback){finalizeCallback(error);}}};// starts the async loop
loop();return controls;}/**
       * Waits for the image to load and then tries to decode it.
       */_decodeOnLoadImage(element){return __awaiter$1(this,void 0,void 0,function*(){const isImageLoaded=BrowserCodeReader$1.isImageLoaded(element);if(!isImageLoaded){yield BrowserCodeReader$1._waitImageLoad(element);}return this.decode(element);});}}/**
   * Aztec Code reader to use from browser.
   *
   * @class BrowserAztecCodeReader
   * @extends {BrowserCodeReader}
   */class BrowserAztecCodeReader$1 extends BrowserCodeReader$1{/**
       * Creates an instance of BrowserAztecCodeReader.
       */constructor(hints,options){super(new AztecReader(),hints,options);}}/**
   * Reader to be used for any One Dimension type barcode.
   */class BrowserMultiFormatOneDReader extends BrowserCodeReader$1{/**
       * Creates an instance of BrowserBarcodeReader.
       * @param {Map<DecodeHintType, any>} hints?
       * @param options
       */constructor(hints,options){super(new MultiFormatOneDReader(hints),hints,options);}}/**
   * QR Code reader to use from browser.
   */class BrowserDatamatrixCodeReader$1 extends BrowserCodeReader$1{/**
       * Creates an instance of BrowserQRCodeReader.
       */constructor(hints,options){super(new DataMatrixReader(),hints,options);}}class BrowserMultiFormatReader$1 extends BrowserCodeReader$1{constructor(hints,options){const reader=new MultiFormatReader();reader.setHints(hints);super(reader,hints,options);this.reader=reader;}set possibleFormats(formats){this.hints.set(DecodeHintType$1.POSSIBLE_FORMATS,formats);this.reader.setHints(this.hints);}/**
       * Overwrite decodeBitmap to call decodeWithState, which will pay
       * attention to the hints set in the constructor function
       */decodeBitmap(binaryBitmap){return this.reader.decodeWithState(binaryBitmap);}/**
       * Allows to change hints in runtime.
       */setHints(hints){this.hints=hints;this.reader.setHints(this.hints);}}/**
   * QR Code reader to use from browser.
   */class BrowserPDF417Reader$1 extends BrowserCodeReader$1{/**
       * Creates an instance of BrowserPDF417Reader.
       */constructor(hints,options){super(new PDF417Reader(),hints,options);}}/**
   * QR Code reader to use from browser.
   */class BrowserQRCodeReader$1 extends BrowserCodeReader$1{/**
       * Creates an instance of BrowserQRCodeReader.
       */constructor(hints,options){super(new QRCodeReader(),hints,options);}}const svgNs='http://www.w3.org/2000/svg';/**/class BrowserCodeSvgWriter{/**
       * Constructs. 😉
       */constructor(containerElement){if(typeof containerElement==='string'){const container=document.getElementById(containerElement);if(!container){throw new Error(`Could not find a Container element with '${containerElement}'.`);}this.containerElement=container;}else{this.containerElement=containerElement;}}/**
       * Writes the QR code to a SVG and renders it in the container.
       */write(contents,width,height,hints){if(contents.length===0){throw new IllegalArgumentException('Found empty contents');}if(width<0||height<0){throw new IllegalArgumentException('Requested dimensions are too small: '+width+'x'+height);}const quietZone=hints&&hints.get(EncodeHintType$1.MARGIN)!==undefined?Number.parseInt(hints.get(EncodeHintType$1.MARGIN).toString(),10):BrowserCodeSvgWriter.QUIET_ZONE_SIZE;const code=this.encode(hints,contents);return this.renderResult(code,width,height,quietZone);}/**
       * Creates a SVG element.
       */createSVGElement(w,h){const el=document.createElementNS(BrowserCodeSvgWriter.SVG_NS,'svg');el.setAttributeNS(svgNs,'width',h.toString());el.setAttributeNS(svgNs,'height',w.toString());return el;}/**
       * Creates a SVG rect.
       */createSvgPathPlaceholderElement(w,h){const el=document.createElementNS(BrowserCodeSvgWriter.SVG_NS,'path');el.setAttributeNS(svgNs,'d',`M0 0h${w}v${h}H0z`);el.setAttributeNS(svgNs,'fill','none');return el;}/**
       * Creates a SVG rect.
       */createSvgRectElement(x,y,w,h){const el=document.createElementNS(BrowserCodeSvgWriter.SVG_NS,'rect');el.setAttributeNS(svgNs,'x',x.toString());el.setAttributeNS(svgNs,'y',y.toString());el.setAttributeNS(svgNs,'height',w.toString());el.setAttributeNS(svgNs,'width',h.toString());el.setAttributeNS(svgNs,'fill','#000000');return el;}/**
       * Encodes the content to a Barcode type.
       */encode(hints,contents){let errorCorrectionLevel=ErrorCorrectionLevel.L;if(hints&&hints.get(EncodeHintType$1.ERROR_CORRECTION)!==undefined){const correctionStr=hints.get(EncodeHintType$1.ERROR_CORRECTION).toString();errorCorrectionLevel=ErrorCorrectionLevel.fromString(correctionStr);}const code=Encoder.encode(contents,errorCorrectionLevel,hints);return code;}/**
       * Renders the SVG in the container.
       *
       * @note the input matrix uses 0 == white, 1 == black. The output matrix
       *  uses 0 == black, 255 == white (i.e. an 8 bit greyscale bitmap).
       */renderResult(code,width/*int*/,height/*int*/,quietZone/*int*/){// if (this.format && format != this.format) {
//   throw new IllegalArgumentException("Can only encode QR_CODE, but got " + format)
// }
const input=code.getMatrix();if(input===null){throw new IllegalStateException();}const inputWidth=input.getWidth();const inputHeight=input.getHeight();const qrWidth=inputWidth+quietZone*2;const qrHeight=inputHeight+quietZone*2;const outputWidth=Math.max(width,qrWidth);const outputHeight=Math.max(height,qrHeight);const multiple=Math.min(Math.floor(outputWidth/qrWidth),Math.floor(outputHeight/qrHeight));// Padding includes both the quiet zone and the extra white pixels to accommodate the requested
// dimensions. For example, if input is 25x25 the QR will be 33x33 including the quiet zone.
// If the requested size is 200x160, the multiple will be 4, for a QR of 132x132. These will
// handle all the padding from 100x100 (the actual QR) up to 200x160.
const leftPadding=Math.floor((outputWidth-inputWidth*multiple)/2);const topPadding=Math.floor((outputHeight-inputHeight*multiple)/2);const svgElement=this.createSVGElement(outputWidth,outputHeight);const placeholder=this.createSvgPathPlaceholderElement(width,height);svgElement.appendChild(placeholder);this.containerElement.appendChild(svgElement);// 2D loop
for(let inputY=0,outputY=topPadding;inputY<inputHeight;inputY++,outputY+=multiple){// Write the contents of this row of the barcode
for(let inputX=0,outputX=leftPadding;inputX<inputWidth;inputX++,outputX+=multiple){if(input.get(inputX,inputY)===1){const svgRectElement=this.createSvgRectElement(outputX,outputY,multiple,multiple);svgElement.appendChild(svgRectElement);}}}return svgElement;}}/**
   * Default quiet zone in pixels.
   */BrowserCodeSvgWriter.QUIET_ZONE_SIZE=4;/**
   * SVG markup NameSpace
   */BrowserCodeSvgWriter.SVG_NS='http://www.w3.org/2000/svg';const svgNs$1='http://www.w3.org/2000/svg';/**/class BrowserQRCodeSvgWriter{/**
       * Writes and renders a QRCode SVG element.
       *
       * @param contents
       * @param width
       * @param height
       * @param hints
       */write(contents,width,height,hints){if(contents.length===0){throw new IllegalArgumentException('Found empty contents');}// if (format != BarcodeFormat.QR_CODE) {
//   throw new IllegalArgumentException("Can only encode QR_CODE, but got " + format)
// }
if(width<0||height<0){throw new IllegalArgumentException('Requested dimensions are too small: '+width+'x'+height);}let errorCorrectionLevel=ErrorCorrectionLevel.L;let quietZone=BrowserQRCodeSvgWriter.QUIET_ZONE_SIZE;if(hints){if(undefined!==hints.get(EncodeHintType$1.ERROR_CORRECTION)){const correctionStr=hints.get(EncodeHintType$1.ERROR_CORRECTION).toString();errorCorrectionLevel=ErrorCorrectionLevel.fromString(correctionStr);}if(undefined!==hints.get(EncodeHintType$1.MARGIN)){quietZone=Number.parseInt(hints.get(EncodeHintType$1.MARGIN).toString(),10);}}const code=Encoder.encode(contents,errorCorrectionLevel,hints);return this.renderResult(code,width,height,quietZone);}/**
       * Renders the result and then appends it to the DOM.
       */writeToDom(containerElement,contents,width,height,hints){if(typeof containerElement==='string'){const targetEl=document.querySelector(containerElement);if(!targetEl){throw new Error('Could no find the target HTML element.');}containerElement=targetEl;}const svgElement=this.write(contents,width,height,hints);if(containerElement instanceof HTMLElement){containerElement.appendChild(svgElement);}}/**
       * Note that the input matrix uses 0 == white, 1 == black.
       * The output matrix uses 0 == black, 255 == white (i.e. an 8 bit greyscale bitmap).
       */renderResult(code,width/*int*/,height/*int*/,quietZone/*int*/){const input=code.getMatrix();if(input===null){throw new IllegalStateException();}const inputWidth=input.getWidth();const inputHeight=input.getHeight();const qrWidth=inputWidth+quietZone*2;const qrHeight=inputHeight+quietZone*2;const outputWidth=Math.max(width,qrWidth);const outputHeight=Math.max(height,qrHeight);const multiple=Math.min(Math.floor(outputWidth/qrWidth),Math.floor(outputHeight/qrHeight));// Padding includes both the quiet zone and the extra white pixels to accommodate the requested
// dimensions. For example, if input is 25x25 the QR will be 33x33 including the quiet zone.
// If the requested size is 200x160, the multiple will be 4, for a QR of 132x132. These will
// handle all the padding from 100x100 (the actual QR) up to 200x160.
const leftPadding=Math.floor((outputWidth-inputWidth*multiple)/2);const topPadding=Math.floor((outputHeight-inputHeight*multiple)/2);const svgElement=this.createSVGElement(outputWidth,outputHeight);for(let inputY=0,outputY=topPadding;inputY<inputHeight;inputY++,outputY+=multiple){// Write the contents of this row of the barcode
for(let inputX=0,outputX=leftPadding;inputX<inputWidth;inputX++,outputX+=multiple){if(input.get(inputX,inputY)===1){const svgRectElement=this.createSvgRectElement(outputX,outputY,multiple,multiple);svgElement.appendChild(svgRectElement);}}}return svgElement;}/**
       * Creates a SVG element.
       *
       * @param w SVG's width attribute
       * @param h SVG's height attribute
       */createSVGElement(w,h){const svgElement=document.createElementNS(svgNs$1,'svg');svgElement.setAttribute('height',w.toString());svgElement.setAttribute('width',h.toString());return svgElement;}/**
       * Creates a SVG rect element.
       *
       * @param x Element's x coordinate
       * @param y Element's y coordinate
       * @param w Element's width attribute
       * @param h Element's height attribute
       */createSvgRectElement(x,y,w,h){const rect=document.createElementNS(svgNs$1,'rect');rect.setAttribute('x',x.toString());rect.setAttribute('y',y.toString());rect.setAttribute('height',w.toString());rect.setAttribute('width',h.toString());rect.setAttribute('fill','#000000');return rect;}}BrowserQRCodeSvgWriter.QUIET_ZONE_SIZE=4;exports.BarcodeFormat=BarcodeFormat$1;exports.BrowserAztecCodeReader=BrowserAztecCodeReader$1;exports.BrowserCodeReader=BrowserCodeReader$1;exports.BrowserCodeSvgWriter=BrowserCodeSvgWriter;exports.BrowserDatamatrixCodeReader=BrowserDatamatrixCodeReader$1;exports.BrowserMultiFormatOneDReader=BrowserMultiFormatOneDReader;exports.BrowserMultiFormatReader=BrowserMultiFormatReader$1;exports.BrowserPDF417Reader=BrowserPDF417Reader$1;exports.BrowserQRCodeReader=BrowserQRCodeReader$1;exports.BrowserQRCodeSvgWriter=BrowserQRCodeSvgWriter;exports.HTMLCanvasElementLuminanceSource=HTMLCanvasElementLuminanceSource$1;Object.defineProperty(exports,'__esModule',{value:true});});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _zxing_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zxing/browser */ "./node_modules/@zxing/browser/umd/zxing-browser.js");
/* harmony import */ var _zxing_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_zxing_browser__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

window.addEventListener('load', function () { return __awaiter(void 0, void 0, void 0, function () {
    var videoInputDevices, video, reader, controls;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("LOADING");
                return [4 /*yield*/, _zxing_browser__WEBPACK_IMPORTED_MODULE_0__.BrowserCodeReader.listVideoInputDevices()];
            case 1:
                videoInputDevices = _a.sent();
                video = document.querySelector('video#test');
                reader = new _zxing_browser__WEBPACK_IMPORTED_MODULE_0__.BrowserMultiFormatOneDReader();
                return [4 /*yield*/, reader.decodeFromVideoDevice(videoInputDevices[1].deviceId, video, function (result, error, controls) {
                        if (!result) {
                            return;
                        }
                        var text = result.getText();
                        if (!text.startsWith('978')) {
                            return;
                        }
                        var segment = result.getText().slice(3, -1);
                        var total = 0;
                        for (var i = 0; i < segment.length; i++) {
                            total += parseInt(segment[i]) * (10 - i);
                        }
                        var mod = total % 11;
                        var checksum = (mod === 0) ? 0 : 11 - mod;
                        var isbn10 = segment + (checksum === 10 ? 'X' : checksum.toString());
                        location.href = "https://www.amazon.co.jp/dp/" + isbn10;
                    })];
            case 2:
                controls = _a.sent();
                return [2 /*return*/];
        }
    });
}); });

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map