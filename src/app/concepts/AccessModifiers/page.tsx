export default function AccessModifiers() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Access Modifiers in TypeScript
      </h1>

      {/* 1. What */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          1. What are Access Modifiers
        </h2>

        <p>
          Access Modifiers are keywords used to control the visibility (accessibility)
          of class properties and methods.
        </p>

        <p className="mt-2">
          There are three types:
        </p>

        <ul className="list-disc ml-6">
          <li><b>public</b></li>
          <li><b>private</b></li>
          <li><b>protected</b></li>
        </ul>

      </section>

      {/* 2. Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Why We Use Access Modifiers
        </h2>

        <ul className="list-disc ml-6">
          <li>To protect data.</li>
          <li>To control access to properties.</li>
          <li>To improve code security.</li>
          <li>To follow OOP principles (encapsulation).</li>
        </ul>

      </section>

      {/* 3. When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. When to Use Access Modifiers
        </h2>

        <ul className="list-disc ml-6">
          <li>When working with classes.</li>
          <li>When you want to hide sensitive data.</li>
          <li>When building scalable applications.</li>
        </ul>

      </section>

      {/* 4. Real World */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          4. Real World Example
        </h2>

        <p>
          Example: Bank Account system.
        </p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`class BankAccount {
  public name: string;
  private balance: number;

  constructor(name: string, balance: number) {
    this.name = name;
    this.balance = balance;
  }

  public getBalance() {
    return this.balance;
  }
}

const acc = new BankAccount("Rahul", 1000);

console.log(acc.name); // ✅
console.log(acc.getBalance()); // ✅
console.log(acc.balance); // ❌ error`}
        </pre>

      </section>

      {/* 5. Types */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. Types of Access Modifiers
        </h2>

        <p><b>1. public (Default)</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`class User {
  public name: string;
}

const u = new User();
u.name = "Rahul"; // ✅ accessible everywhere`}
        </pre>

        <p className="mt-4"><b>2. private</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`class User {
  private password: string = "123";

  show() {
    console.log(this.password); // ✅ inside class
  }
}

const u = new User();
u.password; // ❌ error`}
        </pre>

        <p className="mt-4"><b>3. protected</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`class Parent {
  protected value: number = 10;
}

class Child extends Parent {
  show() {
    console.log(this.value); // ✅ accessible in child
  }
}

const c = new Child();
c.value; // ❌ not accessible outside`}
        </pre>

      </section>

      {/* 6. Issue */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">
          6. If Not Used What Issue May Occur
        </h2>

        <ul className="list-disc ml-6">
          <li>Anyone can modify sensitive data.</li>
          <li>Security issues.</li>
          <li>Uncontrolled data flow.</li>
          <li>Hard to debug large applications.</li>
        </ul>

        <p className="mt-2">
          Access modifiers ensure controlled and secure code.
        </p>

      </section>

    </div>
  );
}