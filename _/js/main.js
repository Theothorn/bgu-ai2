$(function(){$(".modalphotos img").on("click",function(){$("#modal").modal({show:!0});var o=this.src.substr(0,this.src.length-7)+".jpg";$("#modalimage").attr("src",o),$("#modalimage").on("click",function(){$("#modal").modal("hide")})})});