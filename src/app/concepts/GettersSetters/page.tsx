export default function GettersSetters() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Getters and Setters in TypeScript
      </h1>

      {/* 1. What */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          1. What are Getters and Setters
        </h2>

        <p>
          Getters and Setters are special methods used to control how properties
          are accessed (get) and updated (set).
        </p>

        <p className="mt-2">
          They allow you to add logic when reading or writing a value.
        </p>

        <p className="mt-2">
          👉 In simple words:
          <br />
          <b>Getter = Read value</b> <br />
          <b>Setter = Update value with control</b>
        </p>

      </section>

      {/* 2. Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Why We Use Getters and Setters
        </h2>

        <ul className="list-disc ml-6">
          <li>To control how data is accessed and modified.</li>
          <li>To add validation before setting values.</li>
          <li>To protect private data.</li>
          <li>To implement encapsulation.</li>
        </ul>

      </section>

      {/* 3. When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. When to Use Getters and Setters
        </h2>

        <ul className="list-disc ml-6">
          <li>When you need validation logic.</li>
          <li>When working with private properties.</li>
          <li>When controlling data flow.</li>
          <li>When building secure applications.</li>
        </ul>

      </section>

      {/* 4. Real World */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          4. Real World Example
        </h2>

        <p><b>Example: Bank Account</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`class BankAccount {
  private _balance: number = 0;

  get balance() {
    return this._balance;
  }

  set balance(amount: number) {
    if (amount > 0) {
      this._balance = amount;
    } else {
      console.log("Invalid amount");
    }
  }
}

const acc = new BankAccount();

acc.balance = 1000; // setter
console.log(acc.balance); // getter`}
        </pre>

      </section>

      {/* 5. More Examples */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. More Examples
        </h2>

        <p><b>Example 1: Full Name</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`class Person {
  private _firstName: string = "";
  private _lastName: string = "";

  set firstName(name: string) {
    this._firstName = name;
  }

  set lastName(name: string) {
    this._lastName = name;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }
}

const p = new Person();
p.firstName = "Rahul";
p.lastName = "Kumar";

console.log(p.fullName);`}
        </pre>

        <p className="mt-4"><b>Example 2: Validation</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`class User {
  private _age: number = 0;

  set age(value: number) {
    if (value >= 18) {
      this._age = value;
    } else {
      console.log("Age must be 18+");
    }
  }

  get age() {
    return this._age;
  }
}`}
        </pre>

        <p className="mt-4"><b>Example 3: Readonly-like behavior</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`class Product {
  private _price: number = 0;

  get price() {
    return this._price;
  }
}

const p = new Product();
console.log(p.price); // only read, no setter`}
        </pre>

      </section>

      {/* 6. Issue */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">
          6. If Not Used What Issue May Occur
        </h2>

        <ul className="list-disc ml-6">
          <li>No control over data modification.</li>
          <li>Invalid data may enter system.</li>
          <li>Security issues.</li>
          <li>Hard to maintain large applications.</li>
        </ul>

        <p className="mt-2">
          Getters and Setters ensure controlled and validated data access.
        </p>

      </section>

    </div>
  );
}