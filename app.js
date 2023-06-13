var questions = [
    {
        question: "Html stands for _____________",
        option: ["hyper markup", "JS", "hyper text markup language", "cascading style sheet"],
        correctAns: "hyper text markup language"
    },
    {
        question: "JS stands for _____________",
        option: ["java script", "hyper text markup language", "css", "html"],
        correctAns: "java script"
    },
    {
        question: "CSS stands for _____________",
        option: ["cascading style sheet", "hyper text markup language", "Java Script", "html"],
        correctAns: "cascading style sheet"
    },

    {
        question:"RAM stands for _____________",
        option:["random access memoery","hyper text markup language","html","html"],
        correctAns:"random access memoery"
    },
    {
        question:"ROM stands for _____________",
        option:["read only memory","hyper text markup language","html","html"],
        correctAns:"read only memory"
    }
]

var dispQuestion = document.getElementById("dispQuestion")
var crrQue = document.getElementById("crrQue")
var totalQue = document.getElementById("totalQue")
var answerParent = document.getElementById("answerParent")
var indexVal =0;
var marks = 0;


function render (){
    var obj = questions[indexVal]
    dispQuestion.innerHTML=obj.question
    crrQue.innerHTML = indexVal +1
    totalQue.innerHTML = questions.length
    answerParent.innerHTML=""
    for(var i =0 ; i<obj.length; i++){
    answerParent.innerHTML +=` <div class="col-md-6 col-sm-4" onclick="chkAns('${obj.correctAns}','${obj.option[i]}')">
    <button class= "btn btn-primary w-100 mt-5 fs-5">${obj.option[i]}</button>
  </div>`
}

}
function nextQue (){
    indexVal++ 
    render()  
}


function chkAns(a,b){
    if(a==b){
       marks++
    }
    console.log(marks)
    nextQue()
}
render()

