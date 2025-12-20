<h1 align="center">React Native with Expo – Detailed Lecture Notes</h1>

<hr/>

<h1>📘 Day 1: Foundations of Application Development & Cross-Platform Development</h1>

<h2>1. Understanding Application Platforms</h2>
<p>Applications are software programs designed to run on different hardware platforms. They can be categorized as:</p>
<ul>
  <li><b>Desktop Applications:</b> Installed on PCs or laptops. Examples: Microsoft Word, Photoshop.</li>
  <li><b>Web Applications:</b> Accessed through browsers. Examples: Gmail, Trello, Google Docs.</li>
  <li><b>Mobile Applications:</b> Installed on smartphones or tablets. Examples: WhatsApp, Instagram, TaskHub.</li>
</ul>
<p>Each platform has its own development requirements, limitations, and programming frameworks.</p>

<hr/>

<h2>2. Relationship Between Device, OS, and Software</h2>
<p>Understanding how applications work requires understanding the hardware and software layers.</p>
<table border="1" cellpadding="6">
<tr><th>Component</th><th>Description</th></tr>
<tr><td>Device</td><td>Physical hardware (PC, Mobile Phone, Tablet)</td></tr>
<tr><td>Operating System (OS)</td><td>Manages hardware and provides an environment for running applications</td></tr>
<tr><td>Software / Apps</td><td>Programs users interact with</td></tr>
</table>

<h3>Human Analogy</h3>
<p>Human → Life → Abilities<br/>Device → Operating System → Applications</p>
<p>Just like abilities depend on life, applications depend on the operating system to function properly.</p>

<hr/>

<h2>3. Desktop and Mobile Operating Systems</h2>
<h3>Desktop OS</h3>
<ul><li>Windows</li><li>Linux</li><li>macOS</li></ul>

<h3>Mobile OS</h3>
<ul>
<li>Android</li>
<li>iOS</li>
<li>Symbian OS (legacy)</li>
<li>Windows Phone OS (discontinued)</li>
<li>BlackBerry OS (legacy)</li>
</ul>
<p><b>Currently dominant:</b> Android and iOS.</p>

<hr/>

<h2>4. Evolution of Devices and Capabilities</h2>
<table border="1" cellpadding="6">
<tr><th>Device</th><th>Main Capabilities</th></tr>
<tr><td>Basic Mobile Phone</td><td>Calling, Messaging</td></tr>
<tr><td>PC / Laptop</td><td>Internet, Documents, Software</td></tr>
<tr><td>Smartphone</td><td>Internet, Apps, Camera, GPS, Payments, Social Media</td></tr>
</table>
<p>Modern smartphones combine the functionalities of PCs and mobile phones into a single portable device.</p>

<hr/>

<h2>5. Software Development Kits (SDKs)</h2>
<p>An SDK (Software Development Kit) is a set of tools, libraries, and documentation that developers use to build applications for a specific platform.</p>
<table border="1" cellpadding="6">
<tr><th>Technology</th><th>SDK</th></tr>
<tr><td>Java</td><td>JDK (Java Development Kit)</td></tr>
<tr><td>Android</td><td>Android SDK (installed with Android Studio)</td></tr>
<tr><td>iOS</td><td>iOS SDK (requires Xcode on macOS)</td></tr>
</table>
<p>Without the correct SDK, applications cannot be compiled, tested, or run on the target platform.</p>

<hr/>

<h2>6. Cross-Platform Mobile Development</h2>
<p>Cross-platform development allows a single codebase to run on multiple operating systems (Android, iOS) with minimal modifications. Benefits include:</p>
<ul>
  <li>Faster development time</li>
  <li>Lower maintenance costs</li>
  <li>Unified UI/UX across platforms</li>
</ul>
<p>Popular frameworks for cross-platform mobile development:</p>
<ul>
  <li>React Native (JavaScript/TypeScript)</li>
  <li>Flutter (Dart)</li>
  <li>Xamarin (C#)</li>
  <li>Ionic (JavaScript/Angular)</li>
</ul>

<hr/>

<h2>7. React Native Development Approaches</h2>

<h3>A. React Native CLI</h3>
<p>The <b>React Native CLI</b> provides a full, flexible environment for native development:</p>
<ul>
<li>Manual setup of Android Studio (Android SDK) and Xcode (iOS SDK)</li>
<li>Direct access to native modules and platform-specific code</li>
<li>Supports large-scale or highly customized applications</li>
<li>Requires knowledge of native development (Java/Kotlin for Android, Swift/Objective-C for iOS)</li>
</ul>
<p>For detailed setup and getting started with React Native CLI: 
<a href="https://reactnative.dev/docs/environment-setup" target="_blank">Official React Native CLI Setup Guide</a></p>

<h3>B. Expo Framework</h3>
<p><b>Expo</b> is a framework on top of React Native that simplifies development:</p>
<ul>
<li>Minimal setup required, no native build tools initially</li>
<li>Preconfigured environment with Metro bundler</li>
<li>Fast development with live reload</li>
<li>Built-in APIs: Camera, Sensors, Media, Push Notifications</li>
<li>Recommended for students and academic projects</li>
</ul>

<hr/>

<h2>8. Navigation & Routing with Expo Router</h2>
<p>Expo Router provides file-based routing similar to Next.js:</p>
<ul>
<li>Routes defined in the <b>app/</b> directory</li>
<li>Each file corresponds to a screen</li>
<li>Folder hierarchy determines nested routes</li>
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
<li>Careful use of <code>()</code> for hidden folders and <code>[]</code> for dynamic routes</li>
</ul>

<p><b>End of Day 1</b></p>

<hr/>

<h1>📗 Day 2: Project Setup & Development Workflow</h1>

<h2>1. Initial Project Setup</h2>
<ul>
<li><b>Project Folder Name:</b> task-manager-app</li>
<li><b>Application Name:</b> TaskHub</li>
<li>Ensure Node.js (>=18) and npm/yarn are installed.</li>
</ul>

<hr/>

<h2>2. Styling with NativeWind</h2>
<p>NativeWind allows the use of Tailwind CSS utility classes in React Native:</p>
<ul>
<li>Rapid UI development</li>
<li>Consistent design system</li>
<li>Cleaner and reusable components</li>
</ul>

<hr/>

<h2>3. Running the Expo Project</h2>
<table border="1" cellpadding="6">
<tr><th>Command</th><th>Description</th></tr>
<tr><td>npm start</td><td>Start development server</td></tr>
<tr><td>npx expo start</td><td>Start Expo development server</td></tr>
<tr><td>npx expo start -c</td><td>Clear Metro bundler cache and restart server</td></tr>
</table>
<p>The <b>.expo</b> folder stores cache and temporary files.</p>

<hr/>

<h2>4. Recommended Project Structure</h2>
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

<h2>5. Installing Expo-Compatible Libraries</h2>
<pre>
npm install @expo/vector-icons
npx expo install @expo/vector-icons
</pre>
<p>Use <b>expo install</b> to ensure compatibility with your Expo SDK version.</p>

<hr/>

<h2>6. AMD / Final Year Project Requirements</h2>
<h3>Mandatory Features</h3>
<ul>
<li>Firebase Authentication (Login/Register)</li>
<li>CRUD operations for tasks</li>
<li>Proper navigation (file-based + nested)</li>
<li>User-friendly responsive UI</li>
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
<li>Advanced Firebase features</li>
<li>Camera, sensors, media access via native modules</li>
</ul>

<p><b>End of Day 2</b></p>
