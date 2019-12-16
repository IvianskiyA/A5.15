const dataURL = "https://api.myjson.com/bins/jcmhn";

function handleButton() {
	$.getJSON(dataURL, 
  // взять данные по dataUrl, вытащить их и передать в handleData


function handleData(data) {
  // кажется, какой-то из этих способов сработает
  //const var1 = $("input[name=var1]")[0].value()
  const var1 = $("input[name=var1]").val()
  //const var1 = $("input[name=var1]")[0].default()

  // надо сделать так чтобы сообщения подменились на значения из формы
  console.log(var1);
  //render(data);
  console.log(data)  
  const text = data;
  	$("#result").text(text);
}
)

}
function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
