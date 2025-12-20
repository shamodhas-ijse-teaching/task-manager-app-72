<h1>React Native with Expo – Day 1</h1>
<h2>Foundations of Application Development & Expo</h2>

<hr/>

<h2>1. Understanding Application Platforms</h2>
<p>Applications are software programs designed to run on different platforms:</p>
<ul>
  <li><b>Desktop Applications</b> – Installed on PCs or laptops</li>
  <li><b>Web Applications</b> – Accessed via web browsers</li>
  <li><b>Mobile Applications</b> – Installed on smartphones or tablets</li>
</ul>
<p>Each platform has different capabilities and requirements.</p>

<hr/>

<h2>2. Relationship Between Device, OS, and Software</h2>
<table border="1" cellpadding="6">
  <tr><th>Component</th><th>Description</th></tr>
  <tr><td>Device</td><td>Physical hardware (PC, Mobile Phone, Tablet)</td></tr>
  <tr><td>Operating System (OS)</td><td>Manages hardware and provides an environment for apps</td></tr>
  <tr><td>Software / Apps</td><td>Programs users interact with</td></tr>
</table>
<h3>Human Analogy</h3>
<p>Human → Life → Abilities<br/>Device → OS → Applications</p>

<hr/>

<h2>3. Desktop and Mobile Operating Systems</h2>
<h3>Desktop OS</h3><ul><li>Windows</li><li>Linux</li><li>macOS</li></ul>
<h3>Mobile OS</h3><ul><li>Android</li><li>iOS</li><li>Symbian OS (legacy)</li><li>Windows Phone OS (discontinued)</li><li>BlackBerry OS (legacy)</li></ul>
<p><b>Currently dominant:</b> Android & iOS</p>

<hr/>

<h2>4. Evolution of Devices</h2>
<table border="1" cellpadding="6">
<tr><th>Device</th><th>Main Capabilities</th></tr>
<tr><td>Basic Mobile Phone</td><td>Calling, Messaging</td></tr>
<tr><td>PC / Laptop</td><td>Internet, Documents, Software</td></tr>
<tr><td>Smartphone</td><td>Internet, Apps, Camera, GPS, Payments, Social Media</td></tr>
</table>

<hr/>

<h2>5. Software Development Kits (SDKs)</h2>
<table border="1" cellpadding="6">
<tr><th>Technology</th><th>SDK</th></tr>
<tr><td>Java</td><td>JDK</td></tr>
<tr><td>Android</td><td>Android SDK</td></tr>
<tr><td>iOS</td><td>iOS SDK</td></tr>
</table>

<hr/>

<h2>6. React Native Development Approaches</h2>
<h3>A. React Native CLI</h3>
<ul>
<li>Full control and flexibility</li>
<li>Manual configuration</li>
<li>Complex setup</li>
<li>Requires Android Studio & Xcode</li>
<li>Direct native module access</li>
</ul>

<h3>B. Expo Framework</h3>
<ul>
<li>Minimal setup</li>
<li>Preconfigured environment</li>
<li>Faster development</li>
<li>Built-in APIs (Camera, Sensors, Media)</li>
<li>Recommended for students and academic projects</li>
</ul>

<hr/>

<h2>7. Navigation & Routing with Expo Router</h2>
<ul>
<li>File-based routing similar to Next.js</li>
<li>Routes inside <b>app/</b> folder</li>
<li>Folder structure = navigation hierarchy</li>
</ul>

<h3>Basic Routes</h3>
<table border="1" cellpadding="6">
<tr><th>URL</th><th>File</th></tr>
<tr><td>/</td><td>app/index.tsx</td></tr>
<tr><td>/home</td><td>app/home.tsx</td></tr>
</table>

<h3>Dynamic Routes</h3>
<pre>/[id].tsx</pre>
<ul>
<li>/1234 → id = 1234</li>
<li>/abc → id = abc</li>
</ul>

<h3>Nested Routes</h3>
<pre>
app/test/index.tsx   → /test
app/test/sample.tsx → /test/sample
</pre>

<h3>Route Groups (Hidden)</h3>
<pre>app/(auth)/login.tsx → /login</pre>

<h3>Layout Files (_layout.tsx)</h3>
<ul>
<li>Defines shared UI & navigation</li>
<li>Used for Stack & Tab navigation</li>
<li>Careful use of <code>()</code> and <code>[]</code></li>
</ul>

<p><b>End of Day 1</b></p>

<h1>React Native with Expo – Day 2</h1>
<h2>Project Setup & Development Workflow</h2>

<hr/>

<h2>1. Initial Project Setup</h2>
<ul>
<li><b>Project Folder:</b> task-manager-app</li>
<li><b>App Name:</b> TaskHub</li>
</ul>

<hr/>

<h2>2. Styling with NativeWind</h2>
<p>NativeWind allows Tailwind CSS utility classes in React Native:</p>
<ul>
<li>Faster UI development</li>
<li>Consistent design</li>
<li>Cleaner components</li>
</ul>

<hr/>

<h2>3. Running the Expo Project</h2>
<table border="1" cellpadding="6">
<tr><th>Command</th><th>Description</th></tr>
<tr><td>npm start</td><td>Starts development server</td></tr>
<tr><td>npx expo start</td><td>Starts Expo server</td></tr>
<tr><td>npx expo start -c</td><td>Clears cache</td></tr>
</table>
<p><b>.expo</b> folder stores cache files. Use <b>-c</b> to fix issues.</p>

<hr/>

<h2>4. Command Explanation</h2>
<ul>
<li><b>npx</b> – Run packages without global install</li>
<li><b>expo</b> – Expo project manager</li>
<li><b>start</b> – Launch Metro bundler</li>
<li><b>-c</b> – Clear cache</li>
</ul>

<hr/>

<h2>5. Recommended Project Structure</h2>
<pre>
app/
 ├── index.tsx
 ├── _layout.tsx
 ├── (auth)/
 │    ├── login.tsx
 │    ├── register.tsx
 │    └── _layout.tsx
 ├── (dashboard)/
 │    ├── home.tsx
 │    ├── profile.tsx
 │    ├── news.tsx
 │    ├── tasks.tsx
 │    └── _layout.tsx
</pre>

<hr/>

<h2>6. Installing Expo-Compatible Libraries</h2>
<pre>
npm install @expo/vector-icons
npx expo install @expo/vector-icons
</pre>
<p><b>expo install</b> ensures correct SDK compatibility.</p>

<hr/>

<h2>🎓 AMD Project Expectations</h2>
<h3>Mandatory</h3>
<ul>
<li>Firebase Authentication</li>
<li>CRUD Operations</li>
<li>Proper Navigation</li>
<li>User-friendly UI</li>
</ul>

<h3>Submission</h3>
<ul>
<li>Git commit history</li>
<li>Demo video</li>
<li>APK build file</li>
</ul>

<h3>Bonus Features</h3>
<ul>
<li>API integration</li>
<li>Advanced Firebase</li>
<li>Camera & native features</li>
</ul>

<p><b>End of Day 2</b></p>
