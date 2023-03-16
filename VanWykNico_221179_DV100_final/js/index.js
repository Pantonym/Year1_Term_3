//Array of flights
var arrFlights = [

    {
        Name: "John F. Kennedy International Airport - New York",
        Price: 450,
        FlightCode: "IN01NY",
        Direct: true,
        Desc: "<br> Location: JFK International Airport <br><br> Departure Time: 1 AM <br><br> International Flight <br><br> It will be a direct flight",
        Link: "https://i.pinimg.com/736x/0e/6e/a3/0e6ea3f7c2927a14ff28a9e6966d6697.jpg"
    },
    {
        Name: "Paris Charles de Gaulle Airport - Paris",
        Price: 650,
        FlightCode: "IN1230PF",
        Direct: false,
        Desc: "<br> Location: Charles de Gaulle Airport <br><br> Departure Time: 12:30 PM <br><br> International Flight <br><br> It will be a lay-over flight",
        Link: "https://i.pinimg.com/564x/7a/97/07/7a9707f6a64aa0c59cbd055fcfd428d5.jpg"
    },
    {
        Name: "Dubai International Airport - Dubai",
        Price: 550,
        FlightCode: "IN03DU",
        Direct: true,
        Desc: "<br> Location: Dubai International Airport <br><br> Departure Time: 3 AM <br><br> International Flight <br><br> It will be a direct flight",
        Link: "https://i.pinimg.com/564x/30/09/f2/3009f2a099c768f5ad98edaf76fcfc4e.jpg"
    },
    {
        Name: "Changi Airport - Singapore",
        Price: 450,
        FlightCode: "IN18SI",
        Direct: false,
        Desc: "<br> Location: Changi Airport in Singapore <br><br> Departure Time: 6 PM <br><br> International Flight <br><br> It will be a lay-over flight",
        Link: "https://i.pinimg.com/564x/53/a7/7d/53a77d20a74d9f00c76087ba49d2ae8e.jpg"
    },
    {
        Name: "King Shaka International Airport - Durban",
        Price: 350,
        FlightCode: "DO1345DN",
        Direct: true,
        Desc: "<br> Location: King Shaka International Airport <br><br> Departure Time: 1:45 PM <br><br> Domestic Flight <br><br> It will be a direct flight",
        Link: "https://i.pinimg.com/564x/b3/d4/40/b3d440efd7a4e750928c5bf07b526d00.jpg"
    },
    {
        Name: "London City Airport - London",
        Price: 500,
        FlightCode: "IN07BR",
        Direct: true,
        Desc: "<br> Location: London City Airport <br><br> Departure Time: 7 AM <br><br> International Flight <br><br> It will be a direct flight",
        Link: "https://i.pinimg.com/564x/9a/8c/29/9a8c29d5aa3e0765cb67c0002d1a10bf.jpg"
    }

]


$(document).ready(function () {

    //Change welcome message on load
    $("#welcome_message").html("Welcome to <br> Standard Flights");

    //Footer links
    $(".twitter_js").click(function () {
        window.open("https://www.twitter.com")
    });

    $(".insta_js").click(function () {
        window.open("https://www.instagram.com")
    });

    $(".facebook_js").click(function () {
        window.open("https://www.facebook.com")
    });

    //Logo Hovers
    //--Home page
    $("#logo").hover(function () {
        $(this).css("background-image", "url('../assets/Logo/AirlineLogoHover.png')");
    }, function () {
        $(this).css("background-image", "url('../assets/Logo/AirlineLogo.png')");
    });
    //--Footer
    $(".footer_logo").hover(function () {
        $(this).css("background-image", "url('../assets/Logo/AirlineLogoHover.png')");
    }, function () {
        $(this).css("background-image", "url('../assets/Logo/AirlineLogo.png')");
    });


    //Header Slider
    //--Initiate variables and set initial slider images
    var iRandom = 0;
    var iPrev = 1;
    var sUrl1 = "https://api.openweathermap.org/data/2.5/weather?q=";
    var sCity = "pretoria";
    var sUrl2 = "&APPID=ffb41dc175e146d9eeb55cc1d7e630fc";

    $("#header_group").css("background-image", "url(" + arrFlights[1].Link + ")");

    $("#title").html(arrFlights[1].Name);

    $("#image_info").html(arrFlights[1].Desc);

    //--Repeating function to change the header flight with a random flight
    setInterval(function () {
        var sUrl = "";
        var sOutput = "";

        //----Random number generation
        iRandom = Math.floor(Math.random() * (arrFlights.length - 1));

        if (iRandom == iPrev) {
            iRandom = Math.floor(Math.random() * (arrFlights.length - 1));
        }

        //----API Initialization
        //------Find which city is needed
        sCity = arrFlights[iRandom].Name;
        sCity = sCity.split("- ").pop();
        sCity = sCity.toLowerCase();
        
        if (sCity == "new york") {
            sCity = "newyork";
        }

        //------Build the url with the variable city
        sUrl = sUrl1 + sCity + sUrl2;

        var details = null;

        $.ajax({
            type: "GET",
            url: sUrl,
            success: function (data) {
                details = data;
            }
        }).done(function () {
            //------Get the current temperature
            let rTemp = Math.floor(details.main.temp - 273.15);
            let rMin = Math.floor(details.main.temp_min - 273.15);

            //------Build the final output
            sOutput = arrFlights[iRandom].Desc + " <br><br> Current Temperature: " + rTemp + "°C <br><br> Minimum Temperature: " + rMin + "°C";

            //------Output
            $("#header_group").css("background-image", "url(" + arrFlights[iRandom].Link + ")");

            $("#title").html(arrFlights[iRandom].Name);

            $("#image_info").html(sOutput);

            //------Log the previous random integer to avoid duplications
            iPrev = iRandom;
        })

        //----Repeat the function after 5 seconds
    }, 5000);


    //Accordion
    $("#acc1").click(function () {
        $("#acc1_text").slideToggle();
    });

    $("#acc2").click(function () {
        $("#acc2_text").slideToggle();
    });

    $("#acc3").click(function () {
        $("#acc3_text").slideToggle();
    });


    //Flights Page
    //--Display Information
    $("#img1_info").html("<b> " + arrFlights[0].Name + " </b> <br><br> " + arrFlights[0].FlightCode);
    $("#img2_info").html("<b> " + arrFlights[1].Name + " </b> <br><br> " + arrFlights[1].FlightCode);
    $("#img3_info").html("<b> " + arrFlights[2].Name + " </b> <br><br> " + arrFlights[2].FlightCode);
    $("#img4_info").html("<b> " + arrFlights[3].Name + " </b> <br><br> " + arrFlights[3].FlightCode);
    $("#img5_info").html("<b> " + arrFlights[4].Name + " </b> <br><br> " + arrFlights[4].FlightCode);
    $("#img6_info").html("<b> " + arrFlights[5].Name + " </b> <br><br> " + arrFlights[5].FlightCode);

    //--Ticket Hover
    $(".ticket_card").hover(function () {
        $(this).css("border-color", "#80FFF7");
    }, function () {
        $(this).css("border-color", "black");
    });

    //--Ticket Click
    $("#card_img1").click(function () {
        $("#new_ticket1").toggle();
        $("#new_ticket1").html("<b> " + arrFlights[0].Name + " </b> <br><br> " + arrFlights[0].FlightCode + "<br>" + arrFlights[0].Desc + "<br><br> Price per ticket: R" + arrFlights[0].Price);

        $("#img1_info").toggle();
        $("#flights_btn_1").toggle();
    });

    $("#card_img2").click(function () {
        $("#new_ticket2").toggle();
        $("#new_ticket2").html("<b> " + arrFlights[1].Name + " </b> <br><br> " + arrFlights[1].FlightCode + "<br>" + arrFlights[1].Desc + "<br><br> Price per ticket: R" + arrFlights[1].Price);

        $("#img2_info").toggle();
        $("#flights_btn_2").toggle();
    });

    $("#card_img3").click(function () {
        $("#new_ticket3").toggle();
        $("#new_ticket3").html("<b> " + arrFlights[2].Name + " </b> <br><br> " + arrFlights[2].FlightCode + "<br>" + arrFlights[2].Desc + "<br><br> Price per ticket: R" + arrFlights[2].Price);

        $("#img3_info").toggle();
        $("#flights_btn_3").toggle();
    });

    $("#card_img4").click(function () {
        $("#new_ticket4").toggle();
        $("#new_ticket4").html("<b> " + arrFlights[3].Name + " </b> <br><br> " + arrFlights[3].FlightCode + "<br>" + arrFlights[3].Desc + "<br><br> Price per ticket: R" + arrFlights[3].Price);

        $("#img4_info").toggle();
        $("#flights_btn_4").toggle();
    });

    $("#card_img5").click(function () {
        $("#new_ticket5").toggle();
        $("#new_ticket5").html("<b> " + arrFlights[4].Name + " </b> <br><br> " + arrFlights[4].FlightCode + "<br>" + arrFlights[4].Desc + "<br><br> Price per ticket: R" + arrFlights[4].Price);

        $("#img5_info").toggle();
        $("#flights_btn_5").toggle();
    });

    $("#card_img6").click(function () {
        $("#new_ticket6").toggle();
        $("#new_ticket6").html("<b> " + arrFlights[5].Name + " </b> <br><br> " + arrFlights[5].FlightCode + "<br>" + arrFlights[5].Desc + "<br><br> Price per ticket: R" + arrFlights[5].Price);

        $("#img6_info").toggle();
        $("#flights_btn_6").toggle();
    });

    //--Ticket button click
    $(".flights_btn").click(function () {
        if (confirm("Do you want to add this item to your cart?") == true) {
            alert("Item successfully added to your cart");
        }
    });

    //--Filter 
    $("#filter").change(function () {

        var objFilter = document.getElementById("filter");
        var iSelected = objFilter.options[objFilter.selectedIndex].value;

        if (iSelected == 0) {
            //--Remove the class that hides an element from all elements
            $(".ticket_card").removeClass("filter_hide");

        } else if (iSelected == 1) {

            //--Remove the class that hides an element from all elements
            $(".ticket_card").removeClass("filter_hide");

            //--Show all international flights
            $("#card_img5").addClass("filter_hide");

        } else if (iSelected == 2) {

            //--Remove the class that hides an element from all elements
            $(".ticket_card").removeClass("filter_hide");

            //--Show all domestic flights
            $(".ticket_card").addClass("filter_hide");

            $("#card_img5").removeClass("filter_hide");

        } else if (iSelected == 3) {

            //--Remove the class that hides an element from all elements
            $(".ticket_card").removeClass("filter_hide");

            //--Show all direct flights
            $("#card_img2").addClass("filter_hide");
            $("#card_img4").addClass("filter_hide");

        } else if (iSelected == 4) {

            //--Remove the class that hides an element from all elements
            $(".ticket_card").removeClass("filter_hide");

            //--Show all lay-over flights
            $(".ticket_card").addClass("filter_hide");

            $("#card_img2").removeClass("filter_hide");
            $("#card_img4").removeClass("filter_hide");

        } else if (iSelected == 5) {

            //--Remove the class that hides an element from all elements
            $(".ticket_card").removeClass("filter_hide");

            //--Show all flights to durban
            $(".ticket_card").addClass("filter_hide");
            $("#card_img5").removeClass("filter_hide");

        } else if (iSelected == 6) {

            //--Remove the class that hides an element from all elements
            $(".ticket_card").removeClass("filter_hide");

            //--Show all flights that fly from 12:00 AM to 04:00 AM
            $(".ticket_card").addClass("filter_hide");
            $("#card_img1").removeClass("filter_hide");
            $("#card_img3").removeClass("filter_hide");

        }
    })


    //Checkout page 
    //--Initializing variables
    var iRandom_Flights = 0;
    var bFound = false;
    var bFirstTime = true;
    var iCounter = 0

    //--Generate 5 random objects
    while (iCounter < 4) {

        //----Generate the first object without testing for duplicates
        if (bFirstTime == true) {
            GenerateRandom();

            //--Initializing the arrays
            var arrFlights_Checkout = [arrFlights[iRandom_Flights]];
            var arrNumbers = [iRandom_Flights];

            console.log(arrFlights_Checkout);
            console.log(arrNumbers);

            bFirstTime = false;
        } else {

            //----Generate a new random number
            GenerateRandom();
            //----Test for duplicates
            FindDuplicates(iRandom_Flights);

            //----If duplicates were found, generate a new number.
            if (bFound == true) {

                bFound = false;
                FindDuplicates(iRandom_Flights);

                //----If duplicates weren't found, update the arrays
            } else if (bFound == false) {

                let objToPush = arrFlights[iRandom_Flights];

                arrFlights_Checkout.push(objToPush);
                arrNumbers.push(iRandom_Flights);

                console.log("pushed");
                console.log(arrFlights_Checkout);
                console.log(arrNumbers);

                iCounter += 1;
            }
        }
    }

    //--Generating a random flight
    function GenerateRandom() {
        iRandom_Flights = Math.floor(Math.random() * (arrFlights.length - 1));
    }

    //--Duplicate Test
    function FindDuplicates(iToTest) {

        //----Search through the array for a duplicate
        for (let k = 0; k < arrFlights_Checkout.length; k++) {

            if (iToTest == arrNumbers[k]) {
                bFound = true;

                GenerateRandom();

                console.log("found");
            }
        }
    }

    //--Set the output
    $("#flight_code1").text(arrFlights_Checkout[0].FlightCode);
    $("#flight_code2").text(arrFlights_Checkout[1].FlightCode);
    $("#flight_code3").text(arrFlights_Checkout[2].FlightCode);
    $("#flight_code4").text(arrFlights_Checkout[3].FlightCode);
    $("#flight_code5").text(arrFlights_Checkout[4].FlightCode);

    //----Generate a random amount of tickets purchased
    var iTicketAmnt1 = Math.floor((Math.random() * 3) + 1);
    var iTicketAmnt2 = Math.floor((Math.random() * 3) + 1);
    var iTicketAmnt3 = Math.floor((Math.random() * 3) + 1);
    var iTicketAmnt4 = Math.floor((Math.random() * 3) + 1);
    var iTicketAmnt5 = Math.floor((Math.random() * 3) + 1);

    $("#ticket_amnt1").text(iTicketAmnt1);
    $("#ticket_amnt2").text(iTicketAmnt2);
    $("#ticket_amnt3").text(iTicketAmnt3);
    $("#ticket_amnt4").text(iTicketAmnt4);
    $("#ticket_amnt5").text(iTicketAmnt5);

    //----Calculate the total price of each item
    var rTotalCost1 = iTicketAmnt1 * arrFlights_Checkout[0].Price;
    var rTotalCost2 = iTicketAmnt2 * arrFlights_Checkout[1].Price;
    var rTotalCost3 = iTicketAmnt3 * arrFlights_Checkout[2].Price;
    var rTotalCost4 = iTicketAmnt4 * arrFlights_Checkout[3].Price;
    var rTotalCost5 = iTicketAmnt5 * arrFlights_Checkout[4].Price;

    $("#total_amnt1").text("R" + rTotalCost1);
    $("#total_amnt2").text("R" + rTotalCost2);
    $("#total_amnt3").text("R" + rTotalCost3);
    $("#total_amnt4").text("R" + rTotalCost4);
    $("#total_amnt5").text("R" + rTotalCost5);

    //--Buttons to remove items on the checkout table
    $("#btn_1").click(function () {

        if (confirm("Do you want to remove this item to your cart?")) {
            $("#flight_code1").text("");
            $("#ticket_amnt1").text("");
            $("#total_amnt1").text("");

            $("#btn_1").css("display", "none");

        };

    });

    $("#btn_2").click(function () {

        if (confirm("Do you want to remove this item to your cart?")) {
            $("#flight_code2").text("");
            $("#ticket_amnt2").text("");
            $("#total_amnt2").text("");

            $("#btn_2").css("display", "none");

        };

    });

    $("#btn_3").click(function () {

        if (confirm("Do you want to remove this item to your cart?")) {
            $("#flight_code3").text("");
            $("#ticket_amnt3").text("");
            $("#total_amnt3").text("");

            $("#btn_3").css("display", "none");

        };

    });

    $("#btn_4").click(function () {

        if (confirm("Do you want to remove this item to your cart?")) {
            $("#flight_code4").text("");
            $("#ticket_amnt4").text("");
            $("#total_amnt4").text("");

            $("#btn_4").css("display", "none");

        };

    });

    $("#btn_5").click(function () {

        if (confirm("Do you want to remove this item to your cart?")) {
            $("#flight_code5").text("");
            $("#ticket_amnt5").text("");
            $("#total_amnt5").text("");

            $("#btn_5").css("display", "none");

        };

    });

    $("#btn_all").click(function () {

        if (confirm("Do you want to remove all items to your cart?")) {

            $("#flight_code1").text("");
            $("#ticket_amnt1").text("");
            $("#total_amnt1").text("");
            $("#btn_1").css("display", "none");

            $("#flight_code2").text("");
            $("#ticket_amnt2").text("");
            $("#total_amnt2").text("");
            $("#btn_2").css("display", "none");

            $("#flight_code3").text("");
            $("#ticket_amnt3").text("");
            $("#total_amnt3").text("");
            $("#btn_3").css("display", "none");

            $("#flight_code4").text("");
            $("#ticket_amnt4").text("");
            $("#total_amnt4").text("");
            $("#btn_4").css("display", "none");

            $("#flight_code5").text("");
            $("#ticket_amnt5").text("");
            $("#total_amnt5").text("");
            $("#btn_5").css("display", "none");

        };

    });

    //--Purchase button
    $("#btn_purchase").click(function () {
        alert("Tickets have been purchased successfully");
    })

});