import EmployeeCard from "../components/EmployeeCard";

type Employee = {
  id: number;
  name: string;
  title: string;
  department: string;
};

async function getEmployees(): Promise<Employee[]> {
  const res = await fetch("https://dummyjson.com/users?limit=50", {
    cache: "no-store",
  });

  const data = await res.json();

  return data.users.map((user: any) => ({
    id: user.id,
    name: `${user.firstName} ${user.lastName}`,
    title: `${user.company.title}`,
    department: `${user.company.department}`,
  }));
}

export default async function Page() {
  const employees = await getEmployees();

  return (
   <main className="min-h-screen bg-gray-100">
  {/* Hero Section */}
  <section className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden">
    <img
      src="/images/beers.png"
      alt="Assorted beers"
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4">
        Who We Are & What We Drink
      </h1>
    </div>
  </section>

  {/* Content */}
  <section className="p-8">
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {employees.map((emp) => (
        <EmployeeCard key={emp.id} employee={emp} />
      ))}
    </div>
  </section>
</main>

  );
}
