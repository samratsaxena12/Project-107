function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/yeA1raLXA/model.json', modelLoaded)
}

function modelLoaded() {
    classifier.classify(gotResult);
}

function gotResult() {
    console.log("Model Loaded!");
    console.log("---");
    console.log("Results will be shown in the next project");
}
