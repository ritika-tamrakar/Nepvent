<template>
  <div class="form-wrapper">
    <h3 class="form-header">Request Form</h3>
    <span class="close-btn">
      <fa :icon="['fa', 'xmark']" />
    </span>
    <form action="" class="form">
      <div class="inputs-wrapper">
        <div class="input-wrapper">
          <label for="name" class="input-title">Name</label>
          <input
            id="name"
            type="text"
            class="form-input"
            placeholder="Your Name"
          />
        </div>
        <div class="input-wrapper">
          <label for="name" class="input-title">Name</label>
          <input
            id="name"
            type="text"
            class="form-input"
            placeholder="Your Name"
          />
        </div>
        <div class="input-wrapper">
          <label for="name" class="input-title">Name</label>
          <input
            id="name"
            type="text"
            class="form-input"
            placeholder="Your Name"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.form-wrapper {
  border-radius: 25px;
  margin: auto;
  position: relative;
  min-width: 250px;
  max-width: 500px;
  width: fit-content;
  background-color: #fff;
  padding: 1.6rem;
  @include mq(md) {
    padding: 1.6rem 3.5rem;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  @include color($text, dark-800);
  .form-header {
    font-weight: 500;
    font-size: 18px;
    line-height: 148.1%;
    letter-spacing: -0.03em;
    position: relative;
    width: fit-content;

    &::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 3px;
      border-radius: 10px;
      background-color: aqua;
      bottom: -5px;
      left: 0;
    }
  }

  .close-btn {
    position: absolute;

    top: 1rem;
    right: 1rem;
    font-size: 1.2rem;
    @include color($text, dark-600);
  }
  .inputs-wrapper {
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    .input-wrapper {
      display: flex;
      flex-direction: column;
      gap: 5px;
      width: fit-content;

      .input-title {
        font-weight: 400;
        font-size: 14px;
        line-height: 148.1%;
      }

      .form-input {
        --light-gray-46: rgba(150, 161, 164, 0.46);
        padding: 0.6rem 1rem;
        width: 200px;

        @include mq(xs) {
          width: 250px;
        }
        border: 1px solid var(--light-gray-46);
        border-radius: 7px;
        background-color: #fff;

        &::placeholder {
          font-weight: 500;
          font-size: 14px;
          line-height: 148.1%;
          color: var(--light-gray-46);
        }
      }
    }
  }
}
</style>
