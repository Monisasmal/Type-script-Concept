export default function AbstractClasses() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Abstract Classes in TypeScript
      </h1>

      {/* 1. What */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          1. What is Abstract Class
        </h2>

        <p>
          An Abstract Class is a class that cannot be instantiated (you cannot create objects from it directly).
        </p>

        <p className="mt-2">
          It is used as a base class for other classes.
        </p>

        <p className="mt-2">
          It can contain:
        </p>

        <ul className="list-disc ml-6">
          <li>Normal methods (with implementation)</li>
          <li>Abstract methods (without implementation)</li>
        </ul>

        <p className="mt-2">
          👉 In simple words:
          <br />
          <b>Abstract Class = Incomplete blueprint</b>
        </p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`abstract class Animal {
  abstract makeSound(): void;

  move() {
    console.log("Moving...");
  }
}`}
        </pre>

      </section>

      {/* 2. Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Why We Use Abstract Classes
        </h2>

        <ul className="list-disc ml-6">
          <li>To define a common structure for multiple classes.</li>
          <li>To enforce implementation of methods.</li>
          <li>To share common logic.</li>
          <li>To follow OOP principles.</li>
        </ul>

      </section>

      {/* 3. When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. When to Use Abstract Classes
        </h2>

        <ul className="list-disc ml-6">
          <li>When multiple classes share common behavior.</li>
          <li>When some methods must be implemented by child classes.</li>
          <li>When designing large applications.</li>
        </ul>

      </section>

      {/* 4. Real World */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          4. Real World Example
        </h2>

        <p><b>Example: Payment System</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`abstract class Payment {
  abstract pay(amount: number): void;

  printReceipt() {
    console.log("Payment done");
  }
}

class CreditCardPayment extends Payment {
  pay(amount: number) {
    console.log("Paid via Credit Card:", amount);
  }
}

class UpiPayment extends Payment {
  pay(amount: number) {
    console.log("Paid via UPI:", amount);
  }
}

const payment = new CreditCardPayment();
payment.pay(1000);
payment.printReceipt();`}
        </pre>

      </section>

      {/* 5. More Examples */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. More Examples
        </h2>

        <p><b>Example 1: Cannot Create Object</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`abstract class Animal {}

const a = new Animal(); // ❌ error`}
        </pre>

        <p className="mt-4"><b>Example 2: Force Implementation</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`abstract class Shape {
  abstract area(): number;
}

class Circle extends Shape {
  area() {
    return 3.14 * 5 * 5;
  }
}`}
        </pre>

        <p className="mt-4"><b>Example 3: Mixed Methods</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`abstract class Vehicle {
  abstract start(): void;

  stop() {
    console.log("Vehicle stopped");
  }
}

class Car extends Vehicle {
  start() {
    console.log("Car started");
  }
}`}
        </pre>

      </section>

      {/* 6. Issue */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">
          6. If Not Used What Issue May Occur
        </h2>

        <ul className="list-disc ml-6">
          <li>No consistent structure across classes.</li>
          <li>Code duplication.</li>
          <li>Hard to enforce rules.</li>
          <li>Difficult to scale applications.</li>
        </ul>

        <p className="mt-2">
          Abstract classes help create structured and scalable applications.
        </p>

      </section>

    </div>
  );
}