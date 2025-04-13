let horas = new Date();
horas = horas.getHours();
res = document.getElementById("res");
res.innerHTML = `Agora são ${horas} horas.`;

if (horas >= 0 && horas < 12) {
  res.innerHTML += `<br> Bom dia!`;
  res.innerHTML += `<br><img src="Manhã.png" alt="Imagem da manhã" style="width:200px;">`;
  document.body.style.background = "#79708F";
} else if (horas >= 12 && horas < 18) {
  res.innerHTML += `<br> Boa tarde!`;
  res.innerHTML += `<br><img src="Tarde.png" alt="Imagem da tarde" style="width:200px;">`;
    document.body.style.background = "#B67966";
} else if (horas >= 18 && horas < 24) {
  res.innerHTML += `<br> Boa noite!`;
  res.innerHTML += `<br><img src="Noite.png" alt="Imagem da noite" style="width:200px;">`;
    document.body.style.background = "#1B1F2A";
} else {
}