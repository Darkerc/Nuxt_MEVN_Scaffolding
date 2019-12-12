<template>
  <div>
    <logo />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import Logo from '~/components/Logo.vue';

@Component({
  components: {
    Logo,
  },
})
export default class Index extends Vue {
  public async mounted() {
    // @ts-ignore: Unreachable code error
    const { data } = await this.$axios.post('/api/Example2');
    console.log(data);
  }
}
</script>

<style>
</style>
