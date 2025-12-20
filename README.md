<h1 align="center">Advanced Mobile Application Development (AMD) – ITS2127</h1>
<p align="center">React Native with Expo – Detailed Lecture Notes</p>

<hr/>

<!-- ===================== DAY 1 ===================== -->

<h1>📘 Day 1: Foundations of Mobile Development</h1>

<h2>1. Understanding Application Platforms</h2>
<p>
Applications are software programs designed to run on different hardware platforms.
They can be categorized as follows:
</p>
<ul>
  <li><b>Desktop Applications:</b> Installed on PCs or laptops (e.g., Microsoft Word, Photoshop)</li>
  <li><b>Web Applications:</b> Run inside web browsers (e.g., Gmail, Google Docs, Trello)</li>
  <li><b>Mobile Applications:</b> Installed on smartphones and tablets (e.g., WhatsApp, Instagram)</li>
</ul>

<hr/>

<h2>2. Relationship Between Device, OS, and Software</h2>
<table border="1" cellpadding="6">
<tr><th>Component</th><th>Description</th></tr>
<tr><td>Device</td><td>Physical hardware such as PC, smartphone, or tablet</td></tr>
<tr><td>Operating System</td><td>Manages hardware and provides runtime environment</td></tr>
<tr><td>Applications</td><td>Software programs used by users</td></tr>
</table>

<h3>Human Analogy</h3>
<p>
Human → Life → Abilities <br/>
Device → OS → Applications
</p>
<p>
Just as abilities depend on life, applications depend on the operating system.
</p>

<hr/>

<h2>3. Desktop and Mobile Operating Systems</h2>

<h3>Desktop Operating Systems</h3>
<ul>
  <li>Windows</li>
  <li>Linux</li>
  <li>macOS</li>
</ul>

<h3>Mobile Operating Systems</h3>
<ul>
  <li>Android</li>
  <li>iOS</li>
  <li>Symbian OS (legacy)</li>
  <li>Windows Phone OS (discontinued)</li>
  <li>BlackBerry OS (legacy)</li>
</ul>

<p><b>Currently dominant platforms:</b> Android & iOS</p>

<hr/>

<h2>4. Evolution of Devices and Capabilities</h2>
<table border="1" cellpadding="6">
<tr><th>Device Type</th><th>Capabilities</th></tr>
<tr><td>Basic Mobile Phone</td><td>Calling, SMS</td></tr>
<tr><td>PC / Laptop</td><td>Internet, documents, software</td></tr>
<tr><td>Smartphone</td><td>Apps, GPS, camera, payments, social media</td></tr>
</table>

<hr/>

<h2>5. Software Development Kits (SDKs)</h2>
<p>
A Software Development Kit (SDK) is a collection of tools, libraries, and documentation
required to develop applications for a specific platform.
</p>

<table border="1" cellpadding="6">
<tr><th>Platform</th><th>SDK</th></tr>
<tr><td>Java</td><td>JDK</td></tr>
<tr><td>Android</td><td>Android SDK (Android Studio)</td></tr>
<tr><td>iOS</td><td>iOS SDK (Xcode – macOS only)</td></tr>
</table>

<hr/>

<h2>6. Native Mobile Development</h2>
<p>
Native development involves building applications for a single platform using
its official tools and programming languages.
</p>

<ul>
  <li><b>Android:</b> Java / Kotlin + Android Studio</li>
  <li><b>iOS:</b> Swift / Objective-C + Xcode</li>
</ul>

<h3>Advantages</h3>
<ul>
  <li>Maximum performance</li>
  <li>Full hardware access</li>
  <li>Best platform-specific UI/UX</li>
</ul>

<h3>Disadvantages</h3>
<ul>
  <li>Separate codebase per platform</li>
  <li>Higher development cost</li>
  <li>Requires multiple skill sets</li>
</ul>

<hr/>

<h2>7. Cross-Platform Mobile Development</h2>
<p>
Cross-platform development allows a single codebase to run on multiple platforms.
</p>

<ul>
  <li>Faster development</li>
  <li>Lower maintenance cost</li>
  <li>Consistent UI/UX</li>
</ul>

<h3>Popular Frameworks</h3>
<ul>
  <li>React Native</li>
  <li>Flutter</li>
  <li>Xamarin</li>
  <li>Ionic</li>
</ul>

<img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/mobile_app_architecture.png"
     style="width:70%; display:block; margin:auto; border:1px solid #ccc; padding:10px;" />

<hr/>

<h2>8. React Native Development Approaches</h2>

<h3>A. React Native CLI</h3>
<ul>
  <li>Manual environment setup</li>
  <li>Direct native module access</li>
  <li>Best for enterprise-level apps</li>
</ul>

<h3>B. Expo Framework</h3>
<ul>
  <li>Minimal setup</li>
  <li>Fast development cycle</li>
  <li>Built-in APIs</li>
  <li>Ideal for academic projects</li>
</ul>

<hr/>

<h2>9. Navigation & Routing Concepts (Expo Router)</h2>

<h3>File-Based Routing</h3>
<ul>
  <li>Routes defined using folder structure</li>
  <li>Supports nested and dynamic routes</li>
</ul>

<h3>Navigation Types</h3>
<ul>
  <li><b>Stack Navigation:</b> Sequential screen flow</li>
  <li><b>Tab Navigation:</b> Main application sections</li>
</ul>

<h3>Programmatic Navigation & Data Passing</h3>
<p>
Navigation can be triggered based on logic such as login success or user actions.
</p>

<ul>
  <li>Navigate after authentication</li>
  <li>Pass IDs or parameters via routes</li>
</ul>

<pre>
/tasks/123
</pre>

<p>
Here, <code>123</code> represents a dynamic parameter used to fetch task data.
</p>

<p><b>End of Day 1</b></p>

<hr/>

<!-- ===================== DAY 2 ===================== -->

<h1>📗 Day 2: Project Setup & Development Workflow</h1>

<h2>2.1 Initial Project Setup</h2>
<ul>
  <li>Project Name: <b>TaskHub</b></li>
  <li>Node.js version ≥ 18</li>
  <li>Create project using <code>npx expo init</code></li>
</ul>

<hr/>

<h2>2.2 Styling with NativeWind</h2>
<ul>
  <li>Utility-first styling</li>
  <li>Improved consistency</li>
  <li>Reduced custom stylesheet code</li>
</ul>

<hr/>

<h2>2.3 Running the Project</h2>
<table border="1" cellpadding="6">
<tr><th>Command</th><th>Purpose</th></tr>
<tr><td>npx expo start</td><td>Start development server</td></tr>
<tr><td>npx expo start -c</td><td>Clear cache</td></tr>
</table>

<hr/>

<h2>2.4 Implementing Navigators</h2>

<h3>Stack Navigator</h3>
<ul>
  <li>Authentication flows</li>
  <li>Detail screens</li>
</ul>

<h3>Tab Navigator</h3>
<ul>
  <li>Main dashboard</li>
  <li>Persistent navigation</li>
</ul>

<pre>
app/
 ├── (auth)/
 ├── (dashboard)/
</pre>

<hr/>

<h2>2.5 Recommended Project Structure</h2>
<pre>
app/
 ├── index.tsx
 ├── _layout.tsx
 ├── (auth)/
 └── (dashboard)/
</pre>

<hr/>

<h2>2.6 Installing Expo Libraries</h2>
<pre>
npx expo install @expo/vector-icons
</pre>

<hr/>

<h2>2.7 AMD / Final Year Project Requirements</h2>

<h3>Mandatory</h3>
<ul>
  <li>Firebase Authentication</li>
  <li>CRUD operations</li>
  <li>Proper navigation</li>
</ul>

<h3>Submission</h3>
<ul>
  <li>Git repository</li>
  <li>Demo video</li>
  <li>APK</li>
</ul>

<p><b>End of Day 2</b></p>
