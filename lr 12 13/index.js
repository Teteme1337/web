class User {
    constructor(data) {
        this.data = data;
    }

    edit(updatedData) {
        this.data = { ...this.data, ...updatedData };
    }

    get() {
        return this.data;
    }
}

class Contacts {
    constructor() {
        this.data = [];
    }

    add(contactData) {
        const user = new User(contactData);
        this.data.push(user);
    }

    edit(id, updatedData) {
        const contact = this.data.find(user => user.get().id === id);
        if (contact) {
            contact.edit(updatedData);
        }
    }

    remove(id) {
        this.data = this.data.filter(user => user.get().id !== id);
    }

    getContacts() {
        return this.data.map(user => user.get());
    }
}

class ContactsApp extends Contacts {
    constructor() {
        super();
        this.app = document.createElement('div');
        this.app.classList.add('contacts');
        document.body.appendChild(this.app);
        this.renderApp();
    }

    renderApp() {
        const form = document.createElement('form');
        form.innerHTML = `
            <input type="text" id="name" placeholder="Name" required />
            <input type="email" id="email" placeholder="Email" required />
            <input type="text" id="address" placeholder="Address" required />
            <input type="tel" id="phone" placeholder="Phone" required />
            <button type="submit">Add Contact</button>
        `;
        this.contactList = document.createElement('div');
        this.contactList.classList.add('contact-list');
        this.app.appendChild(form);
        this.app.appendChild(this.contactList);
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.onAdd();
        });
        this.renderContacts();
    }

    onAdd() {
        const id = Date.now();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;

        if (name && email && address && phone) {
            this.add({ id, name, email, address, phone });
            this.renderContacts();
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('address').value = '';
            document.getElementById('phone').value = '';
        } else {
            alert("All fields are required!");
        }
    }

    onEdit(id) {
        const contact = this.data.find(user => user.get().id === id);
        if (!contact) return;

        const name = prompt('Enter new name:', contact.get().name);
        const email = prompt('Enter new email:', contact.get().email);
        const address = prompt('Enter new address:', contact.get().address);
        const phone = prompt('Enter new phone:', contact.get().phone);

        this.edit(id, { name, email, address, phone });
        this.renderContacts();
    }

    onRemove(id) {
        this.remove(id);
        this.renderContacts();
    }

    renderContacts() {
        this.contactList.innerHTML = '';
        const contacts = this.getContacts();
        contacts.forEach(contact => {
            const contactDiv = document.createElement('div');
            contactDiv.classList.add('contact');
            contactDiv.innerHTML = `
                <p>${contact.name}</p>
                <p>${contact.email}</p>
                <p>${contact.address}</p>
                <p>${contact.phone}</p>
                <button class="edit">Edit</button>
                <button class="remove">Remove</button>
            `;
            contactDiv.querySelector('.edit').addEventListener('click', () => this.onEdit(contact.id));
            contactDiv.querySelector('.remove').addEventListener('click', () => this.onRemove(contact.id));
            this.contactList.appendChild(contactDiv);
        });
    }
}

const app = new ContactsApp();