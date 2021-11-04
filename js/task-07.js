const sizeChangerRef = document.querySelector("#font-size-control");
const resizableTextRef = document.querySelector("#text");

sizeChangerRef.addEventListener("input", (e) => {
  resizableTextRef.style.fontSize = e.currentTarget.value + "px";
});
