<p>This is what our code produces:</p>
<button id='htmlButton1' class='button'>I'm an HTML button!</button>
<button id='htmlButton2' class='button'>I'm an HTML button!</button>

<script>
    /* Create a button element */
    var clickMeButton = document.createElement('button');
    /* Set the button's text label */
    clickMeButton.innerHTML = 'I\'m a JavaScript button!';
    /* Set the button's id */
    clickMeButton.id = 'jsButton';
    /* Set the button's style class */
    clickMeButton.className = 'button';
    /* Add the button to the page */
    document.body.appendChild(clickMeButton);
    
    /* Get the element with id='htmlButton2' */
    var htmlButton = document.getElementById('htmlButton2');
    /* Modify the text label for htmlButton2 */
    htmlButton.innerHTML = 'I\'m a modified HTML button!';