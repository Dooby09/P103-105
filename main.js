Webcam.set({

    width:360,
    height:300,
    image_format:"jpeg",
    jpeg_quality:90
    
});


camera=document.getElementById("webcam");

Webcam.attach(camera);

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='photo' src=" + data_uri + ">";
    
    });
}

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/BpGBHWef6/model.json",modelloaded);
console.log(ml5.version);

function modelloaded(){
    console.log("modelloaded");
}

function check(){
    image=document.getElementById("photo");
    classifier.classify(image, gotResult);
}

function gotResult(error,results){

    if(error){
        console.log("error");
    }
    else{
        console.log(results);
        document.getElementById("resultobjectname").innerHTML=results[0].label;
        document.getElementById("resultobjectaccuracy").innerHTML=results[0].confidence.toFixed(2);

        synth = window.speechSynthesis;
      speak = "Object detected is" + results[0].label;
      saythis = new SpeechSynthesisUtterance(speak);
      synth.speak(saythis);

    }
}