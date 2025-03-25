const ask = (msg) => {
  return new Promise((resolve) => {
    process.stdout.write(msg);

    process.stdin.once('data', (data) => {
      const res = data.toString().trim();
      resolve(res);
    });
  });
};

async function main() {
  let contacts = [];

  console.log("Sistema de Contactos");
  console.log("Ingrese 'fin' en nombre para terminar");

  while (true) {
    let name = String(await ask("\nNombre: "));
    if (name.toLowerCase() === 'fin') {
      break;
    }

    let last_name = String(await ask("Apellido: "));
    let dni = String(await ask("DNI: "));

    let phones = [];
    console.log("Ingrese teléfonos (línea vacía para terminar):");
    while (true) {
      let phone = String(await ask("> "));
      if (phone === "") {
        break;
      }
      phones.push(phone);
    }

    contacts.push([name, last_name, dni, phones]);
  }

  console.log("\nContactos registrados:");
  for (let contact of contacts) {
    console.log(contact);
  }

  process.exit();
}

main();