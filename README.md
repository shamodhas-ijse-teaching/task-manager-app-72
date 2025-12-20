
<h1 align="center">Advanced Mobile Application Development (AMD) – ITS2127</h1>
<p align="center">React Native with Expo – Detailed Lecture Notes</p>

<hr/>

<!-- ===================== DAY 1 ===================== -->

<h1>📘 Day 1: Foundations of Mobile Development</h1>

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
<p>
Human → Life → Abilities <br/>
Device → OS → Applications
</p>
<p>Applications depend on the OS in the same way abilities depend on life.</p>

<hr/>

<h2>3. Desktop and Mobile Operating Systems</h2>

<h3>Desktop OS</h3>
<ul>
  <li>Windows</li>
  <li>Linux</li>
  <li>macOS</li>
</ul>

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
<p>An SDK (Software Development Kit) is a collection of tools, libraries, and documentation used to develop applications for a specific platform.</p>

<table border="1" cellpadding="6">
<tr><th>Technology</th><th>SDK</th></tr>
<tr><td>Java</td><td>JDK</td></tr>
<tr><td>Android</td><td>Android SDK (via Android Studio)</td></tr>
<tr><td>iOS</td><td>iOS SDK (via Xcode – macOS only)</td></tr>
</table>

<hr/>

<h2>6. Native Mobile Development</h2>
<p>Native mobile development refers to building applications specifically for a single platform using its official programming language and tools.</p>

<ul>
  <li><b>Android Native:</b> Java or Kotlin using Android Studio and Android SDK</li>
  <li><b>iOS Native:</b> Swift or Objective-C using Xcode and iOS SDK</li>
</ul>

<h3>Advantages</h3>
<ul>
  <li>Full access to device hardware (Camera, Sensors, GPS)</li>
  <li>High performance and speed</li>
  <li>Best platform-specific UI/UX</li>
  <li>Official support from platform vendors</li>
</ul>

<h3>Disadvantages</h3>
<ul>
  <li>Separate codebase for each platform</li>
  <li>Higher development and maintenance cost</li>
  <li>Requires platform-specific expertise</li>
</ul>

<p><b>Native development is preferred when:</b></p>
<ul>
  <li>High performance is required (Games, AR/VR)</li>
  <li>Deep hardware access is critical</li>
  <li>Strict platform-specific UI rules apply</li>
</ul>

<hr/>

<h2>7. Cross-Platform Mobile Development</h2>
<p>Cross-platform development allows developers to write a single codebase that runs on multiple platforms such as Android and iOS.</p>

<ul>
  <li>Faster development and deployment</li>
  <li>Lower maintenance cost</li>
  <li>Unified UI/UX across platforms</li>
</ul>

<h3>Popular Frameworks</h3>
<ul>
  <li>React Native (JavaScript / TypeScript)</li>
  <li>Flutter (Dart)</li>
  <li>Xamarin (C#)</li>
  <li>Ionic (JavaScript / Angular)</li>
</ul>

<h3>Cross-Platform Architecture</h3>
<img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/mobile_app_architecture.png"
     alt="Cross Platform Architecture"
     style="width:70%; display:block; margin:auto; border:1px solid #ccc; padding:10px;" />

<p><b>Explanation:</b> A single codebase is written using a cross-platform framework and deployed to both Android and iOS platforms.</p>

<hr/>

<h2>8. React Native Development Approaches</h2>

<h3>A. React Native CLI</h3>
<ul>
  <li>Manual setup of Android Studio & Xcode</li>
  <li>Direct access to native modules</li>
  <li>Suitable for large-scale and complex apps</li>
  <li>Requires native language knowledge</li>
</ul>

<p><b>Setup Resources:</b></p>
<ul>
  <li>
    <a href="https://github.com/shamodhas-ijse-teaching/file-hosting/blob/main/documents/Setup_Computer.md" target="_blank">
      Setup Computer for React Native CLI
    </a>
  </li>
  <li>
    <a href="https://github.com/shamodhas-ijse-teaching/react-native-cli-2025" target="_blank">
      React Native CLI Project Setup
    </a>
  </li>
</ul>

<h3>B. Expo Framework</h3>
<ul>
  <li>Minimal setup</li>
  <li>Preconfigured Metro bundler</li>
  <li>Fast refresh & hot reload</li>
  <li>Built-in APIs (Camera, Media, Sensors, Notifications)</li>
  <li>Ideal for academic & prototype projects</li>
</ul>

<h4>Expo Architecture</h4>
<img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/expo_architecture.png"
     alt="Expo Architecture"
     style="width:70%; display:block; margin:auto; border:1px solid #ccc; padding:10px;" />

<h4>Expo Real-World Example</h4>
<img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/expo_real_world_example.png"
     alt="Expo Real World Example"
     style="width:70%; display:block; margin:auto; border:1px solid #ccc; padding:10px;" />

<hr/>

<h2>9. Navigation & Routing with Expo Router</h2>
<ul>
  <li>File-based routing (similar to Next.js)</li>
  <li>Routes defined inside <b>app/</b> folder</li>
  <li>Supports nested and dynamic routes</li>
</ul>

<h3>Basic Routes</h3>
<table border="1" cellpadding="6">
<tr><th>URL</th><th>File</th></tr>
<tr><td>/</td><td>app/index.tsx</td></tr>
<tr><td>/home</td><td>app/home.tsx</td></tr>
</table>

<h3>Dynamic Routes</h3>
<pre>/[id].tsx</pre>

<h3>Nested Routes</h3>
<pre>
app/test/index.tsx   → /test
app/test/sample.tsx → /test/sample
</pre>

<h3>Route Groups</h3>
<pre>app/(auth)/login.tsx → /login</pre>

<h3>Layout Files</h3>
<ul>
  <li>Shared UI wrapper</li>
  <li>Used for Stack / Tab navigation</li>
</ul>

<p><b>End of Day 1</b></p>

<hr/>

<!-- ===================== DAY 2 ===================== -->

<h1>📗 Day 2: Project Setup & Development Workflow</h1>

<h2>2.1 Initial Project Setup</h2>
<ul>
  <li><b>Project Folder:</b> task-manager-app</li>
  <li><b>Application Name:</b> TaskHub</li>
  <li>Ensure Node.js ≥ 18</li>
  <li>Run <code>npx expo init task-manager-app</code></li>
</ul>

<hr/>

<h2>2.2 Styling with NativeWind</h2>
<ul>
  <li>Tailwind-style utility classes for React Native</li>
  <li>Faster UI development</li>
  <li>Cleaner and more readable component code</li>
</ul>

<hr/>

<h2>2.3 Running the Expo Project</h2>
<table border="1" cellpadding="6">
<tr><th>Command</th><th>Description</th></tr>
<tr><td>npm start</td><td>Start development server</td></tr>
<tr><td>npx expo start</td><td>Launch Expo development tools</td></tr>
<tr><td>npx expo start -c</td><td>Clear cache & restart server</td></tr>
</table>

<p>
<b>Note:</b> The <code>.expo</code> folder stores cache files.  
Use <code>-c</code> when styles or components do not update correctly.
</p>

<hr/>

<h2>2.4 Implementing Navigators</h2>
<p>
Navigation is a core part of mobile applications. In React Native with Expo Router, 
navigation is handled using layouts and file-based routing.
</p>

<h3>A. Stack Navigation (Sequential Flow)</h3>
<p>
Stack navigation is used when screens follow a step-by-step or hierarchical flow.
</p>
<ul>
  <li>Login → Register → Dashboard</li>
  <li>Task List → Task Details → Edit Task</li>
</ul>

<p><b>Characteristics:</b></p>
<ul>
  <li>New screens are pushed on top of the stack</li>
  <li>Back navigation is automatic</li>
  <li>Commonly used for authentication flows</li>
</ul>

<p><b>Example Folder Structure:</b></p>
<pre>
app/
 ├── _layout.tsx      ← Stack layout
 ├── index.tsx
 ├── details.tsx
</pre>

<hr/>

<h3>B. Tab Navigation (Main Sections)</h3>
<p>
Tab navigation is used for the main sections of an application that users frequently switch between.
</p>

<ul>
  <li>Home</li>
  <li>Tasks</li>
  <li>Profile</li>
</ul>

<p><b>Characteristics:</b></p>
<ul>
  <li>Tabs are always visible</li>
  <li>Each tab maintains its own screen state</li>
  <li>Improves user experience in dashboard-based apps</li>
</ul>

<p><b>Example Folder Structure:</b></p>
<pre>
app/
 ├── (dashboard)/
 │    ├── _layout.tsx   ← Tab layout
 │    ├── home.tsx
 │    ├── tasks.tsx
 │    └── profile.tsx
</pre>

<hr/>

<h2>2.5 Programmatic Navigation & Passing Data</h2>
<p>
Programmatic navigation allows moving between screens based on user actions
(button clicks, form submission, authentication success).
</p>

<h3>Programmatic Navigation</h3>
<ul>
  <li>Triggered using buttons or events</li>
  <li>Used after login, logout, or task creation</li>
</ul>

<p><b>Conceptual Example:</b></p>
<ul>
  <li>User logs in → Navigate to dashboard</li>
  <li>User selects a task → Navigate to task details screen</li>
</ul>

<h3>Passing Data Between Screens</h3>
<p>
Data can be passed using route parameters.
</p>

<ul>
  <li>Task ID</li>
  <li>User ID</li>
  <li>Category or status</li>
</ul>

<p><b>Route Example:</b></p>
<pre>
/tasks/123
</pre>

<p>
Here, <code>123</code> represents a dynamic parameter (task ID) that can be used
to fetch and display task-specific data.
</p>

<hr/>

<h2>2.6 Recommended Project Structure</h2>
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

<h2>2.7 Installing Expo-Compatible Libraries</h2>
<pre>
npx expo install @expo/vector-icons
</pre>

<p>
Using <code>expo install</code> ensures library compatibility with the current Expo SDK.
</p>

<hr/>

<h2>2.8 AMD / Final Year Project Requirements</h2>

<h3>Mandatory</h3>
<ul>
  <li>Firebase Authentication (Login & Register)</li>
  <li>CRUD functionality</li>
  <li>Proper navigation (Stack + Tabs)</li>
  <li>Responsive and user-friendly UI</li>
</ul>

<h3>Submission</h3>
<ul>
  <li>Git repository with commit history</li>
  <li>Demo video / screen recording</li>
  <li>APK build file</li>
</ul>

<h3>Bonus</h3>
<ul>
  <li>API integration</li>
  <li>Advanced Firebase features</li>
  <li>Camera, sensors, or media access</li>
</ul>

<p><b>End of Day 2</b></p>
