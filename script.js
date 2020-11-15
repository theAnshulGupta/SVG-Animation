const text = document.querySelectorAll("#anshul path");
console.log(text);
for (let i = 0; i < text.length; i++) {
  console.log(text[i].getTotalLength());
}
