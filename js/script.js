// bulb on/off
function bulbOn(){
  document.getElementById('image').src="img/on.gif";
}
function bulbOff(){
  document.getElementById('image').src="img/off.gif";
}

//Change Picture on Button Click
    function changeImage() {
      document.getElementById("image1").src = "img/image2.jpg";
    }

    //  Display Current Time
    function updateTime() {
      document.getElementById("currentTime").innerHTML = new Date().toLocaleTimeString();
    }
    setInterval(updateTime, 1000);
    updateTime();

    //  Toggle Text on Button Click
    function toggleText() {
      var text = document.getElementById("toggleText");
      if (text.innerHTML === "Hello, World!") {
        text.innerHTML = "Goodbye, World!";
      } else {
        text.innerHTML = "Hello, World!";
      }
    }

    //  Change Background Color on Button Click
    function changeColor() {
      document.body.style.backgroundColor = "cadetblue";
    }

    //  Show/Hide an Element
    function toggleElement() {
      var text = document.getElementById("toggleElement");
      if (text.style.display === "none") {
        text.style.display = "block";
      } else {
        text.style.display = "none";
      }
    }

    // Update Text on Button Click
    function updateText() {
      document.getElementById("updateText").innerHTML = "Updated Text!";
    }

    //  Calculate and Display Sum
    function calculateSum() {
      var num1 = parseFloat(document.getElementById("num1").value);
      var num2 = parseFloat(document.getElementById("num2").value);
      var sum = num1 + num2;
      document.getElementById("sumResult").innerHTML = "Sum: " + sum;
    }

    //  Change Text Color on Mouse Over
    function changeTextColor() {
      document.getElementById("mouseoverText").style.color = "green";
    }
    function resetTextColor() {
      document.getElementById("mouseoverText").style.color = "pink";
    }

    //  Alert Box on Button Click
    function showAlert() {
      alert("Hello! This is an alert box.");
    }
    //Display Random Number
    function displayRandomNumber() {
      var randomNumber = Math.floor(Math.random() * 100) + 1;
      document.getElementById("randomNumber").innerHTML = "Random Number: " + randomNumber;
    }

    //Change Text Content on Double Click
    function changeText() {
      document.getElementById("dblclickText").innerHTML = "Assalamu Alaikum";
    }

    //  Count Button Clicks
    var count = 0;
    function countClicks() {
      count++;
      document.getElementById("clickCount").innerHTML = "Clicks: " + count;
    }

    // Display Length of Text Input
    function displayLength() {
      var length = document.getElementById("textInput").value.length;
      document.getElementById("textLength").innerHTML = "Length: " + length;
    }

    //Convert Temperature from Celsius to Fahrenheit
    function convertTemperature() {
      var celsius = parseFloat(document.getElementById("celsius").value);
      var fahrenheit = (celsius * 9/5) + 32;
      document.getElementById("fahrenheit").innerHTML = "Fahrenheit: " + fahrenheit.toFixed(2);
    }

    //  Reverse a String
    function reverseString() {
      var str = document.getElementById("stringInput").value;
      var reversed = str.split('').reverse().join('');
      document.getElementById("reversedString").innerHTML = "Reversed String: " + reversed;
    }

    //  Calculate Factorial of a Number
    function calculateFactorial() {
      var num = parseInt(document.getElementById("factorialInput").value);
      var factorial = 1;
      for (var i = 1; i <= num; i++) {
        factorial *= i;
      }
      document.getElementById("factorialResult").innerHTML = "Factorial: " + factorial;
    }

    //  Change Font Size on Button Click
    function changeFontSize() {
      document.getElementById("fontText").style.fontSize = "38px";
    }

    //  Validate Email Format
    function validateEmail() {
      var email = document.getElementById("emailInput").value;
      var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      var isValid = regex.test(email);
      document.getElementById("emailResult").innerHTML = isValid ? "Valid Email" : "Invalid Email";
    }

    //  Change Text on Key Press
    function displayKey() {
      var key = document.getElementById("keyInput").value;
      document.getElementById("keyOutput").innerHTML = "You pressed: " + key;
    }

    // Count Words in Text Area
    function countWords() {
      var text = document.getElementById("textArea").value;
      var wordCount = text.trim().split(/\s+/).length;
      document.getElementById("wordCount").innerHTML = "Word Count: " + wordCount;
    }

    //  Display Current Date
    function displayDate() {
      var currentDate = new Date().toLocaleDateString();
      document.getElementById("currentDate").innerHTML = "Current Date: " + currentDate;
    }

    //  Change Background Color Based on Time of Day
    function changeBackgroundColor() {
      var hour = new Date().getHours();
      if (hour < 12) {
        document.body.style.backgroundColor = "lightyellow";
      } else if (hour < 18) {
        document.body.style.backgroundColor = "lightgreen";
      } else {
        document.body.style.backgroundColor = "lightblue";
      }
    }

    // Check if a Number is Even or Odd
    function checkEvenOdd() {
      var number = parseInt(document.getElementById("numberInput").value);
      var result = (number % 2 === 0) ? "Even" : "Odd";
      document.getElementById("evenOddResult").innerHTML = "The number is " + result;
    }

    //  Convert Text to Uppercase
    function convertToUppercase() {
      var text = document.getElementById("uppercaseInput").value;
      var uppercaseText = text.toUpperCase();
      document.getElementById("uppercaseResult").innerHTML = "Uppercase: " + uppercaseText;
    }

    //Convert Text to Lowercase
    function convertToLowercase() {
      var text = document.getElementById("lowercaseInput").value;
      var lowercaseText = text.toLowerCase();
      document.getElementById("lowercaseResult").innerHTML = "Lowercase: " + lowercaseText;
    }

    //  Calculate Area of a Circle
    function calculateCircleArea() {
      var radius = parseFloat(document.getElementById("radiusInput").value);
      var area = Math.PI * Math.pow(radius, 2);
      document.getElementById("circleArea").innerHTML = "Area: " + area.toFixed(2);
    }

    //  Change Text Color on Button Click
    function changeTextColor() {
      document.getElementById("colorText").style.color = "green";
    }

    // Display Alert on Form Submission
    function displayFormAlert(event) {
      event.preventDefault();
      var inputText = document.getElementById("formInput").value;
      alert("Form submitted with: " + inputText);
    }

    // Disable Button After Click
    function disableButton() {
      document.getElementById("disableButton").disabled = true;
    }

    // Display User's Age
    function displayAge() {
      var birthYear = parseInt(document.getElementById("birthYear").value);
      var currentYear = new Date().getFullYear();
      var age = currentYear - birthYear;
      document.getElementById("ageDisplay").innerHTML = "Your age is: " + age;
    }

    //  Change Background Color on Mouse Over
    function changeBackgroundColor() {
      document.body.style.backgroundColor = "orangered";
    }
    function resetBackgroundColor() {
      document.body.style.backgroundColor = "white";
    }

    //  Display Current Month
    function displayMonth() {
      var currentMonth = new Date().toLocaleString('default', { month: 'long' });
      document.getElementById("currentMonth").innerHTML = "Current Month: " + currentMonth;
    }

    // Calculate Square of a Number
    function calculateSquare() {
      var number = parseFloat(document.getElementById("squareInput").value);
      var square = Math.pow(number, 2);
      document.getElementById("squareResult").innerHTML = "Square: " + square;
    }

    // Greet User Based on Time of Day
    function greetUser() {
      var hour = new Date().getHours();
      var greeting;
      if (hour < 12) {
        greeting = "Good Morning!";
      } else if (hour < 18) {
        greeting = "Good Afternoon!";
      } else {
        greeting = "Good Evening!";
      }
      document.getElementById("greeting").innerHTML = greeting;
    }

    //Display Random Quote
    function displayQuote() {
      var quotes = [
        "Hala Madrid y nada más.",
        "Being bold in the shirt of Real Madrid is not easy.",
        "90 minutes at the Bernabéu are too long.",
        "You either die a hero or you live long enough to become the villain."
      ];
      var randomIndex = Math.floor(Math.random() * quotes.length);
      document.getElementById("randomQuote").innerHTML = quotes[randomIndex];
    }

    //  Change Font Style on Button Click
    function changeFontStyle() {
      document.getElementById("fontStyleText").style.fontFamily = "Courier New";
    }

    //  Toggle Background Color
    function toggleBackgroundColor() {
      document.body.style.backgroundColor = document.body.style.backgroundColor === 'white' ? 'gray' : 'white';
    }

    // Show Alert with Input Value
    function showAlertWithInput() {
      var input = document.getElementById("alertInput").value;
      alert("You entered: " + input);
    }

    // Calculate and Display Square Root
    function calculateSqrt() {
      var number = parseFloat(document.getElementById("sqrtInput").value);
      var sqrt = Math.sqrt(number);
      document.getElementById("sqrtResult").innerHTML = "Square Root: " + sqrt.toFixed(2);
    }

    // Change Text Alignment
    function changeTextAlignment() {
      var text = document.getElementById("alignmentText");
      text.style.textAlign = text.style.textAlign === "left" ? "right" : "left";
    }

    //  Highlight Text on Button Click
    function highlightText() {
      document.getElementById("highlightedText").style.backgroundColor = "yellow";
    }

    //  Display Current Day of the Week
    function displayDay() {
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var currentDay = days[new Date().getDay()];
      document.getElementById("currentDay").innerHTML = "Today is: " + currentDay;
    }

    //  Display Countdown Timer
    function startCountdown() {
      var seconds = parseInt(document.getElementById("countdownInput").value);
      var countdown = setInterval(function() {
        document.getElementById("countdownTimer").innerHTML = "Time left: " + seconds + "s";
        seconds--;
        if (seconds < 0) {
          clearInterval(countdown);
          document.getElementById("countdownTimer").innerHTML = "Time's up!";
        }
      }, 1000);
    }

    