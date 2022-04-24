<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>ASU | Home</title>
        <!-- Favicon-->
        <link rel="icon" type="image/x-icon" href="assets/favicon.png" />
       <!--  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" /> -->
        <link href="css/styles.css" rel="stylesheet" />
    </head>
    <body class="d-flex flex-column h-100">
        <main class="flex-shrink-0">
            <!-- Navigation-->
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container px-5">
                    <a class="navbar-brand" href="Index.php"><img src="assets/a.png" width="50"</img><img src="assets/s.png" width="50"</img><img src="assets/u.png" width="50"</img><img src="assets/dog.png" width="50"</img></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item"><a class="nav-link" href="Index.php">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
                            <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>

                            <?php
                                session_start();
                                if(isset($_SESSION["ID"]))
                                {
                                    echo "<li class=nav-item><a class=nav-link href=Php/Logout.php><b>Logout</b></a></li>";
                                }
                                else
                                {
                                    echo "<li class=nav-item><a class=nav-link href=Login.html><b>Login</b></a></li>";
                                }
                            ?>

                            <li class="nav-item"><a class="nav-link" href="BackEndSignUp.html"><b>Sign Up</b></a></li>
                            <li class="nav-item"><a class="nav-link" href="Php/ListAllUsers.php"><b>Users</b></a></li>
                            <li class="nav-item"><a class="nav-link" href="register.html"><b>Register</b></a></li>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header class="bg-primary py-5">
                <div class="container px-5">
                    <div class="row gx-5 align-items-center justify-content-center">
                        <div class="col-lg-8 col-xl-7 col-xxl-6">
                            <div class="my-5 text-center text-xl-start">
                                <h1 class="display-5 fw-bolder text-white mb-2">Whiskers need houses too...</h1>
                                <p class="lead fw-normal text-white-50 mb-4">We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will love you more than anybody else in the world, you will see!</p>
                                <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">

                                    <?php
                                        if(isset($_SESSION["ID"]))
                                        {
                                            echo "<a class=\"btn btn-primary btn-lg px-4 me-sm-3\" href=Php/Logout.php>Logout</a>";
                                        }
                                        else
                                        {
                                            echo "<a class=\"btn btn-primary btn-lg px-4 me-sm-3\" href=Login.html>Login</a>";
                                        }
                                    ?>

                                    <a class="btn btn-outline-light btn-lg px-4" href="about.html">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img class="img-fluid rounded-3 my-5" src="assets/buddy.png" alt="buddy" /></div>
                    </div>
                </div>
            </header>
            <!-- Features section-->
            <section class="py-5" id="features">
                <div class="container px-5 my-5">
                    <div class="row gx-5">
                        <div class="col-lg-4 mb-5 mb-lg-0"><h2 class="fw-bolder mb-0">Our shelter's services...</h2></div>
                        <div class="col-lg-8">
                            <div class="row gx-5 row-cols-1 row-cols-md-2">
                                <div class="col mb-5 h-100">
                                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-collection"></i></div>
                                    <h2 class="h5">Capture and Deliver </h2>
                                    <p class="mb-0">We offer pet collection and relocation to our care unit.</p>
                                </div>
                                <div class="col mb-5 h-100">
                                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-building"></i></div>
                                    <h2 class="h5">Premium Care</h2>
                                    <p class="mb-0">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                                </div>
                                <div class="col mb-5 mb-md-0 h-100">
                                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-toggles2"></i></div>
                                    <h2 class="h5">Featured title</h2>
                                    <p class="mb-0">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                                </div>
                                <div class="col h-100">
                                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-toggles2"></i></div>
                                    <h2 class="h5">Featured title</h2>
                                    <p class="mb-0">Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           