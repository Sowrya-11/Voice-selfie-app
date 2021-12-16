var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML=" ";

recognition.start();

}

recognition.onresult=function(event){
    console.log(event);
    content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log("content-"+content);
    if (content == "Snap."){
        console.log("taking selfie")
        speak();
    }
}
function speak(){
    synth=window.speechSynthesis;
    speak_data="taking your selfie in 5 seconds";
    utter=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter);
    Webcam.attach(camera);
    setTimeout(function(){
        snapshot();
        download();
    }, 5000);
    
    
}
camera=document.getElementById("cam");
Webcam.set(
    {
    width:360,height:250,

    image_format:'jpeg',
    jpeg_quality:50

    }
);

function snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML=
        '<img id="image" src="'+data_uri+'">'
    });
}
function download(){
    var link=document.getElementById("link");
    img=document.getElementById("image").src;
    link.href=img;
    link.click();
}