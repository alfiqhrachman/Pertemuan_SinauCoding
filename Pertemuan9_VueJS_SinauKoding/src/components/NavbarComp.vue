<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <div class="nav_content">
      <ul>
        <li>
          <RouterLink class="nav-link" to="/">Chart</RouterLink>
        </li>
        <li>
          <RouterLink class="nav-link" to="/log">Log</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>