Webcam.set({
    height: 300,
    width: 350,
    image_format : 'png',
    png_quality:90

});

camera = document.getElementById("camera");

Webcam.attach('camera');
function take_snapshot(){
    Webcam.snap(function(data_uri) {
document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">';


   });
}
console.log("ml5.version",ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/kuStjEbn-/model.json",modelloading);

function modelloading(){
    console.log("model is being loaded");
} 

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';

    })
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_uri_1 = "The first prediction is " + prediction_1;
    speak_data_uri_2 = "And the second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2)
    synth.speak(utterThis);
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
    }else {
        console.log(results);
    
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        document.getElementById("result_emotion_name1").innerHTML = prediction_1;
        document.getElementById("result_emotion_name2").innerHTML = prediction_2;
    speak();
    if(prediction_1 == "Surprised"){
    
        document.getElementById("update_emoji1").innerHTML = "&#9996;";
        
    }
    if(prediction_1 == "sad"){
    
        document.getElementById("update_emoji1").innerHTML = "&#9994;";
        
    }
    if(prediction_1 == "Neutral"){
    
        document.getElementById("update_emoji1").innerHTML = "&#128076;";
    }
    if(prediction_1 == "angry"){
    
        document.getElementById("update_emoji1").innerHTML = "&#128077;";
    }
    
    if(prediction_2 == "Surprised"){
    
        document.getElementById("update_emoji2").innerHTML = "&#9996;";
        
    }
    if(prediction_2 == "sad"){
    
        document.getElementById("update_emoji2").innerHTML = "&#9994;";
    }
    if(prediction_2 == "Neutral")ç
    
        document.getElementById("update_emoji2").innerHTML = "&#128077;";
    }
    if(prediction_2 == "angry"){
    
        document.getElementById("update_emoji2").innerHTML = "&#128077;";
    }
    }
    
    
    function speak(){
        var synth = window.speechSynthesis;
        speak_data_1 = "The first prediction is " + prediction_1;
        speak_data_2 = "  and the second prediction is " + prediction_2;
        var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
    
    }
