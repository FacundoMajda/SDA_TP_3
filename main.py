def main():
    contacts = []

    print("Sistema de Contactos")
    print("Ingrese 'fin' en nombre para terminar")

    while True:
        name = input("\nNombre: ")
        if name.lower() == 'fin':
            break

        last_name = input("Apellido: ")
        dni = input("DNI: ")

        phones = []
        print("Ingrese teléfonos (línea vacía para terminar):")
        while True:
            phone = input("> ")
            if not phone:
                break
            phones.append(phone)

        contacts.append([name, last_name, dni, phones])

    print("\nContactos registrados:")
    for contact in contacts:
        print(contact)

if __name__ == "__main__":
    main()