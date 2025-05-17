export default function PatientPage() {
  return (
    <div>
      <div className="flex flex-row items-center justify-between w-full h-20 bg-gray-800 text-white shadow-lg sticky top-0 z-50">
        <h1 className="text-xl font-bold px-4">
          Welcome to the Patient Dashboard
        </h1>
        <div className="ml-auto mr-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Logout
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1 bg-gray-900 text-white p-4 min-h-screen">
          <h1 className="text-2xl font-bold">Patient Dashboard</h1>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="/patient/results">Diagnosis Results</a>
            </li>
            <li>
              <a href="/patient/records">View Records</a>
            </li>
            <li>
              <a href="/patient/appointments">Appointments</a>
            </li>
            <li>
              <a href="/patient/profile">Profile</a>
            </li>
          </ul>
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-4 space-x-4 p-4">
            <div className="bg-amber-100 rounded-md shadow flex flex-col items-center justify-center p-4">
              <h2 className="text-xl font-bold">Patient Records</h2>
              <p className="text-gray-700">View and manage your records</p>
            </div>
            <div className="bg-amber-100 rounded-md shadow flex flex-col items-center justify-center p-4">
              <h2 className="text-xl font-bold">Patient Records</h2>
              <p className="text-gray-700">View and manage your records</p>
            </div>
            <div className="bg-amber-100 rounded-md shadow flex flex-col items-center justify-center p-4">
              <h2 className="text-xl font-bold">Patient Records</h2>
              <p className="text-gray-700">View and manage your records</p>
            </div>
            <div className="bg-amber-100 rounded-md shadow flex flex-col items-center justify-center p-4">
              <h2 className="text-xl font-bold">Patient Records</h2>
              <p className="text-gray-700">View and manage your records</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
