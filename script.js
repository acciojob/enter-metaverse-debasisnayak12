//your JS code here. If required.
const Btn = document.querySelector("#enterBtn");
const para = document.querySelector("#status");

Btn.addEventListener(('click'), () =>{
	if(para.textContent.length > 0){
		para.textContent = '';
	}
	const heading = document.createElement("h1");
	heading.textContent = "Entered Metaverse";
	para.appendChild(heading);
});
