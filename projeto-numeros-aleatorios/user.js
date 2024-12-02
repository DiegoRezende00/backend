const fs = require("fs");
const crypto = require("crypto");

function saveUser(usuario, senha) {
  const usuarios = fs.existsSync(usuarios.json)
    ? JSON.parse(fs.readFileSync("Usuarios.json"))
    : {};
  usuarios[usuario] = crypto.createHash("sha256").update(senha).digest("hex");
  fs.writeFileSync("Usuarios.json", JSON.stringify(usuario));
}
function validateUser() {
  if (!fs.existsSync(usuarios.json))
    return console.log("Arquivo não encontrado!");
  const usuarios = JSON.parse(fs.readFileSync(usuarios.json));
  const hash = crypto.createHash("sha256").update(senha).digest("hex");
  if (!usuarios[usuario]) return console.log("Usuário nao encontrado!");
  if (usuarios[usuario] === hash) return console.log("Logado");
  console.log("Senha incorreta");
}

saveUser("Usuario1", "senha123");
