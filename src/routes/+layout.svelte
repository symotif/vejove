<script>
    import "../app.css";
    import { goto } from '$app/navigation';

  </script>

  <div class="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-transparent">
    <!-- Profile button -->
    <button class="px-4 py-2 rounded-lg focus:outline-none" on:click={() => goto('/profile')}>👤</button>
    
    <h1 class="text-green-800 font-bold">vejove</h1>
    
    <!-- Right side buttons -->
    <div class="flex items-center">
      <!-- Notification bell -->
      <button class="px-4 py-2 rounded-lg mr-4 focus:outline-none" on:click={() => goto('/notifications')} aria-label="Notifications">🛎️</button>
  
      <!-- Emergency button -->
      <button class="px-4 py-2 rounded-lg focus:outline-none" on:click={() => goto('/emergency')} aria-label="Emergency">⚠️</button>
    </div>
  </div>

  <slot />

  <div class="fixed bottom-0 left-0 w-full flex justify-between items-center p-4 bg-white shadow-lg bottom-app-bar">
    <button class="px-4 py-2 rounded-lg focus:outline-none" on:click={() => goto('./learn')}>🧑‍🏫</button>
    <button class="px-4 py-2 rounded-lg focus:outline-none" on:click={() => goto('/log')}>📝</button>
    <button class="px-4 py-2 rounded-lg focus:outline-none" on:click={() => goto('/')}>🏠</button>
    <button class="px-4 py-2 rounded-lg focus:outline-none" on:click={() => goto('/zen')}>🪷</button>
    <button class="px-4 py-2 rounded-lg focus:outline-none" on:click={() => goto('/chat')}>💬</button>
  </div>

  <style lang="postcss">
    /* Optional: Customize the colors and styles to fit your design */
    .bottom-app-bar {
      background-color: #333;
      color: #fff;
    }
  
    .bottom-app-bar button {
      color: #fff;
      transition: all 0.3s ease;
    }
  
    .bottom-app-bar button:hover {
      color: #ffd700; /* Change to your desired hover color */
    }
  </style>