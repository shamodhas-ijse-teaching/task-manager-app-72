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
<tr><td>Operating System (OS)</td><td>Manages hardware and provides runtime environment</td></tr>
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
<tr><td>Java</td><td>JDK (Java Development Kit)</td></tr>
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
  <li>Full access to device hardware</li>
  <li>Best platform-specific UI/UX</li>
</ul>

<h3>Disadvantages</h3>
<ul>
  <li>Separate codebase per platform</li>
  <li>Higher development and maintenance cost</li>
  <li>Requires platform-specific expertise</li>
</ul>

<hr/>

<h2>7. Cross-Platform Mobile Development</h2>
<p>
Cross-platform development allows a single codebase to run on multiple platforms
such as Android and iOS.
</p>

<ul>
  <li>Faster development cycle</li>
  <li>Lower maintenance cost</li>
  <li>Consistent UI/UX across platforms</li>
</ul>

<h3>Popular Cross-Platform Frameworks</h3>
<ul>
  <li>React Native</li>
  <li>Flutter</li>
  <li>Xamarin</li>
  <li>Ionic</li>
</ul>

<img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/mobile_app_architecture.png"
     alt="Cross Platform Architecture"
     style="width:70%; display:block; margin:auto; border:1px solid #ccc; padding:10px;" />

<hr/>

<h2>8. React Native Development Approaches</h2>

<h3>A. React Native CLI</h3>
<ul>
  <li>Full React Native environment</li>
  <li>Manual setup of Android Studio & Xcode</li>
  <li>Direct access to native modules</li>
  <li>Best suited for large-scale enterprise applications</li>
</ul>

<h3>B. Expo Framework</h3>
<ul>
  <li>React Native framework + workflow</li>
  <li>Minimal environment setup</li>
  <li>Fast development with Expo Go</li>
  <li>Built-in APIs (Camera, Media, Sensors, Notifications)</li>
  <li>Highly suitable for academic and prototype projects</li>
</ul>

<hr/>

<h2>9. Navigation & Routing Concepts (Expo Router)</h2>

<h3>File-Based Routing</h3>
<ul>
  <li>Routing is based on folder and file structure</li>
  <li>Main entry file: <code>app/index.tsx</code></li>
  <li>Supports nested, grouped, and dynamic routes</li>
</ul>

<h3>Examples</h3>
<pre>
/           → app/index.tsx
/home       → app/home.tsx
/[id]       → app/[id].tsx
/test       → app/test/index.tsx
/test/123   → app/test/[id].tsx
/login      → app/(auth)/login.tsx
</pre>

<h3>Navigation Types</h3>
<ul>
  <li><b>Stack Navigation:</b> Sequential flows (Login → Dashboard)</li>
  <li><b>Tab Navigation:</b> Main sections (Home, Tasks, Profile)</li>
</ul>

<h3>Programmatic Navigation & Data Passing</h3>
<p>
Navigation can be triggered by logic such as authentication success
or user interaction. Data is passed using route parameters.
</p>

<pre>
/tasks/123
</pre>

<p>
Here, <code>123</code> represents a dynamic task ID.
</p>

<p><b>End of Day 1</b></p>

<hr/>

<!-- ===================== DAY 2 ===================== -->

<h1>📗 Day 2: Project Setup & Development Workflow</h1>

<h2>2.1 Initial Project Setup</h2>
<ul>
  <li><b>Project Folder:</b> task-manager-app</li>
  <li><b>Application Name:</b> TaskHub</li>
  <li>Node.js version ≥ 18</li>
  <li>Create project using <code>npx expo init</code></li>
</ul>

<hr/>

<h2>2.2 Styling with NativeWind</h2>
<ul>
  <li>Tailwind CSS for React Native</li>
  <li>Utility-first styling approach</li>
  <li>Improves UI consistency and development speed</li>
</ul>

<hr/>

<h2>2.3 Running the Project</h2>
<table border="1" cellpadding="6">
<tr><th>Command</th><th>Purpose</th></tr>
<tr><td>npm start</td><td>Start development server</td></tr>
<tr><td>npx expo start</td><td>Launch Expo development tools</td></tr>
<tr><td>npx expo start -c</td><td>Clear Metro bundler cache</td></tr>
</table>

<p>
The <code>.expo</code> folder contains cached files.
Use <code>-c</code> if changes are not reflected correctly.
</p>

<hr/>

<h2>2.4 Recommended Project Structure</h2>
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
 │    ├── tasks.tsx
 │    ├── profile.tsx
 │    └── _layout.tsx
</pre>

<hr/>

<h2>2.5 Installing Expo-Compatible Libraries</h2>
<pre>
npx expo install @expo/vector-icons
</pre>

<p>
Using <code>expo install</code> ensures version compatibility with the current Expo SDK.
</p>

<hr/>

<h2>2.6 Expo – Official Documentation</h2>
<ul>
  <li>
    <a href="https://docs.expo.dev/" target="_blank">
      Expo Documentation (Official)
    </a>
  </li>
  <li>
    <a href="https://docs.expo.dev/router/introduction/" target="_blank">
      Expo Router – File Based Routing
    </a>
  </li>
  <li>
    <a href="https://docs.expo.dev/workflow/expo-go/" target="_blank">
      Expo Go – Run Apps on Real Devices
    </a>
  </li>
  <li>
    <a href="https://docs.expo.dev/versions/latest/sdk/" target="_blank">
      Expo SDK API Reference
    </a>
  </li>
</ul>

<hr/>

<h2>2.7 AMD / Final Year Project Requirements</h2>

<h3>Mandatory</h3>
<ul>
  <li>Firebase Authentication (Login & Register)</li>
  <li>CRUD operations</li>
  <li>Proper navigation (Stack + Tabs)</li>
  <li>User-friendly UI</li>
</ul>

<h3>Submission</h3>
<ul>
  <li>Git repository with commit history</li>
  <li>Demo video</li>
  <li>APK / build output</li>
</ul>

<h3>Bonus</h3>
<ul>
  <li>API integration</li>
  <li>Advanced Firebase features</li>
  <li>Native modules (Camera, Media, Sensors)</li>
</ul>

<p><b>End of Day 2</b></p>
