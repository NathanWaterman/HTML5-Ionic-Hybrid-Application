import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


 

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit{

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  ngOnInit(){

  	//define template
	var template = $('.section1').clone();
	var sectionsCount = 0;

	$('body').on('click mousedown mouseup', '.addNewsection', function() {
	    sectionsCount++;
	    template.clone().children().each(function(){
	        var newId = this.id + sectionsCount;
	        $(this).prev().attr('for', newId);
	        this.id = newId;

	        $(this).find('input[type=text]').val('').css('border-bottom','1px solid #000');
	        $(this).find('input[type=text]').prop('disabled', false);

	     //    $(this).find('input[type=text]').on('blur',function(){
		    //      $(this).attr('disabled','disabled');
		    //      $(this).css({'border-bottom':'0px'});
		    // });
		    $(this).find('.label').css('display','block');
		    $(this).find('.make-primary').hide();
		    $(this).find('.remove-btn').hide();
		    $(this).find('.save').css('display','inline-block');
		    $(this).find('.cancel').css('display','inline-block');
		    $(this).find('input[type=text]').addClass('input-margin-fix');
		    $(this).addClass('margin-fix');


	    }).end()
	    .appendTo('#sections-container');

	    //remove added section in household
		$('.remove-btn,.cancel').on('click mousedown mouseup',function(){
			console.log(sectionsCount);
			sectionsCount--;
			$(this).closest('.section1').remove();
		});

		//remove added section in household
		$('.save').on('click mousedown mouseup',function(){
			$(this).hide();
			$(this).siblings().hide();
			$(this).parent().siblings().removeClass('margin-fix');
			$(this).parent().siblings().find('input[type=text]').removeClass('input-margin-fix');
			$(this).parent().siblings().find('input[type=text]').css('border-bottom','0px');
			$(this).parent().siblings().find('.make-primary').show();
		    $(this).parent().siblings().find('.remove-btn').show();
		    $(this).parent().siblings().find('.label').hide();
		    $(this).parent().siblings().find('input[type=text]').prop('disabled', true);
		});

	    return false;
	});








	//edit nickname
    $(".edit").on('click',function() {
	    var contentEdit = $('.nickname').attr('contenteditable');

	    if (contentEdit == 'false') {
	        $('.nickname').attr('contenteditable','true');
	        $(".save-btn").show();
	        $(".edit-pencil-btn").hide();
	        $('.nickname').css({'border-bottom':'1px solid #000'});
	    }
	    else {
	        $('.nickname').attr('contenteditable','false');
	        $(".save-btn").hide();
	        $(".edit-pencil-btn").show();
	        $('.nickname').css({'border-bottom':'0px solid #000'});
	    }
	});
  	
	var trIDModal1;
	var idModal1;
	var trID;
	var id;
	var trIDModal3;
	var idModal3;

	//loop through tables and add id
	function loopTable1(){
		$('#table1 tr').each(function(index){
	       idModal1 = $(this).prop("id", index);
	    });
	}loopTable1();

	function loopTable2(){
		$('#table2 tr').each(function(index){
	       id = $(this).prop("id", index);
	    });
	}loopTable2();

	function loopTable3(){
		$('#table3 tr').each(function(index){
	       idModal3 = $(this).prop("id", index);
	    });
	}loopTable3();

	//clear input field when add new button is clicked
	function clearInput1(){
		$(".addNewBtnModal1").on('click',function(){
			$('.modal1 form input').val('');
		});
	}clearInput1();

	function clearInput2(){
		$(".addNewBtnModal2").on('click',function(){
			$('.modal2 form input').val('');
		});
	}clearInput2();

	function clearInput3(){
		$(".addNewBtnModal3").on('click',function(){
			$('.modal3 form input').val('');
		});
	}clearInput3();




	//
	//Append input data from modal into table rows
	//

	function addRowModal1(){
			var x = 3;
	        $(".add-modal1-field").on('click',function(){

	        	if(x >= 3){
	        		var newID = x++;
	        	}
	            var fnameModal1 = $("#fnameModal1").val();
	            var relationship = $("#relationship").val();
	            var age = $("#age").val();

	            var markupModal1 = $("<tr id=" + newID + "><td><div class='edit-nameModal1' contenteditable='false'>" + fnameModal1 + "</div></td><td><div class='edit-relationship' contenteditable='false'>" + relationship +"</div></td><td><div class='edit-age' contenteditable='false'>" +  age  +"</div></td><td><a href='#openModal1B' class='edit-row'><img src='./assets/imgs/pencil.svg'/></a></td></tr>");

	            $("#table1").append(markupModal1);
	            editRowModal1();
	        });
	}addRowModal1();


	function addRowModal2(){
			var x = 3;
	        $(".add-modal2-field").on('click',function(){

	        	if(x >= 3){
	        		var newID = x++;
	        	}
	            var fname = $("#fname").val();
	            var role = $("#role").val();
	            var company = $("#company").val();
	            var phone = $("#phone").val();
	            var newEmail = $("#newEmail").val();

	            var markup = $("<tr id=" + newID + "><td><div class='edit-name' contenteditable='false'>" + fname + "</div></td><td><div class='edit-role' contenteditable='false'>" + role +"</div></td><td><div class='edit-company' contenteditable='false'>" +  company  +"</div></td><td><div class='link edit-email' contenteditable='false'>" + phone + "</div><div contenteditable='false' class='link edit-phone'>" + newEmail + "</div></td><td><a href='#openModal2B' class='edit-row'><img src='./assets/imgs/pencil.svg'/></a></td></tr>");

	            $("#table2").append(markup);
	            editRowModal2();
	        });
	}addRowModal2();

	function addRowModal3(){
			var x = 3;
	        $(".add-modal3-field").on('click',function(){

	        	if(x >= 3){
	        		var newID = x++;
	        	}
	            var organization = $("#organization").val();
	            var type = $("#type").val();
	            var organizationRole = $("#organizationRole").val();
	            var website = $("#website").val();

	            var markupModal3 = $("<tr id=" + newID + "><td><div class='edit-organization' contenteditable='false'>" + organization + "</div></td><td><div class='edit-type' contenteditable='false'>" + type + "</div></td><td><div class='edit-organizationRole' contenteditable='false'>" + organizationRole +"</div></td><td><div class='link edit-website' contenteditable='false'>" + website +"</div></td><td><a href='#openModal3B' class='edit-row'><img src='./assets/imgs/pencil.svg'/></a></td></tr>");

	            $("#table3").append(markupModal3);
	            editRowModal3();
	        });
	}addRowModal3();



	//
	//open edit modal to edit table rows
	//

	function editRowModal1(){
	    //edit table row
	    $(".edit-row").on('click',function() {
	    	//get pre determined values

		   var editNameModal1 = $(this).parent().siblings().find('.edit-nameModal1').text();
		   var editRelationshipModal1 = $(this).parent().siblings().find('.edit-relationship').text();
		   var editAge = $(this).parent().siblings().find('.edit-age').text();

		   //find id of row
		   trIDModal1 = $(this).parent().parent().attr('id');

		   //console.log(trID);

		   //populate pre determined values into modal
		   $('#fnameModal1Edit').val(editNameModal1);
		   $('#relationshipEdit').val(editRelationshipModal1);
		   $('#ageEdit').val(editAge);

		   $('.delete-btn-modal1').on('click',function(){
				$("#table1 tr:eq(" + trIDModal1 + ")").remove();
			});

		   completeRowModal1();
		   
		});
	}editRowModal1();

	function editRowModal2(){
	    //edit table row
	    $(".edit-row").on('click',function() {
	    	//get pre determined values

		   var editName = $(this).parent().siblings().find('.edit-name').text();
		   var editRole = $(this).parent().siblings().find('.edit-role').text();
		   var editCompany = $(this).parent().siblings().find('.edit-company').text();
		   var editPhone = $(this).parent().siblings().find('.edit-phone').text();
		   var editEmail = $(this).parent().siblings().find('.edit-email').text();

		   //find id of row
		   trID = $(this).parent().parent().attr('id');

		   //console.log(trID);

		   //populate pre determined values into modal
		   $('#fnameEdit').val(editName);
		   $('#roleEdit option[value="' + editRole + '"]').attr("selected", "selected");
		   $('#companyEdit').val(editCompany);
		   $('#phoneEdit').val(editPhone);
		   $('#newEmailEdit').val(editEmail);

		   $('.delete-btn-modal2').on('click',function(){
				$("#table2 tr:eq(" + trID + ")").remove();
			});

		   completeRowModal2();

		   
		});
	}editRowModal2();

	function editRowModal3(){
	    //edit table row
	    $(".edit-row").on('click',function(e) {
	    	//get pre determined values

	    	e.stopPropagation();

		   var editOrganization = $(this).parent().siblings().find('.edit-organization').text();
		   var editType = $(this).parent().siblings().find('.edit-type').text();
		   var editorganizationRole = $(this).parent().siblings().find('.edit-organizationRole').text();
		   var editWebsite = $(this).parent().siblings().find('.edit-website').text();

		   //find id of row
		   trIDModal3 = $(this).parent().parent().attr('id');

		   //console.log(trID);

		   //populate pre determined values into modal
		   $('#organizationEdit').val(editOrganization);
		   $('#typeEdit').val(editType);
		   $('#organizationRoleEdit option[value="' + editorganizationRole + '"]').attr("selected", "selected");
		   $('#websiteEdit').val(editWebsite);


		   	$('.delete-btn-modal3').on('click',function(){
				$("#table3 tr:eq(" + trIDModal3 + ")").remove();
			});

		   completeRowModal3();

		   
		});
	}editRowModal3();


	//
	//append edited modal back into same row
	//

	function completeRowModal1(){
		var newTrID = trIDModal1;

		$(".edit-modal1-field").on('click',function() {

			var editedNameModal1 = $("#fnameModal1Edit").val();
	        var editedRelationshipModal1 = $("#relationshipEdit").val();
	        var editedAge = $("#ageEdit").val();


			$('#table1 tr').each(function() {
				var setID = $(this).attr('id', newTrID);
				var x = setID.attr('id');
				console.log(newTrID);
				console.log(x);
				if(x == newTrID){
					console.log('success');
					
					var editedMarkupModal1 = $("<td><div class='edit-nameModal1' contenteditable='false'>" + editedNameModal1 + "</div></td><td><div class='edit-relationship' contenteditable='false'>" + editedRelationshipModal1 +"</div></td><td><div class='edit-age' contenteditable='false'>" +  editedAge  +"</div></td><td><a href='#openModal1B' class='edit-row'><img src='./assets/imgs/pencil.svg'/></a></td>");

					$("#table1 tr:eq(" + x + ") td").remove();
		            $("#table1 tr:eq(" + x + ")").append(editedMarkupModal1);

		            return false;
				}
			});
			// return false;
		});
	}

	function completeRowModal2(){
		var newTrID = trID;

		$(".edit-modal2-field").on('click',function() {

			var editedFname = $("#fnameEdit").val();
	        var editedRole = $("#roleEdit").val();
	        var editedCompany = $("#companyEdit").val();
	        var editedPhone = $("#phone").val();
	        var editedEmail = $("#phoneEdit").val();


			$('#table2 tr').each(function() {
				var setID = $(this).attr('id', newTrID);
				var x = setID.attr('id');
				console.log(newTrID);
				console.log(x);
				if(x == newTrID){
					console.log('success');
					

					var editedMarkup = $("<td><div class='edit-name' contenteditable='false'>" + editedFname + "</div></td><td><div class='edit-role' contenteditable='false'>" + editedRole +"</div></td><td><div class='edit-company' contenteditable='false'>" +  editedCompany  +"</div></td><td><div class='link edit-email' contenteditable='false'>" + editedPhone + "</div><div contenteditable='false' class='link edit-phone'>" + editedEmail + "</div></td><td><a href='#openModal2B' class='edit-row'><img src='./assets/imgs/pencil.svg'/></a></td>");

					$("#table2 tr:eq(" + x + ") td").remove();
		            $("#table2 tr:eq(" + x + ")").append(editedMarkup);

		            return false;
				}
			});
			// return false;
		});
	}

	function completeRowModal3(){
		var newTrID = trIDModal3;

		$(".edit-modal3-field").on('click',function() {

			var editedOrganization = $("#organizationEdit").val();
	        var editedType = $("#typeEdit").val();
	        var editedOrganizationRole = $("#organizationRoleEdit").val();
	        var editedWebsite = $("#websiteEdit").val();


	  //       var editedMarkupModal3 = $("<td><div class='edit-organization' contenteditable='false'>" + editedOrganization + "</div></td><td><div class='edit-type' contenteditable='false'>" + editedType + "</div></td><td><div class='edit-organizationRole' contenteditable='false'>" + editedOrganizationRole +"</div></td><td><div class='link edit-website' contenteditable='false'>" + editedWebsite +"</div></td><td><a href='#openModal3B' class='edit-row'><img src='./assets/imgs/pencil.svg'/></a></td>");

			// $("#table3 tr:eq(" + newTrID + ") td").remove();
   //          $("#table3 tr:eq(" + newTrID + ")").append(editedMarkupModal3);



			$('#table3 tr').each(function() {
				var setID = $(this).attr('id', newTrID);
				var x = setID.attr('id');
				console.log(newTrID);
				console.log(x);
				if(x == newTrID){
					console.log('success');
					

					var editedMarkupModal3 = $("<td><div class='edit-organization' contenteditable='false'>" + editedOrganization + "</div></td><td><div class='edit-type' contenteditable='false'>" + editedType + "</div></td><td><div class='edit-organizationRole' contenteditable='false'>" + editedOrganizationRole +"</div></td><td><div class='link edit-website' contenteditable='false'>" + editedWebsite +"</div></td><td><a href='#openModal3B' class='edit-row'><img src='./assets/imgs/pencil.svg'/></a></td>");

					$("#table3 tr:eq(" + x + ") td").remove();
		            $("#table3 tr:eq(" + x + ")").append(editedMarkupModal3);

		            return false;
				}
			});
			// return false;
		});
	}


  }

}





