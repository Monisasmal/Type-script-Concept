export default function StaticProperties() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Static Properties in TypeScript
      </h1>

      {/* 1. What */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          1. What are Static Properties
        </h2>

        <p>
          Static Properties are properties that belong to the class itself,
          not to individual objects (instances).
        </p>

        <p className="mt-2">
          They are defined using the <b>static</b> keyword.
        </p>

        <p className="mt-2">
          👉 In simple words:
          <br />
          <b>Static = Shared by all objects, accessed using class name</b>
        </p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`class User {
  static appName = "MyApp";
}

console.log(User.appName);`}
        </pre>

      </section>

      {/* 2. Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Why We Use Static Properties
        </h2>

        <ul className="list-disc ml-6">
          <li>To share common data across all objects.</li>
          <li>To avoid duplication.</li>
          <li>To store global configuration values.</li>
          <li>To define constants related to class.</li>
        </ul>

      </section>

      {/* 3. When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. When to Use Static Properties
        </h2>

        <ul className="list-disc ml-6">
          <li>When value is same for all instances.</li>
          <li>When property belongs to class, not object.</li>
          <li>For constants, counters, config values.</li>
        </ul>

      </section>

      {/* 4. Real World */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          4. Real World Examples
        </h2>

        <p><b>Example 1: App Configuration</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`class AppConfig {
  static appName = "TypeScript Guide";
  static version = "1.0";
}

console.log(AppConfig.appName);`}
        </pre>

        <p className="mt-4"><b>Example 2: User Counter</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`class User {
  static count = 0;

  constructor() {
    User.count++;
  }
}

new User();
new User();

console.log(User.count); // 2`}
        </pre>

      </section>

      {/* 5. More Examples */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. More Examples
        </h2>

        <p><b>Example 1: Static Method</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`class MathUtil {
  static add(a: number, b: number) {
    return a + b;
  }
}

console.log(MathUtil.add(2, 3));`}
        </pre>

        <p className="mt-4"><b>Example 2: Static + Instance Difference</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`class Demo {
  static staticValue = 10;
  instanceValue = 20;
}

const d = new Demo();

console.log(Demo.staticValue); // ✅
console.log(d.instanceValue); // ✅

console.log(d.staticValue); // ❌ error`}
        </pre>

        <p className="mt-4"><b>Example 3: Constants</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`class Roles {
  static ADMIN = "admin";
  static USER = "user";
}

console.log(Roles.ADMIN);`}
        </pre>

      </section>

      {/* 6. Issue */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">
          6. If Not Used What Issue May Occur
        </h2>

        <ul className="list-disc ml-6">
          <li>Duplicate values across objects.</li>
          <li>Wasted memory.</li>
          <li>Hard to manage shared data.</li>
          <li>Less optimized code.</li>
        </ul>

        <p className="mt-2">
          Static properties help manage shared data efficiently.
        </p>

      </section>

    </div>
  );
}