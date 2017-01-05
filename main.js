//http://fvi-grad.com:4004/email

var form = $('#contact-form');
var formBtn = $('#send-btn');

var x = document.querySelectorAll('li a');
console.log(x);
var redButton = document.getElementById('fancy');
redButton.addEventListener('click', function() {
    x[0].classList.add('yellow-button');
    x[1].classList.add('yellow-button');
    x[2].classList.add('yellow-button');
    x[3].classList.add('yellow-button');

});

form.submit(function(e) {
    e.preventDefault();
    $.ajax({
            url: 'http://fvi-grad.com:4004/email',
            method: 'POST',
            data: form.serialize()

         })
        .done(function() {
            formBtn.val('message send');
        })
        .fail(function() {
            formBtn.val('error send');

        })
})
