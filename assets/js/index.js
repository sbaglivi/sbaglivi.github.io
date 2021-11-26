(function() {
emailjs.init("user_haCsY0fOrLBndrsWjqCj1");
})();
let form = document.getElementById("contact-form");
// var params = {
// name: 'John',
// reply_email: 'john@example.com',
// message: 'This is awesome!'
// };
let formData = new FormData(form);
function sendEmail(event){
    event.preventDefault();
    emailjs.sendForm('service_non92qv', 'template_jr2x0hh', this)
                    .then(function() {
                        console.log('SUCCESS!');
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
                }
form.addEventListener("submit", sendEmail)
// emailjs.send( 'gmail', 'feedback', params );