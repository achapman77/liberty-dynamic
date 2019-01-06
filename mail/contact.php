<?php
// Check for empty fields
if (empty($_POST['firstName'])      ||
   empty($_POST['lastName'])     ||
   empty($_POST['email'])     ||
   empty($_POST['phone'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    echo "No arguments Provided!";
    return false;
}

$firstName = strip_tags(htmlspecialchars($_POST['firstName']));
$lastName = strip_tags(htmlspecialchars($_POST['lastName']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));

// Create the email and send the message
$to = 'john@libertydynamic.com'; 
// Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Liberty Dynamic Contact Request from:  $firstName $lastName";
$email_body = "You have received a new message from the Liberty Dynamic contact form.\n\n"."Here are the details:\n\n$firstName $lastName\n$email_address\n$phone\n\nMessage:\n$message";
$headers = "From: Liberty Dynamic <info@libertydynamic.com>" . "\r\n"; 
// This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address" . "\r\n";
$headers .= "Bcc: adam.chapman@libertydynamic.com";
mail($to, $email_subject, $email_body, $headers);
return true;
