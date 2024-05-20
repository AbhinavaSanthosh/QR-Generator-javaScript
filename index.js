const wrapper = document.querySelector('.wrapper');
      inp = wrapper.querySelector('.form input');
      btn = wrapper.querySelector('.form button');
      qrImg = wrapper.querySelector('.qr-code img');
let preValue;

btn.addEventListener('click', () =>{
  let qrValue = inp.value.trim();
  if(!inp || preValue === qrValue) return;
  preValue = qrValue;
  btn.innerText = "Generating QR Code...";
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
  qrImg.addEventListener('load', () =>{
    wrapper.classList.add("active");
    btn.innerText = "Generate QR Code";
  });
});

inp.addEventListener('keyup', () =>{
  if(!inp.value.trim()){
    wrapper.classList.remove("active");
    preValue = "";
  }
});


