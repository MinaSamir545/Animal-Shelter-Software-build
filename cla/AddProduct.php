<?php
    session_start();
    if(!isset($_SESSION["Email"]))
    {
        header("location: listp.php");
    }
    include_once "Header.php";
?>

<!--  contact -->
<div class="contact">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2>Contact Now</h2>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-md-10 offset-md-1">
                  <form id="request" class="main_form" method="Post" action="AddProductController.php" enctype="multipart/form-data">
                     <div class="row">
                        <div class="col-md-12 ">
                           <input class="contactus" placeholder="Id" type="text" name="Id"> 
                        </div>
                        <div class="col-md-12 ">
                           <input class="contactus" placeholder="Product Name" type="text" name="ProductName"> 
                        </div>
                        <div class="col-md-12">
                           <input class="contactus" placeholder="Price" type="int" name="Price"> 
                        </div>
                        <div class="col-md-12">
                           <input class="contactus" placeholder="Photo" type="file" name="ProductImageFile">                          
                        </div>
                        <div class="col-md-12">
                           <button class="send_btn">Send</button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
      <!-- end contact -->

<?php
    include_once "Footer.php";
?>