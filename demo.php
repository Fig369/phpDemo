<?php
include_once 'header.php';
?>
    <section class="index-intro">
        <h1>Welcome to HACK-A-NATOR</h1>
        <p>A website for you to generate hackathon ideas based on 3 simple topics</p>
        <p>Click on each card below to generate your topics for each Category</p>
    </section>

<section class="cardContainer">
<div class="card-categories-list">
    <div class="cardHolder embed-responsive">
    <button id="generatorCategory" class="button">
             <div class="embed-responsive">
            <div class="galleryCard">
            <img  src="img/questionmark.png" alt="Category" class="card-img-top embed-responsive-21by9">
                <div class="cardText">
                    <p class="nameText">Category</p>
                    <div id="getACategory"></div>
                </div>
            </div>
        </div>    
    </button>
    <button id="generatorFeature" class="button">
            <div class="galleryCard">
            <img  src="img/questionmark.png" alt="Feature" class="card-img-top embed-responsive-21by9">
                <div class="cardText">
                    <p class="nameText">Feature</p>
                    <div id="getAFeature"></div>
                </div>
            </div>
    </button> 
    <button id="generatorUserType" class="button">
            <div class="galleryCard">
            <img  src="img/questionmark.png" alt="User Type" class="card-img-top embed-responsive-21by9">
                <div class="cardText">
                    <p class="nameText">User Type</p>
                    <div id="getAUserType"></div>
                </div>
            </div>
    </button>
</section>
<script>
setCategory();
setFeature();
setUserType();
</script>
    

<?php
include_once 'footer.php';
?>