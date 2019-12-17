const dataURL = "https://api.myjson.com/bins/jcmhn";
const varskey = [
  "var1",
  "var2",
  "var3",
  "var4",
  "var5",
  "var6",
  "speach"
]

function handleTryButton() 
{
  $("#result").html("");
  $("#messages").show()
  $("#tryagain").hide()
}


function handleButton() {
	$.getJSON(dataURL, 
  // взять данные по dataUrl, вытащить их и передать в handleData
    function handleData(data) {
      // кажется, какой-то из этих способов сработает
      //const var1 = $("input[name=var1]")[0].value()
      let vars = {}

      varskey.forEach 
      (
          function(i) 
            {
              vars[i] = $("input[name=" + i + "]").val()
            }
      )

      //const var1 = $("input[name=var1]").val()
      //const var1 = $("input[name=var1]")[0].default()

      // надо сделать так чтобы сообщения подменились на значения из формы
      console.log(vars);
      //render(data);
      console.log(data)  
      let mes = ""
      data["text"].forEach
      (
          function(element)
            {
              console.log(element)
              varskey.forEach
              (function(t)
                {
                  element = element.replace("{" + t + "}", vars[t])              
                }                   
              )
              mes = mes + element +"<br>"          
            }
      )
        $("#result").html(mes);
        $("#messages").hide()
        $("#tryagain").show()
    }
)

}
function init() {
	$("#button-fetch").click(handleButton);    
  $("#tryagain").click(handleTryButton);
}

$(document).ready(init);
$("#tryagain").hide()

