export default function ContactPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-900">Contact Us</h1>
      <p className="mt-2 text-gray-600">Get in touch with our team.</p>

      <form className="mt-6 space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
        <textarea placeholder="Your Message" className="w-full p-3 border rounded-lg"></textarea>
        <button className="w-full bg-blue-900 text-white py-2 rounded-lg">Send</button>
      </form>
    </div>
  );
}
