const scrollElement = document.getElementById("scroll-to-top");
scrollElement.href = "javascript:"; // Disable the original functionality. We don't add the js below here because then technically it would be in the HTML and I want them fully separate
scrollElement.onclick = function() { window.scrollTo(0, 0); }