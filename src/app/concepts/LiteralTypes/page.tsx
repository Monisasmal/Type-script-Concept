export default function LiteralTypes() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Literal Types in TypeScript
      </h1>

      {/* 1. What */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          1. What is Literal Type
        </h2>

        <p>
          Literal Types allow you to define a variable with a fixed, exact value
          instead of a general type.
        </p>

        <p className="mt-2">
          Normally we use types like <b>string</b>, <b>number</b>, or <b>boolean</b>,
          but Literal Types allow only specific values.
        </p>

        <p className="mt-2">
          Example:
        </p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let direction: "left";

direction = "left";   // ✅ allowed
direction = "right";  // ❌ error`}
        </pre>

      </section>

      {/* 2. Why */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          2. Why We Use Literal Types
        </h2>

        <ul className="list-disc ml-6">
          <li>To restrict values to a fixed set.</li>
          <li>To prevent invalid or unexpected values.</li>
          <li>To improve code safety and predictability.</li>
          <li>To make APIs and functions more strict and reliable.</li>
        </ul>

      </section>

      {/* 3. When */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. When to Use Literal Types
        </h2>

        <ul className="list-disc ml-6">
          <li>When a variable should have limited fixed values.</li>
          <li>When creating status values (success, error, loading).</li>
          <li>When defining roles (admin, user).</li>
          <li>When working with UI states or modes.</li>
        </ul>

      </section>

      {/* 4. Real World */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          4. Real World Examples
        </h2>

        <p><b>Example 1: API Status</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let status: "loading" | "success" | "error";

status = "loading";  // ✅
status = "success";  // ✅
status = "failed";   // ❌ error`}
        </pre>

        <p className="mt-4"><b>Example 2: User Role</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let role: "admin" | "user" | "guest";

role = "admin"; // ✅
role = "manager"; // ❌`}
        </pre>

        <p className="mt-4"><b>Example 3: Theme Mode</b></p>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`let theme: "light" | "dark";

theme = "light"; // ✅`}
        </pre>

      </section>

      {/* 5. Code Example */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. Function Example
        </h2>

        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`function setStatus(status: "success" | "error") {
  console.log("Status is:", status);
}

setStatus("success"); // ✅
setStatus("failed");  // ❌ error`}
        </pre>

        <p className="mt-2">
          This ensures only valid values are passed to the function.
        </p>

      </section>

      {/* 6. Issue */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">
          6. If Not Used What Issue May Occur
        </h2>

        <ul className="list-disc ml-6">
          <li>Invalid values may be assigned.</li>
          <li>Bugs may occur due to unexpected input.</li>
          <li>Application behavior becomes unpredictable.</li>
          <li>Harder to maintain large applications.</li>
        </ul>

        <p className="mt-2">
          Literal types help enforce strict and safe value usage.
        </p>

      </section>

    </div>
  );
}