/* 
1.----------window----------
 In JavaScript, the window object is the main global object in the browser. It represents the browser window or tab where
 the webpage is loaded. Everything that happens in the browser—like opening a webpage, resizing the window, or
 interacting with elements—can be controlled using the window object. It automatically exists, so you don’t need to 
 create it.

 Think of window as the big container that holds everything on a webpage, including the document (HTML page),
 browser history, URL, local storage, and built-in functions like alert(), setTimeout(), and console.log().
 For example, when you type console.log("Hello"), it is actually window.console.log("Hello"), but since window is global,
 you don’t need to write it explicitly.

 The window object has many useful features. You can use window.document to access and modify the webpage content,
 window.location to get or change the current URL, and window.history to navigate between visited pages.
 If you want to store data in the browser, you can use window.localStorage or window.sessionStorage.

2.------WHAT IS "GLOBAL OBJECT"-------

  A global object in JavaScript is an object that is automatically created by the environment (browser or Node.js) and
  is accessible from anywhere in your code. It provides built-in methods, properties, and functionalities that 
  developers can use without explicitly creating an instance of it.
                                   OR
  Yes! A global object in JavaScript is something that exists automatically and is always available in the background,
  whether you explicitly reference it or not.

3. --------window.document--------
    window.document points html, we can manipulate(i.e. change, modify, control) HTML using this document object

4.-------MORE ABOUT WINDOW-------
  The window object is NOT part of the JavaScript engine. Instead, it is part of the Web APIs provided by the browser.

  ✅ How does JavaScript work?
  JavaScript Engine → This is responsible for running JavaScript code. Examples:

  Chrome → V8 Engine
  Firefox → SpiderMonkey
  Edge → Chakra
  The JavaScript engine can only understand and execute core JavaScript features (like variables, loops, functions, etc.).

  Web APIs (provided by the browser) → These are extra features that browsers provide to help JavaScript interact with webpages.

  window (global object in browsers)
  document (to manipulate HTML)
  localStorage (to store data in the browser)
  fetch() (to make API calls)
  setTimeout() (to delay execution)

5.-------what is JAVASCRIPT ENGINE--------
  A JavaScript engine is a program that reads, understands, and executes JavaScript code. It is built inside browsers
  and other environments like Node.js to run JavaScript efficiently.
*/