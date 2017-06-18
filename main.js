var imageUrl = "http://free-images.gatag.net/images/201108220600.jpg";

getRecognizedEmotion(imageUrl, function (error, data) {
    if (error) {
        console.error(error);
        return;
    }
    var result = JSON.stringify(data, undefined, 2);
    console.log(result);
    $("#result").append(result);
});

function getRecognizedEmotion(url, callback){
    $("#img-thumbnail").html("<img width='400'src=" + url + "><br>");
    $("#img-url").append(url);
    var params = {
        // Request parameters
    };

    $.ajax({
        url: "https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize?" + $.param(params),
        beforeSend: function(xhrObj){
            // Request headers
            xhrObj.setRequestHeader("Content-Type","application/json");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", $YOUR_API_KEY$);
        },
        type: "POST",
        // Request body
        data: '{"url":"' + url + '"}',
    })
    .done(function(data) {
        callback(null, data)
    })
    .fail(function() {
        callback(error)
    });
}
