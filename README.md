<h1 align="center">Advanced Mobile Application Development (AMD) – ITS2127</h1>
<p align="center">Detailed Lecture Notes</p>

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
<p>A <b>Software Development Kit (SDK)</b> is a set of <b>tools</b>, <b>libraries</b>, and <b>documentation</b> that developers use to create applications for a specific platform. SDKs provide essential resources for <b>building</b>, <b>testing</b>, and <b>deploying</b> applications efficiently.</p>

<p>All SDKs are built around a strong <b>programming language foundation</b>, enabling developers to create <b>robust</b>, <b>scalable</b>, and <b>platform-specific applications</b>. They typically include <b>compilers</b>, <b>debuggers</b>, <b>APIs</b>, and <b>sample code</b> to simplify and accelerate the development process.</p>

<table border="1" cellpadding="6">
  <tr>
    <th>Technology</th>
    <th>SDK</th>
  </tr>
  <tr>
    <td>Java</td>
    <td>JDK (Java Development Kit)</td>
  </tr>
  <tr>
    <td>Android</td>
    <td>Android SDK (via Android Studio)</td>
  </tr>
  <tr>
    <td>iOS</td>
    <td>iOS SDK (via Xcode – macOS only)</td>
  </tr>
</table>

<hr/>

<h2>6. Native Mobile Development</h2>
<p>Native mobile development refers to building applications specifically for a single platform using its official programming language and tools.</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/native_mobile_development.png" 
       alt="Native Mobile Development Diagram" 
       style="width:100%; max-width:1200px; height:auto;">
  <br>
  <b>Figure: Native Mobile Development Architecture</b>
</p>

<ul>
  <li><b>Native Android:</b> Java or Kotlin using <b>Android SDK</b> (via <b>Android Studio – Integrated Development Environment</b>)</li>
  <li><b>Native iOS:</b> Swift or Objective-C using <b>iOS SDK</b> (via <b>Xcode – Integrated Development Environment</b>)</li>
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

<!-- Image at the top with figure title -->
<p align="center">
  <img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/mobile_app_architecture.png"
       alt="Cross Platform Architecture"
       style="width:50%; max-width:1200px; display:block; margin:auto; border:1px solid #ccc; padding:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
  <br>
  <b>Figure: Cross-Platform Mobile Development Architecture</b>
</p>

<p><b>Cross-platform mobile development</b> allows developers to write a <b>single codebase</b> that runs on multiple platforms, such as <b>Android</b> and <b>iOS</b>. This approach reduces development time and effort while ensuring consistent functionality across devices.</p>

<h3>Advantages</h3>
<ul>
  <li><b>Faster development and deployment:</b> One codebase for multiple platforms accelerates release cycles.</li>
  <li><b>Lower maintenance cost:</b> Updates and bug fixes are applied once for all platforms.</li>
  <li><b>Unified UI/UX across platforms:</b> Ensures a consistent user experience on Android and iOS devices.</li>
</ul>

<h3>Popular Frameworks</h3>
<ul>
  <li><b>React Native</b> (JavaScript / TypeScript)</li>
  <li><b>Flutter</b> (Dart)</li>
  <li><b>Xamarin</b> (C#)</li>
  <li><b>Ionic</b> (JavaScript / Angular)</li>
</ul>

<p><b>Explanation:</b> In cross-platform development, a <b>single codebase</b> is written using frameworks like <b>React Native</b>, <b>Flutter</b>, or <b>Xamarin</b> and deployed to both <b>Android</b> and <b>iOS</b>. This approach allows for <b>faster development</b>, <b>simpler maintenance</b>, and a <b>consistent user experience</b> across multiple devices.</p>

<hr/>
<h2>8. React Native Development Approaches</h2>

<h3>A. React Native CLI</h3>

<p align="center">
  <img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/react_native_cli.png"
       alt="React Native CLI Architecture"
       style="width:50%; max-width:800px; border:1px solid #ccc; padding:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
  <br>
  <b>Figure: React Native CLI Architecture Overview</b>
</p>

<p><b>React Native CLI</b> is the “full control” approach to building React Native apps. Some call it the <i>bare-bones approach</i> — you have access to everything and can tweak the native code, optimize performance, and implement advanced features. Perfect for big apps or when you need something highly customized.</p>

<ul>
  <li><b>Manual setup:</b> Requires installing and configuring <b>Android Studio</b> and <b>Xcode</b>.</li>
  <li><b>Direct access to native modules:</b> Write custom Android or iOS code whenever needed.</li>
  <li><b>Great for complex apps:</b> Ideal for apps requiring high performance or advanced features.</li>
  <li><b>Requires some native knowledge:</b> Java/Kotlin for Android, Swift/Objective-C for iOS.</li>
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
<p><b>Expo</b> is like a ready-to-go toolkit built on top of React Native. You don’t need to configure Android Studio or Xcode at first — Expo handles the setup and provides handy APIs for camera, notifications, sensors, and more. Great for learning, prototypes, or small to medium apps.</p>

<ul>
  <li><b>Minimal setup:</b> Start coding quickly without installing native tools.</li>
  <li><b>Preconfigured Metro bundler:</b> Automatically compiles and runs your app.</li>
  <li><b>Fast refresh & hot reload:</b> See changes instantly as you code.</li>
  <li><b>Built-in APIs:</b> Camera, media, sensors, notifications, and more without writing native code.</li>
  <li><b>Perfect for learning or prototypes:</b> Ideal for academic projects or quick experiments.</li>
</ul>

<!-- Expo images side by side -->
<div style="display:flex; justify-content:space-between; gap:20px; flex-wrap:wrap;">
  <div style="flex:1; min-width:300px; text-align:center;">
    <img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/expo_architecture.png"
         alt="Expo Architecture"
         style="width:100%; max-width:600px; border:1px solid #ccc; padding:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
    <br>
    <b>Figure: Expo Architecture Overview</b>
  </div>
  <div style="flex:1; min-width:300px; text-align:center;">
    <img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/expo_real_world_example.png"
         alt="Expo Real World Example"
         style="width:100%; max-width:600px; border:1px solid #ccc; padding:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
    <br>
    <b>Figure: Real-World Example of an Expo App</b>
  </div>
</div>

<p><b>Key Differences Between React Native CLI and Expo:</b></p>
<table cellpadding="6" cellspacing="0" 
       style="width:100%; border-collapse: collapse;">
  <tr>
    <th>Feature</th>
    <th>React Native CLI</th>
    <th>Expo</th>
  </tr>
  <tr>
    <td>Setup</td>
    <td>Manual setup of Android Studio & Xcode</td>
    <td>Minimal setup, preconfigured environment</td>
  </tr>
  <tr>
    <td>Native Modules</td>
    <td>Full access, can write custom native code</td>
    <td>Limited to built-in APIs; eject required for custom native modules</td>
  </tr>
  <tr>
    <td>Best Use Case</td>
    <td>Large, complex apps with high performance needs</td>
    <td>Learning, prototypes, small to medium apps</td>
  </tr>
  <tr>
    <td>Ease of Use</td>
    <td>Requires knowledge of native languages</td>
    <td>Beginner-friendly, no native knowledge required</td>
  </tr>
</table>

<p><b>Summary:</b> React Native CLI is like having the full toolbox — some call it the <i>bare-bones approach</i>. You can build anything, but you need some experience. Expo is like a ready-made toolkit — easier to start with and great for learning or quick projects. Choose the approach based on your project needs and experience level.</p>

<hr/>

<h2>9. Navigation & Routing with Expo Router</h2>

<p><b>Expo Router</b> is a file-based routing system for React Native, inspired by Next.js. It automatically generates routes based on the folder structure inside the <code>app/</code> directory. This approach simplifies navigation and keeps your project organized.</p>

<ul>
  <li>File-based routing (similar to Next.js)</li>
  <li>Routes are automatically generated from the <b>app/</b> folder</li>
  <li>Supports nested routes, dynamic routes, and route groups</li>
  <li>Integrates seamlessly with Stack, Tab, and Drawer navigation</li>
</ul>

<hr>
<h3>9.1 Key Files in Expo Router</h3>
<ul>
  <li><b>app/index.tsx</b> – <b>Application entry point</b>. This file corresponds to the root route <code>/</code> of your app.</li>
  <li><b>index.tsx</b> – Default route for a folder:
    <ul>
      <li><code>app/home/index.tsx</code> → <code>/home</code></li>
      <li><code>app/test/index.tsx</code> → <code>/test</code></li>
    </ul>
  </li>
  <li><b>_layout.tsx</b> – Layout file for a folder. Wraps all pages in that folder with shared UI (header, footer, navigation). Example:
    <ul>
      <li><code>app/(auth)/_layout.tsx</code> wraps login and register pages.</li>
    </ul>
  </li>
  <li><b>[param].tsx</b> – Dynamic route file. The name in brackets becomes a URL parameter:
    <ul>
      <li><code>app/profile/[id].tsx</code> → /profile/123, /profile/456</li>
    </ul>
  </li>
</ul>

<hr>
<h3>9.2 Basic Routes</h3>
<p>Basic route mapping uses file names:</p>
<table border="1" cellpadding="6" cellspacing="0" 
       style="width:100%; border-collapse: collapse; table-layout: auto;">
  <tr style="background-color:#f2f2f2;">
    <th style="padding:8px;">URL</th>
    <th style="padding:8px;">File</th>
  </tr>
  <tr>
    <td style="padding:8px;">/</td>
    <td style="padding:8px;">app/index.tsx</td>
  </tr>
  <tr>
    <td style="padding:8px;">/home</td>
    <td style="padding:8px;">app/home.tsx</td>
  </tr>
  <tr>
    <td style="padding:8px;">/about</td>
    <td style="padding:8px;">app/about.tsx</td>
  </tr>
</table>

<hr>
<h3>9.3 Dynamic Routes</h3>
<p>Use square brackets <code>[]</code> for routes with variables:</p>
<pre style="background-color:#f9f9f9; padding:10px; border-radius:5px;">
app/[id].tsx   → /123, /profile, /product-45
</pre>

<p><b>Example:</b></p>
<pre style="background-color:#f9f9f9; padding:10px; border-radius:5px;">
import { Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Page() {
  const params = useLocalSearchParams();
  return &lt;Text&gt;Dynamic Page: {params.id}&lt;/Text&gt;;
}
</pre>

<hr>
<h3>9.4 Nested Routes</h3>
<p>Nested folders define nested routes:</p>
<pre style="background-color:#f9f9f9; padding:10px; border-radius:5px;">
app/test/index.tsx         → /test
app/test/sample.tsx        → /test/sample
app/test/profile/[id].tsx  → /test/profile/123
</pre>

<hr>
<h3>9.5 Route Groups</h3>
<p>Use parentheses <code>()</code> to group routes logically without affecting URL paths:</p>
<pre style="background-color:#f9f9f9; padding:10px; border-radius:5px;">
app/(auth)/login.tsx     → /login
app/(auth)/register.tsx  → /register
</pre>

<hr>
<h3>9.6 Layout Files</h3>
<p>Layouts wrap child pages with shared UI components:</p>
<ul>
  <li>File naming: <code>layout.tsx</code> or <code>_layout.tsx</code></li>
  <li>Can be nested for nested routes</li>
  <li>Reduces duplication and keeps UI consistent</li>
</ul>
<p><b>Example Layout:</b></p>
<pre style="background-color:#f9f9f9; padding:10px; border-radius:5px;">
app/(auth)/_layout.tsx
export default function AuthLayout({ children }) {
  return (
    &lt;View style={{ flex:1, padding:20 }}&gt;
      &lt;Header /&gt;
      {children}
    &lt;/View&gt;
  );
}
</pre>

<hr>
<h3>9.7 Linking & Navigation</h3>
<p>Navigate programmatically using the <code>useRouter</code> hook:</p>
<pre style="background-color:#f9f9f9; padding:10px; border-radius:5px;">
import { useRouter } from 'expo-router';
const router = useRouter();

router.push('/home');      // Navigate to /home
router.replace('/login');  // Replace current route
router.back();             // Go back
</pre>

<hr>
<h3>9.8 Best Practices</h3>
<ul>
  <li>Use route groups to separate public/private pages</li>
  <li>Keep layouts reusable to reduce duplication</li>
  <li>Use dynamic routes for pages with parameters (profile, product pages)</li>
  <li>Organize nested routes into folders for clarity and maintainability</li>
</ul>

<hr>
<h3>9.9 Visual Overview</h3>
<p align="center">
  <img src="https://raw.githubusercontent.com/shamodhas-ijse-teaching/file-hosting/main/images/expo_router_structure.png" 
       alt="Expo Router Folder Structure" 
       style="width:80%; max-width:1000px; border:1px solid #ccc; padding:10px; box-shadow:0 4px 8px rgba(0,0,0,0.1); border-radius:5px;">
  <br>
  <b>Figure: Example Folder Structure for Expo Router</b>
</p>

<hr>
<h3>9.10 Summary</h3>
<p>Expo Router simplifies navigation by mapping file/folder structures directly to routes. With <b>dynamic routes</b>, <b>nested routes</b>, <b>route groups</b>, and <b>layouts</b>, you can build scalable and maintainable navigation systems in React Native apps. Understanding key files like <code>index.tsx</code>, <code>_layout.tsx</code>, and <code>[param].tsx</code> is essential for effective routing.</p>


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
