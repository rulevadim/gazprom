<template>
  <div class="user-card">
    <div class="user-card__id">{{ user.id }}</div>
    <div class="user-card__credentials">
      <img
        class="user-card__avatar"
        :src="user.avatar"
        alt="avatar"
      >
      <div>
        <div class="user-card__name">{{ user.name }}</div>
        <div class="user-card__email">{{ user.email }}</div>
      </div>
    </div>
    <div class="user-card__employee-code">{{ user.employeeCode }}</div>
    <div class="user-card__designation">{{ user.designation }}</div>
    <div class="user-card__phone">{{ user.phone }}</div>
    <div class="user-card__joining-date">{{ user.joiningDate | date }}</div>
    <button
      class="user-card__button"
      @click="$emit('delete')"
    >
      Delete
    </button>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
  .user-card {
    display: flex;
    align-items: center;
    background-color: $bg-card;
    border-radius: $radius;
    padding: 20px 50px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, .1);
    transition: box-shadow 250ms;

    & + & {
      margin-top: 15px;
    }

    &:hover {
      box-shadow: 0 5px 5px rgba(0, 0, 0, .1);
    }

    & > div {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      flex-basis: 0;
      font-size: 20px;
    }

    &__id {
      flex-basis: 50px !important;
      flex-grow: 0 !important;
      font-size: 20px;
      color: $text-gray;
    }

    &__credentials {
      margin-left: 50px;
      flex-basis: 100px !important;
      justify-content: flex-start !important;
    }

    &__avatar {
      display: block;
      width: 50px;
      height: 50px;
      margin-right: 30px;
      border-radius: 50%;
      background: url('/img/loader.gif') center / 50% no-repeat;
    }

    &__email {
      font-size: 16px;
    }
  }
</style>
