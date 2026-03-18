export default function IntersectionTypes() {
  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Intersection Types in TypeScript
      </h1>

      {/* What */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. What is Intersection Type</h2>
        <p>
          Intersection Types combine multiple types into one using <b>&</b>.
          The final type will contain ALL properties from all types.
        </p>
      </section>

      {/* Why */}
      <section className="mb-6">
        <ul className="list-disc ml-6">
          <li>To merge multiple objects.</li>
          <li>To create reusable structures.</li>
        </ul>
      </section>

      {/* Real */}
      <section className="mb-6">
        <p>
          Example: A person can be both Employee and Manager.
        </p>
      </section>

      {/* Code */}
      <section className="mb-6">
        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`type Employee = {
  name: string;
};

type Manager = {
  role: string;
};

type TeamLead = Employee & Manager;

const lead: TeamLead = {
  name: "John",
  role: "Lead"
};`}
        </pre>
      </section>

      {/* Issue */}
      <section>
        <p>
          Without intersection, combining types becomes repetitive.
        </p>
      </section>

    </div>
  );
}