// $(document).ready(function() {
//    $("#signup").validate({
//        rules: {
//             fname: { required: true, minlength: 4 }
//     },
//     messages: {
//       fname: "Please enter minimum 4 letters"
//     }
//   });
// });


$("#signup").validate({
  errorPlacement: function(error, element) {
    error.insertAfter(element);
  },
  rules: { 
    fname: { 
    required: true, 
    minlength: 5
    },
    sname: {
        required: true,
        minlength: 5
    },
    mobile: {
        required: "Mobile number is required",
        minlength: "Minimum 10 digits podu da"
      }
    }
});


