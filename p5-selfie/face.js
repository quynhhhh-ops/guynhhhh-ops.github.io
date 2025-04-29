
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Simple JS Example</title>
</head>
<body>
  <h1 id="greeting">Hello, world!</h1>
  <button onclick="changeGreeting()">Click Me!</button>

  <script>
    // This function runs when the button is clicked
    function changeGreeting() {
      // Change the text in the h1 element
      document.getElementById("greeting").innerText = "You clicked the button!";
      
      // Output to the browser console
      console.log("The greeting was changed.");
    }
  </script>
</body>
</html>
