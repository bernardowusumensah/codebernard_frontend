export default function Content() {
  return (
    <section className="bg-white text-black px-6 py-20 max-w-7xl mx-auto space-y-24">

      {/* 📊 Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { label: "Years Experience", value: "5+" },
          { label: "Projects Delivered", value: "50+" },
          { label: "Happy Clients", value: "20+" },
          { label: "Support", value: "24/7" },
        ].map((stat, idx) => (
          <div key={idx}>
            <h3 className="text-4xl font-bold text-blue-700">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* 💼 Our Services */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-10">
          Comprehensive software engineering and consulting solutions tailored to your business needs.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "DevOps & Cloud Engineering",
              description:
                "Secure, scalable cloud infrastructure with CI/CD pipelines, Kubernetes, and IaC. Security integrated across AWS, Azure, and GCP.",
            },
            {
              title: "Software Engineering",
              description:
                "Full-stack development with React, Vue.js, Node.js. We deliver responsive UIs, scalable APIs, and maintainable codebases.",
            },
            {
              title: "Data Science & Analytics",
              description:
                "ML models, real-time pipelines, and predictive analytics to turn data into actionable insights.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{service.title}</h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 💻 Technology Stack */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-6">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-3 text-sm font-medium text-gray-700">
          {[
            "AWS", "Azure", "GCP", "Kubernetes", "Docker", "ASP.NET", "C#", "PHP-Laravel",
            "Python", "React", "NodeJS", "Express", "MongoDb", "MySQL", "PostgreSQL", "REST APIs",
          ].map((tech, i) => (
            <span
              key={i}
              className="px-4 py-2 border border-gray-300 bg-gray-50 rounded-full hover:bg-gray-100 transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 🗣 Testimonials */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-10">Client Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Amos Ngoah",
              title: "CTO, First Allied Bank",
              quote:
                "CodeBernard's cloud engineering expertise helped us achieve a seamless migration and improved our system reliability significantly.",
            },
            {
              name: "Edwin Dadzie",
              title: "VP of Engineering, A-Tech Solutions",
              quote:
                "Their software engineering team delivered a robust solution that exceeded our expectations and scaled with our growth.",
            },
            {
              name: "Parjad Minooei",
              title: "Web Development, Humber College",
              quote:
                "The IT consulting services they provide transformed our technology strategy and improved our operational efficiency.",
            },
          ].map((testimonial, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md border border-gray-100"
            >
              <p className="italic text-gray-600 mb-4">“{testimonial.quote}”</p>
              <p className="font-semibold text-blue-800">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🎯 Call to Action */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to Transform Your Business?</h2>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Book your free 30-minute consultation to discuss how our expertise can solve your technology challenges.
        </p>
        <button className="bg-yellow-400 text-black px-6 py-3 font-semibold rounded-full hover:bg-yellow-500 transition">
          Schedule Free Consultation
        </button>
      </div>
    </section>
  );
}
