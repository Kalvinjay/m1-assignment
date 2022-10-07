        var photos = [];
        var fileNames = [];
        var imageList =[];
        var image; 
        var openList1 = "<li class='photo";
        var openList2 = "'>";
        var closeList = "</li>";
        var openCaptionTag = "<p class='petadoptphoto1'>";
        var closeCaptionTag = "</p>";
        var openDescTag = "<div id='desc'class='petphotoadoptdesc1' onclick='openpopup()'>";
        var closeDescTag = "</div>";
        var captionText = [
            "Create bonds",
            "Waiting",
            "Greeting",
            "Siblings","Puppies"
            ,"Loneliness"
            ,"Own Space","Water"
            ,"Full"
            ,"Workers"
        ];
        var descriptions = ["Create bonds that will last forever","Waiting to be adopted","Greeting new parents with kisses","You can also adopt siblings","Even puppies are available for adoption","Most dogs wait a long time to be adopted are lonely","Each dog is given its own crate/personal space","Every dog gets their own water bowl","Shelters sometimes run out of space for dogs","Workers show endless love for these dogs"];
    
        var openLink = "<a href='#";
        var openLinkClose = "'>";
        var closeLink = "</a>";
        var infoText = [
            "<p>Most shelter dogs are looking to create an unbreakable bond with its new owner.</p>",
            "<p>Most shelter dogs spends indefinite amount of time waiting to be adopted</p>",
                            "<p>The reaction from puppies/dogs being adopted is an unexplainable feeling</p>",
                            "<p>Sometimes you may find siblings that have can be adopted all together</p>",
                            "<p>Sometimes you may find new born puppies who are available for adoption</p>",
                            "<p>Shelter dogs may spend weeks/months/years waitng to be adopted which causes to feel lonely</p>",
                            "<p>Some dogs don't get along with other dogs so having their own space is extremely important</p>",
                            "<p>Some dogs have food anger when people/other dogs touvh their water so they are given their own water</p>",
                            "<p>Most animal shelters are over capacity so maybe you would consider adopting a shelter dog</p>",
                            "<p>These workers create bonds with all the dogs doing thier best to make sure they don't feel lonely</p>"
                        ];
        var infoCloseText = "Click this to close";

 

        for (var i=0; i<10; i++) {
            fileNames.push("petadoption"+(i+1));
            photos.push("<img class='photos' src='images/" + fileNames[i] + ".jpg'>" );
            image = openList1 + openList2 + photos[i] + "<br>" + openCaptionTag + captionText[i] + closeCaptionTag + openDescTag + descriptions[i] + closeDescTag + closeList;
            imageList.push(image);
        }
        document.getElementById("album").innerHTML = imageList.join(" ");    

            var closeinfo = document.getElementById("closeInfo");
            closeInfo.addEventListener("click", hideInfo);
       
            function openpopup(which) {
            document.getElementById("info_box").style.visibility="visible";
            document.getElementById("info_title").innerHTML = captionText[which];
            document.getElementById("info").innerHTML = infoText[which];
            document.getElementById("closeInfo").innerHTML = infoCloseText;
        }
        //To hide info box
            function hideInfo() {
            document.getElementById("info_box").style.visibility="hidden";
            }

            var img = $('#photos').clone();
            $('.box').append(img);
            $(document).ready(function () {
            //Open photo on button click
            $('.photos').click(function (photos){
                $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
                $('.box').fadeIn();
            })
        //Click to close photo
        $('.close, .backdrop').click(function(){
            $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
                $('.backdrop').css('display', 'none');
            });
            $('.box').fadeOut();
        });
    });