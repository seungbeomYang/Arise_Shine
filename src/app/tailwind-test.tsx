export default function TailwindTest() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Tailwind CSS Test Page</h1>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-red-500 text-white p-4 rounded-lg">Red Background</div>
        <div className="bg-blue-500 text-white p-4 rounded-lg">Blue Background</div>
        <div className="bg-green-500 text-white p-4 rounded-lg">Green Background</div>
        <div className="bg-yellow-500 text-black p-4 rounded-lg">Yellow Background</div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Custom Colors Test</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-primary text-black p-4 rounded-lg">Primary Color</div>
          <div className="bg-secondary text-black p-4 rounded-lg">Secondary Color</div>
          <div className="bg-background text-black p-4 rounded-lg">Background Color</div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Font Family Test</h2>
        <p className="font-raleway text-lg mb-2">This text uses Raleway font.</p>
        <p className="font-geist text-lg">This text uses Geist font.</p>
      </div>
    </div>
  );
} 