import Link from "next/link";

const concept = [
     {name: "What is Type Script?", path:"/concepts/what-is-typescript"},
     {name: "What is Type Annotation?", path:"/concepts/TypeAnnotation"},
     {name: "What is Type Inference?", path:"/concepts/TypeInference"},
     {name: "What is TypeScript Vs JavaScript?", path:"/concepts/TypeScriptVsJavaScript"},
     {name: "What is TypeScript Compiler?", path:"/concepts/TypeScriptCompiler"},
     {name: "What is Primitive Type?", path:"/concepts/PrimitiveTypes"},
     {name: "What is Any Type?", path:"/concepts/AnyType"},
     {name: "What is Unknown Type?", path:"/concepts/UnknownType"},
     {name: "What is Void Type?", path:"/concepts/VoidType"},
     {name: "What is Never Type?", path:"/concepts/NeverType"},
];

export default function Concepts(){
    
    return(
        <section>
         <h1 className="text-3xl font-bold mb-6">TypeScript Concepts</h1>
         <ul className="grid gap-4 sm:grid-cols-3">
        {concept.map(c => (
          <li key={c.name} className="bg-white p-4 rounded shadow">
            <Link href={c.path} className="font-semibold">
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
      </section>
    )
}