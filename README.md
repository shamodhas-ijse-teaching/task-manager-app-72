<h1 align="center">Advanced Mobile Application Development (AMD) – ITS2127</h1>
<p align="center">React Native with Expo – Detailed Lecture Notes</p>

<hr/>

<h1>📘 Day 1: Foundations of Application Development & Cross-Platform Development</h1>

<h2>1. Understanding Application Platforms</h2>
<p>Applications are software programs designed to run on different hardware platforms. They can be categorized as:</p>
<ul>
  <li><b>Desktop Applications:</b> Installed on PCs or laptops. Examples: Microsoft Word, Photoshop.</li>
  <li><b>Web Applications:</b> Accessed through browsers. Examples: Gmail, Trello, Google Docs.</li>
  <li><b>Mobile Applications:</b> Installed on smartphones or tablets. Examples: WhatsApp, Instagram, TaskHub.</li>
</ul>
<p>Each platform has its own development requirements, limitations, and frameworks.</p>

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
<p>Applications depend on the OS in the same way abilities depend on life.</p>

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
<p><b>Currently dominant:</b> Android & iOS</p>

<hr/>

<h2>4. Evolution of Devices and Capabilities</h2>
<table border="1" cellpadding="6">
<tr><th>Device</th><th>Main Capabilities</th></tr>
<tr><td>Basic Mobile Phone</td><td>Calling, Messaging</td></tr>
<tr><td>PC / Laptop</td><td>Internet, Documents, Software</td></tr>
<tr><td>Smartphone</td><td>Internet, Apps, Camera, GPS, Payments, Social Media</td></tr>
</table>

<hr/>

<h2>5. Software Development Kits (SDKs)</h2>
<p>An SDK (Software Development Kit) is a set of tools, libraries, and documentation used to build apps for a specific platform.</p>
<table border="1" cellpadding="6">
<tr><th>Technology</th><th>SDK</th></tr>
<tr><td>Java</td><td>JDK</td></tr>
<tr><td>Android</td><td>Android SDK (via Android Studio)</td></tr>
<tr><td>iOS</td><td>iOS SDK (via Xcode, macOS only)</td></tr>
</table>

<hr/>

<h2>6. Native Mobile Development</h2>
<p>Native mobile development involves creating applications specifically for a single platform using the platform's official language and tools.</p>
<ul>
<li><b>Android Native:</b> Java or Kotlin using Android Studio and Android SDK</li>
<li><b>iOS Native:</b> Swift or Objective-C using Xcode and iOS SDK</li>
</ul>
<h3>Advantages:</h3>
<ul>
<li>Full access to device hardware (Camera, Sensors, GPS)</li>
<li>High performance and speed</li>
<li>Better platform-specific UI/UX</li>
<li>Official support from platform vendors</li>
</ul>

<h3>Disadvantages:</h3>
<ul>
<li>Separate codebase for each platform → Higher maintenance</li>
<li>Longer development time</li>
<li>Requires knowledge of platform-specific languages</li>
</ul>

<p>Native development is preferred when:</p>
<ul>
<li>High performance is required (gaming, AR/VR apps)</li>
<li>Full access to hardware features is critical</li>
<li>Platform-specific UI/UX is needed</li>
</ul>

<hr/>

<h2>7. Cross-Platform Mobile Development</h2>
<p>Cross-platform development allows a single codebase to run on multiple operating systems (Android, iOS), reducing development time and maintenance costs.</p>

<ul>
  <li>Faster development and deployment</li>
  <li>Lower maintenance costs</li>
  <li>Unified UI/UX across platforms</li>
</ul>

<p>Popular cross-platform frameworks:</p>
<ul>
  <li>React Native (JavaScript / TypeScript)</li>
  <li>Flutter (Dart)</li>
  <li>Xamarin (C#)</li>
  <li>Ionic (JS / Angular)</li>
</ul>

<h3>Illustration of Cross-Platform Development</h3>
<p>The diagram below shows how a single codebase can be used across multiple platforms:</p>
<img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/mobile_app_architecture.png" 
     alt="Cross-Platform Mobile Development Diagram" 
     style="width:70%; display:block; margin:auto; border:1px solid #ccc; padding:10px;" />

<p><b>Explanation:</b> A single codebase is written using a cross-platform framework (React Native, Flutter, Xamarin, Ionic) and deployed to both Android and iOS platforms. This allows developers to save time, ensure consistency, and maintain a unified user experience.</p>

</ul>

<hr/>

<h2>8. React Native Development Approaches</h2>

<h3>A. React Native CLI</h3>
<p>The <b>React Native CLI</b> provides a full environment for building native apps:</p>
<ul>
<li>Manual setup of Android Studio (Android SDK) and Xcode (iOS SDK)</li>
<li>Direct access to native modules and platform-specific code</li>
<li>Ideal for complex or large-scale apps</li>
<li>Requires knowledge of native development (Java/Kotlin for Android, Swift/Obj-C for iOS)</li>
</ul>

<p>💻 Additional setup guides:</p>
<ul>
<li><a href="https://github.com/shamodhas-ijse-teaching/file-hosting/blob/main/documents/Setup_Computer.md" target="_blank">Setup Computer for React Native CLI</a></li>
<li><a href="https://github.com/shamodhas-ijse-teaching/file-hosting/blob/main/documents/Setup_CLI_Project.md" target="_blank">Setup React Native CLI Project</a></li>
</ul>

<h3>B. Expo Framework</h3>
<p>Expo is a framework on top of React Native that simplifies development:</p>
<ul>
<li>Minimal setup required</li>
<li>Preconfigured environment with Metro bundler</li>
<li>Faster development and live reload</li>
<li>Built-in APIs: Camera, Sensors, Media, Push Notifications</li>
<li>Recommended for academic and prototype projects</li>
</ul>

<!-- Expo Architecture Diagram -->
<h4>Expo Architecture</h4>
<img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/expo_architecture.png" 
     alt="Expo Architecture Diagram" 
     style="width:70%; display:block; margin:auto; border:1px solid #ccc; padding:10px;" />
<p><b>Explanation:</b> This diagram shows the internal architecture of Expo, including the framework, APIs, and development tools.</p>

<!-- Real-World Example Diagram -->
<h4>Expo Real-World Example</h4>
<img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/expo_real_world_example.png" 
     alt="Expo Real-World Example Diagram" 
     style="width:70%; display:block; margin:auto; border:1px solid #ccc; padding:10px;" />
<p><b>Explanation:</b> This diagram illustrates a real-world scenario where a React Native / Expo app interacts with backend APIs, cloud services, and device features (Camera, GPS, Notifications) to deliver a full mobile experience.</p>


<hr/>

<h2>9. Navigation & Routing with Expo Router</h2>
<p>File-based routing similar to Next.js:</p>
<ul>
<li>All routes inside <b>app/</b> folder</li>
<li>Each file corresponds to a screen</li>
<li>Folder structure defines nested routes</li>
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
<li>Shared UI wrapper</li>
<li>Used for Stack & Tab navigation</li>
<li>Careful use of <code>()</code> and <code>[]</code></li>
</ul>

<p><b>End of Day 1</b></p>
