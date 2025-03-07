//import Image from "next/image";

export default function Home() {
  return (
    <div className="text-left">
      {/* Hero Section */}
      <section
        className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 aspect-[21/9] flex flex-col justify-center items-start relative"
        style={{ backgroundImage: "url('/background.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', marginTop: "40px" }}
      >
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-8">
        <h2 className="text-3xl font-semibold text-white text-center">
          Our Research Focus
        </h2>
          <div className="p-6 flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-white">Cybersecurity</h3>
              <p className="text-white mt-2">
                Exploring new methods to protect digital systems and networks.
              </p>
            </div>
            <img src="/cybersecurity.jpg" alt="Cybersecurity" className="w-32 h-32 object-contain" />
          </div>
          <div className="p-6 flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-white">Cryptography</h3>
              <p className="text-white mt-2">
                Advancing encryption techniques for secure communication.
              </p>
            </div>
            <img src="/Cryptography.jpg" alt="Cryptography" className="w-32 h-32 object-contain" />
          </div>
          <div className="p-6 flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-white">Post-Quantum Cryptography</h3>
              <p className="text-white mt-2">
              Developing cryptographic algorithms that are secure against quantum computer attacks.
              </p>
            </div>
            <img src="/post-quantum-cryptography.jpg" alt="Post-Quantum-Cryptography" className="w-32 h-32 object-contain" />
          </div>
      </section>
    </div>
  );
}
