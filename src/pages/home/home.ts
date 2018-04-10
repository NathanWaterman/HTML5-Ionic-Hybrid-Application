import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import * as $ from 'jquery';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  constructor(public nav: NavController) {

  }


    inputName: string;
    inputPass: string;
      
    showProfilePage() {
     setTimeout(() => {
        if (this.inputName.toLowerCase() === 'test' && this.inputPass.toLowerCase() === 'test') {
          this.nav.setRoot(ProfilePage);
        }
      },2800);
    }


  //initial onload animation
  ngOnInit(){
  	setTimeout(() => {
      $('.panel-right').animate({
      	"left":"0%",
      	"opacity": "1"
      }, 1000);
    }, 2600);
    //change settimeout to 2600 mill for ios build

    setTimeout(() => {
  	  $('.panel-left').animate({"opacity":"1"}, 1200);
    }, 2800);
    //change settimeout to 2800 mill for ios build

    setTimeout(() => {
      $('.tagline,.footer').animate({"opacity":"1"}, 1200);
      $('.input-form').animate({"opacity":"1"}, 1200);
  	  $('.input-trigger').animate({"width":"80%"}, 1200);
    }, 2400);

    setTimeout(() => {
      $('.next-btn').animate({
        "width":"100px",
        "opacity":"1"
      }, 700);
    }, 3000);


    //blur and focus event functions
    function blurEvent(){
      //set right panel back to reset
       $('.panel-right').animate({
          "left":"0%"
        }, 1000);

       //set tagline opacity back to reset
      $('.tagline').animate({
        "opacity":"1"
      }, 1200);

      //reset next btn back to reset
      $('.next-btn,.submit-btn').removeAttr("style");
      $('.next-btn,.submit-btn').removeClass('next-btn-focus-trigger');
      $('.next-btn,.submit-btn').addClass('next-btn-blur-trigger');
      setTimeout(() => {
        $('.next-btn').animate({
          "width":"100px",
          "opacity":"1"
        }, 400);
      }, 600);

       setTimeout(() => {
        $('.submit-btn').animate({
          "width":"125px",
          "opacity":"1"
        }, 400);
      }, 600);

      //hide back arrow
      $('.back-arrow-container').animate({
        "opacity":"0"
      }, 600);

    }//end blurEvent function

    function focusEvent(){
      //animate right panel back off page to the right on input click
      $('.panel-right').animate({
        "left":"30%"
      }, 700);

      //set tagline opacity to zero
      $('.tagline').animate({
        "opacity":"0"
      }, 200);

      //move next button to top
      $('.next-btn,.submit-btn').removeClass('next-btn-blur-trigger');
      $('.next-btn,.submit-btn').addClass('next-btn-focus-trigger');
      $('.next-btn,.submit-btn').css({
        "width":"0px",
        "opacity":"0"
      });

      //delay animation of next btn
      setTimeout(() => {
        $('.next-btn').animate({
          "width":"100px",
          "opacity":"1"
        }, 300);
      }, 400);
      setTimeout(() => {
        $('.submit-btn').animate({
          "width":"125px",
          "opacity":"1"
        }, 300);
      }, 400);

      //show back arrow
      $('.back-arrow-container').animate({
        "opacity":"1"
      }, 600);

    }//end focusEvent function




    //global functions for user animation blur and focus
    function userAnimateBlur(){
      //reset input back to. reset
      $('.username-container').animate({'top':'0px'});
      $('#username').removeClass('input-adjust');
      $('#username').animate({
        "width":"80%",
      }, 600);

      $('.remember-me-container').animate({'top':'0px'});

      //decrease font size for label back to reset
      $('#username').removeClass('input-focus-adjust');
      $('.float-user').removeClass('floating-label-adjust');
    }
    function userAnimateFocus(){
      //$('.input-trigger').animate({"width":"100%"}, 700);
      $('.username-container').animate({'top':'-110px'});
      $('#username').addClass('input-adjust');
      $('#username').animate({
        "width":"140%",
      }, 600);

      $('.remember-me-container').animate({'top':'-190px'});

      //increase font size for input focus
      $('#username').addClass('input-focus-adjust');
      $('.float-user').addClass('floating-label-adjust');
    }





    //global functions for user animation blur and focus
    function passAnimateBlur(){
      $('.username-container').show();

      //reset input back to. reset
      $('.password-container').animate({'top':'0px'});
      $('#password').removeClass('input-adjust');
      $('#password').animate({
        "width":"80%",
      }, 600);

      //decrease font size for label back to reset
      $('#password').removeClass('input-focus-adjust');
      $('.float-pass').removeClass('floating-label-adjust');

      //hide thumb print
      $('.thumb-print-btn').hide();
    }
    function passAnimateFocus(){
      $('.username-container').hide();

      $('.password-container').animate({'top':'-110px'});
      $('#password').addClass('input-adjust');
      $('#password').animate({
        "width":"140%",
      }, 600);

      //increase font size for input focus
      $('#password').addClass('input-focus-adjust');
      $('.float-pass').addClass('floating-label-adjust');

      //show thumb print
      $('.thumb-print-btn').fadeIn(1500);
    }


    var click = false;
    var submitClick = false;
    var radioClicked = false;
    // var userInput = $.trim( $('#username').val() );
    // var passInput = $.trim( $('#password').val() );

    //input username focus & Blur
    $('#username').on('blur', function(event) {
      event.preventDefault();
      //global
      if(click === false && radioClicked === false){
        blurEvent();
        userAnimateBlur();
        $('.reset-username').hide();
      }
      if(click === true){
        click = false;
      }

      if(radioClicked === true){
        $('#username').focus();
        $('.next-btn').css({
          "width":"100px",
          "opacity":"1"
        });
        radioClicked = false;
      }

      var input = $(this).val();
      if(input !== ''){
        $('.float-user').addClass('floating-label-adjust-blur');
      }
      

    })
    .on('focus', function() {
      //global
      var input = $(this).val();
      if(input == ''){
        $('.next-btn').addClass('disabled');
        $('.next-btn').removeClass('active');
      }

      $('.float-user').removeClass('floating-label-adjust-blur');
      focusEvent();
      userAnimateFocus();

    });


    //input password focus & Blur
    $('#password').on('blur', function() {
      //global

      if(submitClick === false){
        blurEvent();
      }
      if(submitClick === true){
        submitClick = false;
      }

      passAnimateBlur();

      var input = $(this).val();
      if(input !== ''){
        $('.float-pass').addClass('floating-label-adjust-blur');
      }
      var inputUserFix = $('#username').val();
      if(inputUserFix !== ''){
        $('.float-user').addClass('floating-label-adjust-blur');
      }
      $('.reset-password').hide();

    })
    .on('focus', function() {
      //global
      var input = $(this).val();
      if(input == ''){
        $('.next-btn').addClass('disabled');
        $('.next-btn').removeClass('active');
      }
      $('.float-pass').removeClass('floating-label-adjust-blur');
      focusEvent();
      passAnimateFocus();

    });



      //check if username input has a value
      $('#username').keyup(function() {
         var input = $(this).val();
         if( input !== '') {
             $('.next-btn').removeClass('disabled');
             $('.next-btn').addClass('active');
             $('.reset-username').show();
         }
         else if( input == '') {
             $('.next-btn').addClass('disabled');
             $('.next-btn').removeClass('active');
             $('.reset-username').hide();
         } 
      });

      //check if username input has a value
      $('#password').keyup(function() {
           var input = $(this).val();
           if( input !== '') {
               $('.next-btn').removeClass('disabled');
               $('.next-btn').addClass('active');
               $('.reset-password').show();

               //show sign in btn if password field is filled out
               //hide next btn
               $('.next-btn').css({
                 'display':'none'
               });
               $('.submit-btn').css({
                 'display':'table'
               });
           }
           else if( input == '') {
               $('.next-btn').addClass('disabled');
               $('.next-btn').removeClass('active');
               $('.reset-password').hide();

               //show sign in btn if password field is filled out
               //hide next btn
               $('.next-btn').css({
                 'display':'table'
               });
               $('.submit-btn').css({
                 'display':'none'
               });
           } 
      });


      //check if both inputs have value
      //if both input have value on blur then add Sign In btn
      $('#username, #password').blur(function(event)
      {

        event.preventDefault();
        if(submitClick === false){
          if( $('#username').val() !== '' && $('#password').val() !== '') {
               $('.next-btn').css({
               'display':'none'
               });
               $('.submit-btn').css({
                 'display':'table'
               });
          }
        }
        if(submitClick === true){
          $('.submit-btn').css({
                 'display':'none'
               });
        }

      });
    


      //check radio button and check focus vs blur
    $(".remember-me-container").on('click mousedown mouseup',function () {
        radioClicked = true;
        console.log(radioClicked);

        $("#test1").prop("checked", true);

        return false;
    });


      //submit/next button 
    $('.next-btn').on('click mousedown mouseup',function(){

      //check if next btn has class active
        if ($(this).hasClass('active')){

            click = true;
           
            userAnimateBlur();
            $('#password').focus();
            $('.next-btn').addClass('disabled');
            $('.next-btn').removeClass('active');
        }

      return false;
    });


    $('.submit-btn').on('click mousedown mouseup',function(){

      //check if next btn has class active
        if ($(this).hasClass('active')){

          submitClick = true;

          // $('.tagline').hide();
          // $('.form-container').hide();
          // $('.register-container').hide();

          $('.tagline').css({
             'display':'none',
             'opacity':'0'
          });
          $('.form-container').css({
             'opacity':'0'
          });
          $('.register-container').css({
             'opacity':'0'
          });
          $('.progressbar-container').fadeIn();
          $(this).css({
             'opacity':'0'
           });

          $('.panel-right').animate({
            "left":"30%"
          }, 700);

          //hide error state
          $('.error-msg-container').hide();


          //after 5 seconds show error state
          setTimeout(() => {


            submitClick = false;

            //hide loading bar
           $('.progressbar-container').hide();

           $('.back-arrow-container').fadeOut();
           
           $('.reset-username').hide();
           $('.reset-password').hide();
           

          //set right panel back to reset
           $('.panel-right').animate({
              "left":"0%"
            }, 1000);


          $('.next-btn,.submit-btn').removeClass('next-btn-focus-trigger');
          $('.next-btn,.submit-btn').addClass('next-btn-blur-trigger');


          $('.tagline').css({
            'display':'block',
             'opacity':'1'
          });
          $('.form-container').css({
             'opacity':'1'
          });
          $('.register-container').css({
             'opacity':'1'
          });

           //hide next btn
           $('.next-btn').remove();
           $('.next-btn').css({
             'display':'none',
             'opacity':'0'
           });

           //display submit btn
           $(this).css({
             'display':'table',
             'opacity':'1'
           });

           //hide logo
           $('.logo').show();

           //add error border color to input
           $('.input-trigger').addClass('error-border-color');
           $('.floating-label').addClass('error-color');

           //animate error msg
           $('.error-msg-container').show();
           $('.error-msg-container').animate({
            "opacity":"1",
           }, 500);


           $('.input-trigger').on('click mousedown mouseup',function(){
             $(this).removeClass('error-border-color');
             $(this).siblings().removeClass('error-color');
           });


          }, 3000);//end set timeout
          
        }//end if 

    });


    //dismiss error msg
     $('.dismiss-btn').on('click mousedown mouseup',function(){
       $('.error-msg-container').slideUp();
     });





    //back button sets animation back to beginning
    // $('.back-arrow-container').on('click mousedown mouseup',function(){
    //     blurEvent();
    // });


  }//end ngOninit

}
