<template>
  <Layout>
    <template v-slot:header>
      <header>
        <h1>Dashboard</h1>
        <button
          type="button"
        >
          + Add Employee
        </button>
      </header>
    </template>
    <Tabs>
      <Tab
        v-for="tab in tabs"
        :key="tab.name"
        :title="tab.name"
      >
        <UserCard
          v-for="user in filteredUsers(tab.filter)"
          :key="user.id"
          :user="user"
          @delete="deleteUser(user.id)"
        />
      </Tab>
    </Tabs>
  </Layout>
</template>

<script>
import api from '@/api/api';

import Layout from '@/layouts/Layout.vue';
import Tabs from '@/components/Tabs.vue';
import Tab from '@/components/Tab.vue';
import UserCard from '@/components/UserCard.vue';

export default {
  name: 'Dashboard',
  components: {
    Layout,
    UserCard,
    Tabs,
    Tab
  },
  data() {
    return {
      users: [],
      tabs: [
        { name: 'Employee List', filter: '' },
        { name: 'Architect', filter: 'Architect' },
        { name: 'Assistant', filter: 'Assistant' }
      ]
    };
  },
  async created() {
    this.users = await api.getUsers();
  },
  methods: {
    filteredUsers(filter) {
      if (!filter) return this.users;
      return this.users.filter(user => user.designation === filter);
    },
    async deleteUser(userId) {
      await api.deleteUser(userId);
      this.users = this.users.filter(user => user.id !== userId);
    }
  }
};
</script>

<style scoped lang="scss">
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
  }

  h1 {
    margin: 0;
  }

  button {
    padding: 15px;
    border: none;
    border-radius: $radius;
    color: white;
    font-weight: bold;
    background-color: $green;
    cursor: pointer;
  }
</style>
