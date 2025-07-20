export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-white text-black max-w-3xl mx-auto rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
        <img
          src="/me.jpg"
          alt="Profile"
          className="w-60 h-60 rounded-full object-cover border-4 border-yellow-400 shadow-md"
        />
        <div>
          <h2 className="text-4xl font-bold mb-2 text-pink-600">Hi, I'm Bernard Owusu-Mensah</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to my personal website! I'm passionate about coding and technology, and I enjoy learning new skills every day.
            In my free time, I love reading, hiking, and exploring new places. I'm always up for a challenge, and I aim to make a positive impact through my work.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-3 text-yellow-600">My Learning Experiences</h3>
        <div className="space-y-6">
        
        
         
            <p className="text-gray-700">
           Over the past five years, my journey as a web developer has been a continuous path of growth, experimentation, and resilience. Starting with curiosity and a passion for building things on the web, I’ve evolved into a confident full-stack developer who thrives in dynamic environments and enjoys solving real-world problems through code.

In the early stages of my career, I focused heavily on mastering HTML, CSS, and JavaScript—the core building blocks of the web. As I grew more comfortable with frontend development, I ventured into popular frameworks like React and tools like Redux Toolkit and TypeScript to build more scalable and interactive interfaces.

Driven by a desire to understand the full software lifecycle, I expanded into backend development using Node.js, Express, and MongoDB, and later dove deeper into ASP.NET Core and SQL to strengthen my skills in relational databases and enterprise-level architecture. I've embraced clean code practices, REST API design, and Domain-Driven Design (DDD), which have greatly improved my ability to build maintainable and modular systems.

. </p>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-3 text-green-700">Education</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <p>Bernard blends both academic and Professional qualifications on his journey as a 
developer. Here are some of his key educational milestones:
          </p>
           <li>
            <span className="font-semibold">BSc. Computer Science</span> – Kwame Nkrumah University Of Science And Technology, Ghana, KSI
            <br />
            <span className="text-sm text-gray-500">2016</span>
          </li>
          <li>
            <span className="font-semibold">Postgraduate Diploma in Full Stack Web Develepment</span> – Humber College, Toronto, ON
            <br />
            <span className="text-sm text-gray-500">2024</span>
          </li>

           <li>
            <span className="font-semibold">Master of Science in Data Analysis</span> – University of Niagara falls,  ON, Canada
            <br />
            <span className="text-sm text-gray-500">2025</span>
          </li>
        </ul>
      </div>

      <div className="mt-10">
  <h3 className="text-2xl font-semibold mb-3 text-blue-700">Professional Experience</h3>
  <ul className="list-disc list-inside text-gray-700 space-y-6">
    <li>
      <span className="font-semibold">Full Stack Developer</span> – Jomacs, Calgary, Canada (Remote)
      <br />
      <span className="text-sm text-gray-500">Feb 2024 – Present</span>
      <ul className="list-disc list-inside ml-5 text-gray-600 text-sm space-y-1">
        <li>Designed and developed full-stack web applications with React.js, Node.js, and PostgreSQL.</li>
        <li>Led integration of third-party APIs and implemented secure authentication using OAuth 2.0.</li>
        <li>Improved app performance by 30% through code optimization and load balancing with Docker containers.</li>
      </ul>
    </li>
    <li>
      <span className="font-semibold">Engineering Lead</span> – First Atlantic Bank Ltd., Accra, Ghana
      <br />
      <span className="text-sm text-gray-500">Nov 2021 – Oct 2023</span>
      <ul className="list-disc list-inside ml-5 text-gray-600 text-sm space-y-1">
        <li>Led a team of 6 developers in building Corporate Pay, a secure enterprise payment system using ASP.NET, C#, and MSSQL.</li>
        <li>Implemented CI/CD pipelines and code reviews to enhance code quality and reduce deployment time by 40%.</li>
        <li>Collaborated with stakeholders to align technical delivery with business goals.</li>
      </ul>
    </li>
    <li>
      <span className="font-semibold">Application Developer</span> – Guaranty Trust Bank Ltd., Accra, Ghana
      <br />
      <span className="text-sm text-gray-500">Jul 2018 – May 2021</span>
      <ul className="list-disc list-inside ml-5 text-gray-600 text-sm space-y-1">
        <li>Developed and maintained MyghPay, a mobile payment app using React Native and Node.js backend.</li>
        <li>Reduced server response time by 25% through code profiling and API refactoring.</li>
        <li>Ensured 99.9% uptime with real-time monitoring and logging tools.</li>
      </ul>
    </li>
  </ul>
</div>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">Frontend</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">React</span>
            <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs font-semibold">Tailwind CSS</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">JavaScript</span>
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">UI/UX</span>
             <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">ASP.Net MVC</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">C#</span>
            <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs font-semibold">.Net Core</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">PHP -laravel</span>
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">MongoDd</span>
             <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">Express</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">NodeJs</span>
            <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs font-semibold">Tailwind CSS</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">HTML</span>
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">CSS</span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">SQL</span>
            
          </div>
            
          </div>
          </div>

    </section>
  );
}