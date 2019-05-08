$(document).ready(function () {
    $('#popupLogin').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('whatever') // Extract info from data-* attributes

        if(recipient == "@reg") {                
            $( '#log-nav-item' ).removeClass( 'active' );
            $( '#reg-nav-item' ).addClass( 'active' );

            $( '#register' ).addClass( 'active' );
            $( '#login' ).removeClass( 'active' );

            $( '#register' ).addClass( 'show' );
            $( '#login' ).removeClass( 'show' );
        }
        else if(recipient == "@log") {
            $( '#reg-nav-item' ).removeClass( 'active' );
            $( '#log-nav-item' ).addClass( 'active' );

            $( '#register' ).removeClass( 'active' );
            $( '#login' ).addClass( 'active' );

            $( '#register' ).removeClass( 'show' );
            $( '#login' ).addClass( 'show' );
        }
    });

    // $('#').bind('click', function(){
    //     $.ajax({
    //         url: '{% url "register" %}',
    //         type: 'post',
    //         data: ({ input: inputRegex, answer: answerRegex }),
    //         beforeSend: function(){
    //             // $('#answer_request').hide();
    //             // $('#result').show();
    //             // $('#result').text('Обработка..');
    //         },
    //         success: function(data) {
    //             // $('#result').html(data.correctness);
    //         },
    //         error: function(xhr,errmsg,err){
    //             $('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
    //               " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
    //             console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
    //         }
    //     });
    // });

//     $("#signup_btn").on("submit", function(event){
//         alert('!!');
//         if(!isValid){
//             event.preventDefault();    //stop form from submitting
//         }
//         email = $("#inputEmail").val();
//         fname = document.getElementById("inputFname").value;
//         lname = document.getElementById("inputLname").value;
//         password1 = document.getElementById("inputPassword1").value;
//         password2 = document.getElementById("inputPassword2").value;
//         csrfmiddlewaretoken = document.getElementsByName("csrfmiddlewaretoken")[0].value;
//         $("#erroremail").html("");
//         $("#errorpass").html("");
//         console.log('Succeess');

//         $.ajax({
//             url:'/auth/signup/',
//             type:"POST",
//             data:{
//                 'csrfmiddlewaretoken': csrfmiddlewaretoken,
//                 'first_name':fname,
//                 'last_name':lname,
//                 'email':email,
//                 'password1':password1,
//                 'password2':password2,
//             },
//             success : function(data){
//                 console.log(data['message']);
//                 if(data['message'] == "Success"){
//                     console.log('Succeess');
//                     window.location = "/"
//                 }
//                 else{
//                     if("email" in data['message'])
//                         $("#erroremail").html(data['message']['email'][0]);
//                     if("password2" in data['message'])
//                         $("#errorpass").html(data['message']['password2'][0]);
//                 }
//             }
//         })
//     });
});

// function login(){
//     email = document.getElementById("inputUsername").value;
//     password = document.getElementById("inputPassword").value;
//     csrfmiddlewaretoken = document.getElementsByName("csrfmiddlewaretoken")[0].value;
//     $("#errorlogin").html("");
//     $.ajax({
//         type:"POST",
//         url:'/auth/login/',
//         data:{
//             'csrfmiddlewaretoken': csrfmiddlewaretoken,
//             'email':email,
//             'password':password,
//         },
//         success : function(data){
//             console.log(data);
//             if(data['message'] == "Success"){
//                 location.reload();
//             }
//             else if(data['message'] == "inactive"){
//                 $("#errorlogin").html("Please verify this E-mail address.");
//             }
//             else{
//                 $("#errorlogin").html("The E-mail and Password do not match.");
//             }
//         }
//     });
// }

