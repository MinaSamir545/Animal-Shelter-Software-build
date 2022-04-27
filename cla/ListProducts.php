<?php
   include_once "Header.php";
?>

<!-- products -->
<div  class="products">
   <div class="container">
      <div class="row">
         <div class="col-md-12">
            <div class="titlepage">
               <h2>Our Products</h2>
            </div>
         </div>
      </div>
      <div class="row">
         <div class="col-md-12">
            <div class="our_products">
               <div class="row">

                  <?php
                     $Myfile = fopen("Products.txt", "r+") or die("Unable to open file!");
                     while (!feof($Myfile))
                     {
                        $line = fgets($Myfile);
                        $ArrayLine = explode("~", $line);
                     
                  ?>

                     <div class="col-md-4 margin_bottom1">
                        <div class="product_box">
                           <figure><img src="<?php echo $ArrayLine[2];?>" alt="#"/></figure>
                           <h3><?php echo $ArrayLine[1];?> (<?php echo $ArrayLine[3];?>)</h3>
                        </div> 
                     </div>
                     
                  <?php
                     }
                  ?>
                  <div class="col-md-12">
                     <a class="read_more" href="#">See More</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
<!-- end products -->

<?php
   include_once "Footer.php";
?>
