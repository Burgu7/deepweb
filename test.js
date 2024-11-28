function start() {
    var count;
    $.get("/start", function(d) {
        randomToken = d.token;
        count = d.count;
    
        l = [];
        const totalImages = 24;
        const repeats = 2;
    
        for (let i = 0; i < totalImages; i++) {
            for (let j = 0; j < repeats; j++) {
                l.push(i);
            }
        }
    
        l.sort(() => Math.random() - 0.5);
        mp(l);
    });
    
    $("#start").hide();
    $("#t").show();
    
    setTimeout(function() {
        $(".piece img").hide();
        $(".piece").removeClass("init");
        var ct = setInterval(function() {
            if ($("#contain").html().indexOf("<p>") !== -1) {
                clearInterval(ct);
            }
            $("#time").text(count);
            if (count <= 0) {
                clearInterval(ct);
                alert("TIME OUT");
                location.reload();
            } else {
                $.ajax({
                    url: "/update-count",
                    type: "POST", 
                    contentType: "application/json",
                    data: JSON.stringify({ count: count }), 
                    success: function(response) {
                        count = response.count;  
                    },
                    error: function(xhr, status, error) {
                        console.error("Error updating count:", error);
                    }
                });
            }
        }, 1000);
    }, 3000);

    setInterval(() => {
        if (window.outerWidth - window.innerWidth > 100) {
            console.clear();
            location.reload();
        }
    }, 500);
}