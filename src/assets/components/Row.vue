<template>
  <div class="row mt-5">
    <slot>
      <div class="container text-center">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="spinner-border text-secondary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
