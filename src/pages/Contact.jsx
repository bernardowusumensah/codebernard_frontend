export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-white text-black max-w-xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-3 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
        <textarea placeholder="Message" rows="5" className="w-full p-3 border rounded"></textarea>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send</button>
      </form>
    </section>
  )
}