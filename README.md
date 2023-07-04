<h1>Names Rank application</h1>
<hr><p>This app keeps track of an ordered, numbered list of people's names</p>
<h2>Technologies Used</h2>
<hr><ul>
<li>TypeScript</li>
</ul><ul>
<li>Next.js 13</li>
</ul><ul>
<li>TailwindCSS</li>
</ul><ul>
<li>NestJS</li>
</ul><ul>
<li>TypeORM</li>
</ul><ul>
<li>PostgreSQL</li>
<h2>Screenshots</h2>
<img src="/public/screenshot.jpg" alt="Screenshot" width="800" />
</ul><h2>Setup</h2>
<hr><p>To set up the project you can clone backend from this repo: https://github.com/BogdanGlazkov/aleannlab-test-names-back. Then create .env file (copy from .env.example) and add your credentials (which includes your database username and password)</p>
<h5>Steps</h5><ul>
<li>npm i</li>
</ul><ul>
<li>npm run dev</li>
</ul><ul>
<li>use the project on http://localhost:5000 (backend) and http://localhost:3000 (frontend)</li>
</ul><h2>Usage</h2>
<hr><p>You can add names to the list, change (edit) and delete them. Also you can rank them up and down</p>
<h5>Code Examples</h5><ul>
<li>The project was created using create-next-app. Here is a code example from Header component</li>
</ul>
<p><code>
import { FC } from "react";

const Header: FC = () =&gt; {
return (
&lt;header className="sticky top-0 z-10 h-20 bg-teal-700 text-white p-4 border-b"&gt;
&lt;a href="/"&gt;
&lt;h1 className="text-3xl font-medium"&gt;Names Rank&lt;/h1&gt;
&lt;/a&gt;
&lt;/header&gt;
);
};

export default Header;
</code></p>

<h2>Project Status</h2>
<hr><p>Completed</p><h2>Features that can be added</h2>
<hr><ul>
<li>Add registration</li>
</ul><ul>
<li>Add private and public routes</li>
</ul><ul>
<li>Improve design</li>
</ul><h2>Contact</h2>
<hr><p><span style="margin-right: 30px;"></span><a href="https://www.linkedin.com/in/bogdan-glazkov/"><img target="_blank" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" style="width: 10%;"></a><span style="margin-right: 30px;"></span><a href="https://github.com/BogdanGlazkov"><img target="_blank" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" style="width: 10%;"></a></p>
