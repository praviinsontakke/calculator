function clk(val){
    document.getelementById("screen").value= document.getelementById("screen").value+val;

}
function clrdisp(){
    document.getelementById("screen").value=""
}
function eql(){
    var test=document.getelementById("screen").value;
    var result=Eval(text)
    document.getelementById("screen").value=result;
    
}