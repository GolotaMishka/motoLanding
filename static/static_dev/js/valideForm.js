$(".formValidation").on("submit", function(e){
  
  
  var hasError = false;
  
  $(".inputValidation").each(function(){
    var $this = $(this);
    
    if($this.val() == "" || $this.val() == null  ){
      hasError = true;
      $this.addClass("inputError");
      
      e.preventDefault();
    }if($this.val() != "" && $this.val() != null){
      $this.removeClass("inputError"); 
      console.log($this.val())
    }else{
      console.log($this.val())
      return true; 
    }
  }); //Input
  
  
}); //Form .submit


var input = document.getElementById('phone');
input.oninvalid = function(event) {
  event.target.setCustomValidity('Введи номер телефона в формате "0999999999"');
}