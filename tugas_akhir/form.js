function buat_login() {
  var elemen = document.getElementById("X");
  elemen.parentElement.removeChild(elemen);

  var p = document.createElement("P");
  p.className = "tulisan_login";
  p.innerHTML = "SILAHKAN MENDAFTAR";

  var element = document.getElementsByTagName("div")[0];
  element.appendChild(p);

  var form = document.createElement("FORM");
  element.appendChild(form);

  var label_user = document.createElement("label");
  label_user.innerHTML = "Nama User";
  form.appendChild(label_user);

  var input_user = document.createElement("input");
  input_user.type = "text";
  input_user.className = "form_login";
  input_user.placeholder = "Nama User..";
  form.appendChild(input_user);

  var label_phone = document.createElement("label");
  label_phone.innerHTML = "Nomor Handphone";
  form.appendChild(label_phone);

  var input_phone = document.createElement("input");
  input_phone.type = "text";
  input_phone.className = "form_login";
  input_phone.placeholder = "Nomor Handphone.";
  form.appendChild(input_phone);

  var label = document.createElement("label");
  label.innerHTML = "Username";
  form.appendChild(label);

  var input_username = document.createElement("input");
  input_username.type = "text";
  input_username.name = "username";
  input_username.className = "form_login";
  input_username.placeholder = "Username atau email ..";

  form.appendChild(input_username);

  var tombol = document.createElement("input");
  tombol.type = "submit";
  tombol.className = "tombol_login";
  tombol.value = "DAFTAR SEKARANG";

  var label_pass = document.createElement("label");
  label_pass.innerHTML = "Password";
  form.appendChild(label_pass);

  var input_password = document.createElement("input");
  input_password.type = "password";
  input_password.name = "password";
  input_password.className = "form_login";
  input_password.placeholder = "Password..";

  form.appendChild(input_password);

  form.appendChild(tombol);
}
