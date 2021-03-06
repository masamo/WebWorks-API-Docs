/*
* Copyright 2010-2011 Research In Motion Limited.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * @toc {Database} Local Storage
 * @PB10
 * @namespace This object provides functions to access a list of key/value pairs. 
 * <p/>Each Storage object provides access to a list of key/value pairs, which are sometimes called items. 
 * Keys are strings. Any string (including the empty string) is a valid key. 
 * Values can be any data type supported by the structured clone algorithm.
 * 
 */

localStorage ={
		/**
		 * @PB10
		 * @desc the number of key/value pairs currently present in the list associated with the object.
		 * @readOnly
		 * @type unsigned long
		 */
		length :0,
		
		/**
		 * @PB10
		 * @desc return the name of the nth key in the list. The order of keys is user-agent defined, but must be consistent within an object so long as the number of keys doesn't change.
		 * @param {unsigned long} index the nth key in the list
		 * @returns {DOMString} the name of the nth key in the list. If index is greater than or equal to the number of key/value pairs in the object, then this method must return null.
		 */
		key : function(index){},
		
		/**
		 * @PB10
		 * @desc return a structured clone of the current value associated with the given key.
		 * @param {DOMString} key the key for the key/value pair 
		 * @returns {any} the value associated with the given key. If the given key does not exist, this method return null.
		 */
		getItem : function(key){},
		
		/**
		 * @PB10
		 * @desc this method first create a structured clone of the given value. 
		 * If this raises an exception, then the exception must be thrown and the list associated with the object is left unchanged. 
		 * If constructing the structured clone would involve constructing a new <b>ImageData</b> object, then throw a <b>NOT_SUPPORTED_ERR</b> exception instead.
		 * <P>
		 * Otherwise, the user agent must then check if a key/value pair with the given key already exists in the list associated with the object.
		 * If it does not, then a new key/value pair must be added to the list, with the given key and with its value set to the newly obtained clone of value.
		 * If the given key does exist in the list, then it must have its value updated to the newly obtained clone of value.
		 * If it couldn't set the new value, the method must raise an <b>QUOTA_EXCEEDED_ERR</b> exception. (Setting could fail if, e.g., the user has disabled storage for the site, or if the quota has been exceeded.) 
		 * @param {DOMString} key the key for the key/value pair 
		 * @param {any} value the value for the key/value pair
		 */
		setItem : function(key, value){},

		/**
		 * @PB10
		 * @desc cause the key/value pair with the given key to be removed from the list associated with the object, if it exists. If no item with that key exists, the method do nothing.
		 * @param  {DOMString} key the key for the key/value pair
		 */
		removeItem : function(key){},

		/**
		 * @PB10
		 * @desc atomically cause the list associated with the object to be emptied of all key/value pairs, if there are any. If there are none, then the method do nothing.
		 */
		clear : function(){}
};